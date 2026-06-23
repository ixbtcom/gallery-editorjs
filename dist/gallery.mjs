(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`:root{--ej-radius-sm: 6px;--ej-radius-md: 8px;--ej-radius-lg: 12px;--ej-bg-page: #fff;--ej-bg-surface: #fff;--ej-bg-muted: var(--gray-50, #f9fafb);--ej-bg-input: #fff;--ej-ring: rgba(3, 7, 18, .1);--ej-ring-focus: var(--primary-600, #2563eb);--ej-border: var(--gray-200, #e5e7eb);--ej-border-strong: rgba(3, 7, 18, .05);--ej-text: var(--gray-950, #030712);--ej-text-secondary: var(--gray-500, #6b7280);--ej-text-muted: var(--gray-400, #9ca3af);--ej-text-on-primary: #fff;--ej-primary: var(--primary-600, #2563eb);--ej-primary-hover: var(--primary-700, #1d4ed8);--ej-primary-light: var(--primary-50, #eff6ff);--ej-primary-muted: var(--primary-100, #dbeafe);--ej-success-bg: var(--success-50, #f0fdf4);--ej-success-border: var(--success-500, #22c55e);--ej-success-text: var(--success-700, #15803d);--ej-warning-bg: var(--warning-50, #fffbeb);--ej-warning-border: var(--warning-500, #f59e0b);--ej-warning-text: var(--warning-700, #b45309);--ej-danger: var(--danger-600, #dc2626);--ej-danger-bg: var(--danger-50, #fef2f2);--ej-danger-border: var(--danger-500, #ef4444);--ej-danger-text: var(--danger-700, #b91c1c);--ej-danger-hover-bg: var(--danger-100, #fee2e2);--ej-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, .05);--ej-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1);--ej-transition: 75ms ease;--ej-control-bg: rgba(255, 255, 255, .9);--ej-control-hover: rgba(0, 0, 0, .05);--ej-icon-color: var(--gray-400, #9ca3af)}.dark{--ej-bg-page: var(--gray-900, #111827);--ej-bg-surface: var(--gray-900, #111827);--ej-bg-muted: rgba(255, 255, 255, .05);--ej-bg-input: rgba(255, 255, 255, .05);--ej-ring: rgba(255, 255, 255, .2);--ej-ring-focus: var(--primary-500, #3b82f6);--ej-border: rgba(255, 255, 255, .1);--ej-border-strong: rgba(255, 255, 255, .1);--ej-text: #fff;--ej-text-secondary: var(--gray-400, #9ca3af);--ej-text-muted: var(--gray-500, #6b7280);--ej-text-on-primary: #fff;--ej-control-bg: rgba(30, 30, 30, .9);--ej-control-hover: rgba(255, 255, 255, .1);--ej-icon-color: var(--gray-500, #6b7280);--ej-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, .3);--ej-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, .3), 0 2px 4px -2px rgba(0, 0, 0, .2)}@keyframes ej-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.gallery-tool{margin:2rem 0;max-width:100%;box-sizing:border-box;overflow:hidden}.gallery-tool__items{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:12px;max-width:100%;box-sizing:border-box}.gallery-tool--columns-1 .gallery-tool__item{flex:0 0 100%;max-width:100%}.gallery-tool--columns-2 .gallery-tool__item{flex:0 0 calc(50% - 6px);max-width:calc(50% - 6px)}.gallery-tool--columns-3 .gallery-tool__item{flex:0 0 calc(33.333% - 8px);max-width:calc(33.333% - 8px)}.gallery-tool--columns-4 .gallery-tool__item{flex:0 0 calc(25% - 9px);max-width:calc(25% - 9px)}.gallery-tool--columns-5 .gallery-tool__item{flex:0 0 calc(20% - 10px);max-width:calc(20% - 10px)}@media (max-width: 639px){.gallery-tool--columns-3 .gallery-tool__item,.gallery-tool--columns-4 .gallery-tool__item,.gallery-tool--columns-5 .gallery-tool__item{flex:0 0 calc(50% - 6px);max-width:calc(50% - 6px)}}.gallery-tool__item{position:relative;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);overflow:hidden;background:var(--ej-bg-muted);box-sizing:border-box;min-width:0;box-shadow:var(--ej-shadow-sm);transition:box-shadow var(--ej-transition)}.gallery-tool__item:hover{box-shadow:var(--ej-shadow-md)}.gallery-tool__item-image{position:relative;min-height:120px;background:var(--ej-bg-muted);overflow:hidden}.gallery-tool__item-image img{width:100%;height:auto;display:block;object-fit:contain;max-height:400px;max-width:100%}.gallery-tool__item-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;background-position:center;margin:35px auto;position:relative;background-color:var(--ej-bg-muted)}.gallery-tool__item-preloader:after{content:"";position:absolute;width:60px;height:60px;border-radius:50%;border:2px solid var(--ej-border);border-top-color:var(--ej-primary);left:50%;top:50%;margin:-30px 0 0 -30px;animation:ej-spin 1s infinite linear;box-sizing:border-box}.gallery-tool__item-caption,.gallery-tool__item-source,.gallery-tool__item-source-link{margin:.5rem;width:calc(100% - 1rem);background:#fff;font-weight:500}.gallery-tool__item-source{color:var(--ej-text-secondary)}.gallery-tool__item-source-link{color:var(--ej-primary)}.gallery-tool__item-caption[data-placeholder]:empty:before,.gallery-tool__item-source[data-placeholder]:empty:before,.gallery-tool__item-source-link[data-placeholder]:empty:before{content:attr(data-placeholder);color:var(--ej-text-muted);pointer-events:none}.gallery-tool__item-caption[data-placeholder]:empty:focus:before,.gallery-tool__item-source[data-placeholder]:empty:focus:before,.gallery-tool__item-source-link[data-placeholder]:empty:focus:before{display:none}.gallery-tool__item-dimensions{position:absolute;bottom:8px;left:8px;padding:2px 6px;background:#0009;color:#fff;font-size:11px;font-family:monospace;border-radius:var(--ej-radius-sm);z-index:5;pointer-events:none}.gallery-tool__item-controls{position:absolute;top:8px;right:8px;display:flex;gap:4px;opacity:0;transition:opacity .2s;z-index:10}.gallery-tool__item:hover .gallery-tool__item-controls,.gallery-tool__item:focus-within .gallery-tool__item-controls{opacity:1}.gallery-tool__item-remove,.gallery-tool__item-move-left,.gallery-tool__item-move-right{width:32px;height:32px;border:none;border-radius:var(--ej-radius-sm);background:var(--ej-control-bg);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;color:var(--ej-text);transition:background .2s}.gallery-tool__item-remove:hover,.gallery-tool__item-move-left:hover,.gallery-tool__item-move-right:hover{background:var(--ej-control-hover)}.gallery-tool__item-remove{color:var(--ej-danger)}.gallery-tool__add-buttons{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.gallery-tool__add-buttons .cdx-button{display:inline-flex;align-items:center;gap:6px}.gallery-tool__add-buttons .cdx-button svg{width:16px;height:16px}.gallery-tool__url-input-wrapper{flex:1;min-width:200px}.gallery-tool__url-input{width:100%;padding:8px 12px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);font-size:14px;background:var(--ej-bg-input);color:var(--ej-text);transition:border-color var(--ej-transition)}.gallery-tool__url-input:focus{border-color:var(--ej-ring-focus);outline:none;box-shadow:0 0 0 1px var(--ej-ring-focus)}.gallery-tool__columns-control{display:flex;align-items:center;gap:8px;margin-left:auto}.gallery-tool__columns-button{width:32px;height:32px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);background:var(--ej-bg-surface);cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;transition:background .2s;color:var(--ej-text)}.gallery-tool__columns-button:hover{background:var(--ej-bg-muted)}.gallery-tool__columns-display{font-size:13px;color:var(--ej-text-secondary);min-width:45px;text-align:center}.gallery-tool--carousel{max-width:100%;overflow:hidden;box-sizing:border-box}.gallery-tool--carousel .gallery-tool__items{flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;gap:12px;padding-bottom:8px;max-width:100%;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:var(--ej-border) transparent}.gallery-tool--carousel .gallery-tool__items::-webkit-scrollbar{height:6px}.gallery-tool--carousel .gallery-tool__items::-webkit-scrollbar-track{background:transparent}.gallery-tool--carousel .gallery-tool__items::-webkit-scrollbar-thumb{background:var(--ej-border);border-radius:3px}.gallery-tool--carousel .gallery-tool__item{flex:0 0 auto;width:clamp(200px,60vw,280px);max-width:calc(100% - 24px);min-width:200px}.gallery-tool--carousel .gallery-tool__item-image img{max-height:280px}.gallery-tool--masonry .gallery-tool__items{display:block;column-count:2;column-gap:12px;max-width:100%}.gallery-tool--masonry.gallery-tool--columns-3 .gallery-tool__items{column-count:3}.gallery-tool--masonry.gallery-tool--columns-4 .gallery-tool__items{column-count:4}.gallery-tool--masonry.gallery-tool--columns-5 .gallery-tool__items{column-count:5}@media (max-width: 639px){.gallery-tool--masonry.gallery-tool--columns-3 .gallery-tool__items,.gallery-tool--masonry.gallery-tool--columns-4 .gallery-tool__items,.gallery-tool--masonry.gallery-tool--columns-5 .gallery-tool__items{column-count:2}}.gallery-tool--masonry .gallery-tool__item{width:100%;max-width:100%;margin-bottom:12px;break-inside:avoid}.gallery-tool--masonry .gallery-tool__item-image img{max-height:none;max-width:100%}.gallery-tool--empty .gallery-tool__items,.gallery-tool--loading .gallery-tool__item-image img{display:none}.gallery-tool--stretched .gallery-tool__item-image img{max-height:none}.gallery-tool__stretched-badge{display:inline-block;margin-bottom:8px;padding:4px 10px;background:var(--ej-primary);color:var(--ej-text-on-primary);font-size:12px;font-weight:500;border-radius:var(--ej-radius-md)}.gallery-tool__item-crop{width:32px;height:32px;border:none;border-radius:var(--ej-radius-sm);background:var(--ej-control-bg);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;color:var(--ej-text);transition:background .2s}.gallery-tool__item-crop:hover{background:var(--ej-control-hover)}.gallery-tool__item--cropped{border-left:3px solid var(--ej-primary)}.gallery-tool__item--cropped .gallery-tool__item-image:after{content:"✂";position:absolute;bottom:8px;right:8px;padding:2px 6px;background:var(--ej-primary);color:var(--ej-text-on-primary);font-size:11px;border-radius:var(--ej-radius-sm);z-index:5;pointer-events:none}.gallery-crop-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000;background:#000000d9;display:flex;align-items:center;justify-content:center;padding:20px}.gallery-crop-modal__container{background:var(--ej-bg-surface, #fff);border-radius:var(--ej-radius-lg);box-shadow:var(--ej-shadow-md);max-width:90vw;max-height:90vh;display:flex;flex-direction:column;overflow:hidden}.gallery-crop-modal__image-wrapper{flex:1;overflow:hidden;max-height:calc(90vh - 80px);display:flex;align-items:center;justify-content:center}.gallery-crop-modal__image-wrapper img{max-width:100%;display:block}.gallery-crop-modal__actions{display:flex;gap:8px;padding:12px 16px;justify-content:center;background:var(--ej-bg-muted, #f5f5f5);border-top:1px solid var(--ej-border)}.gallery-crop-modal__btn{padding:8px 20px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);background:var(--ej-bg-surface, #fff);color:var(--ej-text);font-size:14px;font-weight:500;cursor:pointer;transition:background var(--ej-transition),border-color var(--ej-transition)}.gallery-crop-modal__btn:hover{background:var(--ej-bg-muted)}.gallery-crop-modal__btn--primary{background:var(--ej-primary);color:var(--ej-text-on-primary);border-color:var(--ej-primary)}.gallery-crop-modal__btn--primary:hover{opacity:.9}.gallery-crop-modal__btn--danger{color:var(--ej-danger);border-color:var(--ej-danger)}.gallery-crop-modal__btn--danger:hover{background:var(--ej-danger);color:#fff}.gallery-tool__item-cover{width:28px;height:28px;border:none;border-radius:6px;background:#0000008c;color:#fbbf24;font-size:15px;line-height:1;cursor:pointer;display:inline-flex;align-items:center;justify-content:center}.gallery-tool__item-cover:hover{background:#000000bf}.gallery-tool__item[data-cover]{outline:2px solid #3b82f6;outline-offset:-2px}.gallery-tool__item[data-cover] .gallery-tool__item-cover{color:#3b82f6}.gallery-tool__item[data-cover]:after{content:"Обложка";position:absolute;top:6px;left:6px;background:#3b82f6e6;color:#fff;font-size:11px;font-weight:600;padding:2px 8px;border-radius:4px;pointer-events:none;z-index:3}/*!
 * Cropper.js v1.6.2
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-04-21T07:43:02.731Z
 */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;-ms-touch-action:none;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cropper-container img{backface-visibility:hidden;display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-wrap-box,.cropper-canvas,.cropper-drag-box,.cropper-crop-box,.cropper-modal{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-wrap-box,.cropper-canvas{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:#3399ffbf;overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:calc(100% / 3);left:0;top:calc(100% / 3);width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:calc(100% / 3);top:0;width:calc(100% / 3)}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:before,.cropper-center:after{background-color:#eee;content:" ";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width: 768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width: 992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width: 1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:" ";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC)}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}`)),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
const ae = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', Ee = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
function E(o, t = null, e = {}) {
  const i = document.createElement(o);
  Array.isArray(t) ? i.classList.add(...t) : t !== null && i.classList.add(t);
  for (const a in e)
    Object.prototype.hasOwnProperty.call(e, a) && (i[a] = e[a]);
  return i;
}
const De = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2v4"/><path d="M6 6h12a2 2 0 0 1 2 2v8"/><path d="M18 22v-4"/><path d="M18 18H6a2 2 0 0 1-2-2V8"/></svg>', X = class X {
  constructor({ api: t, config: e, onSelectFile: i, onSelectUrl: a, onColumnsChange: r, onRemoveImage: n, onCropImage: s, readOnly: d }) {
    this.currentColumns = 1, this.previousColumns = 1, this.isRendering = !1, this.columnsLocked = !1, this.api = t, this.config = e, this.onSelectFile = i, this.onSelectUrl = a, this.onColumnsChange = r, this.onRemoveImage = n, this.onCropImage = s, this.readOnly = d, this.nodes = {
      wrapper: E("div", [this.CSS.wrapper]),
      itemsContainer: E("div", [this.CSS.itemsContainer]),
      addButtons: E("div", [this.CSS.addButtons]),
      fileButton: this.createFileButton(),
      urlButton: E("div"),
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
      itemCaption: "gallery-tool__item-caption",
      itemSource: "gallery-tool__item-source",
      itemSourceLink: "gallery-tool__item-source-link",
      itemControls: "gallery-tool__item-controls",
      itemRemove: "gallery-tool__item-remove",
      itemMoveLeft: "gallery-tool__item-move-left",
      itemMoveRight: "gallery-tool__item-move-right",
      itemCrop: "gallery-tool__item-crop",
      itemCropped: "gallery-tool__item--cropped",
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
    var c, l, p;
    const e = E("div", [this.CSS.item]), i = E("div", [this.CSS.itemImage]), a = E("div", [this.CSS.itemPreloader]), r = t.crop && t.imagorPath ? this.buildPreviewUrl(t.imagorPath, t.crop) : t.url, n = E("img", null, { src: r });
    t.crop && e.classList.add(this.CSS.itemCropped);
    const s = E("div", [this.CSS.itemCaption, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    s.dataset.placeholder = this.config.captionPlaceholder ?? "Caption", s.textContent = t.caption || "";
    const d = E("div", [this.CSS.itemSource, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    d.dataset.placeholder = this.config.sourcePlaceholder ?? "Source", d.textContent = t.source || "";
    const h = E("div", [this.CSS.itemSourceLink, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    if (h.dataset.placeholder = this.config.sourceLinkPlaceholder ?? "Source link", h.textContent = t.sourceLink || "", i.appendChild(a), i.appendChild(n), t.width && t.height) {
      const y = E("div", [this.CSS.itemDimensions]);
      y.textContent = `${t.width} × ${t.height}`, i.appendChild(y);
    }
    if (n.onload = () => {
      a.style.display = "none";
    }, !this.readOnly) {
      const y = this.createItemControls(e);
      e.appendChild(y);
    }
    return e.appendChild(i), e.appendChild(s), e.appendChild(d), e.appendChild(h), e.dataset.url = t.url, t.media_id && (e.dataset.mediaId = t.media_id), (c = this.config.cover) != null && c.enabled && t.media_id && ((p = (l = this.config.cover).coverUuid) == null ? void 0 : p.call(l)) === t.media_id && e.setAttribute("data-cover", ""), t.width && (e.dataset.width = String(t.width)), t.height && (e.dataset.height = String(t.height)), t.imagorPath && (e.dataset.imagorPath = t.imagorPath), t.crop && (e.dataset.crop = t.crop), t.croppedWidth && (e.dataset.croppedWidth = String(t.croppedWidth)), t.croppedHeight && (e.dataset.croppedHeight = String(t.croppedHeight)), this.nodes.itemsContainer.appendChild(e), this.toggleState(
      "filled"
      /* Filled */
    ), this.autoAdjustColumns(), e;
  }
  /**
   * Create a placeholder item for loading state
   */
  createLoadingItem(t) {
    const e = E("div", [this.CSS.item]), i = E("div", [this.CSS.itemImage]), a = E("div", [this.CSS.itemPreloader]);
    t && (a.style.backgroundImage = `url(${t})`), i.appendChild(a), e.appendChild(i);
    const r = E("div", [this.CSS.itemCaption, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    r.dataset.placeholder = this.config.captionPlaceholder ?? "Caption";
    const n = E("div", [this.CSS.itemSource, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    n.dataset.placeholder = this.config.sourcePlaceholder ?? "Source";
    const s = E("div", [this.CSS.itemSourceLink, this.CSS.input], {
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
    var n, s, d;
    const i = t.querySelector(`.${this.CSS.itemImage}`), a = t.querySelector(`.${this.CSS.itemPreloader}`), r = E("img", null, { src: e.url });
    if (r.onload = () => {
      a && (a.style.display = "none");
    }, i.appendChild(r), e.width && e.height) {
      const h = E("div", [this.CSS.itemDimensions]);
      h.textContent = `${e.width} × ${e.height}`, i.appendChild(h);
    }
    if (t.dataset.url = e.url, e.media_id && (t.dataset.mediaId = e.media_id), (n = this.config.cover) != null && n.enabled && e.media_id && ((d = (s = this.config.cover).coverUuid) == null ? void 0 : d.call(s)) === e.media_id && t.setAttribute("data-cover", ""), e.width && (t.dataset.width = String(e.width)), e.height && (t.dataset.height = String(e.height)), e.imagorPath && (t.dataset.imagorPath = e.imagorPath), !this.readOnly) {
      const h = this.createItemControls(t);
      t.insertBefore(h, t.firstChild);
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
      var f, g, v;
      const a = i, r = a.dataset.url;
      if (!r) return;
      const n = ((f = i.querySelector(`.${this.CSS.itemCaption}`)) == null ? void 0 : f.textContent) || "", s = ((g = i.querySelector(`.${this.CSS.itemSource}`)) == null ? void 0 : g.textContent) || "", d = ((v = i.querySelector(`.${this.CSS.itemSourceLink}`)) == null ? void 0 : v.textContent) || "", h = a.dataset.width ? parseInt(a.dataset.width, 10) : void 0, c = a.dataset.height ? parseInt(a.dataset.height, 10) : void 0, l = a.dataset.imagorPath || void 0, p = a.dataset.crop || void 0, y = a.dataset.croppedWidth ? parseInt(a.dataset.croppedWidth, 10) : void 0, w = a.dataset.croppedHeight ? parseInt(a.dataset.croppedHeight, 10) : void 0, u = a.dataset.mediaId || void 0;
      e.push({ url: r, media_id: u, imagorPath: l, caption: n, source: s, sourceLink: d, width: h, height: c, crop: p, croppedWidth: y, croppedHeight: w });
    }), e;
  }
  /**
   * Update item DOM after crop operation
   */
  updateItemAfterCrop(t, e, i, a) {
    const r = t.querySelector(`.${this.CSS.itemImage} img`);
    if (r)
      if (e) {
        t.dataset.crop = e, t.dataset.croppedWidth = String(i), t.dataset.croppedHeight = String(a), t.classList.add(this.CSS.itemCropped);
        const n = t.dataset.imagorPath;
        n && (r.src = this.buildPreviewUrl(n, e));
      } else
        delete t.dataset.crop, delete t.dataset.croppedWidth, delete t.dataset.croppedHeight, t.classList.remove(this.CSS.itemCropped), r.src = t.dataset.url || "";
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
    const t = E("div", [this.CSS.button]);
    return t.innerHTML = `${ae} ${this.config.buttonContent}`, t.addEventListener("click", () => this.onSelectFile()), t;
  }
  createUrlInput() {
    const t = E("div", [this.CSS.urlInputWrapper]), e = E("input", [this.CSS.urlInput, this.CSS.input], {
      type: "text"
    });
    return e.placeholder = this.config.urlInputPlaceholder ?? "Вставьте ссылку на изображение", e.addEventListener("keydown", (i) => {
      i.key === "Enter" && (i.preventDefault(), this.handleUrlInput(e));
    }), e.addEventListener("paste", (i) => {
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
    const t = E("div", [this.CSS.columnsControl]), e = E("button", [this.CSS.columnsButton], { type: "button" });
    e.innerHTML = "−", e.addEventListener("click", () => this.changeColumns(-1));
    const i = E("span", [this.CSS.columnsDisplay]);
    i.textContent = `${this.currentColumns} col`;
    const a = E("button", [this.CSS.columnsButton], { type: "button" });
    return a.innerHTML = "+", a.addEventListener("click", () => this.changeColumns(1)), t.appendChild(e), t.appendChild(i), t.appendChild(a), t;
  }
  changeColumns(t) {
    const e = Math.min(X.MAX_COLUMNS, Math.max(X.MIN_COLUMNS, this.currentColumns + t));
    e !== this.currentColumns && (this.columnsLocked = !0, this.previousColumns = this.currentColumns, this.currentColumns = e, this.updateColumnsClass(), this.updateColumnsDisplay(), this.onColumnsChange(e));
  }
  updateColumnsClass() {
    const t = `gallery-tool--columns-${this.previousColumns}`, e = `gallery-tool--columns-${this.currentColumns}`;
    if (this.nodes.wrapper.classList.contains(t))
      this.nodes.wrapper.classList.replace(t, e);
    else {
      for (let i = X.MIN_COLUMNS; i <= X.MAX_COLUMNS; i++)
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
    const e = this.nodes.itemsContainer.children.length <= 1 ? 1 : 2;
    e !== this.currentColumns && (this.previousColumns = this.currentColumns, this.currentColumns = e, this.updateColumnsClass(), this.updateColumnsDisplay(), this.onColumnsChange(e));
  }
  createItemControls(t) {
    var s;
    const e = E("div", [this.CSS.itemControls]), i = E("button", [this.CSS.itemRemove], { type: "button" });
    i.innerHTML = "×", i.addEventListener("click", () => {
      const d = t.dataset.url, h = t.dataset.mediaId;
      (d || h) && this.onRemoveImage(d ?? "", h), t.remove(), this.nodes.itemsContainer.children.length === 0 && (this.toggleState(
        "empty"
        /* Empty */
      ), this.columnsLocked = !1), this.autoAdjustColumns();
    });
    const a = E("button", [this.CSS.itemMoveLeft], { type: "button" });
    a.innerHTML = "←", a.addEventListener("click", () => this.moveItem(t, -1));
    const r = E("button", [this.CSS.itemMoveRight], { type: "button" });
    r.innerHTML = "→", r.addEventListener("click", () => this.moveItem(t, 1));
    const n = E("button", [this.CSS.itemCrop], { type: "button" });
    if (n.innerHTML = De, n.addEventListener("click", () => this.onCropImage(t)), e.appendChild(a), e.appendChild(n), (s = this.config.cover) != null && s.enabled) {
      const d = E("button", ["gallery-tool__item-cover"], { type: "button" });
      d.innerHTML = "★", d.title = this.api.i18n.t("Сделать обложкой"), d.addEventListener("click", () => {
        this.onSetCover(t);
      }), e.appendChild(d);
    }
    return e.appendChild(i), e.appendChild(r), e;
  }
  /**
   * Тоггл обложки на элементе gallery: серверный endpoint, blocked (ручная -
   * приоритет), затем подсветка + сообщение хосту ($set/трекинг).
   *
   * @param auto - авто-перекат (после удаления обложки): тихий режим без
   *   error-тостов, другой success-текст. Возвращает true, если обложка назначена.
   */
  async onSetCover(t, e = !1) {
    var r;
    const i = this.config.cover;
    if (!(i != null && i.endpoint))
      return !1;
    const a = t.dataset.mediaId;
    if (!a)
      return e || this.api.notifier.show({ message: this.api.i18n.t("Сначала дождитесь загрузки картинки"), style: "error" }), !1;
    try {
      const s = await (await fetch(i.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-CSRF-TOKEN": i.csrf ?? "" },
        credentials: "same-origin",
        body: JSON.stringify({ media_id: a })
      })).json().catch(() => ({ success: 0 }));
      return s.blocked ? (e || this.api.notifier.show({ message: s.message ?? this.api.i18n.t("Обложка задана вручную"), style: "error" }), !1) : s.success === 1 ? (this.markCover(s.cover_uuid ?? a), (r = i.onCoverChanged) == null || r.call(i, s.cover_uuid ?? a), this.api.notifier.show({
        message: this.api.i18n.t(e ? "Обложка переназначена на следующую картинку" : "Обложка обновлена")
      }), !0) : !1;
    } catch {
      return e || this.api.notifier.show({ message: this.api.i18n.t("Не удалось задать обложку"), style: "error" }), !1;
    }
  }
  /**
   * Онлайн-перекат обложки после удаления текущей картинки-обложки: назначает
   * обложкой первую оставшуюся картинку галереи (по DOM-порядку). Если картинок
   * не осталось - очищает обложку онлайн. Вызывается из onRemoveImage при
   * cover_cleared (удалённый элемент был обложкой).
   */
  async rolloverCover() {
    var a;
    const t = this.config.cover;
    if (!(t != null && t.enabled))
      return;
    const i = Array.from(
      this.nodes.itemsContainer.querySelectorAll(`.${this.CSS.item}`)
    ).find((r) => !!r.dataset.mediaId) ?? null;
    if (i) {
      await this.onSetCover(i, !0);
      return;
    }
    this.markCover(null), (a = t.onCoverChanged) == null || a.call(t, null);
  }
  /**
   * Подсветить элемент-обложку (по media uuid), снять метку с остальных.
   */
  markCover(t) {
    this.nodes.itemsContainer.querySelectorAll(`.${this.CSS.item}`).forEach((i) => {
      const a = i, r = !!t && a.dataset.mediaId === t;
      a.toggleAttribute("data-cover", r);
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
    this.nodes.wrapper.classList.toggle(`gallery-tool--${t}`, e), t === "stretched" && this.updateStretchedBadge(e);
  }
  /**
   * Update stretched badge visibility
   */
  updateStretchedBadge(t) {
    const e = this.nodes.wrapper.querySelector(".gallery-tool__stretched-badge");
    if (t && !e) {
      const i = E("div", ["gallery-tool__stretched-badge"]);
      i.textContent = "Обложка", this.nodes.wrapper.insertBefore(i, this.nodes.wrapper.firstChild);
    } else !t && e && e.remove();
  }
};
X.MIN_COLUMNS = 1, X.MAX_COLUMNS = 5;
let Ct = X;
function Me(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var ne = { exports: {} };
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
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(f, this);
        }
        function c(f, g) {
          for (; f._state === 3; ) f = f._value;
          f._state !== 0 ? (f._handled = !0, h._immediateFn(function() {
            var v = f._state === 1 ? g.onFulfilled : g.onRejected;
            if (v !== null) {
              var b;
              try {
                b = v(f._value);
              } catch (x) {
                return void p(g.promise, x);
              }
              l(g.promise, b);
            } else (f._state === 1 ? l : p)(g.promise, f._value);
          })) : f._deferreds.push(g);
        }
        function l(f, g) {
          try {
            if (g === f) throw new TypeError("A promise cannot be resolved with itself.");
            if (g && (typeof g == "object" || typeof g == "function")) {
              var v = g.then;
              if (g instanceof h) return f._state = 3, f._value = g, void y(f);
              if (typeof v == "function") return void u((b = v, x = g, function() {
                b.apply(x, arguments);
              }), f);
            }
            f._state = 1, f._value = g, y(f);
          } catch (C) {
            p(f, C);
          }
          var b, x;
        }
        function p(f, g) {
          f._state = 2, f._value = g, y(f);
        }
        function y(f) {
          f._state === 2 && f._deferreds.length === 0 && h._immediateFn(function() {
            f._handled || h._unhandledRejectionFn(f._value);
          });
          for (var g = 0, v = f._deferreds.length; g < v; g++) c(f, f._deferreds[g]);
          f._deferreds = null;
        }
        function w(f, g, v) {
          this.onFulfilled = typeof f == "function" ? f : null, this.onRejected = typeof g == "function" ? g : null, this.promise = v;
        }
        function u(f, g) {
          var v = !1;
          try {
            f(function(b) {
              v || (v = !0, l(g, b));
            }, function(b) {
              v || (v = !0, p(g, b));
            });
          } catch (b) {
            if (v) return;
            v = !0, p(g, b);
          }
        }
        h.prototype.catch = function(f) {
          return this.then(null, f);
        }, h.prototype.then = function(f, g) {
          var v = new this.constructor(d);
          return c(this, new w(f, g, v)), v;
        }, h.prototype.finally = n.a, h.all = function(f) {
          return new h(function(g, v) {
            if (!f || f.length === void 0) throw new TypeError("Promise.all accepts an array");
            var b = Array.prototype.slice.call(f);
            if (b.length === 0) return g([]);
            var x = b.length;
            function C(S, M) {
              try {
                if (M && (typeof M == "object" || typeof M == "function")) {
                  var T = M.then;
                  if (typeof T == "function") return void T.call(M, function(N) {
                    C(S, N);
                  }, v);
                }
                b[S] = M, --x == 0 && g(b);
              } catch (N) {
                v(N);
              }
            }
            for (var m = 0; m < b.length; m++) C(m, b[m]);
          });
        }, h.resolve = function(f) {
          return f && typeof f == "object" && f.constructor === h ? f : new h(function(g) {
            g(f);
          });
        }, h.reject = function(f) {
          return new h(function(g, v) {
            v(f);
          });
        }, h.race = function(f) {
          return new h(function(g, v) {
            for (var b = 0, x = f.length; b < x; b++) f[b].then(g, v);
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
      function r(u) {
        return (r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
          return typeof f;
        } : function(f) {
          return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
        })(u);
      }
      a(4);
      var n, s, d, h, c, l, p, y = a(8), w = (s = function(u) {
        return new Promise(function(f, g) {
          u = h(u), (u = c(u)).beforeSend && u.beforeSend();
          var v = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          v.open(u.method, u.url), v.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(u.headers).forEach(function(x) {
            var C = u.headers[x];
            v.setRequestHeader(x, C);
          });
          var b = u.ratio;
          v.upload.addEventListener("progress", function(x) {
            var C = Math.round(x.loaded / x.total * 100), m = Math.ceil(C * b / 100);
            u.progress(Math.min(m, 100));
          }, !1), v.addEventListener("progress", function(x) {
            var C = Math.round(x.loaded / x.total * 100), m = Math.ceil(C * (100 - b) / 100) + b;
            u.progress(Math.min(m, 100));
          }, !1), v.onreadystatechange = function() {
            if (v.readyState === 4) {
              var x = v.response;
              try {
                x = JSON.parse(x);
              } catch {
              }
              var C = y.parseHeaders(v.getAllResponseHeaders()), m = { body: x, code: v.status, headers: C };
              p(v.status) ? f(m) : g(m);
            }
          }, v.send(u.data);
        });
      }, d = function(u) {
        return u.method = "POST", s(u);
      }, h = function() {
        var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (u.url && typeof u.url != "string") throw new Error("Url must be a string");
        if (u.url = u.url || "", u.method && typeof u.method != "string") throw new Error("`method` must be a string or null");
        if (u.method = u.method ? u.method.toUpperCase() : "GET", u.headers && r(u.headers) !== "object") throw new Error("`headers` must be an object or null");
        if (u.headers = u.headers || {}, u.type && (typeof u.type != "string" || !Object.values(n).includes(u.type))) throw new Error("`type` must be taken from module's «contentType» library");
        if (u.progress && typeof u.progress != "function") throw new Error("`progress` must be a function or null");
        if (u.progress = u.progress || function(f) {
        }, u.beforeSend = u.beforeSend || function(f) {
        }, u.ratio && typeof u.ratio != "number") throw new Error("`ratio` must be a number");
        if (u.ratio < 0 || u.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
        if (u.ratio = u.ratio || 90, u.accept && typeof u.accept != "string") throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (u.accept = u.accept || "*/*", u.multiple && typeof u.multiple != "boolean") throw new Error("`multiple` must be a true or false");
        if (u.multiple = u.multiple || !1, u.fieldName && typeof u.fieldName != "string") throw new Error("`fieldName` must be a string");
        return u.fieldName = u.fieldName || "files", u;
      }, c = function(u) {
        switch (u.method) {
          case "GET":
            var f = l(u.data, n.URLENCODED);
            delete u.data, u.url = /\?/.test(u.url) ? u.url + "&" + f : u.url + "?" + f;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var g = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || n.JSON;
            }(u);
            (y.isFormData(u.data) || y.isFormElement(u.data)) && (g = n.FORM), u.data = l(u.data, g), g !== w.contentType.FORM && (u.headers["content-type"] = g);
        }
        return u;
      }, l = function() {
        var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case n.URLENCODED:
            return y.urlEncode(u);
          case n.JSON:
            return y.jsonEncode(u);
          case n.FORM:
            return y.formEncode(u);
          default:
            return u;
        }
      }, p = function(u) {
        return u >= 200 && u < 300;
      }, { contentType: n = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: s, get: function(u) {
        return u.method = "GET", s(u);
      }, post: d, transport: function(u) {
        return u = h(u), y.selectFiles(u).then(function(f) {
          for (var g = new FormData(), v = 0; v < f.length; v++) g.append(u.fieldName, f[v], f[v].name);
          y.isObject(u.data) && Object.keys(u.data).forEach(function(x) {
            var C = u.data[x];
            g.append(x, C);
          });
          var b = u.beforeSend;
          return u.beforeSend = function() {
            return b(f);
          }, u.data = g, d(u);
        });
      }, selectFiles: function(u) {
        return delete (u = h(u)).beforeSend, y.selectFiles(u);
      } });
      e.exports = w;
    }, function(e, i, a) {
      a.r(i);
      var r = a(1);
      window.Promise = window.Promise || r.a;
    }, function(e, i, a) {
      (function(r) {
        var n = r !== void 0 && r || typeof self < "u" && self || window, s = Function.prototype.apply;
        function d(h, c) {
          this._id = h, this._clearFn = c;
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
        }, i.enroll = function(h, c) {
          clearTimeout(h._idleTimeoutId), h._idleTimeout = c;
        }, i.unenroll = function(h) {
          clearTimeout(h._idleTimeoutId), h._idleTimeout = -1;
        }, i._unrefActive = i.active = function(h) {
          clearTimeout(h._idleTimeoutId);
          var c = h._idleTimeout;
          c >= 0 && (h._idleTimeoutId = setTimeout(function() {
            h._onTimeout && h._onTimeout();
          }, c));
        }, a(6), i.setImmediate = typeof self < "u" && self.setImmediate || r !== void 0 && r.setImmediate || this && this.setImmediate, i.clearImmediate = typeof self < "u" && self.clearImmediate || r !== void 0 && r.clearImmediate || this && this.clearImmediate;
      }).call(this, a(0));
    }, function(e, i, a) {
      (function(r, n) {
        (function(s, d) {
          if (!s.setImmediate) {
            var h, c, l, p, y, w = 1, u = {}, f = !1, g = s.document, v = Object.getPrototypeOf && Object.getPrototypeOf(s);
            v = v && v.setTimeout ? v : s, {}.toString.call(s.process) === "[object process]" ? h = function(C) {
              n.nextTick(function() {
                x(C);
              });
            } : function() {
              if (s.postMessage && !s.importScripts) {
                var C = !0, m = s.onmessage;
                return s.onmessage = function() {
                  C = !1;
                }, s.postMessage("", "*"), s.onmessage = m, C;
              }
            }() ? (p = "setImmediate$" + Math.random() + "$", y = function(C) {
              C.source === s && typeof C.data == "string" && C.data.indexOf(p) === 0 && x(+C.data.slice(p.length));
            }, s.addEventListener ? s.addEventListener("message", y, !1) : s.attachEvent("onmessage", y), h = function(C) {
              s.postMessage(p + C, "*");
            }) : s.MessageChannel ? ((l = new MessageChannel()).port1.onmessage = function(C) {
              x(C.data);
            }, h = function(C) {
              l.port2.postMessage(C);
            }) : g && "onreadystatechange" in g.createElement("script") ? (c = g.documentElement, h = function(C) {
              var m = g.createElement("script");
              m.onreadystatechange = function() {
                x(C), m.onreadystatechange = null, c.removeChild(m), m = null;
              }, c.appendChild(m);
            }) : h = function(C) {
              setTimeout(x, 0, C);
            }, v.setImmediate = function(C) {
              typeof C != "function" && (C = new Function("" + C));
              for (var m = new Array(arguments.length - 1), S = 0; S < m.length; S++) m[S] = arguments[S + 1];
              var M = { callback: C, args: m };
              return u[w] = M, h(w), w++;
            }, v.clearImmediate = b;
          }
          function b(C) {
            delete u[C];
          }
          function x(C) {
            if (f) setTimeout(x, 0, C);
            else {
              var m = u[C];
              if (m) {
                f = !0;
                try {
                  (function(S) {
                    var M = S.callback, T = S.args;
                    switch (T.length) {
                      case 0:
                        M();
                        break;
                      case 1:
                        M(T[0]);
                        break;
                      case 2:
                        M(T[0], T[1]);
                        break;
                      case 3:
                        M(T[0], T[1], T[2]);
                        break;
                      default:
                        M.apply(d, T);
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
      function h(v) {
        if (a === setTimeout) return setTimeout(v, 0);
        if ((a === s || !a) && setTimeout) return a = setTimeout, setTimeout(v, 0);
        try {
          return a(v, 0);
        } catch {
          try {
            return a.call(null, v, 0);
          } catch {
            return a.call(this, v, 0);
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
      var c, l = [], p = !1, y = -1;
      function w() {
        p && c && (p = !1, c.length ? l = c.concat(l) : y = -1, l.length && u());
      }
      function u() {
        if (!p) {
          var v = h(w);
          p = !0;
          for (var b = l.length; b; ) {
            for (c = l, l = []; ++y < b; ) c && c[y].run();
            y = -1, b = l.length;
          }
          c = null, p = !1, function(x) {
            if (r === clearTimeout) return clearTimeout(x);
            if ((r === d || !r) && clearTimeout) return r = clearTimeout, clearTimeout(x);
            try {
              r(x);
            } catch {
              try {
                return r.call(null, x);
              } catch {
                return r.call(this, x);
              }
            }
          }(v);
        }
      }
      function f(v, b) {
        this.fun = v, this.array = b;
      }
      function g() {
      }
      n.nextTick = function(v) {
        var b = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var x = 1; x < arguments.length; x++) b[x - 1] = arguments[x];
        l.push(new f(v, b)), l.length !== 1 || p || h(u);
      }, f.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = g, n.addListener = g, n.once = g, n.off = g, n.removeListener = g, n.removeAllListeners = g, n.emit = g, n.prependListener = g, n.prependOnceListener = g, n.listeners = function(v) {
        return [];
      }, n.binding = function(v) {
        throw new Error("process.binding is not supported");
      }, n.cwd = function() {
        return "/";
      }, n.chdir = function(v) {
        throw new Error("process.chdir is not supported");
      }, n.umask = function() {
        return 0;
      };
    }, function(e, i, a) {
      function r(s, d) {
        for (var h = 0; h < d.length; h++) {
          var c = d[h];
          c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(s, c.key, c);
        }
      }
      var n = a(9);
      e.exports = function() {
        function s() {
          (function(l, p) {
            if (!(l instanceof p)) throw new TypeError("Cannot call a class as a function");
          })(this, s);
        }
        var d, h, c;
        return d = s, c = [{ key: "urlEncode", value: function(l) {
          return n(l);
        } }, { key: "jsonEncode", value: function(l) {
          return JSON.stringify(l);
        } }, { key: "formEncode", value: function(l) {
          if (this.isFormData(l)) return l;
          if (this.isFormElement(l)) return new FormData(l);
          if (this.isObject(l)) {
            var p = new FormData();
            return Object.keys(l).forEach(function(y) {
              var w = l[y];
              p.append(y, w);
            }), p;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(l) {
          return Object.prototype.toString.call(l) === "[object Object]";
        } }, { key: "isFormData", value: function(l) {
          return l instanceof FormData;
        } }, { key: "isFormElement", value: function(l) {
          return l instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(p, y) {
            var w = document.createElement("INPUT");
            w.type = "file", l.multiple && w.setAttribute("multiple", "multiple"), l.accept && w.setAttribute("accept", l.accept), w.style.display = "none", document.body.appendChild(w), w.addEventListener("change", function(u) {
              var f = u.target.files;
              p(f), document.body.removeChild(w);
            }, !1), w.click();
          });
        } }, { key: "parseHeaders", value: function(l) {
          var p = l.trim().split(/[\r\n]+/), y = {};
          return p.forEach(function(w) {
            var u = w.split(": "), f = u.shift(), g = u.join(": ");
            f && (y[f] = g);
          }), y;
        } }], (h = null) && r(d.prototype, h), c && r(d, c), s;
      }();
    }, function(e, i) {
      var a = function(n) {
        return encodeURIComponent(n).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, r = function(n, s, d, h) {
        return s = s || null, d = d || "&", h = h || null, n ? function(c) {
          for (var l = new Array(), p = 0; p < c.length; p++) c[p] && l.push(c[p]);
          return l;
        }(Object.keys(n).map(function(c) {
          var l, p, y = c;
          if (h && (y = h + "[" + y + "]"), typeof n[c] == "object" && n[c] !== null) l = r(n[c], null, d, y);
          else {
            s && (p = y, y = !isNaN(parseFloat(p)) && isFinite(p) ? s + Number(y) : y);
            var w = n[c];
            w = (w = (w = (w = w === !0 ? "1" : w) === !1 ? "0" : w) === 0 ? "0" : w) || "", l = a(y) + "=" + a(w);
          }
          return l;
        })).join(d).replace(/[!'()*]/g, "") : "";
      };
      e.exports = r;
    }]);
  });
})(ne);
var Te = ne.exports;
const Q = /* @__PURE__ */ Me(Te);
function yt(o) {
  return o !== void 0 && typeof o.then == "function";
}
class _e {
  constructor({ config: t, onUpload: e, onError: i }) {
    this.config = t, this.onUpload = e, this.onError = i;
  }
  /**
   * Upload file selected from device
   */
  uploadSelectedFile({ onPreview: t }) {
    var a;
    const e = (r) => {
      const n = new FileReader();
      n.readAsDataURL(r), n.onload = (s) => {
        t(s.target.result);
      }, n.onerror = () => {
        this.onError("Failed to read file");
      };
    };
    let i;
    if ((a = this.config.uploader) != null && a.uploadByFile)
      i = Q.selectFiles({ accept: this.config.types ?? "image/*" }).then((r) => {
        if (!r || r.length === 0)
          throw new Error("No file selected");
        e(r[0]);
        const n = this.config.uploader.uploadByFile(r[0]);
        return yt(n) || console.warn("Custom uploader method uploadByFile should return a Promise"), n;
      });
    else {
      if (!this.config.endpoints.byFile) {
        this.onError("Upload endpoint (byFile) is not configured");
        return;
      }
      i = Q.transport({
        url: this.config.endpoints.byFile,
        data: this.config.additionalRequestData,
        accept: this.config.types ?? "image/*",
        headers: this.config.additionalRequestHeaders,
        beforeSend: (r) => {
          r && r.length > 0 && e(r[0]);
        },
        fieldName: this.config.field ?? "image"
      }).then((r) => r.body);
    }
    i.then((r) => this.onUpload(r)).catch((r) => this.onError(r));
  }
  /**
   * Upload image by URL
   */
  uploadByUrl(t) {
    var i;
    let e;
    if ((i = this.config.uploader) != null && i.uploadByUrl)
      e = this.config.uploader.uploadByUrl(t), yt(e) || console.warn("Custom uploader method uploadByUrl should return a Promise");
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
    var r;
    const i = new FileReader();
    i.readAsDataURL(t), i.onload = (n) => {
      e(n.target.result);
    }, i.onerror = () => {
      this.onError("Failed to read file");
    };
    let a;
    if ((r = this.config.uploader) != null && r.uploadByFile)
      a = this.config.uploader.uploadByFile(t), yt(a) || console.warn("Custom uploader method uploadByFile should return a Promise");
    else {
      if (!this.config.endpoints.byFile) {
        this.onError("Upload endpoint (byFile) is not configured");
        return;
      }
      const n = new FormData();
      n.append(this.config.field ?? "image", t), this.config.additionalRequestData && Object.entries(this.config.additionalRequestData).forEach(([s, d]) => {
        n.append(s, d);
      }), a = Q.post({
        url: this.config.endpoints.byFile,
        data: n,
        type: Q.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((s) => s.body);
    }
    a.then((n) => this.onUpload(n)).catch((n) => this.onError(n));
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
function Wt(o, t) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(o);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(o, a).enumerable;
    })), e.push.apply(e, i);
  }
  return e;
}
function oe(o) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wt(Object(e), !0).forEach(function(i) {
      ke(o, i, e[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : Wt(Object(e)).forEach(function(i) {
      Object.defineProperty(o, i, Object.getOwnPropertyDescriptor(e, i));
    });
  }
  return o;
}
function Oe(o, t) {
  if (typeof o != "object" || !o) return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(o, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(o);
}
function se(o) {
  var t = Oe(o, "string");
  return typeof t == "symbol" ? t : t + "";
}
function xt(o) {
  "@babel/helpers - typeof";
  return xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xt(o);
}
function Le(o, t) {
  if (!(o instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Xt(o, t) {
  for (var e = 0; e < t.length; e++) {
    var i = t[e];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(o, se(i.key), i);
  }
}
function Ie(o, t, e) {
  return t && Xt(o.prototype, t), e && Xt(o, e), Object.defineProperty(o, "prototype", {
    writable: !1
  }), o;
}
function ke(o, t, e) {
  return t = se(t), t in o ? Object.defineProperty(o, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : o[t] = e, o;
}
function he(o) {
  return Re(o) || Ae(o) || Ne(o) || Pe();
}
function Re(o) {
  if (Array.isArray(o)) return St(o);
}
function Ae(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null) return Array.from(o);
}
function Ne(o, t) {
  if (o) {
    if (typeof o == "string") return St(o, t);
    var e = Object.prototype.toString.call(o).slice(8, -1);
    if (e === "Object" && o.constructor && (e = o.constructor.name), e === "Map" || e === "Set") return Array.from(o);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return St(o, t);
  }
}
function St(o, t) {
  (t == null || t > o.length) && (t = o.length);
  for (var e = 0, i = new Array(t); e < t; e++) i[e] = o[e];
  return i;
}
function Pe() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var mt = typeof window < "u" && typeof window.document < "u", U = mt ? window : {}, Rt = mt && U.document.documentElement ? "ontouchstart" in U.document.documentElement : !1, At = mt ? "PointerEvent" in U : !1, _ = "cropper", Nt = "all", le = "crop", ce = "move", de = "zoom", G = "e", J = "w", Z = "s", W = "n", at = "ne", nt = "nw", ot = "se", st = "sw", Et = "".concat(_, "-crop"), Yt = "".concat(_, "-disabled"), A = "".concat(_, "-hidden"), zt = "".concat(_, "-hide"), Be = "".concat(_, "-invisible"), ft = "".concat(_, "-modal"), Dt = "".concat(_, "-move"), lt = "".concat(_, "Action"), ut = "".concat(_, "Preview"), Pt = "crop", ue = "move", pe = "none", Mt = "crop", Tt = "cropend", _t = "cropmove", Ot = "cropstart", $t = "dblclick", He = Rt ? "touchstart" : "mousedown", je = Rt ? "touchmove" : "mousemove", Ue = Rt ? "touchend touchcancel" : "mouseup", qt = At ? "pointerdown" : He, Vt = At ? "pointermove" : je, Gt = At ? "pointerup pointercancel" : Ue, Jt = "ready", Kt = "resize", Qt = "wheel", Lt = "zoom", Zt = "image/jpeg", Fe = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, We = /^data:/, Xe = /^data:image\/jpeg;base64,/, Ye = /^img|canvas$/i, fe = 200, me = 100, te = {
  // Define the view mode of the cropper
  viewMode: 0,
  // 0, 1, 2, 3
  // Define the dragging mode of the cropper
  dragMode: Pt,
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
  minContainerWidth: fe,
  minContainerHeight: me,
  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
}, ze = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', $e = Number.isNaN || U.isNaN;
function D(o) {
  return typeof o == "number" && !$e(o);
}
var ee = function(t) {
  return t > 0 && t < 1 / 0;
};
function wt(o) {
  return typeof o > "u";
}
function K(o) {
  return xt(o) === "object" && o !== null;
}
var qe = Object.prototype.hasOwnProperty;
function tt(o) {
  if (!K(o))
    return !1;
  try {
    var t = o.constructor, e = t.prototype;
    return t && e && qe.call(e, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function R(o) {
  return typeof o == "function";
}
var Ve = Array.prototype.slice;
function ge(o) {
  return Array.from ? Array.from(o) : Ve.call(o);
}
function L(o, t) {
  return o && R(t) && (Array.isArray(o) || D(o.length) ? ge(o).forEach(function(e, i) {
    t.call(o, e, i, o);
  }) : K(o) && Object.keys(o).forEach(function(e) {
    t.call(o, o[e], e, o);
  })), o;
}
var O = Object.assign || function(t) {
  for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++)
    i[a - 1] = arguments[a];
  return K(t) && i.length > 0 && i.forEach(function(r) {
    K(r) && Object.keys(r).forEach(function(n) {
      t[n] = r[n];
    });
  }), t;
}, Ge = /\.\d*(?:0|9){12}\d*$/;
function it(o) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return Ge.test(o) ? Math.round(o * t) / t : o;
}
var Je = /^width|height|left|top|marginLeft|marginTop$/;
function Y(o, t) {
  var e = o.style;
  L(t, function(i, a) {
    Je.test(a) && D(i) && (i = "".concat(i, "px")), e[a] = i;
  });
}
function Ke(o, t) {
  return o.classList ? o.classList.contains(t) : o.className.indexOf(t) > -1;
}
function I(o, t) {
  if (t) {
    if (D(o.length)) {
      L(o, function(i) {
        I(i, t);
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
function j(o, t) {
  if (t) {
    if (D(o.length)) {
      L(o, function(e) {
        j(e, t);
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
function et(o, t, e) {
  if (t) {
    if (D(o.length)) {
      L(o, function(i) {
        et(i, t, e);
      });
      return;
    }
    e ? I(o, t) : j(o, t);
  }
}
var Qe = /([a-z\d])([A-Z])/g;
function Bt(o) {
  return o.replace(Qe, "$1-$2").toLowerCase();
}
function It(o, t) {
  return K(o[t]) ? o[t] : o.dataset ? o.dataset[t] : o.getAttribute("data-".concat(Bt(t)));
}
function ct(o, t, e) {
  K(e) ? o[t] = e : o.dataset ? o.dataset[t] = e : o.setAttribute("data-".concat(Bt(t)), e);
}
function Ze(o, t) {
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
    o.removeAttribute("data-".concat(Bt(t)));
}
var ve = /\s\s*/, ye = function() {
  var o = !1;
  if (mt) {
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
    U.addEventListener("test", e, i), U.removeEventListener("test", e, i);
  }
  return o;
}();
function B(o, t, e) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = e;
  t.trim().split(ve).forEach(function(r) {
    if (!ye) {
      var n = o.listeners;
      n && n[r] && n[r][e] && (a = n[r][e], delete n[r][e], Object.keys(n[r]).length === 0 && delete n[r], Object.keys(n).length === 0 && delete o.listeners);
    }
    o.removeEventListener(r, a, i);
  });
}
function P(o, t, e) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = e;
  t.trim().split(ve).forEach(function(r) {
    if (i.once && !ye) {
      var n = o.listeners, s = n === void 0 ? {} : n;
      a = function() {
        delete s[r][e], o.removeEventListener(r, a, i);
        for (var h = arguments.length, c = new Array(h), l = 0; l < h; l++)
          c[l] = arguments[l];
        e.apply(o, c);
      }, s[r] || (s[r] = {}), s[r][e] && o.removeEventListener(r, s[r][e], i), s[r][e] = a, o.listeners = s;
    }
    o.addEventListener(r, a, i);
  });
}
function rt(o, t, e) {
  var i;
  return R(Event) && R(CustomEvent) ? i = new CustomEvent(t, {
    detail: e,
    bubbles: !0,
    cancelable: !0
  }) : (i = document.createEvent("CustomEvent"), i.initCustomEvent(t, !0, !0, e)), o.dispatchEvent(i);
}
function we(o) {
  var t = o.getBoundingClientRect();
  return {
    left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: t.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var bt = U.location, ti = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function ie(o) {
  var t = o.match(ti);
  return t !== null && (t[1] !== bt.protocol || t[2] !== bt.hostname || t[3] !== bt.port);
}
function re(o) {
  var t = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return o + (o.indexOf("?") === -1 ? "?" : "&") + t;
}
function ht(o) {
  var t = o.rotate, e = o.scaleX, i = o.scaleY, a = o.translateX, r = o.translateY, n = [];
  D(a) && a !== 0 && n.push("translateX(".concat(a, "px)")), D(r) && r !== 0 && n.push("translateY(".concat(r, "px)")), D(t) && t !== 0 && n.push("rotate(".concat(t, "deg)")), D(e) && e !== 1 && n.push("scaleX(".concat(e, ")")), D(i) && i !== 1 && n.push("scaleY(".concat(i, ")"));
  var s = n.length ? n.join(" ") : "none";
  return {
    WebkitTransform: s,
    msTransform: s,
    transform: s
  };
}
function ei(o) {
  var t = oe({}, o), e = 0;
  return L(o, function(i, a) {
    delete t[a], L(t, function(r) {
      var n = Math.abs(i.startX - r.startX), s = Math.abs(i.startY - r.startY), d = Math.abs(i.endX - r.endX), h = Math.abs(i.endY - r.endY), c = Math.sqrt(n * n + s * s), l = Math.sqrt(d * d + h * h), p = (l - c) / c;
      Math.abs(p) > Math.abs(e) && (e = p);
    });
  }), e;
}
function pt(o, t) {
  var e = o.pageX, i = o.pageY, a = {
    endX: e,
    endY: i
  };
  return t ? a : oe({
    startX: e,
    startY: i
  }, a);
}
function ii(o) {
  var t = 0, e = 0, i = 0;
  return L(o, function(a) {
    var r = a.startX, n = a.startY;
    t += r, e += n, i += 1;
  }), t /= i, e /= i, {
    pageX: t,
    pageY: e
  };
}
function z(o) {
  var t = o.aspectRatio, e = o.height, i = o.width, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", r = ee(i), n = ee(e);
  if (r && n) {
    var s = e * t;
    a === "contain" && s > i || a === "cover" && s < i ? e = i / t : i = e * t;
  } else r ? e = i / t : n && (i = e * t);
  return {
    width: i,
    height: e
  };
}
function ri(o) {
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
function ai(o, t, e, i) {
  var a = t.aspectRatio, r = t.naturalWidth, n = t.naturalHeight, s = t.rotate, d = s === void 0 ? 0 : s, h = t.scaleX, c = h === void 0 ? 1 : h, l = t.scaleY, p = l === void 0 ? 1 : l, y = e.aspectRatio, w = e.naturalWidth, u = e.naturalHeight, f = i.fillColor, g = f === void 0 ? "transparent" : f, v = i.imageSmoothingEnabled, b = v === void 0 ? !0 : v, x = i.imageSmoothingQuality, C = x === void 0 ? "low" : x, m = i.maxWidth, S = m === void 0 ? 1 / 0 : m, M = i.maxHeight, T = M === void 0 ? 1 / 0 : M, N = i.minWidth, $ = N === void 0 ? 0 : N, q = i.minHeight, F = q === void 0 ? 0 : q, H = document.createElement("canvas"), k = H.getContext("2d"), V = z({
    aspectRatio: y,
    width: S,
    height: T
  }), dt = z({
    aspectRatio: y,
    width: $,
    height: F
  }, "cover"), gt = Math.min(V.width, Math.max(dt.width, w)), vt = Math.min(V.height, Math.max(dt.height, u)), Ht = z({
    aspectRatio: a,
    width: S,
    height: T
  }), jt = z({
    aspectRatio: a,
    width: $,
    height: F
  }, "cover"), Ut = Math.min(Ht.width, Math.max(jt.width, r)), Ft = Math.min(Ht.height, Math.max(jt.height, n)), xe = [-Ut / 2, -Ft / 2, Ut, Ft];
  return H.width = it(gt), H.height = it(vt), k.fillStyle = g, k.fillRect(0, 0, gt, vt), k.save(), k.translate(gt / 2, vt / 2), k.rotate(d * Math.PI / 180), k.scale(c, p), k.imageSmoothingEnabled = b, k.imageSmoothingQuality = C, k.drawImage.apply(k, [o].concat(he(xe.map(function(Se) {
    return Math.floor(it(Se));
  })))), k.restore(), H;
}
var be = String.fromCharCode;
function ni(o, t, e) {
  var i = "";
  e += t;
  for (var a = t; a < e; a += 1)
    i += be(o.getUint8(a));
  return i;
}
var oi = /^data:.*,/;
function si(o) {
  var t = o.replace(oi, ""), e = atob(t), i = new ArrayBuffer(e.length), a = new Uint8Array(i);
  return L(a, function(r, n) {
    a[n] = e.charCodeAt(n);
  }), i;
}
function hi(o, t) {
  for (var e = [], i = 8192, a = new Uint8Array(o); a.length > 0; )
    e.push(be.apply(null, ge(a.subarray(0, i)))), a = a.subarray(i);
  return "data:".concat(t, ";base64,").concat(btoa(e.join("")));
}
function li(o) {
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
      if (ni(t, d, 4) === "Exif") {
        var c = t.getUint16(h);
        if (i = c === 18761, (i || c === 19789) && t.getUint16(h + 2, i) === 42) {
          var l = t.getUint32(h + 4, i);
          l >= 8 && (r = h + l);
        }
      }
    }
    if (r) {
      var p = t.getUint16(r, i), y, w;
      for (w = 0; w < p; w += 1)
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
function ci(o) {
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
var di = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var t = this.element, e = this.options, i = this.container, a = this.cropper, r = Number(e.minContainerWidth), n = Number(e.minContainerHeight);
    I(a, A), j(t, A);
    var s = {
      width: Math.max(i.offsetWidth, r >= 0 ? r : fe),
      height: Math.max(i.offsetHeight, n >= 0 ? n : me)
    };
    this.containerData = s, Y(a, {
      width: s.width,
      height: s.height
    }), I(t, A), j(a, A);
  },
  // Canvas (image wrapper)
  initCanvas: function() {
    var t = this.containerData, e = this.imageData, i = this.options.viewMode, a = Math.abs(e.rotate) % 180 === 90, r = a ? e.naturalHeight : e.naturalWidth, n = a ? e.naturalWidth : e.naturalHeight, s = r / n, d = t.width, h = t.height;
    t.height * s > t.width ? i === 3 ? d = t.height * s : h = t.width / s : i === 3 ? h = t.width / s : d = t.height * s;
    var c = {
      aspectRatio: s,
      naturalWidth: r,
      naturalHeight: n,
      width: d,
      height: h
    };
    this.canvasData = c, this.limited = i === 1 || i === 2, this.limitCanvas(!0, !0), c.width = Math.min(Math.max(c.width, c.minWidth), c.maxWidth), c.height = Math.min(Math.max(c.height, c.minHeight), c.maxHeight), c.left = (t.width - c.width) / 2, c.top = (t.height - c.height) / 2, c.oldLeft = c.left, c.oldTop = c.top, this.initialCanvasData = O({}, c);
  },
  limitCanvas: function(t, e) {
    var i = this.options, a = this.containerData, r = this.canvasData, n = this.cropBoxData, s = i.viewMode, d = r.aspectRatio, h = this.cropped && n;
    if (t) {
      var c = Number(i.minCanvasWidth) || 0, l = Number(i.minCanvasHeight) || 0;
      s > 1 ? (c = Math.max(c, a.width), l = Math.max(l, a.height), s === 3 && (l * d > c ? c = l * d : l = c / d)) : s > 0 && (c ? c = Math.max(c, h ? n.width : 0) : l ? l = Math.max(l, h ? n.height : 0) : h && (c = n.width, l = n.height, l * d > c ? c = l * d : l = c / d));
      var p = z({
        aspectRatio: d,
        width: c,
        height: l
      });
      c = p.width, l = p.height, r.minWidth = c, r.minHeight = l, r.maxWidth = 1 / 0, r.maxHeight = 1 / 0;
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
      var r = ri({
        width: a.naturalWidth * Math.abs(a.scaleX || 1),
        height: a.naturalHeight * Math.abs(a.scaleY || 1),
        degree: a.rotate || 0
      }), n = r.width, s = r.height, d = i.width * (n / i.naturalWidth), h = i.height * (s / i.naturalHeight);
      i.left -= (d - i.width) / 2, i.top -= (h - i.height) / 2, i.width = d, i.height = h, i.aspectRatio = n / s, i.naturalWidth = n, i.naturalHeight = s, this.limitCanvas(!0, !1);
    }
    (i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCanvas(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, Y(this.canvas, O({
      width: i.width,
      height: i.height
    }, ht({
      translateX: i.left,
      translateY: i.top
    }))), this.renderImage(t), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(t) {
    var e = this.canvasData, i = this.imageData, a = i.naturalWidth * (e.width / e.naturalWidth), r = i.naturalHeight * (e.height / e.naturalHeight);
    O(i, {
      width: a,
      height: r,
      left: (e.width - a) / 2,
      top: (e.height - r) / 2
    }), Y(this.image, O({
      width: i.width,
      height: i.height
    }, ht(O({
      translateX: i.left,
      translateY: i.top
    }, i)))), t && this.output();
  },
  initCropBox: function() {
    var t = this.options, e = this.canvasData, i = t.aspectRatio || t.initialAspectRatio, a = Number(t.autoCropArea) || 0.8, r = {
      width: e.width,
      height: e.height
    };
    i && (e.height * i > e.width ? r.height = r.width / i : r.width = r.height * i), this.cropBoxData = r, this.limitCropBox(!0, !0), r.width = Math.min(Math.max(r.width, r.minWidth), r.maxWidth), r.height = Math.min(Math.max(r.height, r.minHeight), r.maxHeight), r.width = Math.max(r.minWidth, r.width * a), r.height = Math.max(r.minHeight, r.height * a), r.left = e.left + (e.width - r.width) / 2, r.top = e.top + (e.height - r.height) / 2, r.oldLeft = r.left, r.oldTop = r.top, this.initialCropBoxData = O({}, r);
  },
  limitCropBox: function(t, e) {
    var i = this.options, a = this.containerData, r = this.canvasData, n = this.cropBoxData, s = this.limited, d = i.aspectRatio;
    if (t) {
      var h = Number(i.minCropBoxWidth) || 0, c = Number(i.minCropBoxHeight) || 0, l = s ? Math.min(a.width, r.width, r.width + r.left, a.width - r.left) : a.width, p = s ? Math.min(a.height, r.height, r.height + r.top, a.height - r.top) : a.height;
      h = Math.min(h, a.width), c = Math.min(c, a.height), d && (h && c ? c * d > h ? c = h / d : h = c * d : h ? c = h / d : c && (h = c * d), p * d > l ? p = l / d : l = p * d), n.minWidth = Math.min(h, l), n.minHeight = Math.min(c, p), n.maxWidth = l, n.maxHeight = p;
    }
    e && (s ? (n.minLeft = Math.max(0, r.left), n.minTop = Math.max(0, r.top), n.maxLeft = Math.min(a.width, r.left + r.width) - n.width, n.maxTop = Math.min(a.height, r.top + r.height) - n.height) : (n.minLeft = 0, n.minTop = 0, n.maxLeft = a.width - n.width, n.maxTop = a.height - n.height));
  },
  renderCropBox: function() {
    var t = this.options, e = this.containerData, i = this.cropBoxData;
    (i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCropBox(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, t.movable && t.cropBoxMovable && ct(this.face, lt, i.width >= e.width && i.height >= e.height ? ce : Nt), Y(this.cropBox, O({
      width: i.width,
      height: i.height
    }, ht({
      translateX: i.left,
      translateY: i.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), rt(this.element, Mt, this.getData());
  }
}, ui = {
  initPreview: function() {
    var t = this.element, e = this.crossOrigin, i = this.options.preview, a = e ? this.crossOriginUrl : this.url, r = t.alt || "The image to preview", n = document.createElement("img");
    if (e && (n.crossOrigin = e), n.src = a, n.alt = r, this.viewBox.appendChild(n), this.viewBoxImage = n, !!i) {
      var s = i;
      typeof i == "string" ? s = t.ownerDocument.querySelectorAll(i) : i.querySelector && (s = [i]), this.previews = s, L(s, function(d) {
        var h = document.createElement("img");
        ct(d, ut, {
          width: d.offsetWidth,
          height: d.offsetHeight,
          html: d.innerHTML
        }), e && (h.crossOrigin = e), h.src = a, h.alt = r, h.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', d.innerHTML = "", d.appendChild(h);
      });
    }
  },
  resetPreview: function() {
    L(this.previews, function(t) {
      var e = It(t, ut);
      Y(t, {
        width: e.width,
        height: e.height
      }), t.innerHTML = e.html, Ze(t, ut);
    });
  },
  preview: function() {
    var t = this.imageData, e = this.canvasData, i = this.cropBoxData, a = i.width, r = i.height, n = t.width, s = t.height, d = i.left - e.left - t.left, h = i.top - e.top - t.top;
    !this.cropped || this.disabled || (Y(this.viewBoxImage, O({
      width: n,
      height: s
    }, ht(O({
      translateX: -d,
      translateY: -h
    }, t)))), L(this.previews, function(c) {
      var l = It(c, ut), p = l.width, y = l.height, w = p, u = y, f = 1;
      a && (f = p / a, u = r * f), r && u > y && (f = y / r, w = a * f, u = y), Y(c, {
        width: w,
        height: u
      }), Y(c.getElementsByTagName("img")[0], O({
        width: n * f,
        height: s * f
      }, ht(O({
        translateX: -d * f,
        translateY: -h * f
      }, t))));
    }));
  }
}, pi = {
  bind: function() {
    var t = this.element, e = this.options, i = this.cropper;
    R(e.cropstart) && P(t, Ot, e.cropstart), R(e.cropmove) && P(t, _t, e.cropmove), R(e.cropend) && P(t, Tt, e.cropend), R(e.crop) && P(t, Mt, e.crop), R(e.zoom) && P(t, Lt, e.zoom), P(i, qt, this.onCropStart = this.cropStart.bind(this)), e.zoomable && e.zoomOnWheel && P(i, Qt, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), e.toggleDragModeOnDblclick && P(i, $t, this.onDblclick = this.dblclick.bind(this)), P(t.ownerDocument, Vt, this.onCropMove = this.cropMove.bind(this)), P(t.ownerDocument, Gt, this.onCropEnd = this.cropEnd.bind(this)), e.responsive && P(window, Kt, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var t = this.element, e = this.options, i = this.cropper;
    R(e.cropstart) && B(t, Ot, e.cropstart), R(e.cropmove) && B(t, _t, e.cropmove), R(e.cropend) && B(t, Tt, e.cropend), R(e.crop) && B(t, Mt, e.crop), R(e.zoom) && B(t, Lt, e.zoom), B(i, qt, this.onCropStart), e.zoomable && e.zoomOnWheel && B(i, Qt, this.onWheel, {
      passive: !1,
      capture: !0
    }), e.toggleDragModeOnDblclick && B(i, $t, this.onDblclick), B(t.ownerDocument, Vt, this.onCropMove), B(t.ownerDocument, Gt, this.onCropEnd), e.responsive && B(window, Kt, this.onResize);
  }
}, fi = {
  resize: function() {
    if (!this.disabled) {
      var t = this.options, e = this.container, i = this.containerData, a = e.offsetWidth / i.width, r = e.offsetHeight / i.height, n = Math.abs(a - 1) > Math.abs(r - 1) ? a : r;
      if (n !== 1) {
        var s, d;
        t.restore && (s = this.getCanvasData(), d = this.getCropBoxData()), this.render(), t.restore && (this.setCanvasData(L(s, function(h, c) {
          s[c] = h * n;
        })), this.setCropBoxData(L(d, function(h, c) {
          d[c] = h * n;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === pe || this.setDragMode(Ke(this.dragBox, Et) ? ue : Pt);
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
    (D(e) && e !== 1 || D(i) && i !== 0 || t.ctrlKey))) {
      var a = this.options, r = this.pointers, n;
      t.changedTouches ? L(t.changedTouches, function(s) {
        r[s.identifier] = pt(s);
      }) : r[t.pointerId || 0] = pt(t), Object.keys(r).length > 1 && a.zoomable && a.zoomOnTouch ? n = de : n = It(t.target, lt), Fe.test(n) && rt(this.element, Ot, {
        originalEvent: t,
        action: n
      }) !== !1 && (t.preventDefault(), this.action = n, this.cropping = !1, n === le && (this.cropping = !0, I(this.dragBox, ft)));
    }
  },
  cropMove: function(t) {
    var e = this.action;
    if (!(this.disabled || !e)) {
      var i = this.pointers;
      t.preventDefault(), rt(this.element, _t, {
        originalEvent: t,
        action: e
      }) !== !1 && (t.changedTouches ? L(t.changedTouches, function(a) {
        O(i[a.identifier] || {}, pt(a, !0));
      }) : O(i[t.pointerId || 0] || {}, pt(t, !0)), this.change(t));
    }
  },
  cropEnd: function(t) {
    if (!this.disabled) {
      var e = this.action, i = this.pointers;
      t.changedTouches ? L(t.changedTouches, function(a) {
        delete i[a.identifier];
      }) : delete i[t.pointerId || 0], e && (t.preventDefault(), Object.keys(i).length || (this.action = ""), this.cropping && (this.cropping = !1, et(this.dragBox, ft, this.cropped && this.options.modal)), rt(this.element, Tt, {
        originalEvent: t,
        action: e
      }));
    }
  }
}, mi = {
  change: function(t) {
    var e = this.options, i = this.canvasData, a = this.containerData, r = this.cropBoxData, n = this.pointers, s = this.action, d = e.aspectRatio, h = r.left, c = r.top, l = r.width, p = r.height, y = h + l, w = c + p, u = 0, f = 0, g = a.width, v = a.height, b = !0, x;
    !d && t.shiftKey && (d = l && p ? l / p : 1), this.limited && (u = r.minLeft, f = r.minTop, g = u + Math.min(a.width, i.width, i.left + i.width), v = f + Math.min(a.height, i.height, i.top + i.height));
    var C = n[Object.keys(n)[0]], m = {
      x: C.endX - C.startX,
      y: C.endY - C.startY
    }, S = function(T) {
      switch (T) {
        case G:
          y + m.x > g && (m.x = g - y);
          break;
        case J:
          h + m.x < u && (m.x = u - h);
          break;
        case W:
          c + m.y < f && (m.y = f - c);
          break;
        case Z:
          w + m.y > v && (m.y = v - w);
          break;
      }
    };
    switch (s) {
      case Nt:
        h += m.x, c += m.y;
        break;
      case G:
        if (m.x >= 0 && (y >= g || d && (c <= f || w >= v))) {
          b = !1;
          break;
        }
        S(G), l += m.x, l < 0 && (s = J, l = -l, h -= l), d && (p = l / d, c += (r.height - p) / 2);
        break;
      case W:
        if (m.y <= 0 && (c <= f || d && (h <= u || y >= g))) {
          b = !1;
          break;
        }
        S(W), p -= m.y, c += m.y, p < 0 && (s = Z, p = -p, c -= p), d && (l = p * d, h += (r.width - l) / 2);
        break;
      case J:
        if (m.x <= 0 && (h <= u || d && (c <= f || w >= v))) {
          b = !1;
          break;
        }
        S(J), l -= m.x, h += m.x, l < 0 && (s = G, l = -l, h -= l), d && (p = l / d, c += (r.height - p) / 2);
        break;
      case Z:
        if (m.y >= 0 && (w >= v || d && (h <= u || y >= g))) {
          b = !1;
          break;
        }
        S(Z), p += m.y, p < 0 && (s = W, p = -p, c -= p), d && (l = p * d, h += (r.width - l) / 2);
        break;
      case at:
        if (d) {
          if (m.y <= 0 && (c <= f || y >= g)) {
            b = !1;
            break;
          }
          S(W), p -= m.y, c += m.y, l = p * d;
        } else
          S(W), S(G), m.x >= 0 ? y < g ? l += m.x : m.y <= 0 && c <= f && (b = !1) : l += m.x, m.y <= 0 ? c > f && (p -= m.y, c += m.y) : (p -= m.y, c += m.y);
        l < 0 && p < 0 ? (s = st, p = -p, l = -l, c -= p, h -= l) : l < 0 ? (s = nt, l = -l, h -= l) : p < 0 && (s = ot, p = -p, c -= p);
        break;
      case nt:
        if (d) {
          if (m.y <= 0 && (c <= f || h <= u)) {
            b = !1;
            break;
          }
          S(W), p -= m.y, c += m.y, l = p * d, h += r.width - l;
        } else
          S(W), S(J), m.x <= 0 ? h > u ? (l -= m.x, h += m.x) : m.y <= 0 && c <= f && (b = !1) : (l -= m.x, h += m.x), m.y <= 0 ? c > f && (p -= m.y, c += m.y) : (p -= m.y, c += m.y);
        l < 0 && p < 0 ? (s = ot, p = -p, l = -l, c -= p, h -= l) : l < 0 ? (s = at, l = -l, h -= l) : p < 0 && (s = st, p = -p, c -= p);
        break;
      case st:
        if (d) {
          if (m.x <= 0 && (h <= u || w >= v)) {
            b = !1;
            break;
          }
          S(J), l -= m.x, h += m.x, p = l / d;
        } else
          S(Z), S(J), m.x <= 0 ? h > u ? (l -= m.x, h += m.x) : m.y >= 0 && w >= v && (b = !1) : (l -= m.x, h += m.x), m.y >= 0 ? w < v && (p += m.y) : p += m.y;
        l < 0 && p < 0 ? (s = at, p = -p, l = -l, c -= p, h -= l) : l < 0 ? (s = ot, l = -l, h -= l) : p < 0 && (s = nt, p = -p, c -= p);
        break;
      case ot:
        if (d) {
          if (m.x >= 0 && (y >= g || w >= v)) {
            b = !1;
            break;
          }
          S(G), l += m.x, p = l / d;
        } else
          S(Z), S(G), m.x >= 0 ? y < g ? l += m.x : m.y >= 0 && w >= v && (b = !1) : l += m.x, m.y >= 0 ? w < v && (p += m.y) : p += m.y;
        l < 0 && p < 0 ? (s = nt, p = -p, l = -l, c -= p, h -= l) : l < 0 ? (s = st, l = -l, h -= l) : p < 0 && (s = at, p = -p, c -= p);
        break;
      case ce:
        this.move(m.x, m.y), b = !1;
        break;
      case de:
        this.zoom(ei(n), t), b = !1;
        break;
      case le:
        if (!m.x || !m.y) {
          b = !1;
          break;
        }
        x = we(this.cropper), h = C.startX - x.left, c = C.startY - x.top, l = r.minWidth, p = r.minHeight, m.x > 0 ? s = m.y > 0 ? ot : at : m.x < 0 && (h -= l, s = m.y > 0 ? st : nt), m.y < 0 && (c -= p), this.cropped || (j(this.cropBox, A), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    b && (r.width = l, r.height = p, r.left = h, r.top = c, this.action = s, this.renderCropBox()), L(n, function(M) {
      M.startX = M.endX, M.startY = M.endY;
    });
  }
}, gi = {
  // Show the crop box manually
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && I(this.dragBox, ft), j(this.cropBox, A), this.setCropBoxData(this.initialCropBoxData)), this;
  },
  // Reset the image and crop box to their initial states
  reset: function() {
    return this.ready && !this.disabled && (this.imageData = O({}, this.initialImageData), this.canvasData = O({}, this.initialCanvasData), this.cropBoxData = O({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this;
  },
  // Clear the crop box
  clear: function() {
    return this.cropped && !this.disabled && (O(this.cropBoxData, {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), j(this.dragBox, ft), I(this.cropBox, A)), this;
  },
  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && t && (this.isImg && (this.element.src = t), e ? (this.url = t, this.image.src = t, this.ready && (this.viewBoxImage.src = t, L(this.previews, function(i) {
      i.getElementsByTagName("img")[0].src = t;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(t))), this;
  },
  // Enable (unfreeze) the cropper
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, j(this.cropper, Yt)), this;
  },
  // Disable (freeze) the cropper
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, I(this.cropper, Yt)), this;
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
    return this.moveTo(wt(t) ? t : a + Number(t), wt(e) ? e : r + Number(e));
  },
  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, i = this.canvasData, a = !1;
    return t = Number(t), e = Number(e), this.ready && !this.disabled && this.options.movable && (D(t) && (i.left = t, a = !0), D(e) && (i.top = e, a = !0), a && this.renderCanvas(!0)), this;
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
      var c = d * t, l = h * t;
      if (rt(this.element, Lt, {
        ratio: t,
        oldRatio: n / d,
        originalEvent: i
      }) === !1)
        return this;
      if (i) {
        var p = this.pointers, y = we(this.cropper), w = p && Object.keys(p).length ? ii(p) : {
          pageX: i.pageX,
          pageY: i.pageY
        };
        r.left -= (c - n) * ((w.pageX - y.left - r.left) / n), r.top -= (l - s) * ((w.pageY - y.top - r.top) / s);
      } else tt(e) && D(e.x) && D(e.y) ? (r.left -= (c - n) * ((e.x - r.left) / n), r.top -= (l - s) * ((e.y - r.top) / s)) : (r.left -= (c - n) / 2, r.top -= (l - s) / 2);
      r.width = c, r.height = l, this.renderCanvas(!0);
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
    return t = Number(t), D(t) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = t % 360, this.renderCanvas(!0, !0)), this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Cropper} this
   */
  scaleX: function(t) {
    var e = this.imageData.scaleY;
    return this.scale(t, D(e) ? e : 1);
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scaleY: function(t) {
    var e = this.imageData.scaleX;
    return this.scale(D(e) ? e : 1, t);
  },
  /**
   * Scale the image
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scale: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, i = this.imageData, a = !1;
    return t = Number(t), e = Number(e), this.ready && !this.disabled && this.options.scalable && (D(t) && (i.scaleX = t, a = !0), D(e) && (i.scaleY = e, a = !0), a && this.renderCanvas(!0, !0)), this;
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
      if (L(n, function(c, l) {
        n[l] = c / s;
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
    if (this.ready && !this.disabled && tt(t)) {
      var n = !1;
      e.rotatable && D(t.rotate) && t.rotate !== i.rotate && (i.rotate = t.rotate, n = !0), e.scalable && (D(t.scaleX) && t.scaleX !== i.scaleX && (i.scaleX = t.scaleX, n = !0), D(t.scaleY) && t.scaleY !== i.scaleY && (i.scaleY = t.scaleY, n = !0)), n && this.renderCanvas(!0, !0);
      var s = i.width / i.naturalWidth;
      D(t.x) && (r.left = t.x * s + a.left), D(t.y) && (r.top = t.y * s + a.top), D(t.width) && (r.width = t.width * s), D(t.height) && (r.height = t.height * s), this.setCropBoxData(r);
    }
    return this;
  },
  /**
   * Get the container size data.
   * @returns {Object} The result container data.
   */
  getContainerData: function() {
    return this.ready ? O({}, this.containerData) : {};
  },
  /**
   * Get the image position and size data.
   * @returns {Object} The result image data.
   */
  getImageData: function() {
    return this.sized ? O({}, this.imageData) : {};
  },
  /**
   * Get the canvas position and size data.
   * @returns {Object} The result canvas data.
   */
  getCanvasData: function() {
    var t = this.canvasData, e = {};
    return this.ready && L(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(i) {
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
    return this.ready && !this.disabled && tt(t) && (D(t.left) && (e.left = t.left), D(t.top) && (e.top = t.top), D(t.width) ? (e.width = t.width, e.height = t.width / i) : D(t.height) && (e.height = t.height, e.width = t.height * i), this.renderCanvas(!0)), this;
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
    return this.ready && this.cropped && !this.disabled && tt(t) && (D(t.left) && (e.left = t.left), D(t.top) && (e.top = t.top), D(t.width) && t.width !== e.width && (a = !0, e.width = t.width), D(t.height) && t.height !== e.height && (r = !0, e.height = t.height), i && (a ? e.height = e.width / i : r && (e.width = e.height * i)), this.renderCropBox()), this;
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
    var e = this.canvasData, i = ai(this.image, this.imageData, e, t);
    if (!this.cropped)
      return i;
    var a = this.getData(t.rounded), r = a.x, n = a.y, s = a.width, d = a.height, h = i.width / Math.floor(e.naturalWidth);
    h !== 1 && (r *= h, n *= h, s *= h, d *= h);
    var c = s / d, l = z({
      aspectRatio: c,
      width: t.maxWidth || 1 / 0,
      height: t.maxHeight || 1 / 0
    }), p = z({
      aspectRatio: c,
      width: t.minWidth || 0,
      height: t.minHeight || 0
    }, "cover"), y = z({
      aspectRatio: c,
      width: t.width || (h !== 1 ? i.width : s),
      height: t.height || (h !== 1 ? i.height : d)
    }), w = y.width, u = y.height;
    w = Math.min(l.width, Math.max(p.width, w)), u = Math.min(l.height, Math.max(p.height, u));
    var f = document.createElement("canvas"), g = f.getContext("2d");
    f.width = it(w), f.height = it(u), g.fillStyle = t.fillColor || "transparent", g.fillRect(0, 0, w, u);
    var v = t.imageSmoothingEnabled, b = v === void 0 ? !0 : v, x = t.imageSmoothingQuality;
    g.imageSmoothingEnabled = b, x && (g.imageSmoothingQuality = x);
    var C = i.width, m = i.height, S = r, M = n, T, N, $, q, F, H;
    S <= -s || S > C ? (S = 0, T = 0, $ = 0, F = 0) : S <= 0 ? ($ = -S, S = 0, T = Math.min(C, s + S), F = T) : S <= C && ($ = 0, T = Math.min(s, C - S), F = T), T <= 0 || M <= -d || M > m ? (M = 0, N = 0, q = 0, H = 0) : M <= 0 ? (q = -M, M = 0, N = Math.min(m, d + M), H = N) : M <= m && (q = 0, N = Math.min(d, m - M), H = N);
    var k = [S, M, T, N];
    if (F > 0 && H > 0) {
      var V = w / s;
      k.push($ * V, q * V, F * V, H * V);
    }
    return g.drawImage.apply(g, [i].concat(he(k.map(function(dt) {
      return Math.floor(it(dt));
    })))), f;
  },
  /**
   * Change the aspect ratio of the crop box.
   * @param {number} aspectRatio - The new aspect ratio.
   * @returns {Cropper} this
   */
  setAspectRatio: function(t) {
    var e = this.options;
    return !this.disabled && !wt(t) && (e.aspectRatio = Math.max(0, t) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  /**
   * Change the drag mode.
   * @param {string} mode - The new drag mode.
   * @returns {Cropper} this
   */
  setDragMode: function(t) {
    var e = this.options, i = this.dragBox, a = this.face;
    if (this.ready && !this.disabled) {
      var r = t === Pt, n = e.movable && t === ue;
      t = r || n ? t : pe, e.dragMode = t, ct(i, lt, t), et(i, Et, r), et(i, Dt, n), e.cropBoxMovable || (ct(a, lt, t), et(a, Et, r), et(a, Dt, n));
    }
    return this;
  }
}, vi = U.Cropper, Ce = /* @__PURE__ */ function() {
  function o(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Le(this, o), !t || !Ye.test(t.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = t, this.options = O({}, te, tt(e) && e), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return Ie(o, [{
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
        if (We.test(e)) {
          Xe.test(e) ? this.read(si(e)) : this.clone();
          return;
        }
        var n = new XMLHttpRequest(), s = this.clone.bind(this);
        this.reloading = !0, this.xhr = n, n.onabort = s, n.onerror = s, n.ontimeout = s, n.onprogress = function() {
          n.getResponseHeader("content-type") !== Zt && n.abort();
        }, n.onload = function() {
          i.read(n.response);
        }, n.onloadend = function() {
          i.reloading = !1, i.xhr = null;
        }, r.checkCrossOrigin && ie(e) && a.crossOrigin && (e = re(e)), n.open("GET", e, !0), n.responseType = "arraybuffer", n.withCredentials = a.crossOrigin === "use-credentials", n.send();
      }
    }
  }, {
    key: "read",
    value: function(e) {
      var i = this.options, a = this.imageData, r = li(e), n = 0, s = 1, d = 1;
      if (r > 1) {
        this.url = hi(e, Zt);
        var h = ci(r);
        n = h.rotate, s = h.scaleX, d = h.scaleY;
      }
      i.rotatable && (a.rotate = n), i.scalable && (a.scaleX = s, a.scaleY = d), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var e = this.element, i = this.url, a = e.crossOrigin, r = i;
      this.options.checkCrossOrigin && ie(i) && (a || (a = "anonymous"), r = re(i)), this.crossOrigin = a, this.crossOriginUrl = r;
      var n = document.createElement("img");
      a && (n.crossOrigin = a), n.src = r || i, n.alt = e.alt || "The image to crop", this.image = n, n.onload = this.start.bind(this), n.onerror = this.stop.bind(this), I(n, zt), e.parentNode.insertBefore(n, e.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var e = this, i = this.image;
      i.onload = null, i.onerror = null, this.sizing = !0;
      var a = U.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(U.navigator.userAgent), r = function(h, c) {
        O(e.imageData, {
          naturalWidth: h,
          naturalHeight: c,
          aspectRatio: h / c
        }), e.initialImageData = O({}, e.imageData), e.sizing = !1, e.sized = !0, e.build();
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
        n.innerHTML = ze;
        var s = n.querySelector(".".concat(_, "-container")), d = s.querySelector(".".concat(_, "-canvas")), h = s.querySelector(".".concat(_, "-drag-box")), c = s.querySelector(".".concat(_, "-crop-box")), l = c.querySelector(".".concat(_, "-face"));
        this.container = r, this.cropper = s, this.canvas = d, this.dragBox = h, this.cropBox = c, this.viewBox = s.querySelector(".".concat(_, "-view-box")), this.face = l, d.appendChild(a), I(e, A), r.insertBefore(s, e.nextSibling), j(a, zt), this.initPreview(), this.bind(), i.initialAspectRatio = Math.max(0, i.initialAspectRatio) || NaN, i.aspectRatio = Math.max(0, i.aspectRatio) || NaN, i.viewMode = Math.max(0, Math.min(3, Math.round(i.viewMode))) || 0, I(c, A), i.guides || I(c.getElementsByClassName("".concat(_, "-dashed")), A), i.center || I(c.getElementsByClassName("".concat(_, "-center")), A), i.background && I(s, "".concat(_, "-bg")), i.highlight || I(l, Be), i.cropBoxMovable && (I(l, Dt), ct(l, lt, Nt)), i.cropBoxResizable || (I(c.getElementsByClassName("".concat(_, "-line")), A), I(c.getElementsByClassName("".concat(_, "-point")), A)), this.render(), this.ready = !0, this.setDragMode(i.dragMode), i.autoCrop && this.crop(), this.setData(i.data), R(i.ready) && P(e, Jt, i.ready, {
          once: !0
        }), rt(e, Jt);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      if (this.ready) {
        this.ready = !1, this.unbind(), this.resetPreview();
        var e = this.cropper.parentNode;
        e && e.removeChild(this.cropper), j(this.element, A);
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
      return window.Cropper = vi, o;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(e) {
      O(te, tt(e) && e);
    }
  }]);
}();
O(Ce.prototype, di, ui, pi, fi, mi, gi);
class yi {
  constructor() {
    this.overlay = null, this.cropper = null, this.escHandler = null, this.resolvePromise = null;
  }
  /**
   * Открывает модальное окно кадрирования.
   *
   * @param imageUrl - URL изображения для кадрирования
   * @param existingCrop - существующая строка кадрирования "AxB:CxD" для восстановления области
   * @returns Promise с результатом кадрирования или null при отмене
   */
  open(t, e) {
    return this.overlay && this.destroy(), new Promise((i) => {
      this.resolvePromise = i, this.overlay = this.createOverlay();
      const a = this.overlay.querySelector(".gallery-crop-modal__image-wrapper");
      if (!a) {
        this.close(null);
        return;
      }
      const r = E("img", null, {
        src: t
      });
      r.style.maxWidth = "100%", r.style.display = "block", a.appendChild(r), document.body.appendChild(this.overlay), r.onload = () => {
        this.cropper = new Ce(r, {
          viewMode: 1,
          autoCropArea: 1,
          aspectRatio: NaN,
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
              const n = this.cropper.getImageData();
              this.restoreCropArea(e, n.naturalWidth, n.naturalHeight);
            }
          }
        });
      }, r.onerror = () => {
        this.close(null);
      }, this.escHandler = (n) => {
        n.key === "Escape" && this.close(null);
      }, document.addEventListener("keydown", this.escHandler);
    });
  }
  /**
   * Полностью уничтожает модальное окно и освобождает ресурсы.
   */
  destroy() {
    var t, e;
    (t = this.cropper) == null || t.destroy(), this.cropper = null, (e = this.overlay) == null || e.remove(), this.overlay = null, this.escHandler && (document.removeEventListener("keydown", this.escHandler), this.escHandler = null), this.resolvePromise = null;
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
  createOverlay() {
    const t = E("div", "gallery-crop-modal");
    t.addEventListener("click", () => this.close(null));
    const e = E("div", "gallery-crop-modal__container");
    e.addEventListener("click", (d) => d.stopPropagation());
    const i = E("div", "gallery-crop-modal__image-wrapper"), a = E("div", "gallery-crop-modal__actions"), r = E("button", ["gallery-crop-modal__btn", "gallery-crop-modal__btn--danger"]);
    r.textContent = "Сбросить", r.addEventListener("click", () => {
      this.close({ crop: "", croppedWidth: 0, croppedHeight: 0 });
    });
    const n = E("button", "gallery-crop-modal__btn");
    n.textContent = "Отмена", n.addEventListener("click", () => this.close(null));
    const s = E("button", ["gallery-crop-modal__btn", "gallery-crop-modal__btn--primary"]);
    return s.textContent = "Применить", s.addEventListener("click", () => this.handleApply()), a.appendChild(r), a.appendChild(n), a.appendChild(s), e.appendChild(i), e.appendChild(a), t.appendChild(e), t;
  }
  /**
   * Обрабатывает нажатие кнопки "Применить" — собирает данные кадрирования
   * и закрывает модальное окно с результатом.
   */
  handleApply() {
    if (!this.cropper) {
      this.close(null);
      return;
    }
    const t = this.cropper.getData(!0), e = this.cropper.getImageData(), i = this.cropDataToString(t, e.naturalWidth, e.naturalHeight);
    this.close(i);
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
    const a = t.x / e, r = t.y / i, n = (t.x + t.width) / e, s = (t.y + t.height) / i;
    return {
      crop: `${a.toFixed(4)}x${r.toFixed(4)}:${n.toFixed(4)}x${s.toFixed(4)}`,
      croppedWidth: Math.round(t.width),
      croppedHeight: Math.round(t.height)
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
}
/**
 * Gallery Tool for Editor.js
 * Supports multiple images with captions and source attribution
 * @author iXBT
 * @license MIT
 */
class kt {
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
      mediaHost: n.mediaHost,
      cover: n.cover
    }, this.uploader = new _e({
      config: this.config,
      onUpload: (s) => this.onUpload(s),
      onError: (s) => this.uploadingFailed(s)
    }), this.cropModal = new yi(), this.ui = new Ct({
      api: i,
      config: this.config,
      onSelectFile: () => this.selectFile(),
      onSelectUrl: (s) => this.uploadFromUrl(s),
      onColumnsChange: (s) => this.onColumnsChange(s),
      onRemoveImage: (s, d) => this.onRemoveImage(s, d),
      onCropImage: (s) => this.handleCropImage(s),
      readOnly: a
    }), this._data = {
      items: (t == null ? void 0 : t.items) ?? [],
      layout: (t == null ? void 0 : t.layout) ?? "grid",
      columns: (t == null ? void 0 : t.columns) ?? 3,
      stretched: (t == null ? void 0 : t.stretched) ?? !1
    };
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
      icon: ae,
      title: "Gallery"
    };
  }
  /**
   * Available gallery tunes
   */
  static get tunes() {
    return [
      {
        name: "stretched",
        icon: Ee,
        title: "Stretch image",
        toggle: !0
      }
    ];
  }
  /**
   * Specify paste substitutes
   */
  static get pasteConfig() {
    return {
      tags: [
        {
          img: { src: !0 }
        }
      ],
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i
      },
      files: {
        mimeTypes: ["image/*"]
      }
    };
  }
  /**
   * Renders Block content
   */
  render() {
    const t = this.ui.render(this._data.items, this._data.columns);
    return kt.tunes.forEach(({ name: e }) => {
      const i = this._data[e];
      i && this.setTune(e, i);
    }), t;
  }
  /**
   * Fires after clicks on the Toolbox Gallery Icon
   * Initiates click on the Select File button to immediately open file dialog
   */
  appendCallback() {
    this.ui.nodes.fileButton.click();
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
    return this._data.items = this.ui.getItemsData(), this._data.columns = this.ui.getColumns(), this._data;
  }
  /**
   * Returns configuration for block tunes
   */
  renderSettings() {
    const t = kt.tunes.map((a) => ({
      icon: a.icon,
      label: this.api.i18n.t(a.title),
      name: a.name,
      toggle: a.toggle,
      isActive: this._data[a.name],
      onActivate: () => {
        this.tuneToggled(a.name);
      }
    })), i = [
      { name: "grid", title: "Grid", icon: this.getGridIcon() },
      { name: "carousel", title: "Carousel", icon: this.getCarouselIcon() },
      { name: "masonry", title: "Masonry", icon: this.getMasonryIcon() }
    ].map((a) => ({
      icon: a.icon,
      label: this.api.i18n.t(a.title),
      name: a.name,
      isActive: this._data.layout === a.name,
      onActivate: () => {
        this._data.layout = a.name, this.updateLayoutClass();
      }
    }));
    return [...t, ...i];
  }
  /**
   * Handle paste events
   */
  async onPaste(t) {
    switch (t.type) {
      case "tag": {
        const e = t.detail.data;
        if (/^blob:/.test(e.src)) {
          const a = await (await fetch(e.src)).blob();
          this.uploadFile(a);
        } else
          this.uploadFromUrl(e.src);
        break;
      }
      case "pattern": {
        const e = t.detail.data;
        this.uploadFromUrl(e);
        break;
      }
      case "file": {
        const e = t.detail.file;
        this.uploadFile(e);
        break;
      }
    }
  }
  /**
   * Handle file selection
   */
  selectFile() {
    this.uploader.uploadSelectedFile({
      onPreview: (t) => {
        this.currentLoadingItem = this.ui.createLoadingItem(t);
      }
    });
  }
  /**
   * Upload file from paste/drag-n-drop
   */
  uploadFile(t) {
    this.uploader.uploadByFile(t, {
      onPreview: (e) => {
        this.currentLoadingItem = this.ui.createLoadingItem(e);
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
    const e = t.dataset.url;
    if (!e) return;
    const i = t.dataset.crop, a = await this.cropModal.open(e, i);
    a !== null && (a.crop === "" ? this.ui.updateItemAfterCrop(t, void 0, 0, 0) : this.ui.updateItemAfterCrop(t, a.crop, a.croppedWidth, a.croppedHeight), this.block.dispatchChange());
  }
  /**
   * Handle image removal - delete from S3
   */
  onRemoveImage(t, e) {
    const i = this.config.endpoints.deleteImage;
    !i || !t && !e || fetch(i, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...this.config.additionalRequestHeaders || {}
      },
      body: JSON.stringify({ url: t, media_id: e })
    }).then((a) => a.json()).then((a) => {
      a && a.cover_cleared && this.ui.rolloverCover();
    }).catch((a) => {
      console.error("Gallery Tool: failed to delete image", a);
    });
  }
  /**
   * Update layout class on wrapper
   */
  updateLayoutClass() {
    const t = this.ui.nodes.wrapper;
    t.classList.remove("gallery-tool--grid", "gallery-tool--carousel", "gallery-tool--masonry"), t.classList.add(`gallery-tool--${this._data.layout}`);
  }
  /**
   * Callback fired when Block Tune is activated
   */
  tuneToggled(t) {
    const e = this._data[t];
    this.setTune(t, !e);
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
  kt as default
};
