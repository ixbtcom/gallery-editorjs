import { CropResult } from './types/types';

/**
 * Модальное окно кадрирования изображения на основе cropper.js.
 * Возвращает координаты обрезки в формате imagor (нормализованные 0-1).
 */
export default class CropModal {
    private overlay;
    private cropper;
    private escHandler;
    private resolvePromise;
    /**
     * Открывает модальное окно кадрирования.
     *
     * @param imageUrl - URL изображения для кадрирования
     * @param existingCrop - существующая строка кадрирования "AxB:CxD" для восстановления области
     * @returns Promise с результатом кадрирования или null при отмене
     */
    open(imageUrl: string, existingCrop?: string): Promise<CropResult | null>;
    /**
     * Полностью уничтожает модальное окно и освобождает ресурсы.
     */
    destroy(): void;
    /**
     * Закрывает модальное окно и возвращает результат через Promise.
     */
    private close;
    /**
     * Создает DOM-структуру оверлея с кнопками управления.
     */
    private createOverlay;
    /**
     * Обрабатывает нажатие кнопки "Применить" — собирает данные кадрирования
     * и закрывает модальное окно с результатом.
     */
    private handleApply;
    /**
     * Парсит строку кадрирования в формате imagor "AxB:CxD" в координаты.
     *
     * @param crop - строка вида "0.1234x0.2345:0.8765x0.7654"
     * @returns объект с координатами или null если формат не совпадает
     */
    private parseCropString;
    /**
     * Преобразует данные cropper.js в строку кадрирования формата imagor
     * и возвращает объект CropResult.
     *
     * @param data - данные из Cropper.getData(true)
     * @param naturalWidth - натуральная ширина изображения
     * @param naturalHeight - натуральная высота изображения
     */
    private cropDataToString;
    /**
     * Восстанавливает область кадрирования из строки imagor-формата.
     *
     * @param crop - строка кадрирования "AxB:CxD"
     * @param naturalWidth - натуральная ширина изображения
     * @param naturalHeight - натуральная высота изображения
     */
    private restoreCropArea;
}
