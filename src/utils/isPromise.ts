import type { UploadResponseFormat } from '../types/types';

/**
 * Check if passed object is a Promise
 */
export default function isPromise(
  object: Promise<UploadResponseFormat>
): object is Promise<UploadResponseFormat> {
  return object !== undefined && typeof object.then === 'function';
}
