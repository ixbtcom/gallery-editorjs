(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.gallery-tool{--bg-color: #f5f5f5;--border-color: #e8e8eb;--accent-color: #388ae5;--control-bg: rgba(255, 255, 255, .9);--control-hover: rgba(0, 0, 0, .05)}.gallery-tool__items{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:12px}.gallery-tool--columns-1 .gallery-tool__item{width:100%}.gallery-tool--columns-2 .gallery-tool__item{width:calc(50% - 6px)}.gallery-tool--columns-3 .gallery-tool__item{width:calc(33.333% - 8px)}.gallery-tool--columns-4 .gallery-tool__item{width:calc(25% - 9px)}.gallery-tool--columns-5 .gallery-tool__item{width:calc(20% - 10px)}.gallery-tool__item{position:relative;border:1px solid var(--border-color);border-radius:4px;overflow:hidden;background:#fff}.gallery-tool__item-image{position:relative;min-height:120px;background:var(--bg-color)}.gallery-tool__item-image img{width:100%;height:auto;display:block;object-fit:cover;max-height:200px}.gallery-tool__item-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;background-position:center;margin:35px auto;position:relative;background-color:var(--bg-color)}.gallery-tool__item-preloader:after{content:"";position:absolute;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--accent-color);left:50%;top:50%;margin:-30px 0 0 -30px;animation:gallery-preloader-spin 1s infinite linear;box-sizing:border-box}@keyframes gallery-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.gallery-tool__item-caption,.gallery-tool__item-source,.gallery-tool__item-source-link{padding:8px 10px;font-size:13px;line-height:1.4;border-top:1px solid var(--border-color);min-height:20px;outline:none}.gallery-tool__item-caption{font-weight:500}.gallery-tool__item-source{color:#666;font-size:12px}.gallery-tool__item-source-link{color:var(--accent-color);font-size:12px}.gallery-tool__item-caption[data-placeholder]:empty:before,.gallery-tool__item-source[data-placeholder]:empty:before,.gallery-tool__item-source-link[data-placeholder]:empty:before{content:attr(data-placeholder);color:#aaa;pointer-events:none}.gallery-tool__item-caption[data-placeholder]:empty:focus:before,.gallery-tool__item-source[data-placeholder]:empty:focus:before,.gallery-tool__item-source-link[data-placeholder]:empty:focus:before{display:none}.gallery-tool__item-controls{position:absolute;top:8px;right:8px;display:flex;gap:4px;opacity:0;transition:opacity .2s;z-index:10}.gallery-tool__item:hover .gallery-tool__item-controls{opacity:1}.gallery-tool__item-remove,.gallery-tool__item-move-left,.gallery-tool__item-move-right{width:28px;height:28px;border:none;border-radius:4px;background:var(--control-bg);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;color:#333;transition:background .2s}.gallery-tool__item-remove:hover,.gallery-tool__item-move-left:hover,.gallery-tool__item-move-right:hover{background:var(--control-hover)}.gallery-tool__item-remove{color:#e74c3c}.gallery-tool__add-buttons{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.gallery-tool__add-buttons .cdx-button{display:inline-flex;align-items:center;gap:6px}.gallery-tool__add-buttons .cdx-button svg{width:16px;height:16px}.gallery-tool__url-input-wrapper{flex:1;min-width:200px}.gallery-tool__url-input{width:100%;padding:8px 12px;border:1px solid var(--border-color);border-radius:4px;font-size:14px}.gallery-tool__url-input:focus{border-color:var(--accent-color);outline:none}.gallery-tool__columns-control{display:flex;align-items:center;gap:8px;margin-left:auto}.gallery-tool__columns-button{width:28px;height:28px;border:1px solid var(--border-color);border-radius:4px;background:#fff;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;transition:background .2s}.gallery-tool__columns-button:hover{background:var(--bg-color)}.gallery-tool__columns-display{font-size:13px;color:#666;min-width:45px;text-align:center}.gallery-tool--carousel .gallery-tool__items{flex-wrap:nowrap;overflow-x:auto;gap:12px;padding-bottom:8px}.gallery-tool--carousel .gallery-tool__item{flex-shrink:0;width:280px}.gallery-tool--masonry .gallery-tool__items{display:block;column-count:2;column-gap:12px}.gallery-tool--masonry.gallery-tool--columns-3 .gallery-tool__items{column-count:3}.gallery-tool--masonry.gallery-tool--columns-4 .gallery-tool__items{column-count:4}.gallery-tool--masonry.gallery-tool--columns-5 .gallery-tool__items{column-count:5}.gallery-tool--masonry .gallery-tool__item{width:100%;margin-bottom:12px;break-inside:avoid}.gallery-tool--masonry .gallery-tool__item-image img{max-height:none}.gallery-tool--empty .gallery-tool__items,.gallery-tool--loading .gallery-tool__item-image img{display:none}')),document.head.appendChild(o)}}catch(l){console.error("vite-plugin-css-injected-by-js",l)}})();
const j = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>', M = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>';
function S(_, t = null, e = {}) {
  const a = document.createElement(_);
  Array.isArray(t) ? a.classList.add(...t) : t !== null && a.classList.add(t);
  for (const i in e)
    Object.prototype.hasOwnProperty.call(e, i) && (a[i] = e[i]);
  return a;
}
const k = class k {
  constructor({ api: t, config: e, onSelectFile: a, onSelectUrl: i, onColumnsChange: o, readOnly: r }) {
    this.currentColumns = 2, this.previousColumns = 2, this.api = t, this.config = e, this.onSelectFile = a, this.onSelectUrl = i, this.onColumnsChange = o, this.readOnly = r, this.nodes = {
      wrapper: S("div", [this.CSS.wrapper]),
      itemsContainer: S("div", [this.CSS.itemsContainer]),
      addButtons: S("div", [this.CSS.addButtons]),
      fileButton: this.createFileButton(),
      urlButton: this.createUrlButton(),
      urlInput: this.createUrlInput(),
      columnsControl: this.createColumnsControl()
    }, this.nodes.addButtons.appendChild(this.nodes.fileButton), this.nodes.addButtons.appendChild(this.nodes.urlButton), this.nodes.addButtons.appendChild(this.nodes.urlInput), this.nodes.addButtons.appendChild(this.nodes.columnsControl), this.nodes.wrapper.appendChild(this.nodes.itemsContainer), this.nodes.wrapper.appendChild(this.nodes.addButtons);
  }
  get CSS() {
    return {
      wrapper: "gallery-tool",
      itemsContainer: "gallery-tool__items",
      item: "gallery-tool__item",
      itemImage: "gallery-tool__item-image",
      itemPreloader: "gallery-tool__item-preloader",
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
    ) : (t.forEach((a) => this.addItem(a)), this.toggleState(
      "filled"
      /* Filled */
    )), this.nodes.wrapper;
  }
  /**
   * Add a new item to the gallery
   */
  addItem(t) {
    const e = S("div", [this.CSS.item]), a = S("div", [this.CSS.itemImage]), i = S("div", [this.CSS.itemPreloader]), o = S("img", null, { src: t.url }), r = S("div", [this.CSS.itemCaption, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    r.dataset.placeholder = this.config.captionPlaceholder ?? "Caption", r.textContent = t.caption || "";
    const u = S("div", [this.CSS.itemSource, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    u.dataset.placeholder = this.config.sourcePlaceholder ?? "Source", u.textContent = t.source || "";
    const C = S("div", [this.CSS.itemSourceLink, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    if (C.dataset.placeholder = this.config.sourceLinkPlaceholder ?? "Source link", C.textContent = t.sourceLink || "", a.appendChild(i), a.appendChild(o), o.onload = () => {
      i.style.display = "none";
    }, !this.readOnly) {
      const l = this.createItemControls(e);
      e.appendChild(l);
    }
    return e.appendChild(a), e.appendChild(r), e.appendChild(u), e.appendChild(C), e.dataset.url = t.url, t.width && (e.dataset.width = String(t.width)), t.height && (e.dataset.height = String(t.height)), this.nodes.itemsContainer.appendChild(e), this.toggleState(
      "filled"
      /* Filled */
    ), e;
  }
  /**
   * Create a placeholder item for loading state
   */
  createLoadingItem(t) {
    const e = S("div", [this.CSS.item]), a = S("div", [this.CSS.itemImage]), i = S("div", [this.CSS.itemPreloader]);
    t && (i.style.backgroundImage = `url(${t})`), a.appendChild(i), e.appendChild(a);
    const o = S("div", [this.CSS.itemCaption, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    o.dataset.placeholder = this.config.captionPlaceholder ?? "Caption";
    const r = S("div", [this.CSS.itemSource, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    r.dataset.placeholder = this.config.sourcePlaceholder ?? "Source";
    const u = S("div", [this.CSS.itemSourceLink, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    return u.dataset.placeholder = this.config.sourceLinkPlaceholder ?? "Source link", e.appendChild(o), e.appendChild(r), e.appendChild(u), this.nodes.itemsContainer.appendChild(e), this.toggleState(
      "loading"
      /* Loading */
    ), e;
  }
  /**
   * Update loading item with uploaded image
   */
  fillLoadingItem(t, e) {
    const a = t.querySelector(`.${this.CSS.itemImage}`), i = t.querySelector(`.${this.CSS.itemPreloader}`), o = S("img", null, { src: e.url });
    if (o.onload = () => {
      i && (i.style.display = "none");
    }, a.appendChild(o), t.dataset.url = e.url, e.width && (t.dataset.width = String(e.width)), e.height && (t.dataset.height = String(e.height)), !this.readOnly) {
      const r = this.createItemControls(t);
      t.insertBefore(r, t.firstChild);
    }
    this.toggleState(
      "filled"
      /* Filled */
    );
  }
  /**
   * Get all items data
   */
  getItemsData() {
    const t = this.nodes.itemsContainer.querySelectorAll(`.${this.CSS.item}`), e = [];
    return t.forEach((a) => {
      var h, g, y;
      const i = a, o = i.dataset.url;
      if (!o) return;
      const r = ((h = a.querySelector(`.${this.CSS.itemCaption}`)) == null ? void 0 : h.textContent) || "", u = ((g = a.querySelector(`.${this.CSS.itemSource}`)) == null ? void 0 : g.textContent) || "", C = ((y = a.querySelector(`.${this.CSS.itemSourceLink}`)) == null ? void 0 : y.textContent) || "", l = i.dataset.width ? parseInt(i.dataset.width, 10) : void 0, p = i.dataset.height ? parseInt(i.dataset.height, 10) : void 0;
      e.push({ url: o, caption: r, source: u, sourceLink: C, width: l, height: p });
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
    return t.innerHTML = this.config.buttonContent ?? `${M} Add Image`, t.addEventListener("click", () => this.onSelectFile()), t;
  }
  createUrlButton() {
    const t = S("div", [this.CSS.button]);
    return t.innerHTML = this.config.urlButtonContent ?? `${j} Add from URL`, t.addEventListener("click", () => this.toggleUrlInput()), t;
  }
  createUrlInput() {
    const t = S("div", [this.CSS.urlInputWrapper]);
    t.style.display = "none";
    const e = S("input", [this.CSS.urlInput, this.CSS.input], {
      type: "text"
    });
    return e.placeholder = "Paste image URL and press Enter", e.addEventListener("keydown", (a) => {
      if (a.key === "Enter") {
        a.preventDefault();
        const i = e.value.trim();
        i && this.isValidImageUrl(i) && (this.onSelectUrl(i), e.value = "", t.style.display = "none");
      }
      a.key === "Escape" && (t.style.display = "none", e.value = "");
    }), t.appendChild(e), t;
  }
  toggleUrlInput() {
    const t = this.nodes.urlInput, e = t.querySelector("input");
    t.style.display === "none" ? (t.style.display = "block", e.focus()) : (t.style.display = "none", e.value = "");
  }
  createColumnsControl() {
    const t = S("div", [this.CSS.columnsControl]), e = S("button", [this.CSS.columnsButton]);
    e.innerHTML = "−", e.addEventListener("click", () => this.changeColumns(-1));
    const a = S("span", [this.CSS.columnsDisplay]);
    a.textContent = `${this.currentColumns} col`;
    const i = S("button", [this.CSS.columnsButton]);
    return i.innerHTML = "+", i.addEventListener("click", () => this.changeColumns(1)), t.appendChild(e), t.appendChild(a), t.appendChild(i), t;
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
      for (let a = k.MIN_COLUMNS; a <= k.MAX_COLUMNS; a++)
        this.nodes.wrapper.classList.remove(`gallery-tool--columns-${a}`);
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
  createItemControls(t) {
    const e = S("div", [this.CSS.itemControls]), a = S("button", [this.CSS.itemRemove]);
    a.innerHTML = "×", a.addEventListener("click", () => {
      t.remove(), this.nodes.itemsContainer.children.length === 0 && this.toggleState(
        "empty"
        /* Empty */
      );
    });
    const i = S("button", [this.CSS.itemMoveLeft]);
    i.innerHTML = "←", i.addEventListener("click", () => this.moveItem(t, -1));
    const o = S("button", [this.CSS.itemMoveRight]);
    return o.innerHTML = "→", o.addEventListener("click", () => this.moveItem(t, 1)), e.appendChild(i), e.appendChild(a), e.appendChild(o), e;
  }
  moveItem(t, e) {
    const a = Array.from(this.nodes.itemsContainer.children), o = a.indexOf(t) + e;
    o < 0 || o >= a.length || (e < 0 ? this.nodes.itemsContainer.insertBefore(t, a[o]) : this.nodes.itemsContainer.insertBefore(a[o], t));
  }
  toggleState(t) {
    this.nodes.wrapper.classList.remove(
      "gallery-tool--empty",
      "gallery-tool--loading",
      "gallery-tool--filled"
    ), this.nodes.wrapper.classList.add(`gallery-tool--${t}`);
  }
};
k.MIN_COLUMNS = 1, k.MAX_COLUMNS = 5;
let O = k;
function B(_) {
  return _ && _.__esModule && Object.prototype.hasOwnProperty.call(_, "default") ? _.default : _;
}
var U = { exports: {} };
(function(_, t) {
  (function(e, a) {
    _.exports = a();
  })(window, function() {
    return function(e) {
      var a = {};
      function i(o) {
        if (a[o]) return a[o].exports;
        var r = a[o] = { i: o, l: !1, exports: {} };
        return e[o].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
      }
      return i.m = e, i.c = a, i.d = function(o, r, u) {
        i.o(o, r) || Object.defineProperty(o, r, { enumerable: !0, get: u });
      }, i.r = function(o) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o, "__esModule", { value: !0 });
      }, i.t = function(o, r) {
        if (1 & r && (o = i(o)), 8 & r || 4 & r && typeof o == "object" && o && o.__esModule) return o;
        var u = /* @__PURE__ */ Object.create(null);
        if (i.r(u), Object.defineProperty(u, "default", { enumerable: !0, value: o }), 2 & r && typeof o != "string") for (var C in o) i.d(u, C, (function(l) {
          return o[l];
        }).bind(null, C));
        return u;
      }, i.n = function(o) {
        var r = o && o.__esModule ? function() {
          return o.default;
        } : function() {
          return o;
        };
        return i.d(r, "a", r), r;
      }, i.o = function(o, r) {
        return Object.prototype.hasOwnProperty.call(o, r);
      }, i.p = "", i(i.s = 3);
    }([function(e, a) {
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
    }, function(e, a, i) {
      (function(o) {
        var r = i(2), u = setTimeout;
        function C() {
        }
        function l(s) {
          if (!(this instanceof l)) throw new TypeError("Promises must be constructed via new");
          if (typeof s != "function") throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], n(s, this);
        }
        function p(s, d) {
          for (; s._state === 3; ) s = s._value;
          s._state !== 0 ? (s._handled = !0, l._immediateFn(function() {
            var c = s._state === 1 ? d.onFulfilled : d.onRejected;
            if (c !== null) {
              var v;
              try {
                v = c(s._value);
              } catch (m) {
                return void g(d.promise, m);
              }
              h(d.promise, v);
            } else (s._state === 1 ? h : g)(d.promise, s._value);
          })) : s._deferreds.push(d);
        }
        function h(s, d) {
          try {
            if (d === s) throw new TypeError("A promise cannot be resolved with itself.");
            if (d && (typeof d == "object" || typeof d == "function")) {
              var c = d.then;
              if (d instanceof l) return s._state = 3, s._value = d, void y(s);
              if (typeof c == "function") return void n((v = c, m = d, function() {
                v.apply(m, arguments);
              }), s);
            }
            s._state = 1, s._value = d, y(s);
          } catch (f) {
            g(s, f);
          }
          var v, m;
        }
        function g(s, d) {
          s._state = 2, s._value = d, y(s);
        }
        function y(s) {
          s._state === 2 && s._deferreds.length === 0 && l._immediateFn(function() {
            s._handled || l._unhandledRejectionFn(s._value);
          });
          for (var d = 0, c = s._deferreds.length; d < c; d++) p(s, s._deferreds[d]);
          s._deferreds = null;
        }
        function w(s, d, c) {
          this.onFulfilled = typeof s == "function" ? s : null, this.onRejected = typeof d == "function" ? d : null, this.promise = c;
        }
        function n(s, d) {
          var c = !1;
          try {
            s(function(v) {
              c || (c = !0, h(d, v));
            }, function(v) {
              c || (c = !0, g(d, v));
            });
          } catch (v) {
            if (c) return;
            c = !0, g(d, v);
          }
        }
        l.prototype.catch = function(s) {
          return this.then(null, s);
        }, l.prototype.then = function(s, d) {
          var c = new this.constructor(C);
          return p(this, new w(s, d, c)), c;
        }, l.prototype.finally = r.a, l.all = function(s) {
          return new l(function(d, c) {
            if (!s || s.length === void 0) throw new TypeError("Promise.all accepts an array");
            var v = Array.prototype.slice.call(s);
            if (v.length === 0) return d([]);
            var m = v.length;
            function f(E, L) {
              try {
                if (L && (typeof L == "object" || typeof L == "function")) {
                  var I = L.then;
                  if (typeof I == "function") return void I.call(L, function(F) {
                    f(E, F);
                  }, c);
                }
                v[E] = L, --m == 0 && d(v);
              } catch (F) {
                c(F);
              }
            }
            for (var b = 0; b < v.length; b++) f(b, v[b]);
          });
        }, l.resolve = function(s) {
          return s && typeof s == "object" && s.constructor === l ? s : new l(function(d) {
            d(s);
          });
        }, l.reject = function(s) {
          return new l(function(d, c) {
            c(s);
          });
        }, l.race = function(s) {
          return new l(function(d, c) {
            for (var v = 0, m = s.length; v < m; v++) s[v].then(d, c);
          });
        }, l._immediateFn = typeof o == "function" && function(s) {
          o(s);
        } || function(s) {
          u(s, 0);
        }, l._unhandledRejectionFn = function(s) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", s);
        }, a.a = l;
      }).call(this, i(5).setImmediate);
    }, function(e, a, i) {
      a.a = function(o) {
        var r = this.constructor;
        return this.then(function(u) {
          return r.resolve(o()).then(function() {
            return u;
          });
        }, function(u) {
          return r.resolve(o()).then(function() {
            return r.reject(u);
          });
        });
      };
    }, function(e, a, i) {
      function o(n) {
        return (o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
          return typeof s;
        } : function(s) {
          return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
        })(n);
      }
      i(4);
      var r, u, C, l, p, h, g, y = i(8), w = (u = function(n) {
        return new Promise(function(s, d) {
          n = l(n), (n = p(n)).beforeSend && n.beforeSend();
          var c = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          c.open(n.method, n.url), c.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(n.headers).forEach(function(m) {
            var f = n.headers[m];
            c.setRequestHeader(m, f);
          });
          var v = n.ratio;
          c.upload.addEventListener("progress", function(m) {
            var f = Math.round(m.loaded / m.total * 100), b = Math.ceil(f * v / 100);
            n.progress(Math.min(b, 100));
          }, !1), c.addEventListener("progress", function(m) {
            var f = Math.round(m.loaded / m.total * 100), b = Math.ceil(f * (100 - v) / 100) + v;
            n.progress(Math.min(b, 100));
          }, !1), c.onreadystatechange = function() {
            if (c.readyState === 4) {
              var m = c.response;
              try {
                m = JSON.parse(m);
              } catch {
              }
              var f = y.parseHeaders(c.getAllResponseHeaders()), b = { body: m, code: c.status, headers: f };
              g(c.status) ? s(b) : d(b);
            }
          }, c.send(n.data);
        });
      }, C = function(n) {
        return n.method = "POST", u(n);
      }, l = function() {
        var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (n.url && typeof n.url != "string") throw new Error("Url must be a string");
        if (n.url = n.url || "", n.method && typeof n.method != "string") throw new Error("`method` must be a string or null");
        if (n.method = n.method ? n.method.toUpperCase() : "GET", n.headers && o(n.headers) !== "object") throw new Error("`headers` must be an object or null");
        if (n.headers = n.headers || {}, n.type && (typeof n.type != "string" || !Object.values(r).includes(n.type))) throw new Error("`type` must be taken from module's «contentType» library");
        if (n.progress && typeof n.progress != "function") throw new Error("`progress` must be a function or null");
        if (n.progress = n.progress || function(s) {
        }, n.beforeSend = n.beforeSend || function(s) {
        }, n.ratio && typeof n.ratio != "number") throw new Error("`ratio` must be a number");
        if (n.ratio < 0 || n.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
        if (n.ratio = n.ratio || 90, n.accept && typeof n.accept != "string") throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (n.accept = n.accept || "*/*", n.multiple && typeof n.multiple != "boolean") throw new Error("`multiple` must be a true or false");
        if (n.multiple = n.multiple || !1, n.fieldName && typeof n.fieldName != "string") throw new Error("`fieldName` must be a string");
        return n.fieldName = n.fieldName || "files", n;
      }, p = function(n) {
        switch (n.method) {
          case "GET":
            var s = h(n.data, r.URLENCODED);
            delete n.data, n.url = /\?/.test(n.url) ? n.url + "&" + s : n.url + "?" + s;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var d = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || r.JSON;
            }(n);
            (y.isFormData(n.data) || y.isFormElement(n.data)) && (d = r.FORM), n.data = h(n.data, d), d !== w.contentType.FORM && (n.headers["content-type"] = d);
        }
        return n;
      }, h = function() {
        var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case r.URLENCODED:
            return y.urlEncode(n);
          case r.JSON:
            return y.jsonEncode(n);
          case r.FORM:
            return y.formEncode(n);
          default:
            return n;
        }
      }, g = function(n) {
        return n >= 200 && n < 300;
      }, { contentType: r = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: u, get: function(n) {
        return n.method = "GET", u(n);
      }, post: C, transport: function(n) {
        return n = l(n), y.selectFiles(n).then(function(s) {
          for (var d = new FormData(), c = 0; c < s.length; c++) d.append(n.fieldName, s[c], s[c].name);
          y.isObject(n.data) && Object.keys(n.data).forEach(function(m) {
            var f = n.data[m];
            d.append(m, f);
          });
          var v = n.beforeSend;
          return n.beforeSend = function() {
            return v(s);
          }, n.data = d, C(n);
        });
      }, selectFiles: function(n) {
        return delete (n = l(n)).beforeSend, y.selectFiles(n);
      } });
      e.exports = w;
    }, function(e, a, i) {
      i.r(a);
      var o = i(1);
      window.Promise = window.Promise || o.a;
    }, function(e, a, i) {
      (function(o) {
        var r = o !== void 0 && o || typeof self < "u" && self || window, u = Function.prototype.apply;
        function C(l, p) {
          this._id = l, this._clearFn = p;
        }
        a.setTimeout = function() {
          return new C(u.call(setTimeout, r, arguments), clearTimeout);
        }, a.setInterval = function() {
          return new C(u.call(setInterval, r, arguments), clearInterval);
        }, a.clearTimeout = a.clearInterval = function(l) {
          l && l.close();
        }, C.prototype.unref = C.prototype.ref = function() {
        }, C.prototype.close = function() {
          this._clearFn.call(r, this._id);
        }, a.enroll = function(l, p) {
          clearTimeout(l._idleTimeoutId), l._idleTimeout = p;
        }, a.unenroll = function(l) {
          clearTimeout(l._idleTimeoutId), l._idleTimeout = -1;
        }, a._unrefActive = a.active = function(l) {
          clearTimeout(l._idleTimeoutId);
          var p = l._idleTimeout;
          p >= 0 && (l._idleTimeoutId = setTimeout(function() {
            l._onTimeout && l._onTimeout();
          }, p));
        }, i(6), a.setImmediate = typeof self < "u" && self.setImmediate || o !== void 0 && o.setImmediate || this && this.setImmediate, a.clearImmediate = typeof self < "u" && self.clearImmediate || o !== void 0 && o.clearImmediate || this && this.clearImmediate;
      }).call(this, i(0));
    }, function(e, a, i) {
      (function(o, r) {
        (function(u, C) {
          if (!u.setImmediate) {
            var l, p, h, g, y, w = 1, n = {}, s = !1, d = u.document, c = Object.getPrototypeOf && Object.getPrototypeOf(u);
            c = c && c.setTimeout ? c : u, {}.toString.call(u.process) === "[object process]" ? l = function(f) {
              r.nextTick(function() {
                m(f);
              });
            } : function() {
              if (u.postMessage && !u.importScripts) {
                var f = !0, b = u.onmessage;
                return u.onmessage = function() {
                  f = !1;
                }, u.postMessage("", "*"), u.onmessage = b, f;
              }
            }() ? (g = "setImmediate$" + Math.random() + "$", y = function(f) {
              f.source === u && typeof f.data == "string" && f.data.indexOf(g) === 0 && m(+f.data.slice(g.length));
            }, u.addEventListener ? u.addEventListener("message", y, !1) : u.attachEvent("onmessage", y), l = function(f) {
              u.postMessage(g + f, "*");
            }) : u.MessageChannel ? ((h = new MessageChannel()).port1.onmessage = function(f) {
              m(f.data);
            }, l = function(f) {
              h.port2.postMessage(f);
            }) : d && "onreadystatechange" in d.createElement("script") ? (p = d.documentElement, l = function(f) {
              var b = d.createElement("script");
              b.onreadystatechange = function() {
                m(f), b.onreadystatechange = null, p.removeChild(b), b = null;
              }, p.appendChild(b);
            }) : l = function(f) {
              setTimeout(m, 0, f);
            }, c.setImmediate = function(f) {
              typeof f != "function" && (f = new Function("" + f));
              for (var b = new Array(arguments.length - 1), E = 0; E < b.length; E++) b[E] = arguments[E + 1];
              var L = { callback: f, args: b };
              return n[w] = L, l(w), w++;
            }, c.clearImmediate = v;
          }
          function v(f) {
            delete n[f];
          }
          function m(f) {
            if (s) setTimeout(m, 0, f);
            else {
              var b = n[f];
              if (b) {
                s = !0;
                try {
                  (function(E) {
                    var L = E.callback, I = E.args;
                    switch (I.length) {
                      case 0:
                        L();
                        break;
                      case 1:
                        L(I[0]);
                        break;
                      case 2:
                        L(I[0], I[1]);
                        break;
                      case 3:
                        L(I[0], I[1], I[2]);
                        break;
                      default:
                        L.apply(C, I);
                    }
                  })(b);
                } finally {
                  v(f), s = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? o === void 0 ? this : o : self);
      }).call(this, i(0), i(7));
    }, function(e, a) {
      var i, o, r = e.exports = {};
      function u() {
        throw new Error("setTimeout has not been defined");
      }
      function C() {
        throw new Error("clearTimeout has not been defined");
      }
      function l(c) {
        if (i === setTimeout) return setTimeout(c, 0);
        if ((i === u || !i) && setTimeout) return i = setTimeout, setTimeout(c, 0);
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
          i = typeof setTimeout == "function" ? setTimeout : u;
        } catch {
          i = u;
        }
        try {
          o = typeof clearTimeout == "function" ? clearTimeout : C;
        } catch {
          o = C;
        }
      })();
      var p, h = [], g = !1, y = -1;
      function w() {
        g && p && (g = !1, p.length ? h = p.concat(h) : y = -1, h.length && n());
      }
      function n() {
        if (!g) {
          var c = l(w);
          g = !0;
          for (var v = h.length; v; ) {
            for (p = h, h = []; ++y < v; ) p && p[y].run();
            y = -1, v = h.length;
          }
          p = null, g = !1, function(m) {
            if (o === clearTimeout) return clearTimeout(m);
            if ((o === C || !o) && clearTimeout) return o = clearTimeout, clearTimeout(m);
            try {
              o(m);
            } catch {
              try {
                return o.call(null, m);
              } catch {
                return o.call(this, m);
              }
            }
          }(c);
        }
      }
      function s(c, v) {
        this.fun = c, this.array = v;
      }
      function d() {
      }
      r.nextTick = function(c) {
        var v = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var m = 1; m < arguments.length; m++) v[m - 1] = arguments[m];
        h.push(new s(c, v)), h.length !== 1 || g || l(n);
      }, s.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = d, r.addListener = d, r.once = d, r.off = d, r.removeListener = d, r.removeAllListeners = d, r.emit = d, r.prependListener = d, r.prependOnceListener = d, r.listeners = function(c) {
        return [];
      }, r.binding = function(c) {
        throw new Error("process.binding is not supported");
      }, r.cwd = function() {
        return "/";
      }, r.chdir = function(c) {
        throw new Error("process.chdir is not supported");
      }, r.umask = function() {
        return 0;
      };
    }, function(e, a, i) {
      function o(u, C) {
        for (var l = 0; l < C.length; l++) {
          var p = C[l];
          p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(u, p.key, p);
        }
      }
      var r = i(9);
      e.exports = function() {
        function u() {
          (function(h, g) {
            if (!(h instanceof g)) throw new TypeError("Cannot call a class as a function");
          })(this, u);
        }
        var C, l, p;
        return C = u, p = [{ key: "urlEncode", value: function(h) {
          return r(h);
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
            w.type = "file", h.multiple && w.setAttribute("multiple", "multiple"), h.accept && w.setAttribute("accept", h.accept), w.style.display = "none", document.body.appendChild(w), w.addEventListener("change", function(n) {
              var s = n.target.files;
              g(s), document.body.removeChild(w);
            }, !1), w.click();
          });
        } }, { key: "parseHeaders", value: function(h) {
          var g = h.trim().split(/[\r\n]+/), y = {};
          return g.forEach(function(w) {
            var n = w.split(": "), s = n.shift(), d = n.join(": ");
            s && (y[s] = d);
          }), y;
        } }], (l = null) && o(C.prototype, l), p && o(C, p), u;
      }();
    }, function(e, a) {
      var i = function(r) {
        return encodeURIComponent(r).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, o = function(r, u, C, l) {
        return u = u || null, C = C || "&", l = l || null, r ? function(p) {
          for (var h = new Array(), g = 0; g < p.length; g++) p[g] && h.push(p[g]);
          return h;
        }(Object.keys(r).map(function(p) {
          var h, g, y = p;
          if (l && (y = l + "[" + y + "]"), typeof r[p] == "object" && r[p] !== null) h = o(r[p], null, C, y);
          else {
            u && (g = y, y = !isNaN(parseFloat(g)) && isFinite(g) ? u + Number(y) : y);
            var w = r[p];
            w = (w = (w = (w = w === !0 ? "1" : w) === !1 ? "0" : w) === 0 ? "0" : w) || "", h = i(y) + "=" + i(w);
          }
          return h;
        })).join(C).replace(/[!'()*]/g, "") : "";
      };
      e.exports = o;
    }]);
  });
})(U);
var P = U.exports;
const T = /* @__PURE__ */ B(P);
function x(_) {
  return _ !== void 0 && typeof _.then == "function";
}
class R {
  constructor({ config: t, onUpload: e, onError: a }) {
    this.config = t, this.onUpload = e, this.onError = a;
  }
  /**
   * Upload file selected from device
   */
  uploadSelectedFile({ onPreview: t }) {
    var i;
    const e = (o) => {
      const r = new FileReader();
      r.readAsDataURL(o), r.onload = (u) => {
        t(u.target.result);
      }, r.onerror = () => {
        this.onError("Failed to read file");
      };
    };
    let a;
    if ((i = this.config.uploader) != null && i.uploadByFile)
      a = T.selectFiles({ accept: this.config.types ?? "image/*" }).then((o) => {
        if (!o || o.length === 0)
          throw new Error("No file selected");
        e(o[0]);
        const r = this.config.uploader.uploadByFile(o[0]);
        return x(r) || console.warn("Custom uploader method uploadByFile should return a Promise"), r;
      });
    else {
      if (!this.config.endpoints.byFile) {
        this.onError("Upload endpoint (byFile) is not configured");
        return;
      }
      a = T.transport({
        url: this.config.endpoints.byFile,
        data: this.config.additionalRequestData,
        accept: this.config.types ?? "image/*",
        headers: this.config.additionalRequestHeaders,
        beforeSend: (o) => {
          o && o.length > 0 && e(o[0]);
        },
        fieldName: this.config.field ?? "image"
      }).then((o) => o.body);
    }
    a.then((o) => this.onUpload(o)).catch((o) => this.onError(o));
  }
  /**
   * Upload image by URL
   */
  uploadByUrl(t) {
    var a;
    let e;
    if ((a = this.config.uploader) != null && a.uploadByUrl)
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
    var o;
    const a = new FileReader();
    a.readAsDataURL(t), a.onload = (r) => {
      e(r.target.result);
    }, a.onerror = () => {
      this.onError("Failed to read file");
    };
    let i;
    if ((o = this.config.uploader) != null && o.uploadByFile)
      i = this.config.uploader.uploadByFile(t), x(i) || console.warn("Custom uploader method uploadByFile should return a Promise");
    else {
      if (!this.config.endpoints.byFile) {
        this.onError("Upload endpoint (byFile) is not configured");
        return;
      }
      const r = new FormData();
      r.append(this.config.field ?? "image", t), this.config.additionalRequestData && Object.entries(this.config.additionalRequestData).forEach(([u, C]) => {
        r.append(u, C);
      }), i = T.post({
        url: this.config.endpoints.byFile,
        data: r,
        type: T.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((u) => u.body);
    }
    i.then((r) => this.onUpload(r)).catch((r) => this.onError(r));
  }
}
/**
 * Gallery Tool for Editor.js
 * Supports multiple images with captions and source attribution
 * @author iXBT
 * @license MIT
 */
class D {
  constructor({ data: t, config: e, api: a, readOnly: i, block: o }) {
    this.currentLoadingItem = null, this.api = a, this.readOnly = i, this.block = o, this.config = {
      endpoints: e.endpoints ?? {},
      additionalRequestData: e.additionalRequestData,
      additionalRequestHeaders: e.additionalRequestHeaders,
      field: e.field ?? "image",
      types: e.types ?? "image/*",
      captionPlaceholder: this.api.i18n.t(e.captionPlaceholder ?? "Caption"),
      sourcePlaceholder: this.api.i18n.t(e.sourcePlaceholder ?? "Source"),
      sourceLinkPlaceholder: this.api.i18n.t(e.sourceLinkPlaceholder ?? "Source link"),
      buttonContent: e.buttonContent,
      urlButtonContent: e.urlButtonContent,
      uploader: e.uploader
    }, this.uploader = new R({
      config: this.config,
      onUpload: (r) => this.onUpload(r),
      onError: (r) => this.uploadingFailed(r)
    }), this.ui = new O({
      api: a,
      config: this.config,
      onSelectFile: () => this.selectFile(),
      onSelectUrl: (r) => this.uploadFromUrl(r),
      onColumnsChange: (r) => this.onColumnsChange(r),
      readOnly: i
    }), this._data = {
      items: [],
      layout: "grid",
      columns: 2
    }, t && t.items && (this._data = t);
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
      icon: M,
      title: "Gallery"
    };
  }
  /**
   * Renders Block content
   */
  render() {
    return this.ui.render(this._data.items, this._data.columns);
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
    return [
      { name: "grid", title: "Grid", icon: this.getGridIcon() },
      { name: "carousel", title: "Carousel", icon: this.getCarouselIcon() },
      { name: "masonry", title: "Masonry", icon: this.getMasonryIcon() }
    ].map((e) => ({
      icon: e.icon,
      label: this.api.i18n.t(e.title),
      name: e.name,
      isActive: this._data.layout === e.name,
      onActivate: () => {
        this._data.layout = e.name, this.updateLayoutClass();
      }
    }));
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
   * Update layout class on wrapper
   */
  updateLayoutClass() {
    const t = this.ui.nodes.wrapper;
    t.classList.remove("gallery-tool--grid", "gallery-tool--carousel", "gallery-tool--masonry"), t.classList.add(`gallery-tool--${this._data.layout}`);
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
  D as default
};
