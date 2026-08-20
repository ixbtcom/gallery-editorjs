import { AiImageActiveSessions, AiImageAspectRatio, AiImageResolution, AiImageCandidate } from './ai-image-client';

export type PromptAssistanceAction = 'generate' | 'improve';
export interface AiImageEditorialMetadata {
    caption: string;
    source: string;
    sourceLink: string;
}
interface AiGenerationUiParams {
    onAdoptSession: (sessionId: string) => void;
    onAssistPrompt: (action: PromptAssistanceAction, prompt: string) => void;
    onCancel: () => void;
    onCloseSession: (sessionId: string) => void;
    onFinalize: () => void;
    onGenerate: (prompt: string, generateCaption: boolean, aspectRatio: AiImageAspectRatio, resolution: AiImageResolution | null) => void;
    onRefine: (prompt: string) => void;
    onSelectCandidate: (candidateId: string) => void;
    onSelectHistory: (candidateId: string) => void;
    promptAssistanceEnabled: boolean;
    promptId: string;
    aspectRatio: AiImageAspectRatio;
    aspectRatios: AiImageAspectRatio[];
    resolution: AiImageResolution | null;
    resolutions: AiImageResolution[];
    metadataPlaceholders: AiImageEditorialMetadata;
    source: {
        name: string;
        url: string;
    };
}
interface AiGenerationNodes {
    wrapper: HTMLElement;
    sessionsSection: HTMLElement;
    sessionsTitle: HTMLElement;
    sessionsList: HTMLElement;
    promptSection: HTMLElement;
    prompt: HTMLTextAreaElement;
    generateButton: HTMLButtonElement;
    generateFromPublicationButton: HTMLButtonElement;
    improvePromptButton: HTMLButtonElement;
    generateCaptionCheckbox: HTMLInputElement;
    aspectRatioOptions: HTMLElement;
    hdResolutionOption: HTMLLabelElement;
    hdResolutionCheckbox: HTMLInputElement;
    generationStatus: HTMLElement;
    generationError: HTMLElement;
    candidates: HTMLElement;
    selection: HTMLElement;
    selectedPreview: HTMLImageElement;
    metadataSection: HTMLElement;
    generatedCaption: HTMLTextAreaElement;
    generatedCaptionStatus: HTMLElement;
    sourceName: HTMLInputElement;
    sourceUrl: HTMLInputElement;
    refinementPrompt: HTMLTextAreaElement;
    refineButton: HTMLButtonElement;
    finalizeButton: HTMLButtonElement;
    cancelButton: HTMLButtonElement;
    history: HTMLElement;
    historyStatus: HTMLElement;
}
export default class AiGenerationUi {
    readonly nodes: AiGenerationNodes;
    private readonly promptAssistanceEnabled;
    private readonly defaultResolution;
    private readonly onAdoptSession;
    private readonly onCloseSession;
    private readonly onSelectCandidate;
    private readonly onSelectHistory;
    private isGenerationBusy;
    private isPromptAssistanceBusy;
    private isGeneratedCaptionBusy;
    private hasFreeSessionSlot;
    constructor({ onAdoptSession, onAssistPrompt, onCancel, onCloseSession, onFinalize, onGenerate, onRefine, onSelectCandidate, onSelectHistory, promptAssistanceEnabled, promptId, aspectRatio, aspectRatios, resolution, resolutions, metadataPlaceholders, source, }: AiGenerationUiParams);
    open(): void;
    close(): void;
    /**
     * Show the editor's unfinished sessions above the prompt: each one can be
     * continued here, opened in its own publication, or closed to free a slot.
     */
    showActiveSessions(data: AiImageActiveSessions): void;
    hideActiveSessions(): void;
    private buildSessionCard;
    private sessionStatusLabel;
    private sessionTimeLabel;
    setPromptValue(prompt: string): void;
    showPromptAssistanceStatus(message: string): void;
    setPromptAssistanceBusy(isBusy: boolean): void;
    setGenerationBusy(isBusy: boolean): void;
    prepareGeneratedCaption(): void;
    completeGeneratedCaption(caption: string): void;
    failGeneratedCaption(message: string): void;
    resetGeneratedCaption(): void;
    getImageMetadata(): AiImageEditorialMetadata;
    showGenerationStatus(status: string, progress?: string): void;
    showGenerationError(message: string): void;
    showCandidates(candidates: AiImageCandidate[]): void;
    showSelectedCandidate(candidate: AiImageCandidate, history: AiImageCandidate[]): void;
    clearRefinementPrompt(): void;
    private selectCandidate;
    private selectHistory;
    private reset;
    private updatePromptControls;
    private updateSelectionControls;
    private createAspectRatioOptions;
    private selectedAspectRatio;
    private selectedResolution;
}
export {};
