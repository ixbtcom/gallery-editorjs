import { AiImageClientConfig } from './ai-image-client';
import { AiImageEditorialMetadata } from './ai-generation-ui';
import { AiGenerationPendingData, GalleryItemData } from './types/types';

interface AiGenerationControllerParams {
    blockId: string;
    config: AiImageClientConfig;
    initialPending?: AiGenerationPendingData;
    metadataPlaceholders: AiImageEditorialMetadata;
    onChange: () => void;
    onFinalized: (item: GalleryItemData) => void;
}
export default class AiGenerationController {
    readonly element: HTMLElement;
    private readonly blockId;
    private readonly client;
    private readonly config;
    private readonly onChange;
    private readonly onFinalized;
    private readonly ui;
    private sessionId;
    private generationActionId;
    private refinementActionId;
    private finalizationActionId;
    private isGenerationRequestRunning;
    private isPromptAssistanceRunning;
    private isCaptionRequestRunning;
    private isDestroyed;
    private hasCancelledPendingGeneration;
    private pollController;
    private promptAssistanceController;
    private captionController;
    private promptAssistanceRequestToken;
    private captionRequestToken;
    private candidates;
    private history;
    private selectedCandidateId;
    constructor({ blockId, config, initialPending, metadataPlaceholders, onChange, onFinalized, }: AiGenerationControllerParams);
    open(): void;
    /**
     * Показать незакрытые генерации редактора: сессия живёт сутки и занимает
     * слот, поэтому решение — продолжить её или закрыть — принимает он сам.
     */
    private refreshActiveSessions;
    private adoptSession;
    private runAdoptSession;
    private closeSession;
    getPendingData(): AiGenerationPendingData | undefined;
    destroy(): void;
    private cancel;
    private cancelPendingGeneration;
    private resetSession;
    private abortPromptAssistance;
    private abortCaptionGeneration;
    private assistPrompt;
    private runPromptAssistance;
    private isCurrentPromptAssistance;
    private startCaptionGeneration;
    private runCaptionGeneration;
    private isCurrentCaptionRequest;
    private generate;
    private runGeneration;
    private refine;
    private runRefinement;
    private finalizeSelectedCandidate;
    private runFinalization;
    private applySession;
    private selectCandidate;
    private applyRefinementCandidate;
    private replacePollController;
    private finishGenerationRequest;
    private handleOperationError;
    private isStandardImageData;
    private mapImageToGalleryItem;
    private assertPublicationHasText;
    private isAbortError;
    private errorMessage;
    private availableAspectRatios;
    private defaultAspectRatio;
    private isAspectRatio;
}
export {};
