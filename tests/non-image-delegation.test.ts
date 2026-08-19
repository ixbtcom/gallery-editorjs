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

  it('keeps the gallery untouched when the pasted file is claimed by another block', async () => {
    const onNonImageFile = vi.fn().mockReturnValue(true);
    const { tool, uploadByFile } = makeGallery(onNonImageFile);

    await tool.onPaste({
      type: 'file',
      detail: { file: new File(['%PDF'], 'doc.pdf', { type: 'application/pdf' }) },
    } as never);

    expect(onNonImageFile).toHaveBeenCalledOnce();
    expect(uploadByFile).not.toHaveBeenCalled();
    expect(tool.save().items).toHaveLength(0);
  });

  it('delegates a non-image file pasted into the url field instead of ignoring it', async () => {
    const onNonImageFile = vi.fn().mockReturnValue(true);
    const { uploadByFile, element } = makeGallery(onNonImageFile);

    const pdf = new File(['%PDF'], 'doc.pdf', { type: 'application/pdf' });
    const transfer = { files: [pdf] } as unknown as DataTransfer;
    const input = element.querySelector('input[type="text"]') as HTMLInputElement | null;

    expect(input).not.toBeNull();

    // Поле ссылки в галерее слушает paste: раньше файл-не-картинка там просто
    // терялся, теперь он уходит в собственный блок.
    input?.dispatchEvent(Object.assign(new Event('paste', { bubbles: true }), { clipboardData: transfer }));

    await new Promise((resolve) => setTimeout(resolve, 20));

    expect(onNonImageFile).toHaveBeenCalled();
    expect(uploadByFile).not.toHaveBeenCalled();
  });

  it('still uploads images into the gallery itself', async () => {
    const onNonImageFile = vi.fn().mockReturnValue(false);
    const { tool, uploadByFile } = makeGallery(onNonImageFile);

    await tool.onPaste({
      type: 'file',
      detail: { file: new File(['\xFF\xD8'], 'photo.jpg', { type: 'image/jpeg' }) },
    } as never);

    // Загрузчик сначала читает файл через FileReader — ждём его тик.
    await new Promise((resolve) => setTimeout(resolve, 30));

    expect(onNonImageFile).toHaveBeenCalledOnce();
    expect(uploadByFile).toHaveBeenCalledOnce();
  });
});
