// @vitest-environment jsdom

import type { API } from '@editorjs/editorjs';
import { afterEach, describe, expect, it, vi } from 'vitest';

import Ui from '../src/ui';
import type { GalleryConfig, GalleryItemData } from '../src/types/types';

const originalClipboardDescriptor = Object.getOwnPropertyDescriptor(navigator, 'clipboard');

afterEach(() => {
  document.body.replaceChildren();
  vi.restoreAllMocks();

  if (originalClipboardDescriptor) {
    Object.defineProperty(navigator, 'clipboard', originalClipboardDescriptor);
  } else {
    Reflect.deleteProperty(navigator, 'clipboard');
  }
});

function createUi(callbacks: {
  onItemSettingsChange?: () => void;
  onPasteFile?: (file: Blob) => void;
  onSelectUrl?: (url: string) => void;
} = {}): Ui {
  return new Ui({
    api: {
      i18n: { t: (message: string): string => message },
      notifier: { show: vi.fn() },
      styles: {
        button: 'ce-button',
        input: 'ce-input',
      },
    } as unknown as API,
    config: {
      buttonContent: 'Загрузить',
      endpoints: {},
      mediaHost: 'https://media.ixbt.test',
    } as GalleryConfig,
    onColumnsChange: vi.fn(),
    onCropImage: vi.fn(),
    onItemSettingsChange: callbacks.onItemSettingsChange,
    onPasteFile: callbacks.onPasteFile,
    onRemoveImage: vi.fn(),
    onSelectFile: vi.fn(),
    onSelectUrl: callbacks.onSelectUrl ?? vi.fn(),
    readOnly: false,
  } as unknown as ConstructorParameters<typeof Ui>[0]);
}

function createAiUi(onOpenAi: () => void): Ui {
  return new Ui({
    api: {
      i18n: { t: (message: string): string => message },
      styles: {
        button: 'ce-button',
        input: 'ce-input',
      },
    } as unknown as API,
    config: {
      buttonContent: 'Загрузить',
      endpoints: {},
      generation: {},
    } as GalleryConfig,
    onColumnsChange: vi.fn(),
    onCropImage: vi.fn(),
    onOpenAi,
    onRemoveImage: vi.fn(),
    onSelectFile: vi.fn(),
    onSelectUrl: vi.fn(),
    readOnly: false,
  });
}

function itemData(overrides: Partial<GalleryItemData> = {}): GalleryItemData {
  return {
    caption: '',
    imagorPath: 'images/example.jpg',
    source: '',
    sourceLink: '',
    url: 'https://cdn.ixbt.test/example.jpg',
    height: 900,
    width: 1600,
    ...overrides,
  };
}

describe('Gallery crop preview geometry', () => {
  it('fills the item width and follows cropped dimensions when crop is applied or restored', () => {
    const ui = createUi();
    const restoredItem = ui.addItem(itemData({
      crop: '0.1000x0.1000:0.9000x0.7000',
      croppedHeight: 600,
      croppedWidth: 800,
    }));
    const restoredImage = restoredItem.querySelector<HTMLImageElement>('.gallery-tool__item-image img');

    expect(restoredImage?.style.width).toBe('100%');
    expect(restoredImage?.style.maxHeight).toBe('none');
    expect(restoredImage?.style.aspectRatio).toBe('800 / 600');

    const updatedItem = ui.addItem(itemData());
    const updatedImage = updatedItem.querySelector<HTMLImageElement>('.gallery-tool__item-image img');

    ui.updateItemAfterCrop(updatedItem, '0.2000x0.1000:0.8000x0.9000', 720, 960, false, '3:2');

    expect(updatedImage?.style.width).toBe('100%');
    expect(updatedImage?.style.maxHeight).toBe('none');
    expect(updatedImage?.style.aspectRatio).toBe('720 / 960');
    expect(updatedItem.querySelector('.gallery-tool__item-dimensions')?.textContent).toBe('720 × 960');

    ui.updateItemAfterCrop(updatedItem, undefined, 0, 0, undefined, undefined);

    expect(updatedImage?.style.width).toBe('');
    expect(updatedImage?.style.maxHeight).toBe('');
    expect(updatedImage?.style.aspectRatio).toBe('1600 / 900');
  });
});

describe('Gallery AI entry point', () => {
  it('places the AI action immediately after upload and opens the gallery-owned workflow', () => {
    const onOpenAi = vi.fn();
    const ui = createAiUi(onOpenAi);
    const controls = Array.from(ui.nodes.addButtons.children);

    expect(controls[0]).toBe(ui.nodes.fileButton);
    expect(controls[1]).toBe(ui.nodes.aiButton);
    expect(controls[2]).toBe(ui.nodes.clipboardButton);
    expect(controls[3]).toBe(ui.nodes.urlInput);
    expect(ui.nodes.aiButton.textContent).toContain('Генерация');
    expect(ui.nodes.aiButton.querySelector('.gallery-tool__ai-mark')?.textContent).toBe('Ai');
    expect(ui.nodes.aiButton.getAttribute('aria-label')).toBe('Генерация');
    expect(ui.nodes.aiButton.textContent).not.toBe('AI');

    ui.nodes.aiButton.click();

    expect(onOpenAi).toHaveBeenCalledOnce();
  });

  it('marks AI-generated items with a persistent editor badge', () => {
    const ui = createUi();
    const item = ui.addItem(itemData({ isAiGenerated: true, source: '' }));
    const badge = item.querySelector<HTMLElement>('.gallery-tool__item-ai-badge');

    expect(item.dataset.aiGenerated).toBe('true');
    expect(badge).not.toBeNull();
    expect(badge?.getAttribute('title')).toBe('Создано с помощью Ai');
    expect(badge?.getAttribute('aria-label')).toBe('Создано с помощью Ai');
    expect(ui.getItemsData()[0]?.isAiGenerated).toBe(true);
  });
});

describe('Gallery clipboard insertion', () => {
  it('adds a pasted image to the current gallery instead of submitting the URL field', () => {
    const onPasteFile = vi.fn();
    const onSelectUrl = vi.fn();
    const ui = createUi({ onPasteFile, onSelectUrl });
    const input = ui.nodes.urlInput.querySelector('input');
    const image = new File(['image'], 'clipboard.png', { type: 'image/png' });
    const event = new Event('paste', { bubbles: true, cancelable: true });

    Object.defineProperty(event, 'clipboardData', {
      value: {
        files: [image],
        items: [],
      },
    });

    input?.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(true);
    expect(onPasteFile).toHaveBeenCalledOnce();
    expect(onPasteFile).toHaveBeenCalledWith(image);
    expect(onSelectUrl).not.toHaveBeenCalled();
  });

  it('reads an image from the clipboard when the explicit button is clicked', async () => {
    const onPasteFile = vi.fn();
    const image = new Blob(['image'], { type: 'image/png' });
    const read = vi.fn().mockResolvedValue([
      {
        getType: vi.fn().mockResolvedValue(image),
        types: ['image/png'],
      },
    ]);

    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { read },
    });

    const ui = createUi({ onPasteFile });
    const clipboardButton = Array.from(ui.nodes.addButtons.querySelectorAll('button'))
      .find(button => button.textContent?.includes('Вставить из буфера'));

    expect(clipboardButton).toBeDefined();
    clipboardButton?.click();

    await vi.waitFor(() => {
      expect(onPasteFile).toHaveBeenCalledWith(image);
    });
  });
});

describe('Gallery item settings', () => {
  it('persists media flags and clears crop when optimization is disabled', () => {
    const onItemSettingsChange = vi.fn();
    const ui = createUi({ onItemSettingsChange });
    const item = ui.addItem(itemData({
      crop: '0.1000x0.1000:0.9000x0.7000',
      croppedHeight: 600,
      croppedWidth: 800,
      cropAspectRatio: '3:2',
      showOriginalOnClick: true,
    }));
    const settingsButton = item.querySelector<HTMLButtonElement>('[aria-label="Настройки изображения"]');

    expect(settingsButton).not.toBeNull();
    settingsButton?.click();

    for (const text of ['Не ограничивать по высоте', 'Не оптимизировать', 'Не применять оформление']) {
      const label = Array.from(item.querySelectorAll('label'))
        .find(candidate => candidate.textContent?.includes(text));

      expect(label, `Не найдена настройка «${text}»`).toBeDefined();
      label?.querySelector<HTMLInputElement>('input')?.click();
    }

    const saved = ui.getItemsData()[0];
    const cropButton = item.querySelector<HTMLButtonElement>('[aria-label="Обрезать изображение"]');

    expect(saved).toMatchObject({
      disableDecoration: true,
      disableHeightLimit: true,
      disableOptimization: true,
    });
    expect(saved?.crop).toBeUndefined();
    expect(saved?.croppedHeight).toBeUndefined();
    expect(saved?.croppedWidth).toBeUndefined();
    expect(saved?.cropAspectRatio).toBeUndefined();
    expect(saved?.showOriginalOnClick).toBeUndefined();
    expect(cropButton?.disabled).toBe(true);
    expect(onItemSettingsChange).toHaveBeenCalledTimes(3);
  });
});
