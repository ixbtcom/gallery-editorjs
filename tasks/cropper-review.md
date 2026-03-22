# Review плана `whimsical-twirling-sifakis.md`

План в целом идёт в правильную сторону: хранить `url` как оригинал, сохранять crop отдельно и применять manual crop до resize для `imagor` — это соответствует исходному требованию. Но в текущем виде план неполный и местами слишком оптимистичен: если реализовать его буквально, crop заработает только в части сценариев и легко разойдётся между EditorJS preview и server-side рендером.

## Findings

### P1. План неполно покрывает `laravel-editorjs-parser`

В плане перечислены только `casual/default` Blade-шаблоны и `gallery.items.*.crop` в конфиге парсера. Этого недостаточно.

Что ещё обязательно затронуть:

- `../laravel-editorjs-parser/src/LaravelEditorJsParser.php`
  - `getCoverImageBlock()` или эквивалентная логика gallery -> image: crop первого item должен сохраняться в cover-изображении.
  - `enrichImageData()`: fallback-ветка `srcset` сейчас строит URL через `ImageService::url($original, $w, $h, $mode)` и без crop будет рендерить responsive-версии без обрезки.
  - места, где image block подготавливается к шаблону, если crop будет поддержан и у standalone image.
- `../laravel-editorjs-parser/resources/views/react/gallery.blade.php`
- `../laravel-editorjs-parser/resources/views/react/image.blade.php`
- `../laravel-editorjs-parser/resources/views/amp/gallery.blade.php`
- `../laravel-editorjs-parser/resources/views/amp/image.blade.php`
- `../laravel-editorjs-parser/resources/views/zen/image.blade.php`
- при необходимости `../laravel-editorjs-parser/resources/views/default/image-light.blade.php`

Отдельно: если задача формулируется как "поддержать такое изображение во всех нужных блоках", то в конфиге парсера нужно предусмотреть crop не только у `gallery.items.*`, но и у обычного `image` блока.

### P1. План не фиксирует хранение `cropped_width` и `cropped_height`

Это важное дополнение к контракту данных.

Помимо:

- оригинальных `width` / `height`;
- `crop`;

нужно сохранять фактические размеры cropped region:

- `cropped_width`;
- `cropped_height`.

Причём:

- оригинальные размеры не перезаписываются;
- cropped dimensions считаются один раз в момент подтверждения crop;
- дальше они используются как metadata, чтобы не пересчитывать размеры cropped area на каждом рендере и при каждом rebuild URL.

Это должно быть отражено:

- в TS-типах `gallery-editorjs`;
- в save/load данных блока;
- в parser schema;
- в шаблонах/маппингах, если они опираются на aspect ratio и responsive размеры.

### P1. В плане не описан контракт пересборки уже трансформированного media URL

Это сейчас важнее, чем строгая валидация координат.

Требование звучит так: если в `img()` прилетает уже собранный imagor/media URL с manual crop и resize, helper должен уметь пересобрать его в новый размер так, чтобы ручной crop сохранился, а resize был пересчитан заново.

Сейчас в `../common/src/Services/ImageService.php` это не зафиксировано. Более того, текущий `getFixedUrl()` для `media.ixbt.site/.../ixbt-data/...` вырезает всё до bucket segment и тем самым при "пересборке" легко потеряет существующий crop segment.

То есть для примера вида:

`/unsafe/0.2x0.1:0.7x0.9/fit-in/1536x1920/jpeg/ixbt-data/...`

нужно явно решить, что должен сделать helper:

- отбросить все старые операции и собрать новый URL из original source + existing manual crop;
- или сохранить crop отдельно в явном поле и никогда не пытаться извлекать его из уже готового media URL.

Без этого контракт "crop сначала, resize потом, и можно пересобрать в другой размер" останется неформализованным.

### P2. Строгая строковая валидация crop не обязательна, но API лучше сделать структурным

Здесь, скорее, не стоит городить тяжёлые regex-проверки, если crop приходит из `cropperjs` и считается доверенным UI-данным.

Предпочтительнее сделать structured interface на PHP-стороне и собирать imagor-строку только в `ImageService`. Например:

- `crop: ['x1' => ..., 'y1' => ..., 'x2' => ..., 'y2' => ...]`;
- или отдельный именованный аргумент/DTO с четырьмя координатами.

Тогда вместо regex остаётся только простой boundary-level контракт:

- координаты передаются как числа;
- reset не приводит к сохранению пустого crop;
- если данные битые, достаточно получить "не показалось изображение", без сложной автопочинки на лету.

### P1. Preview URL в JS дублирует серверную логику и может разойтись с `ImageService`

`buildPreviewUrl(url, crop)` в виде `${mediaHost}/unsafe/${crop}/fit-in/${maxWidth}x0/${url}` слишком хрупок.

Почему это риск:

- серверный `ImageService` уже нормализует URL через `getFixedUrl()` и по-разному обрабатывает allowed hosts, CDN hosts и media host;
- JS-вариант не учитывает эту нормализацию и может дать другой URL, чем `img()`;
- если later server-side и editor-side начнут строить разные адреса, пользователь увидит один crop в редакторе и другой на фронте.

В плане нужно явно зафиксировать одно из двух:

- либо preview builder в JS строго повторяет контракт `ImageService`;
- либо источник preview URL приходит из backend/shared helper, а не собирается строкой вручную.

### P2. План не покрывает поставку пакета `gallery-editorjs`

Для пакета недостаточно перечислить изменения в `src/`.

Нужно добавить в план:

- `cropperjs` как runtime dependency пакета `packages/gallery-editorjs`, а не только "поставить зависимость";
- пересборку `packages/gallery-editorjs/dist/*`, потому что пакет публикует `dist`;
- обновление `packages/gallery-editorjs/package-lock.json`;
- проверку, обновился ли корневой `package-lock.json`, так как пакет подключён как `file:./packages/gallery-editorjs`.

Без этого можно получить ситуацию, когда исходники изменены, а реальный импортируемый пакет остаётся старым.

### P2. План упускает nginx rewrites для short form media URL

Нужно как минимум включить в scope проверку или правку:

- `/Users/mikhailpanyushkin/code/kubernetes/imgproxy/nginx/snippets/media-rewrites.conf`

Причина: если helper начнёт отдавать короткую форму с manual crop segment, nginx должен корректно пробрасывать её в imagor.

Пример целевого пути:

- `media.ixbt.site/0.2x0.1:0.7x0.9/fit-in/1536x1920/jpeg/ixbt-data/...`

Быстрая локальная проверка показывает, что текущий rewrite на bucket path уже матчится и с дополнительным crop segment перед bucket. Но это пока не оформлено как контракт и не покрыто в плане.

Поэтому в плане нужен отдельный verification item:

- прогнать реальные short-form URL без crop и с crop;
- убедиться, что rewrite chain сохраняет `AxB:CxD` segment и корректно добавляет absolute source URL для imagor;
- если не сохраняет, доработать `media-rewrites.conf`.

### P2. Недоописан lifecycle `CropModal` и повторное открытие

Для модалки мало описать happy path `open -> apply -> resolve`.

В плане нужно явно потребовать:

- `destroy()` для `Cropper` instance на каждом закрытии;
- cleanup overlay DOM;
- cleanup глобальных listeners (`Escape`, backdrop click и т.д.);
- корректный re-open без утечек и без дублирующихся handlers.

Это особенно важно, потому что crop предполагается вызывать многократно на одном и том же item.

### P2. План не фиксирует initial render / reset / readOnly поведение до конца

Сейчас `packages/gallery-editorjs/src/ui.ts` при `addItem()` и `fillLoadingItem()` всегда показывает `data.url`. Значит недостаточно обновлять preview только внутри `handleCropImage()`.

Нужно явно добавить:

- preview из crop должен строиться при первичном рендере сохранённых данных;
- preview из crop должен применяться после `fillLoadingItem()` и после re-render блока;
- reset должен удалять `dataset.crop`, снимать cropped-state CSS и возвращать исходный preview;
- в `readOnly` нельзя показывать crop controls и нельзя открывать modal.

## Что стоит поправить в самом плане

1. Расширить parser scope:
   - добавить `LaravelEditorJsParser.php`;
   - добавить `react/amp/zen` templates;
   - отдельно решить поддержку `crop` для standalone image.

2. Уточнить crop contract:
   - `crop` внутри PHP лучше передавать структурированно, а не сырой imagor-строкой;
   - imagor-строка собирается в последней точке, ближе к `ImageService`;
   - нужно явно описать пересборку уже существующего media/imagor URL с сохранением manual crop;
   - координаты хранятся как normalized `%` значения `0..1`;
   - рядом сохраняются `cropped_width` и `cropped_height`, не затирая оригинальные `width` и `height`;
   - reset не сохраняет `''` в данные.

3. Уточнить preview architecture:
   - не собирать URL строкой без синхронизации с `common/ImageService`;
   - описать единый контракт между EditorJS preview и Laravel `img()`.

4. Добавить package delivery steps:
   - `dependencies`, а не только код;
   - rebuild `dist`;
   - проверить `.d.ts`;
   - обновить lockfiles.

5. Добавить infra scope:
   - проверить и при необходимости доработать `/Users/mikhailpanyushkin/code/kubernetes/imgproxy/nginx/snippets/media-rewrites.conf`;
   - зафиксировать поддержку short-form URL с crop segment.

6. Добавить section `Verification`:
   - crop;
   - re-crop;
   - reset crop;
   - save/load;
   - readOnly;
   - rebuild URL из уже crop-нутого media URL в новый размер;
   - short-form media rewrite без crop и с crop;
   - parser render в `casual/default/react/amp/zen`;
   - cover image / responsive srcset.

## Проверенные допущения

- Официальный `cshum/imagor` действительно поддерживает URL-форму с manual crop перед resize: `/{hash}/AxB:CxD/fit-in/.../IMAGE`, и координаты могут быть float в диапазоне `0..1`. Источник: [cshum/imagor README](https://github.com/cshum/imagor).
- `cropperjs` v1.6.2 поддерживает сценарий `getData()` / `setData()` для восстановления области crop, так что выбранный подход с хранением координат в процентах совместим с библиотекой. Источник: [Cropper.js v1.6.2 demo/docs](https://fengyuanchen.github.io/cropperjs/v1/).

## Итог

План можно брать за основу, но перед реализацией его стоит доработать по двум главным направлениям:

- сделать единый контракт crop и пересборки URL между JS preview, `img()`, nginx rewrites и parser;
- расширить scope parser/package delivery, иначе решение будет работать только частично.
