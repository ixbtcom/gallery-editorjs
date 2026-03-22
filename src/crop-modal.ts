import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import type { CropResult } from './types/types';
import { make } from './utils/dom';

/**
 * Модальное окно кадрирования изображения на основе cropper.js.
 * Возвращает координаты обрезки в формате imagor (нормализованные 0-1).
 */
export default class CropModal {
  private overlay: HTMLElement | null = null;
  private cropper: Cropper | null = null;
  private escHandler: ((e: KeyboardEvent) => void) | null = null;
  private resolvePromise: ((result: CropResult | null) => void) | null = null;

  /**
   * Открывает модальное окно кадрирования.
   *
   * @param imageUrl - URL изображения для кадрирования
   * @param existingCrop - существующая строка кадрирования "AxB:CxD" для восстановления области
   * @returns Promise с результатом кадрирования или null при отмене
   */
  public open(imageUrl: string, existingCrop?: string): Promise<CropResult | null> {
    if (this.overlay) {
      this.destroy();
    }

    return new Promise<CropResult | null>((resolve) => {
      this.resolvePromise = resolve;

      this.overlay = this.createOverlay();

      const imageWrapper = this.overlay.querySelector('.gallery-crop-modal__image-wrapper');
      if (!imageWrapper) {
        this.close(null);
        return;
      }

      const img = make('img', null, {
        src: imageUrl,
      }) as HTMLImageElement;
      img.style.maxWidth = '100%';
      img.style.display = 'block';

      imageWrapper.appendChild(img);
      document.body.appendChild(this.overlay);

      img.onload = () => {
        this.cropper = new Cropper(img, {
          viewMode: 1,
          autoCropArea: 1,
          aspectRatio: NaN,
          responsive: true,
          restore: true,
          guides: true,
          center: true,
          highlight: true,
          cropBoxMovable: true,
          cropBoxResizable: true,
          toggleDragModeOnDblclick: false,
          ready: () => {
            if (existingCrop && this.cropper) {
              const imgData = this.cropper.getImageData();
              this.restoreCropArea(existingCrop, imgData.naturalWidth, imgData.naturalHeight);
            }
          },
        });
      };

      img.onerror = () => {
        this.close(null);
      };

      this.escHandler = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          this.close(null);
        }
      };
      document.addEventListener('keydown', this.escHandler);
    });
  }

  /**
   * Полностью уничтожает модальное окно и освобождает ресурсы.
   */
  public destroy(): void {
    this.cropper?.destroy();
    this.cropper = null;

    this.overlay?.remove();
    this.overlay = null;

    if (this.escHandler) {
      document.removeEventListener('keydown', this.escHandler);
      this.escHandler = null;
    }

    this.resolvePromise = null;
  }

  /**
   * Закрывает модальное окно и возвращает результат через Promise.
   */
  private close(result: CropResult | null): void {
    const resolve = this.resolvePromise;
    this.destroy();
    resolve?.(result);
  }

  /**
   * Создает DOM-структуру оверлея с кнопками управления.
   */
  private createOverlay(): HTMLElement {
    const overlay = make('div', 'gallery-crop-modal');
    overlay.addEventListener('click', () => this.close(null));

    const container = make('div', 'gallery-crop-modal__container');
    container.addEventListener('click', (e: Event) => e.stopPropagation());

    const imageWrapper = make('div', 'gallery-crop-modal__image-wrapper');

    const actions = make('div', 'gallery-crop-modal__actions');

    const resetBtn = make('button', ['gallery-crop-modal__btn', 'gallery-crop-modal__btn--danger']);
    resetBtn.textContent = 'Сбросить';
    resetBtn.addEventListener('click', () => {
      this.close({ crop: '', croppedWidth: 0, croppedHeight: 0 });
    });

    const cancelBtn = make('button', 'gallery-crop-modal__btn');
    cancelBtn.textContent = 'Отмена';
    cancelBtn.addEventListener('click', () => this.close(null));

    const applyBtn = make('button', ['gallery-crop-modal__btn', 'gallery-crop-modal__btn--primary']);
    applyBtn.textContent = 'Применить';
    applyBtn.addEventListener('click', () => this.handleApply());

    actions.appendChild(resetBtn);
    actions.appendChild(cancelBtn);
    actions.appendChild(applyBtn);

    container.appendChild(imageWrapper);
    container.appendChild(actions);

    overlay.appendChild(container);

    return overlay;
  }

  /**
   * Обрабатывает нажатие кнопки "Применить" — собирает данные кадрирования
   * и закрывает модальное окно с результатом.
   */
  private handleApply(): void {
    if (!this.cropper) {
      this.close(null);
      return;
    }

    const data = this.cropper.getData(true);
    const img = this.cropper.getImageData();
    const result = this.cropDataToString(data, img.naturalWidth, img.naturalHeight);
    this.close(result);
  }

  /**
   * Парсит строку кадрирования в формате imagor "AxB:CxD" в координаты.
   *
   * @param crop - строка вида "0.1234x0.2345:0.8765x0.7654"
   * @returns объект с координатами или null если формат не совпадает
   */
  private parseCropString(crop: string): { x1: number; y1: number; x2: number; y2: number } | null {
    const match = crop.match(/^(\d+\.?\d*)x(\d+\.?\d*):(\d+\.?\d*)x(\d+\.?\d*)$/);
    if (!match) {
      return null;
    }

    return {
      x1: parseFloat(match[1]),
      y1: parseFloat(match[2]),
      x2: parseFloat(match[3]),
      y2: parseFloat(match[4]),
    };
  }

  /**
   * Преобразует данные cropper.js в строку кадрирования формата imagor
   * и возвращает объект CropResult.
   *
   * @param data - данные из Cropper.getData(true)
   * @param naturalWidth - натуральная ширина изображения
   * @param naturalHeight - натуральная высота изображения
   */
  private cropDataToString(data: Cropper.Data, naturalWidth: number, naturalHeight: number): CropResult {
    const topLeftX = data.x / naturalWidth;
    const topLeftY = data.y / naturalHeight;
    const bottomRightX = (data.x + data.width) / naturalWidth;
    const bottomRightY = (data.y + data.height) / naturalHeight;

    const crop = `${topLeftX.toFixed(4)}x${topLeftY.toFixed(4)}:${bottomRightX.toFixed(4)}x${bottomRightY.toFixed(4)}`;

    return {
      crop,
      croppedWidth: Math.round(data.width),
      croppedHeight: Math.round(data.height),
    };
  }

  /**
   * Восстанавливает область кадрирования из строки imagor-формата.
   *
   * @param crop - строка кадрирования "AxB:CxD"
   * @param naturalWidth - натуральная ширина изображения
   * @param naturalHeight - натуральная высота изображения
   */
  private restoreCropArea(crop: string, naturalWidth: number, naturalHeight: number): void {
    const parsed = this.parseCropString(crop);
    if (!parsed) {
      return;
    }

    this.cropper?.setData({
      x: parsed.x1 * naturalWidth,
      y: parsed.y1 * naturalHeight,
      width: (parsed.x2 - parsed.x1) * naturalWidth,
      height: (parsed.y2 - parsed.y1) * naturalHeight,
    });
  }
}
