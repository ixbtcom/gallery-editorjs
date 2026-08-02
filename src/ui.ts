import { IconClipboard, IconPicture } from '@codexteam/icons';
import { make } from './utils/dom';
import { createItemSettings, type GalleryItemSetting } from './item-settings';
import { resizeDisplayUrl } from './utils/resize-display-url';
import type { API } from '@editorjs/editorjs';
import type { GalleryConfig, GalleryItemData } from './types/types';

/**
 * Crop icon SVG
 */
const IconCrop = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2v4"/><path d="M6 6h12a2 2 0 0 1 2 2v8"/><path d="M18 22v-4"/><path d="M18 18H6a2 2 0 0 1-2-2V8"/></svg>';
const IconAi = '<span class="gallery-tool__ai-mark" aria-hidden="true">Ai</span>';
const AI_CREATED_TOOLTIP = 'Создано с помощью Ai';

/**
 * UI state enumeration
 */
enum UiState {
  Empty = 'empty',
  Loading = 'loading',
  Filled = 'filled'
}

/**
 * UI nodes interface
 */
interface Nodes {
  wrapper: HTMLElement;
  itemsContainer: HTMLElement;
  addButtons: HTMLElement;
  fileButton: HTMLElement;
  aiButton: HTMLButtonElement;
  clipboardButton: HTMLButtonElement;
  urlButton: HTMLElement;
  urlInput: HTMLElement;
  columnsControl: HTMLElement;
}

interface UiParams {
  api: API;
  config: GalleryConfig;
  onSelectFile: () => void;
  onPasteFile?: (file: Blob) => void;
  onSelectUrl: (url: string) => void;
  onColumnsChange: (columns: number) => void;
  onRemoveImage: (url: string, mediaId?: string) => void;
  onCropImage: (item: HTMLElement) => void;
  onItemSettingsChange?: () => void;
  onOpenAi?: () => void;
  readOnly: boolean;
}

/**
 * Gallery UI class
 */
export default class Ui {
  /** Minimum number of columns */
  private static readonly MIN_COLUMNS = 1;
  /** Maximum number of columns */
  private static readonly MAX_COLUMNS = 5;

  public nodes: Nodes;
  private api: API;
  private config: GalleryConfig;
  private onSelectFile: () => void;
  private onPasteFile: (file: Blob) => void;
  private onSelectUrl: (url: string) => void;
  private onColumnsChange: (columns: number) => void;
  private onRemoveImage: (url: string, mediaId?: string) => void;
  private onCropImage: (item: HTMLElement) => void;
  private onItemSettingsChange: () => void;
  private onOpenAi: () => void;
  private readOnly: boolean;
  private currentColumns: number = 1;
  private previousColumns: number = 1;
  private isRendering: boolean = false;
  private columnsLocked: boolean = false;

  constructor({ api, config, onSelectFile, onPasteFile, onSelectUrl, onColumnsChange, onRemoveImage, onCropImage, onItemSettingsChange, onOpenAi, readOnly }: UiParams) {
    this.api = api;
    this.config = config;
    this.onSelectFile = onSelectFile;
    this.onPasteFile = onPasteFile ?? (() => undefined);
    this.onSelectUrl = onSelectUrl;
    this.onColumnsChange = onColumnsChange;
    this.onRemoveImage = onRemoveImage;
    this.onCropImage = onCropImage;
    this.onItemSettingsChange = onItemSettingsChange ?? (() => undefined);
    this.onOpenAi = onOpenAi ?? (() => undefined);
    this.readOnly = readOnly;

    this.nodes = {
      wrapper: make('div', [this.CSS.wrapper]),
      itemsContainer: make('div', [this.CSS.itemsContainer]),
      addButtons: make('div', [this.CSS.addButtons]),
      fileButton: this.createFileButton(),
      aiButton: this.createAiButton(),
      clipboardButton: this.createClipboardButton(),
      urlButton: make('div'), // unused, kept for interface compatibility
      urlInput: this.createUrlInput(),
      columnsControl: this.createColumnsControl(),
    };

    this.nodes.addButtons.appendChild(this.nodes.fileButton);
    if (this.config.generation !== undefined && !this.readOnly) {
      this.nodes.addButtons.appendChild(this.nodes.aiButton);
    }
    this.nodes.addButtons.appendChild(this.nodes.clipboardButton);
    this.nodes.addButtons.appendChild(this.nodes.urlInput);
    this.nodes.addButtons.appendChild(this.nodes.columnsControl);

    this.nodes.wrapper.appendChild(this.nodes.itemsContainer);
    this.nodes.wrapper.appendChild(this.nodes.addButtons);
  }

  private get CSS() {
    return {
      wrapper: 'gallery-tool',
      itemsContainer: 'gallery-tool__items',
      item: 'gallery-tool__item',
      itemImage: 'gallery-tool__item-image',
      itemPreloader: 'gallery-tool__item-preloader',
      itemDimensions: 'gallery-tool__item-dimensions',
      itemAiBadge: 'gallery-tool__item-ai-badge',
      itemCaption: 'gallery-tool__item-caption',
      itemSource: 'gallery-tool__item-source',
      itemSourceLink: 'gallery-tool__item-source-link',
      itemControls: 'gallery-tool__item-controls',
      itemRemove: 'gallery-tool__item-remove',
      itemMoveLeft: 'gallery-tool__item-move-left',
      itemMoveRight: 'gallery-tool__item-move-right',
      itemCrop: 'gallery-tool__item-crop',
      itemSettings: 'gallery-tool__item-settings',
      itemSettingsWrapper: 'gallery-tool__item-settings-wrapper',
      itemSettingsPanel: 'gallery-tool__item-settings-panel',
      itemSetting: 'gallery-tool__item-setting',
      itemCropped: 'gallery-tool__item--cropped',
      itemUnlimitedHeight: 'gallery-tool__item--unlimited-height',
      itemPlain: 'gallery-tool__item--plain',
      addButtons: 'gallery-tool__add-buttons',
      button: this.api.styles.button,
      input: this.api.styles.input,
      urlInput: 'gallery-tool__url-input',
      urlInputWrapper: 'gallery-tool__url-input-wrapper',
      columnsControl: 'gallery-tool__columns-control',
      columnsButton: 'gallery-tool__columns-button',
      columnsDisplay: 'gallery-tool__columns-display',
      aiButton: 'gallery-tool__ai-button',
      clipboardButton: 'gallery-tool__clipboard-button',
    };
  }

  /**
   * Render the gallery UI
   */
  public render(items: GalleryItemData[], columns: number): HTMLElement {
    this.currentColumns = columns;
    this.updateColumnsClass();
    this.updateColumnsDisplay();

    this.isRendering = true;
    try {
      if (items.length === 0) {
        this.toggleState(UiState.Empty);
      } else {
        items.forEach(item => this.addItem(item));
        this.toggleState(UiState.Filled);
      }
    } finally {
      this.isRendering = false;
    }

    if (items.length > 0) {
      this.columnsLocked = true;
    }

    return this.nodes.wrapper;
  }

  /**
   * Add a new item to the gallery
   */
  public addItem(data: GalleryItemData): HTMLElement {
    const item = make('div', [this.CSS.item]);
    const imageContainer = make('div', [this.CSS.itemImage]);
    const preloader = make('div', [this.CSS.itemPreloader]);

    const hasCrop = Boolean(data.crop && data.imagorPath && !data.disableOptimization);
    const imgSrc = data.disableOptimization
      ? data.url
      : (hasCrop && data.crop && data.imagorPath)
      ? this.buildPreviewUrl(data.imagorPath, data.crop)
      : resizeDisplayUrl(data.url);
    const img = make('img', null, { src: imgSrc }) as HTMLImageElement;
    const displayWidth = hasCrop && data.croppedWidth ? data.croppedWidth : data.width;
    const displayHeight = hasCrop && data.croppedHeight ? data.croppedHeight : data.height;

    if (displayWidth && displayHeight) {
      img.style.aspectRatio = `${displayWidth} / ${displayHeight}`;
    }

    if (hasCrop) {
      img.style.width = '100%';
      img.style.maxHeight = 'none';
      item.classList.add(this.CSS.itemCropped);
    }
    if (data.disableHeightLimit) {
      img.style.maxHeight = 'none';
      item.classList.add(this.CSS.itemUnlimitedHeight);
    }
    if (data.disableDecoration) {
      item.classList.add(this.CSS.itemPlain);
    }

    const caption = make('div', [this.CSS.itemCaption, this.CSS.input], {
      contentEditable: !this.readOnly,
    });
    caption.dataset.placeholder = this.config.captionPlaceholder ?? 'Caption';
    // Use textContent to prevent XSS
    caption.textContent = data.caption || '';

    const source = make('div', [this.CSS.itemSource, this.CSS.input], {
      contentEditable: !this.readOnly,
    });
    source.dataset.placeholder = this.config.sourcePlaceholder ?? 'Source';
    // Use textContent to prevent XSS
    source.textContent = data.source || '';

    const sourceLink = make('div', [this.CSS.itemSourceLink, this.CSS.input], {
      contentEditable: !this.readOnly,
    });
    sourceLink.dataset.placeholder = this.config.sourceLinkPlaceholder ?? 'Source link';
    // Use textContent to prevent XSS
    sourceLink.textContent = data.sourceLink || '';

    imageContainer.appendChild(preloader);
    imageContainer.appendChild(img);

    // Add dimensions badge if available
    if (displayWidth && displayHeight) {
      const dimensions = make('div', [this.CSS.itemDimensions]);
      dimensions.textContent = `${displayWidth} × ${displayHeight}`;
      imageContainer.appendChild(dimensions);
    }

    if (data.isAiGenerated) {
      imageContainer.appendChild(this.createAiBadge());
    }

    img.onload = () => {
      preloader.style.display = 'none';
    };

    item.appendChild(imageContainer);
    item.appendChild(caption);
    item.appendChild(source);
    item.appendChild(sourceLink);

    this.storeItemData(item, data);

    if (!this.readOnly) {
      item.insertBefore(this.createItemControls(item), item.firstChild);
    }

    this.nodes.itemsContainer.appendChild(item);
    this.toggleState(UiState.Filled);

    // Auto-adjust columns after adding item
    this.autoAdjustColumns();

    return item;
  }

  private storeItemData(item: HTMLElement, data: GalleryItemData): void {
    item.dataset.url = data.url;
    if (data.media_id) item.dataset.mediaId = data.media_id;
    if (this.config.cover?.enabled && data.media_id && this.config.cover.coverUuid?.() === data.media_id) {
      item.setAttribute('data-cover', '');
    }
    if (data.width) item.dataset.width = String(data.width);
    if (data.height) item.dataset.height = String(data.height);
    if (data.imagorPath) item.dataset.imagorPath = data.imagorPath;
    if (data.crop && !data.disableOptimization) item.dataset.crop = data.crop;
    if (data.croppedWidth && !data.disableOptimization) item.dataset.croppedWidth = String(data.croppedWidth);
    if (data.croppedHeight && !data.disableOptimization) item.dataset.croppedHeight = String(data.croppedHeight);
    if (data.cropAspectRatio && !data.disableOptimization) item.dataset.cropAspectRatio = data.cropAspectRatio;
    if (typeof data.showOriginalOnClick === 'boolean' && !data.disableOptimization) {
      item.dataset.showOriginalOnClick = String(data.showOriginalOnClick);
    }
    if (data.isAiGenerated) item.dataset.aiGenerated = 'true';
    if (data.disableHeightLimit) item.dataset.disableHeightLimit = 'true';
    if (data.disableOptimization) item.dataset.disableOptimization = 'true';
    if (data.disableDecoration) item.dataset.disableDecoration = 'true';
  }

  /**
   * Create a placeholder item for loading state
   */
  public createLoadingItem(previewSrc: string): HTMLElement {
    const item = make('div', [this.CSS.item]);
    const imageContainer = make('div', [this.CSS.itemImage]);
    const preloader = make('div', [this.CSS.itemPreloader]);

    if (previewSrc) {
      preloader.style.backgroundImage = `url(${resizeDisplayUrl(previewSrc)})`;
    }

    imageContainer.appendChild(preloader);
    item.appendChild(imageContainer);

    // Empty placeholders for fields
    const caption = make('div', [this.CSS.itemCaption, this.CSS.input], {
      contentEditable: !this.readOnly,
    });
    caption.dataset.placeholder = this.config.captionPlaceholder ?? 'Caption';

    const source = make('div', [this.CSS.itemSource, this.CSS.input], {
      contentEditable: !this.readOnly,
    });
    source.dataset.placeholder = this.config.sourcePlaceholder ?? 'Source';

    const sourceLink = make('div', [this.CSS.itemSourceLink, this.CSS.input], {
      contentEditable: !this.readOnly,
    });
    sourceLink.dataset.placeholder = this.config.sourceLinkPlaceholder ?? 'Source link';

    item.appendChild(caption);
    item.appendChild(source);
    item.appendChild(sourceLink);

    this.nodes.itemsContainer.appendChild(item);
    this.toggleState(UiState.Loading);

    return item;
  }

  /**
   * Update loading item with uploaded image
   */
  public fillLoadingItem(item: HTMLElement, data: GalleryItemData): void {
    const imageContainer = item.querySelector(`.${this.CSS.itemImage}`) as HTMLElement;
    const preloader = item.querySelector(`.${this.CSS.itemPreloader}`) as HTMLElement;

    const img = make('img', null, {
      src: data.disableOptimization ? data.url : resizeDisplayUrl(data.url),
    }) as HTMLImageElement;
    if (data.width && data.height) {
      img.style.aspectRatio = `${data.width} / ${data.height}`;
    }
    if (data.disableHeightLimit) {
      img.style.maxHeight = 'none';
      item.classList.add(this.CSS.itemUnlimitedHeight);
    }
    if (data.disableDecoration) {
      item.classList.add(this.CSS.itemPlain);
    }
    img.onload = () => {
      if (preloader) {
        preloader.style.display = 'none';
      }
    };

    imageContainer.appendChild(img);

    // Add dimensions badge if available
    if (data.width && data.height) {
      const dimensions = make('div', [this.CSS.itemDimensions]);
      dimensions.textContent = `${data.width} × ${data.height}`;
      imageContainer.appendChild(dimensions);
    }

    this.storeItemData(item, data);
    if (data.isAiGenerated) {
      imageContainer.appendChild(this.createAiBadge());
    }

    if (!this.readOnly) {
      const controls = this.createItemControls(item);
      item.insertBefore(controls, item.firstChild);
    }

    this.toggleState(UiState.Filled);

    // Auto-adjust columns after filling item
    this.autoAdjustColumns();
  }

  /**
   * Get all items data
   */
  public getItemsData(): GalleryItemData[] {
    const items = this.nodes.itemsContainer.querySelectorAll(`.${this.CSS.item}`);
    const data: GalleryItemData[] = [];

    items.forEach((item) => {
      const el = item as HTMLElement;
      const url = el.dataset.url;
      if (!url) return;

      // Use textContent to prevent XSS when saving data
      const caption = item.querySelector(`.${this.CSS.itemCaption}`)?.textContent || '';
      const source = item.querySelector(`.${this.CSS.itemSource}`)?.textContent || '';
      const sourceLink = item.querySelector(`.${this.CSS.itemSourceLink}`)?.textContent || '';

      // Read dimensions from data-attributes
      const width = el.dataset.width ? parseInt(el.dataset.width, 10) : undefined;
      const height = el.dataset.height ? parseInt(el.dataset.height, 10) : undefined;

      const disableHeightLimit = el.dataset.disableHeightLimit === 'true';
      const disableOptimization = el.dataset.disableOptimization === 'true';
      const disableDecoration = el.dataset.disableDecoration === 'true';

      const imagorPath = el.dataset.imagorPath || undefined;
      const crop = disableOptimization ? undefined : el.dataset.crop || undefined;
      const croppedWidth = !disableOptimization && el.dataset.croppedWidth
        ? parseInt(el.dataset.croppedWidth, 10)
        : undefined;
      const croppedHeight = !disableOptimization && el.dataset.croppedHeight
        ? parseInt(el.dataset.croppedHeight, 10)
        : undefined;
      const cropAspectRatio = !disableOptimization && (el.dataset.cropAspectRatio === '16:9' || el.dataset.cropAspectRatio === '1:1')
        ? el.dataset.cropAspectRatio
        : !disableOptimization && el.dataset.cropAspectRatio === '3:2'
          ? '3:2'
          : !disableOptimization && el.dataset.cropAspectRatio === 'free'
            ? 'free'
            : undefined;
      const showOriginalOnClick = disableOptimization || el.dataset.showOriginalOnClick === undefined
        ? undefined
        : el.dataset.showOriginalOnClick === 'true';
      const media_id = el.dataset.mediaId || undefined;
      const isAiGenerated = el.dataset.aiGenerated === 'true';

      const itemData: GalleryItemData = {
        url,
        media_id,
        imagorPath,
        caption,
        source,
        sourceLink,
        width,
        height,
        crop,
        croppedWidth,
        croppedHeight,
      };

      if (cropAspectRatio !== undefined) {
        itemData.cropAspectRatio = cropAspectRatio;
      }
      if (showOriginalOnClick !== undefined) {
        itemData.showOriginalOnClick = showOriginalOnClick;
      }
      if (isAiGenerated) {
        itemData.isAiGenerated = true;
      }
      if (disableHeightLimit) {
        itemData.disableHeightLimit = true;
      }
      if (disableOptimization) {
        itemData.disableOptimization = true;
      }
      if (disableDecoration) {
        itemData.disableDecoration = true;
      }

      data.push(itemData);
    });

    return data;
  }

  /**
   * Update item DOM after crop operation
   */
  public updateItemAfterCrop(
    item: HTMLElement,
    crop: string | undefined,
    croppedWidth: number,
    croppedHeight: number,
    showOriginalOnClick: boolean | undefined,
    cropAspectRatio: GalleryItemData['cropAspectRatio'] | undefined
  ): void {
    const img = item.querySelector(`.${this.CSS.itemImage} img`) as HTMLImageElement | null;
    if (!img) return;
    if (crop && item.dataset.disableOptimization === 'true') return;

    if (crop) {
      // Apply crop
      item.dataset.crop = crop;
      item.dataset.croppedWidth = String(croppedWidth);
      item.dataset.croppedHeight = String(croppedHeight);
      item.dataset.showOriginalOnClick = String(showOriginalOnClick ?? false);
      item.dataset.cropAspectRatio = cropAspectRatio ?? '3:2';
      item.classList.add(this.CSS.itemCropped);

      const imagorPath = item.dataset.imagorPath;
      if (imagorPath) {
        img.src = this.buildPreviewUrl(imagorPath, crop);
      }
      img.style.width = '100%';
      img.style.maxHeight = 'none';
      this.updateItemDimensions(item, croppedWidth, croppedHeight);
    } else {
      // Reset crop
      delete item.dataset.crop;
      delete item.dataset.croppedWidth;
      delete item.dataset.croppedHeight;
      delete item.dataset.showOriginalOnClick;
      delete item.dataset.cropAspectRatio;
      item.classList.remove(this.CSS.itemCropped);

      img.src = item.dataset.disableOptimization === 'true'
        ? item.dataset.url || ''
        : resizeDisplayUrl(item.dataset.url || '');
      img.style.width = '';
      img.style.maxHeight = item.dataset.disableHeightLimit === 'true' ? 'none' : '';
      this.updateItemDimensions(
        item,
        item.dataset.width ? parseInt(item.dataset.width, 10) : undefined,
        item.dataset.height ? parseInt(item.dataset.height, 10) : undefined
      );
    }
  }

  /** Update an item's effective dimensions badge and aspect ratio. */
  private updateItemDimensions(item: HTMLElement, width?: number, height?: number): void {
    const imageContainer = item.querySelector<HTMLElement>(`.${this.CSS.itemImage}`);
    const image = imageContainer?.querySelector<HTMLImageElement>('img');
    const hasDimensions = Number.isFinite(width) && Number.isFinite(height)
      && (width ?? 0) > 0 && (height ?? 0) > 0;
    let dimensions = imageContainer?.querySelector<HTMLElement>(`.${this.CSS.itemDimensions}`) ?? null;

    if (!hasDimensions) {
      dimensions?.remove();
      if (image) {
        image.style.aspectRatio = '';
      }

      return;
    }

    if (dimensions === null && imageContainer !== null) {
      dimensions = make('div', [this.CSS.itemDimensions]);
      imageContainer.appendChild(dimensions);
    }

    if (dimensions !== null) {
      dimensions.textContent = `${width} × ${height}`;
    }
    if (image) {
      image.style.aspectRatio = `${width} / ${height}`;
    }
  }

  /**
   * Build imagor preview URL with crop + fit-in resize.
   * Mirrors ImageService::url() logic using imagorPath (normalized short URL).
   */
  public buildPreviewUrl(imagorPath: string, crop: string, maxWidth = 600): string {
    const mediaHost = this.config.mediaHost;
    if (!mediaHost || !imagorPath) return '';

    const segments = ['unsafe'];
    if (crop) segments.push(crop);
    segments.push('fit-in', `${maxWidth}x0`, imagorPath);
    return `${mediaHost}/${segments.join('/')}`;
  }

  /**
   * Get current columns count
   */
  public getColumns(): number {
    return this.currentColumns;
  }

  private createFileButton(): HTMLElement {
    const button = make('div', [this.CSS.button]);
    button.innerHTML = `${IconPicture} ${this.config.buttonContent}`;
    button.addEventListener('click', () => this.onSelectFile());
    return button;
  }

  private createClipboardButton(): HTMLButtonElement {
    const button = make('button', [this.CSS.button, this.CSS.clipboardButton], { type: 'button' }) as HTMLButtonElement;
    button.innerHTML = `${IconClipboard}<span>${this.api.i18n.t('Вставить из буфера')}</span>`;
    button.setAttribute('aria-label', this.api.i18n.t('Вставить изображение из буфера'));
    button.addEventListener('click', () => {
      void this.pasteFromClipboard();
    });

    return button;
  }

  private createAiButton(): HTMLButtonElement {
    const button = make('button', [this.CSS.button, this.CSS.aiButton], { type: 'button' }) as HTMLButtonElement;
    button.innerHTML = `${IconAi}<span>Генерация</span>`;
    button.setAttribute('aria-label', 'Генерация');
    button.addEventListener('click', () => this.onOpenAi());

    return button;
  }

  private createAiBadge(): HTMLElement {
    const badge = make('span', [this.CSS.itemAiBadge], {
      title: AI_CREATED_TOOLTIP,
    });
    badge.innerHTML = IconAi;
    badge.setAttribute('aria-label', AI_CREATED_TOOLTIP);

    return badge;
  }

  private createUrlInput(): HTMLElement {
    const wrapper = make('div', [this.CSS.urlInputWrapper]);

    const input = make('input', [this.CSS.urlInput, this.CSS.input], {
      type: 'text',
    }) as HTMLInputElement;
    input.placeholder = this.config.urlInputPlaceholder ?? 'Вставьте ссылку на изображение';

    // Handle Enter key
    input.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.handleUrlInput(input);
      }
    });

    input.addEventListener('paste', (event: ClipboardEvent) => {
      const image = this.imageFromClipboardData(event.clipboardData);
      if (image) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        input.value = '';
        this.onPasteFile(image);

        return;
      }

      setTimeout(() => {
        this.handleUrlInput(input);
      }, 50);
    });

    wrapper.appendChild(input);
    return wrapper;
  }

  private imageFromClipboardData(data: DataTransfer | null): Blob | null {
    if (!data) return null;

    const file = Array.from(data.files).find(candidate => candidate.type.startsWith('image/'));
    if (file) return file;

    for (const item of Array.from(data.items)) {
      if (item.kind === 'file' && item.type.startsWith('image/')) {
        return item.getAsFile();
      }
    }

    return null;
  }

  private async pasteFromClipboard(): Promise<void> {
    if (!navigator.clipboard || typeof navigator.clipboard.read !== 'function') {
      this.showClipboardError('Не удалось прочитать буфер. Нажмите Ctrl/Cmd+V в поле ссылки.');

      return;
    }

    try {
      const clipboardItems = await navigator.clipboard.read();

      for (const clipboardItem of clipboardItems) {
        const imageType = clipboardItem.types.find(type => type.startsWith('image/'));
        if (imageType) {
          this.onPasteFile(await clipboardItem.getType(imageType));

          return;
        }
      }

      this.showClipboardError('В буфере обмена нет изображения.');
    } catch {
      this.showClipboardError('Не удалось прочитать буфер. Нажмите Ctrl/Cmd+V в поле ссылки.');
    }
  }

  private showClipboardError(message: string): void {
    this.api.notifier.show({ message: this.api.i18n.t(message), style: 'error' });
  }

  /**
   * Process URL from input field
   */
  private handleUrlInput(input: HTMLInputElement): void {
    const url = input.value.trim();
    if (url && this.isValidImageUrl(url)) {
      this.onSelectUrl(url);
      input.value = '';
    }
  }

  private createColumnsControl(): HTMLElement {
    const wrapper = make('div', [this.CSS.columnsControl]);

    const minusBtn = make('button', [this.CSS.columnsButton], { type: 'button' });
    minusBtn.innerHTML = '−';
    minusBtn.addEventListener('click', () => this.changeColumns(-1));

    const display = make('span', [this.CSS.columnsDisplay]);
    display.textContent = `${this.currentColumns} col`;

    const plusBtn = make('button', [this.CSS.columnsButton], { type: 'button' });
    plusBtn.innerHTML = '+';
    plusBtn.addEventListener('click', () => this.changeColumns(1));

    wrapper.appendChild(minusBtn);
    wrapper.appendChild(display);
    wrapper.appendChild(plusBtn);

    return wrapper;
  }

  private changeColumns(delta: number): void {
    const newColumns = Math.min(Ui.MAX_COLUMNS, Math.max(Ui.MIN_COLUMNS, this.currentColumns + delta));
    if (newColumns !== this.currentColumns) {
      this.columnsLocked = true;
      this.previousColumns = this.currentColumns;
      this.currentColumns = newColumns;
      this.updateColumnsClass();
      this.updateColumnsDisplay();
      this.onColumnsChange(newColumns);
    }
  }

  private updateColumnsClass(): void {
    // Optimized: only replace changed class instead of removing all
    const oldClass = `gallery-tool--columns-${this.previousColumns}`;
    const newClass = `gallery-tool--columns-${this.currentColumns}`;

    if (this.nodes.wrapper.classList.contains(oldClass)) {
      this.nodes.wrapper.classList.replace(oldClass, newClass);
    } else {
      // Fallback for initial render
      for (let i = Ui.MIN_COLUMNS; i <= Ui.MAX_COLUMNS; i++) {
        this.nodes.wrapper.classList.remove(`gallery-tool--columns-${i}`);
      }
      this.nodes.wrapper.classList.add(newClass);
    }
  }

  /**
   * Validate URL to prevent malicious protocols
   */
  private isValidImageUrl(url: string): boolean {
    // Allow http, https, and data: URLs for images
    return url.startsWith('http://') ||
           url.startsWith('https://') ||
           url.startsWith('data:image/');
  }

  private updateColumnsDisplay(): void {
    const display = this.nodes.columnsControl.querySelector(`.${this.CSS.columnsDisplay}`);
    if (display) {
      display.textContent = `${this.currentColumns} col`;
    }
  }

  /**
   * Auto-adjust columns based on items count
   * 1 item = 1 column, 2+ items = 2 columns
   */
  private autoAdjustColumns(): void {
    if (this.isRendering || this.columnsLocked) return;

    const itemsCount = this.nodes.itemsContainer.children.length;
    const targetColumns = itemsCount <= 1 ? 1 : 2;

    if (targetColumns !== this.currentColumns) {
      this.previousColumns = this.currentColumns;
      this.currentColumns = targetColumns;
      this.updateColumnsClass();
      this.updateColumnsDisplay();
      this.onColumnsChange(targetColumns);
    }
  }

  private createItemControls(item: HTMLElement): HTMLElement {
    const controls = make('div', [this.CSS.itemControls]);

    const removeBtn = make('button', [this.CSS.itemRemove], { type: 'button' });
    removeBtn.innerHTML = '×';
    removeBtn.title = this.api.i18n.t('Удалить изображение');
    removeBtn.setAttribute('aria-label', this.api.i18n.t('Удалить изображение'));
    removeBtn.addEventListener('click', () => {
      // Сохраняем ссылку до удаления DOM-элемента для фонового удаления Media.
      const imageUrl = item.dataset.url;
      const mediaId = item.dataset.mediaId;

      item.remove();

      const itemsCount = this.nodes.itemsContainer.children.length;
      if (itemsCount === 0) {
        this.toggleState(UiState.Empty);
        this.columnsLocked = false;
      }

      this.autoAdjustColumns();

      if (imageUrl || mediaId) {
        this.onRemoveImage(imageUrl ?? '', mediaId);
      }
    });

    const moveLeftBtn = make('button', [this.CSS.itemMoveLeft], { type: 'button' });
    moveLeftBtn.innerHTML = '←';
    moveLeftBtn.addEventListener('click', () => this.moveItem(item, -1));

    const moveRightBtn = make('button', [this.CSS.itemMoveRight], { type: 'button' });
    moveRightBtn.innerHTML = '→';
    moveRightBtn.addEventListener('click', () => this.moveItem(item, 1));

    const cropBtn = make('button', [this.CSS.itemCrop], { type: 'button' }) as HTMLButtonElement;
    cropBtn.innerHTML = IconCrop;
    cropBtn.title = this.api.i18n.t('Обрезать изображение');
    cropBtn.setAttribute('aria-label', this.api.i18n.t('Обрезать изображение'));
    cropBtn.disabled = item.dataset.disableOptimization === 'true';
    cropBtn.addEventListener('click', () => this.onCropImage(item));

    const settings = createItemSettings({
      item,
      classes: {
        button: this.CSS.itemSettings,
        wrapper: this.CSS.itemSettingsWrapper,
        panel: this.CSS.itemSettingsPanel,
        option: this.CSS.itemSetting,
      },
      translate: message => this.api.i18n.t(message),
      onChange: (setting, enabled) => this.updateItemSetting(item, setting, enabled),
    });

    controls.appendChild(moveLeftBtn);
    controls.appendChild(cropBtn);
    controls.appendChild(settings);

    // Выбор базовой обложки остаётся доступен и при ручном override.
    if (this.config.cover?.enabled) {
      const coverBtn = make('button', ['gallery-tool__item-cover'], { type: 'button' });
      coverBtn.innerHTML = '★';
      coverBtn.title = this.api.i18n.t('Сделать обложкой');
      coverBtn.setAttribute('aria-label', this.api.i18n.t('Сделать обложкой'));
      coverBtn.setAttribute('aria-pressed', String(item.hasAttribute('data-cover')));
      coverBtn.addEventListener('click', () => this.onSetCover(item));
      controls.appendChild(coverBtn);
    }

    controls.appendChild(removeBtn);
    controls.appendChild(moveRightBtn);

    return controls;
  }

  private updateItemSetting(item: HTMLElement, setting: GalleryItemSetting, enabled: boolean): void {
    if (enabled) {
      item.dataset[setting] = 'true';
    } else {
      delete item.dataset[setting];
    }

    const image = item.querySelector<HTMLImageElement>(`.${this.CSS.itemImage} img`);
    const cropButton = item.querySelector<HTMLButtonElement>(`.${this.CSS.itemCrop}`);

    if (setting === 'disableHeightLimit') {
      item.classList.toggle(this.CSS.itemUnlimitedHeight, enabled);
      if (image) {
        image.style.maxHeight = enabled || item.classList.contains(this.CSS.itemCropped) ? 'none' : '';
      }
    }

    if (setting === 'disableOptimization') {
      cropButton?.toggleAttribute('disabled', enabled);
      if (enabled) {
        this.updateItemAfterCrop(item, undefined, 0, 0, undefined, undefined);
      } else if (image) {
        image.src = resizeDisplayUrl(item.dataset.url || '');
      }
    }

    if (setting === 'disableDecoration') {
      item.classList.toggle(this.CSS.itemPlain, enabled);
    }

    this.onItemSettingsChange();
  }

  /**
   * Выбрать элемент gallery базовой обложкой в состоянии формы.
   */
  private onSetCover(item: HTMLElement): boolean {
    const cover = this.config.cover;
    if (!cover?.enabled) {
      return false;
    }

    const mediaId = item.dataset.mediaId;
    if (!mediaId) {
      this.api.notifier.show({ message: this.api.i18n.t('Сначала дождитесь загрузки картинки'), style: 'error' });

      return false;
    }

    this.markCover(mediaId);
    cover.onCoverChanged?.(mediaId);
    this.api.notifier.show({ message: this.api.i18n.t('Базовая обложка обновлена') });

    return true;
  }

  /**
   * Подсветить элемент-обложку (по media uuid), снять метку с остальных.
   */
  public markCover(coverUuid: string | null): void {
    const items = this.nodes.itemsContainer.querySelectorAll(`.${this.CSS.item}`);
    items.forEach((el) => {
      const item = el as HTMLElement;
      const isCover = !!coverUuid && item.dataset.mediaId === coverUuid;
      item.toggleAttribute('data-cover', isCover);
      item.querySelector('[aria-label="Сделать обложкой"]')
        ?.setAttribute('aria-pressed', String(isCover));
    });
  }

  private moveItem(item: HTMLElement, direction: number): void {
    const items = Array.from(this.nodes.itemsContainer.children);
    const index = items.indexOf(item);
    const newIndex = index + direction;

    if (newIndex < 0 || newIndex >= items.length) return;

    if (direction < 0) {
      this.nodes.itemsContainer.insertBefore(item, items[newIndex]);
    } else {
      this.nodes.itemsContainer.insertBefore(items[newIndex], item);
    }
  }

  private toggleState(state: UiState): void {
    this.nodes.wrapper.classList.remove(
      'gallery-tool--empty',
      'gallery-tool--loading',
      'gallery-tool--filled'
    );
    this.nodes.wrapper.classList.add(`gallery-tool--${state}`);
  }

  /**
   * Apply tune to wrapper
   */
  public applyTune(tuneName: string, status: boolean): void {
    this.nodes.wrapper.classList.toggle(`gallery-tool--${tuneName}`, status);
  }
}
