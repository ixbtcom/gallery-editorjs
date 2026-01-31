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
  PasteEvent,
  PatternPasteEventDetail,
  FilePasteEventDetail,
} from '@editorjs/editorjs';
import type { TunesMenuConfig } from '@editorjs/editorjs/types/tools';
import './index.css';

import Ui from './ui';
import Uploader from './uploader';
import { IconPicture, IconStretch } from '@codexteam/icons';
import type { UploadResponseFormat, GalleryToolData, GalleryConfig, GalleryItemData } from './types/types';

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
      buttonContent: config.buttonContent ?? this.api.i18n.t('Add Image'),
      urlButtonContent: config.urlButtonContent ?? this.api.i18n.t('Add from URL'),
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
      onRemoveImage: (url: string) => this.onRemoveImage(url),
      readOnly,
    });

    this._data = {
      items: [],
      layout: 'grid',
      columns: 1,
      stretched: false,
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
   * Available gallery tunes
   */
  public static get tunes(): Array<ActionConfig> {
    return [
      {
        name: 'stretched',
        icon: IconStretch,
        title: 'Stretch image',
        toggle: true,
      },
    ];
  }

  /**
   * Specify paste substitutes
   */
  public static get pasteConfig(): PasteConfig {
    return {
      tags: [
        {
          img: { src: true },
        },
      ],
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i,
      },
      files: {
        mimeTypes: ['image/*'],
      },
    };
  }

  /**
   * Renders Block content
   */
  public render(): HTMLElement {
    const wrapper = this.ui.render(this._data.items, this._data.columns);

    // Apply saved tunes
    GalleryTool.tunes.forEach(({ name }) => {
      const value = this._data[name as keyof GalleryToolData] as boolean;
      if (value) {
        this.setTune(name, value);
      }
    });

    return wrapper;
  }

  /**
   * Fires after clicks on the Toolbox Gallery Icon
   * Initiates click on the Select File button to immediately open file dialog
   */
  public appendCallback(): void {
    this.ui.nodes.fileButton.click();
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
    // Tunes (withBorder, stretched, withBackground)
    const tunes = GalleryTool.tunes.map(tune => ({
      icon: tune.icon,
      label: this.api.i18n.t(tune.title),
      name: tune.name,
      toggle: tune.toggle,
      isActive: this._data[tune.name as keyof GalleryToolData] as boolean,
      onActivate: () => {
        this.tuneToggled(tune.name);
      },
    }));

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

    return [...tunes, ...layoutItems];
  }

  /**
   * Handle paste events
   */
  public async onPaste(event: PasteEvent): Promise<void> {
    switch (event.type) {
      case 'tag': {
        const image = (event.detail as { data: HTMLImageElement }).data;

        if (/^blob:/.test(image.src)) {
          const response = await fetch(image.src);
          const file = await response.blob();
          this.uploadFile(file);
        } else {
          this.uploadFromUrl(image.src);
        }
        break;
      }
      case 'pattern': {
        const url = (event.detail as PatternPasteEventDetail).data;
        this.uploadFromUrl(url);
        break;
      }
      case 'file': {
        const file = (event.detail as FilePasteEventDetail).file;
        this.uploadFile(file);
        break;
      }
    }
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
   * Upload file from paste/drag-n-drop
   */
  private uploadFile(file: Blob): void {
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
   * Handle image removal - delete from S3
   */
  private onRemoveImage(url: string): void {
    const deleteEndpoint = this.config.endpoints.deleteImage;
    if (!deleteEndpoint || !url) {
      return;
    }

    // Send delete request to backend
    fetch(deleteEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(this.config.additionalRequestHeaders || {}),
      },
      body: JSON.stringify({ url }),
    }).catch((error) => {
      console.error('Gallery Tool: failed to delete image from S3', error);
    });
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
   * Callback fired when Block Tune is activated
   */
  private tuneToggled(tuneName: string): void {
    const currentValue = this._data[tuneName as keyof GalleryToolData] as boolean;
    this.setTune(tuneName, !currentValue);
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
