import { IconEtcVertical } from '@codexteam/icons';

import { make } from './utils/dom';

export type GalleryItemSetting = 'disableHeightLimit' | 'disableOptimization' | 'disableDecoration';

interface ItemSettingsClasses {
  button: string;
  wrapper: string;
  panel: string;
  option: string;
}

interface CreateItemSettingsParams {
  item: HTMLElement;
  classes: ItemSettingsClasses;
  translate: (message: string) => string;
  onChange: (setting: GalleryItemSetting, enabled: boolean) => void;
}

const SETTINGS: Array<{ key: GalleryItemSetting; label: string }> = [
  { key: 'disableHeightLimit', label: 'Не ограничивать по высоте' },
  { key: 'disableOptimization', label: 'Не оптимизировать' },
  { key: 'disableDecoration', label: 'Не применять оформление' },
];

export function createItemSettings({ item, classes, translate, onChange }: CreateItemSettingsParams): HTMLElement {
  const wrapper = make('div', [classes.wrapper]);
  const button = make('button', [classes.button], { type: 'button' }) as HTMLButtonElement;
  const panel = make('div', [classes.panel]);

  button.innerHTML = IconEtcVertical;
  button.title = translate('Настройки изображения');
  button.setAttribute('aria-label', translate('Настройки изображения'));
  button.setAttribute('aria-expanded', 'false');
  panel.hidden = true;

  button.addEventListener('click', () => {
    panel.hidden = !panel.hidden;
    button.setAttribute('aria-expanded', String(!panel.hidden));
  });

  for (const setting of SETTINGS) {
    const label = make('label', [classes.option]);
    const input = make('input', null, { type: 'checkbox' }) as HTMLInputElement;

    input.checked = item.dataset[setting.key] === 'true';
    input.addEventListener('click', () => onChange(setting.key, input.checked));
    label.append(input, document.createTextNode(translate(setting.label)));
    panel.appendChild(label);
  }

  wrapper.append(button, panel);

  return wrapper;
}
