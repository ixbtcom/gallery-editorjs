(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(':root{--ej-radius-sm: 6px;--ej-radius-md: 8px;--ej-radius-lg: 12px;--ej-bg-page: #fff;--ej-bg-surface: #fff;--ej-bg-muted: var(--gray-50, #f9fafb);--ej-bg-input: #fff;--ej-ring: rgba(3, 7, 18, .1);--ej-ring-focus: var(--primary-600, #2563eb);--ej-border: var(--gray-200, #e5e7eb);--ej-border-strong: rgba(3, 7, 18, .05);--ej-text: var(--gray-950, #030712);--ej-text-secondary: var(--gray-500, #6b7280);--ej-text-muted: var(--gray-400, #9ca3af);--ej-text-on-primary: #fff;--ej-primary: var(--primary-600, #2563eb);--ej-primary-hover: var(--primary-700, #1d4ed8);--ej-primary-light: var(--primary-50, #eff6ff);--ej-primary-muted: var(--primary-100, #dbeafe);--ej-success-bg: var(--success-50, #f0fdf4);--ej-success-border: var(--success-500, #22c55e);--ej-success-text: var(--success-700, #15803d);--ej-warning-bg: var(--warning-50, #fffbeb);--ej-warning-border: var(--warning-500, #f59e0b);--ej-warning-text: var(--warning-700, #b45309);--ej-danger: var(--danger-600, #dc2626);--ej-danger-bg: var(--danger-50, #fef2f2);--ej-danger-border: var(--danger-500, #ef4444);--ej-danger-text: var(--danger-700, #b91c1c);--ej-danger-hover-bg: var(--danger-100, #fee2e2);--ej-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, .05);--ej-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1);--ej-transition: 75ms ease;--ej-control-bg: rgba(255, 255, 255, .9);--ej-control-hover: rgba(0, 0, 0, .05);--ej-icon-color: var(--gray-400, #9ca3af)}.dark{--ej-bg-page: var(--gray-900, #111827);--ej-bg-surface: var(--gray-900, #111827);--ej-bg-muted: rgba(255, 255, 255, .05);--ej-bg-input: rgba(255, 255, 255, .05);--ej-ring: rgba(255, 255, 255, .2);--ej-ring-focus: var(--primary-500, #3b82f6);--ej-border: rgba(255, 255, 255, .1);--ej-border-strong: rgba(255, 255, 255, .1);--ej-text: #fff;--ej-text-secondary: var(--gray-400, #9ca3af);--ej-text-muted: var(--gray-500, #6b7280);--ej-text-on-primary: #fff;--ej-control-bg: rgba(30, 30, 30, .9);--ej-control-hover: rgba(255, 255, 255, .1);--ej-icon-color: var(--gray-500, #6b7280);--ej-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, .3);--ej-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, .3), 0 2px 4px -2px rgba(0, 0, 0, .2)}@keyframes ej-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.gallery-tool{margin:2rem 0;max-width:100%;box-sizing:border-box;overflow:hidden}.gallery-tool__items{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:12px;max-width:100%;box-sizing:border-box}.gallery-tool--columns-1 .gallery-tool__item{flex:0 0 100%;max-width:100%}.gallery-tool--columns-2 .gallery-tool__item{flex:0 0 calc(50% - 6px);max-width:calc(50% - 6px)}.gallery-tool--columns-3 .gallery-tool__item{flex:0 0 calc(33.333% - 8px);max-width:calc(33.333% - 8px)}.gallery-tool--columns-4 .gallery-tool__item{flex:0 0 calc(25% - 9px);max-width:calc(25% - 9px)}.gallery-tool--columns-5 .gallery-tool__item{flex:0 0 calc(20% - 10px);max-width:calc(20% - 10px)}@media (max-width: 639px){.gallery-tool--columns-3 .gallery-tool__item,.gallery-tool--columns-4 .gallery-tool__item,.gallery-tool--columns-5 .gallery-tool__item{flex:0 0 calc(50% - 6px);max-width:calc(50% - 6px)}}.gallery-tool__item{position:relative;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);overflow:hidden;background:var(--ej-bg-muted);box-sizing:border-box;min-width:0;box-shadow:var(--ej-shadow-sm);transition:box-shadow var(--ej-transition)}.gallery-tool__item:hover{box-shadow:var(--ej-shadow-md)}.gallery-tool__item-image{position:relative;min-height:120px;background:var(--ej-bg-muted);overflow:hidden}.gallery-tool__item-image img{width:100%;height:auto;display:block;object-fit:contain;max-height:400px;max-width:100%}.gallery-tool__item-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;background-position:center;margin:35px auto;position:relative;background-color:var(--ej-bg-muted)}.gallery-tool__item-preloader:after{content:"";position:absolute;width:60px;height:60px;border-radius:50%;border:2px solid var(--ej-border);border-top-color:var(--ej-primary);left:50%;top:50%;margin:-30px 0 0 -30px;animation:ej-spin 1s infinite linear;box-sizing:border-box}.gallery-tool__item-caption,.gallery-tool__item-source,.gallery-tool__item-source-link{margin:.5rem;width:calc(100% - 1rem);background:#fff;font-weight:500}.gallery-tool__item-source{color:var(--ej-text-secondary);font-size:12px}.gallery-tool__item-source-link{color:var(--ej-primary);font-size:12px}.gallery-tool__item-caption[data-placeholder]:empty:before,.gallery-tool__item-source[data-placeholder]:empty:before,.gallery-tool__item-source-link[data-placeholder]:empty:before{content:attr(data-placeholder);color:var(--ej-text-muted);pointer-events:none}.gallery-tool__item-caption[data-placeholder]:empty:focus:before,.gallery-tool__item-source[data-placeholder]:empty:focus:before,.gallery-tool__item-source-link[data-placeholder]:empty:focus:before{display:none}.gallery-tool__item-dimensions{position:absolute;bottom:8px;left:8px;padding:2px 6px;background:#0009;color:#fff;font-size:11px;font-family:monospace;border-radius:var(--ej-radius-sm);z-index:5;pointer-events:none}.gallery-tool__item-controls{position:absolute;top:8px;right:8px;display:flex;gap:4px;opacity:0;transition:opacity .2s;z-index:10}.gallery-tool__item:hover .gallery-tool__item-controls,.gallery-tool__item:focus-within .gallery-tool__item-controls{opacity:1}.gallery-tool__item-remove,.gallery-tool__item-move-left,.gallery-tool__item-move-right{width:32px;height:32px;border:none;border-radius:var(--ej-radius-sm);background:var(--ej-control-bg);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;color:var(--ej-text);transition:background .2s}.gallery-tool__item-remove:hover,.gallery-tool__item-move-left:hover,.gallery-tool__item-move-right:hover{background:var(--ej-control-hover)}.gallery-tool__item-remove{color:var(--ej-danger)}.gallery-tool__add-buttons{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.gallery-tool__add-buttons .cdx-button{display:inline-flex;align-items:center;gap:6px}.gallery-tool__add-buttons .cdx-button svg{width:16px;height:16px}.gallery-tool__url-input-wrapper{flex:1;min-width:200px}.gallery-tool__url-input{width:100%;padding:8px 12px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);font-size:14px;background:var(--ej-bg-input);color:var(--ej-text);transition:border-color var(--ej-transition)}.gallery-tool__url-input:focus{border-color:var(--ej-ring-focus);outline:none;box-shadow:0 0 0 1px var(--ej-ring-focus)}.gallery-tool__columns-control{display:flex;align-items:center;gap:8px;margin-left:auto}.gallery-tool__columns-button{width:32px;height:32px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);background:var(--ej-bg-surface);cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;transition:background .2s;color:var(--ej-text)}.gallery-tool__columns-button:hover{background:var(--ej-bg-muted)}.gallery-tool__columns-display{font-size:13px;color:var(--ej-text-secondary);min-width:45px;text-align:center}.gallery-tool--carousel{max-width:100%;overflow:hidden;box-sizing:border-box}.gallery-tool--carousel .gallery-tool__items{flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;gap:12px;padding-bottom:8px;max-width:100%;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:var(--ej-border) transparent}.gallery-tool--carousel .gallery-tool__items::-webkit-scrollbar{height:6px}.gallery-tool--carousel .gallery-tool__items::-webkit-scrollbar-track{background:transparent}.gallery-tool--carousel .gallery-tool__items::-webkit-scrollbar-thumb{background:var(--ej-border);border-radius:3px}.gallery-tool--carousel .gallery-tool__item{flex:0 0 auto;width:clamp(200px,60vw,280px);max-width:calc(100% - 24px);min-width:200px}.gallery-tool--carousel .gallery-tool__item-image img{max-height:280px}.gallery-tool--masonry .gallery-tool__items{display:block;column-count:2;column-gap:12px;max-width:100%}.gallery-tool--masonry.gallery-tool--columns-3 .gallery-tool__items{column-count:3}.gallery-tool--masonry.gallery-tool--columns-4 .gallery-tool__items{column-count:4}.gallery-tool--masonry.gallery-tool--columns-5 .gallery-tool__items{column-count:5}@media (max-width: 639px){.gallery-tool--masonry.gallery-tool--columns-3 .gallery-tool__items,.gallery-tool--masonry.gallery-tool--columns-4 .gallery-tool__items,.gallery-tool--masonry.gallery-tool--columns-5 .gallery-tool__items{column-count:2}}.gallery-tool--masonry .gallery-tool__item{width:100%;max-width:100%;margin-bottom:12px;break-inside:avoid}.gallery-tool--masonry .gallery-tool__item-image img{max-height:none;max-width:100%}.gallery-tool--empty .gallery-tool__items,.gallery-tool--loading .gallery-tool__item-image img{display:none}.gallery-tool--stretched .gallery-tool__item-image img{max-height:none}.gallery-tool__stretched-badge{display:inline-block;margin-bottom:8px;padding:4px 10px;background:var(--ej-primary);color:var(--ej-text-on-primary);font-size:12px;font-weight:500;border-radius:var(--ej-radius-md)}')),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
const j = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', U = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
function S(L, t = null, e = {}) {
  const s = document.createElement(L);
  Array.isArray(t) ? s.classList.add(...t) : t !== null && s.classList.add(t);
  for (const i in e)
    Object.prototype.hasOwnProperty.call(e, i) && (s[i] = e[i]);
  return s;
}
const k = class k {
  constructor({ api: t, config: e, onSelectFile: s, onSelectUrl: i, onColumnsChange: r, onRemoveImage: n, readOnly: l }) {
    this.currentColumns = 1, this.previousColumns = 1, this.api = t, this.config = e, this.onSelectFile = s, this.onSelectUrl = i, this.onColumnsChange = r, this.onRemoveImage = n, this.readOnly = l, this.nodes = {
      wrapper: S("div", [this.CSS.wrapper]),
      itemsContainer: S("div", [this.CSS.itemsContainer]),
      addButtons: S("div", [this.CSS.addButtons]),
      fileButton: this.createFileButton(),
      urlButton: S("div"),
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
    return this.currentColumns = e, this.updateColumnsClass(), t.length === 0 ? this.toggleState(
      "empty"
      /* Empty */
    ) : (t.forEach((s) => this.addItem(s)), this.toggleState(
      "filled"
      /* Filled */
    )), this.nodes.wrapper;
  }
  /**
   * Add a new item to the gallery
   */
  addItem(t) {
    const e = S("div", [this.CSS.item]), s = S("div", [this.CSS.itemImage]), i = S("div", [this.CSS.itemPreloader]), r = S("img", null, { src: t.url }), n = S("div", [this.CSS.itemCaption, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    n.dataset.placeholder = this.config.captionPlaceholder ?? "Caption", n.textContent = t.caption || "";
    const l = S("div", [this.CSS.itemSource, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    l.dataset.placeholder = this.config.sourcePlaceholder ?? "Source", l.textContent = t.source || "";
    const v = S("div", [this.CSS.itemSourceLink, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    if (v.dataset.placeholder = this.config.sourceLinkPlaceholder ?? "Source link", v.textContent = t.sourceLink || "", s.appendChild(i), s.appendChild(r), t.width && t.height) {
      const u = S("div", [this.CSS.itemDimensions]);
      u.textContent = `${t.width} × ${t.height}`, s.appendChild(u);
    }
    if (r.onload = () => {
      i.style.display = "none";
    }, !this.readOnly) {
      const u = this.createItemControls(e);
      e.appendChild(u);
    }
    return e.appendChild(s), e.appendChild(n), e.appendChild(l), e.appendChild(v), e.dataset.url = t.url, t.width && (e.dataset.width = String(t.width)), t.height && (e.dataset.height = String(t.height)), this.nodes.itemsContainer.appendChild(e), this.toggleState(
      "filled"
      /* Filled */
    ), this.autoAdjustColumns(), e;
  }
  /**
   * Create a placeholder item for loading state
   */
  createLoadingItem(t) {
    const e = S("div", [this.CSS.item]), s = S("div", [this.CSS.itemImage]), i = S("div", [this.CSS.itemPreloader]);
    t && (i.style.backgroundImage = `url(${t})`), s.appendChild(i), e.appendChild(s);
    const r = S("div", [this.CSS.itemCaption, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    r.dataset.placeholder = this.config.captionPlaceholder ?? "Caption";
    const n = S("div", [this.CSS.itemSource, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    n.dataset.placeholder = this.config.sourcePlaceholder ?? "Source";
    const l = S("div", [this.CSS.itemSourceLink, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    return l.dataset.placeholder = this.config.sourceLinkPlaceholder ?? "Source link", e.appendChild(r), e.appendChild(n), e.appendChild(l), this.nodes.itemsContainer.appendChild(e), this.toggleState(
      "loading"
      /* Loading */
    ), e;
  }
  /**
   * Update loading item with uploaded image
   */
  fillLoadingItem(t, e) {
    const s = t.querySelector(`.${this.CSS.itemImage}`), i = t.querySelector(`.${this.CSS.itemPreloader}`), r = S("img", null, { src: e.url });
    if (r.onload = () => {
      i && (i.style.display = "none");
    }, s.appendChild(r), e.width && e.height) {
      const n = S("div", [this.CSS.itemDimensions]);
      n.textContent = `${e.width} × ${e.height}`, s.appendChild(n);
    }
    if (t.dataset.url = e.url, e.width && (t.dataset.width = String(e.width)), e.height && (t.dataset.height = String(e.height)), !this.readOnly) {
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
    return t.forEach((s) => {
      var h, g, y;
      const i = s, r = i.dataset.url;
      if (!r) return;
      const n = ((h = s.querySelector(`.${this.CSS.itemCaption}`)) == null ? void 0 : h.textContent) || "", l = ((g = s.querySelector(`.${this.CSS.itemSource}`)) == null ? void 0 : g.textContent) || "", v = ((y = s.querySelector(`.${this.CSS.itemSourceLink}`)) == null ? void 0 : y.textContent) || "", u = i.dataset.width ? parseInt(i.dataset.width, 10) : void 0, p = i.dataset.height ? parseInt(i.dataset.height, 10) : void 0;
      e.push({ url: r, caption: n, source: l, sourceLink: v, width: u, height: p });
    }), e;
  }
  /**
   * Get current columns count
   */
  getColumns() {
    return this.currentColumns;
  }
  createFileButton() {
    const t = S("div", [this.CSS.button]);
    return t.innerHTML = `${j} ${this.config.buttonContent}`, t.addEventListener("click", () => this.onSelectFile()), t;
  }
  createUrlInput() {
    const t = S("div", [this.CSS.urlInputWrapper]), e = S("input", [this.CSS.urlInput, this.CSS.input], {
      type: "text"
    });
    return e.placeholder = this.config.urlInputPlaceholder ?? "Вставьте ссылку на изображение", e.addEventListener("keydown", (s) => {
      s.key === "Enter" && (s.preventDefault(), this.handleUrlInput(e));
    }), e.addEventListener("paste", (s) => {
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
    const t = S("div", [this.CSS.columnsControl]), e = S("button", [this.CSS.columnsButton], { type: "button" });
    e.innerHTML = "−", e.addEventListener("click", () => this.changeColumns(-1));
    const s = S("span", [this.CSS.columnsDisplay]);
    s.textContent = `${this.currentColumns} col`;
    const i = S("button", [this.CSS.columnsButton], { type: "button" });
    return i.innerHTML = "+", i.addEventListener("click", () => this.changeColumns(1)), t.appendChild(e), t.appendChild(s), t.appendChild(i), t;
  }
  changeColumns(t) {
    const e = Math.min(k.MAX_COLUMNS, Math.max(k.MIN_COLUMNS, this.currentColumns + t));
    e !== this.currentColumns && (this.previousColumns = this.currentColumns, this.currentColumns = e, this.updateColumnsClass(), this.updateColumnsDisplay(), this.onColumnsChange(e));
  }
  updateColumnsClass() {
    const t = `gallery-tool--columns-${this.previousColumns}`, e = `gallery-tool--columns-${this.currentColumns}`;
    if (this.nodes.wrapper.classList.contains(t))
      this.nodes.wrapper.classList.replace(t, e);
    else {
      for (let s = k.MIN_COLUMNS; s <= k.MAX_COLUMNS; s++)
        this.nodes.wrapper.classList.remove(`gallery-tool--columns-${s}`);
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
    const e = this.nodes.itemsContainer.children.length <= 1 ? 1 : 2;
    e !== this.currentColumns && (this.previousColumns = this.currentColumns, this.currentColumns = e, this.updateColumnsClass(), this.updateColumnsDisplay(), this.onColumnsChange(e));
  }
  createItemControls(t) {
    const e = S("div", [this.CSS.itemControls]), s = S("button", [this.CSS.itemRemove], { type: "button" });
    s.innerHTML = "×", s.addEventListener("click", () => {
      const n = t.dataset.url;
      n && this.onRemoveImage(n), t.remove(), this.nodes.itemsContainer.children.length === 0 && this.toggleState(
        "empty"
        /* Empty */
      ), this.autoAdjustColumns();
    });
    const i = S("button", [this.CSS.itemMoveLeft], { type: "button" });
    i.innerHTML = "←", i.addEventListener("click", () => this.moveItem(t, -1));
    const r = S("button", [this.CSS.itemMoveRight], { type: "button" });
    return r.innerHTML = "→", r.addEventListener("click", () => this.moveItem(t, 1)), e.appendChild(i), e.appendChild(s), e.appendChild(r), e;
  }
  moveItem(t, e) {
    const s = Array.from(this.nodes.itemsContainer.children), r = s.indexOf(t) + e;
    r < 0 || r >= s.length || (e < 0 ? this.nodes.itemsContainer.insertBefore(t, s[r]) : this.nodes.itemsContainer.insertBefore(s[r], t));
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
      const s = S("div", ["gallery-tool__stretched-badge"]);
      s.textContent = "Обложка", this.nodes.wrapper.insertBefore(s, this.nodes.wrapper.firstChild);
    } else !t && e && e.remove();
  }
};
k.MIN_COLUMNS = 1, k.MAX_COLUMNS = 5;
let O = k;
function R(L) {
  return L && L.__esModule && Object.prototype.hasOwnProperty.call(L, "default") ? L.default : L;
}
var P = { exports: {} };
(function(L, t) {
  (function(e, s) {
    L.exports = s();
  })(window, function() {
    return function(e) {
      var s = {};
      function i(r) {
        if (s[r]) return s[r].exports;
        var n = s[r] = { i: r, l: !1, exports: {} };
        return e[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
      }
      return i.m = e, i.c = s, i.d = function(r, n, l) {
        i.o(r, n) || Object.defineProperty(r, n, { enumerable: !0, get: l });
      }, i.r = function(r) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
      }, i.t = function(r, n) {
        if (1 & n && (r = i(r)), 8 & n || 4 & n && typeof r == "object" && r && r.__esModule) return r;
        var l = /* @__PURE__ */ Object.create(null);
        if (i.r(l), Object.defineProperty(l, "default", { enumerable: !0, value: r }), 2 & n && typeof r != "string") for (var v in r) i.d(l, v, (function(u) {
          return r[u];
        }).bind(null, v));
        return l;
      }, i.n = function(r) {
        var n = r && r.__esModule ? function() {
          return r.default;
        } : function() {
          return r;
        };
        return i.d(n, "a", n), n;
      }, i.o = function(r, n) {
        return Object.prototype.hasOwnProperty.call(r, n);
      }, i.p = "", i(i.s = 3);
    }([function(e, s) {
      var i;
      i = /* @__PURE__ */ function() {
        return this;
      }();
      try {
        i = i || new Function("return this")();
      } catch {
        typeof window == "object" && (i = window);
      }
      e.exports = i;
    }, function(e, s, i) {
      (function(r) {
        var n = i(2), l = setTimeout;
        function v() {
        }
        function u(a) {
          if (!(this instanceof u)) throw new TypeError("Promises must be constructed via new");
          if (typeof a != "function") throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], o(a, this);
        }
        function p(a, d) {
          for (; a._state === 3; ) a = a._value;
          a._state !== 0 ? (a._handled = !0, u._immediateFn(function() {
            var c = a._state === 1 ? d.onFulfilled : d.onRejected;
            if (c !== null) {
              var C;
              try {
                C = c(a._value);
              } catch (m) {
                return void g(d.promise, m);
              }
              h(d.promise, C);
            } else (a._state === 1 ? h : g)(d.promise, a._value);
          })) : a._deferreds.push(d);
        }
        function h(a, d) {
          try {
            if (d === a) throw new TypeError("A promise cannot be resolved with itself.");
            if (d && (typeof d == "object" || typeof d == "function")) {
              var c = d.then;
              if (d instanceof u) return a._state = 3, a._value = d, void y(a);
              if (typeof c == "function") return void o((C = c, m = d, function() {
                C.apply(m, arguments);
              }), a);
            }
            a._state = 1, a._value = d, y(a);
          } catch (f) {
            g(a, f);
          }
          var C, m;
        }
        function g(a, d) {
          a._state = 2, a._value = d, y(a);
        }
        function y(a) {
          a._state === 2 && a._deferreds.length === 0 && u._immediateFn(function() {
            a._handled || u._unhandledRejectionFn(a._value);
          });
          for (var d = 0, c = a._deferreds.length; d < c; d++) p(a, a._deferreds[d]);
          a._deferreds = null;
        }
        function w(a, d, c) {
          this.onFulfilled = typeof a == "function" ? a : null, this.onRejected = typeof d == "function" ? d : null, this.promise = c;
        }
        function o(a, d) {
          var c = !1;
          try {
            a(function(C) {
              c || (c = !0, h(d, C));
            }, function(C) {
              c || (c = !0, g(d, C));
            });
          } catch (C) {
            if (c) return;
            c = !0, g(d, C);
          }
        }
        u.prototype.catch = function(a) {
          return this.then(null, a);
        }, u.prototype.then = function(a, d) {
          var c = new this.constructor(v);
          return p(this, new w(a, d, c)), c;
        }, u.prototype.finally = n.a, u.all = function(a) {
          return new u(function(d, c) {
            if (!a || a.length === void 0) throw new TypeError("Promise.all accepts an array");
            var C = Array.prototype.slice.call(a);
            if (C.length === 0) return d([]);
            var m = C.length;
            function f(E, _) {
              try {
                if (_ && (typeof _ == "object" || typeof _ == "function")) {
                  var I = _.then;
                  if (typeof I == "function") return void I.call(_, function(F) {
                    f(E, F);
                  }, c);
                }
                C[E] = _, --m == 0 && d(C);
              } catch (F) {
                c(F);
              }
            }
            for (var b = 0; b < C.length; b++) f(b, C[b]);
          });
        }, u.resolve = function(a) {
          return a && typeof a == "object" && a.constructor === u ? a : new u(function(d) {
            d(a);
          });
        }, u.reject = function(a) {
          return new u(function(d, c) {
            c(a);
          });
        }, u.race = function(a) {
          return new u(function(d, c) {
            for (var C = 0, m = a.length; C < m; C++) a[C].then(d, c);
          });
        }, u._immediateFn = typeof r == "function" && function(a) {
          r(a);
        } || function(a) {
          l(a, 0);
        }, u._unhandledRejectionFn = function(a) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", a);
        }, s.a = u;
      }).call(this, i(5).setImmediate);
    }, function(e, s, i) {
      s.a = function(r) {
        var n = this.constructor;
        return this.then(function(l) {
          return n.resolve(r()).then(function() {
            return l;
          });
        }, function(l) {
          return n.resolve(r()).then(function() {
            return n.reject(l);
          });
        });
      };
    }, function(e, s, i) {
      function r(o) {
        return (r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
          return typeof a;
        } : function(a) {
          return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
        })(o);
      }
      i(4);
      var n, l, v, u, p, h, g, y = i(8), w = (l = function(o) {
        return new Promise(function(a, d) {
          o = u(o), (o = p(o)).beforeSend && o.beforeSend();
          var c = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          c.open(o.method, o.url), c.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(o.headers).forEach(function(m) {
            var f = o.headers[m];
            c.setRequestHeader(m, f);
          });
          var C = o.ratio;
          c.upload.addEventListener("progress", function(m) {
            var f = Math.round(m.loaded / m.total * 100), b = Math.ceil(f * C / 100);
            o.progress(Math.min(b, 100));
          }, !1), c.addEventListener("progress", function(m) {
            var f = Math.round(m.loaded / m.total * 100), b = Math.ceil(f * (100 - C) / 100) + C;
            o.progress(Math.min(b, 100));
          }, !1), c.onreadystatechange = function() {
            if (c.readyState === 4) {
              var m = c.response;
              try {
                m = JSON.parse(m);
              } catch {
              }
              var f = y.parseHeaders(c.getAllResponseHeaders()), b = { body: m, code: c.status, headers: f };
              g(c.status) ? a(b) : d(b);
            }
          }, c.send(o.data);
        });
      }, v = function(o) {
        return o.method = "POST", l(o);
      }, u = function() {
        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (o.url && typeof o.url != "string") throw new Error("Url must be a string");
        if (o.url = o.url || "", o.method && typeof o.method != "string") throw new Error("`method` must be a string or null");
        if (o.method = o.method ? o.method.toUpperCase() : "GET", o.headers && r(o.headers) !== "object") throw new Error("`headers` must be an object or null");
        if (o.headers = o.headers || {}, o.type && (typeof o.type != "string" || !Object.values(n).includes(o.type))) throw new Error("`type` must be taken from module's «contentType» library");
        if (o.progress && typeof o.progress != "function") throw new Error("`progress` must be a function or null");
        if (o.progress = o.progress || function(a) {
        }, o.beforeSend = o.beforeSend || function(a) {
        }, o.ratio && typeof o.ratio != "number") throw new Error("`ratio` must be a number");
        if (o.ratio < 0 || o.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
        if (o.ratio = o.ratio || 90, o.accept && typeof o.accept != "string") throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (o.accept = o.accept || "*/*", o.multiple && typeof o.multiple != "boolean") throw new Error("`multiple` must be a true or false");
        if (o.multiple = o.multiple || !1, o.fieldName && typeof o.fieldName != "string") throw new Error("`fieldName` must be a string");
        return o.fieldName = o.fieldName || "files", o;
      }, p = function(o) {
        switch (o.method) {
          case "GET":
            var a = h(o.data, n.URLENCODED);
            delete o.data, o.url = /\?/.test(o.url) ? o.url + "&" + a : o.url + "?" + a;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var d = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || n.JSON;
            }(o);
            (y.isFormData(o.data) || y.isFormElement(o.data)) && (d = n.FORM), o.data = h(o.data, d), d !== w.contentType.FORM && (o.headers["content-type"] = d);
        }
        return o;
      }, h = function() {
        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case n.URLENCODED:
            return y.urlEncode(o);
          case n.JSON:
            return y.jsonEncode(o);
          case n.FORM:
            return y.formEncode(o);
          default:
            return o;
        }
      }, g = function(o) {
        return o >= 200 && o < 300;
      }, { contentType: n = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: l, get: function(o) {
        return o.method = "GET", l(o);
      }, post: v, transport: function(o) {
        return o = u(o), y.selectFiles(o).then(function(a) {
          for (var d = new FormData(), c = 0; c < a.length; c++) d.append(o.fieldName, a[c], a[c].name);
          y.isObject(o.data) && Object.keys(o.data).forEach(function(m) {
            var f = o.data[m];
            d.append(m, f);
          });
          var C = o.beforeSend;
          return o.beforeSend = function() {
            return C(a);
          }, o.data = d, v(o);
        });
      }, selectFiles: function(o) {
        return delete (o = u(o)).beforeSend, y.selectFiles(o);
      } });
      e.exports = w;
    }, function(e, s, i) {
      i.r(s);
      var r = i(1);
      window.Promise = window.Promise || r.a;
    }, function(e, s, i) {
      (function(r) {
        var n = r !== void 0 && r || typeof self < "u" && self || window, l = Function.prototype.apply;
        function v(u, p) {
          this._id = u, this._clearFn = p;
        }
        s.setTimeout = function() {
          return new v(l.call(setTimeout, n, arguments), clearTimeout);
        }, s.setInterval = function() {
          return new v(l.call(setInterval, n, arguments), clearInterval);
        }, s.clearTimeout = s.clearInterval = function(u) {
          u && u.close();
        }, v.prototype.unref = v.prototype.ref = function() {
        }, v.prototype.close = function() {
          this._clearFn.call(n, this._id);
        }, s.enroll = function(u, p) {
          clearTimeout(u._idleTimeoutId), u._idleTimeout = p;
        }, s.unenroll = function(u) {
          clearTimeout(u._idleTimeoutId), u._idleTimeout = -1;
        }, s._unrefActive = s.active = function(u) {
          clearTimeout(u._idleTimeoutId);
          var p = u._idleTimeout;
          p >= 0 && (u._idleTimeoutId = setTimeout(function() {
            u._onTimeout && u._onTimeout();
          }, p));
        }, i(6), s.setImmediate = typeof self < "u" && self.setImmediate || r !== void 0 && r.setImmediate || this && this.setImmediate, s.clearImmediate = typeof self < "u" && self.clearImmediate || r !== void 0 && r.clearImmediate || this && this.clearImmediate;
      }).call(this, i(0));
    }, function(e, s, i) {
      (function(r, n) {
        (function(l, v) {
          if (!l.setImmediate) {
            var u, p, h, g, y, w = 1, o = {}, a = !1, d = l.document, c = Object.getPrototypeOf && Object.getPrototypeOf(l);
            c = c && c.setTimeout ? c : l, {}.toString.call(l.process) === "[object process]" ? u = function(f) {
              n.nextTick(function() {
                m(f);
              });
            } : function() {
              if (l.postMessage && !l.importScripts) {
                var f = !0, b = l.onmessage;
                return l.onmessage = function() {
                  f = !1;
                }, l.postMessage("", "*"), l.onmessage = b, f;
              }
            }() ? (g = "setImmediate$" + Math.random() + "$", y = function(f) {
              f.source === l && typeof f.data == "string" && f.data.indexOf(g) === 0 && m(+f.data.slice(g.length));
            }, l.addEventListener ? l.addEventListener("message", y, !1) : l.attachEvent("onmessage", y), u = function(f) {
              l.postMessage(g + f, "*");
            }) : l.MessageChannel ? ((h = new MessageChannel()).port1.onmessage = function(f) {
              m(f.data);
            }, u = function(f) {
              h.port2.postMessage(f);
            }) : d && "onreadystatechange" in d.createElement("script") ? (p = d.documentElement, u = function(f) {
              var b = d.createElement("script");
              b.onreadystatechange = function() {
                m(f), b.onreadystatechange = null, p.removeChild(b), b = null;
              }, p.appendChild(b);
            }) : u = function(f) {
              setTimeout(m, 0, f);
            }, c.setImmediate = function(f) {
              typeof f != "function" && (f = new Function("" + f));
              for (var b = new Array(arguments.length - 1), E = 0; E < b.length; E++) b[E] = arguments[E + 1];
              var _ = { callback: f, args: b };
              return o[w] = _, u(w), w++;
            }, c.clearImmediate = C;
          }
          function C(f) {
            delete o[f];
          }
          function m(f) {
            if (a) setTimeout(m, 0, f);
            else {
              var b = o[f];
              if (b) {
                a = !0;
                try {
                  (function(E) {
                    var _ = E.callback, I = E.args;
                    switch (I.length) {
                      case 0:
                        _();
                        break;
                      case 1:
                        _(I[0]);
                        break;
                      case 2:
                        _(I[0], I[1]);
                        break;
                      case 3:
                        _(I[0], I[1], I[2]);
                        break;
                      default:
                        _.apply(v, I);
                    }
                  })(b);
                } finally {
                  C(f), a = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? r === void 0 ? this : r : self);
      }).call(this, i(0), i(7));
    }, function(e, s) {
      var i, r, n = e.exports = {};
      function l() {
        throw new Error("setTimeout has not been defined");
      }
      function v() {
        throw new Error("clearTimeout has not been defined");
      }
      function u(c) {
        if (i === setTimeout) return setTimeout(c, 0);
        if ((i === l || !i) && setTimeout) return i = setTimeout, setTimeout(c, 0);
        try {
          return i(c, 0);
        } catch {
          try {
            return i.call(null, c, 0);
          } catch {
            return i.call(this, c, 0);
          }
        }
      }
      (function() {
        try {
          i = typeof setTimeout == "function" ? setTimeout : l;
        } catch {
          i = l;
        }
        try {
          r = typeof clearTimeout == "function" ? clearTimeout : v;
        } catch {
          r = v;
        }
      })();
      var p, h = [], g = !1, y = -1;
      function w() {
        g && p && (g = !1, p.length ? h = p.concat(h) : y = -1, h.length && o());
      }
      function o() {
        if (!g) {
          var c = u(w);
          g = !0;
          for (var C = h.length; C; ) {
            for (p = h, h = []; ++y < C; ) p && p[y].run();
            y = -1, C = h.length;
          }
          p = null, g = !1, function(m) {
            if (r === clearTimeout) return clearTimeout(m);
            if ((r === v || !r) && clearTimeout) return r = clearTimeout, clearTimeout(m);
            try {
              r(m);
            } catch {
              try {
                return r.call(null, m);
              } catch {
                return r.call(this, m);
              }
            }
          }(c);
        }
      }
      function a(c, C) {
        this.fun = c, this.array = C;
      }
      function d() {
      }
      n.nextTick = function(c) {
        var C = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var m = 1; m < arguments.length; m++) C[m - 1] = arguments[m];
        h.push(new a(c, C)), h.length !== 1 || g || u(o);
      }, a.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = d, n.addListener = d, n.once = d, n.off = d, n.removeListener = d, n.removeAllListeners = d, n.emit = d, n.prependListener = d, n.prependOnceListener = d, n.listeners = function(c) {
        return [];
      }, n.binding = function(c) {
        throw new Error("process.binding is not supported");
      }, n.cwd = function() {
        return "/";
      }, n.chdir = function(c) {
        throw new Error("process.chdir is not supported");
      }, n.umask = function() {
        return 0;
      };
    }, function(e, s, i) {
      function r(l, v) {
        for (var u = 0; u < v.length; u++) {
          var p = v[u];
          p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(l, p.key, p);
        }
      }
      var n = i(9);
      e.exports = function() {
        function l() {
          (function(h, g) {
            if (!(h instanceof g)) throw new TypeError("Cannot call a class as a function");
          })(this, l);
        }
        var v, u, p;
        return v = l, p = [{ key: "urlEncode", value: function(h) {
          return n(h);
        } }, { key: "jsonEncode", value: function(h) {
          return JSON.stringify(h);
        } }, { key: "formEncode", value: function(h) {
          if (this.isFormData(h)) return h;
          if (this.isFormElement(h)) return new FormData(h);
          if (this.isObject(h)) {
            var g = new FormData();
            return Object.keys(h).forEach(function(y) {
              var w = h[y];
              g.append(y, w);
            }), g;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(h) {
          return Object.prototype.toString.call(h) === "[object Object]";
        } }, { key: "isFormData", value: function(h) {
          return h instanceof FormData;
        } }, { key: "isFormElement", value: function(h) {
          return h instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(g, y) {
            var w = document.createElement("INPUT");
            w.type = "file", h.multiple && w.setAttribute("multiple", "multiple"), h.accept && w.setAttribute("accept", h.accept), w.style.display = "none", document.body.appendChild(w), w.addEventListener("change", function(o) {
              var a = o.target.files;
              g(a), document.body.removeChild(w);
            }, !1), w.click();
          });
        } }, { key: "parseHeaders", value: function(h) {
          var g = h.trim().split(/[\r\n]+/), y = {};
          return g.forEach(function(w) {
            var o = w.split(": "), a = o.shift(), d = o.join(": ");
            a && (y[a] = d);
          }), y;
        } }], (u = null) && r(v.prototype, u), p && r(v, p), l;
      }();
    }, function(e, s) {
      var i = function(n) {
        return encodeURIComponent(n).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, r = function(n, l, v, u) {
        return l = l || null, v = v || "&", u = u || null, n ? function(p) {
          for (var h = new Array(), g = 0; g < p.length; g++) p[g] && h.push(p[g]);
          return h;
        }(Object.keys(n).map(function(p) {
          var h, g, y = p;
          if (u && (y = u + "[" + y + "]"), typeof n[p] == "object" && n[p] !== null) h = r(n[p], null, v, y);
          else {
            l && (g = y, y = !isNaN(parseFloat(g)) && isFinite(g) ? l + Number(y) : y);
            var w = n[p];
            w = (w = (w = (w = w === !0 ? "1" : w) === !1 ? "0" : w) === 0 ? "0" : w) || "", h = i(y) + "=" + i(w);
          }
          return h;
        })).join(v).replace(/[!'()*]/g, "") : "";
      };
      e.exports = r;
    }]);
  });
})(P);
var B = P.exports;
const T = /* @__PURE__ */ R(B);
function x(L) {
  return L !== void 0 && typeof L.then == "function";
}
class D {
  constructor({ config: t, onUpload: e, onError: s }) {
    this.config = t, this.onUpload = e, this.onError = s;
  }
  /**
   * Upload file selected from device
   */
  uploadSelectedFile({ onPreview: t }) {
    var i;
    const e = (r) => {
      const n = new FileReader();
      n.readAsDataURL(r), n.onload = (l) => {
        t(l.target.result);
      }, n.onerror = () => {
        this.onError("Failed to read file");
      };
    };
    let s;
    if ((i = this.config.uploader) != null && i.uploadByFile)
      s = T.selectFiles({ accept: this.config.types ?? "image/*" }).then((r) => {
        if (!r || r.length === 0)
          throw new Error("No file selected");
        e(r[0]);
        const n = this.config.uploader.uploadByFile(r[0]);
        return x(n) || console.warn("Custom uploader method uploadByFile should return a Promise"), n;
      });
    else {
      if (!this.config.endpoints.byFile) {
        this.onError("Upload endpoint (byFile) is not configured");
        return;
      }
      s = T.transport({
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
    s.then((r) => this.onUpload(r)).catch((r) => this.onError(r));
  }
  /**
   * Upload image by URL
   */
  uploadByUrl(t) {
    var s;
    let e;
    if ((s = this.config.uploader) != null && s.uploadByUrl)
      e = this.config.uploader.uploadByUrl(t), x(e) || console.warn("Custom uploader method uploadByUrl should return a Promise");
    else {
      if (!this.config.endpoints.byUrl) {
        this.onError("Upload endpoint (byUrl) is not configured");
        return;
      }
      e = T.post({
        url: this.config.endpoints.byUrl,
        data: {
          url: t,
          ...this.config.additionalRequestData
        },
        type: T.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((i) => i.body);
    }
    e.then((i) => this.onUpload(i)).catch((i) => this.onError(i));
  }
  /**
   * Upload file from drag-n-drop or paste
   */
  uploadByFile(t, { onPreview: e }) {
    var r;
    const s = new FileReader();
    s.readAsDataURL(t), s.onload = (n) => {
      e(n.target.result);
    }, s.onerror = () => {
      this.onError("Failed to read file");
    };
    let i;
    if ((r = this.config.uploader) != null && r.uploadByFile)
      i = this.config.uploader.uploadByFile(t), x(i) || console.warn("Custom uploader method uploadByFile should return a Promise");
    else {
      if (!this.config.endpoints.byFile) {
        this.onError("Upload endpoint (byFile) is not configured");
        return;
      }
      const n = new FormData();
      n.append(this.config.field ?? "image", t), this.config.additionalRequestData && Object.entries(this.config.additionalRequestData).forEach(([l, v]) => {
        n.append(l, v);
      }), i = T.post({
        url: this.config.endpoints.byFile,
        data: n,
        type: T.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((l) => l.body);
    }
    i.then((n) => this.onUpload(n)).catch((n) => this.onError(n));
  }
}
/**
 * Gallery Tool for Editor.js
 * Supports multiple images with captions and source attribution
 * @author iXBT
 * @license MIT
 */
class M {
  constructor({ data: t, config: e, api: s, readOnly: i, block: r }) {
    this.currentLoadingItem = null, this.api = s, this.readOnly = i, this.block = r;
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
      uploader: n.uploader
    }, this.uploader = new D({
      config: this.config,
      onUpload: (l) => this.onUpload(l),
      onError: (l) => this.uploadingFailed(l)
    }), this.ui = new O({
      api: s,
      config: this.config,
      onSelectFile: () => this.selectFile(),
      onSelectUrl: (l) => this.uploadFromUrl(l),
      onColumnsChange: (l) => this.onColumnsChange(l),
      onRemoveImage: (l) => this.onRemoveImage(l),
      readOnly: i
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
      icon: j,
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
        icon: U,
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
    return M.tunes.forEach(({ name: e }) => {
      const s = this._data[e];
      s && this.setTune(e, s);
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
    const t = M.tunes.map((i) => ({
      icon: i.icon,
      label: this.api.i18n.t(i.title),
      name: i.name,
      toggle: i.toggle,
      isActive: this._data[i.name],
      onActivate: () => {
        this.tuneToggled(i.name);
      }
    })), s = [
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
    return [...t, ...s];
  }
  /**
   * Handle paste events
   */
  async onPaste(t) {
    switch (t.type) {
      case "tag": {
        const e = t.detail.data;
        if (/^blob:/.test(e.src)) {
          const i = await (await fetch(e.src)).blob();
          this.uploadFile(i);
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
   * Handle image removal - delete from S3
   */
  onRemoveImage(t) {
    const e = this.config.endpoints.deleteImage;
    !e || !t || fetch(e, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...this.config.additionalRequestHeaders || {}
      },
      body: JSON.stringify({ url: t })
    }).catch((s) => {
      console.error("Gallery Tool: failed to delete image from S3", s);
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
    }).catch((s) => {
      console.error(s);
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
  M as default
};
