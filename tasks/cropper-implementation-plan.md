# Crop Implementation Plan — Detailed (v3.1)

## Overview

Добавляем crop-функциональность в gallery-editorjs: кнопка crop на каждом изображении → модальное окно с cropper.js → координаты в формате imagor (float 0-1) сохраняются в block data → `img()` хелпер строит URL с crop перед resize → parser templates рендерят кропнутые изображения. 23 файла, 3 репозитория (common, filament-editorjs, laravel-editorjs-parser).

---

## Группа A: PHP Backend (common)

### Файл A1: `common/src/Services/ImageService.php`

**Изменяемая функция:**

`url(?string $url, ?int $width, ?int $height, bool|string|null $smartcrop, ..., ?string $crop = null): ?string`
— Добавить параметр `$crop`. Инициализировать `$settingsArray = []` до блока `if ($width || $height)`. Если `$crop` не null — `$settingsArray[] = $crop`. Затем существующий блок с resize/smart/fit-in дополняет массив (не перезаписывает). Блок `else { $settingsArray = ['opti'] }` меняется на `array_merge($settingsArray, ['opti'])` для сохранения crop.

**Конкретные изменения (строки 133-177):**
1. Строка 133: добавить `?string $crop = null` в сигнатуру
2. После строки 144 (`$shortUrl = ...`): вставить `$settingsArray = []; if ($crop) { $settingsArray[] = $crop; }`
3. Строка 146 (`if ($width || $height)`): убрать `$settingsArray[] =` → `$settingsArray[] =` (append, не создание нового)
4. Строка 151: `$settingsArray = ['fit-in']` → `$settingsArray[] = 'fit-in'`
5. Строка 155-157: `$settingsArray = ['opti']` → `$settingsArray = array_merge($settingsArray, ['opti'])`

---

### Файл A2: `common/src/helpers.php`

**Изменяемая функция:**

`img(?string $url, ..., ?string $crop = null): ?string`
— Добавить `$crop` параметр последним. Пробросить через named argument `crop: $crop` в `app('imageService')->url()`.

**Конкретные изменения (строки 237-253):**
1. Строка 246: добавить `,` после `bool $optimize = true`
2. После строки 246: добавить `?string $crop = null`
3. Строка 251: добавить `, crop: $crop` в вызов `app('imageService')->url()`

---

### Тесты группы A

| Тест | Что проверяет |
|------|--------------|
| `test_img_without_crop_unchanged` | Существующие вызовы без crop не меняют поведение |
| `test_img_with_crop_and_resize` | crop + fit-in: URL = `unsafe/{crop}/fit-in/{WxH}/{path}` |
| `test_img_with_crop_and_smart` | crop + smart: URL = `unsafe/{crop}/{WxH}/smart/{path}` |
| `test_img_with_crop_no_dimensions` | crop без размеров: URL = `unsafe/{crop}/opti/{path}` |
| `test_img_with_crop_and_format` | crop + формат: URL содержит crop перед форматом |
| `test_img_crop_null_ignored` | `crop: null` — URL без crop сегмента |

---

## Группа B: Upload Endpoint (filament-editorjs)

### Файл B1: `filament-editorjs/src/Http/Controllers/EditorJsMedialibraryController.php`

**Изменяемая функция:** метод, формирующий upload response (найти конкретный метод при реализации — скорее всего `store()` или `upload()`).

Добавить в response `file` объект:
```php
'imagor_path' => app('imageService')->getFixedUrl($url)['shortUrl'] ?? $url,
```

**Одно изменение:** 1 строка в массиве response.

---

## Группа C: Gallery Plugin TypeScript (packages/gallery-editorjs)

### Файл C1: `packages/gallery-editorjs/package.json`

Добавить `"cropperjs": "^1.6.2"` в `dependencies`.

---

### Файл C2: `packages/gallery-editorjs/src/types/types.ts`

**Изменяемые интерфейсы:**

`GalleryItemData` — добавить 4 опциональных поля:
- `imagorPath?: string` — нормализованный imagor path из upload response
- `crop?: string` — imagor crop string "AxB:CxD"
- `croppedWidth?: number` — ширина crop region в px
- `croppedHeight?: number` — высота crop region в px

`GalleryConfig` — добавить 1 поле:
- `mediaHost?: string` — base URL imagor (e.g. 'https://media.ixbt.site')

`UploadResponseFormat.file` — добавить 1 поле:
- `imagor_path?: string` — snake_case из PHP API response

---

### Файл C3: `packages/gallery-editorjs/src/crop-modal.ts` (НОВЫЙ)

**Экспортируемый интерфейс:**

`CropResult { crop: string; croppedWidth: number; croppedHeight: number }`
— Результат crop операции. `crop` = imagor string или пустая строка (reset).

**Экспортируемый класс `CropModal`:**

**Приватные поля:**
- `overlay: HTMLElement | null` — DOM overlay
- `cropper: Cropper | null` — экземпляр cropperjs
- `escHandler: ((e: KeyboardEvent) => void) | null` — для cleanup
- `resolvePromise: ((result: CropResult | null) => void) | null` — Promise resolver

**Публичные методы:**

`open(imageUrl: string, existingCrop?: string): Promise<CropResult | null>`
— Создаёт fullscreen overlay с `<img src=imageUrl>`, инициализирует Cropper.js, восстанавливает existingCrop через `setData()`, привязывает кнопки и Escape. Возвращает CropResult при "Применить", null при "Отмена"/"Escape"/"backdrop click".

`destroy(): void`
— Уничтожает Cropper instance, удаляет overlay из DOM, снимает Escape listener, обнуляет все ссылки. Вызывается при каждом закрытии.

**Приватные методы:**

`createOverlay(): HTMLElement`
— Строит DOM: overlay > container > img-wrapper + actions-bar. Fixed positioning, z-index 10000, тёмный фон.

`createActions(): HTMLElement`
— Три кнопки: "Применить" (primary), "Сбросить" (danger), "Отмена" (default). Стилизация через `--ej-*` CSS tokens.

`parseCropString(crop: string): { x1: number; y1: number; x2: number; y2: number } | null`
— Парсит "0.1234x0.2345:0.8765x0.7654" в 4 float координаты. Возвращает null если формат невалидный.

`cropDataToString(data: Cropper.Data, naturalWidth: number, naturalHeight: number): CropResult`
— Конвертирует Cropper.js getData() (pixels) в imagor string (float 0-1) + croppedWidth/croppedHeight.

`restoreCropArea(crop: string, naturalWidth: number, naturalHeight: number): void`
— Конвертирует imagor string обратно в pixels и вызывает `cropper.setData()`.

`close(result: CropResult | null): void`
— Resolve Promise, вызвать destroy().

---

### Файл C4: `packages/gallery-editorjs/src/ui.ts`

**Изменяемые секции:**

`UiParams` interface — добавить callback:
```typescript
onCropImage: (item: HTMLElement) => void;
```

Конструктор — сохранить `this.onCropImage`.

**Изменяемые методы:**

`addItem(data: GalleryItemData): HTMLElement` (строка 143)
— После строки 196 (`item.dataset.height = ...`): сохранить `data.crop`, `data.imagorPath`, `data.croppedWidth`, `data.croppedHeight` в dataset. Перед `imageContainer.appendChild(img)` (строка 170): если `data.crop && data.imagorPath` → `img.src = buildPreviewUrl(...)` + добавить CSS класс `--cropped` на item.

`getItemsData(): GalleryItemData[]` (строка 289)
— В строке 307: читать `el.dataset.crop`, `el.dataset.imagorPath`, `el.dataset.croppedWidth`, `el.dataset.croppedHeight` и включать в push.

`createItemControls(item: HTMLElement): HTMLElement` (строка 451)
— Между `moveRightBtn` (строка 478-480) и `controls.appendChild(moveLeftBtn)` (строка 482): создать `cropBtn` с SVG crop icon, привязать `this.onCropImage(item)`.

**Новые методы:**

`buildPreviewUrl(imagorPath: string, crop: string, maxWidth?: number): string`
— Строит imagor preview URL: `${mediaHost}/unsafe/${crop}/fit-in/${maxWidth}x0/${imagorPath}`. Fallback: возвращает пустую строку если нет mediaHost.

`updateItemAfterCrop(item: HTMLElement, result: CropResult | null): void`
— Обновляет dataset, CSS класс, img.src после crop/reset. При reset — удаляет crop данные и возвращает оригинальный URL.

**CSS классы (getter):**
- `itemCrop: 'gallery-tool__item-crop'` — кнопка кропа
- `itemCropped: 'gallery-tool__item--cropped'` — модификатор на item

---

### Файл C5: `packages/gallery-editorjs/src/index.ts`

**Новый приватный член:**
- `cropModal: CropModal`

**Изменяемые методы:**

`constructor` (строка 52)
— Создать `this.cropModal = new CropModal()`. Передать `onCropImage` в Ui params. Сохранить `mediaHost` из config.

`onUpload(response: UploadResponseFormat): void` (строка 289)
— В `itemData`: добавить `imagorPath: response.file.imagor_path`.

**Новые методы:**

`async handleCropImage(item: HTMLElement): Promise<void>`
— Достаёт `url` и `crop` из item.dataset. Открывает `this.cropModal.open(url, crop)`. Обрабатывает результат: null=отмена, crop=''=reset, crop=string=apply. Обновляет UI через `this.ui.updateItemAfterCrop()`. Вызывает `this.block.dispatchChange()`.

---

### Файл C6: `packages/gallery-editorjs/src/index.css`

**Новые CSS правила:**

`.gallery-tool__item-crop` — стиль кнопки crop в controls (32x32, иконка, transition)

`.gallery-tool__item--cropped` — визуальный индикатор crop (accent border-left или badge)

`.gallery-crop-modal` — fullscreen overlay (fixed, inset 0, z-index 10000, bg rgba(0,0,0,0.85), flex center)

`.gallery-crop-modal__container` — max-width 90vw, max-height 80vh, bg white, border-radius, overflow hidden

`.gallery-crop-modal__image` — max-width/height 100%, display block

`.gallery-crop-modal__actions` — flex row, gap, padding, justify-content center

`.gallery-crop-modal__btn` — base button style (--ej-* tokens, radius, transition)

`.gallery-crop-modal__btn--primary` — accent/primary color

`.gallery-crop-modal__btn--danger` — danger color для "Сбросить"

---

## Группа D: EditorJS Bundle Config

### Файл D1: `filament-editorjs/resources/js/editorjs.js`

**Изменяемая секция — gallery config (строки 324-337):**

Добавить `mediaHost: 'https://media.ixbt.site'` в config объект gallery tool.

**Изменяемая секция — i18n (строки 567-577):**

В `tools.gallery` добавить:
```javascript
'Crop image': 'Обрезать',
'Apply': 'Применить',
'Cancel': 'Отмена',
'Reset crop': 'Сбросить обрезку',
```

---

## Группа E: Parser Config & PHP (laravel-editorjs-parser)

### Файл E1: `laravel-editorjs-parser/config/laravel-editorjs-parser.php`

**Изменяемые секции:**

`gallery → items → - → data` (после `mime_type`, ~строка 558):
— 4 новых поля: `crop` (string), `croppedWidth` (integer), `croppedHeight` (integer), `imagorPath` (string). Все `required: false`.

`image → data` (в основном блоке image):
— 3 новых поля: `crop` (string), `croppedWidth` (integer), `croppedHeight` (integer). Все `required: false`.

---

### Файл E2: `laravel-editorjs-parser/src/LaravelEditorJsParser.php`

**Изменяемые методы:**

`blocksRender()` — блок image (строки 212-254):
— После строки 216: `$viewData['crop'] = $viewData['file']['crop'] ?? $viewData['crop'] ?? null;`

`enrichImageData(array &$data, ...)` (строки 341-397):
— После строки 365: `$crop = $data['crop'] ?? null;`
— Строка 377: `$u = $imageService->url($original, $w, $h, $mode, crop: $crop);`

`calculateImageDimensions(array $data, ...)` (строки 406-467):
— После строки 421: получить crop и effective dimensions:
  ```php
  $crop = $data['crop'] ?? $data['file']['crop'] ?? null;
  $effectiveWidth = $data['croppedWidth'] ?? $data['file']['croppedWidth'] ?? $originalWidth;
  $effectiveHeight = $data['croppedHeight'] ?? $data['file']['croppedHeight'] ?? $originalHeight;
  ```
— Строка 424: `$isSmallImage` от `$effectiveWidth`
— Строка 434: `$desktopWidth` от `$effectiveWidth`
— Строка 439: `$aspectRatio` от `$effectiveWidth / $effectiveHeight`
— Строка 464: `img($imageUrl, $desktopWidth, $maxDesktopHeight, crop: $crop)`
— Return array: добавить `'effectiveWidth'`, `'effectiveHeight'`, `'crop'`

---

## Группа F: Blade Templates (11 файлов)

### Паттерн изменения

Для каждого шаблона — одинаковый паттерн: каждый вызов `img($url, ...)` получает дополнительный named argument `crop: $item['crop'] ?? null` (или `$data['crop'] ?? null`). **Исключение:** `data-download-link` и ссылки на оригинал — **без** crop.

### Файл F1: `casual/gallery.blade.php`

**Количество правок:** ~12 вызовов img() + 1 маппинг single-item → image data
- Single-item маппинг (строка 28-45): добавить `'crop' => $item['crop'] ?? null`
- Carousel stage (строка 67): `img($firstItem['url'], 1600, 1200, crop: $firstItem['crop'] ?? null)`
- Carousel thumbnails: `img($item['url'], 240, 180, crop: $item['crop'] ?? null)`
- Grid items: `img($item['url'], $galleryThumbWidth, ..., crop: $item['crop'] ?? null)`
- Masonry items: аналогично
- Lightbox full-size: `crop: $item['crop'] ?? null`
- `data-download-link`: **НЕ** добавлять crop

### Файл F2: `casual/image.blade.php`

**Количество правок:** ~6 вызовов img()
- Lightbox href (строка 12): `crop: $data['crop'] ?? null`
- Main img src (строка 21): `crop: $data['crop'] ?? null`
- srcset foreach (строка 33): `crop: $data['crop'] ?? null`
- Small image src (строка 45): `crop: $data['crop'] ?? null`
- Small image srcset (строка 51-53): `crop: $data['crop'] ?? null`
- `data-download-link`: **НЕ** добавлять crop

### Файл F3: `default/gallery.blade.php` — аналогично F1
### Файл F4: `default/image.blade.php` — аналогично F2

### Файл F5: `default/image-light.blade.php`

**Количество правок:** 2 + effective dimensions
- `$dimensions['imageUrl']` уже содержит crop (из calculateImageDimensions)
- `data-original-width/height` — оригинальные, не effective
- aspect-ratio style: `$dimensions['effectiveWidth'] / $dimensions['effectiveHeight']`
- width/height атрибуты: `$dimensions['finalWidth/Height']` (уже пересчитаны от effective)

### Файл F6: `react/image.blade.php`

**Количество правок:** ~5 вызовов img() + 1 новое поле в JSON
- `url`: `img(..., crop: $data['crop'] ?? null)`
- `galleryUrl`: `crop: $data['crop'] ?? null`
- srcset loop: `crop: $data['crop'] ?? null`
- JSON: добавить `'crop' => $data['crop'] ?? null`

### Файл F7: `react/gallery.blade.php`

**Количество правок:** 2 вызова img() + 1 новое поле
- `thumbnailUrl`: `img($url, 500, crop: $item['crop'] ?? null)`
- `galleryUrl`: `img($url, 1600, 1200, crop: $item['crop'] ?? null)`
- JSON item: добавить `'crop' => $item['crop'] ?? null`

### Файл F8: `amp/image.blade.php`

**Количество правок:** 2 вызова img()
- Строка 34: `img(url: $imageUrl, width: $resultWidth, height: $resultHeight, crop: $data['crop'] ?? null)`
- Строка 37: аналогично

### Файл F9: `amp/gallery.blade.php`

**Количество правок:** 2 места
- Grid (строка 84): `img($src, 400, crop: $item['crop'] ?? null)`
- Carousel (строка 41): `src="{{ $src }}"` → `src="{{ img($src, 400, 300, crop: $item['crop'] ?? null) }}"`

### Файл F10: `zen/image.blade.php`

**Количество правок:** 1 вызов img()
- Строка 6: `img($data['imageUrl'], $data['width'], intdiv(...), false, crop: $data['crop'] ?? null)`

### Файл F11: `zen/gallery.blade.php`

**Количество правок:** 1 место
- Строка 11: `src="{{ $src }}"` → `src="{{ img($src, crop: $item['crop'] ?? null) }}"`

---

## Тесты

### PHP тесты (common)

| # | Тест | Поведение |
|---|------|-----------|
| 1 | `test_url_without_crop_generates_standard_url` | Без crop — URL как раньше |
| 2 | `test_url_with_crop_places_before_resize` | crop перед fit-in в URL path |
| 3 | `test_url_with_crop_and_smart_crop` | crop перед WxH/smart |
| 4 | `test_url_with_crop_only_no_dimensions` | crop + opti (нет размеров) |
| 5 | `test_url_with_crop_and_format` | crop перед fit-in перед format |
| 6 | `test_url_crop_null_has_no_effect` | null crop = стандартный URL |
| 7 | `test_img_helper_passes_crop_to_service` | `img()` пробрасывает crop |

### PHP тесты (laravel-editorjs-parser)

| # | Тест | Поведение |
|---|------|-----------|
| 8 | `test_gallery_schema_accepts_crop_fields` | Валидация пропускает crop/croppedWidth/croppedHeight |
| 9 | `test_gallery_schema_works_without_crop` | Старые данные без crop проходят валидацию |
| 10 | `test_image_schema_accepts_crop_field` | image block с crop проходит валидацию |
| 11 | `test_calculate_dimensions_with_crop` | effective dimensions пересчитаны от crop |
| 12 | `test_calculate_dimensions_without_crop` | Без crop — поведение не изменилось |
| 13 | `test_enrich_image_data_passes_crop_to_srcset` | srcset URLs содержат crop сегмент |

### JS тесты (gallery-editorjs — если есть test runner)

| # | Тест | Поведение |
|---|------|-----------|
| 14 | `CropModal.parseCropString parses valid string` | "0.1x0.2:0.8x0.9" → {x1:0.1, y1:0.2, x2:0.8, y2:0.9} |
| 15 | `CropModal.parseCropString returns null for invalid` | "invalid" → null |
| 16 | `CropModal.cropDataToString formats correctly` | pixels → "AxB:CxD" float string |
| 17 | `Ui.buildPreviewUrl constructs correct URL` | mediaHost + crop + fit-in + path |
| 18 | `Ui.buildPreviewUrl fallback without mediaHost` | Без mediaHost → пустая строка |
| 19 | `Ui.getItemsData includes crop fields` | dataset.crop → в returned data |
| 20 | `Ui.getItemsData omits undefined crop` | Нет crop → поле отсутствует |
| 21 | `GalleryTool.save includes crop in output` | Полный save/load roundtrip |

---

## Порядок реализации

**Фаза 1 — Backend (можно деплоить независимо):**
1. A1: ImageService.php — `$crop` параметр
2. A2: helpers.php — `img()` `$crop`
3. E1: Parser config — schema validation
4. E2: LaravelEditorJsParser.php — enrichImageData, calculateImageDimensions
5. Тесты 1-13

**Фаза 2 — Frontend (gallery plugin):**
6. C1: package.json — cropperjs dependency
7. C2: types.ts — новые поля
8. C3: crop-modal.ts — новый модуль
9. C4: ui.ts — кнопка, preview, data flow
10. C5: index.ts — handleCropImage, CropModal lifecycle
11. C6: index.css — стили
12. D1: editorjs.js — config, i18n

**Фаза 3 — Upload endpoint:**
13. B1: EditorJsMedialibraryController — imagorPath

**Фаза 4 — Templates:**
14. F1-F11: все 11 Blade-шаблонов

**Фаза 5 — Build & Deploy:**
15. Package delivery (npm install, build, lockfiles)
16. ixbtadmin update
17. nginx verification (curl test)

---

## Риски и mitigation

| Риск | Mitigation |
|------|-----------|
| cropperjs увеличит бандл на ~45KB gzip | Lazy import при открытии модала: `const { default: Cropper } = await import('cropperjs')` |
| CORS при загрузке оригинала в cropper | Cropper.js не требует CORS для отображения, только для getCroppedCanvas(). Мы используем getData() |
| Imagor не поддерживает float crop | Подтверждено: cshum/imagor README явно указывает float 0-1 support |
| nginx rewrite ломает crop segment | Проверено: regex матчит bucket name в произвольной позиции. Curl-тест при деплое |
| Старые данные без crop | Все новые поля optional, backward compatible |
