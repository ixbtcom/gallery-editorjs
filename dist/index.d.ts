import { ToolboxConfig, BlockToolConstructorOptions, BlockTool, PasteConfig, PasteEvent } from '@editorjs/editorjs';
import { TunesMenuConfig } from '@editorjs/editorjs/types/tools';
import { GalleryToolData, GalleryConfig } from './types/types';

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
    private api;
    private readOnly;
    private block;
    private config;
    private uploader;
    private ui;
    private _data;
    private currentLoadingItem;
    constructor({ data, config, api, readOnly, block }: GalleryToolConstructorOptions);
    /**
     * Notify core that read-only mode is supported
     */
    static get isReadOnlySupported(): boolean;
    /**
     * Get Tool toolbox settings
     */
    static get toolbox(): ToolboxConfig;
    /**
     * Available gallery tunes
     */
    static get tunes(): Array<ActionConfig>;
    /**
     * Specify paste substitutes
     */
    static get pasteConfig(): PasteConfig;
    /**
     * Renders Block content
     */
    render(): HTMLElement;
    /**
     * Fires after clicks on the Toolbox Gallery Icon
     * Initiates click on the Select File button to immediately open file dialog
     */
    appendCallback(): void;
    /**
     * Validate data
     */
    validate(savedData: GalleryToolData): boolean;
    /**
     * Return Block data
     */
    save(): GalleryToolData;
    /**
     * Returns configuration for block tunes
     */
    renderSettings(): TunesMenuConfig;
    /**
     * Handle paste events
     */
    onPaste(event: PasteEvent): Promise<void>;
    /**
     * Handle file selection
     */
    private selectFile;
    /**
     * Upload file from paste/drag-n-drop
     */
    private uploadFile;
    /**
     * Handle URL upload
     */
    private uploadFromUrl;
    /**
     * File upload callback
     */
    private onUpload;
    /**
     * Handle upload errors
     */
    private uploadingFailed;
    /**
     * Handle columns change
     */
    private onColumnsChange;
    /**
     * Handle image removal - delete from S3
     */
    private onRemoveImage;
    /**
     * Update layout class on wrapper
     */
    private updateLayoutClass;
    /**
     * Callback fired when Block Tune is activated
     */
    private tuneToggled;
    /**
     * Set one tune
     */
    private setTune;
    private getGridIcon;
    private getCarouselIcon;
    private getMasonryIcon;
}
export {};
