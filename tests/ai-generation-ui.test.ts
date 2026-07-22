// @vitest-environment jsdom

import { afterEach, describe, expect, it, vi } from 'vitest';

import AiGenerationUi from '../src/ai-generation-ui';

afterEach(() => {
  document.body.replaceChildren();
});

describe('Gallery AI generation UI', () => {
  const makeUi = (overrides: Partial<ConstructorParameters<typeof AiGenerationUi>[0]> = {}): AiGenerationUi => new AiGenerationUi({
    aspectRatio: '3:2',
    aspectRatios: ['16:9', '3:2', '1:1'],
    onAssistPrompt: vi.fn(),
    onCancel: vi.fn(),
    onFinalize: vi.fn(),
    onGenerate: vi.fn(),
    onRefine: vi.fn(),
    onSelectCandidate: vi.fn(),
    onSelectHistory: vi.fn(),
    promptAssistanceEnabled: true,
    promptId: 'gallery-ai-prompt',
    ...overrides,
  });

  it('routes candidate and history selection through the gallery workflow', () => {
    const onCancel = vi.fn();
    const onSelectCandidate = vi.fn();
    const onSelectHistory = vi.fn();
    const ui = makeUi({
      onCancel,
      onSelectCandidate,
      onSelectHistory,
    });
    const candidate = {
      id: 'candidate-1',
      parentId: null,
      previewUrl: 'https://cdn.ixbt.test/candidate-1.jpg',
    };

    document.body.appendChild(ui.nodes.wrapper);
    ui.open();
    ui.showCandidates([candidate]);
    ui.nodes.candidates.querySelector<HTMLButtonElement>('[data-candidate-id="candidate-1"]')?.click();
    ui.showSelectedCandidate(candidate, [candidate]);
    ui.nodes.history.querySelector<HTMLButtonElement>('[data-history-candidate-id="candidate-1"]')?.click();
    ui.nodes.cancelButton.click();

    expect(ui.nodes.wrapper.hidden).toBe(false);
    expect(onSelectCandidate).toHaveBeenCalledWith('candidate-1');
    expect(onSelectHistory).toHaveBeenCalledWith('candidate-1');
    expect(onCancel).toHaveBeenCalledOnce();
  });

  it('blocks finalization while the optional caption is generated', () => {
    const ui = makeUi({
      promptId: 'gallery-ai-caption',
    });

    ui.prepareGeneratedCaption();

    expect(ui.nodes.generatedCaptionSection.hidden).toBe(false);
    expect(ui.nodes.generatedCaptionStatus.textContent).toBe('Генерируем описание...');
    expect(ui.nodes.finalizeButton.disabled).toBe(true);

    ui.completeGeneratedCaption('Редакционная подпись');

    expect(ui.getGeneratedCaption()).toBe('Редакционная подпись');
    expect(ui.nodes.finalizeButton.disabled).toBe(false);
  });
});
