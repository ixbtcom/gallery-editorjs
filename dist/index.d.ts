import { ToolboxConfig, BlockToolConstructorOptions, BlockTool, PasteConfig } from '@editorjs/editorjs';
import { TunesMenuConfig } from '@editorjs/editorjs/types/tools';
import { GalleryConfig, GalleryToolData } from './types/types';

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
    private cropModal;
    private _data;
    private currentLoadingItem;
    constructor({ data, config: cfg, api, readOnly, block }: GalleryToolConstructorOptions);
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
    static get pasteConfig(): PasteConfig;
    /**
     * Renders Block content
     */
    render(): HTMLElement;
    /**
     * Validate data
     */
    validate(savedData: GalleryToolData): boolean;
    /**
     * Return Block data
     */
    save(): GalleryToolData;
    removed(): void;
    destroy(): void;
    /**
     * Returns configuration for block tunes
     */
    renderSettings(): TunesMenuConfig;
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
     * Handle crop image request
     */
    private handleCropImage;
    /**
     * Handle image removal - delete from S3
     */
    private onRemoveImage;
    private normalizeCropAspectRatioMode;
    /**
     * Update layout class on wrapper
     */
    private updateLayoutClass;
    /**
     * Set one tune
     */
    private setTune;
    private getGridIcon;
    private getCarouselIcon;
    private getMasonryIcon;
}
export {};
