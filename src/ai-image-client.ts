const defaultPollTimeoutMs = 120_000;
// Потолок 2 с вместо 5: джоб с тремя 1k-вариантами укладывается в ~10 с, и пауза в 5 с
// добавляла к готовому результату до 4 с ожидания. ±20 % джиттера разводит опрос вкладок.
const defaultPollMaxIntervalMs = 2_000;
const defaultPollIntervalMs = 1_000;
const pollBackoffFactor = 1.5;
const pollJitterRatio = 0.2;
const successStatus = 200;

/** Immutable publication and field identity supplied by the host. */
export interface AiImageClientContext {
  [key: string]: boolean | null | number | string;
}

/** Host routes used by the AI image workflow. */
export interface AiImageClientEndpoints {
  /** Move an existing session into the current block. */
  adopt: string;
  /** Cancel a session. */
  cancel: string;
  /** Read a private candidate preview. */
  candidate: string;
  /** Finalize a selected candidate. */
  finalize: string;
  /** Start initial generation. */
  generate: string;
  /** Generate or improve an image prompt from publication content. */
  prompt?: string;
  /** Refine a selected candidate. */
  refine: string;
  /** List the editor's unfinished sessions. */
  sessions: string;
  /** Poll current session state. */
  status: string;
}

/** One unfinished session of the current editor. */
export interface AiImageActiveSession {
  /** Number of generated variants waiting in this session. */
  candidateCount: number;
  /** Session start time in ISO-8601, when the host reported one. */
  createdAt: string | null;
  /** Whether the session already belongs to the current editor block. */
  isCurrentBlock: boolean;
  /** Publication the session was started from. */
  owner: {
    /** Publication title shown in the list. */
    title: string;
    /** Edit-page URL, opened in a new tab. */
    url: string | null;
  };
  /** Authenticated preview URL of the variant shown as a thumbnail. */
  previewUrl: string | null;
  /** Prompt of the latest operation. */
  prompt: string | null;
  /** Opaque session identifier. */
  sessionId: string;
  /** Server workflow state. */
  status: string;
}

/** Editor's unfinished sessions together with the configured slot limit. */
export interface AiImageActiveSessions {
  /** Maximum number of simultaneously active sessions. */
  limit: number;
  /** Unfinished sessions, newest first. */
  sessions: AiImageActiveSession[];
}

/** Minimal active-locale publication text supplied by the host callback. */
export interface AiImagePublicationContext {
  /** Publication announcement. */
  announce: string;
  /** Text extracted from allowlisted Editor.js blocks. */
  body: string;
  /** Current publication tags, when the form provides them. */
  tags?: string[];
  /** Publication subtitle. */
  subtitle: string;
  /** Publication title. */
  title: string;
}

/** Signed host map used to bind submitted publication values to the active editor locale. */
export interface AiImagePublicationContextEnvelope {
  /** HMAC created by the host. */
  signature: string;
  /** Allowlisted Livewire state paths for the active locale. */
  statePaths: {
    /** Announcement field path. */
    announce: string;
    /** Editor.js blocks field path. */
    blocks: string;
    /** Publication tags field path. */
    tags?: string;
    /** Subtitle field path. */
    subtitle: string;
    /** Title field path. */
    title: string;
  };
}

/** Host-provided client configuration. */
export interface AiImageClientConfig {
  /** Immutable resource identity. */
  context: AiImageClientContext;
  /** Host endpoint templates. */
  endpoints: AiImageClientEndpoints;
  /** Additional request headers such as the CSRF token. */
  headers?: Record<string, string>;
  /** Initial delay between status requests. */
  pollIntervalMs?: number;
  /** Maximum delay between status requests. */
  pollMaxIntervalMs?: number;
  /** Maximum polling duration. */
  pollTimeoutMs?: number;
  /** Signed active-locale state-path envelope. */
  publicationContext?: AiImagePublicationContextEnvelope;
  /** Read current unsaved publication text for prompt or caption assistance. */
  getPublicationContext?: () => Promise<AiImagePublicationContext>;
  /** Default image aspect ratio selected in the prompt UI. */
  aspectRatio?: AiImageAspectRatio;
  /** Aspect ratios available for image generation. */
  aspectRatios?: AiImageAspectRatio[];
  /** Default image resolution selected in the prompt UI. */
  resolution?: AiImageResolution;
  /** Resolutions accepted by the host; the «HD 2k» toggle appears only when both 1k and 2k are allowed. */
  resolutions?: AiImageResolution[];
  /** Attribution displayed to the editor and stored with generated images. */
  source?: {
    name: string;
    url: string;
  };
}

export type AiImageAspectRatio = '16:9' | '3:2' | '1:1';

export type AiImageResolution = '1k' | '2k';

/** Fields shared by publication-aware text actions. */
interface AiImagePromptAssistanceRequestBase {
  /** Idempotency identifier for this paid prompt action. */
  actionId: string;
  /** Editor.js block identifier. */
  blockId: string;
  /** Current active-locale publication snapshot. */
  publication: AiImagePublicationContext;
}

/** Generate a new prompt from publication content. */
interface AiImageGeneratePromptRequest extends AiImagePromptAssistanceRequestBase {
  /** Requested prompt operation. */
  action: 'generate';
  /** Generate never accepts an existing draft. */
  draft?: never;
}

/** Improve the visible prompt using publication content. */
interface AiImageImprovePromptRequest extends AiImagePromptAssistanceRequestBase {
  /** Requested prompt operation. */
  action: 'improve';
  /** Exact visible prompt draft. */
  draft: string;
}

/** Generate or improve an image prompt without creating an image session. */
export type AiImagePromptAssistanceRequest = AiImageGeneratePromptRequest | AiImageImprovePromptRequest;

/** Generate an editorial caption from the final visible image prompt. */
export interface AiImageCaptionRequest extends AiImagePromptAssistanceRequestBase {
  /** Requested caption operation. */
  action: 'caption';
  /** Exact final image prompt visible to the editor. */
  draft: string;
}

type AiImageTextAssistanceRequest = AiImagePromptAssistanceRequest | AiImageCaptionRequest;

/** Identifiers required by every mutation. */
export interface AiImageMutationIdentifiers {
  /** Idempotency identifier for the mutation. */
  actionId: string;
  /** Editor.js block identifier. */
  blockId: string;
  /** Client-generated generation session identifier. */
  sessionId: string;
}

/** Initial generation request. */
export interface AiImageGenerateRequest extends AiImageMutationIdentifiers {
  /** Editor prompt. */
  prompt: string;
  /** Requested image aspect ratio. */
  aspectRatio: AiImageAspectRatio;
  /** Requested image resolution; omitted when the host decides. */
  resolution?: AiImageResolution;
}

/** Mutation acting on an existing candidate. */
export interface AiImageCandidateMutationRequest extends AiImageMutationIdentifiers {
  /** Candidate selected by the editor. */
  candidateId: string;
}

/** Refinement request for the selected candidate. */
export interface AiImageRefineRequest extends AiImageCandidateMutationRequest {
  /** Requested image modification. */
  prompt: string;
}

/** Session cancellation request. */
export interface AiImageCancelRequest {
  /** Editor.js block identifier. */
  blockId: string;
  /** Generation session identifier. */
  sessionId: string;
}

/** Normalized generation session state. */
export interface AiImageSession {
  /** Private candidates safe for browser display. */
  candidates?: AiImageCandidate[];
  /** Safe workflow error returned by the host. */
  error?: AiImageSessionError;
  /** Standard image payload after finalization. */
  image?: Record<string, unknown>;
  /** Opaque session identifier. */
  sessionId: string;
  /** Operation-specific progress marker supplied by the host. */
  progress?: string;
  /** Candidate returned by the latest operation. */
  selectedCandidateId?: string;
  /** Server workflow state. */
  status: string;
}

/** Candidate metadata exposed to the browser. */
export interface AiImageCandidate {
  /** Server candidate identifier. */
  id: string;
  /** Parent candidate in the linear refinement history. */
  parentId: string | null;
  /** Authenticated host preview URL. */
  previewUrl: string;
}

/** Safe workflow error. */
export interface AiImageSessionError {
  /** Stable application error code. */
  code: string;
  /** User-facing message. */
  message: string;
}

/** Polling parameters. */
export interface AiImagePollRequest {
  /** Editor.js block identifier. */
  blockId: string;
  /** Receives every observed session state. */
  onStatus?: (session: AiImageSession) => void;
  /** Optional cancellation signal. */
  signal?: AbortSignal;
  /** Generation session identifier. */
  sessionId: string;
}

/** JSON object received from the host. */
interface JsonRecord {
  [key: string]: unknown;
}

/** Safe error exposed by the host client. */
export class AiImageClientError extends Error {
  /** Stable application error code. */
  public readonly code: string;

  /** HTTP status, or zero when no response was received. */
  public readonly status: number;

  /**
   * Create a safe workflow error.
   * @param code - stable application error code
   * @param message - user-facing error message
   * @param status - HTTP response status
   */
  constructor(code: string, message: string, status: number) {
    super(message);
    this.name = 'AiImageClientError';
    this.code = code;
    this.status = status;
  }
}

/** Host HTTP client for the AI image workflow. */
export class AiImageClient {
  /**
   * Create the host client.
   * @param config - host endpoints, headers and resource identity
   */
  constructor(private readonly config: AiImageClientConfig) {}

  /**
   * Generate or improve a prompt from the current publication without starting image generation.
   * @param request - prompt action, idempotency key and current publication text
   * @param signal - optional cancellation signal
   */
  public async assistPrompt(
    request: AiImagePromptAssistanceRequest,
    signal?: AbortSignal
  ): Promise<string> {
    return this.requestAssistanceText(request, 'prompt', signal);
  }

  /**
   * Generate an editorial caption from the current publication and final image prompt.
   * @param request - caption action, idempotency key and current publication text
   * @param signal - optional cancellation signal
   */
  public async generateCaption(
    request: AiImageCaptionRequest,
    signal?: AbortSignal
  ): Promise<string> {
    return this.requestAssistanceText(request, 'caption', signal);
  }

  /**
   * Start an idempotent image generation operation.
   * @param request - prompt and idempotency identifiers
   * @param signal - optional cancellation signal
   */
  public async generate(request: AiImageGenerateRequest, signal?: AbortSignal): Promise<AiImageSession> {
    return this.mutate(this.config.endpoints.generate, {
      action_id: request.actionId,
      block_id: request.blockId,
      aspect_ratio: request.aspectRatio,
      context: this.config.context,
      prompt: request.prompt,
      session_id: request.sessionId,
      ...(request.resolution === undefined ? {} : { resolution: request.resolution }),
    }, signal);
  }

  /**
   * Start an idempotent refinement operation.
   * @param request - candidate, prompt and idempotency identifiers
   * @param signal - optional cancellation signal
   */
  public async refine(request: AiImageRefineRequest, signal?: AbortSignal): Promise<AiImageSession> {
    return this.mutate(this.resolveEndpoint(this.config.endpoints.refine, { sessionId: request.sessionId }), {
      action_id: request.actionId,
      block_id: request.blockId,
      candidate_id: request.candidateId,
      context: this.config.context,
      prompt: request.prompt,
      session_id: request.sessionId,
    }, signal);
  }

  /**
   * Start an idempotent finalization operation.
   * @param request - candidate and idempotency identifiers
   * @param signal - optional cancellation signal
   */
  public async finalize(request: AiImageCandidateMutationRequest, signal?: AbortSignal): Promise<AiImageSession> {
    return this.mutate(this.resolveEndpoint(this.config.endpoints.finalize, { sessionId: request.sessionId }), {
      action_id: request.actionId,
      block_id: request.blockId,
      candidate_id: request.candidateId,
      context: this.config.context,
      session_id: request.sessionId,
    }, signal);
  }

  /**
   * Cancel a generation session without exposing temporary output.
   * @param request - session and block identity
   * @param signal - optional cancellation signal
   */
  public async cancel(request: AiImageCancelRequest, signal?: AbortSignal): Promise<AiImageSession> {
    return this.mutate(this.resolveEndpoint(this.config.endpoints.cancel, { sessionId: request.sessionId }), {
      block_id: request.blockId,
      context: this.config.context,
      session_id: request.sessionId,
    }, signal);
  }

  /**
   * List the editor's own unfinished sessions and the slot limit.
   * @param blockId - current Editor.js block identifier
   * @param signal - optional cancellation signal
   */
  public async listSessions(blockId: string, signal?: AbortSignal): Promise<AiImageActiveSessions> {
    const data = await this.request(this.config.endpoints.sessions, {
      body: JSON.stringify({
        block_id: blockId,
        context: this.config.context,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...this.config.headers,
      },
      method: 'POST',
      signal,
    }, {
      invalidResponse: 'Некорректный ответ сервера со списком генераций.',
      networkError: 'Не удалось получить список активных генераций.',
      requestFailed: 'Сервер не смог вернуть список активных генераций.',
    });

    return this.normalizeActiveSessions(data);
  }

  /**
   * Move a session started elsewhere into the current block.
   * @param request - session and block identity
   * @param signal - optional cancellation signal
   */
  public async adopt(request: AiImageCancelRequest, signal?: AbortSignal): Promise<AiImageSession> {
    return this.mutate(this.resolveEndpoint(this.config.endpoints.adopt, { sessionId: request.sessionId }), {
      block_id: request.blockId,
      context: this.config.context,
      session_id: request.sessionId,
    }, signal);
  }

  /**
   * Poll until the host reports a terminal state.
   * @param request - session identity, observer and cancellation signal
   */
  public async poll(request: AiImagePollRequest): Promise<AiImageSession> {
    const startedAt = Date.now();
    const timeoutMs = this.config.pollTimeoutMs ?? defaultPollTimeoutMs;
    const maxIntervalMs = this.config.pollMaxIntervalMs ?? defaultPollMaxIntervalMs;
    let intervalMs = this.config.pollIntervalMs ?? defaultPollIntervalMs;

    while (true) {
      const session = await this.status(request.sessionId, request.blockId, request.signal);

      request.onStatus?.(session);

      if (this.isTerminal(session.status)) {
        return session;
      }

      if (Date.now() - startedAt >= timeoutMs) {
        throw new AiImageClientError(
          'poll_timeout',
          'Превышено время ожидания генерации изображения.',
          0
        );
      }

      await this.wait(this.jittered(intervalMs), request.signal);
      intervalMs = Math.min(Math.ceil(intervalMs * pollBackoffFactor), maxIntervalMs);
    }
  }

  /**
   * Spread a polling delay by ±20 % so several tabs do not hit the status endpoint in lockstep.
   * @param durationMs - base delay
   */
  private jittered(durationMs: number): number {
    const spread = 1 - pollJitterRatio + Math.random() * pollJitterRatio * 2;

    return Math.round(durationMs * spread);
  }

  /**
   * Browser previews use the reduced JPEG variant; the full image stays server-side for finalize and refine.
   * @param url - resolved candidate endpoint
   */
  private previewVariant(url: string): string {
    return `${url}${url.includes('?') ? '&' : '?'}variant=preview`;
  }

  /**
   * Read the current host session state.
   * @param sessionId - generation session identifier
   * @param blockId - Editor.js block identifier
   * @param signal - optional cancellation signal
   */
  public async status(sessionId: string, blockId: string, signal?: AbortSignal): Promise<AiImageSession> {
    const endpoint = this.resolveEndpoint(this.config.endpoints.status, { sessionId });
    const query = new URLSearchParams({ block_id: blockId });

    for (const [key, value] of Object.entries(this.config.context)) {
      if (value !== null) {
        query.set(`context[${key}]`, String(value));
      }
    }

    const data = await this.request(`${endpoint}${endpoint.includes('?') ? '&' : '?'}${query.toString()}`, {
      headers: {
        Accept: 'application/json',
        ...this.config.headers,
      },
      method: 'GET',
      signal,
    });

    return this.normalizeSession(data);
  }

  /**
   * Execute one prompt-assistance action and return its text field.
   * @param request - prompt or caption assistance payload
   * @param responseField - successful response field
   * @param signal - optional cancellation signal
   */
  private async requestAssistanceText(
    request: AiImageTextAssistanceRequest,
    responseField: 'caption' | 'prompt',
    signal?: AbortSignal
  ): Promise<string> {
    const endpoint = this.config.endpoints.prompt;
    const publicationContext = this.config.publicationContext;
    const isCaption = responseField === 'caption';

    if (typeof endpoint !== 'string' || endpoint === '' || publicationContext === undefined) {
      throw new AiImageClientError(
        'prompt_unavailable',
        isCaption ? 'Генерация описания недоступна.' : 'Помощь с промптом недоступна.',
        0
      );
    }

    const body: JsonRecord = {
      action: request.action,
      action_id: request.actionId,
      block_id: request.blockId,
      context: this.config.context,
      publication: request.publication,
      publicationContext,
    };

    if (request.action !== 'generate') {
      body.draft = request.draft;
    }

    const data = await this.request(endpoint, {
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...this.config.headers,
      },
      method: 'POST',
      signal,
    }, {
      invalidResponse: isCaption
        ? 'Некорректный ответ сервера подготовки описания.'
        : 'Некорректный ответ сервера подготовки промпта.',
      networkError: isCaption
        ? 'Не удалось связаться с сервером подготовки описания.'
        : 'Не удалось связаться с сервером подготовки промпта.',
      requestFailed: isCaption
        ? 'Сервер не смог подготовить описание изображения.'
        : 'Сервер не смог подготовить промпт для изображения.',
    });

    const text = data[responseField];

    if (typeof text !== 'string' || text.trim() === '') {
      throw new AiImageClientError(
        'invalid_response',
        isCaption
          ? 'Некорректный ответ сервера подготовки описания.'
          : 'Некорректный ответ сервера подготовки промпта.',
        successStatus
      );
    }

    return text;
  }

  /**
   * Execute a host JSON request.
   * @param url - host URL
   * @param init - fetch options
   * @param messages - safe operation-specific failures
   */
  private async request(
    url: string,
    init: RequestInit,
    messages: {
      /** Malformed successful response. */
      invalidResponse: string;
      /** Transport failure before a response. */
      networkError: string;
      /** Non-successful response without a safe host error. */
      requestFailed: string;
    } = {
      invalidResponse: 'Некорректный ответ сервера генерации изображений.',
      networkError: 'Не удалось связаться с сервером генерации изображений.',
      requestFailed: 'Сервер не смог выполнить операцию с изображением.',
    }
  ): Promise<JsonRecord> {
    let response: Response;

    try {
      response = await fetch(url, init);
    } catch (error: unknown) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        throw error;
      }

      throw new AiImageClientError(
        'network_error',
        messages.networkError,
        0
      );
    }

    const payload: unknown = await response.json().catch((): null => null);

    if (!response.ok) {
      if (this.isRecord(payload) && this.isRecord(payload.error)) {
        const code = payload.error.code;
        const message = payload.error.message;

        if (typeof code === 'string' && typeof message === 'string') {
          throw new AiImageClientError(code, message, response.status);
        }
      }

      throw new AiImageClientError(
        'request_failed',
        messages.requestFailed,
        response.status
      );
    }

    if (!this.isRecord(payload) || !this.isRecord(payload.data)) {
      throw new AiImageClientError(
        'invalid_response',
        messages.invalidResponse,
        response.status
      );
    }

    return payload.data;
  }

  /**
   * Send a JSON mutation and normalize its session response.
   * @param url - host mutation URL
   * @param body - JSON request body
   * @param signal - optional cancellation signal
   */
  private async mutate(url: string, body: JsonRecord, signal?: AbortSignal): Promise<AiImageSession> {
    const data = await this.request(url, {
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...this.config.headers,
      },
      method: 'POST',
      signal,
    });

    return this.normalizeSession(data);
  }

  /**
   * Normalize the host response and discard provider-only fields.
   * @param data - host response data
   */
  private normalizeSession(data: JsonRecord): AiImageSession {
    const sessionId = this.requiredString(data, 'session_id');
    let candidates: AiImageCandidate[] | undefined;

    if (Array.isArray(data.candidates)) {
      candidates = [];

      for (const candidate of data.candidates as unknown[]) {
        if (!this.isRecord(candidate) || typeof candidate.id !== 'string' || candidate.id === '') {
          continue;
        }

        candidates.push({
          id: candidate.id,
          parentId: typeof candidate.parent_id === 'string' ? candidate.parent_id : null,
          previewUrl: this.previewVariant(this.resolveEndpoint(this.config.endpoints.candidate, {
            candidateId: candidate.id,
            sessionId,
          })),
        });
      }
    }

    const error = this.isRecord(data.error)
      && typeof data.error.code === 'string'
      && typeof data.error.message === 'string'
      ? {
          code: data.error.code,
          message: data.error.message,
        }
      : undefined;

    return {
      candidates,
      error,
      image: this.isRecord(data.image) ? data.image : undefined,
      progress: typeof data.progress === 'string' ? data.progress : undefined,
      selectedCandidateId: typeof data.selected_candidate_id === 'string' ? data.selected_candidate_id : undefined,
      sessionId,
      status: this.requiredString(data, 'status'),
    };
  }

  /**
   * Normalize the unfinished-session list and drop malformed rows.
   * @param data - host response data
   */
  private normalizeActiveSessions(data: JsonRecord): AiImageActiveSessions {
    const limit = typeof data.limit === 'number' && Number.isFinite(data.limit) ? data.limit : 1;
    const sessions: AiImageActiveSession[] = [];

    if (Array.isArray(data.sessions)) {
      for (const session of data.sessions as unknown[]) {
        if (!this.isRecord(session) || typeof session.session_id !== 'string' || session.session_id === '') {
          continue;
        }

        const owner = this.isRecord(session.owner) ? session.owner : {};
        const previewCandidateId = typeof session.preview_candidate_id === 'string'
          ? session.preview_candidate_id
          : null;

        sessions.push({
          candidateCount: typeof session.candidate_count === 'number' ? session.candidate_count : 0,
          createdAt: typeof session.created_at === 'string' ? session.created_at : null,
          isCurrentBlock: session.is_current_block === true,
          owner: {
            title: typeof owner.title === 'string' && owner.title !== '' ? owner.title : 'Публикация',
            url: typeof owner.url === 'string' && owner.url !== '' ? owner.url : null,
          },
          previewUrl: previewCandidateId === null
            ? null
            : this.previewVariant(this.resolveEndpoint(this.config.endpoints.candidate, {
                candidateId: previewCandidateId,
                sessionId: session.session_id,
              })),
          prompt: typeof session.prompt === 'string' && session.prompt !== '' ? session.prompt : null,
          sessionId: session.session_id,
          status: typeof session.status === 'string' ? session.status : 'queued',
        });
      }
    }

    return { limit, sessions };
  }

  /**
   * Replace encoded identifiers in a host endpoint template.
   * @param template - URL containing named placeholders
   * @param values - placeholder values
   */
  private resolveEndpoint(template: string, values: Record<string, string>): string {
    return Object.entries(values).reduce(
      (endpoint, [key, value]) => endpoint.split(`{${key}}`).join(encodeURIComponent(value)),
      template
    );
  }

  /**
   * Determine whether polling should stop.
   * @param status - normalized host state
   */
  private isTerminal(status: string): boolean {
    return ['cancelled', 'completed', 'expired', 'failed', 'ready'].includes(status);
  }

  /**
   * Wait between polling attempts and respect cancellation.
   * @param durationMs - delay duration
   * @param signal - optional cancellation signal
   */
  private async wait(durationMs: number, signal?: AbortSignal): Promise<void> {
    if (signal?.aborted === true) {
      throw new DOMException('The operation was aborted.', 'AbortError');
    }

    if (durationMs <= 0) {
      return;
    }

    await new Promise<void>((resolve, reject) => {
      let timeout: ReturnType<typeof setTimeout>;
      const onAbort = (): void => {
        clearTimeout(timeout);
        reject(new DOMException('The operation was aborted.', 'AbortError'));
      };

      timeout = setTimeout(() => {
        signal?.removeEventListener('abort', onAbort);
        resolve();
      }, durationMs);

      signal?.addEventListener('abort', onAbort, { once: true });
    });
  }

  /**
   * Read a required non-empty response string.
   * @param data - response data object
   * @param key - response key
   */
  private requiredString(data: JsonRecord, key: string): string {
    const value = data[key];

    if (typeof value !== 'string' || value === '') {
      throw new AiImageClientError(
        'invalid_response',
        'Некорректный ответ сервера генерации изображений.',
        0
      );
    }

    return value;
  }

  /**
   * Check whether a value is a JSON object.
   * @param value - unknown response value
   */
  private isRecord(value: unknown): value is JsonRecord {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  }
}
