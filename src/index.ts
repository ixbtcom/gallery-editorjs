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
} from '@editorjs/editorjs';
import type { TunesMenuConfig } from '@editorjs/editorjs/types/tools';
import './index.css';

import Ui from './ui';
import Uploader from './uploader';
import { IconPicture } from '@codexteam/icons';
import type { UploadResponseFormat, GalleryToolData, GalleryConfig, GalleryItemData } from './types/types';

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
  private _data: GalleryToolData;
  private currentLoadingItem: HTMLElement | null = null;

  constructor({ data, config, api, readOnly, block }: GalleryToolConstructorOptions) {
    this.api = api;
    this.readOnly = readOnly;
    this.block = block;

    this.config = {
      endpoints: config.endpoints ?? {},
      additionalRequestData: config.additionalRequestData,
      additionalRequestHeaders: config.additionalRequestHeaders,
      field: config.field ?? 'image',
      types: config.types ?? 'image/*',
      captionPlaceholder: this.api.i18n.t(config.captionPlaceholder ?? 'Caption'),
      sourcePlaceholder: this.api.i18n.t(config.sourcePlaceholder ?? 'Source'),
      sourceLinkPlaceholder: this.api.i18n.t(config.sourceLinkPlaceholder ?? 'Source link'),
      buttonContent: config.buttonContent,
      urlButtonContent: config.urlButtonContent,
      uploader: config.uploader,
    };

    this.uploader = new Uploader({
      config: this.config,
      onUpload: (response: UploadResponseFormat) => this.onUpload(response),
      onError: (error: string) => this.uploadingFailed(error),
    });

    this.ui = new Ui({
      api,
      config: this.config,
      onSelectFile: () => this.selectFile(),
      onSelectUrl: (url: string) => this.uploadFromUrl(url),
      onColumnsChange: (columns: number) => this.onColumnsChange(columns),
      readOnly,
    });

    this._data = {
      items: [],
      layout: 'grid',
      columns: 2,
    };

    if (data && data.items) {
      this._data = data;
    }
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
   * Renders Block content
   */
  public render(): HTMLElement {
    return this.ui.render(this._data.items, this._data.columns);
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
    return this._data;
  }

  /**
   * Returns configuration for block tunes
   */
  public renderSettings(): TunesMenuConfig {
    const layouts = [
      { name: 'grid', title: 'Grid', icon: this.getGridIcon() },
      { name: 'carousel', title: 'Carousel', icon: this.getCarouselIcon() },
      { name: 'masonry', title: 'Masonry', icon: this.getMasonryIcon() },
    ];

    return layouts.map(layout => ({
      icon: layout.icon,
      label: this.api.i18n.t(layout.title),
      name: layout.name,
      isActive: this._data.layout === layout.name,
      onActivate: () => {
        this._data.layout = layout.name as 'grid' | 'carousel' | 'masonry';
        this.updateLayoutClass();
      },
    }));
  }

  /**
   * Handle file selection
   */
  private selectFile(): void {
    this.uploader.uploadSelectedFile({
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
      if (this.currentLoadingItem) {
        this.ui.fillLoadingItem(this.currentLoadingItem, response.file.url);
        this.currentLoadingItem = null;
      } else {
        this.ui.addItem({
          url: response.file.url,
          caption: '',
          source: '',
          sourceLink: '',
        });
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
   * Update layout class on wrapper
   */
  private updateLayoutClass(): void {
    const wrapper = this.ui.nodes.wrapper;
    wrapper.classList.remove('gallery-tool--grid', 'gallery-tool--carousel', 'gallery-tool--masonry');
    wrapper.classList.add(`gallery-tool--${this._data.layout}`);
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
