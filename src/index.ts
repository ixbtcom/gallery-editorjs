/**
 * Gallery Tool for Editor.js
 * Supports multiple images with captions and source attribution
 * @author iXBT
 * @license MIT
 */

import type {
  API,
  ToolboxConfig,
  BlockToolConstructorOptions,
  BlockTool,
  BlockAPI,
  PasteConfig,
} from '@editorjs/editorjs';
import type { TunesMenuConfig } from '@editorjs/editorjs/types/tools';
import './index.css';

import Ui from './ui';
import Uploader from './uploader';
import CropModal from '../../_shared/image-item/crop-modal';
import { IconPicture } from '@codexteam/icons';
import type {
  CropAspectRatioMode,
  GalleryConfig,
  GalleryItemData,
  GalleryToolData,
  UploadResponseFormat,
} from './types/types';

/**
 * Tune configuration
 */
interface ActionConfig {
  name: string;
  icon: string;
  title: string;
  toggle: boolean;
}

type GalleryToolConstructorOptions = BlockToolConstructorOptions<GalleryToolData, GalleryConfig>;

/**
 * Gallery Tool implementation
 */
export default class GalleryTool implements BlockTool {
  private api: API;
  private readOnly: boolean;
  private block: BlockAPI;
  private config: GalleryConfig;
  private uploader: Uploader;
  private ui: Ui;
  private cropModal: CropModal;
  private _data: GalleryToolData;
  private currentLoadingItem: HTMLElement | null = null;

  constructor({ data, config: cfg, api, readOnly, block }: GalleryToolConstructorOptions) {
    this.api = api;
    this.readOnly = readOnly;
    this.block = block;

    const config = cfg ?? {} as GalleryConfig;

    this.config = {
      endpoints: config.endpoints ?? {},
      additionalRequestData: config.additionalRequestData,
      additionalRequestHeaders: config.additionalRequestHeaders,
      field: config.field ?? 'image',
      types: config.types ?? 'image/*',
      captionPlaceholder: this.api.i18n.t(config.captionPlaceholder ?? 'Caption'),
      sourcePlaceholder: this.api.i18n.t(config.sourcePlaceholder ?? 'Source'),
      sourceLinkPlaceholder: this.api.i18n.t(config.sourceLinkPlaceholder ?? 'Source link'),
      buttonContent: config.buttonContent ?? this.api.i18n.t('Add Image'),
      urlButtonContent: config.urlButtonContent ?? this.api.i18n.t('Add from URL'),
      uploader: config.uploader,
      onNonImageFile: config.onNonImageFile,
      mediaHost: config.mediaHost,
      cover: config.cover,
      onMediaRemoved: config.onMediaRemoved,
      onCropApplied: config.onCropApplied,
    };

    this._data = {
      items: data?.items ?? [],
      layout: data?.layout ?? 'grid',
      columns: data?.columns ?? 3,
      stretched: data?.stretched ?? false,
    };

    this.uploader = new Uploader({
      config: this.config,
      onUpload: (response: UploadResponseFormat) => this.onUpload(response),
      onError: (error: string) => this.uploadingFailed(error),
    });

    this.cropModal = new CropModal();

    this.ui = new Ui({
      api,
      config: this.config,
      onSelectFile: () => this.selectFile(),
      onSelectUrl: (url: string) => this.uploadFromUrl(url),
      onColumnsChange: (columns: number) => this.onColumnsChange(columns),
      onRemoveImage: (url: string, mediaId?: string) => this.onRemoveImage(url, mediaId),
      onCropImage: (item: HTMLElement) => this.handleCropImage(item),
      onItemSettingsChange: () => this.block.dispatchChange(),
      readOnly,
    });

  }

  /**
   * Notify core that read-only mode is supported
   */
  public static get isReadOnlySupported(): boolean {
    return true;
  }

  /**
   * Get Tool toolbox settings
   */
  public static get toolbox(): ToolboxConfig {
    return {
      icon: IconPicture,
      title: 'Gallery',
    };
  }

  /**
   * Available gallery tunes
   */
  public static get tunes(): Array<ActionConfig> {
    return [];
  }

  /**
   * Specify paste substitutes
   */
  /**
   * ⛔ Галерея вставку не перехватывает: картинки из буфера, ссылки и файлы
   * ведёт блок media — иначе два тула спорят за один Ctrl+V и файл уходит не
   * туда, где стоит курсор. Старые галереи по-прежнему открываются и правятся.
   *
   * ⛔ Именно пустой конфиг, а НЕ `false`: `false` кладёт тул в `exceptionList`
   * EditorJS, и вставка внутри его блока не обрабатывается вообще — картинка из
   * буфера при курсоре в старой галерее уходила бы в никуда. С пустым конфигом
   * галерея не заявляет ни тегов, ни файлов, ни шаблонов, и файл достаётся
   * единственному тулу, который их принимает, — `media`.
   */
  public static get pasteConfig(): PasteConfig {
    return {} as PasteConfig;
  }

  /**
   * Renders Block content
   */
  public render(): HTMLElement {
    const wrapper = this.ui.render(this._data.items, this._data.columns);

    if (this._data.stretched) {
      this.setTune('stretched', true);
    }

    return wrapper;
  }

  /**
   * Validate data
   */
  public validate(savedData: GalleryToolData): boolean {
    return savedData.items.length > 0;
  }

  /**
   * Return Block data
   */
  public save(): GalleryToolData {
    this._data.items = this.ui.getItemsData();
    this._data.columns = this.ui.getColumns();
    // ⛔ Генерация переехала в блок media: сохранённый у старой галереи маркер
    // незавершённой сессии просто уходит из данных — открывать его нечем.
    delete this._data.aiGeneration;

    return this._data;
  }

  public removed(): void {
    const mediaIds = this.ui.getItemsData()
      .map(item => item.media_id)
      .filter((mediaId): mediaId is string => Boolean(mediaId));

    new Set(mediaIds).forEach(mediaId => this.config.onMediaRemoved?.(mediaId));
  }

  public destroy(): void {
    this.cropModal.destroy();
  }

  /**
   * Returns configuration for block tunes
   */
  public renderSettings(): TunesMenuConfig {
    // Layouts (grid, carousel, masonry)
    const layouts = [
      { name: 'grid', title: 'Grid', icon: this.getGridIcon() },
      { name: 'carousel', title: 'Carousel', icon: this.getCarouselIcon() },
      { name: 'masonry', title: 'Masonry', icon: this.getMasonryIcon() },
    ];

    const layoutItems = layouts.map(layout => ({
      icon: layout.icon,
      label: this.api.i18n.t(layout.title),
      name: layout.name,
      isActive: this._data.layout === layout.name,
      onActivate: () => {
        this._data.layout = layout.name as 'grid' | 'carousel' | 'masonry';
        this.updateLayoutClass();
      },
    }));

    return layoutItems;
  }

  /**
   * Handle file selection
   */
  private selectFile(): void {
    this.uploader.uploadSelectedFile({
      onNonImageFile: (file: Blob) => this.config.onNonImageFile?.(file) === true,
      onPreview: (src: string) => {
        this.currentLoadingItem = this.ui.createLoadingItem(src);
      },
    });
  }

  /**
   * Upload file from paste/drag-n-drop
   */
  private uploadFile(file: Blob): void {
    // Не изображение — уходит в собственный блок под галереей, сама галерея
    // при этом не меняется.
    if (this.config.onNonImageFile?.(file) === true) {
      return;
    }

    this.uploader.uploadByFile(file, {
      onPreview: (src: string) => {
        this.currentLoadingItem = this.ui.createLoadingItem(src);
      },
    });
  }

  /**
   * Handle URL upload
   */
  private uploadFromUrl(url: string): void {
    this.currentLoadingItem = this.ui.createLoadingItem(url);
    this.uploader.uploadByUrl(url);
  }

  /**
   * File upload callback
   */
  private onUpload(response: UploadResponseFormat): void {
    if (response.success && response.file) {
      const itemData: GalleryItemData = {
        url: response.file.url,
        media_id: response.file.media_id,
        imagorPath: response.file.imagor_path,
        caption: '',
        source: '',
        sourceLink: '',
        width: response.file.width,
        height: response.file.height,
      };

      if (this.currentLoadingItem) {
        this.ui.fillLoadingItem(this.currentLoadingItem, itemData);
        this.currentLoadingItem = null;
      } else {
        this.ui.addItem(itemData);
      }
    } else {
      this.uploadingFailed('incorrect response: ' + JSON.stringify(response));
    }
  }

  /**
   * Handle upload errors
   */
  private uploadingFailed(errorText: string): void {
    console.error('Gallery Tool: uploading failed', errorText);

    if (this.currentLoadingItem) {
      this.currentLoadingItem.remove();
      this.currentLoadingItem = null;
    }

    this.api.notifier.show({
      message: this.api.i18n.t("Couldn't upload image. Please try another."),
      style: 'error',
    });
  }

  /**
   * Handle columns change
   */
  private onColumnsChange(columns: number): void {
    this._data.columns = columns;
  }

  /**
   * Handle crop image request
   */
  private async handleCropImage(item: HTMLElement): Promise<void> {
    if (item.dataset.disableOptimization === 'true') {
      return;
    }

    const url = item.dataset.url;
    if (!url) return;

    const existingCrop = item.dataset.crop;
    const result = await this.cropModal.open(
      url,
      existingCrop,
      item.dataset.showOriginalOnClick === 'true',
      this.normalizeCropAspectRatioMode(item.dataset.cropAspectRatio)
    );

    if (result === null) {
      // Cancelled
      return;
    }

    if (result.crop === '') {
      // Reset crop
      this.ui.updateItemAfterCrop(item, undefined, 0, 0, undefined, undefined);
    } else {
      // Apply crop
      this.ui.updateItemAfterCrop(
        item,
        result.crop,
        result.croppedWidth,
        result.croppedHeight,
        result.showOriginalOnClick,
        result.cropAspectRatio
      );

      const mediaId = item.dataset.mediaId;

      if (mediaId) {
        this.config.onCropApplied?.(mediaId, result.crop);
      }
    }

    this.block.dispatchChange();
  }

  /**
   * Handle image removal - delete from S3
   */
  private onRemoveImage(url: string, mediaId?: string): void {
    this.block.dispatchChange();

    if (mediaId) {
      this.config.onMediaRemoved?.(mediaId);

      return;
    }

    const deleteEndpoint = this.config.endpoints.deleteImage;
    if (!deleteEndpoint || !url) {
      return;
    }

    // Удаление Media не управляет pointer: общий registry пересчитает его по onChange.
    fetch(deleteEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(this.config.additionalRequestHeaders || {}),
      },
      body: JSON.stringify({ url }),
    })
      .then((r) => r.json())
      .catch((error) => {
        console.error('Gallery Tool: failed to delete image', error);
      });
  }

  private normalizeCropAspectRatioMode(value: unknown): CropAspectRatioMode {
    return value === '16:9' || value === '3:2' || value === '1:1' || value === 'free'
      ? value
      : '3:2';
  }

  /**
   * Update layout class on wrapper
   */
  private updateLayoutClass(): void {
    const wrapper = this.ui.nodes.wrapper;
    wrapper.classList.remove('gallery-tool--grid', 'gallery-tool--carousel', 'gallery-tool--masonry');
    wrapper.classList.add(`gallery-tool--${this._data.layout}`);
  }

  /**
   * Set one tune
   */
  private setTune(tuneName: string, value: boolean): void {
    if (tuneName === 'stretched') {
      this._data.stretched = value;
    }
    this.ui.applyTune(tuneName, value);

    if (tuneName === 'stretched') {
      Promise.resolve().then(() => {
        this.block.stretched = value;
      }).catch((err) => {
        console.error(err);
      });
    }
  }

  private getGridIcon(): string {
    return '<svg width="17" height="15" viewBox="0 0 17 15" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="7" height="7" rx="1"/><rect x="9" y="0" width="7" height="7" rx="1"/><rect x="0" y="8" width="7" height="7" rx="1"/><rect x="9" y="8" width="7" height="7" rx="1"/></svg>';
  }

  private getCarouselIcon(): string {
    return '<svg width="17" height="15" viewBox="0 0 17 15" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="0" width="11" height="15" rx="1"/><rect x="0" y="3" width="2" height="9" rx="1" opacity="0.5"/><rect x="15" y="3" width="2" height="9" rx="1" opacity="0.5"/></svg>';
  }

  private getMasonryIcon(): string {
    return '<svg width="17" height="15" viewBox="0 0 17 15" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="7" height="9" rx="1"/><rect x="9" y="0" width="7" height="5" rx="1"/><rect x="0" y="10" width="7" height="5" rx="1"/><rect x="9" y="6" width="7" height="9" rx="1"/></svg>';
  }
}
