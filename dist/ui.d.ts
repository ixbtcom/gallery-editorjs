import { API } from '@editorjs/editorjs';
import { GalleryConfig, GalleryItemData } from './types/types';

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
    onRemoveImage: (url: string) => void;
    readOnly: boolean;
}
/**
 * Gallery UI class
 */
export default class Ui {
    /** Minimum number of columns */
    private static readonly MIN_COLUMNS;
    /** Maximum number of columns */
    private static readonly MAX_COLUMNS;
    nodes: Nodes;
    private api;
    private config;
    private onSelectFile;
    private onSelectUrl;
    private onColumnsChange;
    private onRemoveImage;
    private readOnly;
    private currentColumns;
    private previousColumns;
    constructor({ api, config, onSelectFile, onSelectUrl, onColumnsChange, onRemoveImage, readOnly }: UiParams);
    private get CSS();
    /**
     * Render the gallery UI
     */
    render(items: GalleryItemData[], columns: number): HTMLElement;
    /**
     * Add a new item to the gallery
     */
    addItem(data: GalleryItemData): HTMLElement;
    /**
     * Create a placeholder item for loading state
     */
    createLoadingItem(previewSrc: string): HTMLElement;
    /**
     * Update loading item with uploaded image
     */
    fillLoadingItem(item: HTMLElement, data: GalleryItemData): void;
    /**
     * Get all items data
     */
    getItemsData(): GalleryItemData[];
    /**
     * Get current columns count
     */
    getColumns(): number;
    private createFileButton;
    private createUrlInput;
    /**
     * Process URL from input field
     */
    private handleUrlInput;
    private createColumnsControl;
    private changeColumns;
    private updateColumnsClass;
    /**
     * Validate URL to prevent malicious protocols
     */
    private isValidImageUrl;
    private updateColumnsDisplay;
    /**
     * Auto-adjust columns based on items count
     * 1 item = 1 column, 2+ items = 2 columns
     */
    private autoAdjustColumns;
    private createItemControls;
    private moveItem;
    private toggleState;
    /**
     * Apply tune to wrapper
     */
    applyTune(tuneName: string, status: boolean): void;
    /**
     * Update stretched badge visibility
     */
    private updateStretchedBadge;
}
export {};
