import { AiImageClient, AiImageClientError } from './ai-image-client';
import type {
  AiImageCandidate,
  AiImageAspectRatio,
  AiImageClientConfig,
  AiImagePublicationContext,
  AiImageSession,
} from './ai-image-client';
import AiGenerationUi from './ai-generation-ui';
import type { AiImageEditorialMetadata, PromptAssistanceAction } from './ai-generation-ui';
import type { AiGenerationPendingData, GalleryItemData } from './types/types';

interface AiGenerationControllerParams {
  blockId: string;
  config: AiImageClientConfig;
  initialPending?: AiGenerationPendingData;
  metadataPlaceholders: AiImageEditorialMetadata;
  onChange: () => void;
  onFinalized: (item: GalleryItemData) => void;
}

interface StandardImageFile {
  height?: number;
  imagor_path?: string;
  media_id?: string;
  url: string;
  width?: number;
}

interface StandardImageData {
  alt: string;
  caption: string;
  file: StandardImageFile;
  link: string;
}

export default class AiGenerationController {
  public readonly element: HTMLElement;

  private readonly blockId: string;
  private readonly client: AiImageClient;
  private readonly config: AiImageClientConfig;
  private readonly onChange: () => void;
  private readonly onFinalized: (item: GalleryItemData) => void;
  private readonly ui: AiGenerationUi;
  private sessionId: string | null;
  private generationActionId: string | null = null;
  private refinementActionId: string | null = null;
  private finalizationActionId: string | null = null;
  private isGenerationRequestRunning = false;
  private isPromptAssistanceRunning = false;
  private isCaptionRequestRunning = false;
  private isDestroyed = false;
  private hasCancelledPendingGeneration = false;
  private pollController: AbortController | null = null;
  private promptAssistanceController: AbortController | null = null;
  private captionController: AbortController | null = null;
  private promptAssistanceRequestToken = 0;
  private captionRequestToken = 0;
  private candidates = new Map<string, AiImageCandidate>();
  private history: AiImageCandidate[] = [];
  private selectedCandidateId: string | null = null;

  constructor({
    blockId,
    config,
    initialPending,
    metadataPlaceholders,
    onChange,
    onFinalized,
  }: AiGenerationControllerParams) {
    this.blockId = blockId;
    this.client = new AiImageClient(config);
    this.config = config;
    this.onChange = onChange;
    this.onFinalized = onFinalized;
    this.sessionId = initialPending?.sessionId ?? null;

    const promptAssistanceEnabled = typeof config.endpoints.prompt === 'string'
      && config.endpoints.prompt.trim() !== ''
      && config.publicationContext !== undefined
      && typeof config.getPublicationContext === 'function';

    this.ui = new AiGenerationUi({
      onAdoptSession: sessionId => this.adoptSession(sessionId),
      onAssistPrompt: (action, prompt) => this.assistPrompt(action, prompt),
      onCancel: () => this.cancel(),
      onCloseSession: sessionId => this.closeSession(sessionId),
      onFinalize: () => this.finalizeSelectedCandidate(),
      onGenerate: (prompt, generateCaption, aspectRatio) => this.generate(prompt, generateCaption, aspectRatio),
      onRefine: prompt => this.refine(prompt),
      onSelectCandidate: candidateId => this.selectCandidate(candidateId),
      onSelectHistory: candidateId => this.selectCandidate(candidateId),
      aspectRatio: this.defaultAspectRatio(config.aspectRatio),
      aspectRatios: this.availableAspectRatios(config.aspectRatios),
      metadataPlaceholders,
      promptAssistanceEnabled,
      promptId: `gallery-ai-prompt-${blockId}`,
      source: config.source ?? { name: '', url: '' },
    });
    this.element = this.ui.nodes.wrapper;
  }

  public open(): void {
    if (this.isDestroyed) {
      return;
    }

    if (this.sessionId === null) {
      this.sessionId = globalThis.crypto.randomUUID();
      this.hasCancelledPendingGeneration = false;
      this.onChange();
    }

    this.ui.open();
    this.refreshActiveSessions();
  }

  /**
   * Показать незакрытые генерации редактора: сессия живёт сутки и занимает
   * слот, поэтому решение — продолжить её или закрыть — принимает он сам.
   */
  private refreshActiveSessions(): void {
    void this.client.listSessions(this.blockId)
      .then((sessions) => {
        if (!this.isDestroyed) {
          this.ui.showActiveSessions(sessions);
        }
      })
      .catch(() => undefined);
  }

  private adoptSession(sessionId: string): void {
    if (this.isDestroyed || this.isGenerationRequestRunning) {
      return;
    }

    void this.runAdoptSession(sessionId);
  }

  private async runAdoptSession(sessionId: string): Promise<void> {
    const controller = this.replacePollController();

    this.ui.showGenerationError('');
    this.isGenerationRequestRunning = true;
    this.ui.setGenerationBusy(true);

    try {
      const session = await this.client.adopt({ blockId: this.blockId, sessionId }, controller.signal);

      this.candidates.clear();
      this.history = [];
      this.selectedCandidateId = null;
      this.sessionId = sessionId;
      this.hasCancelledPendingGeneration = false;
      this.onChange();
      this.ui.hideActiveSessions();
      this.applySession(session);

      if (session.status === 'queued' || session.status === 'generating' || session.status === 'refining') {
        this.applySession(await this.client.poll({
          blockId: this.blockId,
          onStatus: current => this.applySession(current),
          sessionId,
          signal: controller.signal,
        }));
      }
    } catch (error: unknown) {
      this.handleOperationError(error, 'Не удалось продолжить эту генерацию.', () => undefined);
      this.refreshActiveSessions();
    } finally {
      this.finishGenerationRequest(controller);
    }
  }

  private closeSession(sessionId: string): void {
    if (this.isDestroyed) {
      return;
    }

    const isCurrent = sessionId === this.sessionId;

    if (isCurrent) {
      this.hasCancelledPendingGeneration = true;
    }

    void this.client.cancel({ blockId: this.blockId, sessionId })
      .catch(() => undefined)
      .then(() => {
        if (this.isDestroyed) {
          return;
        }

        // Закрыли сессию этого блока — панель возвращается к чистому промпту,
        // но уже с новым идентификатором, иначе генерация упрётся в отменённую.
        if (isCurrent) {
          this.resetSession();
          this.sessionId = globalThis.crypto.randomUUID();
          this.hasCancelledPendingGeneration = false;
          this.ui.close();
          this.ui.open();
          this.onChange();
        }

        this.refreshActiveSessions();
      });
  }

  public getPendingData(): AiGenerationPendingData | undefined {
    if (this.sessionId === null) {
      return undefined;
    }

    return {
      pending: true,
      sessionId: this.sessionId,
    };
  }

  public destroy(): void {
    this.isDestroyed = true;
    this.abortPromptAssistance();
    this.abortCaptionGeneration();
    this.cancelPendingGeneration();
  }

  private cancel(): void {
    this.abortPromptAssistance();
    this.abortCaptionGeneration();
    this.cancelPendingGeneration();
    this.resetSession();
    this.ui.close();
    this.onChange();
  }

  private cancelPendingGeneration(): void {
    if (this.sessionId === null || this.hasCancelledPendingGeneration) {
      return;
    }

    const sessionId = this.sessionId;

    this.hasCancelledPendingGeneration = true;
    this.pollController?.abort();
    void this.client.cancel({ blockId: this.blockId, sessionId }).catch(() => undefined);
  }

  private resetSession(): void {
    this.pollController?.abort();
    this.pollController = null;
    this.sessionId = null;
    this.generationActionId = null;
    this.refinementActionId = null;
    this.finalizationActionId = null;
    this.isGenerationRequestRunning = false;
    this.selectedCandidateId = null;
    this.candidates.clear();
    this.history = [];
  }

  private abortPromptAssistance(): void {
    this.promptAssistanceRequestToken += 1;
    this.promptAssistanceController?.abort();
    this.promptAssistanceController = null;
    this.isPromptAssistanceRunning = false;
  }

  private abortCaptionGeneration(): void {
    this.captionRequestToken += 1;
    this.captionController?.abort();
    this.captionController = null;
    this.isCaptionRequestRunning = false;
  }

  private assistPrompt(action: PromptAssistanceAction, prompt: string): void {
    const getPublicationContext = this.config.getPublicationContext;

    if (this.isDestroyed || this.isPromptAssistanceRunning || getPublicationContext === undefined) {
      return;
    }
    if (action === 'improve' && prompt.trim() === '') {
      this.ui.showGenerationError('Введите промпт, который нужно улучшить.');

      return;
    }

    this.ui.showGenerationError('');
    this.isPromptAssistanceRunning = true;
    const requestToken = ++this.promptAssistanceRequestToken;
    const controller = new AbortController();

    this.promptAssistanceController = controller;
    this.ui.setPromptAssistanceBusy(true);
    this.ui.showPromptAssistanceStatus(action === 'generate'
      ? 'Подготавливаем промпт по публикации...'
      : 'Улучшаем промпт с учётом публикации...');
    void this.runPromptAssistance(action, prompt, getPublicationContext, controller, requestToken);
  }

  private async runPromptAssistance(
    action: PromptAssistanceAction,
    prompt: string,
    getPublicationContext: () => Promise<AiImagePublicationContext>,
    controller: AbortController,
    requestToken: number,
  ): Promise<void> {
    try {
      const publication = await getPublicationContext();

      if (!this.isCurrentPromptAssistance(requestToken, controller)) {
        return;
      }
      this.assertPublicationHasText(publication, 'В публикации нет текста для подготовки промпта.');
      const request = action === 'generate'
        ? {
            action,
            actionId: globalThis.crypto.randomUUID(),
            blockId: this.blockId,
            publication,
          } as const
        : {
            action,
            actionId: globalThis.crypto.randomUUID(),
            blockId: this.blockId,
            draft: prompt,
            publication,
          } as const;
      const result = await this.client.assistPrompt(request, controller.signal);

      if (this.isCurrentPromptAssistance(requestToken, controller)) {
        this.ui.setPromptValue(result);
        this.ui.showPromptAssistanceStatus('Промпт готов — проверьте и при необходимости отредактируйте');
      }
    } catch (error: unknown) {
      if (this.isCurrentPromptAssistance(requestToken, controller) && !this.isAbortError(error)) {
        this.ui.showPromptAssistanceStatus('');
        this.ui.showGenerationError(this.errorMessage(error, 'Не удалось подготовить промпт для изображения.'));
      }
    } finally {
      if (this.isCurrentPromptAssistance(requestToken, controller)) {
        this.isPromptAssistanceRunning = false;
        this.promptAssistanceController = null;
        this.ui.setPromptAssistanceBusy(false);
      }
    }
  }

  private isCurrentPromptAssistance(requestToken: number, controller: AbortController): boolean {
    return !this.isDestroyed
      && this.promptAssistanceRequestToken === requestToken
      && this.promptAssistanceController === controller;
  }

  private startCaptionGeneration(imagePrompt: string): void {
    const getPublicationContext = this.config.getPublicationContext;

    this.abortCaptionGeneration();
    this.ui.prepareGeneratedCaption();
    if (getPublicationContext === undefined) {
      this.ui.failGeneratedCaption('Описание недоступно — введите подпись вручную.');

      return;
    }

    this.isCaptionRequestRunning = true;
    const requestToken = ++this.captionRequestToken;
    const controller = new AbortController();

    this.captionController = controller;
    void this.runCaptionGeneration(imagePrompt, getPublicationContext, controller, requestToken);
  }

  private async runCaptionGeneration(
    imagePrompt: string,
    getPublicationContext: () => Promise<AiImagePublicationContext>,
    controller: AbortController,
    requestToken: number,
  ): Promise<void> {
    try {
      const publication = await getPublicationContext();

      if (!this.isCurrentCaptionRequest(requestToken, controller)) {
        return;
      }
      this.assertPublicationHasText(publication, 'В публикации нет текста для подготовки описания.');
      const caption = await this.client.generateCaption({
        action: 'caption',
        actionId: globalThis.crypto.randomUUID(),
        blockId: this.blockId,
        draft: imagePrompt,
        publication,
      }, controller.signal);

      if (this.isCurrentCaptionRequest(requestToken, controller)) {
        this.ui.completeGeneratedCaption(caption);
      }
    } catch (error: unknown) {
      if (this.isCurrentCaptionRequest(requestToken, controller) && !this.isAbortError(error)) {
        this.ui.failGeneratedCaption(`${this.errorMessage(error, 'Не удалось подготовить описание изображения.')} Можно ввести подпись вручную.`);
      }
    } finally {
      if (this.isCurrentCaptionRequest(requestToken, controller)) {
        this.isCaptionRequestRunning = false;
        this.captionController = null;
      }
    }
  }

  private isCurrentCaptionRequest(requestToken: number, controller: AbortController): boolean {
    return !this.isDestroyed
      && this.captionRequestToken === requestToken
      && this.captionController === controller;
  }

  private generate(prompt: string, generateCaption: boolean, aspectRatio: AiImageAspectRatio): void {
    const normalizedPrompt = prompt.trim();

    if (normalizedPrompt === '') {
      this.ui.showGenerationError('Введите промпт для генерации изображения.');

      return;
    }
    if (this.isGenerationRequestRunning || this.sessionId === null) {
      return;
    }

    this.ui.showGenerationError('');
    this.isGenerationRequestRunning = true;
    this.generationActionId ??= globalThis.crypto.randomUUID();
    const actionId = this.generationActionId;
    const controller = this.replacePollController();

    this.ui.setGenerationBusy(true);
    this.ui.showGenerationStatus('queued', 'generation_submitting');
    if (generateCaption) {
      this.startCaptionGeneration(normalizedPrompt);
    } else {
      this.abortCaptionGeneration();
      this.ui.resetGeneratedCaption();
    }
    void this.runGeneration(normalizedPrompt, aspectRatio, actionId, controller);
  }

  private async runGeneration(
    prompt: string,
    aspectRatio: AiImageAspectRatio,
    actionId: string,
    controller: AbortController,
  ): Promise<void> {
    if (this.sessionId === null) {
      return;
    }
    const sessionId = this.sessionId;

    try {
      const acknowledged = await this.client.generate({
        actionId,
        aspectRatio,
        blockId: this.blockId,
        prompt,
        sessionId,
      }, controller.signal);

      this.generationActionId = null;
      this.applySession(acknowledged);
      const result = acknowledged.status === 'ready'
        ? acknowledged
        : await this.client.poll({
            blockId: this.blockId,
            onStatus: session => this.applySession(session),
            sessionId,
            signal: controller.signal,
          });

      this.applySession(result);
    } catch (error: unknown) {
      this.handleOperationError(error, 'Не удалось сгенерировать изображение.', () => {
        this.generationActionId = null;
      });
    } finally {
      this.finishGenerationRequest(controller);
    }
  }

  private refine(prompt: string): void {
    const normalizedPrompt = prompt.trim();

    if (normalizedPrompt === '') {
      this.ui.showGenerationError('Опишите, как нужно доработать изображение.');

      return;
    }
    if (this.isGenerationRequestRunning || this.sessionId === null || this.selectedCandidateId === null) {
      return;
    }

    this.ui.showGenerationError('');
    this.isGenerationRequestRunning = true;
    this.refinementActionId ??= globalThis.crypto.randomUUID();
    const actionId = this.refinementActionId;
    const candidateId = this.selectedCandidateId;
    const controller = this.replacePollController();

    this.ui.setGenerationBusy(true);
    this.ui.showGenerationStatus('queued', 'refinement_submitting');
    void this.runRefinement(normalizedPrompt, candidateId, actionId, controller);
  }

  private async runRefinement(
    prompt: string,
    candidateId: string,
    actionId: string,
    controller: AbortController,
  ): Promise<void> {
    if (this.sessionId === null) {
      return;
    }
    const sessionId = this.sessionId;

    try {
      const acknowledged = await this.client.refine({
        actionId,
        blockId: this.blockId,
        candidateId,
        prompt,
        sessionId,
      }, controller.signal);

      this.refinementActionId = null;
      this.applySession(acknowledged);
      const result = acknowledged.status === 'ready'
        ? acknowledged
        : await this.client.poll({
            blockId: this.blockId,
            onStatus: session => this.applySession(session),
            sessionId,
            signal: controller.signal,
          });

      this.applySession(result);
      this.ui.clearRefinementPrompt();
    } catch (error: unknown) {
      this.handleOperationError(error, 'Не удалось доработать изображение.', () => {
        this.refinementActionId = null;
      });
    } finally {
      this.finishGenerationRequest(controller);
    }
  }

  private finalizeSelectedCandidate(): void {
    if (
      this.isGenerationRequestRunning
      || this.isCaptionRequestRunning
      || this.sessionId === null
      || this.selectedCandidateId === null
    ) {
      return;
    }

    this.ui.showGenerationError('');
    this.isGenerationRequestRunning = true;
    this.finalizationActionId ??= globalThis.crypto.randomUUID();
    const actionId = this.finalizationActionId;
    const candidateId = this.selectedCandidateId;
    const metadata = this.ui.getImageMetadata();
    const controller = this.replacePollController();

    this.ui.setGenerationBusy(true);
    this.ui.showGenerationStatus('finalizing', 'finalization_submitting');
    void this.runFinalization(candidateId, actionId, controller, metadata);
  }

  private async runFinalization(
    candidateId: string,
    actionId: string,
    controller: AbortController,
    metadata: AiImageEditorialMetadata,
  ): Promise<void> {
    if (this.sessionId === null) {
      return;
    }
    const sessionId = this.sessionId;

    try {
      const acknowledged = await this.client.finalize({
        actionId,
        blockId: this.blockId,
        candidateId,
        sessionId,
      }, controller.signal);

      this.finalizationActionId = null;
      this.applySession(acknowledged);
      const result = acknowledged.status === 'completed'
        ? acknowledged
        : await this.client.poll({
            blockId: this.blockId,
            onStatus: session => this.applySession(session),
            sessionId,
            signal: controller.signal,
          });

      if (result.error !== undefined) {
        throw new AiImageClientError(result.error.code, result.error.message, 0);
      }

      if (result.image === undefined || !this.isStandardImageData(result.image)) {
        throw new AiImageClientError('invalid_final_image', 'Сервер вернул некорректные данные изображения.', 0);
      }

      const item = this.mapImageToGalleryItem(result.image, metadata);

      this.resetSession();
      this.ui.close();
      this.onFinalized(item);
      this.onChange();
    } catch (error: unknown) {
      this.handleOperationError(error, 'Не удалось сохранить изображение.', () => {
        this.finalizationActionId = null;
      });
    } finally {
      this.finishGenerationRequest(controller);
    }
  }

  private applySession(session: AiImageSession): void {
    this.ui.showGenerationStatus(session.status, session.progress);
    if (session.status === 'ready' && session.candidates !== undefined) {
      session.candidates.forEach(candidate => this.candidates.set(candidate.id, candidate));
      if (session.selectedCandidateId === undefined) {
        this.ui.showCandidates(session.candidates);
      } else {
        this.applyRefinementCandidate(session.selectedCandidateId);
      }
    }
    if (session.error !== undefined) {
      this.ui.showGenerationError(session.error.message);
    }
  }

  private selectCandidate(candidateId: string): void {
    const candidate = this.candidates.get(candidateId);

    if (candidate === undefined) {
      return;
    }
    const historyIndex = this.history.findIndex(item => item.id === candidate.id);

    if (historyIndex < 0 && candidate.parentId === null) {
      this.history = [candidate];
    } else if (historyIndex < 0) {
      this.history.push(candidate);
    }
    this.selectedCandidateId = candidate.id;
    this.ui.showSelectedCandidate(candidate, this.history);
  }

  private applyRefinementCandidate(candidateId: string): void {
    const candidate = this.candidates.get(candidateId);

    if (candidate === undefined) {
      return;
    }
    const existingIndex = this.history.findIndex(item => item.id === candidate.id);

    if (existingIndex < 0) {
      const parentIndex = this.history.findIndex(item => item.id === candidate.parentId);

      this.history = parentIndex >= 0
        ? [...this.history.slice(0, parentIndex + 1), candidate]
        : [candidate];
    }
    this.selectedCandidateId = candidate.id;
    this.ui.showSelectedCandidate(candidate, this.history);
  }

  private replacePollController(): AbortController {
    this.pollController?.abort();
    this.pollController = new AbortController();

    return this.pollController;
  }

  private finishGenerationRequest(controller: AbortController): void {
    if (this.pollController === controller) {
      this.isGenerationRequestRunning = false;
      this.ui.setGenerationBusy(false);
    }
  }

  private handleOperationError(error: unknown, fallback: string, resetActionId: () => void): void {
    if (this.isAbortError(error)) {
      return;
    }
    if (error instanceof AiImageClientError && error.status > 0) {
      resetActionId();
    }
    this.ui.showGenerationError(this.errorMessage(error, fallback));
  }

  private isStandardImageData(data: Record<string, unknown>): data is StandardImageData & Record<string, unknown> {
    const file = data.file;

    return typeof file === 'object'
      && file !== null
      && 'url' in file
      && typeof file.url === 'string'
      && file.url !== ''
      && typeof data.caption === 'string'
      && typeof data.link === 'string'
      && typeof data.alt === 'string';
  }

  private mapImageToGalleryItem(image: StandardImageData, metadata: AiImageEditorialMetadata): GalleryItemData {
    return {
      caption: metadata.caption,
      height: image.file.height,
      imagorPath: image.file.imagor_path,
      media_id: image.file.media_id,
      source: metadata.source,
      sourceLink: metadata.sourceLink,
      url: image.file.url,
      width: image.file.width,
      isAiGenerated: true,
    };
  }

  private assertPublicationHasText(publication: AiImagePublicationContext, message: string): void {
    if (![publication.title, publication.subtitle, publication.announce, publication.body]
      .some(value => value.trim() !== '')) {
      throw new Error(message);
    }
  }

  private isAbortError(error: unknown): boolean {
    return error instanceof DOMException && error.name === 'AbortError';
  }

  private errorMessage(error: unknown, fallback: string): string {
    return error instanceof Error ? error.message : fallback;
  }

  private availableAspectRatios(configured?: AiImageAspectRatio[]): AiImageAspectRatio[] {
    const ratios = configured?.filter(ratio => this.isAspectRatio(ratio)) ?? [];

    return ratios.length > 0 ? ratios : ['16:9', '3:2', '1:1'];
  }

  private defaultAspectRatio(configured?: AiImageAspectRatio): AiImageAspectRatio {
    return this.isAspectRatio(configured) ? configured : '3:2';
  }

  private isAspectRatio(value: unknown): value is AiImageAspectRatio {
    return value === '16:9' || value === '3:2' || value === '1:1';
  }
}
