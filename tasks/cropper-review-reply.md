# Ответ на review плана `whimsical-twirling-sifakis.md`

Все замечания проанализированы. Ниже — статус каждого, принятое решение и правки в плане.

---

## P1. Parser scope неполный

**Статус:** Принято. Scope расширен.

### Полный перечень затронутых шаблонов

После аудита всех директорий (`casual`, `default`, `react`, `amp`, `zen`) — вот полный список файлов, где используется `img()` для gallery/image и куда нужно пробросить `crop`:

| Файл | Использует `img()` | Действие |
|------|-------------------|----------|
| `casual/gallery.blade.php` | Да, во всех layout-вариантах + single-item маппинг в image | Добавить `crop:` |
| `casual/image.blade.php` | Да (src, srcset, lightbox) | Добавить `crop:` |
| `default/gallery.blade.php` | Да | Добавить `crop:` |
| `default/image.blade.php` | Да (responsive) | Добавить `crop:` |
| `default/image-light.blade.php` | Да (lightbox full-size, preview) | Добавить `crop:` |
| `default/image-responsive.blade.php` | Нужна проверка, но скорее всего использует enrichImageData | Добавить `crop:` |
| `react/image.blade.php` | Да (srcset, url, galleryUrl) — JSON output | Добавить `crop:` |
| `react/gallery.blade.php` | Да (`img($url, 500)`, `img($url, 1600, 1200)`) — JSON output | Добавить `crop:` |
| `amp/image.blade.php` | Да (`img(url: $imageUrl, width:...)`) | Добавить `crop:` |
| `amp/gallery.blade.php` | Да для grid (`img($src, 400)`), **нет** для carousel (raw `$src`) | Добавить `crop:` где есть `img()` |
| `zen/image.blade.php` | Да (`img($data['imageUrl'],...)`) | Добавить `crop:` |
| `zen/gallery.blade.php` | Нет `img()` (использует raw `$src` и `media()`) | **Нет изменений** |

### `LaravelEditorJsParser.php`

1. **Блок подготовки image** (строки 212-254): формирует `$viewData` с `imageUrl`, `originalWidth` и т.д. Нужно:
   - Передавать `crop` из `$viewData['file']['crop'] ?? null` → `$viewData['crop']`
   - При наличии `crop` + `cropped_width`/`cropped_height` — использовать их для aspect ratio

2. **`enrichImageData()`** (строки 341-397): fallback srcset через `$imageService->url()`. Нужно пробросить `crop` в вызов `$imageService->url($original, $w, $h, $mode, crop: $crop)`. Но тут вопрос: srcset для кропнутого изображения должен кропить + ресайзить на каждый размер? **Да**, это корректное поведение — crop фиксированный, ресайз адаптивный.

3. **Single-item маппинг** в `casual/gallery.blade.php` (строка 28-45): добавить `'crop' => $item['crop'] ?? null` в `$data`.

### Image block crop support

Image tool скрыт из toolbox (`toolbox: false`), все изображения добавляются через gallery. **Однако** для полноценной поддержки нужно добавить `crop` в config парсера и для `image` блока — на случай если crop данные попадут туда через маппинг (single gallery item → image).

**Решение:** добавить `crop` field в schema `image` блока тоже (опционально, `required: false`).

---

## P1. `cropped_width` и `cropped_height`

**Статус:** Принято. Добавляем.

### Контракт

При подтверждении crop в модале, JS считает:
```
cropped_width  = round((x2 - x1) * original_width)
cropped_height = round((y2 - y1) * original_height)
```

Хранятся отдельно от `width`/`height` (оригинальные размеры не затираются).

### Затронутые места

| Слой | Где добавить |
|------|-------------|
| TS types | `GalleryItemData.croppedWidth?: number`, `croppedHeight?: number` |
| save/load | `item.dataset.croppedWidth`, `getItemsData()` |
| crop-modal | Вычисляем при подтверждении, возвращаем вместе с crop string |
| Parser config | `cropped_width: integer, required: false`, `cropped_height: integer, required: false` в gallery items |
| Blade templates | Для aspect-ratio: если есть `crop`, использовать `cropped_width / cropped_height` вместо `width / height` |
| Image block schema | Аналогично gallery items |

### Использование в шаблонах

```php
// Определяем эффективные размеры
$effectiveWidth = $item['cropped_width'] ?? $item['width'] ?? null;
$effectiveHeight = $item['cropped_height'] ?? $item['height'] ?? null;
// Используем для aspect-ratio, responsive sizes
```

---

## P1. Контракт пересборки уже трансформированного media URL

**Статус:** Принято, но проблема **не актуальна в нашем data flow**.

### Анализ

Изучен `ImageService::getFixedUrl()` (строки 80-131):
- Для CDN URL (`s3.rusonyxcloud.ru`): извлекает `bucket/path` → shortUrl
- Для allowed hosts (`ixbt.com`): возвращает URL as-is
- Для **media.ixbt.site** URL: не матчится ни один паттерн → `resizeable: false`

**Ключевой инвариант нашего data flow:**

1. Gallery `url` = **всегда оригинальный S3/CDN URL** (из upload response)
2. `img()` **всегда получает оригинальный URL**, не imagor URL
3. imagor URL — это **output** `img()`, никогда не input
4. `crop` хранится отдельным полем, не внутри URL

Поэтому **пересборка уже трансформированного URL не нужна** — мы никогда не передаём imagor URL обратно в `img()`.

### Фиксация контракта

Документируем в плане:

> **Контракт:** `img()` и `ImageService::url()` принимают только оригинальные URL (S3 CDN, allowed hosts). imagor/media URL **никогда** не передаются в `img()`. Crop хранится как отдельное поле данных, а не как часть URL. Если нужна пересборка в другой размер — передаётся тот же оригинальный URL + тот же crop + новые width/height.

---

## P2. Структурный API для crop вместо строки

**Статус:** Частично принято.

### Решение

На **PHP стороне** (ImageService) принимаем `?string $crop = null` — imagor-строку. Причина:
- Строка `"0.1234x0.2345:0.8765x0.7654"` — это непосредственно URL-сегмент, не требующий трансформации
- Парсинг в 4 float'а для обратной сборки в ту же строку — overhead без выигрыша
- crop строка — **trusted data** из UI, аналогично width/height

На **JS стороне** CropModal возвращает структурированные данные `{ crop: string, croppedWidth: number, croppedHeight: number }`, а не просто строку.

На **Blade стороне** crop передаётся как `$item['crop'] ?? null` (string|null) — без regex валидации, т.к. данные прошли parser validation.

### Валидация

Единственная валидация — **в parser config** (schema level). Формат: `string`, `required: false`. Дополнительная regex-проверка в `ImageService` убрана (crop из UI доверенный). Если crop bitой — imagor вернёт ошибку или оригинал, что безопасно.

---

## P1. Preview URL в JS дублирует серверную логику

**Статус:** Принято. Пересмотрен подход.

### Проблема

JS `buildPreviewUrl()` вида `${mediaHost}/unsafe/${crop}/fit-in/${width}x0/${url}` не учитывает нормализацию URL через `getFixedUrl()` (CDN hosts → bucket/path).

### Решение: `imagorPath` в upload response

Добавляем `imagor_path` в upload response на PHP стороне. Сейчас upload endpoint (`EditorJsMedialibraryController`) возвращает:
```json
{ "success": 1, "file": { "url": "https://s3.rusonyxcloud.ru/ixbt-data/...", "width": ..., "height": ... } }
```

Добавляем:
```json
{ "success": 1, "file": { "url": "...", "imagorPath": "ixbt-data/images/foo.jpg", "width": ..., "height": ... } }
```

`imagorPath` = результат `ImageService::getFixedUrl($url)['shortUrl']`.

### JS preview builder

```typescript
// imagorPath хранится в GalleryItemData (из upload response)
buildPreviewUrl(imagorPath: string, crop: string, width = 600): string {
  if (!this.config.mediaHost || !imagorPath) return originalUrl;
  const segments = ['unsafe'];
  if (crop) segments.push(crop);
  segments.push('fit-in', `${width}x0`, imagorPath);
  return `${this.config.mediaHost}/${segments.join('/')}`;
}
```

Это **строго соответствует** серверной логике:
1. `unsafe` (без подписи)
2. `crop` (если есть)
3. `fit-in/{W}x{H}`
4. `imagorPath` (нормализованный bucket/path)

### Обратная совместимость

Для **существующих данных** (без `imagorPath`) — fallback на raw `url`. Preview будет менее точным (imagor может не распознать полный CDN URL), но это edge case для старых данных. Новые загрузки всегда получат `imagorPath`.

### Типы

```typescript
export interface GalleryItemData {
  url: string;
  imagorPath?: string;  // normalized path for imagor preview
  crop?: string;
  croppedWidth?: number;
  croppedHeight?: number;
  // ...existing fields
}
```

---

## P2. Поставка пакета gallery-editorjs

**Статус:** Принято. Добавлено в план.

### Checklist

1. `cropperjs: ^1.6.2` → `dependencies` (не devDependencies) в `packages/gallery-editorjs/package.json`
2. `cd packages/gallery-editorjs && npm install` — обновить `package-lock.json`
3. `npm run build` — пересобрать `dist/gallery.umd.js`, `dist/gallery.mjs`, `dist/index.d.ts`
4. Проверить `dist/index.d.ts` — новые поля (`crop`, `croppedWidth`, `croppedHeight`, `imagorPath`, `mediaHost`) должны быть в types
5. Корневой `npm install` — обновить корневой lock (пакет подключён как `file:./packages/gallery-editorjs`)
6. `npm run build` (корневой) — пересобрать главный бандл `resources/dist/js/editorjs.js`
7. В ixbtadmin: `composer update ixbtcom/filament-editorjs && php artisan filament:assets`

---

## P2. nginx rewrites для short form URL с crop

**Статус:** Принято. Добавлен verification item.

### Анализ `media-rewrites.conf`

Изучен файл `/Users/mikhailpanyushkin/code/kubernetes/imgproxy/nginx/snippets/media-rewrites.conf`. Цепочка rewrite:

1. Добавление `/unsafe/` если нет (строка 3)
2. `https:/` → `https://` (строка 6)
3. `jpeg|webp|avif` → `filters:format(...)` (строка 9)
4. Нормализация CDN хостов (строки 17-23)
5. **Относительный bucket → абсолютный URL** (строка 26): `/(ixbt-data|...)/(.*)` → `/https://s3.rusonyxcloud.ru/$2/$3`

Для URL с crop: `/unsafe/0.2x0.1:0.7x0.9/fit-in/600x400/ixbt-data/images/foo.jpg`
- Правило 1: `/unsafe/` уже есть → skip
- Правило 5: матчит `ixbt-data` в пути → преобразует в абсолютный URL

**Вывод:** текущие rewrites **должны работать** с crop-сегментом, т.к. regex матчит bucket name в произвольной позиции пути. Но требуется **практическая верификация**.

### Verification item

```bash
# Проверить через curl, что imagor корректно обрабатывает crop + resize
curl -I "https://media.ixbt.site/unsafe/0.1x0.1:0.9x0.9/fit-in/600x400/ixbt-data/images/test.jpg"
# Ожидаем: 200 OK, Content-Type: image/*
```

---

## P2. Lifecycle CropModal

**Статус:** Принято. Детализирован.

### Полный lifecycle

```
open() → создать overlay + img + cropper → [user interaction] → apply/cancel/reset → close()
```

### Контракт

```typescript
class CropModal {
  private overlay: HTMLElement | null = null;
  private cropper: Cropper | null = null;
  private escHandler: ((e: KeyboardEvent) => void) | null = null;
  private resolvePromise: ((result: CropResult | null) => void) | null = null;

  async open(imageUrl: string, existingCrop?: string): Promise<CropResult | null> {
    // 1. Если уже открыт — закрыть предыдущий (защита от двойного открытия)
    if (this.overlay) this.destroy();

    // 2. Создать overlay DOM
    // 3. Создать <img>, дождаться загрузки
    // 4. Инициализировать Cropper
    // 5. Если existingCrop — setData() для восстановления области
    // 6. Привязать Escape handler
    // 7. Вернуть Promise
  }

  private close(result: CropResult | null): void {
    // 1. Resolve promise
    // 2. destroy()
  }

  destroy(): void {
    // 1. cropper.destroy() — обязательно, иначе утечка canvas
    // 2. Удалить overlay из DOM
    // 3. Удалить Escape listener
    // 4. Обнулить все ссылки (overlay, cropper, escHandler, resolvePromise)
  }
}

interface CropResult {
  crop: string;           // "AxB:CxD" или "" для сброса
  croppedWidth: number;   // пиксели
  croppedHeight: number;  // пиксели
}
```

### Гарантии

- `destroy()` вызывается **при каждом закрытии** (apply, cancel, escape, backdrop click)
- Повторный `open()` безопасен — `destroy()` вызывается первым
- Нет утечек: DOM очищен, listeners удалены, Cropper instance destroyed
- Backdrop click → cancel (resolve null)

---

## P2. Initial render / reset / readOnly

**Статус:** Принято. Добавлено.

### Правки в UI

1. **Initial render** (`addItem()` при загрузке сохранённых данных):
   ```typescript
   // Если есть crop + imagorPath → строить preview URL
   if (data.crop && data.imagorPath) {
     img.src = this.buildPreviewUrl(data.imagorPath, data.crop);
     item.classList.add('gallery-tool__item--cropped');
   } else {
     img.src = data.url;
   }
   ```

2. **После fillLoadingItem()** — аналогично, но crop не применяется к свежезагруженным (нет crop данных).

3. **Reset crop** → удалить `dataset.crop`, `dataset.croppedWidth`, `dataset.croppedHeight`, снять CSS-класс `--cropped`, вернуть `img.src = data.url` (оригинал).

4. **Reset в данных**: при сбросе crop — `crop` поле **удаляется** из данных (не сохраняется пустая строка). В `getItemsData()`:
   ```typescript
   const crop = el.dataset.crop || undefined;
   // undefined → не включается в JSON при save
   ```

5. **readOnly**: в `createItemControls()` проверка уже есть (`if (!this.readOnly)`). Crop кнопка внутри controls → автоматически скрыта в readOnly. Модал не откроется.

---

## Итоговые правки в плане

### Добавлено в план:

1. **Parser scope**: +6 шаблонов (react/image, react/gallery, amp/image, amp/gallery, zen/image, default/image-light), + `LaravelEditorJsParser.php` (enrichImageData), + image block schema
2. **`cropped_width`/`cropped_height`**: в TS types, save/load, parser config, шаблоны
3. **`imagorPath`**: в upload response, TS types, save/load, JS preview builder — единый контракт с сервером
4. **Контракт**: `img()` принимает только оригинальные URL, crop отдельным полем, никогда не imagor URL
5. **Package delivery**: npm install, build dist, update lockfiles, update ixbtadmin
6. **nginx verification**: curl-тест с crop-сегментом
7. **CropModal lifecycle**: destroy(), cleanup DOM/listeners, re-open safety
8. **Initial render**: preview из crop при загрузке, reset полный (удаление поля), readOnly
9. **Upload endpoint**: добавить `imagorPath` в response (`EditorJsMedialibraryController`)

### Убрано:

- Regex-валидация crop в `ImageService` (доверенные данные из UI)
- Пустая строка при reset (вместо `''` → `undefined` / отсутствие поля)

---

## Полный перечень файлов (обновлённый)

| # | Файл | Действие |
|---|------|----------|
| 1 | `common/src/Services/ImageService.php` | Добавить `$crop` перед resize |
| 2 | `common/src/helpers.php` | Добавить `$crop` в `img()` |
| 3 | `filament-editorjs/src/Http/Controllers/EditorJsMedialibraryController.php` | Добавить `imagorPath` в upload response |
| 4 | `filament-editorjs/packages/gallery-editorjs/package.json` | `cropperjs: ^1.6.2` |
| 5 | `filament-editorjs/packages/gallery-editorjs/src/types/types.ts` | `crop`, `croppedWidth`, `croppedHeight`, `imagorPath`, `mediaHost` |
| 6 | `filament-editorjs/packages/gallery-editorjs/src/crop-modal.ts` | **Новый** — модал с cropper.js |
| 7 | `filament-editorjs/packages/gallery-editorjs/src/ui.ts` | Кнопка crop, data-crop, preview URL, initial render, reset |
| 8 | `filament-editorjs/packages/gallery-editorjs/src/index.ts` | handleCropImage, CropModal lifecycle |
| 9 | `filament-editorjs/packages/gallery-editorjs/src/index.css` | Стили модала, кнопки, индикатора |
| 10 | `filament-editorjs/resources/js/editorjs.js` | mediaHost config, i18n |
| 11 | `laravel-editorjs-parser/config/laravel-editorjs-parser.php` | `crop`, `cropped_width`, `cropped_height` в gallery + image schema |
| 12 | `laravel-editorjs-parser/src/LaravelEditorJsParser.php` | Пробросить crop в viewData, enrichImageData |
| 13 | `laravel-editorjs-parser/resources/views/casual/gallery.blade.php` | `crop:` в img() |
| 14 | `laravel-editorjs-parser/resources/views/casual/image.blade.php` | `crop:` в img() |
| 15 | `laravel-editorjs-parser/resources/views/default/gallery.blade.php` | `crop:` в img() |
| 16 | `laravel-editorjs-parser/resources/views/default/image.blade.php` | `crop:` в img() |
| 17 | `laravel-editorjs-parser/resources/views/default/image-light.blade.php` | `crop:` в img() |
| 18 | `laravel-editorjs-parser/resources/views/react/image.blade.php` | `crop:` в img() |
| 19 | `laravel-editorjs-parser/resources/views/react/gallery.blade.php` | `crop:` в img() |
| 20 | `laravel-editorjs-parser/resources/views/amp/image.blade.php` | `crop:` в img() |
| 21 | `laravel-editorjs-parser/resources/views/amp/gallery.blade.php` | `crop:` в img() (grid) |
| 22 | `laravel-editorjs-parser/resources/views/zen/image.blade.php` | `crop:` в img() |

**Не затронуты:**
- `zen/gallery.blade.php` — не использует `img()` (raw URL + `media()`)
- `default/image-responsive.blade.php` — использует `enrichImageData`, правки на уровне PHP

---

## Verification checklist (расширенный)

1. **Crop**: добавить изображение → crop → preview корректный
2. **Re-crop**: crop → изменить → preview обновился, оригинал не потерян
3. **Reset**: crop → "Сбросить" → preview = оригинал, поле `crop` удалено из данных
4. **Save/Load**: сохранить → перезагрузить → crop восстановлен, preview корректный
5. **readOnly**: кнопка crop не видна, модал не открывается
6. **Rebuild URL**: `img($url, 600, 400, 'resize', crop: '0.1x0.1:0.9x0.9')` → `media.ixbt.site/unsafe/0.1x0.1:0.9x0.9/fit-in/600x400/{imagorPath}`
7. **nginx**: `curl -I "https://media.ixbt.site/unsafe/0.1x0.1:0.9x0.9/fit-in/600x400/ixbt-data/..."` → 200 OK
8. **Parser casual**: crop+resize в grid/carousel/masonry, single item → image template
9. **Parser default**: crop+resize, image-light lightbox
10. **Parser react**: crop в JSON output (thumbnailUrl, galleryUrl, url)
11. **Parser amp**: crop в grid img()
12. **Parser zen**: crop в image img()
13. **Cover/srcset**: кропнутое изображение — srcset строится с crop, aspect-ratio из cropped dimensions
14. **Lightbox download**: скачивание = оригинал **без** crop (`optimize: false`)
