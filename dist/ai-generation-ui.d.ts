import { AiImageAspectRatio, AiImageCandidate } from './ai-image-client';

export type PromptAssistanceAction = 'generate' | 'improve';
interface AiGenerationUiParams {
    onAssistPrompt: (action: PromptAssistanceAction, prompt: string) => void;
    onCancel: () => void;
    onFinalize: () => void;
    onGenerate: (prompt: string, generateCaption: boolean, aspectRatio: AiImageAspectRatio) => void;
    onRefine: (prompt: string) => void;
    onSelectCandidate: (candidateId: string) => void;
    onSelectHistory: (candidateId: string) => void;
    promptAssistanceEnabled: boolean;
    promptId: string;
    aspectRatio: AiImageAspectRatio;
    aspectRatios: AiImageAspectRatio[];
}
interface AiGenerationNodes {
    wrapper: HTMLElement;
    promptSection: HTMLElement;
    prompt: HTMLTextAreaElement;
    generateButton: HTMLButtonElement;
    generateFromPublicationButton: HTMLButtonElement;
    improvePromptButton: HTMLButtonElement;
    generateCaptionCheckbox: HTMLInputElement;
    aspectRatioOptions: HTMLElement;
    generationStatus: HTMLElement;
    generationError: HTMLElement;
    candidates: HTMLElement;
    selection: HTMLElement;
    selectedPreview: HTMLImageElement;
    generatedCaptionSection: HTMLElement;
    generatedCaption: HTMLTextAreaElement;
    generatedCaptionStatus: HTMLElement;
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
    private readonly onSelectCandidate;
    private readonly onSelectHistory;
    private isGenerationBusy;
    private isPromptAssistanceBusy;
    private isGeneratedCaptionBusy;
    constructor({ onAssistPrompt, onCancel, onFinalize, onGenerate, onRefine, onSelectCandidate, onSelectHistory, promptAssistanceEnabled, promptId, aspectRatio, aspectRatios, }: AiGenerationUiParams);
    open(): void;
    close(): void;
    setPromptValue(prompt: string): void;
    showPromptAssistanceStatus(message: string): void;
    setPromptAssistanceBusy(isBusy: boolean): void;
    setGenerationBusy(isBusy: boolean): void;
    prepareGeneratedCaption(): void;
    completeGeneratedCaption(caption: string): void;
    failGeneratedCaption(message: string): void;
    resetGeneratedCaption(): void;
    getGeneratedCaption(): string;
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
}
export {};
