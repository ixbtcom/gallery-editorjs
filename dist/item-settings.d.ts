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
export declare function createItemSettings({ item, classes, translate, onChange }: CreateItemSettingsParams): HTMLElement;
export {};
