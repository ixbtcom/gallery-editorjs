import { IconPicture } from '@codexteam/icons';
import { make } from './utils/dom';
import type { API } from '@editorjs/editorjs';
import type { GalleryConfig, GalleryItemData } from './types/types';

/**
 * Crop icon SVG
 */
const IconCrop = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2v4"/><path d="M6 6h12a2 2 0 0 1 2 2v8"/><path d="M18 22v-4"/><path d="M18 18H6a2 2 0 0 1-2-2V8"/></svg>';

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
  urlButton: HTMLElement;
  urlInput: HTMLElement;
  columnsControl: HTMLElement;
}

interface UiParams {
  api: API;
  config: GalleryConfig;
  onSelectFile: () => void;
  onSelectUrl: (url: string) => void;
  onColumnsChange: (columns: number) => void;
  onRemoveImage: (url: string, mediaId?: string) => void;
  onCropImage: (item: HTMLElement) => void;
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
  private onSelectUrl: (url: string) => void;
  private onColumnsChange: (columns: number) => void;
  private onRemoveImage: (url: string, mediaId?: string) => void;
  private onCropImage: (item: HTMLElement) => void;
  private readOnly: boolean;
  private currentColumns: number = 1;
  private previousColumns: number = 1;
  private isRendering: boolean = false;
  private columnsLocked: boolean = false;

  constructor({ api, config, onSelectFile, onSelectUrl, onColumnsChange, onRemoveImage, onCropImage, readOnly }: UiParams) {
    this.api = api;
    this.config = config;
    this.onSelectFile = onSelectFile;
    this.onSelectUrl = onSelectUrl;
    this.onColumnsChange = onColumnsChange;
    this.onRemoveImage = onRemoveImage;
    this.onCropImage = onCropImage;
    this.readOnly = readOnly;

    this.nodes = {
      wrapper: make('div', [this.CSS.wrapper]),
      itemsContainer: make('div', [this.CSS.itemsContainer]),
      addButtons: make('div', [this.CSS.addButtons]),
      fileButton: this.createFileButton(),
      urlButton: make('div'), // unused, kept for interface compatibility
      urlInput: this.createUrlInput(),
      columnsControl: this.createColumnsControl(),
    };

    this.nodes.addButtons.appendChild(this.nodes.fileButton);
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
      itemCaption: 'gallery-tool__item-caption',
      itemSource: 'gallery-tool__item-source',
      itemSourceLink: 'gallery-tool__item-source-link',
      itemControls: 'gallery-tool__item-controls',
      itemRemove: 'gallery-tool__item-remove',
      itemMoveLeft: 'gallery-tool__item-move-left',
      itemMoveRight: 'gallery-tool__item-move-right',
      itemCrop: 'gallery-tool__item-crop',
      itemCropped: 'gallery-tool__item--cropped',
      addButtons: 'gallery-tool__add-buttons',
      button: this.api.styles.button,
      input: this.api.styles.input,
      urlInput: 'gallery-tool__url-input',
      urlInputWrapper: 'gallery-tool__url-input-wrapper',
      columnsControl: 'gallery-tool__columns-control',
      columnsButton: 'gallery-tool__columns-button',
      columnsDisplay: 'gallery-tool__columns-display',
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

    // Determine image src: use crop preview if available, otherwise original
    const imgSrc = (data.crop && data.imagorPath)
      ? this.buildPreviewUrl(data.imagorPath, data.crop)
      : data.url;
    const img = make('img', null, { src: imgSrc }) as HTMLImageElement;

    // Mark item as cropped
    if (data.crop) {
      item.classList.add(this.CSS.itemCropped);
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
    if (data.width && data.height) {
      const dimensions = make('div', [this.CSS.itemDimensions]);
      dimensions.textContent = `${data.width} × ${data.height}`;
      imageContainer.appendChild(dimensions);
    }

    img.onload = () => {
      preloader.style.display = 'none';
    };

    if (!this.readOnly) {
      const controls = this.createItemControls(item);
      item.appendChild(controls);
    }

    item.appendChild(imageContainer);
    item.appendChild(caption);
    item.appendChild(source);
    item.appendChild(sourceLink);

    // Store data in dataset
    item.dataset.url = data.url;
    if (data.media_id) item.dataset.mediaId = data.media_id;
    if (this.config.cover?.enabled && data.media_id && this.config.cover.coverUuid?.() === data.media_id) {
      item.setAttribute('data-cover', '');
    }
    if (data.width) item.dataset.width = String(data.width);
    if (data.height) item.dataset.height = String(data.height);
    if (data.imagorPath) item.dataset.imagorPath = data.imagorPath;
    if (data.crop) item.dataset.crop = data.crop;
    if (data.croppedWidth) item.dataset.croppedWidth = String(data.croppedWidth);
    if (data.croppedHeight) item.dataset.croppedHeight = String(data.croppedHeight);

    this.nodes.itemsContainer.appendChild(item);
    this.toggleState(UiState.Filled);

    // Auto-adjust columns after adding item
    this.autoAdjustColumns();

    return item;
  }

  /**
   * Create a placeholder item for loading state
   */
  public createLoadingItem(previewSrc: string): HTMLElement {
    const item = make('div', [this.CSS.item]);
    const imageContainer = make('div', [this.CSS.itemImage]);
    const preloader = make('div', [this.CSS.itemPreloader]);

    if (previewSrc) {
      preloader.style.backgroundImage = `url(${previewSrc})`;
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

    const img = make('img', null, { src: data.url }) as HTMLImageElement;
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

    item.dataset.url = data.url;
    if (data.media_id) item.dataset.mediaId = data.media_id;
    if (this.config.cover?.enabled && data.media_id && this.config.cover.coverUuid?.() === data.media_id) {
      item.setAttribute('data-cover', '');
    }
    if (data.width) item.dataset.width = String(data.width);
    if (data.height) item.dataset.height = String(data.height);
    if (data.imagorPath) item.dataset.imagorPath = data.imagorPath;

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

      // Read crop data (undefined = omitted from JSON)
      const imagorPath = el.dataset.imagorPath || undefined;
      const crop = el.dataset.crop || undefined;
      const croppedWidth = el.dataset.croppedWidth ? parseInt(el.dataset.croppedWidth, 10) : undefined;
      const croppedHeight = el.dataset.croppedHeight ? parseInt(el.dataset.croppedHeight, 10) : undefined;
      const media_id = el.dataset.mediaId || undefined;

      data.push({ url, media_id, imagorPath, caption, source, sourceLink, width, height, crop, croppedWidth, croppedHeight });
    });

    return data;
  }

  /**
   * Update item DOM after crop operation
   */
  public updateItemAfterCrop(item: HTMLElement, crop: string | undefined, croppedWidth: number, croppedHeight: number): void {
    const img = item.querySelector(`.${this.CSS.itemImage} img`) as HTMLImageElement | null;
    if (!img) return;

    if (crop) {
      // Apply crop
      item.dataset.crop = crop;
      item.dataset.croppedWidth = String(croppedWidth);
      item.dataset.croppedHeight = String(croppedHeight);
      item.classList.add(this.CSS.itemCropped);

      const imagorPath = item.dataset.imagorPath;
      if (imagorPath) {
        img.src = this.buildPreviewUrl(imagorPath, crop);
      }
    } else {
      // Reset crop
      delete item.dataset.crop;
      delete item.dataset.croppedWidth;
      delete item.dataset.croppedHeight;
      item.classList.remove(this.CSS.itemCropped);

      img.src = item.dataset.url || '';
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

    // Handle paste - auto-submit URL
    input.addEventListener('paste', (e: ClipboardEvent) => {
      // Small delay to get pasted value
      setTimeout(() => {
        this.handleUrlInput(input);
      }, 50);
    });

    wrapper.appendChild(input);
    return wrapper;
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
    removeBtn.addEventListener('click', () => {
      // Get URL + media_id before removing (media_id -> удаление Media + очистка обложки)
      const imageUrl = item.dataset.url;
      const mediaId = item.dataset.mediaId;
      if (imageUrl || mediaId) {
        this.onRemoveImage(imageUrl ?? '', mediaId);
      }

      item.remove();

      const itemsCount = this.nodes.itemsContainer.children.length;
      if (itemsCount === 0) {
        this.toggleState(UiState.Empty);
        this.columnsLocked = false;
      }

      this.autoAdjustColumns();
    });

    const moveLeftBtn = make('button', [this.CSS.itemMoveLeft], { type: 'button' });
    moveLeftBtn.innerHTML = '←';
    moveLeftBtn.addEventListener('click', () => this.moveItem(item, -1));

    const moveRightBtn = make('button', [this.CSS.itemMoveRight], { type: 'button' });
    moveRightBtn.innerHTML = '→';
    moveRightBtn.addEventListener('click', () => this.moveItem(item, 1));

    const cropBtn = make('button', [this.CSS.itemCrop], { type: 'button' });
    cropBtn.innerHTML = IconCrop;
    cropBtn.addEventListener('click', () => this.onCropImage(item));

    controls.appendChild(moveLeftBtn);
    controls.appendChild(cropBtn);

    // Cover (онлайн-обложка): per-item тоггл, виден только когда включено хостом.
    if (this.config.cover?.enabled) {
      const coverBtn = make('button', ['gallery-tool__item-cover'], { type: 'button' });
      coverBtn.innerHTML = '★';
      coverBtn.title = this.api.i18n.t('Сделать обложкой');
      coverBtn.addEventListener('click', () => {
        void this.onSetCover(item);
      });
      controls.appendChild(coverBtn);
    }

    controls.appendChild(removeBtn);
    controls.appendChild(moveRightBtn);

    return controls;
  }

  /**
   * Тоггл обложки на элементе gallery: серверный endpoint, blocked (ручная -
   * приоритет), затем подсветка + сообщение хосту ($set/трекинг).
   *
   * @param auto - авто-перекат (после удаления обложки): тихий режим без
   *   error-тостов, другой success-текст. Возвращает true, если обложка назначена.
   */
  private async onSetCover(item: HTMLElement, auto = false): Promise<boolean> {
    const cover = this.config.cover;
    if (!cover?.endpoint) {
      return false;
    }

    const mediaId = item.dataset.mediaId;
    if (!mediaId) {
      if (!auto) {
        this.api.notifier.show({ message: this.api.i18n.t('Сначала дождитесь загрузки картинки'), style: 'error' });
      }

      return false;
    }

    try {
      const response = await fetch(cover.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': cover.csrf ?? '' },
        credentials: 'same-origin',
        body: JSON.stringify({ media_id: mediaId }),
      });

      const payload = await response.json().catch(() => ({ success: 0 }));

      if (payload.blocked) {
        if (!auto) {
          this.api.notifier.show({ message: payload.message ?? this.api.i18n.t('Обложка задана вручную'), style: 'error' });
        }

        return false;
      }

      if (payload.success === 1) {
        this.markCover(payload.cover_uuid ?? mediaId);
        cover.onCoverChanged?.(payload.cover_uuid ?? mediaId);
        this.api.notifier.show({
          message: this.api.i18n.t(auto ? 'Обложка переназначена на следующую картинку' : 'Обложка обновлена'),
        });

        return true;
      }

      return false;
    } catch {
      if (!auto) {
        this.api.notifier.show({ message: this.api.i18n.t('Не удалось задать обложку'), style: 'error' });
      }

      return false;
    }
  }

  /**
   * Онлайн-перекат обложки после удаления текущей картинки-обложки: назначает
   * обложкой первую оставшуюся картинку галереи (по DOM-порядку). Если картинок
   * не осталось - очищает обложку онлайн. Вызывается из onRemoveImage при
   * cover_cleared (удалённый элемент был обложкой).
   */
  public async rolloverCover(): Promise<void> {
    const cover = this.config.cover;
    if (!cover?.enabled) {
      return;
    }

    const items = Array.from(
      this.nodes.itemsContainer.querySelectorAll(`.${this.CSS.item}`)
    ) as HTMLElement[];
    const next = items.find((el) => !!el.dataset.mediaId) ?? null;

    if (next) {
      await this.onSetCover(next, true);

      return;
    }

    // Картинок-кандидатов больше нет - очищаем обложку онлайн.
    this.markCover(null);
    cover.onCoverChanged?.(null);
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

    // Show/hide stretched badge
    if (tuneName === 'stretched') {
      this.updateStretchedBadge(status);
    }
  }

  /**
   * Update stretched badge visibility
   */
  private updateStretchedBadge(isStretched: boolean): void {
    const existingBadge = this.nodes.wrapper.querySelector('.gallery-tool__stretched-badge');

    if (isStretched && !existingBadge) {
      const badge = make('div', ['gallery-tool__stretched-badge']);
      badge.textContent = 'Обложка';
      this.nodes.wrapper.insertBefore(badge, this.nodes.wrapper.firstChild);
    } else if (!isStretched && existingBadge) {
      existingBadge.remove();
    }
  }
}
