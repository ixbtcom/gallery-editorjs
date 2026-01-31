/**
 * Options for upload callbacks
 */
export interface UploadOptions {
    onPreview: (src: string) => void;
}
/**
 * Response format from upload endpoint
 */
export interface UploadResponseFormat {
    success: number;
    file: {
        url: string;
        mime?: string;
        size?: number;
        width?: number;
        height?: number;
    };
}
/**
 * Single gallery item data
 */
export interface GalleryItemData {
    url: string;
    caption: string;
    source: string;
    sourceLink: string;
    /** Оригинальная ширина изображения (из upload response) */
    width?: number;
    /** Оригинальная высота изображения (из upload response) */
    height?: number;
}
/**
 * Gallery tool saved data format
 */
export interface GalleryToolData {
    items: GalleryItemData[];
    layout: 'grid' | 'carousel' | 'masonry';
    columns: number;
    /** Растянуть на всю ширину (обложка) */
    stretched?: boolean;
}
/**
 * Gallery tool configuration
 */
export interface GalleryConfig {
    endpoints: {
        byFile?: string;
        byUrl?: string;
    };
    field?: string;
    types?: string;
    captionPlaceholder?: string;
    sourcePlaceholder?: string;
    sourceLinkPlaceholder?: string;
    buttonContent?: string;
    urlButtonContent?: string;
    additionalRequestData?: Record<string, unknown>;
    additionalRequestHeaders?: Record<string, string>;
    uploader?: {
        uploadByFile?: (file: Blob) => Promise<UploadResponseFormat>;
        uploadByUrl?: (url: string) => Promise<UploadResponseFormat>;
    };
}
/**
 * Layout tune configuration
 */
export interface LayoutTune {
    name: string;
    icon: string;
    title: string;
    isActive: boolean;
}
