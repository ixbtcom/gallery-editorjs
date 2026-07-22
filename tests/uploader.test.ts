// @vitest-environment jsdom

import { describe, expect, it, vi } from 'vitest';

import Uploader from '../src/uploader';
import type { GalleryConfig, UploadResponseFormat } from '../src/types/types';

describe('Gallery file upload lifecycle', () => {
  it('creates the preview placeholder before a fast upload can finalize', async () => {
    const events: string[] = [];
    const response: UploadResponseFormat = {
      file: {
        height: 900,
        media_id: 'media-uuid',
        url: 'https://cdn.ixbt.test/image.png',
        width: 1600,
      },
      success: 1,
    };
    const uploader = new Uploader({
      config: {
        endpoints: {},
        uploader: {
          uploadByFile: vi.fn(async () => response),
        },
      } as GalleryConfig,
      onError: vi.fn(),
      onUpload: () => events.push('upload'),
    });

    uploader.uploadByFile(new Blob(['fixture'], { type: 'image/png' }), {
      onPreview: () => events.push('preview'),
    });

    await vi.waitFor(() => {
      expect(events).toEqual(['preview', 'upload']);
    });
  });
});
