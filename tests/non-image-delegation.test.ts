// @vitest-environment jsdom

import { describe, expect, it, vi } from 'vitest';

import GalleryTool from '../src/index';

/**
 * Единая точка входа: галерея принимает любой файл, но не-изображение отдаёт
 * соседнему блоку и себя при этом не меняет.
 */
describe('gallery delegates non-image files', () => {
  function makeGallery(onNonImageFile: (file: Blob) => boolean) {
    const uploadByFile = vi.fn().mockResolvedValue({
      success: 1,
      file: { url: 'https://media.example.com/photo.jpg' },
    });

    const tool = new GalleryTool({
      data: { items: [], layout: 'grid', columns: 1 } as never,
      config: {
        endpoints: {},
        uploader: { uploadByFile },
        onNonImageFile,
      } as never,
      api: {
        styles: { block: 'ce-block' },
        i18n: { t: (key: string) => key },
        blocks: { getCurrentBlockIndex: () => 0, insert: vi.fn() },
      } as never,
      readOnly: false,
      block: { id: 'block-1', dispatchChange: vi.fn() } as never,
    });

    const element = tool.render();

    document.body.appendChild(element);

    return { tool, uploadByFile, element };
  }

  it('файл, забранный другим блоком, галерею не меняет', async () => {
    const onNonImageFile = vi.fn().mockReturnValue(true);
    const { tool, uploadByFile } = makeGallery(onNonImageFile);

    await (tool as unknown as { uploadFile: (file: Blob) => Promise<void> })
      .uploadFile(new File(['%PDF'], 'doc.pdf', { type: 'application/pdf' }));

    expect(onNonImageFile).toHaveBeenCalledOnce();
    expect(uploadByFile).not.toHaveBeenCalled();
    expect(tool.save().items).toHaveLength(0);
  });

  it('вставка в поле ссылки больше не перехватывается галереей — этим занят блок media', async () => {
    // ⛔ Файлы и картинки из буфера целиком ведёт media: галерея не слушает
    // clipboardData, поэтому и делегировать ей нечего.
    const onNonImageFile = vi.fn().mockReturnValue(true);
    const { uploadByFile, element } = makeGallery(onNonImageFile);

    const pdf = new File(['%PDF'], 'doc.pdf', { type: 'application/pdf' });
    const transfer = { files: [pdf] } as unknown as DataTransfer;
    const input = element.querySelector('input[type="text"]') as HTMLInputElement | null;

    expect(input).not.toBeNull();

    input?.dispatchEvent(Object.assign(new Event('paste', { bubbles: true }), { clipboardData: transfer }));

    await new Promise((resolve) => setTimeout(resolve, 20));

    expect(onNonImageFile).not.toHaveBeenCalled();
    expect(uploadByFile).not.toHaveBeenCalled();
  });

  it('выбор файла в галерее по-прежнему делегирует не-картинку соседнему блоку', async () => {
    // Диалог «выбрать файл» у галереи остался — там делегирование и работает.
    const onNonImageFile = vi.fn().mockReturnValue(false);
    const { tool, uploadByFile } = makeGallery(onNonImageFile);

    await (tool as unknown as { uploadFile: (file: Blob) => Promise<void> }).uploadFile(new File(['\xFF\xD8'], 'photo.jpg', { type: 'image/jpeg' }));

    // Загрузчик сначала читает файл через FileReader — ждём его тик.
    await new Promise((resolve) => setTimeout(resolve, 30));

    expect(onNonImageFile).toHaveBeenCalledOnce();
    expect(uploadByFile).toHaveBeenCalledOnce();
  });
});

/**
 * ⛔ Отказ от вставки и выпадение из обработки вставки — разные вещи.
 * EditorJS кладёт тул с `pasteConfig === false` в `exceptionList` и не
 * обрабатывает вставку внутри его блока ВООБЩЕ: картинка из буфера при курсоре
 * в старой галерее уходила бы в никуда вместо нового блока `media`.
 */
describe('gallery stays out of the paste exception list', () => {
  it('pasteConfig — пустой конфиг, а не false', () => {
    const config = GalleryTool.pasteConfig as unknown as {
      tags?: unknown[];
      files?: Record<string, unknown>;
      patterns?: Record<string, unknown>;
    };

    expect(config as unknown).not.toBe(false);
    expect(config.tags ?? []).toEqual([]);
    expect(config.files ?? {}).toEqual({});
    expect(config.patterns ?? {}).toEqual({});
  });
});
