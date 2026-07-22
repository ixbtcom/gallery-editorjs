// @vitest-environment jsdom

import { afterEach, describe, expect, it, vi } from 'vitest';

import CropModal from '../src/crop-modal';

interface FakeCropper {
  destroy: ReturnType<typeof vi.fn>;
  getData: ReturnType<typeof vi.fn>;
  getImageData: ReturnType<typeof vi.fn>;
}

const cropperMock = vi.hoisted(() => ({
  instances: [] as FakeCropper[],
}));

vi.mock('cropperjs', () => ({
  default: class {
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
    public setData = vi.fn();

    public constructor(_image: HTMLImageElement, _options: object) {
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
    });
  });
});
