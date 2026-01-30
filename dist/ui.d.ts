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
    private readOnly;
    private currentColumns;
    private previousColumns;
    constructor({ api, config, onSelectFile, onSelectUrl, onColumnsChange, readOnly }: UiParams);
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
    fillLoadingItem(item: HTMLElement, url: string): void;
    /**
     * Get all items data
     */
    getItemsData(): GalleryItemData[];
    /**
     * Get current columns count
     */
    getColumns(): number;
    private createFileButton;
    private createUrlButton;
    private createUrlInput;
    private toggleUrlInput;
    private createColumnsControl;
    private changeColumns;
    private updateColumnsClass;
    /**
     * Validate URL to prevent malicious protocols
     */
    private isValidImageUrl;
    private updateColumnsDisplay;
    private createItemControls;
    private moveItem;
    private toggleState;
}
export {};
