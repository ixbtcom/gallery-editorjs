import { UploadResponseFormat } from '../types/types';

/**
 * Check if passed object is a Promise
 */
export default function isPromise(object: Promise<UploadResponseFormat>): object is Promise<UploadResponseFormat>;
