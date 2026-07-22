// @vitest-environment jsdom

import type { API } from '@editorjs/editorjs';
import { afterEach, describe, expect, it, vi } from 'vitest';

import Ui from '../src/ui';
import type { GalleryConfig, GalleryItemData } from '../src/types/types';

afterEach(() => {
  document.body.replaceChildren();
});

function createUi(): Ui {
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
      mediaHost: 'https://media.ixbt.test',
    } as GalleryConfig,
    onColumnsChange: vi.fn(),
    onCropImage: vi.fn(),
    onRemoveImage: vi.fn(),
    onSelectFile: vi.fn(),
    onSelectUrl: vi.fn(),
    readOnly: false,
  });
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
    expect(controls[2]).toBe(ui.nodes.urlInput);
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
