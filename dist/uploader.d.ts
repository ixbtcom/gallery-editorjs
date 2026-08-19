import { UploadOptions, UploadResponseFormat, GalleryConfig } from './types/types';

interface UploaderParams {
    config: GalleryConfig;
    onUpload: (response: UploadResponseFormat) => void;
    onError: (error: string) => void;
}
export default class Uploader {
    private config;
    private onUpload;
    private onError;
    constructor({ config, onUpload, onError }: UploaderParams);
    /**
     * Upload file selected from device
     */
    uploadSelectedFile({ onPreview, onNonImageFile }: UploadOptions): void;
    /**
     * Upload image by URL
     */
    uploadByUrl(url: string): void;
    /**
     * Upload file from drag-n-drop or paste
     */
    uploadByFile(file: Blob, { onPreview }: UploadOptions): void;
}
export {};
