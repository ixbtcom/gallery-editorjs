/**
 * Хост, для которого включена презентационная трансформация превью.
 * Только изображения с этого хоста получают ресайз-вариант.
 */
const RESIZE_HOST = 'media.ixbt.site';

/** Размерный + форматный префикс, вставляемый в путь для отображения. */
const DISPLAY_PREFIX = '920x/webp';

/**
 * Первый сегмент пути уже является размером imagor (напр. `920x`, `300x200`) —
 * значит URL уже ресайзнут, повторно префикс вставлять нельзя.
 */
const SIZE_SEGMENT = /^\d+x\d*$/;

/**
 * Возвращает URL ресайз-варианта (`920x/webp`) для ОТОБРАЖЕНИЯ превью в редакторе.
 *
 * Трансформация чисто презентационная: вызывается только в момент установки
 * `src` / `background-image` у превью-элементов галереи. Сохранённые данные блока
 * (то, что уходит в `save()`) всегда хранят ОРИГИНАЛЬНЫЙ URL — здесь эта функция
 * не участвует. Кроп и AI-редактор тоже работают с оригиналом.
 *
 * Правила:
 * - хост строго `media.ixbt.site`; другие хосты, `blob:`, `data:`, относительные
 *   и непарсящиеся значения — возвращаются без изменений;
 * - если первый сегмент пути уже размер (`^\d+x\d*$`) — URL не трогаем;
 * - иначе вставляем `920x/webp/` сразу после хоста.
 *
 * @param url - исходный (оригинальный) URL изображения
 * @returns URL для отображения превью (ресайзнутый или исходный)
 */
export function resizeDisplayUrl(url: string): string {
  if (!url) {
    return url;
  }

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    // Относительные пути, blob:, data: и прочие непарсящиеся значения — как есть.
    return url;
  }

  if (parsed.hostname !== RESIZE_HOST) {
    return url;
  }

  const segments = parsed.pathname.split('/').filter(Boolean);
  if (segments.length === 0 || SIZE_SEGMENT.test(segments[0])) {
    return url;
  }

  parsed.pathname = `/${DISPLAY_PREFIX}/${segments.join('/')}`;

  return parsed.toString();
}
