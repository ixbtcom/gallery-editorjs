import { describe, expect, it } from 'vitest';

import { resizeDisplayUrl } from '../src/utils/resize-display-url';

describe('resizeDisplayUrl', () => {
  it('вставляет 920x/webp после хоста для оригинального media.ixbt.site URL', () => {
    expect(
      resizeDisplayUrl('https://media.ixbt.site/ixbt-data/1279383/media-5e0wvvwkekseyjaungx0cn1k.png')
    ).toBe('https://media.ixbt.site/920x/webp/ixbt-data/1279383/media-5e0wvvwkekseyjaungx0cn1k.png');
  });

  it('не трогает URL, у которого первый сегмент уже размер (920x)', () => {
    const url = 'https://media.ixbt.site/920x/webp/ixbt-data/1279383/media-x.png';
    expect(resizeDisplayUrl(url)).toBe(url);
  });

  it('не трогает URL, у которого первый сегмент — размер вида 300x200', () => {
    const url = 'https://media.ixbt.site/300x200/ixbt-data/1279383/media-x.png';
    expect(resizeDisplayUrl(url)).toBe(url);
  });

  it('не трогает изображения с других хостов', () => {
    const url = 'https://example.com/ixbt-data/1279383/media-x.png';
    expect(resizeDisplayUrl(url)).toBe(url);
  });

  it('не трогает blob: и data: URL', () => {
    const blob = 'blob:https://media.ixbt.site/9f1c-uuid';
    const data = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUg==';
    expect(resizeDisplayUrl(blob)).toBe(blob);
    expect(resizeDisplayUrl(data)).toBe(data);
  });

  it('не трогает пустую строку и непарсящиеся значения', () => {
    expect(resizeDisplayUrl('')).toBe('');
    expect(resizeDisplayUrl('/relative/path.png')).toBe('/relative/path.png');
  });
});
