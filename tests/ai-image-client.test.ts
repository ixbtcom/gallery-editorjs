import { afterEach, describe, expect, it, vi } from 'vitest';

import { AiImageClient, AiImageClientError } from '../src/ai-image-client';

const config = {
  context: {
    locale: 'ru',
    ownerId: '42',
    ownerType: 'universal-publication',
    statePath: 'content.ru.blocks',
  },
  endpoints: {
    cancel: '/admin/ai-images/{sessionId}/cancel',
    candidate: '/admin/ai-images/{sessionId}/candidates/{candidateId}',
    finalize: '/admin/ai-images/{sessionId}/finalize',
    generate: '/admin/ai-images/generate',
    prompt: '/admin/ai-images/prompt',
    refine: '/admin/ai-images/{sessionId}/refine',
    status: '/admin/ai-images/{sessionId}',
  },
  headers: {
    'X-CSRF-TOKEN': 'csrf-token',
  },
  pollIntervalMs: 0,
  pollTimeoutMs: 100,
  source: {
    name: 'Grok Imagine',
    url: 'https://x.ai/grok/use-cases/image-generation',
  },
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

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('AiImageClient', () => {
  it('requests a generated prompt without creating an image session or sending provider settings', async () => {
    const fetchMock = vi.fn(async (): Promise<Response> => new Response(JSON.stringify({
      data: { prompt: 'Редакционная иллюстрация ночного города' },
    }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    }));
    vi.stubGlobal('fetch', fetchMock);
    const publication = {
      announce: 'Город готовится к запуску транспорта',
      body: 'Первый маршрут откроется ночью.',
      subtitle: 'Новая схема движения',
      title: 'Ночной транспорт',
    };

    const prompt = await new AiImageClient(config).assistPrompt({
      action: 'generate',
      actionId: 'prompt-action-1',
      blockId: 'block-1',
      publication,
    });

    expect(prompt).toBe('Редакционная иллюстрация ночного города');
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith('/admin/ai-images/prompt', {
      body: JSON.stringify({
        action: 'generate',
        action_id: 'prompt-action-1',
        block_id: 'block-1',
        context: config.context,
        publication,
        publicationContext: config.publicationContext,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': 'csrf-token',
      },
      method: 'POST',
      signal: undefined,
    });
    expect(String(fetchMock.mock.calls[0]?.[1]?.body)).not.toContain('session_id');
    expect(String(fetchMock.mock.calls[0]?.[1]?.body)).not.toContain('provider');
    expect(String(fetchMock.mock.calls[0]?.[1]?.body)).not.toContain('model');
  });

  it('sends the visible draft only when improving a prompt', async () => {
    const fetchMock = vi.fn(async (): Promise<Response> => new Response(JSON.stringify({
      data: { prompt: 'Улучшенный редакционный промпт' },
    }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    }));
    vi.stubGlobal('fetch', fetchMock);

    await new AiImageClient(config).assistPrompt({
      action: 'improve',
      actionId: 'prompt-action-2',
      blockId: 'block-1',
      draft: 'Текущий видимый промпт',
      publication: { announce: '', body: 'Текст', subtitle: '', title: 'Заголовок' },
    });

    expect(JSON.parse(String(fetchMock.mock.calls[0]?.[1]?.body))).toMatchObject({
      action: 'improve',
      action_id: 'prompt-action-2',
      draft: 'Текущий видимый промпт',
    });
  });

  it('requests an editorial caption from the visible image prompt and publication', async () => {
    const fetchMock = vi.fn(async (): Promise<Response> => new Response(JSON.stringify({
      data: { caption: 'Фрегат во время учебных стрельб в международных водах.' },
    }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    }));
    vi.stubGlobal('fetch', fetchMock);
    const publication = {
      announce: '',
      body: 'Учения прошли в международных водах.',
      subtitle: '',
      title: 'Фрегат провёл учебные стрельбы',
    };

    const caption = await new AiImageClient(config).generateCaption({
      action: 'caption',
      actionId: 'caption-action-1',
      blockId: 'block-1',
      draft: 'Фрегат ведёт учебную стрельбу в море',
      publication,
    });

    expect(caption).toBe('Фрегат во время учебных стрельб в международных водах.');
    expect(JSON.parse(String(fetchMock.mock.calls[0]?.[1]?.body))).toEqual({
      action: 'caption',
      action_id: 'caption-action-1',
      block_id: 'block-1',
      context: config.context,
      draft: 'Фрегат ведёт учебную стрельбу в море',
      publication,
      publicationContext: config.publicationContext,
    });
  });

  it('rejects unavailable prompt configuration and malformed prompt responses safely', async () => {
    const fetchMock = vi.fn(async (): Promise<Response> => new Response(JSON.stringify({
      data: { prompt: '   ' },
      provider_payload: 'secret-provider-response',
    }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    }));
    vi.stubGlobal('fetch', fetchMock);
    const request = {
      action: 'generate' as const,
      actionId: 'prompt-action-3',
      blockId: 'block-1',
      publication: { announce: '', body: 'Текст', subtitle: '', title: 'Заголовок' },
    };

    await expect(new AiImageClient(config).assistPrompt(request)).rejects.toEqual(new AiImageClientError(
      'invalid_response',
      'Некорректный ответ сервера подготовки промпта.',
      200,
    ));
    await expect(new AiImageClient({
      ...config,
      endpoints: { ...config.endpoints, prompt: undefined },
    }).assistPrompt(request)).rejects.toEqual(new AiImageClientError(
      'prompt_unavailable',
      'Помощь с промптом недоступна.',
      0,
    ));
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it.each([
    [422, 'validation_failed', 'Параметры запроса промпта некорректны.'],
    [409, 'action_conflict', 'Это действие уже было отправлено.'],
    [429, 'user_rate_limited', 'Слишком много AI-запросов.'],
    [503, 'provider_unavailable', 'Нейросеть временно недоступна.'],
  ])('maps prompt HTTP %i to the safe host error', async (status, code, message) => {
    vi.stubGlobal('fetch', vi.fn(async (): Promise<Response> => new Response(JSON.stringify({
      error: {
        code,
        message,
        provider_payload: 'secret-provider-response',
      },
    }), {
      headers: { 'Content-Type': 'application/json' },
      status,
    })));

    const promise = new AiImageClient(config).assistPrompt({
      action: 'generate',
      actionId: `prompt-action-${status}`,
      blockId: 'block-1',
      publication: { announce: '', body: 'Текст', subtitle: '', title: 'Заголовок' },
    });

    await expect(promise).rejects.toEqual(new AiImageClientError(code, message, status));
    await expect(promise).rejects.not.toHaveProperty('provider_payload');
  });

  it('maps a prompt network failure without exposing the transport error', async () => {
    vi.stubGlobal('fetch', vi.fn(async (): Promise<Response> => {
      throw new TypeError('secret-network-details');
    }));

    await expect(new AiImageClient(config).assistPrompt({
      action: 'generate',
      actionId: 'prompt-action-network',
      blockId: 'block-1',
      publication: { announce: '', body: 'Текст', subtitle: '', title: 'Заголовок' },
    })).rejects.toEqual(new AiImageClientError(
      'network_error',
      'Не удалось связаться с сервером подготовки промпта.',
      0,
    ));
  });

  it('sends the immutable host context and idempotency identifiers when generation starts', async () => {
    const fetchMock = vi.fn(async (): Promise<Response> => new Response(JSON.stringify({
      data: {
        session_id: 'session-1',
        status: 'queued',
      },
    }), {
      headers: { 'Content-Type': 'application/json' },
      status: 202,
    }));
    vi.stubGlobal('fetch', fetchMock);

    const client = new AiImageClient(config);

    await client.generate({
      actionId: 'action-1',
      aspectRatio: '3:2',
      blockId: 'block-1',
      prompt: 'Ночной город после дождя',
      sessionId: 'session-1',
    });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith('/admin/ai-images/generate', {
      body: expect.any(String),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': 'csrf-token',
      },
      method: 'POST',
      signal: undefined,
    });
    expect(JSON.parse(fetchMock.mock.calls[0][1].body)).toEqual({
      action_id: 'action-1',
      aspect_ratio: '3:2',
      block_id: 'block-1',
      context: config.context,
      prompt: 'Ночной город после дождя',
      session_id: 'session-1',
    });
  });

  it('polls observable states and builds candidate previews only from the host endpoint', async () => {
    const responses = [
      { data: { progress: 'generation_queued', session_id: 'session-1', status: 'queued' } },
      { data: { progress: 'generation_processing', session_id: 'session-1', status: 'generating' } },
      {
        data: {
          candidates: [1, 2, 3, 4].map(number => ({
            base64: `provider-base64-${number}`,
            id: `candidate-${number}`,
            provider_url: `https://provider.example.test/${number}`,
          })),
          session_id: 'session-1',
          status: 'ready',
        },
      },
    ];
    const fetchMock = vi.fn(async (): Promise<Response> => new Response(JSON.stringify(responses.shift()), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    }));
    vi.stubGlobal('fetch', fetchMock);
    const statuses: string[] = [];
    const progresses: Array<string | undefined> = [];

    const result = await new AiImageClient(config).poll({
      blockId: 'block-1',
      onStatus: (session) => {
        statuses.push(session.status);
        progresses.push(session.progress);
      },
      sessionId: 'session-1',
    });

    expect(statuses).toEqual(['queued', 'generating', 'ready']);
    expect(progresses).toEqual(['generation_queued', 'generation_processing', undefined]);
    expect(result.progress).toBeUndefined();
    expect(result.candidates).toEqual([1, 2, 3, 4].map(number => ({
      id: `candidate-${number}`,
      parentId: null,
      previewUrl: `/admin/ai-images/session-1/candidates/candidate-${number}`,
    })));
    expect(JSON.stringify(result)).not.toContain('provider.example.test');
    expect(JSON.stringify(result)).not.toContain('provider-base64');
  });

  it('stops polling immediately when the host cancels the session', async () => {
    const fetchMock = vi.fn(async (): Promise<Response> => new Response(JSON.stringify({
      data: {
        session_id: 'session-1',
        status: 'cancelled',
      },
    }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    }));
    vi.stubGlobal('fetch', fetchMock);

    const result = await new AiImageClient({
      ...config,
      pollTimeoutMs: 0,
    }).poll({
      blockId: 'block-1',
      sessionId: 'session-1',
    });

    expect(result.status).toBe('cancelled');
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('sends stable action identifiers for refinement and finalization, then cancels idempotently', async () => {
    const responses = [
      { data: { session_id: 'session-1', status: 'refining' } },
      { data: { session_id: 'session-1', status: 'finalizing' } },
      { data: { session_id: 'session-1', status: 'expired' } },
    ];
    const fetchMock = vi.fn(async (): Promise<Response> => new Response(JSON.stringify(responses.shift()), {
      headers: { 'Content-Type': 'application/json' },
      status: 202,
    }));
    vi.stubGlobal('fetch', fetchMock);
    const client = new AiImageClient(config);

    await client.refine({
      actionId: 'refine-action',
      blockId: 'block-1',
      candidateId: 'candidate-1',
      prompt: 'Добавить отражения в мокром асфальте',
      sessionId: 'session-1',
    });
    await client.finalize({
      actionId: 'finalize-action',
      blockId: 'block-1',
      candidateId: 'candidate-2',
      sessionId: 'session-1',
    });
    await client.cancel({
      blockId: 'block-1',
      sessionId: 'session-1',
    });

    expect(fetchMock.mock.calls.map(([, init]) => JSON.parse(String(init?.body)))).toEqual([
      {
        action_id: 'refine-action',
        block_id: 'block-1',
        candidate_id: 'candidate-1',
        context: config.context,
        prompt: 'Добавить отражения в мокром асфальте',
        session_id: 'session-1',
      },
      {
        action_id: 'finalize-action',
        block_id: 'block-1',
        candidate_id: 'candidate-2',
        context: config.context,
        session_id: 'session-1',
      },
      {
        block_id: 'block-1',
        context: config.context,
        session_id: 'session-1',
      },
    ]);
  });

  it('maps host failures to a safe typed error without exposing provider payload', async () => {
    vi.stubGlobal('fetch', vi.fn(async (): Promise<Response> => new Response(JSON.stringify({
      error: {
        code: 'rate_limited',
        message: 'Лимит генераций исчерпан. Попробуйте позже.',
        provider_payload: 'secret-provider-response',
      },
    }), {
      headers: { 'Content-Type': 'application/json' },
      status: 429,
    })));

    const promise = new AiImageClient(config).generate({
      actionId: 'action-1',
      aspectRatio: '3:2',
      blockId: 'block-1',
      prompt: 'Ночной город',
      sessionId: 'session-1',
    });

    await expect(promise).rejects.toEqual(new AiImageClientError(
      'rate_limited',
      'Лимит генераций исчерпан. Попробуйте позже.',
      429,
    ));
    await expect(promise).rejects.not.toHaveProperty('provider_payload');
  });
});
