// @vitest-environment jsdom

import type { API, BlockAPI, BlockToolConstructorOptions } from '@editorjs/editorjs';
import { afterEach, describe, expect, it, vi } from 'vitest';

import GalleryTool from '../src/index';
import type { AiImageClientConfig } from '../src/ai-image-client';
import type { GalleryConfig, GalleryToolData } from '../src/types/types';

const generationConfig: AiImageClientConfig = {
  context: {
    ownerId: '42',
    ownerType: 'universal-publication',
    statePath: 'content.ru.blocks',
  },
  endpoints: {
    cancel: '/admin/ai-images/{sessionId}/cancel',
    candidate: '/admin/ai-images/{sessionId}/candidates/{candidateId}',
    finalize: '/admin/ai-images/{sessionId}/finalize',
    generate: '/admin/ai-images/generate',
    refine: '/admin/ai-images/{sessionId}/refine',
    status: '/admin/ai-images/{sessionId}',
  },
  pollIntervalMs: 0,
  pollTimeoutMs: 100,
};

const publication = {
  announce: 'Компания представила новое устройство.',
  body: 'Редакция рассказывает о характеристиках и сценариях использования.',
  subtitle: 'Главные особенности новинки',
  title: 'Анонс нового устройства',
};

function publicationGenerationConfig(): AiImageClientConfig {
  return {
    ...generationConfig,
    endpoints: {
      ...generationConfig.endpoints,
      prompt: '/admin/ai-images/prompt',
    },
    getPublicationContext: async () => publication,
    publicationContext: {
      signature: 'a'.repeat(64),
      statePaths: {
        announce: 'data.extra.announce.ru',
        blocks: 'data.blocks.ru',
        subtitle: 'data.extra.subtitle.ru',
        title: 'data.title.ru',
      },
    },
  };
}

afterEach(() => {
  document.body.replaceChildren();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

function createTool(
  data: Partial<GalleryToolData> = {},
  config: Partial<GalleryConfig> = {},
  dispatchChange = vi.fn(),
): GalleryTool {
  const api = {
    i18n: { t: (message: string): string => message },
    notifier: { show: vi.fn() },
    styles: {
      button: 'ce-button',
      input: 'ce-input',
    },
  } as unknown as API;
  const block = {
    dispatchChange,
    id: 'gallery-block-1',
    stretched: false,
  } as unknown as BlockAPI;

  return new GalleryTool({
    api,
    block,
    config: {
      buttonContent: 'Загрузить',
      endpoints: {},
      generation: generationConfig,
      ...config,
    },
    data,
    readOnly: false,
  } as BlockToolConstructorOptions<GalleryToolData, GalleryConfig>);
}

function findButton(wrapper: HTMLElement, label: string): HTMLButtonElement {
  const button = Array.from(wrapper.querySelectorAll<HTMLButtonElement>('button'))
    .find(candidate => candidate.getAttribute('aria-label') === label || candidate.textContent === label);

  if (button === undefined) {
    throw new Error(`Button not found: ${label}`);
  }

  return button;
}

describe('Gallery-owned AI generation', () => {
  it('stores a pending marker and finalizes directly into a canonical gallery item', async () => {
    vi.spyOn(globalThis.crypto, 'randomUUID')
      .mockReturnValueOnce('00000000-0000-4000-8000-000000000101')
      .mockReturnValueOnce('00000000-0000-4000-8000-000000000102')
      .mockReturnValueOnce('00000000-0000-4000-8000-000000000103');
    const finalImage = {
      alt: 'Grok Imagine',
      caption: '',
      file: {
        height: 720,
        imagor_path: 'media/generated/final.webp',
        media_id: 'media-uuid',
        url: 'https://media.example.test/generated/final.webp',
        width: 1280,
      },
      link: 'https://x.ai/grok/use-cases/image-generation',
      stretched: false,
      withBackground: false,
      withBorder: false,
    };
    const fetchMock = vi.fn(async (url: string | URL | Request): Promise<Response> => {
      const requestUrl = String(url);
      const data = requestUrl.endsWith('/generate')
        ? {
            candidates: [{ id: 'candidate-1', parent_id: null }],
            session_id: '00000000-0000-4000-8000-000000000101',
            status: 'ready',
          }
        : {
            image: finalImage,
            session_id: '00000000-0000-4000-8000-000000000101',
            status: 'completed',
          };

      return new Response(JSON.stringify({ data }), {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
      });
    });
    vi.stubGlobal('fetch', fetchMock);
    const dispatchChange = vi.fn();
    const tool = createTool({}, {}, dispatchChange);
    const wrapper = tool.render();

    document.body.appendChild(wrapper);
    findButton(wrapper, 'Генерация').click();

    expect(tool.save()).toMatchObject({
      aiGeneration: {
        pending: true,
        sessionId: '00000000-0000-4000-8000-000000000101',
      },
      items: [],
    });

    const prompt = wrapper.querySelector<HTMLTextAreaElement>('#gallery-ai-prompt-gallery-block-1');

    expect(prompt).not.toBeNull();
    prompt!.value = 'Редакционная иллюстрация морских учений';
    const aspectRatio = wrapper.querySelector<HTMLInputElement>('input[name="gallery-ai-prompt-gallery-block-1-aspect-ratio"][value="3:2"]');

    expect(aspectRatio?.checked).toBe(true);
    findButton(wrapper, 'Отправить').click();
    findButton(wrapper, 'Отправить').click();

    await vi.waitFor(() => {
      expect(wrapper.querySelector('[data-candidate-id="candidate-1"]')).not.toBeNull();
    });
    expect(fetchMock.mock.calls.filter(([url]) => String(url).endsWith('/generate'))).toHaveLength(1);
    expect(JSON.parse(String(fetchMock.mock.calls.find(([url]) => String(url).endsWith('/generate'))?.[1]?.body))).toMatchObject({
      aspect_ratio: '3:2',
    });

    const scrollIntoView = vi.fn();

    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      callback(0);

      return 1;
    });
    Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
      configurable: true,
      value: scrollIntoView,
    });
    vi.spyOn(HTMLImageElement.prototype, 'complete', 'get').mockReturnValue(true);
    wrapper.querySelector<HTMLButtonElement>('[data-candidate-id="candidate-1"]')!.click();
    findButton(wrapper, 'Использовать изображение').click();

    await vi.waitFor(() => {
      expect(tool.save().items).toHaveLength(1);
    });

    await vi.waitFor(() => {
      expect(scrollIntoView).toHaveBeenCalled();
    });

    expect(tool.save()).toEqual({
      columns: 1,
      items: [{
        caption: '',
        height: 720,
        imagorPath: 'media/generated/final.webp',
        isAiGenerated: true,
        media_id: 'media-uuid',
        source: 'Grok Imagine',
        sourceLink: 'https://x.ai/grok/use-cases/image-generation',
        url: 'https://media.example.test/generated/final.webp',
        width: 1280,
      }],
      layout: 'grid',
      stretched: false,
    });
    expect(wrapper.querySelector<HTMLElement>('.ai-image-tool__generator')?.hidden).toBe(true);
    expect(dispatchChange).toHaveBeenCalled();
    expect(scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  });

  it('cancels one pending session without changing existing gallery items', async () => {
    vi.spyOn(globalThis.crypto, 'randomUUID')
      .mockReturnValue('00000000-0000-4000-8000-000000000201');
    const fetchMock = vi.fn(async (): Promise<Response> => new Response(JSON.stringify({
      data: {
        session_id: '00000000-0000-4000-8000-000000000201',
        status: 'cancelled',
      },
    }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    }));
    vi.stubGlobal('fetch', fetchMock);
    const tool = createTool({
      columns: 1,
      items: [{
        caption: 'Обычная картинка',
        source: 'Редакция',
        sourceLink: '',
        url: 'https://cdn.ixbt.test/original.jpg',
      }],
      layout: 'grid',
    });
    const wrapper = tool.render();

    findButton(wrapper, 'Генерация').click();
    findButton(wrapper, 'Отменить').click();
    findButton(wrapper, 'Отменить').click();

    await vi.waitFor(() => {
      expect(fetchMock).toHaveBeenCalledOnce();
    });
    expect(tool.save()).toEqual({
      columns: 1,
      items: [{
        caption: 'Обычная картинка',
        source: 'Редакция',
        sourceLink: '',
        url: 'https://cdn.ixbt.test/original.jpg',
      }],
      layout: 'grid',
      stretched: false,
    });
  });

  it('keeps prompt assistance, optional caption and refinement history inside Gallery', async () => {
    vi.spyOn(globalThis.crypto, 'randomUUID')
      .mockReturnValueOnce('00000000-0000-4000-8000-000000000301')
      .mockReturnValueOnce('00000000-0000-4000-8000-000000000302')
      .mockReturnValueOnce('00000000-0000-4000-8000-000000000303')
      .mockReturnValueOnce('00000000-0000-4000-8000-000000000304')
      .mockReturnValueOnce('00000000-0000-4000-8000-000000000305')
      .mockReturnValueOnce('00000000-0000-4000-8000-000000000306');
    const fetchMock = vi.fn(async (url: string | URL | Request, init?: RequestInit): Promise<Response> => {
      const requestUrl = String(url);
      const body = init?.body === undefined ? {} : JSON.parse(String(init.body));
      let data: Record<string, unknown>;

      if (requestUrl.endsWith('/prompt') && body.action === 'generate') {
        data = { prompt: 'Подробный редакционный промпт' };
      } else if (requestUrl.endsWith('/prompt') && body.action === 'caption') {
        data = { caption: 'Автоматическая редакционная подпись.' };
      } else if (requestUrl.endsWith('/generate')) {
        data = {
          candidates: [{ id: 'candidate-1', parent_id: null }],
          session_id: '00000000-0000-4000-8000-000000000301',
          status: 'ready',
        };
      } else if (requestUrl.endsWith('/refine')) {
        data = {
          candidates: [{ id: 'candidate-2', parent_id: 'candidate-1' }],
          selected_candidate_id: 'candidate-2',
          session_id: '00000000-0000-4000-8000-000000000301',
          status: 'ready',
        };
      } else if (requestUrl.endsWith('/finalize')) {
        data = {
          image: {
            alt: 'Grok Imagine',
            caption: '',
            file: {
              height: 720,
              media_id: 'media-refined',
              url: 'https://media.example.test/generated/refined.webp',
              width: 1280,
            },
            link: 'https://x.ai/grok/use-cases/image-generation',
          },
          session_id: '00000000-0000-4000-8000-000000000301',
          status: 'completed',
        };
      } else {
        throw new Error(`Unexpected request: ${requestUrl}`);
      }

      return new Response(JSON.stringify({ data }), {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
      });
    });
    vi.stubGlobal('fetch', fetchMock);
    const tool = createTool({}, { generation: publicationGenerationConfig() });
    const wrapper = tool.render();

    document.body.appendChild(wrapper);
    findButton(wrapper, 'Генерация').click();
    wrapper.querySelector<HTMLInputElement>('input[name="gallery-ai-prompt-gallery-block-1-aspect-ratio"][value="1:1"]')!.click();
    findButton(wrapper, 'Сгенерировать на основе публикации').click();

    const prompt = wrapper.querySelector<HTMLTextAreaElement>('#gallery-ai-prompt-gallery-block-1')!;

    await vi.waitFor(() => {
      expect(prompt.value).toBe('Подробный редакционный промпт');
    });
    wrapper.querySelector<HTMLInputElement>('#gallery-ai-prompt-gallery-block-1-generate-caption')!.click();
    findButton(wrapper, 'Отправить').click();

    await vi.waitFor(() => {
      expect(wrapper.querySelector('[data-candidate-id="candidate-1"]')).not.toBeNull();
      expect(wrapper.querySelector<HTMLTextAreaElement>('[data-generated-caption]')?.value)
        .toBe('Автоматическая редакционная подпись.');
    });
    expect(JSON.parse(String(fetchMock.mock.calls.find(([url]) => String(url).endsWith('/generate'))?.[1]?.body))).toMatchObject({
      aspect_ratio: '1:1',
    });
    wrapper.querySelector<HTMLButtonElement>('[data-candidate-id="candidate-1"]')!.click();
    wrapper.querySelector<HTMLTextAreaElement>('[data-refinement-prompt]')!.value = 'Добавить утренний свет';
    findButton(wrapper, 'Доработать').click();

    await vi.waitFor(() => {
      expect(wrapper.querySelector<HTMLImageElement>('[data-selected-preview]')?.src)
        .toContain('/candidates/candidate-2');
    });
    expect(Array.from(wrapper.querySelectorAll('[data-history-candidate-id]')).map(item => item.textContent))
      .toEqual(['Версия 1', 'Версия 2']);
    findButton(wrapper, 'Использовать изображение').click();

    await vi.waitFor(() => {
      expect(tool.save().items[0]?.caption).toBe('Автоматическая редакционная подпись.');
    });
    expect(tool.save().items[0]).toMatchObject({
      media_id: 'media-refined',
      isAiGenerated: true,
      source: 'Grok Imagine',
      sourceLink: 'https://x.ai/grok/use-cases/image-generation',
    });
  });
});
