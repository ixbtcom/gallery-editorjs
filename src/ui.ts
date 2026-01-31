import { IconPicture, IconLink } from '@codexteam/icons';
import { make } from './utils/dom';
import type { API } from '@editorjs/editorjs';
import type { GalleryConfig, GalleryItemData } from './types/types';

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
  private readOnly: boolean;
  private currentColumns: number = 1;
  private previousColumns: number = 1;

  constructor({ api, config, onSelectFile, onSelectUrl, onColumnsChange, readOnly }: UiParams) {
    this.api = api;
    this.config = config;
    this.onSelectFile = onSelectFile;
    this.onSelectUrl = onSelectUrl;
    this.onColumnsChange = onColumnsChange;
    this.readOnly = readOnly;

    this.nodes = {
      wrapper: make('div', [this.CSS.wrapper]),
      itemsContainer: make('div', [this.CSS.itemsContainer]),
      addButtons: make('div', [this.CSS.addButtons]),
      fileButton: this.createFileButton(),
      urlButton: this.createUrlButton(),
      urlInput: this.createUrlInput(),
      columnsControl: this.createColumnsControl(),
    };

    this.nodes.addButtons.appendChild(this.nodes.fileButton);
    this.nodes.addButtons.appendChild(this.nodes.urlButton);
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

    if (items.length === 0) {
      this.toggleState(UiState.Empty);
    } else {
      items.forEach(item => this.addItem(item));
      this.toggleState(UiState.Filled);
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
    const img = make('img', null, { src: data.url }) as HTMLImageElement;

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

    item.dataset.url = data.url;
    if (data.width) item.dataset.width = String(data.width);
    if (data.height) item.dataset.height = String(data.height);

    this.nodes.itemsContainer.appendChild(item);
    this.toggleState(UiState.Filled);

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
    if (data.width) item.dataset.width = String(data.width);
    if (data.height) item.dataset.height = String(data.height);

    if (!this.readOnly) {
      const controls = this.createItemControls(item);
      item.insertBefore(controls, item.firstChild);
    }

    this.toggleState(UiState.Filled);
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

      data.push({ url, caption, source, sourceLink, width, height });
    });

    return data;
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

  private createUrlButton(): HTMLElement {
    const button = make('div', [this.CSS.button]);
    button.innerHTML = `${IconLink} ${this.config.urlButtonContent}`;
    button.addEventListener('click', () => this.toggleUrlInput());
    return button;
  }

  private createUrlInput(): HTMLElement {
    const wrapper = make('div', [this.CSS.urlInputWrapper]);
    wrapper.style.display = 'none';

    const input = make('input', [this.CSS.urlInput, this.CSS.input], {
      type: 'text',
    }) as HTMLInputElement;
    input.placeholder = 'Paste image URL and press Enter';

    input.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const url = input.value.trim();
        // Validate URL to prevent javascript: and other malicious protocols
        if (url && this.isValidImageUrl(url)) {
          this.onSelectUrl(url);
          input.value = '';
          wrapper.style.display = 'none';
        }
      }
      if (e.key === 'Escape') {
        wrapper.style.display = 'none';
        input.value = '';
      }
    });

    wrapper.appendChild(input);
    return wrapper;
  }

  private toggleUrlInput(): void {
    const wrapper = this.nodes.urlInput;
    const input = wrapper.querySelector('input') as HTMLInputElement;

    if (wrapper.style.display === 'none') {
      wrapper.style.display = 'block';
      input.focus();
    } else {
      wrapper.style.display = 'none';
      input.value = '';
    }
  }

  private createColumnsControl(): HTMLElement {
    const wrapper = make('div', [this.CSS.columnsControl]);

    const minusBtn = make('button', [this.CSS.columnsButton]);
    minusBtn.innerHTML = '−';
    minusBtn.addEventListener('click', () => this.changeColumns(-1));

    const display = make('span', [this.CSS.columnsDisplay]);
    display.textContent = `${this.currentColumns} col`;

    const plusBtn = make('button', [this.CSS.columnsButton]);
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

  private createItemControls(item: HTMLElement): HTMLElement {
    const controls = make('div', [this.CSS.itemControls]);

    const removeBtn = make('button', [this.CSS.itemRemove]);
    removeBtn.innerHTML = '×';
    removeBtn.addEventListener('click', () => {
      item.remove();
      if (this.nodes.itemsContainer.children.length === 0) {
        this.toggleState(UiState.Empty);
      }
    });

    const moveLeftBtn = make('button', [this.CSS.itemMoveLeft]);
    moveLeftBtn.innerHTML = '←';
    moveLeftBtn.addEventListener('click', () => this.moveItem(item, -1));

    const moveRightBtn = make('button', [this.CSS.itemMoveRight]);
    moveRightBtn.innerHTML = '→';
    moveRightBtn.addEventListener('click', () => this.moveItem(item, 1));

    controls.appendChild(moveLeftBtn);
    controls.appendChild(removeBtn);
    controls.appendChild(moveRightBtn);

    return controls;
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
