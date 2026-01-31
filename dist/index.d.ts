import { ToolboxConfig, BlockToolConstructorOptions, BlockTool } from '@editorjs/editorjs';
import { TunesMenuConfig } from '@editorjs/editorjs/types/tools';
import { GalleryToolData, GalleryConfig } from './types/types';

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
     * Handle file selection
     */
    private selectFile;
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
     * Update layout class on wrapper
     */
    private updateLayoutClass;
    private getGridIcon;
    private getCarouselIcon;
    private getMasonryIcon;
}
export {};
