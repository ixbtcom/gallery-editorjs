// @vitest-environment jsdom

import { afterEach, describe, expect, it, vi } from 'vitest';

import CropModal from '../src/crop-modal';

interface FakeCropper {
  destroy: ReturnType<typeof vi.fn>;
  getData: ReturnType<typeof vi.fn>;
  getImageData: ReturnType<typeof vi.fn>;
  setAspectRatio: ReturnType<typeof vi.fn>;
  setData: ReturnType<typeof vi.fn>;
  options: Record<string, unknown>;
}

const cropperMock = vi.hoisted(() => ({
  instances: [] as FakeCropper[],
}));

vi.mock('cropperjs', () => ({
  default: class {
    public options: Record<string, unknown> = {};
    public destroy = vi.fn();
    public getData = vi.fn(() => ({
      height: 1004,
      width: 2005,
      x: -2,
      y: -1,
    }));
    public getImageData = vi.fn(() => ({
      naturalHeight: 1000,
      naturalWidth: 2000,
    }));
    public setAspectRatio = vi.fn();
    public setData = vi.fn();

    public constructor(_image: HTMLImageElement, options: object) {
      this.options = options as Record<string, unknown>;
      cropperMock.instances.push(this);
    }
  },
}));

afterEach(() => {
  cropperMock.instances.length = 0;
  document.body.replaceChildren();
  vi.restoreAllMocks();
});

describe('Gallery CropModal', () => {
  it('clamps cropper edge rounding to the backend coordinate range', async () => {
    const modal = new CropModal();
    const resultPromise = modal.open('https://media.ixbt.test/original.webp');

    document.querySelector<HTMLImageElement>('.gallery-crop-modal img')!
      .dispatchEvent(new Event('load'));
    const applyButton = Array.from(document.querySelectorAll('button'))
      .find(button => button.textContent === 'Применить');

    expect(cropperMock.instances).toHaveLength(1);
    expect(applyButton).toBeDefined();
    applyButton!.click();

    await expect(resultPromise).resolves.toMatchObject({
      crop: '0.0000x0.0000:1.0000x1.0000',
      cropAspectRatio: '3:2',
    });
  });

  it('uses a fixed 3:2 crop ratio by default and allows switching ratio', async () => {
    const modal = new CropModal();
    const resultPromise = modal.open('https://media.ixbt.test/original.webp');

    document.querySelector<HTMLImageElement>('.gallery-crop-modal img')!
      .dispatchEvent(new Event('load'));
    const cropper = cropperMock.instances[0];

    expect(cropper.options.aspectRatio).toBe(3 / 2);

    const squareInput = Array.from(document.querySelectorAll<HTMLInputElement>('input[type="radio"]'))
      .find(input => input.value === '1:1');

    expect(squareInput).toBeDefined();
    squareInput!.click();

    expect(cropper.setAspectRatio).toHaveBeenCalledWith(1);

    const applyButton = Array.from(document.querySelectorAll('button'))
      .find(button => button.textContent === 'Применить');

    applyButton!.click();

    await expect(resultPromise).resolves.toMatchObject({
      cropAspectRatio: '1:1',
    });
  });
});
