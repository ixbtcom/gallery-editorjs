import ajax from '@codexteam/ajax';
import type { AjaxResponse } from '@codexteam/ajax';
import isPromise from './utils/isPromise';
import type { UploadOptions, UploadResponseFormat, GalleryConfig } from './types/types';

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
  private config: GalleryConfig;
  private onUpload: (response: UploadResponseFormat) => void;
  private onError: (error: string) => void;

  constructor({ config, onUpload, onError }: UploaderParams) {
    this.config = config;
    this.onUpload = onUpload;
    this.onError = onError;
  }

  /**
   * Upload file selected from device
   */
  public uploadSelectedFile({ onPreview }: UploadOptions): void {
    const preparePreview = (file: File): void => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        onPreview((e.target as FileReader).result as string);
      };
    };

    let upload: Promise<UploadResponseFormat>;

    if (this.config.uploader?.uploadByFile) {
      upload = ajax.selectFiles({ accept: this.config.types ?? 'image/*' }).then((files: File[]) => {
        preparePreview(files[0]);
        const customUpload = this.config.uploader!.uploadByFile!(files[0]);

        if (!isPromise(customUpload)) {
          console.warn('Custom uploader method uploadByFile should return a Promise');
        }

        return customUpload;
      });
    } else {
      upload = ajax.transport({
        url: this.config.endpoints.byFile!,
        data: this.config.additionalRequestData,
        accept: this.config.types ?? 'image/*',
        headers: this.config.additionalRequestHeaders as Record<string, string>,
        beforeSend: (files: File[]) => {
          preparePreview(files[0]);
        },
        fieldName: this.config.field ?? 'image',
      }).then((response: AjaxResponse) => response.body as UploadResponseFormat);
    }

    upload
      .then((response) => this.onUpload(response))
      .catch((error: string) => this.onError(error));
  }

  /**
   * Upload image by URL
   */
  public uploadByUrl(url: string): void {
    let upload: Promise<UploadResponseFormat>;

    if (this.config.uploader?.uploadByUrl) {
      upload = this.config.uploader.uploadByUrl(url);

      if (!isPromise(upload)) {
        console.warn('Custom uploader method uploadByUrl should return a Promise');
      }
    } else {
      upload = ajax.post({
        url: this.config.endpoints.byUrl!,
        data: {
          url,
          ...this.config.additionalRequestData,
        },
        type: ajax.contentType.JSON,
        headers: this.config.additionalRequestHeaders as Record<string, string>,
      }).then((response: AjaxResponse) => response.body as UploadResponseFormat);
    }

    upload
      .then((response) => this.onUpload(response))
      .catch((error: string) => this.onError(error));
  }

  /**
   * Upload file from drag-n-drop or paste
   */
  public uploadByFile(file: Blob, { onPreview }: UploadOptions): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      onPreview((e.target as FileReader).result as string);
    };

    let upload: Promise<UploadResponseFormat>;

    if (this.config.uploader?.uploadByFile) {
      upload = this.config.uploader.uploadByFile(file);

      if (!isPromise(upload)) {
        console.warn('Custom uploader method uploadByFile should return a Promise');
      }
    } else {
      const formData = new FormData();
      formData.append(this.config.field ?? 'image', file);

      if (this.config.additionalRequestData) {
        Object.entries(this.config.additionalRequestData).forEach(([name, value]) => {
          formData.append(name, value as string);
        });
      }

      upload = ajax.post({
        url: this.config.endpoints.byFile!,
        data: formData,
        type: ajax.contentType.JSON,
        headers: this.config.additionalRequestHeaders as Record<string, string>,
      }).then((response: AjaxResponse) => response.body as UploadResponseFormat);
    }

    upload
      .then((response) => this.onUpload(response))
      .catch((error: string) => this.onError(error));
  }
}
