# Gallery Tool for Editor.js

Плагин галереи для Editor.js с поддержкой множественных изображений, атрибуции источников и различных макетов отображения.

## Возможности

- **Множественные изображения** — добавляйте неограниченное количество изображений в одну галерею
- **Загрузка файлов** — с устройства или по URL
- **Атрибуция источников** — подпись, источник и ссылка на источник для каждого изображения
- **Макеты** — Grid (сетка), Carousel (карусель), Masonry (мозаика)
- **Управление колонками** — настройка количества колонок (1-5)
- **Сортировка** — перемещение изображений влево/вправо
- **TypeScript** — полная типизация

## Установка

```bash
npm install @ixbtcom/gallery-editorjs
# или
yarn add @ixbtcom/gallery-editorjs
```

## Использование

### Базовое подключение

```javascript
import EditorJS from '@editorjs/editorjs';
import GalleryTool from '@ixbtcom/gallery-editorjs';

const editor = new EditorJS({
  holder: 'editor',
  tools: {
    gallery: {
      class: GalleryTool,
      config: {
        endpoints: {
          byFile: '/api/upload/image',
          byUrl: '/api/upload/image-by-url',
        },
      },
    },
  },
});
```

### С кастомным uploader

```javascript
const editor = new EditorJS({
  tools: {
    gallery: {
      class: GalleryTool,
      config: {
        uploader: {
          uploadByFile: async (file) => {
            const formData = new FormData();
            formData.append('image', file);

            const response = await fetch('/api/upload', {
              method: 'POST',
              body: formData,
            });

            return response.json();
          },
          uploadByUrl: async (url) => {
            const response = await fetch('/api/upload-by-url', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ url }),
            });

            return response.json();
          },
        },
      },
    },
  },
});
```

## Конфигурация

| Параметр | Тип | Описание |
|----------|-----|----------|
| `endpoints.byFile` | `string` | URL для загрузки файлов |
| `endpoints.byUrl` | `string` | URL для загрузки по URL |
| `uploader.uploadByFile` | `function` | Кастомная функция загрузки файла |
| `uploader.uploadByUrl` | `function` | Кастомная функция загрузки по URL |
| `captionPlaceholder` | `string` | Плейсхолдер для подписи (default: "Caption") |
| `sourcePlaceholder` | `string` | Плейсхолдер для источника (default: "Source") |
| `sourceLinkPlaceholder` | `string` | Плейсхолдер для ссылки (default: "Source link") |
| `field` | `string` | Имя поля для FormData (default: "image") |
| `types` | `string` | MIME-типы файлов (default: "image/*") |
| `additionalRequestData` | `object` | Дополнительные данные для запроса |
| `additionalRequestHeaders` | `object` | Дополнительные заголовки |

## Формат ответа сервера

Сервер должен возвращать JSON в формате:

```json
{
  "success": 1,
  "file": {
    "url": "https://cdn.example.com/image.jpg"
  }
}
```

При ошибке:

```json
{
  "success": 0,
  "message": "Описание ошибки"
}
```

## Структура данных блока

```typescript
interface GalleryToolData {
  items: GalleryItemData[];
  layout: 'grid' | 'carousel' | 'masonry';
  columns: number; // 1-5
}

interface GalleryItemData {
  url: string;      // URL изображения
  caption: string;  // Подпись
  source: string;   // Источник/атрибуция
  sourceLink: string; // Ссылка на источник
}
```

### Пример сохранённых данных

```json
{
  "type": "gallery",
  "data": {
    "items": [
      {
        "url": "https://cdn.example.com/photo1.jpg",
        "caption": "Фото с мероприятия",
        "source": "Пресс-служба компании",
        "sourceLink": "https://company.com/press"
      },
      {
        "url": "https://cdn.example.com/photo2.jpg",
        "caption": "Новый продукт",
        "source": "",
        "sourceLink": ""
      }
    ],
    "layout": "grid",
    "columns": 3
  }
}
```

## Макеты (Block Tunes)

### Grid (Сетка)
Изображения располагаются в равномерной сетке с настраиваемым количеством колонок.

### Carousel (Карусель)
Горизонтальная прокрутка изображений. Ширина каждого элемента фиксирована (280px).

### Masonry (Мозаика)
CSS-колонки с автоматической раскладкой изображений разной высоты.

## i18n (Локализация)

Плагин поддерживает локализацию через API Editor.js:

```javascript
const editor = new EditorJS({
  i18n: {
    messages: {
      toolNames: {
        Gallery: 'Галерея',
      },
      tools: {
        gallery: {
          Caption: 'Подпись',
          Source: 'Источник',
          'Source link': 'Ссылка на источник',
          Grid: 'Сетка',
          Carousel: 'Карусель',
          Masonry: 'Мозаика',
          "Couldn't upload image. Please try another.":
            'Не удалось загрузить изображение. Попробуйте другое.',
        },
      },
    },
  },
});
```

## Разработка

```bash
# Установка зависимостей
npm install

# Сборка
npm run build

# Сборка с watch
npm run dev
```

## Требования

- Editor.js >= 2.30.0
- Современный браузер с поддержкой ES2020

## Лицензия

MIT
