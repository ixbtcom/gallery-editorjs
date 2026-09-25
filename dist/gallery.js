(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`:root{--ej-radius-sm: 6px;--ej-radius-md: 8px;--ej-radius-lg: 12px;--ej-bg-page: #fff;--ej-bg-surface: #fff;--ej-bg-muted: var(--gray-50, #f9fafb);--ej-bg-input: #fff;--ej-ring: rgba(3, 7, 18, .1);--ej-ring-focus: var(--primary-600, #2563eb);--ej-border: var(--gray-200, #e5e7eb);--ej-border-strong: rgba(3, 7, 18, .05);--ej-text: var(--gray-950, #030712);--ej-text-secondary: var(--gray-500, #6b7280);--ej-text-muted: var(--gray-400, #9ca3af);--ej-text-on-primary: #fff;--ej-primary: var(--primary-600, #2563eb);--ej-primary-hover: var(--primary-700, #1d4ed8);--ej-primary-light: var(--primary-50, #eff6ff);--ej-primary-muted: var(--primary-100, #dbeafe);--ej-success-bg: var(--success-50, #f0fdf4);--ej-success-border: var(--success-500, #22c55e);--ej-success-text: var(--success-700, #15803d);--ej-warning-bg: var(--warning-50, #fffbeb);--ej-warning-border: var(--warning-500, #f59e0b);--ej-warning-text: var(--warning-700, #b45309);--ej-danger: var(--danger-600, #dc2626);--ej-danger-bg: var(--danger-50, #fef2f2);--ej-danger-border: var(--danger-500, #ef4444);--ej-danger-text: var(--danger-700, #b91c1c);--ej-danger-hover-bg: var(--danger-100, #fee2e2);--ej-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, .05);--ej-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1);--ej-transition: 75ms ease;--ej-control-bg: rgba(255, 255, 255, .9);--ej-control-hover: rgba(0, 0, 0, .05);--ej-icon-color: var(--gray-400, #9ca3af)}.dark{--ej-bg-page: var(--gray-900, #111827);--ej-bg-surface: var(--gray-900, #111827);--ej-bg-muted: rgba(255, 255, 255, .05);--ej-bg-input: rgba(255, 255, 255, .05);--ej-ring: rgba(255, 255, 255, .2);--ej-ring-focus: var(--primary-500, #3b82f6);--ej-border: rgba(255, 255, 255, .1);--ej-border-strong: rgba(255, 255, 255, .1);--ej-text: #fff;--ej-text-secondary: var(--gray-400, #9ca3af);--ej-text-muted: var(--gray-500, #6b7280);--ej-text-on-primary: #fff;--ej-control-bg: rgba(30, 30, 30, .9);--ej-control-hover: rgba(255, 255, 255, .1);--ej-icon-color: var(--gray-500, #6b7280);--ej-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, .3);--ej-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, .3), 0 2px 4px -2px rgba(0, 0, 0, .2)}@keyframes ej-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.shared-crop-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000;background:#000000d9;display:flex;align-items:center;justify-content:center;padding:20px}.shared-crop-modal__container{background:var(--ej-bg-surface, #fff);border-radius:var(--ej-radius-lg);box-shadow:var(--ej-shadow-md);max-width:90vw;max-height:90vh;display:flex;flex-direction:column;overflow:hidden}.shared-crop-modal__image-wrapper{flex:1;overflow:hidden;max-height:calc(90vh - 80px);display:flex;align-items:center;justify-content:center}.shared-crop-modal__image-wrapper img{max-width:100%;display:block}.shared-crop-modal__options{display:flex;flex-direction:column;gap:12px;padding:12px 16px 0;background:var(--ej-bg-muted, #f5f5f5)}.shared-crop-modal__option{display:inline-flex;align-items:center;gap:8px;color:var(--ej-text);cursor:pointer;font-size:14px}.shared-crop-modal__option input{width:18px;height:18px;margin:0}.shared-crop-modal__aspect-ratios{display:flex;flex-wrap:wrap;gap:8px;padding:0;border:0;margin:0}.shared-crop-modal__aspect-ratios-label{width:100%;color:var(--ej-text-secondary);font-size:13px;font-weight:500}.shared-crop-modal__aspect-ratio{display:inline-flex;position:relative;cursor:pointer}.shared-crop-modal__aspect-ratio input{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:100%;height:100%;margin:0;opacity:0;cursor:pointer}.shared-crop-modal__aspect-ratio-label{min-width:52px;padding:6px 10px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-sm);background:var(--ej-bg-surface);color:var(--ej-text);font-size:13px;line-height:1;text-align:center}.shared-crop-modal__aspect-ratio input:checked+.shared-crop-modal__aspect-ratio-label{border-color:var(--ej-primary);background:var(--ej-primary-light);color:var(--ej-primary)}.shared-crop-modal__aspect-ratio input:focus-visible+.shared-crop-modal__aspect-ratio-label{outline:2px solid var(--ej-ring-focus);outline-offset:2px}.shared-crop-modal__actions{display:flex;gap:8px;padding:12px 16px;justify-content:center;background:var(--ej-bg-muted, #f5f5f5);border-top:1px solid var(--ej-border)}.shared-crop-modal__btn{padding:8px 20px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);background:var(--ej-bg-surface, #fff);color:var(--ej-text);font-size:14px;font-weight:500;cursor:pointer;transition:background var(--ej-transition),border-color var(--ej-transition)}.shared-crop-modal__btn:hover{background:var(--ej-bg-muted)}.shared-crop-modal__btn--primary{background:var(--ej-primary);color:var(--ej-text-on-primary);border-color:var(--ej-primary)}.shared-crop-modal__btn--primary:hover{opacity:.9}.shared-crop-modal__btn--danger{color:var(--ej-danger);border-color:var(--ej-danger)}.shared-crop-modal__btn--danger:hover{background:var(--ej-danger);color:#fff}.gallery-tool{margin:2rem 0;max-width:100%;box-sizing:border-box;overflow:hidden}.gallery-tool__items{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:12px;max-width:100%;box-sizing:border-box}.gallery-tool--columns-1 .gallery-tool__item{flex:0 0 100%;max-width:100%}.gallery-tool--columns-2 .gallery-tool__item{flex:0 0 calc(50% - 6px);max-width:calc(50% - 6px)}.gallery-tool--columns-3 .gallery-tool__item{flex:0 0 calc(33.333% - 8px);max-width:calc(33.333% - 8px)}.gallery-tool--columns-4 .gallery-tool__item{flex:0 0 calc(25% - 9px);max-width:calc(25% - 9px)}.gallery-tool--columns-5 .gallery-tool__item{flex:0 0 calc(20% - 10px);max-width:calc(20% - 10px)}@media (max-width: 639px){.gallery-tool--columns-3 .gallery-tool__item,.gallery-tool--columns-4 .gallery-tool__item,.gallery-tool--columns-5 .gallery-tool__item{flex:0 0 calc(50% - 6px);max-width:calc(50% - 6px)}}.gallery-tool__item{position:relative;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);overflow:hidden;background:var(--ej-bg-muted);box-sizing:border-box;min-width:0;box-shadow:var(--ej-shadow-sm);transition:box-shadow var(--ej-transition)}.gallery-tool__item:hover{box-shadow:var(--ej-shadow-md)}.gallery-tool__item--plain,.gallery-tool__item--plain:hover{border-radius:0}.gallery-tool__item-image{position:relative;min-height:120px;background:var(--ej-bg-muted);overflow:hidden}.gallery-tool__item-image img{width:100%;height:auto;display:block;object-fit:contain;max-height:400px;max-width:100%}.gallery-tool__item--unlimited-height .gallery-tool__item-image img{max-height:none}.gallery-tool__item-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;background-position:center;margin:35px auto;position:relative;background-color:var(--ej-bg-muted)}.gallery-tool__item-preloader:after{content:"";position:absolute;width:60px;height:60px;border-radius:50%;border:2px solid var(--ej-border);border-top-color:var(--ej-primary);left:50%;top:50%;margin:-30px 0 0 -30px;animation:ej-spin 1s infinite linear;box-sizing:border-box}.gallery-tool__item-caption,.gallery-tool__item-source,.gallery-tool__item-source-link{margin:.5rem;width:calc(100% - 1rem);background:#fff;font-weight:500}.gallery-tool__item-source{color:var(--ej-text-secondary)}.gallery-tool__item-source-link{color:var(--ej-primary)}.gallery-tool__item-caption[data-placeholder]:empty:before,.gallery-tool__item-source[data-placeholder]:empty:before,.gallery-tool__item-source-link[data-placeholder]:empty:before{content:attr(data-placeholder);color:var(--ej-text-muted);pointer-events:none}.gallery-tool__item-caption[data-placeholder]:empty:focus:before,.gallery-tool__item-source[data-placeholder]:empty:focus:before,.gallery-tool__item-source-link[data-placeholder]:empty:focus:before{display:none}.gallery-tool__item-dimensions{position:absolute;bottom:8px;left:8px;padding:2px 6px;background:#0009;color:#fff;font-size:11px;font-family:monospace;border-radius:var(--ej-radius-sm);z-index:5;pointer-events:none}.gallery-tool__ai-mark{display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;padding:0 5px;border-radius:999px;border:1px solid rgba(255,255,255,.75);background:#111827;color:#fff;font-size:11px;font-weight:700;letter-spacing:-.02em;line-height:1;box-shadow:0 2px 8px #00000047;box-sizing:border-box}.gallery-tool__item-ai-badge{position:absolute;right:8px;bottom:8px;z-index:6;display:inline-flex;cursor:help}.gallery-tool__item-controls{position:absolute;top:8px;right:8px;display:flex;gap:4px;opacity:0;transition:opacity .2s;z-index:10}.gallery-tool__item:hover .gallery-tool__item-controls,.gallery-tool__item:focus-within .gallery-tool__item-controls{opacity:1}.gallery-tool__item-remove,.gallery-tool__item-move-left,.gallery-tool__item-move-right,.gallery-tool__item-settings{width:32px;height:32px;border:none;border-radius:var(--ej-radius-sm);background:var(--ej-control-bg);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;color:var(--ej-text);transition:background .2s}.gallery-tool__item-remove:hover,.gallery-tool__item-move-left:hover,.gallery-tool__item-move-right:hover,.gallery-tool__item-settings:hover{background:var(--ej-control-hover)}.gallery-tool__item-remove{color:var(--ej-danger)}.gallery-tool__add-buttons{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.gallery-tool__add-buttons .cdx-button{display:inline-flex;align-items:center;gap:6px}.gallery-tool__add-buttons .cdx-button svg{width:16px;height:16px}.gallery-tool__add-buttons .gallery-tool__ai-button{gap:8px}.gallery-tool__add-buttons .gallery-tool__clipboard-button{gap:6px}.gallery-tool__add-buttons .gallery-tool__ai-button .gallery-tool__ai-mark{min-width:22px;height:22px;font-size:10px}.gallery-tool__url-input-wrapper{flex:1;min-width:200px}.gallery-tool__url-input{width:100%;padding:8px 12px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);font-size:14px;background:var(--ej-bg-input);color:var(--ej-text);transition:border-color var(--ej-transition)}.gallery-tool__url-input:focus{border-color:var(--ej-ring-focus);outline:none;box-shadow:0 0 0 1px var(--ej-ring-focus)}.gallery-tool__columns-control{display:flex;align-items:center;gap:8px;margin-left:auto}.gallery-tool__columns-button{width:32px;height:32px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);background:var(--ej-bg-surface);cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;transition:background .2s;color:var(--ej-text)}.gallery-tool__columns-button:hover{background:var(--ej-bg-muted)}.gallery-tool__columns-display{font-size:13px;color:var(--ej-text-secondary);min-width:45px;text-align:center}.gallery-tool--carousel{max-width:100%;overflow:hidden;box-sizing:border-box}.gallery-tool--carousel .gallery-tool__items{flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;gap:12px;padding-bottom:8px;max-width:100%;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:var(--ej-border) transparent}.gallery-tool--carousel .gallery-tool__items::-webkit-scrollbar{height:6px}.gallery-tool--carousel .gallery-tool__items::-webkit-scrollbar-track{background:transparent}.gallery-tool--carousel .gallery-tool__items::-webkit-scrollbar-thumb{background:var(--ej-border);border-radius:3px}.gallery-tool--carousel .gallery-tool__item{flex:0 0 auto;width:clamp(200px,60vw,280px);max-width:calc(100% - 24px);min-width:200px}.gallery-tool--carousel .gallery-tool__item-image img{max-height:280px}.gallery-tool--carousel .gallery-tool__item--unlimited-height .gallery-tool__item-image img{max-height:none}.gallery-tool--masonry .gallery-tool__items{display:block;column-count:2;column-gap:12px;max-width:100%}.gallery-tool--masonry.gallery-tool--columns-3 .gallery-tool__items{column-count:3}.gallery-tool--masonry.gallery-tool--columns-4 .gallery-tool__items{column-count:4}.gallery-tool--masonry.gallery-tool--columns-5 .gallery-tool__items{column-count:5}@media (max-width: 639px){.gallery-tool--masonry.gallery-tool--columns-3 .gallery-tool__items,.gallery-tool--masonry.gallery-tool--columns-4 .gallery-tool__items,.gallery-tool--masonry.gallery-tool--columns-5 .gallery-tool__items{column-count:2}}.gallery-tool--masonry .gallery-tool__item{width:100%;max-width:100%;margin-bottom:12px;break-inside:avoid}.gallery-tool--masonry .gallery-tool__item-image img{max-height:none;max-width:100%}.gallery-tool--empty .gallery-tool__items,.gallery-tool--loading .gallery-tool__item-image img{display:none}.gallery-tool--stretched .gallery-tool__item-image img{max-height:none}.gallery-tool__item-crop{width:32px;height:32px;border:none;border-radius:var(--ej-radius-sm);background:var(--ej-control-bg);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;color:var(--ej-text);transition:background .2s}.gallery-tool__item-crop:hover{background:var(--ej-control-hover)}.gallery-tool__item-crop:disabled{cursor:not-allowed;opacity:.45}.gallery-tool__item-settings-wrapper{position:relative}.gallery-tool__item-settings-panel{position:absolute;top:calc(100% + 4px);right:0;z-index:20;display:grid;min-width:240px;padding:8px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);background:var(--ej-bg-surface);box-shadow:var(--ej-shadow-md)}.gallery-tool__item-settings-panel[hidden]{display:none}.gallery-tool__item-setting{display:flex;align-items:center;gap:8px;min-height:36px;padding:6px 8px;color:var(--ej-text);font-size:13px;cursor:pointer}.gallery-tool__item-setting:hover{background:var(--ej-bg-muted)}.gallery-tool__item-setting input{width:16px;height:16px;margin:0}.gallery-tool__item--cropped{border-left:3px solid var(--ej-primary)}.gallery-tool__item--cropped .gallery-tool__item-image:after{content:"✂";position:absolute;bottom:8px;right:8px;padding:2px 6px;background:var(--ej-primary);color:var(--ej-text-on-primary);font-size:11px;border-radius:var(--ej-radius-sm);z-index:5;pointer-events:none}.gallery-tool__item[data-ai-generated].gallery-tool__item--cropped .gallery-tool__item-image:after{right:44px}.gallery-tool__item-cover{width:28px;height:28px;border:none;border-radius:6px;background:#0000008c;color:#fbbf24;font-size:15px;line-height:1;cursor:pointer;display:inline-flex;align-items:center;justify-content:center}.gallery-tool__item-cover:hover{background:#000000bf}.gallery-tool__item[data-cover]{outline:2px solid #3b82f6;outline-offset:-2px}.gallery-tool__item[data-cover] .gallery-tool__item-cover{color:#3b82f6}.gallery-tool__item[data-cover]:after{content:"Обложка";position:absolute;top:6px;left:6px;background:#3b82f6e6;color:#fff;font-size:11px;font-weight:600;padding:2px 8px;border-radius:4px;pointer-events:none;z-index:3}.gallery-tool__item[data-cover][data-cover-overridden]:after{content:"Обложка · перекрыта вручную";background:#4b5563f2}/*!
 * Cropper.js v1.6.2
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-04-21T07:43:02.731Z
 */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;-ms-touch-action:none;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cropper-container img{backface-visibility:hidden;display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-wrap-box,.cropper-canvas,.cropper-drag-box,.cropper-crop-box,.cropper-modal{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-wrap-box,.cropper-canvas{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:#3399ffbf;overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:calc(100% / 3);left:0;top:calc(100% / 3);width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:calc(100% / 3);top:0;width:calc(100% / 3)}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:before,.cropper-center:after{background-color:#eee;content:" ";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width: 768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width: 992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width: 1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:" ";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC)}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}`)),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
const Ie = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M12.01 7.29999H12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M12.01 12H12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M12.01 16.7H12"/></svg>', ce = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>';
function D(o, t = null, e = {}) {
  const i = document.createElement(o);
  Array.isArray(t) ? i.classList.add(...t) : t !== null && i.classList.add(t);
  for (const a in e)
    Object.prototype.hasOwnProperty.call(e, a) && (i[a] = e[a]);
  return i;
}
function I(o, t = null, e = {}) {
  const i = document.createElement(o);
  Array.isArray(t) ? i.classList.add(...t) : t !== null && i.classList.add(t);
  for (const a in e)
    Object.prototype.hasOwnProperty.call(e, a) && (i[a] = e[a]);
  return i;
}
const Ae = [
  { key: "disableHeightLimit", label: "Не ограничивать по высоте" },
  { key: "disableOptimization", label: "Не оптимизировать" },
  { key: "disableDecoration", label: "Не применять оформление" }
];
function Le({ isEnabled: o, classes: t, translate: e, onChange: i }) {
  const a = I("div", [t.wrapper]), r = I("button", [t.button], { type: "button" }), n = I("div", [t.panel]);
  r.innerHTML = Ie, r.title = e("Настройки изображения"), r.setAttribute("aria-label", e("Настройки изображения")), r.setAttribute("aria-expanded", "false"), n.hidden = !0, r.addEventListener("click", () => {
    n.hidden = !n.hidden, r.setAttribute("aria-expanded", String(!n.hidden));
  });
  for (const s of Ae) {
    const d = I("label", [t.option]), h = I("input", null, { type: "checkbox" });
    h.checked = o(s.key), h.addEventListener("click", () => i(s.key, h.checked)), d.append(h, document.createTextNode(e(s.label))), n.appendChild(d);
  }
  return a.append(r, n), a;
}
const Re = "media.ixbt.site", ke = "920x/webp", Ne = /^\d+x\d*$/;
function nt(o) {
  if (!o)
    return o;
  let t;
  try {
    t = new URL(o);
  } catch {
    return o;
  }
  if (t.hostname !== Re)
    return o;
  const e = t.pathname.split("/").filter(Boolean);
  return e.length === 0 || Ne.test(e[0]) ? o : (t.pathname = `/${ke}/${e.join("/")}`, t.toString());
}
const Pe = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2v4"/><path d="M6 6h12a2 2 0 0 1 2 2v8"/><path d="M18 22v-4"/><path d="M18 18H6a2 2 0 0 1-2-2V8"/></svg>', He = '<span class="gallery-tool__ai-mark" aria-hidden="true">Ai</span>', $t = "Создано с помощью Ai", U = class U {
  constructor({ api: t, config: e, onSelectFile: i, onSelectUrl: a, onColumnsChange: r, onRemoveImage: n, onCropImage: s, onItemSettingsChange: d, readOnly: h }) {
    this.currentColumns = 1, this.previousColumns = 1, this.isRendering = !1, this.columnsLocked = !1, this.api = t, this.config = e, this.onSelectFile = i, this.onSelectUrl = a, this.onColumnsChange = r, this.onRemoveImage = n, this.onCropImage = s, this.onItemSettingsChange = d ?? (() => {
    }), this.readOnly = h, this.nodes = {
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
    const e = D("div", [this.CSS.item]), i = D("div", [this.CSS.itemImage]), a = D("div", [this.CSS.itemPreloader]), r = !!(t.crop && t.imagorPath && !t.disableOptimization), n = t.disableOptimization ? t.url : r && t.crop && t.imagorPath ? this.buildPreviewUrl(t.imagorPath, t.crop) : nt(t.url), s = D("img", null, { src: n }), d = r && t.croppedWidth ? t.croppedWidth : t.width, h = r && t.croppedHeight ? t.croppedHeight : t.height;
    d && h && (s.style.aspectRatio = `${d} / ${h}`), r && (s.style.width = "100%", s.style.maxHeight = "none", e.classList.add(this.CSS.itemCropped)), t.disableHeightLimit && (s.style.maxHeight = "none", e.classList.add(this.CSS.itemUnlimitedHeight)), t.disableDecoration && e.classList.add(this.CSS.itemPlain);
    const l = D("div", [this.CSS.itemCaption, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    l.dataset.placeholder = this.config.captionPlaceholder ?? "Caption", l.textContent = t.caption || "";
    const c = D("div", [this.CSS.itemSource, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    c.dataset.placeholder = this.config.sourcePlaceholder ?? "Source", c.textContent = t.source || "";
    const u = D("div", [this.CSS.itemSourceLink, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    if (u.dataset.placeholder = this.config.sourceLinkPlaceholder ?? "Source link", u.textContent = t.sourceLink || "", i.appendChild(a), i.appendChild(s), d && h) {
      const y = D("div", [this.CSS.itemDimensions]);
      y.textContent = `${d} × ${h}`, i.appendChild(y);
    }
    return t.isAiGenerated && i.appendChild(this.createAiBadge()), s.onload = () => {
      a.style.display = "none";
    }, e.appendChild(i), e.appendChild(l), e.appendChild(c), e.appendChild(u), this.storeItemData(e, t), this.readOnly || e.insertBefore(this.createItemControls(e), e.firstChild), this.nodes.itemsContainer.appendChild(e), this.toggleState(
      "filled"
      /* Filled */
    ), this.autoAdjustColumns(), e;
  }
  storeItemData(t, e) {
    var i, a, r;
    t.dataset.url = e.url, e.media_id && (t.dataset.mediaId = e.media_id), (i = this.config.cover) != null && i.enabled && e.media_id && ((r = (a = this.config.cover).coverUuid) == null ? void 0 : r.call(a)) === e.media_id && t.setAttribute("data-cover", ""), e.width && (t.dataset.width = String(e.width)), e.height && (t.dataset.height = String(e.height)), e.imagorPath && (t.dataset.imagorPath = e.imagorPath), e.crop && !e.disableOptimization && (t.dataset.crop = e.crop), e.croppedWidth && !e.disableOptimization && (t.dataset.croppedWidth = String(e.croppedWidth)), e.croppedHeight && !e.disableOptimization && (t.dataset.croppedHeight = String(e.croppedHeight)), e.cropAspectRatio && !e.disableOptimization && (t.dataset.cropAspectRatio = e.cropAspectRatio), typeof e.showOriginalOnClick == "boolean" && !e.disableOptimization && (t.dataset.showOriginalOnClick = String(e.showOriginalOnClick)), e.isAiGenerated && (t.dataset.aiGenerated = "true"), e.disableHeightLimit && (t.dataset.disableHeightLimit = "true"), e.disableOptimization && (t.dataset.disableOptimization = "true"), e.disableDecoration && (t.dataset.disableDecoration = "true");
  }
  /**
   * Create a placeholder item for loading state
   */
  createLoadingItem(t) {
    const e = D("div", [this.CSS.item]), i = D("div", [this.CSS.itemImage]), a = D("div", [this.CSS.itemPreloader]);
    t && (a.style.backgroundImage = `url(${nt(t)})`), i.appendChild(a), e.appendChild(i);
    const r = D("div", [this.CSS.itemCaption, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    r.dataset.placeholder = this.config.captionPlaceholder ?? "Caption";
    const n = D("div", [this.CSS.itemSource, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    n.dataset.placeholder = this.config.sourcePlaceholder ?? "Source";
    const s = D("div", [this.CSS.itemSourceLink, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    return s.dataset.placeholder = this.config.sourceLinkPlaceholder ?? "Source link", e.appendChild(r), e.appendChild(n), e.appendChild(s), this.nodes.itemsContainer.appendChild(e), this.toggleState(
      "loading"
      /* Loading */
    ), e;
  }
  /**
   * Update loading item with uploaded image
   */
  fillLoadingItem(t, e) {
    const i = t.querySelector(`.${this.CSS.itemImage}`), a = t.querySelector(`.${this.CSS.itemPreloader}`), r = D("img", null, {
      src: e.disableOptimization ? e.url : nt(e.url)
    });
    if (e.width && e.height && (r.style.aspectRatio = `${e.width} / ${e.height}`), e.disableHeightLimit && (r.style.maxHeight = "none", t.classList.add(this.CSS.itemUnlimitedHeight)), e.disableDecoration && t.classList.add(this.CSS.itemPlain), r.onload = () => {
      a && (a.style.display = "none");
    }, i.appendChild(r), e.width && e.height) {
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
      const a = i, r = a.dataset.url;
      if (!r) return;
      const n = ((x = i.querySelector(`.${this.CSS.itemCaption}`)) == null ? void 0 : x.textContent) || "", s = ((E = i.querySelector(`.${this.CSS.itemSource}`)) == null ? void 0 : E.textContent) || "", d = ((M = i.querySelector(`.${this.CSS.itemSourceLink}`)) == null ? void 0 : M.textContent) || "", h = a.dataset.width ? parseInt(a.dataset.width, 10) : void 0, l = a.dataset.height ? parseInt(a.dataset.height, 10) : void 0, c = a.dataset.disableHeightLimit === "true", u = a.dataset.disableOptimization === "true", y = a.dataset.disableDecoration === "true", w = a.dataset.imagorPath || void 0, p = u ? void 0 : a.dataset.crop || void 0, f = !u && a.dataset.croppedWidth ? parseInt(a.dataset.croppedWidth, 10) : void 0, v = !u && a.dataset.croppedHeight ? parseInt(a.dataset.croppedHeight, 10) : void 0, g = !u && (a.dataset.cropAspectRatio === "16:9" || a.dataset.cropAspectRatio === "1:1") ? a.dataset.cropAspectRatio : !u && a.dataset.cropAspectRatio === "3:2" ? "3:2" : !u && a.dataset.cropAspectRatio === "free" ? "free" : void 0, b = u || a.dataset.showOriginalOnClick === void 0 ? void 0 : a.dataset.showOriginalOnClick === "true", S = a.dataset.mediaId || void 0, C = a.dataset.aiGenerated === "true", m = {
        url: r,
        media_id: S,
        imagorPath: w,
        caption: n,
        source: s,
        sourceLink: d,
        width: h,
        height: l,
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
  updateItemAfterCrop(t, e, i, a, r, n) {
    const s = t.querySelector(`.${this.CSS.itemImage} img`);
    if (s && !(e && t.dataset.disableOptimization === "true"))
      if (e) {
        t.dataset.crop = e, t.dataset.croppedWidth = String(i), t.dataset.croppedHeight = String(a), t.dataset.showOriginalOnClick = String(r ?? !1), t.dataset.cropAspectRatio = n ?? "3:2", t.classList.add(this.CSS.itemCropped);
        const d = t.dataset.imagorPath;
        d && (s.src = this.buildPreviewUrl(d, e)), s.style.width = "100%", s.style.maxHeight = "none", this.updateItemDimensions(t, i, a);
      } else
        delete t.dataset.crop, delete t.dataset.croppedWidth, delete t.dataset.croppedHeight, delete t.dataset.showOriginalOnClick, delete t.dataset.cropAspectRatio, t.classList.remove(this.CSS.itemCropped), s.src = t.dataset.disableOptimization === "true" ? t.dataset.url || "" : nt(t.dataset.url || ""), s.style.width = "", s.style.maxHeight = t.dataset.disableHeightLimit === "true" ? "none" : "", this.updateItemDimensions(
          t,
          t.dataset.width ? parseInt(t.dataset.width, 10) : void 0,
          t.dataset.height ? parseInt(t.dataset.height, 10) : void 0
        );
  }
  /** Update an item's effective dimensions badge and aspect ratio. */
  updateItemDimensions(t, e, i) {
    const a = t.querySelector(`.${this.CSS.itemImage}`), r = a == null ? void 0 : a.querySelector("img"), n = Number.isFinite(e) && Number.isFinite(i) && (e ?? 0) > 0 && (i ?? 0) > 0;
    let s = (a == null ? void 0 : a.querySelector(`.${this.CSS.itemDimensions}`)) ?? null;
    if (!n) {
      s == null || s.remove(), r && (r.style.aspectRatio = "");
      return;
    }
    s === null && a !== null && (s = D("div", [this.CSS.itemDimensions]), a.appendChild(s)), s !== null && (s.textContent = `${e} × ${i}`), r && (r.style.aspectRatio = `${e} / ${i}`);
  }
  /**
   * Build imagor preview URL with crop + fit-in resize.
   * Mirrors ImageService::url() logic using imagorPath (normalized short URL).
   */
  buildPreviewUrl(t, e, i = 600) {
    const a = this.config.mediaHost;
    if (!a || !t) return "";
    const r = ["unsafe"];
    return e && r.push(e), r.push("fit-in", `${i}x0`, t), `${a}/${r.join("/")}`;
  }
  /**
   * Get current columns count
   */
  getColumns() {
    return this.currentColumns;
  }
  createFileButton() {
    const t = D("div", [this.CSS.button]);
    return t.innerHTML = `${ce} ${this.config.buttonContent}`, t.addEventListener("click", () => this.onSelectFile()), t;
  }
  createAiBadge() {
    const t = D("span", [this.CSS.itemAiBadge], {
      title: $t
    });
    return t.innerHTML = He, t.setAttribute("aria-label", $t), t;
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
    const a = D("button", [this.CSS.columnsButton], { type: "button" });
    return a.innerHTML = "+", a.addEventListener("click", () => this.changeColumns(1)), t.appendChild(e), t.appendChild(i), t.appendChild(a), t;
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
      const h = t.dataset.url, l = t.dataset.mediaId;
      t.remove(), this.nodes.itemsContainer.children.length === 0 && (this.toggleState(
        "empty"
        /* Empty */
      ), this.columnsLocked = !1), this.autoAdjustColumns(), (h || l) && this.onRemoveImage(h ?? "", l);
    });
    const a = D("button", [this.CSS.itemMoveLeft], { type: "button" });
    a.innerHTML = "←", a.addEventListener("click", () => this.moveItem(t, -1));
    const r = D("button", [this.CSS.itemMoveRight], { type: "button" });
    r.innerHTML = "→", r.addEventListener("click", () => this.moveItem(t, 1));
    const n = D("button", [this.CSS.itemCrop], { type: "button" });
    n.innerHTML = Pe, n.title = this.api.i18n.t("Обрезать изображение"), n.setAttribute("aria-label", this.api.i18n.t("Обрезать изображение")), n.disabled = t.dataset.disableOptimization === "true", n.addEventListener("click", () => this.onCropImage(t));
    const s = Le({
      isEnabled: (h) => t.dataset[h] === "true",
      classes: {
        button: this.CSS.itemSettings,
        wrapper: this.CSS.itemSettingsWrapper,
        panel: this.CSS.itemSettingsPanel,
        option: this.CSS.itemSetting
      },
      translate: (h) => this.api.i18n.t(h),
      onChange: (h, l) => this.updateItemSetting(t, h, l)
    });
    if (e.appendChild(a), e.appendChild(n), e.appendChild(s), (d = this.config.cover) != null && d.enabled) {
      const h = D("button", ["gallery-tool__item-cover"], { type: "button" });
      h.innerHTML = "★", h.title = this.api.i18n.t("Сделать обложкой"), h.setAttribute("aria-label", this.api.i18n.t("Сделать обложкой")), h.setAttribute("aria-pressed", String(t.hasAttribute("data-cover"))), h.addEventListener("click", () => this.onSetCover(t)), e.appendChild(h);
    }
    return e.appendChild(i), e.appendChild(r), e;
  }
  updateItemSetting(t, e, i) {
    i ? t.dataset[e] = "true" : delete t.dataset[e];
    const a = t.querySelector(`.${this.CSS.itemImage} img`), r = t.querySelector(`.${this.CSS.itemCrop}`);
    e === "disableHeightLimit" && (t.classList.toggle(this.CSS.itemUnlimitedHeight, i), a && (a.style.maxHeight = i || t.classList.contains(this.CSS.itemCropped) ? "none" : "")), e === "disableOptimization" && (r == null || r.toggleAttribute("disabled", i), i ? this.updateItemAfterCrop(t, void 0, 0, 0, void 0, void 0) : a && (a.src = nt(t.dataset.url || ""))), e === "disableDecoration" && t.classList.toggle(this.CSS.itemPlain, i), this.onItemSettingsChange();
  }
  /**
   * Выбрать элемент gallery базовой обложкой в состоянии формы.
   */
  onSetCover(t) {
    var a;
    const e = this.config.cover;
    if (!(e != null && e.enabled))
      return !1;
    const i = t.dataset.mediaId;
    return i ? (this.markCover(i), (a = e.onCoverChanged) == null || a.call(e, i), this.api.notifier.show({ message: this.api.i18n.t("Базовая обложка обновлена") }), !0) : (this.api.notifier.show({ message: this.api.i18n.t("Сначала дождитесь загрузки картинки"), style: "error" }), !1);
  }
  /**
   * Подсветить элемент-обложку (по media uuid), снять метку с остальных.
   */
  markCover(t) {
    this.nodes.itemsContainer.querySelectorAll(`.${this.CSS.item}`).forEach((i) => {
      var n;
      const a = i, r = !!t && a.dataset.mediaId === t;
      a.toggleAttribute("data-cover", r), (n = a.querySelector('[aria-label="Сделать обложкой"]')) == null || n.setAttribute("aria-pressed", String(r));
    });
  }
  moveItem(t, e) {
    const i = Array.from(this.nodes.itemsContainer.children), r = i.indexOf(t) + e;
    r < 0 || r >= i.length || (e < 0 ? this.nodes.itemsContainer.insertBefore(t, i[r]) : this.nodes.itemsContainer.insertBefore(i[r], t));
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
let Ot = U;
function Be(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var de = { exports: {} };
(function(o, t) {
  (function(e, i) {
    o.exports = i();
  })(window, function() {
    return function(e) {
      var i = {};
      function a(r) {
        if (i[r]) return i[r].exports;
        var n = i[r] = { i: r, l: !1, exports: {} };
        return e[r].call(n.exports, n, n.exports, a), n.l = !0, n.exports;
      }
      return a.m = e, a.c = i, a.d = function(r, n, s) {
        a.o(r, n) || Object.defineProperty(r, n, { enumerable: !0, get: s });
      }, a.r = function(r) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
      }, a.t = function(r, n) {
        if (1 & n && (r = a(r)), 8 & n || 4 & n && typeof r == "object" && r && r.__esModule) return r;
        var s = /* @__PURE__ */ Object.create(null);
        if (a.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: r }), 2 & n && typeof r != "string") for (var d in r) a.d(s, d, (function(h) {
          return r[h];
        }).bind(null, d));
        return s;
      }, a.n = function(r) {
        var n = r && r.__esModule ? function() {
          return r.default;
        } : function() {
          return r;
        };
        return a.d(n, "a", n), n;
      }, a.o = function(r, n) {
        return Object.prototype.hasOwnProperty.call(r, n);
      }, a.p = "", a(a.s = 3);
    }([function(e, i) {
      var a;
      a = /* @__PURE__ */ function() {
        return this;
      }();
      try {
        a = a || new Function("return this")();
      } catch {
        typeof window == "object" && (a = window);
      }
      e.exports = a;
    }, function(e, i, a) {
      (function(r) {
        var n = a(2), s = setTimeout;
        function d() {
        }
        function h(f) {
          if (!(this instanceof h)) throw new TypeError("Promises must be constructed via new");
          if (typeof f != "function") throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], p(f, this);
        }
        function l(f, v) {
          for (; f._state === 3; ) f = f._value;
          f._state !== 0 ? (f._handled = !0, h._immediateFn(function() {
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
              if (v instanceof h) return f._state = 3, f._value = v, void y(f);
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
          f._state === 2 && f._deferreds.length === 0 && h._immediateFn(function() {
            f._handled || h._unhandledRejectionFn(f._value);
          });
          for (var v = 0, g = f._deferreds.length; v < g; v++) l(f, f._deferreds[v]);
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
        h.prototype.catch = function(f) {
          return this.then(null, f);
        }, h.prototype.then = function(f, v) {
          var g = new this.constructor(d);
          return l(this, new w(f, v, g)), g;
        }, h.prototype.finally = n.a, h.all = function(f) {
          return new h(function(v, g) {
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
        }, h.resolve = function(f) {
          return f && typeof f == "object" && f.constructor === h ? f : new h(function(v) {
            v(f);
          });
        }, h.reject = function(f) {
          return new h(function(v, g) {
            g(f);
          });
        }, h.race = function(f) {
          return new h(function(v, g) {
            for (var b = 0, S = f.length; b < S; b++) f[b].then(v, g);
          });
        }, h._immediateFn = typeof r == "function" && function(f) {
          r(f);
        } || function(f) {
          s(f, 0);
        }, h._unhandledRejectionFn = function(f) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", f);
        }, i.a = h;
      }).call(this, a(5).setImmediate);
    }, function(e, i, a) {
      i.a = function(r) {
        var n = this.constructor;
        return this.then(function(s) {
          return n.resolve(r()).then(function() {
            return s;
          });
        }, function(s) {
          return n.resolve(r()).then(function() {
            return n.reject(s);
          });
        });
      };
    }, function(e, i, a) {
      function r(p) {
        return (r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
          return typeof f;
        } : function(f) {
          return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
        })(p);
      }
      a(4);
      var n, s, d, h, l, c, u, y = a(8), w = (s = function(p) {
        return new Promise(function(f, v) {
          p = h(p), (p = l(p)).beforeSend && p.beforeSend();
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
      }, h = function() {
        var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (p.url && typeof p.url != "string") throw new Error("Url must be a string");
        if (p.url = p.url || "", p.method && typeof p.method != "string") throw new Error("`method` must be a string or null");
        if (p.method = p.method ? p.method.toUpperCase() : "GET", p.headers && r(p.headers) !== "object") throw new Error("`headers` must be an object or null");
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
      }, l = function(p) {
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
        return p = h(p), y.selectFiles(p).then(function(f) {
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
        return delete (p = h(p)).beforeSend, y.selectFiles(p);
      } });
      e.exports = w;
    }, function(e, i, a) {
      a.r(i);
      var r = a(1);
      window.Promise = window.Promise || r.a;
    }, function(e, i, a) {
      (function(r) {
        var n = r !== void 0 && r || typeof self < "u" && self || window, s = Function.prototype.apply;
        function d(h, l) {
          this._id = h, this._clearFn = l;
        }
        i.setTimeout = function() {
          return new d(s.call(setTimeout, n, arguments), clearTimeout);
        }, i.setInterval = function() {
          return new d(s.call(setInterval, n, arguments), clearInterval);
        }, i.clearTimeout = i.clearInterval = function(h) {
          h && h.close();
        }, d.prototype.unref = d.prototype.ref = function() {
        }, d.prototype.close = function() {
          this._clearFn.call(n, this._id);
        }, i.enroll = function(h, l) {
          clearTimeout(h._idleTimeoutId), h._idleTimeout = l;
        }, i.unenroll = function(h) {
          clearTimeout(h._idleTimeoutId), h._idleTimeout = -1;
        }, i._unrefActive = i.active = function(h) {
          clearTimeout(h._idleTimeoutId);
          var l = h._idleTimeout;
          l >= 0 && (h._idleTimeoutId = setTimeout(function() {
            h._onTimeout && h._onTimeout();
          }, l));
        }, a(6), i.setImmediate = typeof self < "u" && self.setImmediate || r !== void 0 && r.setImmediate || this && this.setImmediate, i.clearImmediate = typeof self < "u" && self.clearImmediate || r !== void 0 && r.clearImmediate || this && this.clearImmediate;
      }).call(this, a(0));
    }, function(e, i, a) {
      (function(r, n) {
        (function(s, d) {
          if (!s.setImmediate) {
            var h, l, c, u, y, w = 1, p = {}, f = !1, v = s.document, g = Object.getPrototypeOf && Object.getPrototypeOf(s);
            g = g && g.setTimeout ? g : s, {}.toString.call(s.process) === "[object process]" ? h = function(C) {
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
            }, s.addEventListener ? s.addEventListener("message", y, !1) : s.attachEvent("onmessage", y), h = function(C) {
              s.postMessage(u + C, "*");
            }) : s.MessageChannel ? ((c = new MessageChannel()).port1.onmessage = function(C) {
              S(C.data);
            }, h = function(C) {
              c.port2.postMessage(C);
            }) : v && "onreadystatechange" in v.createElement("script") ? (l = v.documentElement, h = function(C) {
              var m = v.createElement("script");
              m.onreadystatechange = function() {
                S(C), m.onreadystatechange = null, l.removeChild(m), m = null;
              }, l.appendChild(m);
            }) : h = function(C) {
              setTimeout(S, 0, C);
            }, g.setImmediate = function(C) {
              typeof C != "function" && (C = new Function("" + C));
              for (var m = new Array(arguments.length - 1), x = 0; x < m.length; x++) m[x] = arguments[x + 1];
              var E = { callback: C, args: m };
              return p[w] = E, h(w), w++;
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
        })(typeof self > "u" ? r === void 0 ? this : r : self);
      }).call(this, a(0), a(7));
    }, function(e, i) {
      var a, r, n = e.exports = {};
      function s() {
        throw new Error("setTimeout has not been defined");
      }
      function d() {
        throw new Error("clearTimeout has not been defined");
      }
      function h(g) {
        if (a === setTimeout) return setTimeout(g, 0);
        if ((a === s || !a) && setTimeout) return a = setTimeout, setTimeout(g, 0);
        try {
          return a(g, 0);
        } catch {
          try {
            return a.call(null, g, 0);
          } catch {
            return a.call(this, g, 0);
          }
        }
      }
      (function() {
        try {
          a = typeof setTimeout == "function" ? setTimeout : s;
        } catch {
          a = s;
        }
        try {
          r = typeof clearTimeout == "function" ? clearTimeout : d;
        } catch {
          r = d;
        }
      })();
      var l, c = [], u = !1, y = -1;
      function w() {
        u && l && (u = !1, l.length ? c = l.concat(c) : y = -1, c.length && p());
      }
      function p() {
        if (!u) {
          var g = h(w);
          u = !0;
          for (var b = c.length; b; ) {
            for (l = c, c = []; ++y < b; ) l && l[y].run();
            y = -1, b = c.length;
          }
          l = null, u = !1, function(S) {
            if (r === clearTimeout) return clearTimeout(S);
            if ((r === d || !r) && clearTimeout) return r = clearTimeout, clearTimeout(S);
            try {
              r(S);
            } catch {
              try {
                return r.call(null, S);
              } catch {
                return r.call(this, S);
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
        c.push(new f(g, b)), c.length !== 1 || u || h(p);
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
    }, function(e, i, a) {
      function r(s, d) {
        for (var h = 0; h < d.length; h++) {
          var l = d[h];
          l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(s, l.key, l);
        }
      }
      var n = a(9);
      e.exports = function() {
        function s() {
          (function(c, u) {
            if (!(c instanceof u)) throw new TypeError("Cannot call a class as a function");
          })(this, s);
        }
        var d, h, l;
        return d = s, l = [{ key: "urlEncode", value: function(c) {
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
        } }], (h = null) && r(d.prototype, h), l && r(d, l), s;
      }();
    }, function(e, i) {
      var a = function(n) {
        return encodeURIComponent(n).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, r = function(n, s, d, h) {
        return s = s || null, d = d || "&", h = h || null, n ? function(l) {
          for (var c = new Array(), u = 0; u < l.length; u++) l[u] && c.push(l[u]);
          return c;
        }(Object.keys(n).map(function(l) {
          var c, u, y = l;
          if (h && (y = h + "[" + y + "]"), typeof n[l] == "object" && n[l] !== null) c = r(n[l], null, d, y);
          else {
            s && (u = y, y = !isNaN(parseFloat(u)) && isFinite(u) ? s + Number(y) : y);
            var w = n[l];
            w = (w = (w = (w = w === !0 ? "1" : w) === !1 ? "0" : w) === 0 ? "0" : w) || "", c = a(y) + "=" + a(w);
          }
          return c;
        })).join(d).replace(/[!'()*]/g, "") : "";
      };
      e.exports = r;
    }]);
  });
})(de);
var Ue = de.exports;
const Q = /* @__PURE__ */ Be(Ue);
function Ct(o) {
  return o !== void 0 && typeof o.then == "function";
}
class Yt extends Error {
}
class je {
  constructor({ config: t, onUpload: e, onError: i }) {
    this.config = t, this.onUpload = e, this.onError = i;
  }
  /**
   * Upload file selected from device
   */
  uploadSelectedFile({ onPreview: t, onNonImageFile: e }) {
    var r;
    const i = (n) => {
      const s = new FileReader();
      s.readAsDataURL(n), s.onload = (d) => {
        t(d.target.result);
      }, s.onerror = () => {
        this.onError("Failed to read file");
      };
    };
    let a;
    if ((r = this.config.uploader) != null && r.uploadByFile)
      a = Q.selectFiles({ accept: this.config.types ?? "image/*" }).then((n) => {
        if (!n || n.length === 0)
          throw new Error("No file selected");
        if ((e == null ? void 0 : e(n[0])) === !0)
          throw new Yt();
        i(n[0]);
        const s = this.config.uploader.uploadByFile(n[0]);
        return Ct(s) || console.warn("Custom uploader method uploadByFile should return a Promise"), s;
      });
    else {
      if (!this.config.endpoints.byFile) {
        this.onError("Upload endpoint (byFile) is not configured");
        return;
      }
      a = Q.transport({
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
    a.then((n) => this.onUpload(n)).catch((n) => {
      n instanceof Yt || this.onError(n);
    });
  }
  /**
   * Upload image by URL
   */
  uploadByUrl(t) {
    var i;
    let e;
    if ((i = this.config.uploader) != null && i.uploadByUrl)
      e = this.config.uploader.uploadByUrl(t), Ct(e) || console.warn("Custom uploader method uploadByUrl should return a Promise");
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
      }).then((a) => a.body);
    }
    e.then((a) => this.onUpload(a)).catch((a) => this.onError(a));
  }
  /**
   * Upload file from drag-n-drop or paste
   */
  uploadByFile(t, { onPreview: e }) {
    const i = new FileReader();
    i.onload = (a) => {
      var n;
      e(a.target.result);
      let r;
      if ((n = this.config.uploader) != null && n.uploadByFile)
        r = this.config.uploader.uploadByFile(t), Ct(r) || console.warn("Custom uploader method uploadByFile should return a Promise");
      else {
        if (!this.config.endpoints.byFile) {
          this.onError("Upload endpoint (byFile) is not configured");
          return;
        }
        const s = new FormData();
        s.append(this.config.field ?? "image", t), this.config.additionalRequestData && Object.entries(this.config.additionalRequestData).forEach(([d, h]) => {
          s.append(d, h);
        }), r = Q.post({
          url: this.config.endpoints.byFile,
          data: s,
          type: Q.contentType.JSON,
          headers: this.config.additionalRequestHeaders
        }).then((d) => d.body);
      }
      r.then((s) => this.onUpload(s)).catch((s) => this.onError(s));
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
function qt(o, t) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(o);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(o, a).enumerable;
    })), e.push.apply(e, i);
  }
  return e;
}
function ue(o) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qt(Object(e), !0).forEach(function(i) {
      Xe(o, i, e[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : qt(Object(e)).forEach(function(i) {
      Object.defineProperty(o, i, Object.getOwnPropertyDescriptor(e, i));
    });
  }
  return o;
}
function Fe(o, t) {
  if (typeof o != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(o, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(o);
}
function pe(o) {
  var t = Fe(o, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Dt(o) {
  "@babel/helpers - typeof";
  return Dt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dt(o);
}
function ze(o, t) {
  if (!(o instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gt(o, t) {
  for (var e = 0; e < t.length; e++) {
    var i = t[e];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(o, pe(i.key), i);
  }
}
function We(o, t, e) {
  return t && Gt(o.prototype, t), e && Gt(o, e), Object.defineProperty(o, "prototype", {
    writable: !1
  }), o;
}
function Xe(o, t, e) {
  return t = pe(t), t in o ? Object.defineProperty(o, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : o[t] = e, o;
}
function fe(o) {
  return $e(o) || Ye(o) || qe(o) || Ge();
}
function $e(o) {
  if (Array.isArray(o)) return Mt(o);
}
function Ye(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null) return Array.from(o);
}
function qe(o, t) {
  if (o) {
    if (typeof o == "string") return Mt(o, t);
    var e = Object.prototype.toString.call(o).slice(8, -1);
    if (e === "Object" && o.constructor && (e = o.constructor.name), e === "Map" || e === "Set") return Array.from(o);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Mt(o, t);
  }
}
function Mt(o, t) {
  (t == null || t > o.length) && (t = o.length);
  for (var e = 0, i = new Array(t); e < t; e++) i[e] = o[e];
  return i;
}
function Ge() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var yt = typeof window < "u" && typeof window.document < "u", z = yt ? window : {}, Pt = yt && z.document.documentElement ? "ontouchstart" in z.document.documentElement : !1, Ht = yt ? "PointerEvent" in z : !1, _ = "cropper", Bt = "all", me = "crop", ge = "move", ve = "zoom", J = "e", Z = "w", tt = "s", X = "n", ot = "ne", st = "nw", ht = "se", lt = "sw", _t = "".concat(_, "-crop"), Vt = "".concat(_, "-disabled"), N = "".concat(_, "-hidden"), Jt = "".concat(_, "-hide"), Ve = "".concat(_, "-invisible"), vt = "".concat(_, "-modal"), Tt = "".concat(_, "-move"), dt = "".concat(_, "Action"), ft = "".concat(_, "Preview"), Ut = "crop", ye = "move", we = "none", It = "crop", At = "cropend", Lt = "cropmove", Rt = "cropstart", Zt = "dblclick", Je = Pt ? "touchstart" : "mousedown", Ze = Pt ? "touchmove" : "mousemove", Ke = Pt ? "touchend touchcancel" : "mouseup", Kt = Ht ? "pointerdown" : Je, Qt = Ht ? "pointermove" : Ze, te = Ht ? "pointerup pointercancel" : Ke, ee = "ready", ie = "resize", re = "wheel", kt = "zoom", ae = "image/jpeg", Qe = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, ti = /^data:/, ei = /^data:image\/jpeg;base64,/, ii = /^img|canvas$/i, be = 200, Ce = 100, ne = {
  // Define the view mode of the cropper
  viewMode: 0,
  // 0, 1, 2, 3
  // Define the dragging mode of the cropper
  dragMode: Ut,
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
  minContainerWidth: be,
  minContainerHeight: Ce,
  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
}, ri = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', ai = Number.isNaN || z.isNaN;
function O(o) {
  return typeof o == "number" && !ai(o);
}
var oe = function(t) {
  return t > 0 && t < 1 / 0;
};
function St(o) {
  return typeof o > "u";
}
function K(o) {
  return Dt(o) === "object" && o !== null;
}
var ni = Object.prototype.hasOwnProperty;
function et(o) {
  if (!K(o))
    return !1;
  try {
    var t = o.constructor, e = t.prototype;
    return t && e && ni.call(e, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function k(o) {
  return typeof o == "function";
}
var oi = Array.prototype.slice;
function Se(o) {
  return Array.from ? Array.from(o) : oi.call(o);
}
function A(o, t) {
  return o && k(t) && (Array.isArray(o) || O(o.length) ? Se(o).forEach(function(e, i) {
    t.call(o, e, i, o);
  }) : K(o) && Object.keys(o).forEach(function(e) {
    t.call(o, o[e], e, o);
  })), o;
}
var T = Object.assign || function(t) {
  for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++)
    i[a - 1] = arguments[a];
  return K(t) && i.length > 0 && i.forEach(function(r) {
    K(r) && Object.keys(r).forEach(function(n) {
      t[n] = r[n];
    });
  }), t;
}, si = /\.\d*(?:0|9){12}\d*$/;
function rt(o) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return si.test(o) ? Math.round(o * t) / t : o;
}
var hi = /^width|height|left|top|marginLeft|marginTop$/;
function $(o, t) {
  var e = o.style;
  A(t, function(i, a) {
    hi.test(a) && O(i) && (i = "".concat(i, "px")), e[a] = i;
  });
}
function li(o, t) {
  return o.classList ? o.classList.contains(t) : o.className.indexOf(t) > -1;
}
function L(o, t) {
  if (t) {
    if (O(o.length)) {
      A(o, function(i) {
        L(i, t);
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
      A(o, function(e) {
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
      A(o, function(i) {
        it(i, t, e);
      });
      return;
    }
    e ? L(o, t) : F(o, t);
  }
}
var ci = /([a-z\d])([A-Z])/g;
function jt(o) {
  return o.replace(ci, "$1-$2").toLowerCase();
}
function Nt(o, t) {
  return K(o[t]) ? o[t] : o.dataset ? o.dataset[t] : o.getAttribute("data-".concat(jt(t)));
}
function ut(o, t, e) {
  K(e) ? o[t] = e : o.dataset ? o.dataset[t] = e : o.setAttribute("data-".concat(jt(t)), e);
}
function di(o, t) {
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
    o.removeAttribute("data-".concat(jt(t)));
}
var xe = /\s\s*/, Ee = function() {
  var o = !1;
  if (yt) {
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
      set: function(r) {
        t = r;
      }
    });
    z.addEventListener("test", e, i), z.removeEventListener("test", e, i);
  }
  return o;
}();
function B(o, t, e) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = e;
  t.trim().split(xe).forEach(function(r) {
    if (!Ee) {
      var n = o.listeners;
      n && n[r] && n[r][e] && (a = n[r][e], delete n[r][e], Object.keys(n[r]).length === 0 && delete n[r], Object.keys(n).length === 0 && delete o.listeners);
    }
    o.removeEventListener(r, a, i);
  });
}
function H(o, t, e) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = e;
  t.trim().split(xe).forEach(function(r) {
    if (i.once && !Ee) {
      var n = o.listeners, s = n === void 0 ? {} : n;
      a = function() {
        delete s[r][e], o.removeEventListener(r, a, i);
        for (var h = arguments.length, l = new Array(h), c = 0; c < h; c++)
          l[c] = arguments[c];
        e.apply(o, l);
      }, s[r] || (s[r] = {}), s[r][e] && o.removeEventListener(r, s[r][e], i), s[r][e] = a, o.listeners = s;
    }
    o.addEventListener(r, a, i);
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
function Oe(o) {
  var t = o.getBoundingClientRect();
  return {
    left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: t.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var xt = z.location, ui = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function se(o) {
  var t = o.match(ui);
  return t !== null && (t[1] !== xt.protocol || t[2] !== xt.hostname || t[3] !== xt.port);
}
function he(o) {
  var t = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return o + (o.indexOf("?") === -1 ? "?" : "&") + t;
}
function ct(o) {
  var t = o.rotate, e = o.scaleX, i = o.scaleY, a = o.translateX, r = o.translateY, n = [];
  O(a) && a !== 0 && n.push("translateX(".concat(a, "px)")), O(r) && r !== 0 && n.push("translateY(".concat(r, "px)")), O(t) && t !== 0 && n.push("rotate(".concat(t, "deg)")), O(e) && e !== 1 && n.push("scaleX(".concat(e, ")")), O(i) && i !== 1 && n.push("scaleY(".concat(i, ")"));
  var s = n.length ? n.join(" ") : "none";
  return {
    WebkitTransform: s,
    msTransform: s,
    transform: s
  };
}
function pi(o) {
  var t = ue({}, o), e = 0;
  return A(o, function(i, a) {
    delete t[a], A(t, function(r) {
      var n = Math.abs(i.startX - r.startX), s = Math.abs(i.startY - r.startY), d = Math.abs(i.endX - r.endX), h = Math.abs(i.endY - r.endY), l = Math.sqrt(n * n + s * s), c = Math.sqrt(d * d + h * h), u = (c - l) / l;
      Math.abs(u) > Math.abs(e) && (e = u);
    });
  }), e;
}
function mt(o, t) {
  var e = o.pageX, i = o.pageY, a = {
    endX: e,
    endY: i
  };
  return t ? a : ue({
    startX: e,
    startY: i
  }, a);
}
function fi(o) {
  var t = 0, e = 0, i = 0;
  return A(o, function(a) {
    var r = a.startX, n = a.startY;
    t += r, e += n, i += 1;
  }), t /= i, e /= i, {
    pageX: t,
    pageY: e
  };
}
function Y(o) {
  var t = o.aspectRatio, e = o.height, i = o.width, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", r = oe(i), n = oe(e);
  if (r && n) {
    var s = e * t;
    a === "contain" && s > i || a === "cover" && s < i ? e = i / t : i = e * t;
  } else r ? e = i / t : n && (i = e * t);
  return {
    width: i,
    height: e
  };
}
function mi(o) {
  var t = o.width, e = o.height, i = o.degree;
  if (i = Math.abs(i) % 180, i === 90)
    return {
      width: e,
      height: t
    };
  var a = i % 90 * Math.PI / 180, r = Math.sin(a), n = Math.cos(a), s = t * n + e * r, d = t * r + e * n;
  return i > 90 ? {
    width: d,
    height: s
  } : {
    width: s,
    height: d
  };
}
function gi(o, t, e, i) {
  var a = t.aspectRatio, r = t.naturalWidth, n = t.naturalHeight, s = t.rotate, d = s === void 0 ? 0 : s, h = t.scaleX, l = h === void 0 ? 1 : h, c = t.scaleY, u = c === void 0 ? 1 : c, y = e.aspectRatio, w = e.naturalWidth, p = e.naturalHeight, f = i.fillColor, v = f === void 0 ? "transparent" : f, g = i.imageSmoothingEnabled, b = g === void 0 ? !0 : g, S = i.imageSmoothingQuality, C = S === void 0 ? "low" : S, m = i.maxWidth, x = m === void 0 ? 1 / 0 : m, E = i.maxHeight, M = E === void 0 ? 1 / 0 : E, P = i.minWidth, q = P === void 0 ? 0 : P, G = i.minHeight, W = G === void 0 ? 0 : G, j = document.createElement("canvas"), R = j.getContext("2d"), V = Y({
    aspectRatio: y,
    width: x,
    height: M
  }), pt = Y({
    aspectRatio: y,
    width: q,
    height: W
  }, "cover"), wt = Math.min(V.width, Math.max(pt.width, w)), bt = Math.min(V.height, Math.max(pt.height, p)), Ft = Y({
    aspectRatio: a,
    width: x,
    height: M
  }), zt = Y({
    aspectRatio: a,
    width: q,
    height: W
  }, "cover"), Wt = Math.min(Ft.width, Math.max(zt.width, r)), Xt = Math.min(Ft.height, Math.max(zt.height, n)), _e = [-Wt / 2, -Xt / 2, Wt, Xt];
  return j.width = rt(wt), j.height = rt(bt), R.fillStyle = v, R.fillRect(0, 0, wt, bt), R.save(), R.translate(wt / 2, bt / 2), R.rotate(d * Math.PI / 180), R.scale(l, u), R.imageSmoothingEnabled = b, R.imageSmoothingQuality = C, R.drawImage.apply(R, [o].concat(fe(_e.map(function(Te) {
    return Math.floor(rt(Te));
  })))), R.restore(), j;
}
var De = String.fromCharCode;
function vi(o, t, e) {
  var i = "";
  e += t;
  for (var a = t; a < e; a += 1)
    i += De(o.getUint8(a));
  return i;
}
var yi = /^data:.*,/;
function wi(o) {
  var t = o.replace(yi, ""), e = atob(t), i = new ArrayBuffer(e.length), a = new Uint8Array(i);
  return A(a, function(r, n) {
    a[n] = e.charCodeAt(n);
  }), i;
}
function bi(o, t) {
  for (var e = [], i = 8192, a = new Uint8Array(o); a.length > 0; )
    e.push(De.apply(null, Se(a.subarray(0, i)))), a = a.subarray(i);
  return "data:".concat(t, ";base64,").concat(btoa(e.join("")));
}
function Ci(o) {
  var t = new DataView(o), e;
  try {
    var i, a, r;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var n = t.byteLength, s = 2; s + 1 < n; ) {
        if (t.getUint8(s) === 255 && t.getUint8(s + 1) === 225) {
          a = s;
          break;
        }
        s += 1;
      }
    if (a) {
      var d = a + 4, h = a + 10;
      if (vi(t, d, 4) === "Exif") {
        var l = t.getUint16(h);
        if (i = l === 18761, (i || l === 19789) && t.getUint16(h + 2, i) === 42) {
          var c = t.getUint32(h + 4, i);
          c >= 8 && (r = h + c);
        }
      }
    }
    if (r) {
      var u = t.getUint16(r, i), y, w;
      for (w = 0; w < u; w += 1)
        if (y = r + w * 12 + 2, t.getUint16(y, i) === 274) {
          y += 8, e = t.getUint16(y, i), t.setUint16(y, 1, i);
          break;
        }
    }
  } catch {
    e = 1;
  }
  return e;
}
function Si(o) {
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
var xi = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var t = this.element, e = this.options, i = this.container, a = this.cropper, r = Number(e.minContainerWidth), n = Number(e.minContainerHeight);
    L(a, N), F(t, N);
    var s = {
      width: Math.max(i.offsetWidth, r >= 0 ? r : be),
      height: Math.max(i.offsetHeight, n >= 0 ? n : Ce)
    };
    this.containerData = s, $(a, {
      width: s.width,
      height: s.height
    }), L(t, N), F(a, N);
  },
  // Canvas (image wrapper)
  initCanvas: function() {
    var t = this.containerData, e = this.imageData, i = this.options.viewMode, a = Math.abs(e.rotate) % 180 === 90, r = a ? e.naturalHeight : e.naturalWidth, n = a ? e.naturalWidth : e.naturalHeight, s = r / n, d = t.width, h = t.height;
    t.height * s > t.width ? i === 3 ? d = t.height * s : h = t.width / s : i === 3 ? h = t.width / s : d = t.height * s;
    var l = {
      aspectRatio: s,
      naturalWidth: r,
      naturalHeight: n,
      width: d,
      height: h
    };
    this.canvasData = l, this.limited = i === 1 || i === 2, this.limitCanvas(!0, !0), l.width = Math.min(Math.max(l.width, l.minWidth), l.maxWidth), l.height = Math.min(Math.max(l.height, l.minHeight), l.maxHeight), l.left = (t.width - l.width) / 2, l.top = (t.height - l.height) / 2, l.oldLeft = l.left, l.oldTop = l.top, this.initialCanvasData = T({}, l);
  },
  limitCanvas: function(t, e) {
    var i = this.options, a = this.containerData, r = this.canvasData, n = this.cropBoxData, s = i.viewMode, d = r.aspectRatio, h = this.cropped && n;
    if (t) {
      var l = Number(i.minCanvasWidth) || 0, c = Number(i.minCanvasHeight) || 0;
      s > 1 ? (l = Math.max(l, a.width), c = Math.max(c, a.height), s === 3 && (c * d > l ? l = c * d : c = l / d)) : s > 0 && (l ? l = Math.max(l, h ? n.width : 0) : c ? c = Math.max(c, h ? n.height : 0) : h && (l = n.width, c = n.height, c * d > l ? l = c * d : c = l / d));
      var u = Y({
        aspectRatio: d,
        width: l,
        height: c
      });
      l = u.width, c = u.height, r.minWidth = l, r.minHeight = c, r.maxWidth = 1 / 0, r.maxHeight = 1 / 0;
    }
    if (e)
      if (s > (h ? 0 : 1)) {
        var y = a.width - r.width, w = a.height - r.height;
        r.minLeft = Math.min(0, y), r.minTop = Math.min(0, w), r.maxLeft = Math.max(0, y), r.maxTop = Math.max(0, w), h && this.limited && (r.minLeft = Math.min(n.left, n.left + (n.width - r.width)), r.minTop = Math.min(n.top, n.top + (n.height - r.height)), r.maxLeft = n.left, r.maxTop = n.top, s === 2 && (r.width >= a.width && (r.minLeft = Math.min(0, y), r.maxLeft = Math.max(0, y)), r.height >= a.height && (r.minTop = Math.min(0, w), r.maxTop = Math.max(0, w))));
      } else
        r.minLeft = -r.width, r.minTop = -r.height, r.maxLeft = a.width, r.maxTop = a.height;
  },
  renderCanvas: function(t, e) {
    var i = this.canvasData, a = this.imageData;
    if (e) {
      var r = mi({
        width: a.naturalWidth * Math.abs(a.scaleX || 1),
        height: a.naturalHeight * Math.abs(a.scaleY || 1),
        degree: a.rotate || 0
      }), n = r.width, s = r.height, d = i.width * (n / i.naturalWidth), h = i.height * (s / i.naturalHeight);
      i.left -= (d - i.width) / 2, i.top -= (h - i.height) / 2, i.width = d, i.height = h, i.aspectRatio = n / s, i.naturalWidth = n, i.naturalHeight = s, this.limitCanvas(!0, !1);
    }
    (i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCanvas(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, $(this.canvas, T({
      width: i.width,
      height: i.height
    }, ct({
      translateX: i.left,
      translateY: i.top
    }))), this.renderImage(t), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(t) {
    var e = this.canvasData, i = this.imageData, a = i.naturalWidth * (e.width / e.naturalWidth), r = i.naturalHeight * (e.height / e.naturalHeight);
    T(i, {
      width: a,
      height: r,
      left: (e.width - a) / 2,
      top: (e.height - r) / 2
    }), $(this.image, T({
      width: i.width,
      height: i.height
    }, ct(T({
      translateX: i.left,
      translateY: i.top
    }, i)))), t && this.output();
  },
  initCropBox: function() {
    var t = this.options, e = this.canvasData, i = t.aspectRatio || t.initialAspectRatio, a = Number(t.autoCropArea) || 0.8, r = {
      width: e.width,
      height: e.height
    };
    i && (e.height * i > e.width ? r.height = r.width / i : r.width = r.height * i), this.cropBoxData = r, this.limitCropBox(!0, !0), r.width = Math.min(Math.max(r.width, r.minWidth), r.maxWidth), r.height = Math.min(Math.max(r.height, r.minHeight), r.maxHeight), r.width = Math.max(r.minWidth, r.width * a), r.height = Math.max(r.minHeight, r.height * a), r.left = e.left + (e.width - r.width) / 2, r.top = e.top + (e.height - r.height) / 2, r.oldLeft = r.left, r.oldTop = r.top, this.initialCropBoxData = T({}, r);
  },
  limitCropBox: function(t, e) {
    var i = this.options, a = this.containerData, r = this.canvasData, n = this.cropBoxData, s = this.limited, d = i.aspectRatio;
    if (t) {
      var h = Number(i.minCropBoxWidth) || 0, l = Number(i.minCropBoxHeight) || 0, c = s ? Math.min(a.width, r.width, r.width + r.left, a.width - r.left) : a.width, u = s ? Math.min(a.height, r.height, r.height + r.top, a.height - r.top) : a.height;
      h = Math.min(h, a.width), l = Math.min(l, a.height), d && (h && l ? l * d > h ? l = h / d : h = l * d : h ? l = h / d : l && (h = l * d), u * d > c ? u = c / d : c = u * d), n.minWidth = Math.min(h, c), n.minHeight = Math.min(l, u), n.maxWidth = c, n.maxHeight = u;
    }
    e && (s ? (n.minLeft = Math.max(0, r.left), n.minTop = Math.max(0, r.top), n.maxLeft = Math.min(a.width, r.left + r.width) - n.width, n.maxTop = Math.min(a.height, r.top + r.height) - n.height) : (n.minLeft = 0, n.minTop = 0, n.maxLeft = a.width - n.width, n.maxTop = a.height - n.height));
  },
  renderCropBox: function() {
    var t = this.options, e = this.containerData, i = this.cropBoxData;
    (i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCropBox(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, t.movable && t.cropBoxMovable && ut(this.face, dt, i.width >= e.width && i.height >= e.height ? ge : Bt), $(this.cropBox, T({
      width: i.width,
      height: i.height
    }, ct({
      translateX: i.left,
      translateY: i.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), at(this.element, It, this.getData());
  }
}, Ei = {
  initPreview: function() {
    var t = this.element, e = this.crossOrigin, i = this.options.preview, a = e ? this.crossOriginUrl : this.url, r = t.alt || "The image to preview", n = document.createElement("img");
    if (e && (n.crossOrigin = e), n.src = a, n.alt = r, this.viewBox.appendChild(n), this.viewBoxImage = n, !!i) {
      var s = i;
      typeof i == "string" ? s = t.ownerDocument.querySelectorAll(i) : i.querySelector && (s = [i]), this.previews = s, A(s, function(d) {
        var h = document.createElement("img");
        ut(d, ft, {
          width: d.offsetWidth,
          height: d.offsetHeight,
          html: d.innerHTML
        }), e && (h.crossOrigin = e), h.src = a, h.alt = r, h.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', d.innerHTML = "", d.appendChild(h);
      });
    }
  },
  resetPreview: function() {
    A(this.previews, function(t) {
      var e = Nt(t, ft);
      $(t, {
        width: e.width,
        height: e.height
      }), t.innerHTML = e.html, di(t, ft);
    });
  },
  preview: function() {
    var t = this.imageData, e = this.canvasData, i = this.cropBoxData, a = i.width, r = i.height, n = t.width, s = t.height, d = i.left - e.left - t.left, h = i.top - e.top - t.top;
    !this.cropped || this.disabled || ($(this.viewBoxImage, T({
      width: n,
      height: s
    }, ct(T({
      translateX: -d,
      translateY: -h
    }, t)))), A(this.previews, function(l) {
      var c = Nt(l, ft), u = c.width, y = c.height, w = u, p = y, f = 1;
      a && (f = u / a, p = r * f), r && p > y && (f = y / r, w = a * f, p = y), $(l, {
        width: w,
        height: p
      }), $(l.getElementsByTagName("img")[0], T({
        width: n * f,
        height: s * f
      }, ct(T({
        translateX: -d * f,
        translateY: -h * f
      }, t))));
    }));
  }
}, Oi = {
  bind: function() {
    var t = this.element, e = this.options, i = this.cropper;
    k(e.cropstart) && H(t, Rt, e.cropstart), k(e.cropmove) && H(t, Lt, e.cropmove), k(e.cropend) && H(t, At, e.cropend), k(e.crop) && H(t, It, e.crop), k(e.zoom) && H(t, kt, e.zoom), H(i, Kt, this.onCropStart = this.cropStart.bind(this)), e.zoomable && e.zoomOnWheel && H(i, re, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), e.toggleDragModeOnDblclick && H(i, Zt, this.onDblclick = this.dblclick.bind(this)), H(t.ownerDocument, Qt, this.onCropMove = this.cropMove.bind(this)), H(t.ownerDocument, te, this.onCropEnd = this.cropEnd.bind(this)), e.responsive && H(window, ie, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var t = this.element, e = this.options, i = this.cropper;
    k(e.cropstart) && B(t, Rt, e.cropstart), k(e.cropmove) && B(t, Lt, e.cropmove), k(e.cropend) && B(t, At, e.cropend), k(e.crop) && B(t, It, e.crop), k(e.zoom) && B(t, kt, e.zoom), B(i, Kt, this.onCropStart), e.zoomable && e.zoomOnWheel && B(i, re, this.onWheel, {
      passive: !1,
      capture: !0
    }), e.toggleDragModeOnDblclick && B(i, Zt, this.onDblclick), B(t.ownerDocument, Qt, this.onCropMove), B(t.ownerDocument, te, this.onCropEnd), e.responsive && B(window, ie, this.onResize);
  }
}, Di = {
  resize: function() {
    if (!this.disabled) {
      var t = this.options, e = this.container, i = this.containerData, a = e.offsetWidth / i.width, r = e.offsetHeight / i.height, n = Math.abs(a - 1) > Math.abs(r - 1) ? a : r;
      if (n !== 1) {
        var s, d;
        t.restore && (s = this.getCanvasData(), d = this.getCropBoxData()), this.render(), t.restore && (this.setCanvasData(A(s, function(h, l) {
          s[l] = h * n;
        })), this.setCropBoxData(A(d, function(h, l) {
          d[l] = h * n;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === we || this.setDragMode(li(this.dragBox, _t) ? ye : Ut);
  },
  wheel: function(t) {
    var e = this, i = Number(this.options.wheelZoomRatio) || 0.1, a = 1;
    this.disabled || (t.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      e.wheeling = !1;
    }, 50), t.deltaY ? a = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? a = -t.wheelDelta / 120 : t.detail && (a = t.detail > 0 ? 1 : -1), this.zoom(-a * i, t)));
  },
  cropStart: function(t) {
    var e = t.buttons, i = t.button;
    if (!(this.disabled || (t.type === "mousedown" || t.type === "pointerdown" && t.pointerType === "mouse") && // No primary button (Usually the left button)
    (O(e) && e !== 1 || O(i) && i !== 0 || t.ctrlKey))) {
      var a = this.options, r = this.pointers, n;
      t.changedTouches ? A(t.changedTouches, function(s) {
        r[s.identifier] = mt(s);
      }) : r[t.pointerId || 0] = mt(t), Object.keys(r).length > 1 && a.zoomable && a.zoomOnTouch ? n = ve : n = Nt(t.target, dt), Qe.test(n) && at(this.element, Rt, {
        originalEvent: t,
        action: n
      }) !== !1 && (t.preventDefault(), this.action = n, this.cropping = !1, n === me && (this.cropping = !0, L(this.dragBox, vt)));
    }
  },
  cropMove: function(t) {
    var e = this.action;
    if (!(this.disabled || !e)) {
      var i = this.pointers;
      t.preventDefault(), at(this.element, Lt, {
        originalEvent: t,
        action: e
      }) !== !1 && (t.changedTouches ? A(t.changedTouches, function(a) {
        T(i[a.identifier] || {}, mt(a, !0));
      }) : T(i[t.pointerId || 0] || {}, mt(t, !0)), this.change(t));
    }
  },
  cropEnd: function(t) {
    if (!this.disabled) {
      var e = this.action, i = this.pointers;
      t.changedTouches ? A(t.changedTouches, function(a) {
        delete i[a.identifier];
      }) : delete i[t.pointerId || 0], e && (t.preventDefault(), Object.keys(i).length || (this.action = ""), this.cropping && (this.cropping = !1, it(this.dragBox, vt, this.cropped && this.options.modal)), at(this.element, At, {
        originalEvent: t,
        action: e
      }));
    }
  }
}, Mi = {
  change: function(t) {
    var e = this.options, i = this.canvasData, a = this.containerData, r = this.cropBoxData, n = this.pointers, s = this.action, d = e.aspectRatio, h = r.left, l = r.top, c = r.width, u = r.height, y = h + c, w = l + u, p = 0, f = 0, v = a.width, g = a.height, b = !0, S;
    !d && t.shiftKey && (d = c && u ? c / u : 1), this.limited && (p = r.minLeft, f = r.minTop, v = p + Math.min(a.width, i.width, i.left + i.width), g = f + Math.min(a.height, i.height, i.top + i.height));
    var C = n[Object.keys(n)[0]], m = {
      x: C.endX - C.startX,
      y: C.endY - C.startY
    }, x = function(M) {
      switch (M) {
        case J:
          y + m.x > v && (m.x = v - y);
          break;
        case Z:
          h + m.x < p && (m.x = p - h);
          break;
        case X:
          l + m.y < f && (m.y = f - l);
          break;
        case tt:
          w + m.y > g && (m.y = g - w);
          break;
      }
    };
    switch (s) {
      case Bt:
        h += m.x, l += m.y;
        break;
      case J:
        if (m.x >= 0 && (y >= v || d && (l <= f || w >= g))) {
          b = !1;
          break;
        }
        x(J), c += m.x, c < 0 && (s = Z, c = -c, h -= c), d && (u = c / d, l += (r.height - u) / 2);
        break;
      case X:
        if (m.y <= 0 && (l <= f || d && (h <= p || y >= v))) {
          b = !1;
          break;
        }
        x(X), u -= m.y, l += m.y, u < 0 && (s = tt, u = -u, l -= u), d && (c = u * d, h += (r.width - c) / 2);
        break;
      case Z:
        if (m.x <= 0 && (h <= p || d && (l <= f || w >= g))) {
          b = !1;
          break;
        }
        x(Z), c -= m.x, h += m.x, c < 0 && (s = J, c = -c, h -= c), d && (u = c / d, l += (r.height - u) / 2);
        break;
      case tt:
        if (m.y >= 0 && (w >= g || d && (h <= p || y >= v))) {
          b = !1;
          break;
        }
        x(tt), u += m.y, u < 0 && (s = X, u = -u, l -= u), d && (c = u * d, h += (r.width - c) / 2);
        break;
      case ot:
        if (d) {
          if (m.y <= 0 && (l <= f || y >= v)) {
            b = !1;
            break;
          }
          x(X), u -= m.y, l += m.y, c = u * d;
        } else
          x(X), x(J), m.x >= 0 ? y < v ? c += m.x : m.y <= 0 && l <= f && (b = !1) : c += m.x, m.y <= 0 ? l > f && (u -= m.y, l += m.y) : (u -= m.y, l += m.y);
        c < 0 && u < 0 ? (s = lt, u = -u, c = -c, l -= u, h -= c) : c < 0 ? (s = st, c = -c, h -= c) : u < 0 && (s = ht, u = -u, l -= u);
        break;
      case st:
        if (d) {
          if (m.y <= 0 && (l <= f || h <= p)) {
            b = !1;
            break;
          }
          x(X), u -= m.y, l += m.y, c = u * d, h += r.width - c;
        } else
          x(X), x(Z), m.x <= 0 ? h > p ? (c -= m.x, h += m.x) : m.y <= 0 && l <= f && (b = !1) : (c -= m.x, h += m.x), m.y <= 0 ? l > f && (u -= m.y, l += m.y) : (u -= m.y, l += m.y);
        c < 0 && u < 0 ? (s = ht, u = -u, c = -c, l -= u, h -= c) : c < 0 ? (s = ot, c = -c, h -= c) : u < 0 && (s = lt, u = -u, l -= u);
        break;
      case lt:
        if (d) {
          if (m.x <= 0 && (h <= p || w >= g)) {
            b = !1;
            break;
          }
          x(Z), c -= m.x, h += m.x, u = c / d;
        } else
          x(tt), x(Z), m.x <= 0 ? h > p ? (c -= m.x, h += m.x) : m.y >= 0 && w >= g && (b = !1) : (c -= m.x, h += m.x), m.y >= 0 ? w < g && (u += m.y) : u += m.y;
        c < 0 && u < 0 ? (s = ot, u = -u, c = -c, l -= u, h -= c) : c < 0 ? (s = ht, c = -c, h -= c) : u < 0 && (s = st, u = -u, l -= u);
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
        c < 0 && u < 0 ? (s = st, u = -u, c = -c, l -= u, h -= c) : c < 0 ? (s = lt, c = -c, h -= c) : u < 0 && (s = ot, u = -u, l -= u);
        break;
      case ge:
        this.move(m.x, m.y), b = !1;
        break;
      case ve:
        this.zoom(pi(n), t), b = !1;
        break;
      case me:
        if (!m.x || !m.y) {
          b = !1;
          break;
        }
        S = Oe(this.cropper), h = C.startX - S.left, l = C.startY - S.top, c = r.minWidth, u = r.minHeight, m.x > 0 ? s = m.y > 0 ? ht : ot : m.x < 0 && (h -= c, s = m.y > 0 ? lt : st), m.y < 0 && (l -= u), this.cropped || (F(this.cropBox, N), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    b && (r.width = c, r.height = u, r.left = h, r.top = l, this.action = s, this.renderCropBox()), A(n, function(E) {
      E.startX = E.endX, E.startY = E.endY;
    });
  }
}, _i = {
  // Show the crop box manually
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && L(this.dragBox, vt), F(this.cropBox, N), this.setCropBoxData(this.initialCropBoxData)), this;
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
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), F(this.dragBox, vt), L(this.cropBox, N)), this;
  },
  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && t && (this.isImg && (this.element.src = t), e ? (this.url = t, this.image.src = t, this.ready && (this.viewBoxImage.src = t, A(this.previews, function(i) {
      i.getElementsByTagName("img")[0].src = t;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(t))), this;
  },
  // Enable (unfreeze) the cropper
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, F(this.cropper, Vt)), this;
  },
  // Disable (freeze) the cropper
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, L(this.cropper, Vt)), this;
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
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, i = this.canvasData, a = i.left, r = i.top;
    return this.moveTo(St(t) ? t : a + Number(t), St(e) ? e : r + Number(e));
  },
  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, i = this.canvasData, a = !1;
    return t = Number(t), e = Number(e), this.ready && !this.disabled && this.options.movable && (O(t) && (i.left = t, a = !0), O(e) && (i.top = e, a = !0), a && this.renderCanvas(!0)), this;
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
    var a = this.options, r = this.canvasData, n = r.width, s = r.height, d = r.naturalWidth, h = r.naturalHeight;
    if (t = Number(t), t >= 0 && this.ready && !this.disabled && a.zoomable) {
      var l = d * t, c = h * t;
      if (at(this.element, kt, {
        ratio: t,
        oldRatio: n / d,
        originalEvent: i
      }) === !1)
        return this;
      if (i) {
        var u = this.pointers, y = Oe(this.cropper), w = u && Object.keys(u).length ? fi(u) : {
          pageX: i.pageX,
          pageY: i.pageY
        };
        r.left -= (l - n) * ((w.pageX - y.left - r.left) / n), r.top -= (c - s) * ((w.pageY - y.top - r.top) / s);
      } else et(e) && O(e.x) && O(e.y) ? (r.left -= (l - n) * ((e.x - r.left) / n), r.top -= (c - s) * ((e.y - r.top) / s)) : (r.left -= (l - n) / 2, r.top -= (c - s) / 2);
      r.width = l, r.height = c, this.renderCanvas(!0);
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
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, i = this.imageData, a = !1;
    return t = Number(t), e = Number(e), this.ready && !this.disabled && this.options.scalable && (O(t) && (i.scaleX = t, a = !0), O(e) && (i.scaleY = e, a = !0), a && this.renderCanvas(!0, !0)), this;
  },
  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.options, i = this.imageData, a = this.canvasData, r = this.cropBoxData, n;
    if (this.ready && this.cropped) {
      n = {
        x: r.left - a.left,
        y: r.top - a.top,
        width: r.width,
        height: r.height
      };
      var s = i.width / i.naturalWidth;
      if (A(n, function(l, c) {
        n[c] = l / s;
      }), t) {
        var d = Math.round(n.y + n.height), h = Math.round(n.x + n.width);
        n.x = Math.round(n.x), n.y = Math.round(n.y), n.width = h - n.x, n.height = d - n.y;
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
    var e = this.options, i = this.imageData, a = this.canvasData, r = {};
    if (this.ready && !this.disabled && et(t)) {
      var n = !1;
      e.rotatable && O(t.rotate) && t.rotate !== i.rotate && (i.rotate = t.rotate, n = !0), e.scalable && (O(t.scaleX) && t.scaleX !== i.scaleX && (i.scaleX = t.scaleX, n = !0), O(t.scaleY) && t.scaleY !== i.scaleY && (i.scaleY = t.scaleY, n = !0)), n && this.renderCanvas(!0, !0);
      var s = i.width / i.naturalWidth;
      O(t.x) && (r.left = t.x * s + a.left), O(t.y) && (r.top = t.y * s + a.top), O(t.width) && (r.width = t.width * s), O(t.height) && (r.height = t.height * s), this.setCropBoxData(r);
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
    return this.ready && A(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(i) {
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
    var e = this.cropBoxData, i = this.options.aspectRatio, a, r;
    return this.ready && this.cropped && !this.disabled && et(t) && (O(t.left) && (e.left = t.left), O(t.top) && (e.top = t.top), O(t.width) && t.width !== e.width && (a = !0, e.width = t.width), O(t.height) && t.height !== e.height && (r = !0, e.height = t.height), i && (a ? e.height = e.width / i : r && (e.width = e.height * i)), this.renderCropBox()), this;
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
    var e = this.canvasData, i = gi(this.image, this.imageData, e, t);
    if (!this.cropped)
      return i;
    var a = this.getData(t.rounded), r = a.x, n = a.y, s = a.width, d = a.height, h = i.width / Math.floor(e.naturalWidth);
    h !== 1 && (r *= h, n *= h, s *= h, d *= h);
    var l = s / d, c = Y({
      aspectRatio: l,
      width: t.maxWidth || 1 / 0,
      height: t.maxHeight || 1 / 0
    }), u = Y({
      aspectRatio: l,
      width: t.minWidth || 0,
      height: t.minHeight || 0
    }, "cover"), y = Y({
      aspectRatio: l,
      width: t.width || (h !== 1 ? i.width : s),
      height: t.height || (h !== 1 ? i.height : d)
    }), w = y.width, p = y.height;
    w = Math.min(c.width, Math.max(u.width, w)), p = Math.min(c.height, Math.max(u.height, p));
    var f = document.createElement("canvas"), v = f.getContext("2d");
    f.width = rt(w), f.height = rt(p), v.fillStyle = t.fillColor || "transparent", v.fillRect(0, 0, w, p);
    var g = t.imageSmoothingEnabled, b = g === void 0 ? !0 : g, S = t.imageSmoothingQuality;
    v.imageSmoothingEnabled = b, S && (v.imageSmoothingQuality = S);
    var C = i.width, m = i.height, x = r, E = n, M, P, q, G, W, j;
    x <= -s || x > C ? (x = 0, M = 0, q = 0, W = 0) : x <= 0 ? (q = -x, x = 0, M = Math.min(C, s + x), W = M) : x <= C && (q = 0, M = Math.min(s, C - x), W = M), M <= 0 || E <= -d || E > m ? (E = 0, P = 0, G = 0, j = 0) : E <= 0 ? (G = -E, E = 0, P = Math.min(m, d + E), j = P) : E <= m && (G = 0, P = Math.min(d, m - E), j = P);
    var R = [x, E, M, P];
    if (W > 0 && j > 0) {
      var V = w / s;
      R.push(q * V, G * V, W * V, j * V);
    }
    return v.drawImage.apply(v, [i].concat(fe(R.map(function(pt) {
      return Math.floor(rt(pt));
    })))), f;
  },
  /**
   * Change the aspect ratio of the crop box.
   * @param {number} aspectRatio - The new aspect ratio.
   * @returns {Cropper} this
   */
  setAspectRatio: function(t) {
    var e = this.options;
    return !this.disabled && !St(t) && (e.aspectRatio = Math.max(0, t) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  /**
   * Change the drag mode.
   * @param {string} mode - The new drag mode.
   * @returns {Cropper} this
   */
  setDragMode: function(t) {
    var e = this.options, i = this.dragBox, a = this.face;
    if (this.ready && !this.disabled) {
      var r = t === Ut, n = e.movable && t === ye;
      t = r || n ? t : we, e.dragMode = t, ut(i, dt, t), it(i, _t, r), it(i, Tt, n), e.cropBoxMovable || (ut(a, dt, t), it(a, _t, r), it(a, Tt, n));
    }
    return this;
  }
}, Ti = z.Cropper, Me = /* @__PURE__ */ function() {
  function o(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (ze(this, o), !t || !ii.test(t.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = t, this.options = T({}, ne, et(e) && e), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return We(o, [{
    key: "init",
    value: function() {
      var e = this.element, i = e.tagName.toLowerCase(), a;
      if (!e[_]) {
        if (e[_] = this, i === "img") {
          if (this.isImg = !0, a = e.getAttribute("src") || "", this.originalUrl = a, !a)
            return;
          a = e.src;
        } else i === "canvas" && window.HTMLCanvasElement && (a = e.toDataURL());
        this.load(a);
      }
    }
  }, {
    key: "load",
    value: function(e) {
      var i = this;
      if (e) {
        this.url = e, this.imageData = {};
        var a = this.element, r = this.options;
        if (!r.rotatable && !r.scalable && (r.checkOrientation = !1), !r.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (ti.test(e)) {
          ei.test(e) ? this.read(wi(e)) : this.clone();
          return;
        }
        var n = new XMLHttpRequest(), s = this.clone.bind(this);
        this.reloading = !0, this.xhr = n, n.onabort = s, n.onerror = s, n.ontimeout = s, n.onprogress = function() {
          n.getResponseHeader("content-type") !== ae && n.abort();
        }, n.onload = function() {
          i.read(n.response);
        }, n.onloadend = function() {
          i.reloading = !1, i.xhr = null;
        }, r.checkCrossOrigin && se(e) && a.crossOrigin && (e = he(e)), n.open("GET", e, !0), n.responseType = "arraybuffer", n.withCredentials = a.crossOrigin === "use-credentials", n.send();
      }
    }
  }, {
    key: "read",
    value: function(e) {
      var i = this.options, a = this.imageData, r = Ci(e), n = 0, s = 1, d = 1;
      if (r > 1) {
        this.url = bi(e, ae);
        var h = Si(r);
        n = h.rotate, s = h.scaleX, d = h.scaleY;
      }
      i.rotatable && (a.rotate = n), i.scalable && (a.scaleX = s, a.scaleY = d), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var e = this.element, i = this.url, a = e.crossOrigin, r = i;
      this.options.checkCrossOrigin && se(i) && (a || (a = "anonymous"), r = he(i)), this.crossOrigin = a, this.crossOriginUrl = r;
      var n = document.createElement("img");
      a && (n.crossOrigin = a), n.src = r || i, n.alt = e.alt || "The image to crop", this.image = n, n.onload = this.start.bind(this), n.onerror = this.stop.bind(this), L(n, Jt), e.parentNode.insertBefore(n, e.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var e = this, i = this.image;
      i.onload = null, i.onerror = null, this.sizing = !0;
      var a = z.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(z.navigator.userAgent), r = function(h, l) {
        T(e.imageData, {
          naturalWidth: h,
          naturalHeight: l,
          aspectRatio: h / l
        }), e.initialImageData = T({}, e.imageData), e.sizing = !1, e.sized = !0, e.build();
      };
      if (i.naturalWidth && !a) {
        r(i.naturalWidth, i.naturalHeight);
        return;
      }
      var n = document.createElement("img"), s = document.body || document.documentElement;
      this.sizingImage = n, n.onload = function() {
        r(n.width, n.height), a || s.removeChild(n);
      }, n.src = i.src, a || (n.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", s.appendChild(n));
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
        var e = this.element, i = this.options, a = this.image, r = e.parentNode, n = document.createElement("div");
        n.innerHTML = ri;
        var s = n.querySelector(".".concat(_, "-container")), d = s.querySelector(".".concat(_, "-canvas")), h = s.querySelector(".".concat(_, "-drag-box")), l = s.querySelector(".".concat(_, "-crop-box")), c = l.querySelector(".".concat(_, "-face"));
        this.container = r, this.cropper = s, this.canvas = d, this.dragBox = h, this.cropBox = l, this.viewBox = s.querySelector(".".concat(_, "-view-box")), this.face = c, d.appendChild(a), L(e, N), r.insertBefore(s, e.nextSibling), F(a, Jt), this.initPreview(), this.bind(), i.initialAspectRatio = Math.max(0, i.initialAspectRatio) || NaN, i.aspectRatio = Math.max(0, i.aspectRatio) || NaN, i.viewMode = Math.max(0, Math.min(3, Math.round(i.viewMode))) || 0, L(l, N), i.guides || L(l.getElementsByClassName("".concat(_, "-dashed")), N), i.center || L(l.getElementsByClassName("".concat(_, "-center")), N), i.background && L(s, "".concat(_, "-bg")), i.highlight || L(c, Ve), i.cropBoxMovable && (L(c, Tt), ut(c, dt, Bt)), i.cropBoxResizable || (L(l.getElementsByClassName("".concat(_, "-line")), N), L(l.getElementsByClassName("".concat(_, "-point")), N)), this.render(), this.ready = !0, this.setDragMode(i.dragMode), i.autoCrop && this.crop(), this.setData(i.data), k(i.ready) && H(e, ee, i.ready, {
          once: !0
        }), at(e, ee);
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
      return window.Cropper = Ti, o;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(e) {
      T(ne, et(e) && e);
    }
  }]);
}();
T(Me.prototype, xi, Ei, Oi, Di, Mi, _i);
const gt = (o) => Math.min(1, Math.max(0, o)), le = ["16:9", "3:2", "1:1"], Et = "3:2";
class Ii {
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
  open(t, e, i = !1, a = Et) {
    return this.overlay && this.destroy(), new Promise((r) => {
      this.resolvePromise = r;
      const n = this.normalizeCropAspectRatio(a);
      this.overlay = this.createOverlay(i, n);
      const s = this.overlay.querySelector(".shared-crop-modal__image-wrapper");
      if (!s) {
        this.close(null);
        return;
      }
      const d = I("img", null, {
        src: t
      });
      d.style.maxWidth = "100%", d.style.display = "block", s.appendChild(d), document.body.appendChild(this.overlay), d.onload = () => {
        this.cropper = new Me(d, {
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
              const h = this.cropper.getImageData();
              this.restoreCropArea(e, h.naturalWidth, h.naturalHeight);
            }
          }
        });
      }, d.onerror = () => {
        this.close(null);
      }, this.escHandler = (h) => {
        h.key === "Escape" && this.close(null);
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
    const i = I("div", "shared-crop-modal");
    i.addEventListener("click", () => this.close(null));
    const a = I("div", "shared-crop-modal__container");
    a.addEventListener("click", (u) => u.stopPropagation());
    const r = I("div", "shared-crop-modal__image-wrapper"), n = I("div", "shared-crop-modal__options"), s = I("label", "shared-crop-modal__option");
    this.showOriginalOnClickInput = I("input", null, { type: "checkbox" }), this.showOriginalOnClickInput.checked = t, s.append(
      this.showOriginalOnClickInput,
      document.createTextNode("Показывать необрезанное изображение по клику")
    ), n.appendChild(s), n.appendChild(this.createAspectRatioOptions(e));
    const d = I("div", "shared-crop-modal__actions"), h = I("button", ["shared-crop-modal__btn", "shared-crop-modal__btn--danger"]);
    h.textContent = "Сбросить", h.addEventListener("click", () => {
      this.close({
        crop: "",
        croppedWidth: 0,
        croppedHeight: 0,
        showOriginalOnClick: !1,
        cropAspectRatio: Et
      });
    });
    const l = I("button", "shared-crop-modal__btn");
    l.textContent = "Отмена", l.addEventListener("click", () => this.close(null));
    const c = I("button", ["shared-crop-modal__btn", "shared-crop-modal__btn--primary"]);
    return c.textContent = "Применить", c.addEventListener("click", () => this.handleApply()), d.appendChild(h), d.appendChild(l), d.appendChild(c), a.appendChild(r), a.appendChild(n), a.appendChild(d), i.appendChild(a), i;
  }
  /**
   * Обрабатывает нажатие кнопки "Применить" — собирает данные кадрирования
   * и закрывает модальное окно с результатом.
   */
  handleApply() {
    var a;
    if (!this.cropper) {
      this.close(null);
      return;
    }
    const t = this.cropper.getData(!0), e = this.cropper.getImageData(), i = this.cropDataToString(t, e.naturalWidth, e.naturalHeight);
    this.close({
      ...i,
      showOriginalOnClick: ((a = this.showOriginalOnClickInput) == null ? void 0 : a.checked) ?? !1,
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
    const a = gt(t.x / e), r = gt(t.y / i), n = gt((t.x + t.width) / e), s = gt((t.y + t.height) / i);
    return {
      crop: `${a.toFixed(4)}x${r.toFixed(4)}:${n.toFixed(4)}x${s.toFixed(4)}`,
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
    var r;
    const a = this.parseCropString(t);
    a && ((r = this.cropper) == null || r.setData({
      x: a.x1 * e,
      y: a.y1 * i,
      width: (a.x2 - a.x1) * e,
      height: (a.y2 - a.y1) * i
    }));
  }
  createAspectRatioOptions(t) {
    const e = I("fieldset", "shared-crop-modal__aspect-ratios"), i = I("legend", "shared-crop-modal__aspect-ratios-label");
    return i.textContent = "Соотношение сторон", e.appendChild(i), [
      { label: "Любое", value: "free" },
      ...le.map((r) => ({ label: r, value: r }))
    ].forEach(({ label: r, value: n }) => {
      const s = I("label", "shared-crop-modal__aspect-ratio"), d = I("input", null, { type: "radio" }), h = I("span", "shared-crop-modal__aspect-ratio-label");
      d.name = "shared-crop-aspect-ratio", d.value = n, d.checked = n === t, d.addEventListener("change", () => {
        var l;
        d.checked && ((l = this.cropper) == null || l.setAspectRatio(this.numericAspectRatio(n)));
      }), h.textContent = r, s.append(d, h), e.appendChild(s), this.aspectRatioInputs.push(d);
    }), e;
  }
  selectedCropAspectRatio() {
    var e;
    const t = (e = this.aspectRatioInputs.find((i) => i.checked)) == null ? void 0 : e.value;
    return this.normalizeCropAspectRatio(t);
  }
  normalizeCropAspectRatio(t) {
    return t === "free" || le.includes(t) ? t : Et;
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
class Ai {
  constructor({ data: t, config: e, api: i, readOnly: a, block: r }) {
    this.currentLoadingItem = null, this.api = i, this.readOnly = a, this.block = r;
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
    }, this.uploader = new je({
      config: this.config,
      onUpload: (s) => this.onUpload(s),
      onError: (s) => this.uploadingFailed(s)
    }), this.cropModal = new Ii(), this.ui = new Ot({
      api: i,
      config: this.config,
      onSelectFile: () => this.selectFile(),
      onSelectUrl: (s) => this.uploadFromUrl(s),
      onColumnsChange: (s) => this.onColumnsChange(s),
      onRemoveImage: (s, d) => this.onRemoveImage(s, d),
      onCropImage: (s) => this.handleCropImage(s),
      onItemSettingsChange: () => this.block.dispatchChange(),
      readOnly: a
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
      icon: ce,
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
      var i, a;
      return (a = (i = this.config).onMediaRemoved) == null ? void 0 : a.call(i, e);
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
      onPreview: (a) => {
        this.currentLoadingItem = this.ui.createLoadingItem(a);
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
    var r, n;
    if (t.dataset.disableOptimization === "true")
      return;
    const e = t.dataset.url;
    if (!e) return;
    const i = t.dataset.crop, a = await this.cropModal.open(
      e,
      i,
      t.dataset.showOriginalOnClick === "true",
      this.normalizeCropAspectRatioMode(t.dataset.cropAspectRatio)
    );
    if (a !== null) {
      if (a.crop === "")
        this.ui.updateItemAfterCrop(t, void 0, 0, 0, void 0, void 0);
      else {
        this.ui.updateItemAfterCrop(
          t,
          a.crop,
          a.croppedWidth,
          a.croppedHeight,
          a.showOriginalOnClick,
          a.cropAspectRatio
        );
        const s = t.dataset.mediaId;
        s && ((n = (r = this.config).onCropApplied) == null || n.call(r, s, a.crop, a.croppedWidth, a.croppedHeight));
      }
      this.block.dispatchChange();
    }
  }
  /**
   * Handle image removal - delete from S3
   */
  onRemoveImage(t, e) {
    var a, r;
    if (this.block.dispatchChange(), e) {
      (r = (a = this.config).onMediaRemoved) == null || r.call(a, e);
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
  Ai as default
};
