import { UploadOptions, UploadResponseFormat, GalleryConfig } from './types/types';

interface UploaderParams {
    config: GalleryConfig;
    onUpload: (response: UploadResponseFormat) => void;
    onError: (error: string) => void;
}
/**
 * Module for file uploading
 * Handles: file selection, URL upload, drag-n-drop
 */
export default class Uploader {
    private config;
    private onUpload;
    private onError;
    constructor({ config, onUpload, onError }: UploaderParams);
    /**
     * Upload file selected from device
     */
    uploadSelectedFile({ onPreview }: UploadOptions): void;
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
