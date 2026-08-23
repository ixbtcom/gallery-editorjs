(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`:root{--ej-radius-sm: 6px;--ej-radius-md: 8px;--ej-radius-lg: 12px;--ej-bg-page: #fff;--ej-bg-surface: #fff;--ej-bg-muted: var(--gray-50, #f9fafb);--ej-bg-input: #fff;--ej-ring: rgba(3, 7, 18, .1);--ej-ring-focus: var(--primary-600, #2563eb);--ej-border: var(--gray-200, #e5e7eb);--ej-border-strong: rgba(3, 7, 18, .05);--ej-text: var(--gray-950, #030712);--ej-text-secondary: var(--gray-500, #6b7280);--ej-text-muted: var(--gray-400, #9ca3af);--ej-text-on-primary: #fff;--ej-primary: var(--primary-600, #2563eb);--ej-primary-hover: var(--primary-700, #1d4ed8);--ej-primary-light: var(--primary-50, #eff6ff);--ej-primary-muted: var(--primary-100, #dbeafe);--ej-success-bg: var(--success-50, #f0fdf4);--ej-success-border: var(--success-500, #22c55e);--ej-success-text: var(--success-700, #15803d);--ej-warning-bg: var(--warning-50, #fffbeb);--ej-warning-border: var(--warning-500, #f59e0b);--ej-warning-text: var(--warning-700, #b45309);--ej-danger: var(--danger-600, #dc2626);--ej-danger-bg: var(--danger-50, #fef2f2);--ej-danger-border: var(--danger-500, #ef4444);--ej-danger-text: var(--danger-700, #b91c1c);--ej-danger-hover-bg: var(--danger-100, #fee2e2);--ej-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, .05);--ej-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1);--ej-transition: 75ms ease;--ej-control-bg: rgba(255, 255, 255, .9);--ej-control-hover: rgba(0, 0, 0, .05);--ej-icon-color: var(--gray-400, #9ca3af)}.dark{--ej-bg-page: var(--gray-900, #111827);--ej-bg-surface: var(--gray-900, #111827);--ej-bg-muted: rgba(255, 255, 255, .05);--ej-bg-input: rgba(255, 255, 255, .05);--ej-ring: rgba(255, 255, 255, .2);--ej-ring-focus: var(--primary-500, #3b82f6);--ej-border: rgba(255, 255, 255, .1);--ej-border-strong: rgba(255, 255, 255, .1);--ej-text: #fff;--ej-text-secondary: var(--gray-400, #9ca3af);--ej-text-muted: var(--gray-500, #6b7280);--ej-text-on-primary: #fff;--ej-control-bg: rgba(30, 30, 30, .9);--ej-control-hover: rgba(255, 255, 255, .1);--ej-icon-color: var(--gray-500, #6b7280);--ej-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, .3);--ej-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, .3), 0 2px 4px -2px rgba(0, 0, 0, .2)}@keyframes ej-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.gallery-crop-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000;background:#000000d9;display:flex;align-items:center;justify-content:center;padding:20px}.gallery-crop-modal__container{background:var(--ej-bg-surface, #fff);border-radius:var(--ej-radius-lg);box-shadow:var(--ej-shadow-md);max-width:90vw;max-height:90vh;display:flex;flex-direction:column;overflow:hidden}.gallery-crop-modal__image-wrapper{flex:1;overflow:hidden;max-height:calc(90vh - 80px);display:flex;align-items:center;justify-content:center}.gallery-crop-modal__image-wrapper img{max-width:100%;display:block}.gallery-crop-modal__options{display:flex;flex-direction:column;gap:12px;padding:12px 16px 0;background:var(--ej-bg-muted, #f5f5f5)}.gallery-crop-modal__option{display:inline-flex;align-items:center;gap:8px;color:var(--ej-text);cursor:pointer;font-size:14px}.gallery-crop-modal__option input{width:18px;height:18px;margin:0}.gallery-crop-modal__aspect-ratios{display:flex;flex-wrap:wrap;gap:8px;padding:0;border:0;margin:0}.gallery-crop-modal__aspect-ratios-label{width:100%;color:var(--ej-text-secondary);font-size:13px;font-weight:500}.gallery-crop-modal__aspect-ratio{display:inline-flex;position:relative;cursor:pointer}.gallery-crop-modal__aspect-ratio input{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:100%;height:100%;margin:0;opacity:0;cursor:pointer}.gallery-crop-modal__aspect-ratio-label{min-width:52px;padding:6px 10px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-sm);background:var(--ej-bg-surface);color:var(--ej-text);font-size:13px;line-height:1;text-align:center}.gallery-crop-modal__aspect-ratio input:checked+.gallery-crop-modal__aspect-ratio-label{border-color:var(--ej-primary);background:var(--ej-primary-light);color:var(--ej-primary)}.gallery-crop-modal__aspect-ratio input:focus-visible+.gallery-crop-modal__aspect-ratio-label{outline:2px solid var(--ej-ring-focus);outline-offset:2px}.gallery-crop-modal__actions{display:flex;gap:8px;padding:12px 16px;justify-content:center;background:var(--ej-bg-muted, #f5f5f5);border-top:1px solid var(--ej-border)}.gallery-crop-modal__btn{padding:8px 20px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);background:var(--ej-bg-surface, #fff);color:var(--ej-text);font-size:14px;font-weight:500;cursor:pointer;transition:background var(--ej-transition),border-color var(--ej-transition)}.gallery-crop-modal__btn:hover{background:var(--ej-bg-muted)}.gallery-crop-modal__btn--primary{background:var(--ej-primary);color:var(--ej-text-on-primary);border-color:var(--ej-primary)}.gallery-crop-modal__btn--primary:hover{opacity:.9}.gallery-crop-modal__btn--danger{color:var(--ej-danger);border-color:var(--ej-danger)}.gallery-crop-modal__btn--danger:hover{background:var(--ej-danger);color:#fff}.gallery-tool{margin:2rem 0;max-width:100%;box-sizing:border-box;overflow:hidden}.gallery-tool__items{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:12px;max-width:100%;box-sizing:border-box}.gallery-tool--columns-1 .gallery-tool__item{flex:0 0 100%;max-width:100%}.gallery-tool--columns-2 .gallery-tool__item{flex:0 0 calc(50% - 6px);max-width:calc(50% - 6px)}.gallery-tool--columns-3 .gallery-tool__item{flex:0 0 calc(33.333% - 8px);max-width:calc(33.333% - 8px)}.gallery-tool--columns-4 .gallery-tool__item{flex:0 0 calc(25% - 9px);max-width:calc(25% - 9px)}.gallery-tool--columns-5 .gallery-tool__item{flex:0 0 calc(20% - 10px);max-width:calc(20% - 10px)}@media (max-width: 639px){.gallery-tool--columns-3 .gallery-tool__item,.gallery-tool--columns-4 .gallery-tool__item,.gallery-tool--columns-5 .gallery-tool__item{flex:0 0 calc(50% - 6px);max-width:calc(50% - 6px)}}.gallery-tool__item{position:relative;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);overflow:hidden;background:var(--ej-bg-muted);box-sizing:border-box;min-width:0;box-shadow:var(--ej-shadow-sm);transition:box-shadow var(--ej-transition)}.gallery-tool__item:hover{box-shadow:var(--ej-shadow-md)}.gallery-tool__item--plain,.gallery-tool__item--plain:hover{border-radius:0}.gallery-tool__item-image{position:relative;min-height:120px;background:var(--ej-bg-muted);overflow:hidden}.gallery-tool__item-image img{width:100%;height:auto;display:block;object-fit:contain;max-height:400px;max-width:100%}.gallery-tool__item--unlimited-height .gallery-tool__item-image img{max-height:none}.gallery-tool__item-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;background-position:center;margin:35px auto;position:relative;background-color:var(--ej-bg-muted)}.gallery-tool__item-preloader:after{content:"";position:absolute;width:60px;height:60px;border-radius:50%;border:2px solid var(--ej-border);border-top-color:var(--ej-primary);left:50%;top:50%;margin:-30px 0 0 -30px;animation:ej-spin 1s infinite linear;box-sizing:border-box}.gallery-tool__item-caption,.gallery-tool__item-source,.gallery-tool__item-source-link{margin:.5rem;width:calc(100% - 1rem);background:#fff;font-weight:500}.gallery-tool__item-source{color:var(--ej-text-secondary)}.gallery-tool__item-source-link{color:var(--ej-primary)}.gallery-tool__item-caption[data-placeholder]:empty:before,.gallery-tool__item-source[data-placeholder]:empty:before,.gallery-tool__item-source-link[data-placeholder]:empty:before{content:attr(data-placeholder);color:var(--ej-text-muted);pointer-events:none}.gallery-tool__item-caption[data-placeholder]:empty:focus:before,.gallery-tool__item-source[data-placeholder]:empty:focus:before,.gallery-tool__item-source-link[data-placeholder]:empty:focus:before{display:none}.gallery-tool__item-dimensions{position:absolute;bottom:8px;left:8px;padding:2px 6px;background:#0009;color:#fff;font-size:11px;font-family:monospace;border-radius:var(--ej-radius-sm);z-index:5;pointer-events:none}.gallery-tool__ai-mark{display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;padding:0 5px;border-radius:999px;border:1px solid rgba(255,255,255,.75);background:#111827;color:#fff;font-size:11px;font-weight:700;letter-spacing:-.02em;line-height:1;box-shadow:0 2px 8px #00000047;box-sizing:border-box}.gallery-tool__item-ai-badge{position:absolute;right:8px;bottom:8px;z-index:6;display:inline-flex;cursor:help}.gallery-tool__item-controls{position:absolute;top:8px;right:8px;display:flex;gap:4px;opacity:0;transition:opacity .2s;z-index:10}.gallery-tool__item:hover .gallery-tool__item-controls,.gallery-tool__item:focus-within .gallery-tool__item-controls{opacity:1}.gallery-tool__item-remove,.gallery-tool__item-move-left,.gallery-tool__item-move-right,.gallery-tool__item-settings{width:32px;height:32px;border:none;border-radius:var(--ej-radius-sm);background:var(--ej-control-bg);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;color:var(--ej-text);transition:background .2s}.gallery-tool__item-remove:hover,.gallery-tool__item-move-left:hover,.gallery-tool__item-move-right:hover,.gallery-tool__item-settings:hover{background:var(--ej-control-hover)}.gallery-tool__item-remove{color:var(--ej-danger)}.gallery-tool__add-buttons{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.gallery-tool__add-buttons .cdx-button{display:inline-flex;align-items:center;gap:6px}.gallery-tool__add-buttons .cdx-button svg{width:16px;height:16px}.gallery-tool__add-buttons .gallery-tool__ai-button{gap:8px}.gallery-tool__add-buttons .gallery-tool__clipboard-button{gap:6px}.gallery-tool__add-buttons .gallery-tool__ai-button .gallery-tool__ai-mark{min-width:22px;height:22px;font-size:10px}.gallery-tool__url-input-wrapper{flex:1;min-width:200px}.gallery-tool__url-input{width:100%;padding:8px 12px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);font-size:14px;background:var(--ej-bg-input);color:var(--ej-text);transition:border-color var(--ej-transition)}.gallery-tool__url-input:focus{border-color:var(--ej-ring-focus);outline:none;box-shadow:0 0 0 1px var(--ej-ring-focus)}.gallery-tool__columns-control{display:flex;align-items:center;gap:8px;margin-left:auto}.gallery-tool__columns-button{width:32px;height:32px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);background:var(--ej-bg-surface);cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;transition:background .2s;color:var(--ej-text)}.gallery-tool__columns-button:hover{background:var(--ej-bg-muted)}.gallery-tool__columns-display{font-size:13px;color:var(--ej-text-secondary);min-width:45px;text-align:center}.gallery-tool--carousel{max-width:100%;overflow:hidden;box-sizing:border-box}.gallery-tool--carousel .gallery-tool__items{flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;gap:12px;padding-bottom:8px;max-width:100%;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:var(--ej-border) transparent}.gallery-tool--carousel .gallery-tool__items::-webkit-scrollbar{height:6px}.gallery-tool--carousel .gallery-tool__items::-webkit-scrollbar-track{background:transparent}.gallery-tool--carousel .gallery-tool__items::-webkit-scrollbar-thumb{background:var(--ej-border);border-radius:3px}.gallery-tool--carousel .gallery-tool__item{flex:0 0 auto;width:clamp(200px,60vw,280px);max-width:calc(100% - 24px);min-width:200px}.gallery-tool--carousel .gallery-tool__item-image img{max-height:280px}.gallery-tool--carousel .gallery-tool__item--unlimited-height .gallery-tool__item-image img{max-height:none}.gallery-tool--masonry .gallery-tool__items{display:block;column-count:2;column-gap:12px;max-width:100%}.gallery-tool--masonry.gallery-tool--columns-3 .gallery-tool__items{column-count:3}.gallery-tool--masonry.gallery-tool--columns-4 .gallery-tool__items{column-count:4}.gallery-tool--masonry.gallery-tool--columns-5 .gallery-tool__items{column-count:5}@media (max-width: 639px){.gallery-tool--masonry.gallery-tool--columns-3 .gallery-tool__items,.gallery-tool--masonry.gallery-tool--columns-4 .gallery-tool__items,.gallery-tool--masonry.gallery-tool--columns-5 .gallery-tool__items{column-count:2}}.gallery-tool--masonry .gallery-tool__item{width:100%;max-width:100%;margin-bottom:12px;break-inside:avoid}.gallery-tool--masonry .gallery-tool__item-image img{max-height:none;max-width:100%}.gallery-tool--empty .gallery-tool__items,.gallery-tool--loading .gallery-tool__item-image img{display:none}.gallery-tool--stretched .gallery-tool__item-image img{max-height:none}.gallery-tool__item-crop{width:32px;height:32px;border:none;border-radius:var(--ej-radius-sm);background:var(--ej-control-bg);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;color:var(--ej-text);transition:background .2s}.gallery-tool__item-crop:hover{background:var(--ej-control-hover)}.gallery-tool__item-crop:disabled{cursor:not-allowed;opacity:.45}.gallery-tool__item-settings-wrapper{position:relative}.gallery-tool__item-settings-panel{position:absolute;top:calc(100% + 4px);right:0;z-index:20;display:grid;min-width:240px;padding:8px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);background:var(--ej-bg-surface);box-shadow:var(--ej-shadow-md)}.gallery-tool__item-settings-panel[hidden]{display:none}.gallery-tool__item-setting{display:flex;align-items:center;gap:8px;min-height:36px;padding:6px 8px;color:var(--ej-text);font-size:13px;cursor:pointer}.gallery-tool__item-setting:hover{background:var(--ej-bg-muted)}.gallery-tool__item-setting input{width:16px;height:16px;margin:0}.gallery-tool__item--cropped{border-left:3px solid var(--ej-primary)}.gallery-tool__item--cropped .gallery-tool__item-image:after{content:"✂";position:absolute;bottom:8px;right:8px;padding:2px 6px;background:var(--ej-primary);color:var(--ej-text-on-primary);font-size:11px;border-radius:var(--ej-radius-sm);z-index:5;pointer-events:none}.gallery-tool__item[data-ai-generated].gallery-tool__item--cropped .gallery-tool__item-image:after{right:44px}.gallery-tool__item-cover{width:28px;height:28px;border:none;border-radius:6px;background:#0000008c;color:#fbbf24;font-size:15px;line-height:1;cursor:pointer;display:inline-flex;align-items:center;justify-content:center}.gallery-tool__item-cover:hover{background:#000000bf}.gallery-tool__item[data-cover]{outline:2px solid #3b82f6;outline-offset:-2px}.gallery-tool__item[data-cover] .gallery-tool__item-cover{color:#3b82f6}.gallery-tool__item[data-cover]:after{content:"Обложка";position:absolute;top:6px;left:6px;background:#3b82f6e6;color:#fff;font-size:11px;font-weight:600;padding:2px 8px;border-radius:4px;pointer-events:none;z-index:3}.gallery-tool__item[data-cover][data-cover-overridden]:after{content:"Обложка · перекрыта вручную";background:#4b5563f2}/*!
 * Cropper.js v1.6.2
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-04-21T07:43:02.731Z
 */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;-ms-touch-action:none;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cropper-container img{backface-visibility:hidden;display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-wrap-box,.cropper-canvas,.cropper-drag-box,.cropper-crop-box,.cropper-modal{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-wrap-box,.cropper-canvas{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:#3399ffbf;overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:calc(100% / 3);left:0;top:calc(100% / 3);width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:calc(100% / 3);top:0;width:calc(100% / 3)}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:before,.cropper-center:after{background-color:#eee;content:" ";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width: 768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width: 992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width: 1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:" ";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC)}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}`)),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
const Ae = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M12.01 7.29999H12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M12.01 12H12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M12.01 16.7H12"/></svg>', de = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>';
function D(o, t = null, e = {}) {
  const i = document.createElement(o);
  Array.isArray(t) ? i.classList.add(...t) : t !== null && i.classList.add(t);
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (i[r] = e[r]);
  return i;
}
const Le = [
  { key: "disableHeightLimit", label: "Не ограничивать по высоте" },
  { key: "disableOptimization", label: "Не оптимизировать" },
  { key: "disableDecoration", label: "Не применять оформление" }
];
function nt(o, t = null, e = {}) {
  const i = document.createElement(o);
  Array.isArray(t) ? i.classList.add(...t) : t !== null && i.classList.add(t);
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (i[r] = e[r]);
  return i;
}
function Re({ isEnabled: o, classes: t, translate: e, onChange: i }) {
  const r = nt("div", [t.wrapper]), a = nt("button", [t.button], { type: "button" }), n = nt("div", [t.panel]);
  a.innerHTML = Ae, a.title = e("Настройки изображения"), a.setAttribute("aria-label", e("Настройки изображения")), a.setAttribute("aria-expanded", "false"), n.hidden = !0, a.addEventListener("click", () => {
    n.hidden = !n.hidden, a.setAttribute("aria-expanded", String(!n.hidden));
  });
  for (const s of Le) {
    const d = nt("label", [t.option]), l = nt("input", null, { type: "checkbox" });
    l.checked = o(s.key), l.addEventListener("click", () => i(s.key, l.checked)), d.append(l, document.createTextNode(e(s.label))), n.appendChild(d);
  }
  return r.append(a, n), r;
}
const ke = "media.ixbt.site", Ne = "920x/webp", Pe = /^\d+x\d*$/;
function ot(o) {
  if (!o)
    return o;
  let t;
  try {
    t = new URL(o);
  } catch {
    return o;
  }
  if (t.hostname !== ke)
    return o;
  const e = t.pathname.split("/").filter(Boolean);
  return e.length === 0 || Pe.test(e[0]) ? o : (t.pathname = `/${Ne}/${e.join("/")}`, t.toString());
}
const He = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2v4"/><path d="M6 6h12a2 2 0 0 1 2 2v8"/><path d="M18 22v-4"/><path d="M18 18H6a2 2 0 0 1-2-2V8"/></svg>', Be = '<span class="gallery-tool__ai-mark" aria-hidden="true">Ai</span>', Yt = "Создано с помощью Ai", U = class U {
  constructor({ api: t, config: e, onSelectFile: i, onSelectUrl: r, onColumnsChange: a, onRemoveImage: n, onCropImage: s, onItemSettingsChange: d, readOnly: l }) {
    this.currentColumns = 1, this.previousColumns = 1, this.isRendering = !1, this.columnsLocked = !1, this.api = t, this.config = e, this.onSelectFile = i, this.onSelectUrl = r, this.onColumnsChange = a, this.onRemoveImage = n, this.onCropImage = s, this.onItemSettingsChange = d ?? (() => {
    }), this.readOnly = l, this.nodes = {
      wrapper: D("div", [this.CSS.wrapper]),
      itemsContainer: D("div", [this.CSS.itemsContainer]),
      addButtons: D("div", [this.CSS.addButtons]),
      fileButton: this.createFileButton(),
      urlButton: D("div"),
      // unused, kept for interface compatibility
      urlInput: this.createUrlInput(),
      columnsControl: this.createColumnsControl()
    }, this.nodes.addButtons.appendChild(this.nodes.fileButton), this.nodes.addButtons.appendChild(this.nodes.urlInput), this.nodes.addButtons.appendChild(this.nodes.columnsControl), this.nodes.wrapper.appendChild(this.nodes.itemsContainer), this.nodes.wrapper.appendChild(this.nodes.addButtons);
  }
  get CSS() {
    return {
      wrapper: "gallery-tool",
      itemsContainer: "gallery-tool__items",
      item: "gallery-tool__item",
      itemImage: "gallery-tool__item-image",
      itemPreloader: "gallery-tool__item-preloader",
      itemDimensions: "gallery-tool__item-dimensions",
      itemAiBadge: "gallery-tool__item-ai-badge",
      itemCaption: "gallery-tool__item-caption",
      itemSource: "gallery-tool__item-source",
      itemSourceLink: "gallery-tool__item-source-link",
      itemControls: "gallery-tool__item-controls",
      itemRemove: "gallery-tool__item-remove",
      itemMoveLeft: "gallery-tool__item-move-left",
      itemMoveRight: "gallery-tool__item-move-right",
      itemCrop: "gallery-tool__item-crop",
      itemSettings: "gallery-tool__item-settings",
      itemSettingsWrapper: "gallery-tool__item-settings-wrapper",
      itemSettingsPanel: "gallery-tool__item-settings-panel",
      itemSetting: "gallery-tool__item-setting",
      itemCropped: "gallery-tool__item--cropped",
      itemUnlimitedHeight: "gallery-tool__item--unlimited-height",
      itemPlain: "gallery-tool__item--plain",
      addButtons: "gallery-tool__add-buttons",
      button: this.api.styles.button,
      input: this.api.styles.input,
      urlInput: "gallery-tool__url-input",
      urlInputWrapper: "gallery-tool__url-input-wrapper",
      columnsControl: "gallery-tool__columns-control",
      columnsButton: "gallery-tool__columns-button",
      columnsDisplay: "gallery-tool__columns-display"
    };
  }
  /**
   * Render the gallery UI
   */
  render(t, e) {
    this.currentColumns = e, this.updateColumnsClass(), this.updateColumnsDisplay(), this.isRendering = !0;
    try {
      t.length === 0 ? this.toggleState(
        "empty"
        /* Empty */
      ) : (t.forEach((i) => this.addItem(i)), this.toggleState(
        "filled"
        /* Filled */
      ));
    } finally {
      this.isRendering = !1;
    }
    return t.length > 0 && (this.columnsLocked = !0), this.nodes.wrapper;
  }
  /**
   * Add a new item to the gallery
   */
  addItem(t) {
    const e = D("div", [this.CSS.item]), i = D("div", [this.CSS.itemImage]), r = D("div", [this.CSS.itemPreloader]), a = !!(t.crop && t.imagorPath && !t.disableOptimization), n = t.disableOptimization ? t.url : a && t.crop && t.imagorPath ? this.buildPreviewUrl(t.imagorPath, t.crop) : ot(t.url), s = D("img", null, { src: n }), d = a && t.croppedWidth ? t.croppedWidth : t.width, l = a && t.croppedHeight ? t.croppedHeight : t.height;
    d && l && (s.style.aspectRatio = `${d} / ${l}`), a && (s.style.width = "100%", s.style.maxHeight = "none", e.classList.add(this.CSS.itemCropped)), t.disableHeightLimit && (s.style.maxHeight = "none", e.classList.add(this.CSS.itemUnlimitedHeight)), t.disableDecoration && e.classList.add(this.CSS.itemPlain);
    const h = D("div", [this.CSS.itemCaption, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    h.dataset.placeholder = this.config.captionPlaceholder ?? "Caption", h.textContent = t.caption || "";
    const c = D("div", [this.CSS.itemSource, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    c.dataset.placeholder = this.config.sourcePlaceholder ?? "Source", c.textContent = t.source || "";
    const u = D("div", [this.CSS.itemSourceLink, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    if (u.dataset.placeholder = this.config.sourceLinkPlaceholder ?? "Source link", u.textContent = t.sourceLink || "", i.appendChild(r), i.appendChild(s), d && l) {
      const y = D("div", [this.CSS.itemDimensions]);
      y.textContent = `${d} × ${l}`, i.appendChild(y);
    }
    return t.isAiGenerated && i.appendChild(this.createAiBadge()), s.onload = () => {
      r.style.display = "none";
    }, e.appendChild(i), e.appendChild(h), e.appendChild(c), e.appendChild(u), this.storeItemData(e, t), this.readOnly || e.insertBefore(this.createItemControls(e), e.firstChild), this.nodes.itemsContainer.appendChild(e), this.toggleState(
      "filled"
      /* Filled */
    ), this.autoAdjustColumns(), e;
  }
  storeItemData(t, e) {
    var i, r, a;
    t.dataset.url = e.url, e.media_id && (t.dataset.mediaId = e.media_id), (i = this.config.cover) != null && i.enabled && e.media_id && ((a = (r = this.config.cover).coverUuid) == null ? void 0 : a.call(r)) === e.media_id && t.setAttribute("data-cover", ""), e.width && (t.dataset.width = String(e.width)), e.height && (t.dataset.height = String(e.height)), e.imagorPath && (t.dataset.imagorPath = e.imagorPath), e.crop && !e.disableOptimization && (t.dataset.crop = e.crop), e.croppedWidth && !e.disableOptimization && (t.dataset.croppedWidth = String(e.croppedWidth)), e.croppedHeight && !e.disableOptimization && (t.dataset.croppedHeight = String(e.croppedHeight)), e.cropAspectRatio && !e.disableOptimization && (t.dataset.cropAspectRatio = e.cropAspectRatio), typeof e.showOriginalOnClick == "boolean" && !e.disableOptimization && (t.dataset.showOriginalOnClick = String(e.showOriginalOnClick)), e.isAiGenerated && (t.dataset.aiGenerated = "true"), e.disableHeightLimit && (t.dataset.disableHeightLimit = "true"), e.disableOptimization && (t.dataset.disableOptimization = "true"), e.disableDecoration && (t.dataset.disableDecoration = "true");
  }
  /**
   * Create a placeholder item for loading state
   */
  createLoadingItem(t) {
    const e = D("div", [this.CSS.item]), i = D("div", [this.CSS.itemImage]), r = D("div", [this.CSS.itemPreloader]);
    t && (r.style.backgroundImage = `url(${ot(t)})`), i.appendChild(r), e.appendChild(i);
    const a = D("div", [this.CSS.itemCaption, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    a.dataset.placeholder = this.config.captionPlaceholder ?? "Caption";
    const n = D("div", [this.CSS.itemSource, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    n.dataset.placeholder = this.config.sourcePlaceholder ?? "Source";
    const s = D("div", [this.CSS.itemSourceLink, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    return s.dataset.placeholder = this.config.sourceLinkPlaceholder ?? "Source link", e.appendChild(a), e.appendChild(n), e.appendChild(s), this.nodes.itemsContainer.appendChild(e), this.toggleState(
      "loading"
      /* Loading */
    ), e;
  }
  /**
   * Update loading item with uploaded image
   */
  fillLoadingItem(t, e) {
    const i = t.querySelector(`.${this.CSS.itemImage}`), r = t.querySelector(`.${this.CSS.itemPreloader}`), a = D("img", null, {
      src: e.disableOptimization ? e.url : ot(e.url)
    });
    if (e.width && e.height && (a.style.aspectRatio = `${e.width} / ${e.height}`), e.disableHeightLimit && (a.style.maxHeight = "none", t.classList.add(this.CSS.itemUnlimitedHeight)), e.disableDecoration && t.classList.add(this.CSS.itemPlain), a.onload = () => {
      r && (r.style.display = "none");
    }, i.appendChild(a), e.width && e.height) {
      const n = D("div", [this.CSS.itemDimensions]);
      n.textContent = `${e.width} × ${e.height}`, i.appendChild(n);
    }
    if (this.storeItemData(t, e), e.isAiGenerated && i.appendChild(this.createAiBadge()), !this.readOnly) {
      const n = this.createItemControls(t);
      t.insertBefore(n, t.firstChild);
    }
    this.toggleState(
      "filled"
      /* Filled */
    ), this.autoAdjustColumns();
  }
  /**
   * Get all items data
   */
  getItemsData() {
    const t = this.nodes.itemsContainer.querySelectorAll(`.${this.CSS.item}`), e = [];
    return t.forEach((i) => {
      var x, E, M;
      const r = i, a = r.dataset.url;
      if (!a) return;
      const n = ((x = i.querySelector(`.${this.CSS.itemCaption}`)) == null ? void 0 : x.textContent) || "", s = ((E = i.querySelector(`.${this.CSS.itemSource}`)) == null ? void 0 : E.textContent) || "", d = ((M = i.querySelector(`.${this.CSS.itemSourceLink}`)) == null ? void 0 : M.textContent) || "", l = r.dataset.width ? parseInt(r.dataset.width, 10) : void 0, h = r.dataset.height ? parseInt(r.dataset.height, 10) : void 0, c = r.dataset.disableHeightLimit === "true", u = r.dataset.disableOptimization === "true", y = r.dataset.disableDecoration === "true", w = r.dataset.imagorPath || void 0, p = u ? void 0 : r.dataset.crop || void 0, f = !u && r.dataset.croppedWidth ? parseInt(r.dataset.croppedWidth, 10) : void 0, v = !u && r.dataset.croppedHeight ? parseInt(r.dataset.croppedHeight, 10) : void 0, g = !u && (r.dataset.cropAspectRatio === "16:9" || r.dataset.cropAspectRatio === "1:1") ? r.dataset.cropAspectRatio : !u && r.dataset.cropAspectRatio === "3:2" ? "3:2" : !u && r.dataset.cropAspectRatio === "free" ? "free" : void 0, b = u || r.dataset.showOriginalOnClick === void 0 ? void 0 : r.dataset.showOriginalOnClick === "true", S = r.dataset.mediaId || void 0, C = r.dataset.aiGenerated === "true", m = {
        url: a,
        media_id: S,
        imagorPath: w,
        caption: n,
        source: s,
        sourceLink: d,
        width: l,
        height: h,
        crop: p,
        croppedWidth: f,
        croppedHeight: v
      };
      g !== void 0 && (m.cropAspectRatio = g), b !== void 0 && (m.showOriginalOnClick = b), C && (m.isAiGenerated = !0), c && (m.disableHeightLimit = !0), u && (m.disableOptimization = !0), y && (m.disableDecoration = !0), e.push(m);
    }), e;
  }
  /**
   * Update item DOM after crop operation
   */
  updateItemAfterCrop(t, e, i, r, a, n) {
    const s = t.querySelector(`.${this.CSS.itemImage} img`);
    if (s && !(e && t.dataset.disableOptimization === "true"))
      if (e) {
        t.dataset.crop = e, t.dataset.croppedWidth = String(i), t.dataset.croppedHeight = String(r), t.dataset.showOriginalOnClick = String(a ?? !1), t.dataset.cropAspectRatio = n ?? "3:2", t.classList.add(this.CSS.itemCropped);
        const d = t.dataset.imagorPath;
        d && (s.src = this.buildPreviewUrl(d, e)), s.style.width = "100%", s.style.maxHeight = "none", this.updateItemDimensions(t, i, r);
      } else
        delete t.dataset.crop, delete t.dataset.croppedWidth, delete t.dataset.croppedHeight, delete t.dataset.showOriginalOnClick, delete t.dataset.cropAspectRatio, t.classList.remove(this.CSS.itemCropped), s.src = t.dataset.disableOptimization === "true" ? t.dataset.url || "" : ot(t.dataset.url || ""), s.style.width = "", s.style.maxHeight = t.dataset.disableHeightLimit === "true" ? "none" : "", this.updateItemDimensions(
          t,
          t.dataset.width ? parseInt(t.dataset.width, 10) : void 0,
          t.dataset.height ? parseInt(t.dataset.height, 10) : void 0
        );
  }
  /** Update an item's effective dimensions badge and aspect ratio. */
  updateItemDimensions(t, e, i) {
    const r = t.querySelector(`.${this.CSS.itemImage}`), a = r == null ? void 0 : r.querySelector("img"), n = Number.isFinite(e) && Number.isFinite(i) && (e ?? 0) > 0 && (i ?? 0) > 0;
    let s = (r == null ? void 0 : r.querySelector(`.${this.CSS.itemDimensions}`)) ?? null;
    if (!n) {
      s == null || s.remove(), a && (a.style.aspectRatio = "");
      return;
    }
    s === null && r !== null && (s = D("div", [this.CSS.itemDimensions]), r.appendChild(s)), s !== null && (s.textContent = `${e} × ${i}`), a && (a.style.aspectRatio = `${e} / ${i}`);
  }
  /**
   * Build imagor preview URL with crop + fit-in resize.
   * Mirrors ImageService::url() logic using imagorPath (normalized short URL).
   */
  buildPreviewUrl(t, e, i = 600) {
    const r = this.config.mediaHost;
    if (!r || !t) return "";
    const a = ["unsafe"];
    return e && a.push(e), a.push("fit-in", `${i}x0`, t), `${r}/${a.join("/")}`;
  }
  /**
   * Get current columns count
   */
  getColumns() {
    return this.currentColumns;
  }
  createFileButton() {
    const t = D("div", [this.CSS.button]);
    return t.innerHTML = `${de} ${this.config.buttonContent}`, t.addEventListener("click", () => this.onSelectFile()), t;
  }
  createAiBadge() {
    const t = D("span", [this.CSS.itemAiBadge], {
      title: Yt
    });
    return t.innerHTML = Be, t.setAttribute("aria-label", Yt), t;
  }
  createUrlInput() {
    const t = D("div", [this.CSS.urlInputWrapper]), e = D("input", [this.CSS.urlInput, this.CSS.input], {
      type: "text"
    });
    return e.placeholder = this.config.urlInputPlaceholder ?? "Вставьте ссылку на изображение", e.addEventListener("keydown", (i) => {
      i.key === "Enter" && (i.preventDefault(), this.handleUrlInput(e));
    }), e.addEventListener("paste", () => {
      setTimeout(() => {
        this.handleUrlInput(e);
      }, 50);
    }), t.appendChild(e), t;
  }
  /**
   * Process URL from input field
   */
  handleUrlInput(t) {
    const e = t.value.trim();
    e && this.isValidImageUrl(e) && (this.onSelectUrl(e), t.value = "");
  }
  createColumnsControl() {
    const t = D("div", [this.CSS.columnsControl]), e = D("button", [this.CSS.columnsButton], { type: "button" });
    e.innerHTML = "−", e.addEventListener("click", () => this.changeColumns(-1));
    const i = D("span", [this.CSS.columnsDisplay]);
    i.textContent = `${this.currentColumns} col`;
    const r = D("button", [this.CSS.columnsButton], { type: "button" });
    return r.innerHTML = "+", r.addEventListener("click", () => this.changeColumns(1)), t.appendChild(e), t.appendChild(i), t.appendChild(r), t;
  }
  changeColumns(t) {
    const e = Math.min(U.MAX_COLUMNS, Math.max(U.MIN_COLUMNS, this.currentColumns + t));
    e !== this.currentColumns && (this.columnsLocked = !0, this.previousColumns = this.currentColumns, this.currentColumns = e, this.updateColumnsClass(), this.updateColumnsDisplay(), this.onColumnsChange(e));
  }
  updateColumnsClass() {
    const t = `gallery-tool--columns-${this.previousColumns}`, e = `gallery-tool--columns-${this.currentColumns}`;
    if (this.nodes.wrapper.classList.contains(t))
      this.nodes.wrapper.classList.replace(t, e);
    else {
      for (let i = U.MIN_COLUMNS; i <= U.MAX_COLUMNS; i++)
        this.nodes.wrapper.classList.remove(`gallery-tool--columns-${i}`);
      this.nodes.wrapper.classList.add(e);
    }
  }
  /**
   * Validate URL to prevent malicious protocols
   */
  isValidImageUrl(t) {
    return t.startsWith("http://") || t.startsWith("https://") || t.startsWith("data:image/");
  }
  updateColumnsDisplay() {
    const t = this.nodes.columnsControl.querySelector(`.${this.CSS.columnsDisplay}`);
    t && (t.textContent = `${this.currentColumns} col`);
  }
  /**
   * Auto-adjust columns based on items count
   * 1 item = 1 column, 2+ items = 2 columns
   */
  autoAdjustColumns() {
    if (this.isRendering || this.columnsLocked) return;
    const t = this.nodes.itemsContainer.children.length, e = Math.max(U.MIN_COLUMNS, Math.min(t, U.AUTO_MAX_COLUMNS));
    e !== this.currentColumns && (this.previousColumns = this.currentColumns, this.currentColumns = e, this.updateColumnsClass(), this.updateColumnsDisplay(), this.onColumnsChange(e));
  }
  createItemControls(t) {
    var d;
    const e = D("div", [this.CSS.itemControls]), i = D("button", [this.CSS.itemRemove], { type: "button" });
    i.innerHTML = "×", i.title = this.api.i18n.t("Удалить изображение"), i.setAttribute("aria-label", this.api.i18n.t("Удалить изображение")), i.addEventListener("click", () => {
      const l = t.dataset.url, h = t.dataset.mediaId;
      t.remove(), this.nodes.itemsContainer.children.length === 0 && (this.toggleState(
        "empty"
        /* Empty */
      ), this.columnsLocked = !1), this.autoAdjustColumns(), (l || h) && this.onRemoveImage(l ?? "", h);
    });
    const r = D("button", [this.CSS.itemMoveLeft], { type: "button" });
    r.innerHTML = "←", r.addEventListener("click", () => this.moveItem(t, -1));
    const a = D("button", [this.CSS.itemMoveRight], { type: "button" });
    a.innerHTML = "→", a.addEventListener("click", () => this.moveItem(t, 1));
    const n = D("button", [this.CSS.itemCrop], { type: "button" });
    n.innerHTML = He, n.title = this.api.i18n.t("Обрезать изображение"), n.setAttribute("aria-label", this.api.i18n.t("Обрезать изображение")), n.disabled = t.dataset.disableOptimization === "true", n.addEventListener("click", () => this.onCropImage(t));
    const s = Re({
      isEnabled: (l) => t.dataset[l] === "true",
      classes: {
        button: this.CSS.itemSettings,
        wrapper: this.CSS.itemSettingsWrapper,
        panel: this.CSS.itemSettingsPanel,
        option: this.CSS.itemSetting
      },
      translate: (l) => this.api.i18n.t(l),
      onChange: (l, h) => this.updateItemSetting(t, l, h)
    });
    if (e.appendChild(r), e.appendChild(n), e.appendChild(s), (d = this.config.cover) != null && d.enabled) {
      const l = D("button", ["gallery-tool__item-cover"], { type: "button" });
      l.innerHTML = "★", l.title = this.api.i18n.t("Сделать обложкой"), l.setAttribute("aria-label", this.api.i18n.t("Сделать обложкой")), l.setAttribute("aria-pressed", String(t.hasAttribute("data-cover"))), l.addEventListener("click", () => this.onSetCover(t)), e.appendChild(l);
    }
    return e.appendChild(i), e.appendChild(a), e;
  }
  updateItemSetting(t, e, i) {
    i ? t.dataset[e] = "true" : delete t.dataset[e];
    const r = t.querySelector(`.${this.CSS.itemImage} img`), a = t.querySelector(`.${this.CSS.itemCrop}`);
    e === "disableHeightLimit" && (t.classList.toggle(this.CSS.itemUnlimitedHeight, i), r && (r.style.maxHeight = i || t.classList.contains(this.CSS.itemCropped) ? "none" : "")), e === "disableOptimization" && (a == null || a.toggleAttribute("disabled", i), i ? this.updateItemAfterCrop(t, void 0, 0, 0, void 0, void 0) : r && (r.src = ot(t.dataset.url || ""))), e === "disableDecoration" && t.classList.toggle(this.CSS.itemPlain, i), this.onItemSettingsChange();
  }
  /**
   * Выбрать элемент gallery базовой обложкой в состоянии формы.
   */
  onSetCover(t) {
    var r;
    const e = this.config.cover;
    if (!(e != null && e.enabled))
      return !1;
    const i = t.dataset.mediaId;
    return i ? (this.markCover(i), (r = e.onCoverChanged) == null || r.call(e, i), this.api.notifier.show({ message: this.api.i18n.t("Базовая обложка обновлена") }), !0) : (this.api.notifier.show({ message: this.api.i18n.t("Сначала дождитесь загрузки картинки"), style: "error" }), !1);
  }
  /**
   * Подсветить элемент-обложку (по media uuid), снять метку с остальных.
   */
  markCover(t) {
    this.nodes.itemsContainer.querySelectorAll(`.${this.CSS.item}`).forEach((i) => {
      var n;
      const r = i, a = !!t && r.dataset.mediaId === t;
      r.toggleAttribute("data-cover", a), (n = r.querySelector('[aria-label="Сделать обложкой"]')) == null || n.setAttribute("aria-pressed", String(a));
    });
  }
  moveItem(t, e) {
    const i = Array.from(this.nodes.itemsContainer.children), a = i.indexOf(t) + e;
    a < 0 || a >= i.length || (e < 0 ? this.nodes.itemsContainer.insertBefore(t, i[a]) : this.nodes.itemsContainer.insertBefore(i[a], t));
  }
  toggleState(t) {
    this.nodes.wrapper.classList.remove(
      "gallery-tool--empty",
      "gallery-tool--loading",
      "gallery-tool--filled"
    ), this.nodes.wrapper.classList.add(`gallery-tool--${t}`);
  }
  /**
   * Apply tune to wrapper
   */
  applyTune(t, e) {
    this.nodes.wrapper.classList.toggle(`gallery-tool--${t}`, e);
  }
};
U.MIN_COLUMNS = 1, U.MAX_COLUMNS = 5, U.AUTO_MAX_COLUMNS = 4;
let Dt = U;
function Ue(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var ue = { exports: {} };
(function(o, t) {
  (function(e, i) {
    o.exports = i();
  })(window, function() {
    return function(e) {
      var i = {};
      function r(a) {
        if (i[a]) return i[a].exports;
        var n = i[a] = { i: a, l: !1, exports: {} };
        return e[a].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
      }
      return r.m = e, r.c = i, r.d = function(a, n, s) {
        r.o(a, n) || Object.defineProperty(a, n, { enumerable: !0, get: s });
      }, r.r = function(a) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
      }, r.t = function(a, n) {
        if (1 & n && (a = r(a)), 8 & n || 4 & n && typeof a == "object" && a && a.__esModule) return a;
        var s = /* @__PURE__ */ Object.create(null);
        if (r.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: a }), 2 & n && typeof a != "string") for (var d in a) r.d(s, d, (function(l) {
          return a[l];
        }).bind(null, d));
        return s;
      }, r.n = function(a) {
        var n = a && a.__esModule ? function() {
          return a.default;
        } : function() {
          return a;
        };
        return r.d(n, "a", n), n;
      }, r.o = function(a, n) {
        return Object.prototype.hasOwnProperty.call(a, n);
      }, r.p = "", r(r.s = 3);
    }([function(e, i) {
      var r;
      r = /* @__PURE__ */ function() {
        return this;
      }();
      try {
        r = r || new Function("return this")();
      } catch {
        typeof window == "object" && (r = window);
      }
      e.exports = r;
    }, function(e, i, r) {
      (function(a) {
        var n = r(2), s = setTimeout;
        function d() {
        }
        function l(f) {
          if (!(this instanceof l)) throw new TypeError("Promises must be constructed via new");
          if (typeof f != "function") throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], p(f, this);
        }
        function h(f, v) {
          for (; f._state === 3; ) f = f._value;
          f._state !== 0 ? (f._handled = !0, l._immediateFn(function() {
            var g = f._state === 1 ? v.onFulfilled : v.onRejected;
            if (g !== null) {
              var b;
              try {
                b = g(f._value);
              } catch (S) {
                return void u(v.promise, S);
              }
              c(v.promise, b);
            } else (f._state === 1 ? c : u)(v.promise, f._value);
          })) : f._deferreds.push(v);
        }
        function c(f, v) {
          try {
            if (v === f) throw new TypeError("A promise cannot be resolved with itself.");
            if (v && (typeof v == "object" || typeof v == "function")) {
              var g = v.then;
              if (v instanceof l) return f._state = 3, f._value = v, void y(f);
              if (typeof g == "function") return void p((b = g, S = v, function() {
                b.apply(S, arguments);
              }), f);
            }
            f._state = 1, f._value = v, y(f);
          } catch (C) {
            u(f, C);
          }
          var b, S;
        }
        function u(f, v) {
          f._state = 2, f._value = v, y(f);
        }
        function y(f) {
          f._state === 2 && f._deferreds.length === 0 && l._immediateFn(function() {
            f._handled || l._unhandledRejectionFn(f._value);
          });
          for (var v = 0, g = f._deferreds.length; v < g; v++) h(f, f._deferreds[v]);
          f._deferreds = null;
        }
        function w(f, v, g) {
          this.onFulfilled = typeof f == "function" ? f : null, this.onRejected = typeof v == "function" ? v : null, this.promise = g;
        }
        function p(f, v) {
          var g = !1;
          try {
            f(function(b) {
              g || (g = !0, c(v, b));
            }, function(b) {
              g || (g = !0, u(v, b));
            });
          } catch (b) {
            if (g) return;
            g = !0, u(v, b);
          }
        }
        l.prototype.catch = function(f) {
          return this.then(null, f);
        }, l.prototype.then = function(f, v) {
          var g = new this.constructor(d);
          return h(this, new w(f, v, g)), g;
        }, l.prototype.finally = n.a, l.all = function(f) {
          return new l(function(v, g) {
            if (!f || f.length === void 0) throw new TypeError("Promise.all accepts an array");
            var b = Array.prototype.slice.call(f);
            if (b.length === 0) return v([]);
            var S = b.length;
            function C(x, E) {
              try {
                if (E && (typeof E == "object" || typeof E == "function")) {
                  var M = E.then;
                  if (typeof M == "function") return void M.call(E, function(P) {
                    C(x, P);
                  }, g);
                }
                b[x] = E, --S == 0 && v(b);
              } catch (P) {
                g(P);
              }
            }
            for (var m = 0; m < b.length; m++) C(m, b[m]);
          });
        }, l.resolve = function(f) {
          return f && typeof f == "object" && f.constructor === l ? f : new l(function(v) {
            v(f);
          });
        }, l.reject = function(f) {
          return new l(function(v, g) {
            g(f);
          });
        }, l.race = function(f) {
          return new l(function(v, g) {
            for (var b = 0, S = f.length; b < S; b++) f[b].then(v, g);
          });
        }, l._immediateFn = typeof a == "function" && function(f) {
          a(f);
        } || function(f) {
          s(f, 0);
        }, l._unhandledRejectionFn = function(f) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", f);
        }, i.a = l;
      }).call(this, r(5).setImmediate);
    }, function(e, i, r) {
      i.a = function(a) {
        var n = this.constructor;
        return this.then(function(s) {
          return n.resolve(a()).then(function() {
            return s;
          });
        }, function(s) {
          return n.resolve(a()).then(function() {
            return n.reject(s);
          });
        });
      };
    }, function(e, i, r) {
      function a(p) {
        return (a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
          return typeof f;
        } : function(f) {
          return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
        })(p);
      }
      r(4);
      var n, s, d, l, h, c, u, y = r(8), w = (s = function(p) {
        return new Promise(function(f, v) {
          p = l(p), (p = h(p)).beforeSend && p.beforeSend();
          var g = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          g.open(p.method, p.url), g.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(p.headers).forEach(function(S) {
            var C = p.headers[S];
            g.setRequestHeader(S, C);
          });
          var b = p.ratio;
          g.upload.addEventListener("progress", function(S) {
            var C = Math.round(S.loaded / S.total * 100), m = Math.ceil(C * b / 100);
            p.progress(Math.min(m, 100));
          }, !1), g.addEventListener("progress", function(S) {
            var C = Math.round(S.loaded / S.total * 100), m = Math.ceil(C * (100 - b) / 100) + b;
            p.progress(Math.min(m, 100));
          }, !1), g.onreadystatechange = function() {
            if (g.readyState === 4) {
              var S = g.response;
              try {
                S = JSON.parse(S);
              } catch {
              }
              var C = y.parseHeaders(g.getAllResponseHeaders()), m = { body: S, code: g.status, headers: C };
              u(g.status) ? f(m) : v(m);
            }
          }, g.send(p.data);
        });
      }, d = function(p) {
        return p.method = "POST", s(p);
      }, l = function() {
        var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (p.url && typeof p.url != "string") throw new Error("Url must be a string");
        if (p.url = p.url || "", p.method && typeof p.method != "string") throw new Error("`method` must be a string or null");
        if (p.method = p.method ? p.method.toUpperCase() : "GET", p.headers && a(p.headers) !== "object") throw new Error("`headers` must be an object or null");
        if (p.headers = p.headers || {}, p.type && (typeof p.type != "string" || !Object.values(n).includes(p.type))) throw new Error("`type` must be taken from module's «contentType» library");
        if (p.progress && typeof p.progress != "function") throw new Error("`progress` must be a function or null");
        if (p.progress = p.progress || function(f) {
        }, p.beforeSend = p.beforeSend || function(f) {
        }, p.ratio && typeof p.ratio != "number") throw new Error("`ratio` must be a number");
        if (p.ratio < 0 || p.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
        if (p.ratio = p.ratio || 90, p.accept && typeof p.accept != "string") throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (p.accept = p.accept || "*/*", p.multiple && typeof p.multiple != "boolean") throw new Error("`multiple` must be a true or false");
        if (p.multiple = p.multiple || !1, p.fieldName && typeof p.fieldName != "string") throw new Error("`fieldName` must be a string");
        return p.fieldName = p.fieldName || "files", p;
      }, h = function(p) {
        switch (p.method) {
          case "GET":
            var f = c(p.data, n.URLENCODED);
            delete p.data, p.url = /\?/.test(p.url) ? p.url + "&" + f : p.url + "?" + f;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var v = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || n.JSON;
            }(p);
            (y.isFormData(p.data) || y.isFormElement(p.data)) && (v = n.FORM), p.data = c(p.data, v), v !== w.contentType.FORM && (p.headers["content-type"] = v);
        }
        return p;
      }, c = function() {
        var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case n.URLENCODED:
            return y.urlEncode(p);
          case n.JSON:
            return y.jsonEncode(p);
          case n.FORM:
            return y.formEncode(p);
          default:
            return p;
        }
      }, u = function(p) {
        return p >= 200 && p < 300;
      }, { contentType: n = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: s, get: function(p) {
        return p.method = "GET", s(p);
      }, post: d, transport: function(p) {
        return p = l(p), y.selectFiles(p).then(function(f) {
          for (var v = new FormData(), g = 0; g < f.length; g++) v.append(p.fieldName, f[g], f[g].name);
          y.isObject(p.data) && Object.keys(p.data).forEach(function(S) {
            var C = p.data[S];
            v.append(S, C);
          });
          var b = p.beforeSend;
          return p.beforeSend = function() {
            return b(f);
          }, p.data = v, d(p);
        });
      }, selectFiles: function(p) {
        return delete (p = l(p)).beforeSend, y.selectFiles(p);
      } });
      e.exports = w;
    }, function(e, i, r) {
      r.r(i);
      var a = r(1);
      window.Promise = window.Promise || a.a;
    }, function(e, i, r) {
      (function(a) {
        var n = a !== void 0 && a || typeof self < "u" && self || window, s = Function.prototype.apply;
        function d(l, h) {
          this._id = l, this._clearFn = h;
        }
        i.setTimeout = function() {
          return new d(s.call(setTimeout, n, arguments), clearTimeout);
        }, i.setInterval = function() {
          return new d(s.call(setInterval, n, arguments), clearInterval);
        }, i.clearTimeout = i.clearInterval = function(l) {
          l && l.close();
        }, d.prototype.unref = d.prototype.ref = function() {
        }, d.prototype.close = function() {
          this._clearFn.call(n, this._id);
        }, i.enroll = function(l, h) {
          clearTimeout(l._idleTimeoutId), l._idleTimeout = h;
        }, i.unenroll = function(l) {
          clearTimeout(l._idleTimeoutId), l._idleTimeout = -1;
        }, i._unrefActive = i.active = function(l) {
          clearTimeout(l._idleTimeoutId);
          var h = l._idleTimeout;
          h >= 0 && (l._idleTimeoutId = setTimeout(function() {
            l._onTimeout && l._onTimeout();
          }, h));
        }, r(6), i.setImmediate = typeof self < "u" && self.setImmediate || a !== void 0 && a.setImmediate || this && this.setImmediate, i.clearImmediate = typeof self < "u" && self.clearImmediate || a !== void 0 && a.clearImmediate || this && this.clearImmediate;
      }).call(this, r(0));
    }, function(e, i, r) {
      (function(a, n) {
        (function(s, d) {
          if (!s.setImmediate) {
            var l, h, c, u, y, w = 1, p = {}, f = !1, v = s.document, g = Object.getPrototypeOf && Object.getPrototypeOf(s);
            g = g && g.setTimeout ? g : s, {}.toString.call(s.process) === "[object process]" ? l = function(C) {
              n.nextTick(function() {
                S(C);
              });
            } : function() {
              if (s.postMessage && !s.importScripts) {
                var C = !0, m = s.onmessage;
                return s.onmessage = function() {
                  C = !1;
                }, s.postMessage("", "*"), s.onmessage = m, C;
              }
            }() ? (u = "setImmediate$" + Math.random() + "$", y = function(C) {
              C.source === s && typeof C.data == "string" && C.data.indexOf(u) === 0 && S(+C.data.slice(u.length));
            }, s.addEventListener ? s.addEventListener("message", y, !1) : s.attachEvent("onmessage", y), l = function(C) {
              s.postMessage(u + C, "*");
            }) : s.MessageChannel ? ((c = new MessageChannel()).port1.onmessage = function(C) {
              S(C.data);
            }, l = function(C) {
              c.port2.postMessage(C);
            }) : v && "onreadystatechange" in v.createElement("script") ? (h = v.documentElement, l = function(C) {
              var m = v.createElement("script");
              m.onreadystatechange = function() {
                S(C), m.onreadystatechange = null, h.removeChild(m), m = null;
              }, h.appendChild(m);
            }) : l = function(C) {
              setTimeout(S, 0, C);
            }, g.setImmediate = function(C) {
              typeof C != "function" && (C = new Function("" + C));
              for (var m = new Array(arguments.length - 1), x = 0; x < m.length; x++) m[x] = arguments[x + 1];
              var E = { callback: C, args: m };
              return p[w] = E, l(w), w++;
            }, g.clearImmediate = b;
          }
          function b(C) {
            delete p[C];
          }
          function S(C) {
            if (f) setTimeout(S, 0, C);
            else {
              var m = p[C];
              if (m) {
                f = !0;
                try {
                  (function(x) {
                    var E = x.callback, M = x.args;
                    switch (M.length) {
                      case 0:
                        E();
                        break;
                      case 1:
                        E(M[0]);
                        break;
                      case 2:
                        E(M[0], M[1]);
                        break;
                      case 3:
                        E(M[0], M[1], M[2]);
                        break;
                      default:
                        E.apply(d, M);
                    }
                  })(m);
                } finally {
                  b(C), f = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? a === void 0 ? this : a : self);
      }).call(this, r(0), r(7));
    }, function(e, i) {
      var r, a, n = e.exports = {};
      function s() {
        throw new Error("setTimeout has not been defined");
      }
      function d() {
        throw new Error("clearTimeout has not been defined");
      }
      function l(g) {
        if (r === setTimeout) return setTimeout(g, 0);
        if ((r === s || !r) && setTimeout) return r = setTimeout, setTimeout(g, 0);
        try {
          return r(g, 0);
        } catch {
          try {
            return r.call(null, g, 0);
          } catch {
            return r.call(this, g, 0);
          }
        }
      }
      (function() {
        try {
          r = typeof setTimeout == "function" ? setTimeout : s;
        } catch {
          r = s;
        }
        try {
          a = typeof clearTimeout == "function" ? clearTimeout : d;
        } catch {
          a = d;
        }
      })();
      var h, c = [], u = !1, y = -1;
      function w() {
        u && h && (u = !1, h.length ? c = h.concat(c) : y = -1, c.length && p());
      }
      function p() {
        if (!u) {
          var g = l(w);
          u = !0;
          for (var b = c.length; b; ) {
            for (h = c, c = []; ++y < b; ) h && h[y].run();
            y = -1, b = c.length;
          }
          h = null, u = !1, function(S) {
            if (a === clearTimeout) return clearTimeout(S);
            if ((a === d || !a) && clearTimeout) return a = clearTimeout, clearTimeout(S);
            try {
              a(S);
            } catch {
              try {
                return a.call(null, S);
              } catch {
                return a.call(this, S);
              }
            }
          }(g);
        }
      }
      function f(g, b) {
        this.fun = g, this.array = b;
      }
      function v() {
      }
      n.nextTick = function(g) {
        var b = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var S = 1; S < arguments.length; S++) b[S - 1] = arguments[S];
        c.push(new f(g, b)), c.length !== 1 || u || l(p);
      }, f.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = v, n.addListener = v, n.once = v, n.off = v, n.removeListener = v, n.removeAllListeners = v, n.emit = v, n.prependListener = v, n.prependOnceListener = v, n.listeners = function(g) {
        return [];
      }, n.binding = function(g) {
        throw new Error("process.binding is not supported");
      }, n.cwd = function() {
        return "/";
      }, n.chdir = function(g) {
        throw new Error("process.chdir is not supported");
      }, n.umask = function() {
        return 0;
      };
    }, function(e, i, r) {
      function a(s, d) {
        for (var l = 0; l < d.length; l++) {
          var h = d[l];
          h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(s, h.key, h);
        }
      }
      var n = r(9);
      e.exports = function() {
        function s() {
          (function(c, u) {
            if (!(c instanceof u)) throw new TypeError("Cannot call a class as a function");
          })(this, s);
        }
        var d, l, h;
        return d = s, h = [{ key: "urlEncode", value: function(c) {
          return n(c);
        } }, { key: "jsonEncode", value: function(c) {
          return JSON.stringify(c);
        } }, { key: "formEncode", value: function(c) {
          if (this.isFormData(c)) return c;
          if (this.isFormElement(c)) return new FormData(c);
          if (this.isObject(c)) {
            var u = new FormData();
            return Object.keys(c).forEach(function(y) {
              var w = c[y];
              u.append(y, w);
            }), u;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(c) {
          return Object.prototype.toString.call(c) === "[object Object]";
        } }, { key: "isFormData", value: function(c) {
          return c instanceof FormData;
        } }, { key: "isFormElement", value: function(c) {
          return c instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(u, y) {
            var w = document.createElement("INPUT");
            w.type = "file", c.multiple && w.setAttribute("multiple", "multiple"), c.accept && w.setAttribute("accept", c.accept), w.style.display = "none", document.body.appendChild(w), w.addEventListener("change", function(p) {
              var f = p.target.files;
              u(f), document.body.removeChild(w);
            }, !1), w.click();
          });
        } }, { key: "parseHeaders", value: function(c) {
          var u = c.trim().split(/[\r\n]+/), y = {};
          return u.forEach(function(w) {
            var p = w.split(": "), f = p.shift(), v = p.join(": ");
            f && (y[f] = v);
          }), y;
        } }], (l = null) && a(d.prototype, l), h && a(d, h), s;
      }();
    }, function(e, i) {
      var r = function(n) {
        return encodeURIComponent(n).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, a = function(n, s, d, l) {
        return s = s || null, d = d || "&", l = l || null, n ? function(h) {
          for (var c = new Array(), u = 0; u < h.length; u++) h[u] && c.push(h[u]);
          return c;
        }(Object.keys(n).map(function(h) {
          var c, u, y = h;
          if (l && (y = l + "[" + y + "]"), typeof n[h] == "object" && n[h] !== null) c = a(n[h], null, d, y);
          else {
            s && (u = y, y = !isNaN(parseFloat(u)) && isFinite(u) ? s + Number(y) : y);
            var w = n[h];
            w = (w = (w = (w = w === !0 ? "1" : w) === !1 ? "0" : w) === 0 ? "0" : w) || "", c = r(y) + "=" + r(w);
          }
          return c;
        })).join(d).replace(/[!'()*]/g, "") : "";
      };
      e.exports = a;
    }]);
  });
})(ue);
var je = ue.exports;
const Q = /* @__PURE__ */ Ue(je);
function St(o) {
  return o !== void 0 && typeof o.then == "function";
}
class qt extends Error {
}
class Fe {
  constructor({ config: t, onUpload: e, onError: i }) {
    this.config = t, this.onUpload = e, this.onError = i;
  }
  /**
   * Upload file selected from device
   */
  uploadSelectedFile({ onPreview: t, onNonImageFile: e }) {
    var a;
    const i = (n) => {
      const s = new FileReader();
      s.readAsDataURL(n), s.onload = (d) => {
        t(d.target.result);
      }, s.onerror = () => {
        this.onError("Failed to read file");
      };
    };
    let r;
    if ((a = this.config.uploader) != null && a.uploadByFile)
      r = Q.selectFiles({ accept: this.config.types ?? "image/*" }).then((n) => {
        if (!n || n.length === 0)
          throw new Error("No file selected");
        if ((e == null ? void 0 : e(n[0])) === !0)
          throw new qt();
        i(n[0]);
        const s = this.config.uploader.uploadByFile(n[0]);
        return St(s) || console.warn("Custom uploader method uploadByFile should return a Promise"), s;
      });
    else {
      if (!this.config.endpoints.byFile) {
        this.onError("Upload endpoint (byFile) is not configured");
        return;
      }
      r = Q.transport({
        url: this.config.endpoints.byFile,
        data: this.config.additionalRequestData,
        accept: this.config.types ?? "image/*",
        headers: this.config.additionalRequestHeaders,
        beforeSend: (n) => {
          n && n.length > 0 && i(n[0]);
        },
        fieldName: this.config.field ?? "image"
      }).then((n) => n.body);
    }
    r.then((n) => this.onUpload(n)).catch((n) => {
      n instanceof qt || this.onError(n);
    });
  }
  /**
   * Upload image by URL
   */
  uploadByUrl(t) {
    var i;
    let e;
    if ((i = this.config.uploader) != null && i.uploadByUrl)
      e = this.config.uploader.uploadByUrl(t), St(e) || console.warn("Custom uploader method uploadByUrl should return a Promise");
    else {
      if (!this.config.endpoints.byUrl) {
        this.onError("Upload endpoint (byUrl) is not configured");
        return;
      }
      e = Q.post({
        url: this.config.endpoints.byUrl,
        data: {
          url: t,
          ...this.config.additionalRequestData
        },
        type: Q.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((r) => r.body);
    }
    e.then((r) => this.onUpload(r)).catch((r) => this.onError(r));
  }
  /**
   * Upload file from drag-n-drop or paste
   */
  uploadByFile(t, { onPreview: e }) {
    const i = new FileReader();
    i.onload = (r) => {
      var n;
      e(r.target.result);
      let a;
      if ((n = this.config.uploader) != null && n.uploadByFile)
        a = this.config.uploader.uploadByFile(t), St(a) || console.warn("Custom uploader method uploadByFile should return a Promise");
      else {
        if (!this.config.endpoints.byFile) {
          this.onError("Upload endpoint (byFile) is not configured");
          return;
        }
        const s = new FormData();
        s.append(this.config.field ?? "image", t), this.config.additionalRequestData && Object.entries(this.config.additionalRequestData).forEach(([d, l]) => {
          s.append(d, l);
        }), a = Q.post({
          url: this.config.endpoints.byFile,
          data: s,
          type: Q.contentType.JSON,
          headers: this.config.additionalRequestHeaders
        }).then((d) => d.body);
      }
      a.then((s) => this.onUpload(s)).catch((s) => this.onError(s));
    }, i.onerror = () => {
      this.onError("Failed to read file");
    }, i.readAsDataURL(t);
  }
}
/*!
 * Cropper.js v1.6.2
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-04-21T07:43:05.335Z
 */
function Gt(o, t) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(o);
    t && (i = i.filter(function(r) {
      return Object.getOwnPropertyDescriptor(o, r).enumerable;
    })), e.push.apply(e, i);
  }
  return e;
}
function pe(o) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gt(Object(e), !0).forEach(function(i) {
      $e(o, i, e[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : Gt(Object(e)).forEach(function(i) {
      Object.defineProperty(o, i, Object.getOwnPropertyDescriptor(e, i));
    });
  }
  return o;
}
function ze(o, t) {
  if (typeof o != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(o, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(o);
}
function fe(o) {
  var t = ze(o, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Mt(o) {
  "@babel/helpers - typeof";
  return Mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mt(o);
}
function We(o, t) {
  if (!(o instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vt(o, t) {
  for (var e = 0; e < t.length; e++) {
    var i = t[e];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(o, fe(i.key), i);
  }
}
function Xe(o, t, e) {
  return t && Vt(o.prototype, t), e && Vt(o, e), Object.defineProperty(o, "prototype", {
    writable: !1
  }), o;
}
function $e(o, t, e) {
  return t = fe(t), t in o ? Object.defineProperty(o, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : o[t] = e, o;
}
function me(o) {
  return Ye(o) || qe(o) || Ge(o) || Ve();
}
function Ye(o) {
  if (Array.isArray(o)) return _t(o);
}
function qe(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null) return Array.from(o);
}
function Ge(o, t) {
  if (o) {
    if (typeof o == "string") return _t(o, t);
    var e = Object.prototype.toString.call(o).slice(8, -1);
    if (e === "Object" && o.constructor && (e = o.constructor.name), e === "Map" || e === "Set") return Array.from(o);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return _t(o, t);
  }
}
function _t(o, t) {
  (t == null || t > o.length) && (t = o.length);
  for (var e = 0, i = new Array(t); e < t; e++) i[e] = o[e];
  return i;
}
function Ve() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var wt = typeof window < "u" && typeof window.document < "u", z = wt ? window : {}, Ht = wt && z.document.documentElement ? "ontouchstart" in z.document.documentElement : !1, Bt = wt ? "PointerEvent" in z : !1, _ = "cropper", Ut = "all", ge = "crop", ve = "move", ye = "zoom", J = "e", Z = "w", tt = "s", X = "n", st = "ne", lt = "nw", ht = "se", ct = "sw", Tt = "".concat(_, "-crop"), Jt = "".concat(_, "-disabled"), N = "".concat(_, "-hidden"), Zt = "".concat(_, "-hide"), Je = "".concat(_, "-invisible"), yt = "".concat(_, "-modal"), It = "".concat(_, "-move"), ut = "".concat(_, "Action"), mt = "".concat(_, "Preview"), jt = "crop", we = "move", be = "none", At = "crop", Lt = "cropend", Rt = "cropmove", kt = "cropstart", Kt = "dblclick", Ze = Ht ? "touchstart" : "mousedown", Ke = Ht ? "touchmove" : "mousemove", Qe = Ht ? "touchend touchcancel" : "mouseup", Qt = Bt ? "pointerdown" : Ze, te = Bt ? "pointermove" : Ke, ee = Bt ? "pointerup pointercancel" : Qe, ie = "ready", re = "resize", ae = "wheel", Nt = "zoom", ne = "image/jpeg", ti = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, ei = /^data:/, ii = /^data:image\/jpeg;base64,/, ri = /^img|canvas$/i, Ce = 200, Se = 100, oe = {
  // Define the view mode of the cropper
  viewMode: 0,
  // 0, 1, 2, 3
  // Define the dragging mode of the cropper
  dragMode: jt,
  // 'crop', 'move' or 'none'
  // Define the initial aspect ratio of the crop box
  initialAspectRatio: NaN,
  // Define the aspect ratio of the crop box
  aspectRatio: NaN,
  // An object with the previous cropping result data
  data: null,
  // A selector for adding extra containers to preview
  preview: "",
  // Re-render the cropper when resize the window
  responsive: !0,
  // Restore the cropped area after resize the window
  restore: !0,
  // Check if the current image is a cross-origin image
  checkCrossOrigin: !0,
  // Check the current image's Exif Orientation information
  checkOrientation: !0,
  // Show the black modal
  modal: !0,
  // Show the dashed lines for guiding
  guides: !0,
  // Show the center indicator for guiding
  center: !0,
  // Show the white modal to highlight the crop box
  highlight: !0,
  // Show the grid background
  background: !0,
  // Enable to crop the image automatically when initialize
  autoCrop: !0,
  // Define the percentage of automatic cropping area when initializes
  autoCropArea: 0.8,
  // Enable to move the image
  movable: !0,
  // Enable to rotate the image
  rotatable: !0,
  // Enable to scale the image
  scalable: !0,
  // Enable to zoom the image
  zoomable: !0,
  // Enable to zoom the image by dragging touch
  zoomOnTouch: !0,
  // Enable to zoom the image by wheeling mouse
  zoomOnWheel: !0,
  // Define zoom ratio when zoom the image by wheeling mouse
  wheelZoomRatio: 0.1,
  // Enable to move the crop box
  cropBoxMovable: !0,
  // Enable to resize the crop box
  cropBoxResizable: !0,
  // Toggle drag mode between "crop" and "move" when click twice on the cropper
  toggleDragModeOnDblclick: !0,
  // Size limitation
  minCanvasWidth: 0,
  minCanvasHeight: 0,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  minContainerWidth: Ce,
  minContainerHeight: Se,
  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
}, ai = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', ni = Number.isNaN || z.isNaN;
function O(o) {
  return typeof o == "number" && !ni(o);
}
var se = function(t) {
  return t > 0 && t < 1 / 0;
};
function xt(o) {
  return typeof o > "u";
}
function K(o) {
  return Mt(o) === "object" && o !== null;
}
var oi = Object.prototype.hasOwnProperty;
function et(o) {
  if (!K(o))
    return !1;
  try {
    var t = o.constructor, e = t.prototype;
    return t && e && oi.call(e, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function k(o) {
  return typeof o == "function";
}
var si = Array.prototype.slice;
function xe(o) {
  return Array.from ? Array.from(o) : si.call(o);
}
function I(o, t) {
  return o && k(t) && (Array.isArray(o) || O(o.length) ? xe(o).forEach(function(e, i) {
    t.call(o, e, i, o);
  }) : K(o) && Object.keys(o).forEach(function(e) {
    t.call(o, o[e], e, o);
  })), o;
}
var T = Object.assign || function(t) {
  for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    i[r - 1] = arguments[r];
  return K(t) && i.length > 0 && i.forEach(function(a) {
    K(a) && Object.keys(a).forEach(function(n) {
      t[n] = a[n];
    });
  }), t;
}, li = /\.\d*(?:0|9){12}\d*$/;
function rt(o) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return li.test(o) ? Math.round(o * t) / t : o;
}
var hi = /^width|height|left|top|marginLeft|marginTop$/;
function $(o, t) {
  var e = o.style;
  I(t, function(i, r) {
    hi.test(r) && O(i) && (i = "".concat(i, "px")), e[r] = i;
  });
}
function ci(o, t) {
  return o.classList ? o.classList.contains(t) : o.className.indexOf(t) > -1;
}
function A(o, t) {
  if (t) {
    if (O(o.length)) {
      I(o, function(i) {
        A(i, t);
      });
      return;
    }
    if (o.classList) {
      o.classList.add(t);
      return;
    }
    var e = o.className.trim();
    e ? e.indexOf(t) < 0 && (o.className = "".concat(e, " ").concat(t)) : o.className = t;
  }
}
function F(o, t) {
  if (t) {
    if (O(o.length)) {
      I(o, function(e) {
        F(e, t);
      });
      return;
    }
    if (o.classList) {
      o.classList.remove(t);
      return;
    }
    o.className.indexOf(t) >= 0 && (o.className = o.className.replace(t, ""));
  }
}
function it(o, t, e) {
  if (t) {
    if (O(o.length)) {
      I(o, function(i) {
        it(i, t, e);
      });
      return;
    }
    e ? A(o, t) : F(o, t);
  }
}
var di = /([a-z\d])([A-Z])/g;
function Ft(o) {
  return o.replace(di, "$1-$2").toLowerCase();
}
function Pt(o, t) {
  return K(o[t]) ? o[t] : o.dataset ? o.dataset[t] : o.getAttribute("data-".concat(Ft(t)));
}
function pt(o, t, e) {
  K(e) ? o[t] = e : o.dataset ? o.dataset[t] = e : o.setAttribute("data-".concat(Ft(t)), e);
}
function ui(o, t) {
  if (K(o[t]))
    try {
      delete o[t];
    } catch {
      o[t] = void 0;
    }
  else if (o.dataset)
    try {
      delete o.dataset[t];
    } catch {
      o.dataset[t] = void 0;
    }
  else
    o.removeAttribute("data-".concat(Ft(t)));
}
var Ee = /\s\s*/, Oe = function() {
  var o = !1;
  if (wt) {
    var t = !1, e = function() {
    }, i = Object.defineProperty({}, "once", {
      get: function() {
        return o = !0, t;
      },
      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function(a) {
        t = a;
      }
    });
    z.addEventListener("test", e, i), z.removeEventListener("test", e, i);
  }
  return o;
}();
function B(o, t, e) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, r = e;
  t.trim().split(Ee).forEach(function(a) {
    if (!Oe) {
      var n = o.listeners;
      n && n[a] && n[a][e] && (r = n[a][e], delete n[a][e], Object.keys(n[a]).length === 0 && delete n[a], Object.keys(n).length === 0 && delete o.listeners);
    }
    o.removeEventListener(a, r, i);
  });
}
function H(o, t, e) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, r = e;
  t.trim().split(Ee).forEach(function(a) {
    if (i.once && !Oe) {
      var n = o.listeners, s = n === void 0 ? {} : n;
      r = function() {
        delete s[a][e], o.removeEventListener(a, r, i);
        for (var l = arguments.length, h = new Array(l), c = 0; c < l; c++)
          h[c] = arguments[c];
        e.apply(o, h);
      }, s[a] || (s[a] = {}), s[a][e] && o.removeEventListener(a, s[a][e], i), s[a][e] = r, o.listeners = s;
    }
    o.addEventListener(a, r, i);
  });
}
function at(o, t, e) {
  var i;
  return k(Event) && k(CustomEvent) ? i = new CustomEvent(t, {
    detail: e,
    bubbles: !0,
    cancelable: !0
  }) : (i = document.createEvent("CustomEvent"), i.initCustomEvent(t, !0, !0, e)), o.dispatchEvent(i);
}
function De(o) {
  var t = o.getBoundingClientRect();
  return {
    left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: t.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var Et = z.location, pi = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function le(o) {
  var t = o.match(pi);
  return t !== null && (t[1] !== Et.protocol || t[2] !== Et.hostname || t[3] !== Et.port);
}
function he(o) {
  var t = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return o + (o.indexOf("?") === -1 ? "?" : "&") + t;
}
function dt(o) {
  var t = o.rotate, e = o.scaleX, i = o.scaleY, r = o.translateX, a = o.translateY, n = [];
  O(r) && r !== 0 && n.push("translateX(".concat(r, "px)")), O(a) && a !== 0 && n.push("translateY(".concat(a, "px)")), O(t) && t !== 0 && n.push("rotate(".concat(t, "deg)")), O(e) && e !== 1 && n.push("scaleX(".concat(e, ")")), O(i) && i !== 1 && n.push("scaleY(".concat(i, ")"));
  var s = n.length ? n.join(" ") : "none";
  return {
    WebkitTransform: s,
    msTransform: s,
    transform: s
  };
}
function fi(o) {
  var t = pe({}, o), e = 0;
  return I(o, function(i, r) {
    delete t[r], I(t, function(a) {
      var n = Math.abs(i.startX - a.startX), s = Math.abs(i.startY - a.startY), d = Math.abs(i.endX - a.endX), l = Math.abs(i.endY - a.endY), h = Math.sqrt(n * n + s * s), c = Math.sqrt(d * d + l * l), u = (c - h) / h;
      Math.abs(u) > Math.abs(e) && (e = u);
    });
  }), e;
}
function gt(o, t) {
  var e = o.pageX, i = o.pageY, r = {
    endX: e,
    endY: i
  };
  return t ? r : pe({
    startX: e,
    startY: i
  }, r);
}
function mi(o) {
  var t = 0, e = 0, i = 0;
  return I(o, function(r) {
    var a = r.startX, n = r.startY;
    t += a, e += n, i += 1;
  }), t /= i, e /= i, {
    pageX: t,
    pageY: e
  };
}
function Y(o) {
  var t = o.aspectRatio, e = o.height, i = o.width, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", a = se(i), n = se(e);
  if (a && n) {
    var s = e * t;
    r === "contain" && s > i || r === "cover" && s < i ? e = i / t : i = e * t;
  } else a ? e = i / t : n && (i = e * t);
  return {
    width: i,
    height: e
  };
}
function gi(o) {
  var t = o.width, e = o.height, i = o.degree;
  if (i = Math.abs(i) % 180, i === 90)
    return {
      width: e,
      height: t
    };
  var r = i % 90 * Math.PI / 180, a = Math.sin(r), n = Math.cos(r), s = t * n + e * a, d = t * a + e * n;
  return i > 90 ? {
    width: d,
    height: s
  } : {
    width: s,
    height: d
  };
}
function vi(o, t, e, i) {
  var r = t.aspectRatio, a = t.naturalWidth, n = t.naturalHeight, s = t.rotate, d = s === void 0 ? 0 : s, l = t.scaleX, h = l === void 0 ? 1 : l, c = t.scaleY, u = c === void 0 ? 1 : c, y = e.aspectRatio, w = e.naturalWidth, p = e.naturalHeight, f = i.fillColor, v = f === void 0 ? "transparent" : f, g = i.imageSmoothingEnabled, b = g === void 0 ? !0 : g, S = i.imageSmoothingQuality, C = S === void 0 ? "low" : S, m = i.maxWidth, x = m === void 0 ? 1 / 0 : m, E = i.maxHeight, M = E === void 0 ? 1 / 0 : E, P = i.minWidth, q = P === void 0 ? 0 : P, G = i.minHeight, W = G === void 0 ? 0 : G, j = document.createElement("canvas"), R = j.getContext("2d"), V = Y({
    aspectRatio: y,
    width: x,
    height: M
  }), ft = Y({
    aspectRatio: y,
    width: q,
    height: W
  }, "cover"), bt = Math.min(V.width, Math.max(ft.width, w)), Ct = Math.min(V.height, Math.max(ft.height, p)), zt = Y({
    aspectRatio: r,
    width: x,
    height: M
  }), Wt = Y({
    aspectRatio: r,
    width: q,
    height: W
  }, "cover"), Xt = Math.min(zt.width, Math.max(Wt.width, a)), $t = Math.min(zt.height, Math.max(Wt.height, n)), Te = [-Xt / 2, -$t / 2, Xt, $t];
  return j.width = rt(bt), j.height = rt(Ct), R.fillStyle = v, R.fillRect(0, 0, bt, Ct), R.save(), R.translate(bt / 2, Ct / 2), R.rotate(d * Math.PI / 180), R.scale(h, u), R.imageSmoothingEnabled = b, R.imageSmoothingQuality = C, R.drawImage.apply(R, [o].concat(me(Te.map(function(Ie) {
    return Math.floor(rt(Ie));
  })))), R.restore(), j;
}
var Me = String.fromCharCode;
function yi(o, t, e) {
  var i = "";
  e += t;
  for (var r = t; r < e; r += 1)
    i += Me(o.getUint8(r));
  return i;
}
var wi = /^data:.*,/;
function bi(o) {
  var t = o.replace(wi, ""), e = atob(t), i = new ArrayBuffer(e.length), r = new Uint8Array(i);
  return I(r, function(a, n) {
    r[n] = e.charCodeAt(n);
  }), i;
}
function Ci(o, t) {
  for (var e = [], i = 8192, r = new Uint8Array(o); r.length > 0; )
    e.push(Me.apply(null, xe(r.subarray(0, i)))), r = r.subarray(i);
  return "data:".concat(t, ";base64,").concat(btoa(e.join("")));
}
function Si(o) {
  var t = new DataView(o), e;
  try {
    var i, r, a;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var n = t.byteLength, s = 2; s + 1 < n; ) {
        if (t.getUint8(s) === 255 && t.getUint8(s + 1) === 225) {
          r = s;
          break;
        }
        s += 1;
      }
    if (r) {
      var d = r + 4, l = r + 10;
      if (yi(t, d, 4) === "Exif") {
        var h = t.getUint16(l);
        if (i = h === 18761, (i || h === 19789) && t.getUint16(l + 2, i) === 42) {
          var c = t.getUint32(l + 4, i);
          c >= 8 && (a = l + c);
        }
      }
    }
    if (a) {
      var u = t.getUint16(a, i), y, w;
      for (w = 0; w < u; w += 1)
        if (y = a + w * 12 + 2, t.getUint16(y, i) === 274) {
          y += 8, e = t.getUint16(y, i), t.setUint16(y, 1, i);
          break;
        }
    }
  } catch {
    e = 1;
  }
  return e;
}
function xi(o) {
  var t = 0, e = 1, i = 1;
  switch (o) {
    case 2:
      e = -1;
      break;
    case 3:
      t = -180;
      break;
    case 4:
      i = -1;
      break;
    case 5:
      t = 90, i = -1;
      break;
    case 6:
      t = 90;
      break;
    case 7:
      t = 90, e = -1;
      break;
    case 8:
      t = -90;
      break;
  }
  return {
    rotate: t,
    scaleX: e,
    scaleY: i
  };
}
var Ei = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var t = this.element, e = this.options, i = this.container, r = this.cropper, a = Number(e.minContainerWidth), n = Number(e.minContainerHeight);
    A(r, N), F(t, N);
    var s = {
      width: Math.max(i.offsetWidth, a >= 0 ? a : Ce),
      height: Math.max(i.offsetHeight, n >= 0 ? n : Se)
    };
    this.containerData = s, $(r, {
      width: s.width,
      height: s.height
    }), A(t, N), F(r, N);
  },
  // Canvas (image wrapper)
  initCanvas: function() {
    var t = this.containerData, e = this.imageData, i = this.options.viewMode, r = Math.abs(e.rotate) % 180 === 90, a = r ? e.naturalHeight : e.naturalWidth, n = r ? e.naturalWidth : e.naturalHeight, s = a / n, d = t.width, l = t.height;
    t.height * s > t.width ? i === 3 ? d = t.height * s : l = t.width / s : i === 3 ? l = t.width / s : d = t.height * s;
    var h = {
      aspectRatio: s,
      naturalWidth: a,
      naturalHeight: n,
      width: d,
      height: l
    };
    this.canvasData = h, this.limited = i === 1 || i === 2, this.limitCanvas(!0, !0), h.width = Math.min(Math.max(h.width, h.minWidth), h.maxWidth), h.height = Math.min(Math.max(h.height, h.minHeight), h.maxHeight), h.left = (t.width - h.width) / 2, h.top = (t.height - h.height) / 2, h.oldLeft = h.left, h.oldTop = h.top, this.initialCanvasData = T({}, h);
  },
  limitCanvas: function(t, e) {
    var i = this.options, r = this.containerData, a = this.canvasData, n = this.cropBoxData, s = i.viewMode, d = a.aspectRatio, l = this.cropped && n;
    if (t) {
      var h = Number(i.minCanvasWidth) || 0, c = Number(i.minCanvasHeight) || 0;
      s > 1 ? (h = Math.max(h, r.width), c = Math.max(c, r.height), s === 3 && (c * d > h ? h = c * d : c = h / d)) : s > 0 && (h ? h = Math.max(h, l ? n.width : 0) : c ? c = Math.max(c, l ? n.height : 0) : l && (h = n.width, c = n.height, c * d > h ? h = c * d : c = h / d));
      var u = Y({
        aspectRatio: d,
        width: h,
        height: c
      });
      h = u.width, c = u.height, a.minWidth = h, a.minHeight = c, a.maxWidth = 1 / 0, a.maxHeight = 1 / 0;
    }
    if (e)
      if (s > (l ? 0 : 1)) {
        var y = r.width - a.width, w = r.height - a.height;
        a.minLeft = Math.min(0, y), a.minTop = Math.min(0, w), a.maxLeft = Math.max(0, y), a.maxTop = Math.max(0, w), l && this.limited && (a.minLeft = Math.min(n.left, n.left + (n.width - a.width)), a.minTop = Math.min(n.top, n.top + (n.height - a.height)), a.maxLeft = n.left, a.maxTop = n.top, s === 2 && (a.width >= r.width && (a.minLeft = Math.min(0, y), a.maxLeft = Math.max(0, y)), a.height >= r.height && (a.minTop = Math.min(0, w), a.maxTop = Math.max(0, w))));
      } else
        a.minLeft = -a.width, a.minTop = -a.height, a.maxLeft = r.width, a.maxTop = r.height;
  },
  renderCanvas: function(t, e) {
    var i = this.canvasData, r = this.imageData;
    if (e) {
      var a = gi({
        width: r.naturalWidth * Math.abs(r.scaleX || 1),
        height: r.naturalHeight * Math.abs(r.scaleY || 1),
        degree: r.rotate || 0
      }), n = a.width, s = a.height, d = i.width * (n / i.naturalWidth), l = i.height * (s / i.naturalHeight);
      i.left -= (d - i.width) / 2, i.top -= (l - i.height) / 2, i.width = d, i.height = l, i.aspectRatio = n / s, i.naturalWidth = n, i.naturalHeight = s, this.limitCanvas(!0, !1);
    }
    (i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCanvas(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, $(this.canvas, T({
      width: i.width,
      height: i.height
    }, dt({
      translateX: i.left,
      translateY: i.top
    }))), this.renderImage(t), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(t) {
    var e = this.canvasData, i = this.imageData, r = i.naturalWidth * (e.width / e.naturalWidth), a = i.naturalHeight * (e.height / e.naturalHeight);
    T(i, {
      width: r,
      height: a,
      left: (e.width - r) / 2,
      top: (e.height - a) / 2
    }), $(this.image, T({
      width: i.width,
      height: i.height
    }, dt(T({
      translateX: i.left,
      translateY: i.top
    }, i)))), t && this.output();
  },
  initCropBox: function() {
    var t = this.options, e = this.canvasData, i = t.aspectRatio || t.initialAspectRatio, r = Number(t.autoCropArea) || 0.8, a = {
      width: e.width,
      height: e.height
    };
    i && (e.height * i > e.width ? a.height = a.width / i : a.width = a.height * i), this.cropBoxData = a, this.limitCropBox(!0, !0), a.width = Math.min(Math.max(a.width, a.minWidth), a.maxWidth), a.height = Math.min(Math.max(a.height, a.minHeight), a.maxHeight), a.width = Math.max(a.minWidth, a.width * r), a.height = Math.max(a.minHeight, a.height * r), a.left = e.left + (e.width - a.width) / 2, a.top = e.top + (e.height - a.height) / 2, a.oldLeft = a.left, a.oldTop = a.top, this.initialCropBoxData = T({}, a);
  },
  limitCropBox: function(t, e) {
    var i = this.options, r = this.containerData, a = this.canvasData, n = this.cropBoxData, s = this.limited, d = i.aspectRatio;
    if (t) {
      var l = Number(i.minCropBoxWidth) || 0, h = Number(i.minCropBoxHeight) || 0, c = s ? Math.min(r.width, a.width, a.width + a.left, r.width - a.left) : r.width, u = s ? Math.min(r.height, a.height, a.height + a.top, r.height - a.top) : r.height;
      l = Math.min(l, r.width), h = Math.min(h, r.height), d && (l && h ? h * d > l ? h = l / d : l = h * d : l ? h = l / d : h && (l = h * d), u * d > c ? u = c / d : c = u * d), n.minWidth = Math.min(l, c), n.minHeight = Math.min(h, u), n.maxWidth = c, n.maxHeight = u;
    }
    e && (s ? (n.minLeft = Math.max(0, a.left), n.minTop = Math.max(0, a.top), n.maxLeft = Math.min(r.width, a.left + a.width) - n.width, n.maxTop = Math.min(r.height, a.top + a.height) - n.height) : (n.minLeft = 0, n.minTop = 0, n.maxLeft = r.width - n.width, n.maxTop = r.height - n.height));
  },
  renderCropBox: function() {
    var t = this.options, e = this.containerData, i = this.cropBoxData;
    (i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCropBox(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, t.movable && t.cropBoxMovable && pt(this.face, ut, i.width >= e.width && i.height >= e.height ? ve : Ut), $(this.cropBox, T({
      width: i.width,
      height: i.height
    }, dt({
      translateX: i.left,
      translateY: i.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), at(this.element, At, this.getData());
  }
}, Oi = {
  initPreview: function() {
    var t = this.element, e = this.crossOrigin, i = this.options.preview, r = e ? this.crossOriginUrl : this.url, a = t.alt || "The image to preview", n = document.createElement("img");
    if (e && (n.crossOrigin = e), n.src = r, n.alt = a, this.viewBox.appendChild(n), this.viewBoxImage = n, !!i) {
      var s = i;
      typeof i == "string" ? s = t.ownerDocument.querySelectorAll(i) : i.querySelector && (s = [i]), this.previews = s, I(s, function(d) {
        var l = document.createElement("img");
        pt(d, mt, {
          width: d.offsetWidth,
          height: d.offsetHeight,
          html: d.innerHTML
        }), e && (l.crossOrigin = e), l.src = r, l.alt = a, l.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', d.innerHTML = "", d.appendChild(l);
      });
    }
  },
  resetPreview: function() {
    I(this.previews, function(t) {
      var e = Pt(t, mt);
      $(t, {
        width: e.width,
        height: e.height
      }), t.innerHTML = e.html, ui(t, mt);
    });
  },
  preview: function() {
    var t = this.imageData, e = this.canvasData, i = this.cropBoxData, r = i.width, a = i.height, n = t.width, s = t.height, d = i.left - e.left - t.left, l = i.top - e.top - t.top;
    !this.cropped || this.disabled || ($(this.viewBoxImage, T({
      width: n,
      height: s
    }, dt(T({
      translateX: -d,
      translateY: -l
    }, t)))), I(this.previews, function(h) {
      var c = Pt(h, mt), u = c.width, y = c.height, w = u, p = y, f = 1;
      r && (f = u / r, p = a * f), a && p > y && (f = y / a, w = r * f, p = y), $(h, {
        width: w,
        height: p
      }), $(h.getElementsByTagName("img")[0], T({
        width: n * f,
        height: s * f
      }, dt(T({
        translateX: -d * f,
        translateY: -l * f
      }, t))));
    }));
  }
}, Di = {
  bind: function() {
    var t = this.element, e = this.options, i = this.cropper;
    k(e.cropstart) && H(t, kt, e.cropstart), k(e.cropmove) && H(t, Rt, e.cropmove), k(e.cropend) && H(t, Lt, e.cropend), k(e.crop) && H(t, At, e.crop), k(e.zoom) && H(t, Nt, e.zoom), H(i, Qt, this.onCropStart = this.cropStart.bind(this)), e.zoomable && e.zoomOnWheel && H(i, ae, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), e.toggleDragModeOnDblclick && H(i, Kt, this.onDblclick = this.dblclick.bind(this)), H(t.ownerDocument, te, this.onCropMove = this.cropMove.bind(this)), H(t.ownerDocument, ee, this.onCropEnd = this.cropEnd.bind(this)), e.responsive && H(window, re, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var t = this.element, e = this.options, i = this.cropper;
    k(e.cropstart) && B(t, kt, e.cropstart), k(e.cropmove) && B(t, Rt, e.cropmove), k(e.cropend) && B(t, Lt, e.cropend), k(e.crop) && B(t, At, e.crop), k(e.zoom) && B(t, Nt, e.zoom), B(i, Qt, this.onCropStart), e.zoomable && e.zoomOnWheel && B(i, ae, this.onWheel, {
      passive: !1,
      capture: !0
    }), e.toggleDragModeOnDblclick && B(i, Kt, this.onDblclick), B(t.ownerDocument, te, this.onCropMove), B(t.ownerDocument, ee, this.onCropEnd), e.responsive && B(window, re, this.onResize);
  }
}, Mi = {
  resize: function() {
    if (!this.disabled) {
      var t = this.options, e = this.container, i = this.containerData, r = e.offsetWidth / i.width, a = e.offsetHeight / i.height, n = Math.abs(r - 1) > Math.abs(a - 1) ? r : a;
      if (n !== 1) {
        var s, d;
        t.restore && (s = this.getCanvasData(), d = this.getCropBoxData()), this.render(), t.restore && (this.setCanvasData(I(s, function(l, h) {
          s[h] = l * n;
        })), this.setCropBoxData(I(d, function(l, h) {
          d[h] = l * n;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === be || this.setDragMode(ci(this.dragBox, Tt) ? we : jt);
  },
  wheel: function(t) {
    var e = this, i = Number(this.options.wheelZoomRatio) || 0.1, r = 1;
    this.disabled || (t.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      e.wheeling = !1;
    }, 50), t.deltaY ? r = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? r = -t.wheelDelta / 120 : t.detail && (r = t.detail > 0 ? 1 : -1), this.zoom(-r * i, t)));
  },
  cropStart: function(t) {
    var e = t.buttons, i = t.button;
    if (!(this.disabled || (t.type === "mousedown" || t.type === "pointerdown" && t.pointerType === "mouse") && // No primary button (Usually the left button)
    (O(e) && e !== 1 || O(i) && i !== 0 || t.ctrlKey))) {
      var r = this.options, a = this.pointers, n;
      t.changedTouches ? I(t.changedTouches, function(s) {
        a[s.identifier] = gt(s);
      }) : a[t.pointerId || 0] = gt(t), Object.keys(a).length > 1 && r.zoomable && r.zoomOnTouch ? n = ye : n = Pt(t.target, ut), ti.test(n) && at(this.element, kt, {
        originalEvent: t,
        action: n
      }) !== !1 && (t.preventDefault(), this.action = n, this.cropping = !1, n === ge && (this.cropping = !0, A(this.dragBox, yt)));
    }
  },
  cropMove: function(t) {
    var e = this.action;
    if (!(this.disabled || !e)) {
      var i = this.pointers;
      t.preventDefault(), at(this.element, Rt, {
        originalEvent: t,
        action: e
      }) !== !1 && (t.changedTouches ? I(t.changedTouches, function(r) {
        T(i[r.identifier] || {}, gt(r, !0));
      }) : T(i[t.pointerId || 0] || {}, gt(t, !0)), this.change(t));
    }
  },
  cropEnd: function(t) {
    if (!this.disabled) {
      var e = this.action, i = this.pointers;
      t.changedTouches ? I(t.changedTouches, function(r) {
        delete i[r.identifier];
      }) : delete i[t.pointerId || 0], e && (t.preventDefault(), Object.keys(i).length || (this.action = ""), this.cropping && (this.cropping = !1, it(this.dragBox, yt, this.cropped && this.options.modal)), at(this.element, Lt, {
        originalEvent: t,
        action: e
      }));
    }
  }
}, _i = {
  change: function(t) {
    var e = this.options, i = this.canvasData, r = this.containerData, a = this.cropBoxData, n = this.pointers, s = this.action, d = e.aspectRatio, l = a.left, h = a.top, c = a.width, u = a.height, y = l + c, w = h + u, p = 0, f = 0, v = r.width, g = r.height, b = !0, S;
    !d && t.shiftKey && (d = c && u ? c / u : 1), this.limited && (p = a.minLeft, f = a.minTop, v = p + Math.min(r.width, i.width, i.left + i.width), g = f + Math.min(r.height, i.height, i.top + i.height));
    var C = n[Object.keys(n)[0]], m = {
      x: C.endX - C.startX,
      y: C.endY - C.startY
    }, x = function(M) {
      switch (M) {
        case J:
          y + m.x > v && (m.x = v - y);
          break;
        case Z:
          l + m.x < p && (m.x = p - l);
          break;
        case X:
          h + m.y < f && (m.y = f - h);
          break;
        case tt:
          w + m.y > g && (m.y = g - w);
          break;
      }
    };
    switch (s) {
      case Ut:
        l += m.x, h += m.y;
        break;
      case J:
        if (m.x >= 0 && (y >= v || d && (h <= f || w >= g))) {
          b = !1;
          break;
        }
        x(J), c += m.x, c < 0 && (s = Z, c = -c, l -= c), d && (u = c / d, h += (a.height - u) / 2);
        break;
      case X:
        if (m.y <= 0 && (h <= f || d && (l <= p || y >= v))) {
          b = !1;
          break;
        }
        x(X), u -= m.y, h += m.y, u < 0 && (s = tt, u = -u, h -= u), d && (c = u * d, l += (a.width - c) / 2);
        break;
      case Z:
        if (m.x <= 0 && (l <= p || d && (h <= f || w >= g))) {
          b = !1;
          break;
        }
        x(Z), c -= m.x, l += m.x, c < 0 && (s = J, c = -c, l -= c), d && (u = c / d, h += (a.height - u) / 2);
        break;
      case tt:
        if (m.y >= 0 && (w >= g || d && (l <= p || y >= v))) {
          b = !1;
          break;
        }
        x(tt), u += m.y, u < 0 && (s = X, u = -u, h -= u), d && (c = u * d, l += (a.width - c) / 2);
        break;
      case st:
        if (d) {
          if (m.y <= 0 && (h <= f || y >= v)) {
            b = !1;
            break;
          }
          x(X), u -= m.y, h += m.y, c = u * d;
        } else
          x(X), x(J), m.x >= 0 ? y < v ? c += m.x : m.y <= 0 && h <= f && (b = !1) : c += m.x, m.y <= 0 ? h > f && (u -= m.y, h += m.y) : (u -= m.y, h += m.y);
        c < 0 && u < 0 ? (s = ct, u = -u, c = -c, h -= u, l -= c) : c < 0 ? (s = lt, c = -c, l -= c) : u < 0 && (s = ht, u = -u, h -= u);
        break;
      case lt:
        if (d) {
          if (m.y <= 0 && (h <= f || l <= p)) {
            b = !1;
            break;
          }
          x(X), u -= m.y, h += m.y, c = u * d, l += a.width - c;
        } else
          x(X), x(Z), m.x <= 0 ? l > p ? (c -= m.x, l += m.x) : m.y <= 0 && h <= f && (b = !1) : (c -= m.x, l += m.x), m.y <= 0 ? h > f && (u -= m.y, h += m.y) : (u -= m.y, h += m.y);
        c < 0 && u < 0 ? (s = ht, u = -u, c = -c, h -= u, l -= c) : c < 0 ? (s = st, c = -c, l -= c) : u < 0 && (s = ct, u = -u, h -= u);
        break;
      case ct:
        if (d) {
          if (m.x <= 0 && (l <= p || w >= g)) {
            b = !1;
            break;
          }
          x(Z), c -= m.x, l += m.x, u = c / d;
        } else
          x(tt), x(Z), m.x <= 0 ? l > p ? (c -= m.x, l += m.x) : m.y >= 0 && w >= g && (b = !1) : (c -= m.x, l += m.x), m.y >= 0 ? w < g && (u += m.y) : u += m.y;
        c < 0 && u < 0 ? (s = st, u = -u, c = -c, h -= u, l -= c) : c < 0 ? (s = ht, c = -c, l -= c) : u < 0 && (s = lt, u = -u, h -= u);
        break;
      case ht:
        if (d) {
          if (m.x >= 0 && (y >= v || w >= g)) {
            b = !1;
            break;
          }
          x(J), c += m.x, u = c / d;
        } else
          x(tt), x(J), m.x >= 0 ? y < v ? c += m.x : m.y >= 0 && w >= g && (b = !1) : c += m.x, m.y >= 0 ? w < g && (u += m.y) : u += m.y;
        c < 0 && u < 0 ? (s = lt, u = -u, c = -c, h -= u, l -= c) : c < 0 ? (s = ct, c = -c, l -= c) : u < 0 && (s = st, u = -u, h -= u);
        break;
      case ve:
        this.move(m.x, m.y), b = !1;
        break;
      case ye:
        this.zoom(fi(n), t), b = !1;
        break;
      case ge:
        if (!m.x || !m.y) {
          b = !1;
          break;
        }
        S = De(this.cropper), l = C.startX - S.left, h = C.startY - S.top, c = a.minWidth, u = a.minHeight, m.x > 0 ? s = m.y > 0 ? ht : st : m.x < 0 && (l -= c, s = m.y > 0 ? ct : lt), m.y < 0 && (h -= u), this.cropped || (F(this.cropBox, N), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    b && (a.width = c, a.height = u, a.left = l, a.top = h, this.action = s, this.renderCropBox()), I(n, function(E) {
      E.startX = E.endX, E.startY = E.endY;
    });
  }
}, Ti = {
  // Show the crop box manually
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && A(this.dragBox, yt), F(this.cropBox, N), this.setCropBoxData(this.initialCropBoxData)), this;
  },
  // Reset the image and crop box to their initial states
  reset: function() {
    return this.ready && !this.disabled && (this.imageData = T({}, this.initialImageData), this.canvasData = T({}, this.initialCanvasData), this.cropBoxData = T({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this;
  },
  // Clear the crop box
  clear: function() {
    return this.cropped && !this.disabled && (T(this.cropBoxData, {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), F(this.dragBox, yt), A(this.cropBox, N)), this;
  },
  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && t && (this.isImg && (this.element.src = t), e ? (this.url = t, this.image.src = t, this.ready && (this.viewBoxImage.src = t, I(this.previews, function(i) {
      i.getElementsByTagName("img")[0].src = t;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(t))), this;
  },
  // Enable (unfreeze) the cropper
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, F(this.cropper, Jt)), this;
  },
  // Disable (freeze) the cropper
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, A(this.cropper, Jt)), this;
  },
  /**
   * Destroy the cropper and remove the instance from the image
   * @returns {Cropper} this
   */
  destroy: function() {
    var t = this.element;
    return t[_] ? (t[_] = void 0, this.isImg && this.replaced && (t.src = this.originalUrl), this.uncreate(), this) : this;
  },
  /**
   * Move the canvas with relative offsets
   * @param {number} offsetX - The relative offset distance on the x-axis.
   * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
   * @returns {Cropper} this
   */
  move: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, i = this.canvasData, r = i.left, a = i.top;
    return this.moveTo(xt(t) ? t : r + Number(t), xt(e) ? e : a + Number(e));
  },
  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, i = this.canvasData, r = !1;
    return t = Number(t), e = Number(e), this.ready && !this.disabled && this.options.movable && (O(t) && (i.left = t, r = !0), O(e) && (i.top = e, r = !0), r && this.renderCanvas(!0)), this;
  },
  /**
   * Zoom the canvas with a relative ratio
   * @param {number} ratio - The target ratio.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoom: function(t, e) {
    var i = this.canvasData;
    return t = Number(t), t < 0 ? t = 1 / (1 - t) : t = 1 + t, this.zoomTo(i.width * t / i.naturalWidth, null, e);
  },
  /**
   * Zoom the canvas to an absolute ratio
   * @param {number} ratio - The target ratio.
   * @param {Object} pivot - The zoom pivot point coordinate.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoomTo: function(t, e, i) {
    var r = this.options, a = this.canvasData, n = a.width, s = a.height, d = a.naturalWidth, l = a.naturalHeight;
    if (t = Number(t), t >= 0 && this.ready && !this.disabled && r.zoomable) {
      var h = d * t, c = l * t;
      if (at(this.element, Nt, {
        ratio: t,
        oldRatio: n / d,
        originalEvent: i
      }) === !1)
        return this;
      if (i) {
        var u = this.pointers, y = De(this.cropper), w = u && Object.keys(u).length ? mi(u) : {
          pageX: i.pageX,
          pageY: i.pageY
        };
        a.left -= (h - n) * ((w.pageX - y.left - a.left) / n), a.top -= (c - s) * ((w.pageY - y.top - a.top) / s);
      } else et(e) && O(e.x) && O(e.y) ? (a.left -= (h - n) * ((e.x - a.left) / n), a.top -= (c - s) * ((e.y - a.top) / s)) : (a.left -= (h - n) / 2, a.top -= (c - s) / 2);
      a.width = h, a.height = c, this.renderCanvas(!0);
    }
    return this;
  },
  /**
   * Rotate the canvas with a relative degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotate: function(t) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(t));
  },
  /**
   * Rotate the canvas to an absolute degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotateTo: function(t) {
    return t = Number(t), O(t) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = t % 360, this.renderCanvas(!0, !0)), this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Cropper} this
   */
  scaleX: function(t) {
    var e = this.imageData.scaleY;
    return this.scale(t, O(e) ? e : 1);
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scaleY: function(t) {
    var e = this.imageData.scaleX;
    return this.scale(O(e) ? e : 1, t);
  },
  /**
   * Scale the image
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scale: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, i = this.imageData, r = !1;
    return t = Number(t), e = Number(e), this.ready && !this.disabled && this.options.scalable && (O(t) && (i.scaleX = t, r = !0), O(e) && (i.scaleY = e, r = !0), r && this.renderCanvas(!0, !0)), this;
  },
  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.options, i = this.imageData, r = this.canvasData, a = this.cropBoxData, n;
    if (this.ready && this.cropped) {
      n = {
        x: a.left - r.left,
        y: a.top - r.top,
        width: a.width,
        height: a.height
      };
      var s = i.width / i.naturalWidth;
      if (I(n, function(h, c) {
        n[c] = h / s;
      }), t) {
        var d = Math.round(n.y + n.height), l = Math.round(n.x + n.width);
        n.x = Math.round(n.x), n.y = Math.round(n.y), n.width = l - n.x, n.height = d - n.y;
      }
    } else
      n = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    return e.rotatable && (n.rotate = i.rotate || 0), e.scalable && (n.scaleX = i.scaleX || 1, n.scaleY = i.scaleY || 1), n;
  },
  /**
   * Set the cropped area position and size with new data
   * @param {Object} data - The new data.
   * @returns {Cropper} this
   */
  setData: function(t) {
    var e = this.options, i = this.imageData, r = this.canvasData, a = {};
    if (this.ready && !this.disabled && et(t)) {
      var n = !1;
      e.rotatable && O(t.rotate) && t.rotate !== i.rotate && (i.rotate = t.rotate, n = !0), e.scalable && (O(t.scaleX) && t.scaleX !== i.scaleX && (i.scaleX = t.scaleX, n = !0), O(t.scaleY) && t.scaleY !== i.scaleY && (i.scaleY = t.scaleY, n = !0)), n && this.renderCanvas(!0, !0);
      var s = i.width / i.naturalWidth;
      O(t.x) && (a.left = t.x * s + r.left), O(t.y) && (a.top = t.y * s + r.top), O(t.width) && (a.width = t.width * s), O(t.height) && (a.height = t.height * s), this.setCropBoxData(a);
    }
    return this;
  },
  /**
   * Get the container size data.
   * @returns {Object} The result container data.
   */
  getContainerData: function() {
    return this.ready ? T({}, this.containerData) : {};
  },
  /**
   * Get the image position and size data.
   * @returns {Object} The result image data.
   */
  getImageData: function() {
    return this.sized ? T({}, this.imageData) : {};
  },
  /**
   * Get the canvas position and size data.
   * @returns {Object} The result canvas data.
   */
  getCanvasData: function() {
    var t = this.canvasData, e = {};
    return this.ready && I(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(i) {
      e[i] = t[i];
    }), e;
  },
  /**
   * Set the canvas position and size with new data.
   * @param {Object} data - The new canvas data.
   * @returns {Cropper} this
   */
  setCanvasData: function(t) {
    var e = this.canvasData, i = e.aspectRatio;
    return this.ready && !this.disabled && et(t) && (O(t.left) && (e.left = t.left), O(t.top) && (e.top = t.top), O(t.width) ? (e.width = t.width, e.height = t.width / i) : O(t.height) && (e.height = t.height, e.width = t.height * i), this.renderCanvas(!0)), this;
  },
  /**
   * Get the crop box position and size data.
   * @returns {Object} The result crop box data.
   */
  getCropBoxData: function() {
    var t = this.cropBoxData, e;
    return this.ready && this.cropped && (e = {
      left: t.left,
      top: t.top,
      width: t.width,
      height: t.height
    }), e || {};
  },
  /**
   * Set the crop box position and size with new data.
   * @param {Object} data - The new crop box data.
   * @returns {Cropper} this
   */
  setCropBoxData: function(t) {
    var e = this.cropBoxData, i = this.options.aspectRatio, r, a;
    return this.ready && this.cropped && !this.disabled && et(t) && (O(t.left) && (e.left = t.left), O(t.top) && (e.top = t.top), O(t.width) && t.width !== e.width && (r = !0, e.width = t.width), O(t.height) && t.height !== e.height && (a = !0, e.height = t.height), i && (r ? e.height = e.width / i : a && (e.width = e.height * i)), this.renderCropBox()), this;
  },
  /**
   * Get a canvas drawn the cropped image.
   * @param {Object} [options={}] - The config options.
   * @returns {HTMLCanvasElement} - The result canvas.
   */
  getCroppedCanvas: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.ready || !window.HTMLCanvasElement)
      return null;
    var e = this.canvasData, i = vi(this.image, this.imageData, e, t);
    if (!this.cropped)
      return i;
    var r = this.getData(t.rounded), a = r.x, n = r.y, s = r.width, d = r.height, l = i.width / Math.floor(e.naturalWidth);
    l !== 1 && (a *= l, n *= l, s *= l, d *= l);
    var h = s / d, c = Y({
      aspectRatio: h,
      width: t.maxWidth || 1 / 0,
      height: t.maxHeight || 1 / 0
    }), u = Y({
      aspectRatio: h,
      width: t.minWidth || 0,
      height: t.minHeight || 0
    }, "cover"), y = Y({
      aspectRatio: h,
      width: t.width || (l !== 1 ? i.width : s),
      height: t.height || (l !== 1 ? i.height : d)
    }), w = y.width, p = y.height;
    w = Math.min(c.width, Math.max(u.width, w)), p = Math.min(c.height, Math.max(u.height, p));
    var f = document.createElement("canvas"), v = f.getContext("2d");
    f.width = rt(w), f.height = rt(p), v.fillStyle = t.fillColor || "transparent", v.fillRect(0, 0, w, p);
    var g = t.imageSmoothingEnabled, b = g === void 0 ? !0 : g, S = t.imageSmoothingQuality;
    v.imageSmoothingEnabled = b, S && (v.imageSmoothingQuality = S);
    var C = i.width, m = i.height, x = a, E = n, M, P, q, G, W, j;
    x <= -s || x > C ? (x = 0, M = 0, q = 0, W = 0) : x <= 0 ? (q = -x, x = 0, M = Math.min(C, s + x), W = M) : x <= C && (q = 0, M = Math.min(s, C - x), W = M), M <= 0 || E <= -d || E > m ? (E = 0, P = 0, G = 0, j = 0) : E <= 0 ? (G = -E, E = 0, P = Math.min(m, d + E), j = P) : E <= m && (G = 0, P = Math.min(d, m - E), j = P);
    var R = [x, E, M, P];
    if (W > 0 && j > 0) {
      var V = w / s;
      R.push(q * V, G * V, W * V, j * V);
    }
    return v.drawImage.apply(v, [i].concat(me(R.map(function(ft) {
      return Math.floor(rt(ft));
    })))), f;
  },
  /**
   * Change the aspect ratio of the crop box.
   * @param {number} aspectRatio - The new aspect ratio.
   * @returns {Cropper} this
   */
  setAspectRatio: function(t) {
    var e = this.options;
    return !this.disabled && !xt(t) && (e.aspectRatio = Math.max(0, t) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  /**
   * Change the drag mode.
   * @param {string} mode - The new drag mode.
   * @returns {Cropper} this
   */
  setDragMode: function(t) {
    var e = this.options, i = this.dragBox, r = this.face;
    if (this.ready && !this.disabled) {
      var a = t === jt, n = e.movable && t === we;
      t = a || n ? t : be, e.dragMode = t, pt(i, ut, t), it(i, Tt, a), it(i, It, n), e.cropBoxMovable || (pt(r, ut, t), it(r, Tt, a), it(r, It, n));
    }
    return this;
  }
}, Ii = z.Cropper, _e = /* @__PURE__ */ function() {
  function o(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (We(this, o), !t || !ri.test(t.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = t, this.options = T({}, oe, et(e) && e), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return Xe(o, [{
    key: "init",
    value: function() {
      var e = this.element, i = e.tagName.toLowerCase(), r;
      if (!e[_]) {
        if (e[_] = this, i === "img") {
          if (this.isImg = !0, r = e.getAttribute("src") || "", this.originalUrl = r, !r)
            return;
          r = e.src;
        } else i === "canvas" && window.HTMLCanvasElement && (r = e.toDataURL());
        this.load(r);
      }
    }
  }, {
    key: "load",
    value: function(e) {
      var i = this;
      if (e) {
        this.url = e, this.imageData = {};
        var r = this.element, a = this.options;
        if (!a.rotatable && !a.scalable && (a.checkOrientation = !1), !a.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (ei.test(e)) {
          ii.test(e) ? this.read(bi(e)) : this.clone();
          return;
        }
        var n = new XMLHttpRequest(), s = this.clone.bind(this);
        this.reloading = !0, this.xhr = n, n.onabort = s, n.onerror = s, n.ontimeout = s, n.onprogress = function() {
          n.getResponseHeader("content-type") !== ne && n.abort();
        }, n.onload = function() {
          i.read(n.response);
        }, n.onloadend = function() {
          i.reloading = !1, i.xhr = null;
        }, a.checkCrossOrigin && le(e) && r.crossOrigin && (e = he(e)), n.open("GET", e, !0), n.responseType = "arraybuffer", n.withCredentials = r.crossOrigin === "use-credentials", n.send();
      }
    }
  }, {
    key: "read",
    value: function(e) {
      var i = this.options, r = this.imageData, a = Si(e), n = 0, s = 1, d = 1;
      if (a > 1) {
        this.url = Ci(e, ne);
        var l = xi(a);
        n = l.rotate, s = l.scaleX, d = l.scaleY;
      }
      i.rotatable && (r.rotate = n), i.scalable && (r.scaleX = s, r.scaleY = d), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var e = this.element, i = this.url, r = e.crossOrigin, a = i;
      this.options.checkCrossOrigin && le(i) && (r || (r = "anonymous"), a = he(i)), this.crossOrigin = r, this.crossOriginUrl = a;
      var n = document.createElement("img");
      r && (n.crossOrigin = r), n.src = a || i, n.alt = e.alt || "The image to crop", this.image = n, n.onload = this.start.bind(this), n.onerror = this.stop.bind(this), A(n, Zt), e.parentNode.insertBefore(n, e.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var e = this, i = this.image;
      i.onload = null, i.onerror = null, this.sizing = !0;
      var r = z.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(z.navigator.userAgent), a = function(l, h) {
        T(e.imageData, {
          naturalWidth: l,
          naturalHeight: h,
          aspectRatio: l / h
        }), e.initialImageData = T({}, e.imageData), e.sizing = !1, e.sized = !0, e.build();
      };
      if (i.naturalWidth && !r) {
        a(i.naturalWidth, i.naturalHeight);
        return;
      }
      var n = document.createElement("img"), s = document.body || document.documentElement;
      this.sizingImage = n, n.onload = function() {
        a(n.width, n.height), r || s.removeChild(n);
      }, n.src = i.src, r || (n.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", s.appendChild(n));
    }
  }, {
    key: "stop",
    value: function() {
      var e = this.image;
      e.onload = null, e.onerror = null, e.parentNode.removeChild(e), this.image = null;
    }
  }, {
    key: "build",
    value: function() {
      if (!(!this.sized || this.ready)) {
        var e = this.element, i = this.options, r = this.image, a = e.parentNode, n = document.createElement("div");
        n.innerHTML = ai;
        var s = n.querySelector(".".concat(_, "-container")), d = s.querySelector(".".concat(_, "-canvas")), l = s.querySelector(".".concat(_, "-drag-box")), h = s.querySelector(".".concat(_, "-crop-box")), c = h.querySelector(".".concat(_, "-face"));
        this.container = a, this.cropper = s, this.canvas = d, this.dragBox = l, this.cropBox = h, this.viewBox = s.querySelector(".".concat(_, "-view-box")), this.face = c, d.appendChild(r), A(e, N), a.insertBefore(s, e.nextSibling), F(r, Zt), this.initPreview(), this.bind(), i.initialAspectRatio = Math.max(0, i.initialAspectRatio) || NaN, i.aspectRatio = Math.max(0, i.aspectRatio) || NaN, i.viewMode = Math.max(0, Math.min(3, Math.round(i.viewMode))) || 0, A(h, N), i.guides || A(h.getElementsByClassName("".concat(_, "-dashed")), N), i.center || A(h.getElementsByClassName("".concat(_, "-center")), N), i.background && A(s, "".concat(_, "-bg")), i.highlight || A(c, Je), i.cropBoxMovable && (A(c, It), pt(c, ut, Ut)), i.cropBoxResizable || (A(h.getElementsByClassName("".concat(_, "-line")), N), A(h.getElementsByClassName("".concat(_, "-point")), N)), this.render(), this.ready = !0, this.setDragMode(i.dragMode), i.autoCrop && this.crop(), this.setData(i.data), k(i.ready) && H(e, ie, i.ready, {
          once: !0
        }), at(e, ie);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      if (this.ready) {
        this.ready = !1, this.unbind(), this.resetPreview();
        var e = this.cropper.parentNode;
        e && e.removeChild(this.cropper), F(this.element, N);
      }
    }
  }, {
    key: "uncreate",
    value: function() {
      this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop();
    }
    /**
     * Get the no conflict cropper class.
     * @returns {Cropper} The cropper class.
     */
  }], [{
    key: "noConflict",
    value: function() {
      return window.Cropper = Ii, o;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(e) {
      T(oe, et(e) && e);
    }
  }]);
}();
T(_e.prototype, Ei, Oi, Di, Mi, _i, Ti);
const vt = (o) => Math.min(1, Math.max(0, o)), ce = ["16:9", "3:2", "1:1"], Ot = "3:2";
function L(o, t = null, e = {}) {
  const i = document.createElement(o);
  Array.isArray(t) ? i.classList.add(...t) : t !== null && i.classList.add(t);
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (i[r] = e[r]);
  return i;
}
class Ai {
  constructor() {
    this.overlay = null, this.cropper = null, this.escHandler = null, this.resolvePromise = null, this.showOriginalOnClickInput = null, this.aspectRatioInputs = [];
  }
  /**
   * Открывает модальное окно кадрирования.
   *
   * @param imageUrl - URL изображения для кадрирования
   * @param existingCrop - существующая строка кадрирования "AxB:CxD" для восстановления области
   * @param existingShowOriginalOnClick - сохранённое поведение lightbox
   * @param existingCropAspectRatio - сохранённый режим соотношения сторон
   * @returns Promise с результатом кадрирования или null при отмене
   */
  open(t, e, i = !1, r = Ot) {
    return this.overlay && this.destroy(), new Promise((a) => {
      this.resolvePromise = a;
      const n = this.normalizeCropAspectRatio(r);
      this.overlay = this.createOverlay(i, n);
      const s = this.overlay.querySelector(".gallery-crop-modal__image-wrapper");
      if (!s) {
        this.close(null);
        return;
      }
      const d = L("img", null, {
        src: t
      });
      d.style.maxWidth = "100%", d.style.display = "block", s.appendChild(d), document.body.appendChild(this.overlay), d.onload = () => {
        this.cropper = new _e(d, {
          viewMode: 1,
          autoCropArea: 1,
          aspectRatio: this.numericAspectRatio(n),
          responsive: !0,
          restore: !0,
          guides: !0,
          center: !0,
          highlight: !0,
          cropBoxMovable: !0,
          cropBoxResizable: !0,
          toggleDragModeOnDblclick: !1,
          ready: () => {
            if (e && this.cropper) {
              const l = this.cropper.getImageData();
              this.restoreCropArea(e, l.naturalWidth, l.naturalHeight);
            }
          }
        });
      }, d.onerror = () => {
        this.close(null);
      }, this.escHandler = (l) => {
        l.key === "Escape" && this.close(null);
      }, document.addEventListener("keydown", this.escHandler);
    });
  }
  /**
   * Полностью уничтожает модальное окно и освобождает ресурсы.
   */
  destroy() {
    var t, e;
    (t = this.cropper) == null || t.destroy(), this.cropper = null, (e = this.overlay) == null || e.remove(), this.overlay = null, this.escHandler && (document.removeEventListener("keydown", this.escHandler), this.escHandler = null), this.resolvePromise = null, this.showOriginalOnClickInput = null, this.aspectRatioInputs = [];
  }
  /**
   * Закрывает модальное окно и возвращает результат через Promise.
   */
  close(t) {
    const e = this.resolvePromise;
    this.destroy(), e == null || e(t);
  }
  /**
   * Создает DOM-структуру оверлея с кнопками управления.
   */
  createOverlay(t, e) {
    const i = L("div", "gallery-crop-modal");
    i.addEventListener("click", () => this.close(null));
    const r = L("div", "gallery-crop-modal__container");
    r.addEventListener("click", (u) => u.stopPropagation());
    const a = L("div", "gallery-crop-modal__image-wrapper"), n = L("div", "gallery-crop-modal__options"), s = L("label", "gallery-crop-modal__option");
    this.showOriginalOnClickInput = L("input", null, { type: "checkbox" }), this.showOriginalOnClickInput.checked = t, s.append(
      this.showOriginalOnClickInput,
      document.createTextNode("Показывать необрезанное изображение по клику")
    ), n.appendChild(s), n.appendChild(this.createAspectRatioOptions(e));
    const d = L("div", "gallery-crop-modal__actions"), l = L("button", ["gallery-crop-modal__btn", "gallery-crop-modal__btn--danger"]);
    l.textContent = "Сбросить", l.addEventListener("click", () => {
      this.close({
        crop: "",
        croppedWidth: 0,
        croppedHeight: 0,
        showOriginalOnClick: !1,
        cropAspectRatio: Ot
      });
    });
    const h = L("button", "gallery-crop-modal__btn");
    h.textContent = "Отмена", h.addEventListener("click", () => this.close(null));
    const c = L("button", ["gallery-crop-modal__btn", "gallery-crop-modal__btn--primary"]);
    return c.textContent = "Применить", c.addEventListener("click", () => this.handleApply()), d.appendChild(l), d.appendChild(h), d.appendChild(c), r.appendChild(a), r.appendChild(n), r.appendChild(d), i.appendChild(r), i;
  }
  /**
   * Обрабатывает нажатие кнопки "Применить" — собирает данные кадрирования
   * и закрывает модальное окно с результатом.
   */
  handleApply() {
    var r;
    if (!this.cropper) {
      this.close(null);
      return;
    }
    const t = this.cropper.getData(!0), e = this.cropper.getImageData(), i = this.cropDataToString(t, e.naturalWidth, e.naturalHeight);
    this.close({
      ...i,
      showOriginalOnClick: ((r = this.showOriginalOnClickInput) == null ? void 0 : r.checked) ?? !1,
      cropAspectRatio: this.selectedCropAspectRatio()
    });
  }
  /**
   * Парсит строку кадрирования в формате imagor "AxB:CxD" в координаты.
   *
   * @param crop - строка вида "0.1234x0.2345:0.8765x0.7654"
   * @returns объект с координатами или null если формат не совпадает
   */
  parseCropString(t) {
    const e = t.match(/^(\d+\.?\d*)x(\d+\.?\d*):(\d+\.?\d*)x(\d+\.?\d*)$/);
    return e ? {
      x1: parseFloat(e[1]),
      y1: parseFloat(e[2]),
      x2: parseFloat(e[3]),
      y2: parseFloat(e[4])
    } : null;
  }
  /**
   * Преобразует данные cropper.js в строку кадрирования формата imagor
   * и возвращает объект CropResult.
   *
   * @param data - данные из Cropper.getData(true)
   * @param naturalWidth - натуральная ширина изображения
   * @param naturalHeight - натуральная высота изображения
   */
  cropDataToString(t, e, i) {
    const r = vt(t.x / e), a = vt(t.y / i), n = vt((t.x + t.width) / e), s = vt((t.y + t.height) / i);
    return {
      crop: `${r.toFixed(4)}x${a.toFixed(4)}:${n.toFixed(4)}x${s.toFixed(4)}`,
      croppedWidth: Math.round(t.width),
      croppedHeight: Math.round(t.height),
      showOriginalOnClick: !1,
      cropAspectRatio: this.selectedCropAspectRatio()
    };
  }
  /**
   * Восстанавливает область кадрирования из строки imagor-формата.
   *
   * @param crop - строка кадрирования "AxB:CxD"
   * @param naturalWidth - натуральная ширина изображения
   * @param naturalHeight - натуральная высота изображения
   */
  restoreCropArea(t, e, i) {
    var a;
    const r = this.parseCropString(t);
    r && ((a = this.cropper) == null || a.setData({
      x: r.x1 * e,
      y: r.y1 * i,
      width: (r.x2 - r.x1) * e,
      height: (r.y2 - r.y1) * i
    }));
  }
  createAspectRatioOptions(t) {
    const e = L("fieldset", "gallery-crop-modal__aspect-ratios"), i = L("legend", "gallery-crop-modal__aspect-ratios-label");
    return i.textContent = "Соотношение сторон", e.appendChild(i), [
      { label: "Любое", value: "free" },
      ...ce.map((a) => ({ label: a, value: a }))
    ].forEach(({ label: a, value: n }) => {
      const s = L("label", "gallery-crop-modal__aspect-ratio"), d = L("input", null, { type: "radio" }), l = L("span", "gallery-crop-modal__aspect-ratio-label");
      d.name = "gallery-crop-aspect-ratio", d.value = n, d.checked = n === t, d.addEventListener("change", () => {
        var h;
        d.checked && ((h = this.cropper) == null || h.setAspectRatio(this.numericAspectRatio(n)));
      }), l.textContent = a, s.append(d, l), e.appendChild(s), this.aspectRatioInputs.push(d);
    }), e;
  }
  selectedCropAspectRatio() {
    var e;
    const t = (e = this.aspectRatioInputs.find((i) => i.checked)) == null ? void 0 : e.value;
    return this.normalizeCropAspectRatio(t);
  }
  normalizeCropAspectRatio(t) {
    return t === "free" || ce.includes(t) ? t : Ot;
  }
  numericAspectRatio(t) {
    return t === "free" ? Number.NaN : t === "16:9" ? 16 / 9 : t === "1:1" ? 1 : 3 / 2;
  }
}
/**
 * Gallery Tool for Editor.js
 * Supports multiple images with captions and source attribution
 * @author iXBT
 * @license MIT
 */
class Li {
  constructor({ data: t, config: e, api: i, readOnly: r, block: a }) {
    this.currentLoadingItem = null, this.api = i, this.readOnly = r, this.block = a;
    const n = e ?? {};
    this.config = {
      endpoints: n.endpoints ?? {},
      additionalRequestData: n.additionalRequestData,
      additionalRequestHeaders: n.additionalRequestHeaders,
      field: n.field ?? "image",
      types: n.types ?? "image/*",
      captionPlaceholder: this.api.i18n.t(n.captionPlaceholder ?? "Caption"),
      sourcePlaceholder: this.api.i18n.t(n.sourcePlaceholder ?? "Source"),
      sourceLinkPlaceholder: this.api.i18n.t(n.sourceLinkPlaceholder ?? "Source link"),
      buttonContent: n.buttonContent ?? this.api.i18n.t("Add Image"),
      urlButtonContent: n.urlButtonContent ?? this.api.i18n.t("Add from URL"),
      uploader: n.uploader,
      onNonImageFile: n.onNonImageFile,
      mediaHost: n.mediaHost,
      cover: n.cover,
      onMediaRemoved: n.onMediaRemoved,
      onCropApplied: n.onCropApplied
    }, this._data = {
      items: (t == null ? void 0 : t.items) ?? [],
      layout: (t == null ? void 0 : t.layout) ?? "grid",
      columns: (t == null ? void 0 : t.columns) ?? 3,
      stretched: (t == null ? void 0 : t.stretched) ?? !1
    }, this.uploader = new Fe({
      config: this.config,
      onUpload: (s) => this.onUpload(s),
      onError: (s) => this.uploadingFailed(s)
    }), this.cropModal = new Ai(), this.ui = new Dt({
      api: i,
      config: this.config,
      onSelectFile: () => this.selectFile(),
      onSelectUrl: (s) => this.uploadFromUrl(s),
      onColumnsChange: (s) => this.onColumnsChange(s),
      onRemoveImage: (s, d) => this.onRemoveImage(s, d),
      onCropImage: (s) => this.handleCropImage(s),
      onItemSettingsChange: () => this.block.dispatchChange(),
      readOnly: r
    });
  }
  /**
   * Notify core that read-only mode is supported
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   */
  static get toolbox() {
    return {
      icon: de,
      title: "Gallery"
    };
  }
  /**
   * Available gallery tunes
   */
  static get tunes() {
    return [];
  }
  /**
   * Specify paste substitutes
   */
  /**
   * ⛔ Галерея вставку не перехватывает: картинки из буфера, ссылки и файлы
   * ведёт блок media — иначе два тула спорят за один Ctrl+V и файл уходит не
   * туда, где стоит курсор. Старые галереи по-прежнему открываются и правятся.
   *
   * ⛔ Именно пустой конфиг, а НЕ `false`: `false` кладёт тул в `exceptionList`
   * EditorJS, и вставка внутри его блока не обрабатывается вообще — картинка из
   * буфера при курсоре в старой галерее уходила бы в никуда. С пустым конфигом
   * галерея не заявляет ни тегов, ни файлов, ни шаблонов, и файл достаётся
   * единственному тулу, который их принимает, — `media`.
   */
  static get pasteConfig() {
    return {};
  }
  /**
   * Renders Block content
   */
  render() {
    const t = this.ui.render(this._data.items, this._data.columns);
    return this._data.stretched && this.setTune("stretched", !0), t;
  }
  /**
   * Validate data
   */
  validate(t) {
    return t.items.length > 0;
  }
  /**
   * Return Block data
   */
  save() {
    return this._data.items = this.ui.getItemsData(), this._data.columns = this.ui.getColumns(), delete this._data.aiGeneration, this._data;
  }
  removed() {
    const t = this.ui.getItemsData().map((e) => e.media_id).filter((e) => !!e);
    new Set(t).forEach((e) => {
      var i, r;
      return (r = (i = this.config).onMediaRemoved) == null ? void 0 : r.call(i, e);
    });
  }
  destroy() {
    this.cropModal.destroy();
  }
  /**
   * Returns configuration for block tunes
   */
  renderSettings() {
    return [
      { name: "grid", title: "Grid", icon: this.getGridIcon() },
      { name: "carousel", title: "Carousel", icon: this.getCarouselIcon() },
      { name: "masonry", title: "Masonry", icon: this.getMasonryIcon() }
    ].map((i) => ({
      icon: i.icon,
      label: this.api.i18n.t(i.title),
      name: i.name,
      isActive: this._data.layout === i.name,
      onActivate: () => {
        this._data.layout = i.name, this.updateLayoutClass();
      }
    }));
  }
  /**
   * Handle file selection
   */
  selectFile() {
    this.uploader.uploadSelectedFile({
      onNonImageFile: (t) => {
        var e, i;
        return ((i = (e = this.config).onNonImageFile) == null ? void 0 : i.call(e, t)) === !0;
      },
      onPreview: (t) => {
        this.currentLoadingItem = this.ui.createLoadingItem(t);
      }
    });
  }
  /**
   * Upload file from paste/drag-n-drop
   */
  uploadFile(t) {
    var e, i;
    ((i = (e = this.config).onNonImageFile) == null ? void 0 : i.call(e, t)) !== !0 && this.uploader.uploadByFile(t, {
      onPreview: (r) => {
        this.currentLoadingItem = this.ui.createLoadingItem(r);
      }
    });
  }
  /**
   * Handle URL upload
   */
  uploadFromUrl(t) {
    this.currentLoadingItem = this.ui.createLoadingItem(t), this.uploader.uploadByUrl(t);
  }
  /**
   * File upload callback
   */
  onUpload(t) {
    if (t.success && t.file) {
      const e = {
        url: t.file.url,
        media_id: t.file.media_id,
        imagorPath: t.file.imagor_path,
        caption: "",
        source: "",
        sourceLink: "",
        width: t.file.width,
        height: t.file.height
      };
      this.currentLoadingItem ? (this.ui.fillLoadingItem(this.currentLoadingItem, e), this.currentLoadingItem = null) : this.ui.addItem(e);
    } else
      this.uploadingFailed("incorrect response: " + JSON.stringify(t));
  }
  /**
   * Handle upload errors
   */
  uploadingFailed(t) {
    console.error("Gallery Tool: uploading failed", t), this.currentLoadingItem && (this.currentLoadingItem.remove(), this.currentLoadingItem = null), this.api.notifier.show({
      message: this.api.i18n.t("Couldn't upload image. Please try another."),
      style: "error"
    });
  }
  /**
   * Handle columns change
   */
  onColumnsChange(t) {
    this._data.columns = t;
  }
  /**
   * Handle crop image request
   */
  async handleCropImage(t) {
    var a, n;
    if (t.dataset.disableOptimization === "true")
      return;
    const e = t.dataset.url;
    if (!e) return;
    const i = t.dataset.crop, r = await this.cropModal.open(
      e,
      i,
      t.dataset.showOriginalOnClick === "true",
      this.normalizeCropAspectRatioMode(t.dataset.cropAspectRatio)
    );
    if (r !== null) {
      if (r.crop === "")
        this.ui.updateItemAfterCrop(t, void 0, 0, 0, void 0, void 0);
      else {
        this.ui.updateItemAfterCrop(
          t,
          r.crop,
          r.croppedWidth,
          r.croppedHeight,
          r.showOriginalOnClick,
          r.cropAspectRatio
        );
        const s = t.dataset.mediaId;
        s && ((n = (a = this.config).onCropApplied) == null || n.call(a, s, r.crop));
      }
      this.block.dispatchChange();
    }
  }
  /**
   * Handle image removal - delete from S3
   */
  onRemoveImage(t, e) {
    var r, a;
    if (this.block.dispatchChange(), e) {
      (a = (r = this.config).onMediaRemoved) == null || a.call(r, e);
      return;
    }
    const i = this.config.endpoints.deleteImage;
    !i || !t || fetch(i, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...this.config.additionalRequestHeaders || {}
      },
      body: JSON.stringify({ url: t })
    }).then((n) => n.json()).catch((n) => {
      console.error("Gallery Tool: failed to delete image", n);
    });
  }
  normalizeCropAspectRatioMode(t) {
    return t === "16:9" || t === "3:2" || t === "1:1" || t === "free" ? t : "3:2";
  }
  /**
   * Update layout class on wrapper
   */
  updateLayoutClass() {
    const t = this.ui.nodes.wrapper;
    t.classList.remove("gallery-tool--grid", "gallery-tool--carousel", "gallery-tool--masonry"), t.classList.add(`gallery-tool--${this._data.layout}`);
  }
  /**
   * Set one tune
   */
  setTune(t, e) {
    t === "stretched" && (this._data.stretched = e), this.ui.applyTune(t, e), t === "stretched" && Promise.resolve().then(() => {
      this.block.stretched = e;
    }).catch((i) => {
      console.error(i);
    });
  }
  getGridIcon() {
    return '<svg width="17" height="15" viewBox="0 0 17 15" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="7" height="7" rx="1"/><rect x="9" y="0" width="7" height="7" rx="1"/><rect x="0" y="8" width="7" height="7" rx="1"/><rect x="9" y="8" width="7" height="7" rx="1"/></svg>';
  }
  getCarouselIcon() {
    return '<svg width="17" height="15" viewBox="0 0 17 15" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="0" width="11" height="15" rx="1"/><rect x="0" y="3" width="2" height="9" rx="1" opacity="0.5"/><rect x="15" y="3" width="2" height="9" rx="1" opacity="0.5"/></svg>';
  }
  getMasonryIcon() {
    return '<svg width="17" height="15" viewBox="0 0 17 15" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="7" height="9" rx="1"/><rect x="9" y="0" width="7" height="5" rx="1"/><rect x="0" y="10" width="7" height="5" rx="1"/><rect x="9" y="6" width="7" height="9" rx="1"/></svg>';
  }
}
export {
  Li as default
};
