import type {
  AiImageActiveSession,
  AiImageActiveSessions,
  AiImageAspectRatio,
  AiImageResolution,
  AiImageCandidate,
} from './ai-image-client';
import { make } from './utils/dom';

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
  onGenerate: (
    prompt: string,
    generateCaption: boolean,
    aspectRatio: AiImageAspectRatio,
    resolution: AiImageResolution | null,
  ) => void;
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
  public readonly nodes: AiGenerationNodes;

  private readonly promptAssistanceEnabled: boolean;
  private readonly defaultResolution: AiImageResolution | null;
  private readonly onAdoptSession: (sessionId: string) => void;
  private readonly onCloseSession: (sessionId: string) => void;
  private readonly onSelectCandidate: (candidateId: string) => void;
  private readonly onSelectHistory: (candidateId: string) => void;
  private isGenerationBusy = false;
  private operationStartedAt: number | null = null;
  private operationElapsedSeconds = 0;
  private lastOperationSeconds: number | null = null;
  private operationTicker: ReturnType<typeof setInterval> | null = null;
  private lastStatusMessage = '';
  private isPromptAssistanceBusy = false;
  private isGeneratedCaptionBusy = false;
  private hasFreeSessionSlot = true;

  constructor({
    onAdoptSession,
    onAssistPrompt,
    onCancel,
    onCloseSession,
    onFinalize,
    onGenerate,
    onRefine,
    onSelectCandidate,
    onSelectHistory,
    promptAssistanceEnabled,
    promptId,
    aspectRatio,
    aspectRatios,
    resolution,
    resolutions,
    metadataPlaceholders,
    source,
  }: AiGenerationUiParams) {
    this.promptAssistanceEnabled = promptAssistanceEnabled;
    this.defaultResolution = resolution;
    this.onAdoptSession = onAdoptSession;
    this.onCloseSession = onCloseSession;
    this.onSelectCandidate = onSelectCandidate;
    this.onSelectHistory = onSelectHistory;

    const wrapper = make('div', ['ai-image-tool__generator']);
    const sessionsSection = make('div', ['ai-image-tool__sessions']);
    const sessionsTitle = make('div', ['ai-image-tool__sessions-title']);
    const sessionsList = make('div', ['ai-image-tool__sessions-list']);
    const promptSection = make('div', ['ai-image-tool__prompt-section']);
    const promptLabel = make('label', ['ai-image-tool__label']) as HTMLLabelElement;
    const prompt = make('textarea', ['ai-image-tool__prompt']) as HTMLTextAreaElement;
    const generateCaptionOption = make('label', ['ai-image-tool__caption-option']) as HTMLLabelElement;
    const generateCaptionCheckbox = make('input', ['ai-image-tool__caption-checkbox']) as HTMLInputElement;
    const generateCaptionText = make('span');
    const promptAssistance = make('div', ['ai-image-tool__prompt-assistance']);
    const aspectRatioField = make('div', ['ai-image-tool__aspect-ratio-field']);
    const aspectRatioLabel = make('span', ['ai-image-tool__aspect-ratio-label']);
    const aspectRatioOptions = make('div', ['ai-image-tool__aspect-ratios']);
    const hdResolutionOption = make('label', ['ai-image-tool__resolution-option']) as HTMLLabelElement;
    const hdResolutionCheckbox = make('input', ['ai-image-tool__resolution-checkbox']) as HTMLInputElement;
    const hdResolutionText = make('span');
    const promptActions = make('div', ['ai-image-tool__prompt-actions']);
    const generateButton = make('button', ['ai-image-tool__action', 'ai-image-tool__action--generate'], { type: 'button' }) as HTMLButtonElement;
    const generateFromPublicationButton = make('button', ['ai-image-tool__action', 'ai-image-tool__action--secondary'], { type: 'button' }) as HTMLButtonElement;
    const improvePromptButton = make('button', ['ai-image-tool__action', 'ai-image-tool__action--secondary'], { type: 'button' }) as HTMLButtonElement;
    const cancelButton = make('button', ['ai-image-tool__action', 'ai-image-tool__action--secondary'], { type: 'button' }) as HTMLButtonElement;
    const generationStatus = make('div', ['ai-image-tool__status']);
    const generationError = make('div', ['ai-image-tool__error']);
    const candidates = make('div', ['ai-image-tool__candidates']);
    const selection = make('div', ['ai-image-tool__selection']);
    const selectedPreview = make('img', ['ai-image-tool__selected-preview']) as HTMLImageElement;
    const metadataSection = make('div', ['ai-image-tool__metadata']);
    const generatedCaption = make('textarea', ['ai-image-tool__metadata-input', 'ai-image-tool__metadata-caption']) as HTMLTextAreaElement;
    const sourceName = make('input', ['ai-image-tool__metadata-input']) as HTMLInputElement;
    const sourceUrl = make('input', ['ai-image-tool__metadata-input']) as HTMLInputElement;
    const generatedCaptionStatus = make('div', ['ai-image-tool__caption-status']);
    const refinementLabel = make('label', ['ai-image-tool__label']) as HTMLLabelElement;
    const refinementPrompt = make('textarea', ['ai-image-tool__prompt']) as HTMLTextAreaElement;
    const refineButton = make('button', ['ai-image-tool__action'], { type: 'button' }) as HTMLButtonElement;
    const finalizeButton = make('button', ['ai-image-tool__action'], { type: 'button' }) as HTMLButtonElement;
    const history = make('div', ['ai-image-tool__history']);
    const historyStatus = make('div', ['ai-image-tool__history-status']);

    prompt.id = promptId;
    prompt.rows = 3;
    prompt.placeholder = 'Опишите изображение, которое нужно создать';
    promptLabel.htmlFor = promptId;
    promptLabel.textContent = 'Введите промпт';
    generateButton.textContent = 'Генерировать';
    generateFromPublicationButton.textContent = 'Промпт по публикации';
    improvePromptButton.textContent = 'Улучшить промпт';
    cancelButton.textContent = 'Отменить';
    generateFromPublicationButton.hidden = !promptAssistanceEnabled;
    improvePromptButton.hidden = !promptAssistanceEnabled;
    generateCaptionCheckbox.type = 'checkbox';
    generateCaptionCheckbox.id = `${promptId}-generate-caption`;
    generateCaptionText.textContent = 'Также сгенерировать описание';
    generateCaptionOption.htmlFor = generateCaptionCheckbox.id;
    generateCaptionOption.hidden = !promptAssistanceEnabled;
    generateCaptionOption.append(generateCaptionCheckbox, generateCaptionText);
    promptAssistance.append(generateCaptionOption, improvePromptButton);
    aspectRatioOptions.setAttribute('role', 'radiogroup');
    aspectRatioOptions.setAttribute('aria-label', 'Соотношение сторон');
    this.createAspectRatioOptions(aspectRatioOptions, aspectRatios, aspectRatio, promptId);
    aspectRatioLabel.textContent = 'Соотношение сторон:';
    hdResolutionCheckbox.type = 'checkbox';
    hdResolutionCheckbox.id = `${promptId}-hd-resolution`;
    hdResolutionCheckbox.checked = resolution === '2k';
    hdResolutionText.textContent = 'HD 2k';
    hdResolutionOption.htmlFor = hdResolutionCheckbox.id;
    hdResolutionOption.title = 'Варианты в 2k: дольше и дороже, зато детальнее';
    // Тумблер имеет смысл, только когда хост принимает оба разрешения.
    hdResolutionOption.hidden = !(resolutions.includes('1k') && resolutions.includes('2k'));
    hdResolutionOption.append(hdResolutionCheckbox, hdResolutionText);
    aspectRatioField.append(aspectRatioLabel, aspectRatioOptions, hdResolutionOption);
    promptActions.append(generateFromPublicationButton, cancelButton, generateButton);
    promptSection.append(promptLabel, prompt, promptAssistance, aspectRatioField, promptActions);

    selectedPreview.alt = 'Выбранный вариант';
    selectedPreview.dataset.selectedPreview = '';
    generatedCaption.id = `${promptId}-caption`;
    generatedCaption.rows = 2;
    generatedCaption.dataset.generatedCaption = '';
    generatedCaption.dataset.aiImageMetadata = '';
    generatedCaption.placeholder = metadataPlaceholders.caption;
    generatedCaption.setAttribute('aria-label', metadataPlaceholders.caption);
    sourceName.type = 'text';
    sourceName.dataset.aiImageMetadata = '';
    sourceName.placeholder = metadataPlaceholders.source;
    sourceName.setAttribute('aria-label', metadataPlaceholders.source);
    sourceName.defaultValue = source.name;
    sourceName.value = source.name;
    sourceUrl.type = 'url';
    sourceUrl.dataset.aiImageMetadata = '';
    sourceUrl.placeholder = metadataPlaceholders.sourceLink;
    sourceUrl.setAttribute('aria-label', metadataPlaceholders.sourceLink);
    sourceUrl.defaultValue = source.url;
    sourceUrl.value = source.url;
    generatedCaptionStatus.setAttribute('aria-live', 'polite');
    metadataSection.append(generatedCaption, sourceName, sourceUrl, generatedCaptionStatus);
    refinementPrompt.id = `${promptId}-refinement`;
    refinementPrompt.rows = 2;
    refinementPrompt.dataset.refinementPrompt = '';
    refinementLabel.htmlFor = refinementPrompt.id;
    refinementLabel.textContent = 'Как доработать изображение';
    refineButton.textContent = 'Доработать';
    finalizeButton.textContent = 'Использовать изображение';
    selection.hidden = true;
    selection.append(
      selectedPreview,
      metadataSection,
      refinementLabel,
      refinementPrompt,
      refineButton,
      finalizeButton,
      history,
      historyStatus,
    );

    generationStatus.setAttribute('aria-live', 'polite');
    generationError.setAttribute('aria-live', 'assertive');
    generationError.setAttribute('role', 'alert');
    generationError.hidden = true;
    historyStatus.setAttribute('aria-live', 'polite');
    candidates.hidden = true;
    wrapper.hidden = true;
    sessionsSection.hidden = true;
    sessionsSection.append(sessionsTitle, sessionsList);
    wrapper.append(sessionsSection, promptSection, generationStatus, generationError, candidates, selection);

    generateButton.addEventListener('click', () => onGenerate(
      prompt.value,
      generateCaptionCheckbox.checked,
      this.selectedAspectRatio(),
      this.selectedResolution(),
    ));
    generateFromPublicationButton.addEventListener('click', () => onAssistPrompt('generate', prompt.value));
    improvePromptButton.addEventListener('click', () => onAssistPrompt('improve', prompt.value));
    cancelButton.addEventListener('click', onCancel);
    refineButton.addEventListener('click', () => onRefine(refinementPrompt.value));
    finalizeButton.addEventListener('click', onFinalize);
    prompt.addEventListener('input', () => this.updatePromptControls());

    this.nodes = {
      wrapper,
      sessionsSection,
      sessionsTitle,
      sessionsList,
      promptSection,
      prompt,
      generateButton,
      generateFromPublicationButton,
      improvePromptButton,
      generateCaptionCheckbox,
      aspectRatioOptions,
      hdResolutionOption,
      hdResolutionCheckbox,
      generationStatus,
      generationError,
      candidates,
      selection,
      selectedPreview,
      metadataSection,
      generatedCaption,
      generatedCaptionStatus,
      sourceName,
      sourceUrl,
      refinementPrompt,
      refineButton,
      finalizeButton,
      cancelButton,
      history,
      historyStatus,
    };

    this.updatePromptControls();
  }

  public open(): void {
    this.nodes.wrapper.hidden = false;
    this.nodes.prompt.focus();
  }

  public close(): void {
    this.nodes.wrapper.hidden = true;
    this.reset();
  }

  /**
   * Show the editor's unfinished sessions above the prompt: each one can be
   * continued here, opened in its own publication, or closed to free a slot.
   */
  public showActiveSessions(data: AiImageActiveSessions): void {
    const { limit, sessions } = data;

    this.hasFreeSessionSlot = sessions.length < limit;
    this.nodes.sessionsList.replaceChildren();

    if (sessions.length === 0) {
      this.nodes.sessionsSection.hidden = true;
      this.updatePromptControls();

      return;
    }

    this.nodes.sessionsTitle.textContent = this.hasFreeSessionSlot
      ? `Незакрытые генерации: ${sessions.length} из ${limit}`
      : `Все слоты заняты (${sessions.length} из ${limit}) — продолжите одну или закройте лишние`;

    for (const session of sessions) {
      this.nodes.sessionsList.appendChild(this.buildSessionCard(session));
    }

    this.nodes.sessionsSection.hidden = false;
    this.updatePromptControls();
  }

  public hideActiveSessions(): void {
    this.hasFreeSessionSlot = true;
    this.nodes.sessionsSection.hidden = true;
    this.nodes.sessionsList.replaceChildren();
    this.updatePromptControls();
  }

  private buildSessionCard(session: AiImageActiveSession): HTMLElement {
    const card = make('div', ['ai-image-tool__session'], { 'data-session-id': session.sessionId });
    const preview = make('div', ['ai-image-tool__session-preview']);

    if (session.previewUrl !== null) {
      const image = make('img', ['ai-image-tool__session-thumb'], {
        alt: '',
        loading: 'lazy',
        src: session.previewUrl,
      });

      preview.appendChild(image);
    }

    const body = make('div', ['ai-image-tool__session-body']);
    const title = session.owner.url === null
      ? make('span', ['ai-image-tool__session-title'])
      : make('a', ['ai-image-tool__session-title'], {
          href: session.owner.url,
          rel: 'noopener',
          target: '_blank',
        });

    title.textContent = session.owner.title;

    const meta = make('div', ['ai-image-tool__session-meta']);

    meta.textContent = [
      session.isCurrentBlock ? 'этот блок' : null,
      this.sessionStatusLabel(session.status),
      session.candidateCount > 0 ? `${session.candidateCount} вар.` : null,
      this.sessionTimeLabel(session.createdAt),
    ].filter((part): part is string => part !== null).join(' · ');

    body.append(title, meta);

    if (session.prompt !== null) {
      const prompt = make('div', ['ai-image-tool__session-prompt']);

      prompt.textContent = session.prompt;
      body.appendChild(prompt);
    }

    const actions = make('div', ['ai-image-tool__session-actions']);
    const adoptButton = make('button', ['ai-image-tool__action', 'ai-image-tool__action--secondary'], {
      type: 'button',
    }) as HTMLButtonElement;

    adoptButton.textContent = session.isCurrentBlock ? 'Продолжить' : 'Продолжить здесь';
    adoptButton.addEventListener('click', () => this.onAdoptSession(session.sessionId));

    const closeButton = make('button', ['ai-image-tool__session-close'], {
      title: 'Закрыть генерацию и освободить слот',
      type: 'button',
    }) as HTMLButtonElement;

    closeButton.setAttribute('aria-label', 'Закрыть генерацию');
    closeButton.textContent = '×';
    closeButton.addEventListener('click', () => this.onCloseSession(session.sessionId));

    actions.append(adoptButton, closeButton);
    card.append(preview, body, actions);

    return card;
  }

  private sessionStatusLabel(status: string): string {
    return {
      failed: 'ошибка',
      finalizing: 'вставляется',
      generating: 'генерируется',
      queued: 'в очереди',
      ready: 'варианты готовы',
      refining: 'дорабатывается',
    }[status] ?? status;
  }

  private sessionTimeLabel(createdAt: string | null): string | null {
    if (createdAt === null) {
      return null;
    }

    const startedAt = new Date(createdAt);

    if (Number.isNaN(startedAt.getTime())) {
      return null;
    }

    return startedAt.toLocaleString('ru-RU', {
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      month: '2-digit',
    });
  }

  public setPromptValue(prompt: string): void {
    this.nodes.prompt.value = prompt;
    this.updatePromptControls();
  }

  public showPromptAssistanceStatus(message: string): void {
    this.nodes.generationStatus.textContent = message;
  }

  public setPromptAssistanceBusy(isBusy: boolean): void {
    this.isPromptAssistanceBusy = isBusy;
    this.updatePromptControls();
  }

  public setGenerationBusy(isBusy: boolean): void {
    this.isGenerationBusy = isBusy;

    if (isBusy) {
      this.startOperationTimer();
    } else {
      this.stopOperationTimer(true);
      this.renderGenerationStatus();
    }

    this.updatePromptControls();
    this.updateSelectionControls();
  }

  /** Генерация идёт десяток секунд: рядом с лоадером тикают секунды, в конце - итог. */
  private startOperationTimer(): void {
    if (this.operationTicker !== null) {
      return;
    }

    this.operationStartedAt = Date.now();
    this.operationElapsedSeconds = 0;
    this.lastOperationSeconds = null;
    this.operationTicker = setInterval(() => {
      if (this.operationStartedAt === null) {
        return;
      }

      this.operationElapsedSeconds = (Date.now() - this.operationStartedAt) / 1000;
      this.renderGenerationStatus();
    }, 1000);
  }

  public stopOperationTimer(keepResult: boolean): void {
    if (this.operationTicker !== null) {
      clearInterval(this.operationTicker);
      this.operationTicker = null;
    }

    if (keepResult && this.operationStartedAt !== null) {
      this.lastOperationSeconds = (Date.now() - this.operationStartedAt) / 1000;
    }

    this.operationStartedAt = null;
    this.operationElapsedSeconds = 0;
  }

  private formatSeconds(seconds: number): string {
    return `${seconds.toFixed(1).replace('.', ',')} с`;
  }

  private renderGenerationStatus(): void {
    const message = this.lastStatusMessage;

    if (message === '') {
      this.nodes.generationStatus.textContent = '';
      this.nodes.generationStatus.dataset.busy = 'false';

      return;
    }

    this.nodes.generationStatus.dataset.busy = String(this.operationStartedAt !== null);

    if (this.operationStartedAt !== null) {
      this.nodes.generationStatus.textContent = `${message} ${this.formatSeconds(this.operationElapsedSeconds)}`;

      return;
    }

    this.nodes.generationStatus.textContent = this.lastOperationSeconds === null
      ? message
      : `${message} (за ${this.formatSeconds(this.lastOperationSeconds)})`;
  }

  public prepareGeneratedCaption(): void {
    this.isGeneratedCaptionBusy = true;
    this.nodes.generatedCaption.value = '';
    this.nodes.generatedCaptionStatus.textContent = 'Генерируем описание...';
    delete this.nodes.generatedCaptionStatus.dataset.error;
    this.updateSelectionControls();
  }

  public completeGeneratedCaption(caption: string): void {
    this.isGeneratedCaptionBusy = false;
    this.nodes.generatedCaption.value = caption;
    this.nodes.generatedCaptionStatus.textContent = 'Описание готово — можно отредактировать.';
    delete this.nodes.generatedCaptionStatus.dataset.error;
    this.updateSelectionControls();
  }

  public failGeneratedCaption(message: string): void {
    this.isGeneratedCaptionBusy = false;
    this.nodes.generatedCaptionStatus.textContent = message;
    this.nodes.generatedCaptionStatus.dataset.error = '';
    this.updateSelectionControls();
  }

  public resetGeneratedCaption(): void {
    this.isGeneratedCaptionBusy = false;
    this.nodes.generatedCaption.value = '';
    this.nodes.sourceName.value = this.nodes.sourceName.defaultValue;
    this.nodes.sourceUrl.value = this.nodes.sourceUrl.defaultValue;
    this.nodes.generatedCaptionStatus.textContent = '';
    delete this.nodes.generatedCaptionStatus.dataset.error;
    this.updateSelectionControls();
  }

  public getImageMetadata(): AiImageEditorialMetadata {
    return {
      caption: this.nodes.generatedCaption.value,
      source: this.nodes.sourceName.value,
      sourceLink: this.nodes.sourceUrl.value,
    };
  }

  public showGenerationStatus(status: string, progress?: string): void {
    const messages: Record<string, string> = {
      finalization_queued: 'Сохранение поставлено в очередь...',
      finalization_submitting: 'Отправляем выбранное изображение на сохранение...',
      finalizing: 'Сохраняем изображение...',
      generation_processing: 'Нейросеть генерирует варианты...',
      generation_queued: 'Генерация поставлена в очередь...',
      generation_submitting: 'Отправляем запрос на генерацию...',
      generating: 'Нейросеть генерирует варианты...',
      media_copying: 'Копируем изображение из временного хранилища...',
      media_resizing: 'Ресайз изображения...',
      media_warming: 'Прогрев изображения...',
      queued: 'Запрос поставлен в очередь...',
      ready: 'Выберите вариант изображения, его можно будет доработать.',
      refinement_processing: 'Нейросеть дорабатывает изображение...',
      refinement_queued: 'Доработка поставлена в очередь...',
      refinement_submitting: 'Отправляем запрос на доработку...',
      refining: 'Нейросеть дорабатывает изображение...',
    };
    const messageKey = progress ?? status;
    const message = messages[messageKey] ?? '';

    this.lastStatusMessage = message;
    this.renderGenerationStatus();
    this.nodes.historyStatus.textContent = messageKey.startsWith('refinement_') ? message : '';
  }

  public showGenerationError(message: string): void {
    this.nodes.generationError.textContent = message;
    this.nodes.generationError.hidden = message === '';
  }

  public showCandidates(candidates: AiImageCandidate[]): void {
    this.nodes.candidates.replaceChildren();

    candidates.forEach((candidate, index) => {
      const button = make('button', ['ai-image-tool__candidate'], { type: 'button' }) as HTMLButtonElement;
      const image = make('img', ['ai-image-tool__candidate-image']) as HTMLImageElement;

      button.dataset.candidateId = candidate.id;
      button.setAttribute('aria-label', `Выбрать вариант ${index + 1}`);
      button.setAttribute('aria-pressed', 'false');
      button.addEventListener('click', () => this.selectCandidate(candidate.id));
      image.alt = `Вариант ${index + 1}`;
      image.src = candidate.previewUrl;
      button.appendChild(image);
      this.nodes.candidates.appendChild(button);
    });

    this.nodes.promptSection.hidden = true;
    this.nodes.candidates.hidden = false;
    this.showGenerationStatus('ready');
    this.nodes.candidates.querySelector<HTMLButtonElement>('[data-candidate-id]')?.focus();
  }

  public showSelectedCandidate(candidate: AiImageCandidate, history: AiImageCandidate[]): void {
    this.nodes.candidates.querySelectorAll<HTMLButtonElement>('[data-candidate-id]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.candidateId === candidate.id));
    });
    this.nodes.selectedPreview.src = candidate.previewUrl;
    this.nodes.selection.hidden = false;
    this.nodes.history.replaceChildren();

    history.forEach((item, index) => {
      const button = make('button', ['ai-image-tool__history-item'], { type: 'button' }) as HTMLButtonElement;

      button.dataset.historyCandidateId = item.id;
      button.textContent = `Версия ${index + 1}`;
      button.setAttribute('aria-current', item.id === candidate.id ? 'true' : 'false');
      button.addEventListener('click', () => this.selectHistory(item.id));
      this.nodes.history.appendChild(button);
    });
  }

  public clearRefinementPrompt(): void {
    this.nodes.refinementPrompt.value = '';
  }

  private selectCandidate(candidateId: string): void {
    this.onSelectCandidate(candidateId);
  }

  private selectHistory(candidateId: string): void {
    this.onSelectHistory(candidateId);
  }

  private reset(): void {
    this.nodes.promptSection.hidden = false;
    this.nodes.candidates.hidden = true;
    this.nodes.selection.hidden = true;
    this.nodes.candidates.replaceChildren();
    this.nodes.history.replaceChildren();
    this.nodes.prompt.value = '';
    this.nodes.refinementPrompt.value = '';
    this.lastStatusMessage = '';
    this.lastOperationSeconds = null;
    this.stopOperationTimer(false);
    this.nodes.generationStatus.textContent = '';
    this.showGenerationError('');
    this.resetGeneratedCaption();
    this.setGenerationBusy(false);
    this.setPromptAssistanceBusy(false);
  }

  private updatePromptControls(): void {
    const isBusy = this.isGenerationBusy || this.isPromptAssistanceBusy;

    this.nodes.wrapper.setAttribute('aria-busy', String(isBusy));
    this.nodes.prompt.disabled = isBusy;
    // Свободных слотов нет — новую генерацию не начать, пока редактор сам не
    // разберётся со списком выше.
    this.nodes.generateButton.disabled = isBusy || !this.hasFreeSessionSlot;
    this.nodes.generateFromPublicationButton.disabled = isBusy || !this.promptAssistanceEnabled;
    this.nodes.generateCaptionCheckbox.disabled = isBusy || !this.promptAssistanceEnabled;
    this.nodes.aspectRatioOptions.querySelectorAll<HTMLInputElement>('input[type="radio"]')
      .forEach(option => {
        option.disabled = isBusy;
      });
    this.nodes.hdResolutionCheckbox.disabled = isBusy;
    this.nodes.improvePromptButton.disabled = isBusy
      || !this.promptAssistanceEnabled
      || this.nodes.prompt.value.trim() === '';
  }

  private updateSelectionControls(): void {
    this.nodes.refinementPrompt.disabled = this.isGenerationBusy;
    this.nodes.refineButton.disabled = this.isGenerationBusy;
    this.nodes.finalizeButton.disabled = this.isGenerationBusy || this.isGeneratedCaptionBusy;
    this.nodes.generatedCaption.disabled = this.isGenerationBusy || this.isGeneratedCaptionBusy;
    this.nodes.sourceName.disabled = this.isGenerationBusy;
    this.nodes.sourceUrl.disabled = this.isGenerationBusy;
  }

  private createAspectRatioOptions(
    wrapper: HTMLElement,
    aspectRatios: AiImageAspectRatio[],
    selectedAspectRatio: AiImageAspectRatio,
    promptId: string,
  ): void {
    const selectedRatio = aspectRatios.includes(selectedAspectRatio) ? selectedAspectRatio : (aspectRatios[0] ?? '3:2');

    aspectRatios.forEach((ratio) => {
      const label = make('label', ['ai-image-tool__aspect-ratio-option']) as HTMLLabelElement;
      const input = make('input', ['ai-image-tool__aspect-ratio-input']) as HTMLInputElement;
      const text = make('span');

      input.type = 'radio';
      input.name = `${promptId}-aspect-ratio`;
      input.value = ratio;
      input.checked = ratio === selectedRatio;
      text.textContent = ratio;
      label.append(input, text);
      wrapper.appendChild(label);
    });
  }

  private selectedAspectRatio(): AiImageAspectRatio {
    const selected = this.nodes.aspectRatioOptions.querySelector<HTMLInputElement>('input[type="radio"]:checked')?.value;

    return selected === '16:9' || selected === '1:1' ? selected : '3:2';
  }

  private selectedResolution(): AiImageResolution | null {
    if (this.nodes.hdResolutionOption.hidden) {
      return this.defaultResolution;
    }

    return this.nodes.hdResolutionCheckbox.checked ? '2k' : '1k';
  }
}
