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
/** Safe error exposed by the host client. */
export declare class AiImageClientError extends Error {
    /** Stable application error code. */
    readonly code: string;
    /** HTTP status, or zero when no response was received. */
    readonly status: number;
    /**
     * Create a safe workflow error.
     * @param code - stable application error code
     * @param message - user-facing error message
     * @param status - HTTP response status
     */
    constructor(code: string, message: string, status: number);
}
/** Host HTTP client for the AI image workflow. */
export declare class AiImageClient {
    private readonly config;
    /**
     * Create the host client.
     * @param config - host endpoints, headers and resource identity
     */
    constructor(config: AiImageClientConfig);
    /**
     * Generate or improve a prompt from the current publication without starting image generation.
     * @param request - prompt action, idempotency key and current publication text
     * @param signal - optional cancellation signal
     */
    assistPrompt(request: AiImagePromptAssistanceRequest, signal?: AbortSignal): Promise<string>;
    /**
     * Generate an editorial caption from the current publication and final image prompt.
     * @param request - caption action, idempotency key and current publication text
     * @param signal - optional cancellation signal
     */
    generateCaption(request: AiImageCaptionRequest, signal?: AbortSignal): Promise<string>;
    /**
     * Start an idempotent image generation operation.
     * @param request - prompt and idempotency identifiers
     * @param signal - optional cancellation signal
     */
    generate(request: AiImageGenerateRequest, signal?: AbortSignal): Promise<AiImageSession>;
    /**
     * Start an idempotent refinement operation.
     * @param request - candidate, prompt and idempotency identifiers
     * @param signal - optional cancellation signal
     */
    refine(request: AiImageRefineRequest, signal?: AbortSignal): Promise<AiImageSession>;
    /**
     * Start an idempotent finalization operation.
     * @param request - candidate and idempotency identifiers
     * @param signal - optional cancellation signal
     */
    finalize(request: AiImageCandidateMutationRequest, signal?: AbortSignal): Promise<AiImageSession>;
    /**
     * Cancel a generation session without exposing temporary output.
     * @param request - session and block identity
     * @param signal - optional cancellation signal
     */
    cancel(request: AiImageCancelRequest, signal?: AbortSignal): Promise<AiImageSession>;
    /**
     * List the editor's own unfinished sessions and the slot limit.
     * @param blockId - current Editor.js block identifier
     * @param signal - optional cancellation signal
     */
    listSessions(blockId: string, signal?: AbortSignal): Promise<AiImageActiveSessions>;
    /**
     * Move a session started elsewhere into the current block.
     * @param request - session and block identity
     * @param signal - optional cancellation signal
     */
    adopt(request: AiImageCancelRequest, signal?: AbortSignal): Promise<AiImageSession>;
    /**
     * Poll until the host reports a terminal state.
     * @param request - session identity, observer and cancellation signal
     */
    poll(request: AiImagePollRequest): Promise<AiImageSession>;
    /**
     * Spread a polling delay by ±20 % so several tabs do not hit the status endpoint in lockstep.
     * @param durationMs - base delay
     */
    private jittered;
    /**
     * Browser previews use the reduced JPEG variant; the full image stays server-side for finalize and refine.
     * @param url - resolved candidate endpoint
     */
    private previewVariant;
    /**
     * Read the current host session state.
     * @param sessionId - generation session identifier
     * @param blockId - Editor.js block identifier
     * @param signal - optional cancellation signal
     */
    status(sessionId: string, blockId: string, signal?: AbortSignal): Promise<AiImageSession>;
    /**
     * Execute one prompt-assistance action and return its text field.
     * @param request - prompt or caption assistance payload
     * @param responseField - successful response field
     * @param signal - optional cancellation signal
     */
    private requestAssistanceText;
    /**
     * Execute a host JSON request.
     * @param url - host URL
     * @param init - fetch options
     * @param messages - safe operation-specific failures
     */
    private request;
    /**
     * Send a JSON mutation and normalize its session response.
     * @param url - host mutation URL
     * @param body - JSON request body
     * @param signal - optional cancellation signal
     */
    private mutate;
    /**
     * Normalize the host response and discard provider-only fields.
     * @param data - host response data
     */
    private normalizeSession;
    /**
     * Normalize the unfinished-session list and drop malformed rows.
     * @param data - host response data
     */
    private normalizeActiveSessions;
    /**
     * Replace encoded identifiers in a host endpoint template.
     * @param template - URL containing named placeholders
     * @param values - placeholder values
     */
    private resolveEndpoint;
    /**
     * Determine whether polling should stop.
     * @param status - normalized host state
     */
    private isTerminal;
    /**
     * Wait between polling attempts and respect cancellation.
     * @param durationMs - delay duration
     * @param signal - optional cancellation signal
     */
    private wait;
    /**
     * Read a required non-empty response string.
     * @param data - response data object
     * @param key - response key
     */
    private requiredString;
    /**
     * Check whether a value is a JSON object.
     * @param value - unknown response value
     */
    private isRecord;
}
export {};
