import type { AiImageAspectRatio, AiImageCandidate } from './ai-image-client';
import { make } from './utils/dom';

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
  public readonly nodes: AiGenerationNodes;

  private readonly promptAssistanceEnabled: boolean;
  private readonly onSelectCandidate: (candidateId: string) => void;
  private readonly onSelectHistory: (candidateId: string) => void;
  private isGenerationBusy = false;
  private isPromptAssistanceBusy = false;
  private isGeneratedCaptionBusy = false;

  constructor({
    onAssistPrompt,
    onCancel,
    onFinalize,
    onGenerate,
    onRefine,
    onSelectCandidate,
    onSelectHistory,
    promptAssistanceEnabled,
    promptId,
    aspectRatio,
    aspectRatios,
  }: AiGenerationUiParams) {
    this.promptAssistanceEnabled = promptAssistanceEnabled;
    this.onSelectCandidate = onSelectCandidate;
    this.onSelectHistory = onSelectHistory;

    const wrapper = make('div', ['ai-image-tool__generator']);
    const promptSection = make('div', ['ai-image-tool__prompt-section']);
    const promptLabel = make('label', ['ai-image-tool__label']) as HTMLLabelElement;
    const prompt = make('textarea', ['ai-image-tool__prompt']) as HTMLTextAreaElement;
    const generateCaptionOption = make('label', ['ai-image-tool__caption-option']) as HTMLLabelElement;
    const generateCaptionCheckbox = make('input', ['ai-image-tool__caption-checkbox']) as HTMLInputElement;
    const generateCaptionText = make('span');
    const aspectRatioOptions = make('div', ['ai-image-tool__aspect-ratios']);
    const promptActions = make('div', ['ai-image-tool__prompt-actions']);
    const generateButton = make('button', ['ai-image-tool__action'], { type: 'button' }) as HTMLButtonElement;
    const generateFromPublicationButton = make('button', ['ai-image-tool__action', 'ai-image-tool__action--secondary'], { type: 'button' }) as HTMLButtonElement;
    const improvePromptButton = make('button', ['ai-image-tool__action', 'ai-image-tool__action--secondary'], { type: 'button' }) as HTMLButtonElement;
    const cancelButton = make('button', ['ai-image-tool__action', 'ai-image-tool__action--secondary'], { type: 'button' }) as HTMLButtonElement;
    const generationStatus = make('div', ['ai-image-tool__status']);
    const generationError = make('div', ['ai-image-tool__error']);
    const candidates = make('div', ['ai-image-tool__candidates']);
    const selection = make('div', ['ai-image-tool__selection']);
    const selectedPreview = make('img', ['ai-image-tool__selected-preview']) as HTMLImageElement;
    const generatedCaptionSection = make('div', ['ai-image-tool__generated-caption']);
    const generatedCaptionLabel = make('label', ['ai-image-tool__label']) as HTMLLabelElement;
    const generatedCaption = make('textarea', ['ai-image-tool__prompt']) as HTMLTextAreaElement;
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
    generateButton.textContent = 'Отправить';
    generateFromPublicationButton.textContent = 'Сгенерировать на основе публикации';
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
    aspectRatioOptions.setAttribute('role', 'radiogroup');
    aspectRatioOptions.setAttribute('aria-label', 'Соотношение сторон');
    this.createAspectRatioOptions(aspectRatioOptions, aspectRatios, aspectRatio, promptId);
    promptActions.append(generateButton, generateFromPublicationButton, improvePromptButton, cancelButton);
    promptSection.append(promptLabel, prompt, generateCaptionOption, aspectRatioOptions, promptActions);

    selectedPreview.alt = 'Выбранный вариант';
    selectedPreview.dataset.selectedPreview = '';
    generatedCaption.id = `${promptId}-caption`;
    generatedCaption.rows = 2;
    generatedCaption.dataset.generatedCaption = '';
    generatedCaptionLabel.htmlFor = generatedCaption.id;
    generatedCaptionLabel.textContent = 'Подпись к изображению';
    generatedCaptionStatus.setAttribute('aria-live', 'polite');
    generatedCaptionSection.hidden = true;
    generatedCaptionSection.append(generatedCaptionLabel, generatedCaption, generatedCaptionStatus);
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
      generatedCaptionSection,
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
    wrapper.append(promptSection, generationStatus, generationError, candidates, selection);

    generateButton.addEventListener('click', () => onGenerate(prompt.value, generateCaptionCheckbox.checked, this.selectedAspectRatio()));
    generateFromPublicationButton.addEventListener('click', () => onAssistPrompt('generate', prompt.value));
    improvePromptButton.addEventListener('click', () => onAssistPrompt('improve', prompt.value));
    cancelButton.addEventListener('click', onCancel);
    refineButton.addEventListener('click', () => onRefine(refinementPrompt.value));
    finalizeButton.addEventListener('click', onFinalize);
    prompt.addEventListener('input', () => this.updatePromptControls());

    this.nodes = {
      wrapper,
      promptSection,
      prompt,
      generateButton,
      generateFromPublicationButton,
      improvePromptButton,
      generateCaptionCheckbox,
      aspectRatioOptions,
      generationStatus,
      generationError,
      candidates,
      selection,
      selectedPreview,
      generatedCaptionSection,
      generatedCaption,
      generatedCaptionStatus,
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
    this.updatePromptControls();
    this.updateSelectionControls();
  }

  public prepareGeneratedCaption(): void {
    this.isGeneratedCaptionBusy = true;
    this.nodes.generatedCaptionSection.hidden = false;
    this.nodes.generatedCaption.value = '';
    this.nodes.generatedCaptionStatus.textContent = 'Генерируем описание...';
    delete this.nodes.generatedCaptionStatus.dataset.error;
    this.updateSelectionControls();
  }

  public completeGeneratedCaption(caption: string): void {
    this.isGeneratedCaptionBusy = false;
    this.nodes.generatedCaptionSection.hidden = false;
    this.nodes.generatedCaption.value = caption;
    this.nodes.generatedCaptionStatus.textContent = 'Описание готово — можно отредактировать.';
    delete this.nodes.generatedCaptionStatus.dataset.error;
    this.updateSelectionControls();
  }

  public failGeneratedCaption(message: string): void {
    this.isGeneratedCaptionBusy = false;
    this.nodes.generatedCaptionSection.hidden = false;
    this.nodes.generatedCaptionStatus.textContent = message;
    this.nodes.generatedCaptionStatus.dataset.error = '';
    this.updateSelectionControls();
  }

  public resetGeneratedCaption(): void {
    this.isGeneratedCaptionBusy = false;
    this.nodes.generatedCaptionSection.hidden = true;
    this.nodes.generatedCaption.value = '';
    this.nodes.generatedCaptionStatus.textContent = '';
    delete this.nodes.generatedCaptionStatus.dataset.error;
    this.updateSelectionControls();
  }

  public getGeneratedCaption(): string {
    return this.nodes.generatedCaption.value;
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

    this.nodes.generationStatus.textContent = message;
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
    this.nodes.generateButton.disabled = isBusy;
    this.nodes.generateFromPublicationButton.disabled = isBusy || !this.promptAssistanceEnabled;
    this.nodes.generateCaptionCheckbox.disabled = isBusy || !this.promptAssistanceEnabled;
    this.nodes.aspectRatioOptions.querySelectorAll<HTMLInputElement>('input[type="radio"]')
      .forEach(option => {
        option.disabled = isBusy;
      });
    this.nodes.improvePromptButton.disabled = isBusy
      || !this.promptAssistanceEnabled
      || this.nodes.prompt.value.trim() === '';
  }

  private updateSelectionControls(): void {
    this.nodes.refinementPrompt.disabled = this.isGenerationBusy;
    this.nodes.refineButton.disabled = this.isGenerationBusy;
    this.nodes.finalizeButton.disabled = this.isGenerationBusy || this.isGeneratedCaptionBusy;
    this.nodes.generatedCaption.disabled = this.isGenerationBusy || this.isGeneratedCaptionBusy;
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
}
