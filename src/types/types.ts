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
    /** Normalized imagor path from backend (snake_case PHP convention) */
    imagor_path?: string;
    mime?: string;
    size?: number;
    width?: number;
    height?: number;
  };
}

/**
 * Crop operation result from CropModal
 */
export interface CropResult {
  /** Imagor crop string "AxB:CxD" (float 0-1), empty string for reset */
  crop: string;
  /** Cropped region width in pixels */
  croppedWidth: number;
  /** Cropped region height in pixels */
  croppedHeight: number;
}

/**
 * Single gallery item data
 */
export interface GalleryItemData {
  url: string;
  /** Normalized imagor path for preview URL building */
  imagorPath?: string;
  caption: string;
  source: string;
  sourceLink: string;
  /** Оригинальная ширина изображения (из upload response) */
  width?: number;
  /** Оригинальная высота изображения (из upload response) */
  height?: number;
  /** Imagor crop string "AxB:CxD" (float 0-1) */
  crop?: string;
  /** Cropped region width in pixels */
  croppedWidth?: number;
  /** Cropped region height in pixels */
  croppedHeight?: number;
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
    deleteImage?: string;
  };
  field?: string;
  types?: string;
  captionPlaceholder?: string;
  sourcePlaceholder?: string;
  sourceLinkPlaceholder?: string;
  buttonContent?: string;
  urlButtonContent?: string;
  /** Placeholder для поля ввода URL изображения */
  urlInputPlaceholder?: string;
  additionalRequestData?: Record<string, unknown>;
  additionalRequestHeaders?: Record<string, string>;
  uploader?: {
    uploadByFile?: (file: Blob) => Promise<UploadResponseFormat>;
    uploadByUrl?: (url: string) => Promise<UploadResponseFormat>;
  };
  /** Base URL for imagor/thumbor service (e.g. 'https://media.ixbt.site') */
  mediaHost?: string;
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
