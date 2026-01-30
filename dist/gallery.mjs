(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.gallery-tool{--bg-color: #f5f5f5;--border-color: #e8e8eb;--accent-color: #388ae5;--control-bg: rgba(255, 255, 255, .9);--control-hover: rgba(0, 0, 0, .05)}.gallery-tool__items{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:12px}.gallery-tool--columns-1 .gallery-tool__item{width:100%}.gallery-tool--columns-2 .gallery-tool__item{width:calc(50% - 6px)}.gallery-tool--columns-3 .gallery-tool__item{width:calc(33.333% - 8px)}.gallery-tool--columns-4 .gallery-tool__item{width:calc(25% - 9px)}.gallery-tool--columns-5 .gallery-tool__item{width:calc(20% - 10px)}.gallery-tool__item{position:relative;border:1px solid var(--border-color);border-radius:4px;overflow:hidden;background:#fff}.gallery-tool__item-image{position:relative;min-height:120px;background:var(--bg-color)}.gallery-tool__item-image img{width:100%;height:auto;display:block;object-fit:cover;max-height:200px}.gallery-tool__item-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;background-position:center;margin:35px auto;position:relative;background-color:var(--bg-color)}.gallery-tool__item-preloader:after{content:"";position:absolute;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--accent-color);left:50%;top:50%;margin:-30px 0 0 -30px;animation:gallery-preloader-spin 1s infinite linear;box-sizing:border-box}@keyframes gallery-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.gallery-tool__item-caption,.gallery-tool__item-source,.gallery-tool__item-source-link{padding:8px 10px;font-size:13px;line-height:1.4;border-top:1px solid var(--border-color);min-height:20px;outline:none}.gallery-tool__item-caption{font-weight:500}.gallery-tool__item-source{color:#666;font-size:12px}.gallery-tool__item-source-link{color:var(--accent-color);font-size:12px}.gallery-tool__item-caption[data-placeholder]:empty:before,.gallery-tool__item-source[data-placeholder]:empty:before,.gallery-tool__item-source-link[data-placeholder]:empty:before{content:attr(data-placeholder);color:#aaa;pointer-events:none}.gallery-tool__item-caption[data-placeholder]:empty:focus:before,.gallery-tool__item-source[data-placeholder]:empty:focus:before,.gallery-tool__item-source-link[data-placeholder]:empty:focus:before{display:none}.gallery-tool__item-controls{position:absolute;top:8px;right:8px;display:flex;gap:4px;opacity:0;transition:opacity .2s;z-index:10}.gallery-tool__item:hover .gallery-tool__item-controls{opacity:1}.gallery-tool__item-remove,.gallery-tool__item-move-left,.gallery-tool__item-move-right{width:28px;height:28px;border:none;border-radius:4px;background:var(--control-bg);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;color:#333;transition:background .2s}.gallery-tool__item-remove:hover,.gallery-tool__item-move-left:hover,.gallery-tool__item-move-right:hover{background:var(--control-hover)}.gallery-tool__item-remove{color:#e74c3c}.gallery-tool__add-buttons{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.gallery-tool__add-buttons .cdx-button{display:inline-flex;align-items:center;gap:6px}.gallery-tool__add-buttons .cdx-button svg{width:16px;height:16px}.gallery-tool__url-input-wrapper{flex:1;min-width:200px}.gallery-tool__url-input{width:100%;padding:8px 12px;border:1px solid var(--border-color);border-radius:4px;font-size:14px}.gallery-tool__url-input:focus{border-color:var(--accent-color);outline:none}.gallery-tool__columns-control{display:flex;align-items:center;gap:8px;margin-left:auto}.gallery-tool__columns-button{width:28px;height:28px;border:1px solid var(--border-color);border-radius:4px;background:#fff;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;transition:background .2s}.gallery-tool__columns-button:hover{background:var(--bg-color)}.gallery-tool__columns-display{font-size:13px;color:#666;min-width:45px;text-align:center}.gallery-tool--carousel .gallery-tool__items{flex-wrap:nowrap;overflow-x:auto;gap:12px;padding-bottom:8px}.gallery-tool--carousel .gallery-tool__item{flex-shrink:0;width:280px}.gallery-tool--masonry .gallery-tool__items{display:block;column-count:2;column-gap:12px}.gallery-tool--masonry.gallery-tool--columns-3 .gallery-tool__items{column-count:3}.gallery-tool--masonry.gallery-tool--columns-4 .gallery-tool__items{column-count:4}.gallery-tool--masonry.gallery-tool--columns-5 .gallery-tool__items{column-count:5}.gallery-tool--masonry .gallery-tool__item{width:100%;margin-bottom:12px;break-inside:avoid}.gallery-tool--masonry .gallery-tool__item-image img{max-height:none}.gallery-tool--empty .gallery-tool__items,.gallery-tool--loading .gallery-tool__item-image img{display:none}')),document.head.appendChild(o)}}catch(l){console.error("vite-plugin-css-injected-by-js",l)}})();
const M = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>', x = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>';
function S(_, o = null, r = {}) {
  const a = document.createElement(_);
  Array.isArray(o) ? a.classList.add(...o) : o !== null && a.classList.add(o);
  for (const i in r)
    Object.prototype.hasOwnProperty.call(r, i) && (a[i] = r[i]);
  return a;
}
class j {
  constructor({ api: o, config: r, onSelectFile: a, onSelectUrl: i, onColumnsChange: n, readOnly: e }) {
    this.currentColumns = 2, this.api = o, this.config = r, this.onSelectFile = a, this.onSelectUrl = i, this.onColumnsChange = n, this.readOnly = e, this.nodes = {
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
  render(o, r) {
    return this.currentColumns = r, this.updateColumnsClass(), o.length === 0 ? this.toggleState(
      "empty"
      /* Empty */
    ) : (o.forEach((a) => this.addItem(a)), this.toggleState(
      "filled"
      /* Filled */
    )), this.nodes.wrapper;
  }
  /**
   * Add a new item to the gallery
   */
  addItem(o) {
    const r = S("div", [this.CSS.item]), a = S("div", [this.CSS.itemImage]), i = S("div", [this.CSS.itemPreloader]), n = S("img", null, { src: o.url }), e = S("div", [this.CSS.itemCaption, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    e.dataset.placeholder = this.config.captionPlaceholder ?? "Caption", e.innerHTML = o.caption || "";
    const u = S("div", [this.CSS.itemSource, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    u.dataset.placeholder = this.config.sourcePlaceholder ?? "Source", u.innerHTML = o.source || "";
    const g = S("div", [this.CSS.itemSourceLink, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    if (g.dataset.placeholder = this.config.sourceLinkPlaceholder ?? "Source link", g.innerHTML = o.sourceLink || "", a.appendChild(i), a.appendChild(n), n.onload = () => {
      i.style.display = "none";
    }, !this.readOnly) {
      const l = this.createItemControls(r);
      r.appendChild(l);
    }
    return r.appendChild(a), r.appendChild(e), r.appendChild(u), r.appendChild(g), r.dataset.url = o.url, this.nodes.itemsContainer.appendChild(r), this.toggleState(
      "filled"
      /* Filled */
    ), r;
  }
  /**
   * Create a placeholder item for loading state
   */
  createLoadingItem(o) {
    const r = S("div", [this.CSS.item]), a = S("div", [this.CSS.itemImage]), i = S("div", [this.CSS.itemPreloader]);
    o && (i.style.backgroundImage = `url(${o})`), a.appendChild(i), r.appendChild(a);
    const n = S("div", [this.CSS.itemCaption, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    n.dataset.placeholder = this.config.captionPlaceholder ?? "Caption";
    const e = S("div", [this.CSS.itemSource, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    e.dataset.placeholder = this.config.sourcePlaceholder ?? "Source";
    const u = S("div", [this.CSS.itemSourceLink, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    return u.dataset.placeholder = this.config.sourceLinkPlaceholder ?? "Source link", r.appendChild(n), r.appendChild(e), r.appendChild(u), this.nodes.itemsContainer.appendChild(r), this.toggleState(
      "loading"
      /* Loading */
    ), r;
  }
  /**
   * Update loading item with uploaded image
   */
  fillLoadingItem(o, r) {
    const a = o.querySelector(`.${this.CSS.itemImage}`), i = o.querySelector(`.${this.CSS.itemPreloader}`), n = S("img", null, { src: r });
    if (n.onload = () => {
      i && (i.style.display = "none");
    }, a.appendChild(n), o.dataset.url = r, !this.readOnly) {
      const e = this.createItemControls(o);
      o.insertBefore(e, o.firstChild);
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
    const o = this.nodes.itemsContainer.querySelectorAll(`.${this.CSS.item}`), r = [];
    return o.forEach((a) => {
      var g, l, p;
      const i = a.dataset.url;
      if (!i) return;
      const n = ((g = a.querySelector(`.${this.CSS.itemCaption}`)) == null ? void 0 : g.innerHTML) || "", e = ((l = a.querySelector(`.${this.CSS.itemSource}`)) == null ? void 0 : l.innerHTML) || "", u = ((p = a.querySelector(`.${this.CSS.itemSourceLink}`)) == null ? void 0 : p.innerHTML) || "";
      r.push({ url: i, caption: n, source: e, sourceLink: u });
    }), r;
  }
  /**
   * Get current columns count
   */
  getColumns() {
    return this.currentColumns;
  }
  createFileButton() {
    const o = S("div", [this.CSS.button]);
    return o.innerHTML = this.config.buttonContent ?? `${x} Add Image`, o.addEventListener("click", () => this.onSelectFile()), o;
  }
  createUrlButton() {
    const o = S("div", [this.CSS.button]);
    return o.innerHTML = this.config.urlButtonContent ?? `${M} Add from URL`, o.addEventListener("click", () => this.toggleUrlInput()), o;
  }
  createUrlInput() {
    const o = S("div", [this.CSS.urlInputWrapper]);
    o.style.display = "none";
    const r = S("input", [this.CSS.urlInput, this.CSS.input], {
      type: "text"
    });
    return r.placeholder = "Paste image URL and press Enter", r.addEventListener("keydown", (a) => {
      if (a.key === "Enter") {
        a.preventDefault();
        const i = r.value.trim();
        i && (this.onSelectUrl(i), r.value = "", o.style.display = "none");
      }
      a.key === "Escape" && (o.style.display = "none", r.value = "");
    }), o.appendChild(r), o;
  }
  toggleUrlInput() {
    const o = this.nodes.urlInput, r = o.querySelector("input");
    o.style.display === "none" ? (o.style.display = "block", r.focus()) : (o.style.display = "none", r.value = "");
  }
  createColumnsControl() {
    const o = S("div", [this.CSS.columnsControl]), r = S("button", [this.CSS.columnsButton]);
    r.innerHTML = "−", r.addEventListener("click", () => this.changeColumns(-1));
    const a = S("span", [this.CSS.columnsDisplay]);
    a.textContent = `${this.currentColumns} col`;
    const i = S("button", [this.CSS.columnsButton]);
    return i.innerHTML = "+", i.addEventListener("click", () => this.changeColumns(1)), o.appendChild(r), o.appendChild(a), o.appendChild(i), o;
  }
  changeColumns(o) {
    const r = Math.min(5, Math.max(1, this.currentColumns + o));
    r !== this.currentColumns && (this.currentColumns = r, this.updateColumnsClass(), this.updateColumnsDisplay(), this.onColumnsChange(r));
  }
  updateColumnsClass() {
    for (let o = 1; o <= 5; o++)
      this.nodes.wrapper.classList.remove(`gallery-tool--columns-${o}`);
    this.nodes.wrapper.classList.add(`gallery-tool--columns-${this.currentColumns}`);
  }
  updateColumnsDisplay() {
    const o = this.nodes.columnsControl.querySelector(`.${this.CSS.columnsDisplay}`);
    o && (o.textContent = `${this.currentColumns} col`);
  }
  createItemControls(o) {
    const r = S("div", [this.CSS.itemControls]), a = S("button", [this.CSS.itemRemove]);
    a.innerHTML = "×", a.addEventListener("click", () => {
      o.remove(), this.nodes.itemsContainer.children.length === 0 && this.toggleState(
        "empty"
        /* Empty */
      );
    });
    const i = S("button", [this.CSS.itemMoveLeft]);
    i.innerHTML = "←", i.addEventListener("click", () => this.moveItem(o, -1));
    const n = S("button", [this.CSS.itemMoveRight]);
    return n.innerHTML = "→", n.addEventListener("click", () => this.moveItem(o, 1)), r.appendChild(i), r.appendChild(a), r.appendChild(n), r;
  }
  moveItem(o, r) {
    const a = Array.from(this.nodes.itemsContainer.children), n = a.indexOf(o) + r;
    n < 0 || n >= a.length || (r < 0 ? this.nodes.itemsContainer.insertBefore(o, a[n]) : this.nodes.itemsContainer.insertBefore(a[n], o));
  }
  toggleState(o) {
    this.nodes.wrapper.classList.remove(
      "gallery-tool--empty",
      "gallery-tool--loading",
      "gallery-tool--filled"
    ), this.nodes.wrapper.classList.add(`gallery-tool--${o}`);
  }
}
function P(_) {
  return _ && _.__esModule && Object.prototype.hasOwnProperty.call(_, "default") ? _.default : _;
}
var O = { exports: {} };
(function(_, o) {
  (function(r, a) {
    _.exports = a();
  })(window, function() {
    return function(r) {
      var a = {};
      function i(n) {
        if (a[n]) return a[n].exports;
        var e = a[n] = { i: n, l: !1, exports: {} };
        return r[n].call(e.exports, e, e.exports, i), e.l = !0, e.exports;
      }
      return i.m = r, i.c = a, i.d = function(n, e, u) {
        i.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: u });
      }, i.r = function(n) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
      }, i.t = function(n, e) {
        if (1 & e && (n = i(n)), 8 & e || 4 & e && typeof n == "object" && n && n.__esModule) return n;
        var u = /* @__PURE__ */ Object.create(null);
        if (i.r(u), Object.defineProperty(u, "default", { enumerable: !0, value: n }), 2 & e && typeof n != "string") for (var g in n) i.d(u, g, (function(l) {
          return n[l];
        }).bind(null, g));
        return u;
      }, i.n = function(n) {
        var e = n && n.__esModule ? function() {
          return n.default;
        } : function() {
          return n;
        };
        return i.d(e, "a", e), e;
      }, i.o = function(n, e) {
        return Object.prototype.hasOwnProperty.call(n, e);
      }, i.p = "", i(i.s = 3);
    }([function(r, a) {
      var i;
      i = /* @__PURE__ */ function() {
        return this;
      }();
      try {
        i = i || new Function("return this")();
      } catch {
        typeof window == "object" && (i = window);
      }
      r.exports = i;
    }, function(r, a, i) {
      (function(n) {
        var e = i(2), u = setTimeout;
        function g() {
        }
        function l(s) {
          if (!(this instanceof l)) throw new TypeError("Promises must be constructed via new");
          if (typeof s != "function") throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], t(s, this);
        }
        function p(s, d) {
          for (; s._state === 3; ) s = s._value;
          s._state !== 0 ? (s._handled = !0, l._immediateFn(function() {
            var c = s._state === 1 ? d.onFulfilled : d.onRejected;
            if (c !== null) {
              var y;
              try {
                y = c(s._value);
              } catch (m) {
                return void v(d.promise, m);
              }
              h(d.promise, y);
            } else (s._state === 1 ? h : v)(d.promise, s._value);
          })) : s._deferreds.push(d);
        }
        function h(s, d) {
          try {
            if (d === s) throw new TypeError("A promise cannot be resolved with itself.");
            if (d && (typeof d == "object" || typeof d == "function")) {
              var c = d.then;
              if (d instanceof l) return s._state = 3, s._value = d, void C(s);
              if (typeof c == "function") return void t((y = c, m = d, function() {
                y.apply(m, arguments);
              }), s);
            }
            s._state = 1, s._value = d, C(s);
          } catch (f) {
            v(s, f);
          }
          var y, m;
        }
        function v(s, d) {
          s._state = 2, s._value = d, C(s);
        }
        function C(s) {
          s._state === 2 && s._deferreds.length === 0 && l._immediateFn(function() {
            s._handled || l._unhandledRejectionFn(s._value);
          });
          for (var d = 0, c = s._deferreds.length; d < c; d++) p(s, s._deferreds[d]);
          s._deferreds = null;
        }
        function w(s, d, c) {
          this.onFulfilled = typeof s == "function" ? s : null, this.onRejected = typeof d == "function" ? d : null, this.promise = c;
        }
        function t(s, d) {
          var c = !1;
          try {
            s(function(y) {
              c || (c = !0, h(d, y));
            }, function(y) {
              c || (c = !0, v(d, y));
            });
          } catch (y) {
            if (c) return;
            c = !0, v(d, y);
          }
        }
        l.prototype.catch = function(s) {
          return this.then(null, s);
        }, l.prototype.then = function(s, d) {
          var c = new this.constructor(g);
          return p(this, new w(s, d, c)), c;
        }, l.prototype.finally = e.a, l.all = function(s) {
          return new l(function(d, c) {
            if (!s || s.length === void 0) throw new TypeError("Promise.all accepts an array");
            var y = Array.prototype.slice.call(s);
            if (y.length === 0) return d([]);
            var m = y.length;
            function f(E, L) {
              try {
                if (L && (typeof L == "object" || typeof L == "function")) {
                  var T = L.then;
                  if (typeof T == "function") return void T.call(L, function(I) {
                    f(E, I);
                  }, c);
                }
                y[E] = L, --m == 0 && d(y);
              } catch (I) {
                c(I);
              }
            }
            for (var b = 0; b < y.length; b++) f(b, y[b]);
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
            for (var y = 0, m = s.length; y < m; y++) s[y].then(d, c);
          });
        }, l._immediateFn = typeof n == "function" && function(s) {
          n(s);
        } || function(s) {
          u(s, 0);
        }, l._unhandledRejectionFn = function(s) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", s);
        }, a.a = l;
      }).call(this, i(5).setImmediate);
    }, function(r, a, i) {
      a.a = function(n) {
        var e = this.constructor;
        return this.then(function(u) {
          return e.resolve(n()).then(function() {
            return u;
          });
        }, function(u) {
          return e.resolve(n()).then(function() {
            return e.reject(u);
          });
        });
      };
    }, function(r, a, i) {
      function n(t) {
        return (n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
          return typeof s;
        } : function(s) {
          return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
        })(t);
      }
      i(4);
      var e, u, g, l, p, h, v, C = i(8), w = (u = function(t) {
        return new Promise(function(s, d) {
          t = l(t), (t = p(t)).beforeSend && t.beforeSend();
          var c = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          c.open(t.method, t.url), c.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function(m) {
            var f = t.headers[m];
            c.setRequestHeader(m, f);
          });
          var y = t.ratio;
          c.upload.addEventListener("progress", function(m) {
            var f = Math.round(m.loaded / m.total * 100), b = Math.ceil(f * y / 100);
            t.progress(Math.min(b, 100));
          }, !1), c.addEventListener("progress", function(m) {
            var f = Math.round(m.loaded / m.total * 100), b = Math.ceil(f * (100 - y) / 100) + y;
            t.progress(Math.min(b, 100));
          }, !1), c.onreadystatechange = function() {
            if (c.readyState === 4) {
              var m = c.response;
              try {
                m = JSON.parse(m);
              } catch {
              }
              var f = C.parseHeaders(c.getAllResponseHeaders()), b = { body: m, code: c.status, headers: f };
              v(c.status) ? s(b) : d(b);
            }
          }, c.send(t.data);
        });
      }, g = function(t) {
        return t.method = "POST", u(t);
      }, l = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (t.url && typeof t.url != "string") throw new Error("Url must be a string");
        if (t.url = t.url || "", t.method && typeof t.method != "string") throw new Error("`method` must be a string or null");
        if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && n(t.headers) !== "object") throw new Error("`headers` must be an object or null");
        if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(e).includes(t.type))) throw new Error("`type` must be taken from module's «contentType» library");
        if (t.progress && typeof t.progress != "function") throw new Error("`progress` must be a function or null");
        if (t.progress = t.progress || function(s) {
        }, t.beforeSend = t.beforeSend || function(s) {
        }, t.ratio && typeof t.ratio != "number") throw new Error("`ratio` must be a number");
        if (t.ratio < 0 || t.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
        if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != "string") throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (t.accept = t.accept || "*/*", t.multiple && typeof t.multiple != "boolean") throw new Error("`multiple` must be a true or false");
        if (t.multiple = t.multiple || !1, t.fieldName && typeof t.fieldName != "string") throw new Error("`fieldName` must be a string");
        return t.fieldName = t.fieldName || "files", t;
      }, p = function(t) {
        switch (t.method) {
          case "GET":
            var s = h(t.data, e.URLENCODED);
            delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + s : t.url + "?" + s;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var d = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || e.JSON;
            }(t);
            (C.isFormData(t.data) || C.isFormElement(t.data)) && (d = e.FORM), t.data = h(t.data, d), d !== w.contentType.FORM && (t.headers["content-type"] = d);
        }
        return t;
      }, h = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case e.URLENCODED:
            return C.urlEncode(t);
          case e.JSON:
            return C.jsonEncode(t);
          case e.FORM:
            return C.formEncode(t);
          default:
            return t;
        }
      }, v = function(t) {
        return t >= 200 && t < 300;
      }, { contentType: e = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: u, get: function(t) {
        return t.method = "GET", u(t);
      }, post: g, transport: function(t) {
        return t = l(t), C.selectFiles(t).then(function(s) {
          for (var d = new FormData(), c = 0; c < s.length; c++) d.append(t.fieldName, s[c], s[c].name);
          C.isObject(t.data) && Object.keys(t.data).forEach(function(m) {
            var f = t.data[m];
            d.append(m, f);
          });
          var y = t.beforeSend;
          return t.beforeSend = function() {
            return y(s);
          }, t.data = d, g(t);
        });
      }, selectFiles: function(t) {
        return delete (t = l(t)).beforeSend, C.selectFiles(t);
      } });
      r.exports = w;
    }, function(r, a, i) {
      i.r(a);
      var n = i(1);
      window.Promise = window.Promise || n.a;
    }, function(r, a, i) {
      (function(n) {
        var e = n !== void 0 && n || typeof self < "u" && self || window, u = Function.prototype.apply;
        function g(l, p) {
          this._id = l, this._clearFn = p;
        }
        a.setTimeout = function() {
          return new g(u.call(setTimeout, e, arguments), clearTimeout);
        }, a.setInterval = function() {
          return new g(u.call(setInterval, e, arguments), clearInterval);
        }, a.clearTimeout = a.clearInterval = function(l) {
          l && l.close();
        }, g.prototype.unref = g.prototype.ref = function() {
        }, g.prototype.close = function() {
          this._clearFn.call(e, this._id);
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
        }, i(6), a.setImmediate = typeof self < "u" && self.setImmediate || n !== void 0 && n.setImmediate || this && this.setImmediate, a.clearImmediate = typeof self < "u" && self.clearImmediate || n !== void 0 && n.clearImmediate || this && this.clearImmediate;
      }).call(this, i(0));
    }, function(r, a, i) {
      (function(n, e) {
        (function(u, g) {
          if (!u.setImmediate) {
            var l, p, h, v, C, w = 1, t = {}, s = !1, d = u.document, c = Object.getPrototypeOf && Object.getPrototypeOf(u);
            c = c && c.setTimeout ? c : u, {}.toString.call(u.process) === "[object process]" ? l = function(f) {
              e.nextTick(function() {
                m(f);
              });
            } : function() {
              if (u.postMessage && !u.importScripts) {
                var f = !0, b = u.onmessage;
                return u.onmessage = function() {
                  f = !1;
                }, u.postMessage("", "*"), u.onmessage = b, f;
              }
            }() ? (v = "setImmediate$" + Math.random() + "$", C = function(f) {
              f.source === u && typeof f.data == "string" && f.data.indexOf(v) === 0 && m(+f.data.slice(v.length));
            }, u.addEventListener ? u.addEventListener("message", C, !1) : u.attachEvent("onmessage", C), l = function(f) {
              u.postMessage(v + f, "*");
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
              return t[w] = L, l(w), w++;
            }, c.clearImmediate = y;
          }
          function y(f) {
            delete t[f];
          }
          function m(f) {
            if (s) setTimeout(m, 0, f);
            else {
              var b = t[f];
              if (b) {
                s = !0;
                try {
                  (function(E) {
                    var L = E.callback, T = E.args;
                    switch (T.length) {
                      case 0:
                        L();
                        break;
                      case 1:
                        L(T[0]);
                        break;
                      case 2:
                        L(T[0], T[1]);
                        break;
                      case 3:
                        L(T[0], T[1], T[2]);
                        break;
                      default:
                        L.apply(g, T);
                    }
                  })(b);
                } finally {
                  y(f), s = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? n === void 0 ? this : n : self);
      }).call(this, i(0), i(7));
    }, function(r, a) {
      var i, n, e = r.exports = {};
      function u() {
        throw new Error("setTimeout has not been defined");
      }
      function g() {
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
          n = typeof clearTimeout == "function" ? clearTimeout : g;
        } catch {
          n = g;
        }
      })();
      var p, h = [], v = !1, C = -1;
      function w() {
        v && p && (v = !1, p.length ? h = p.concat(h) : C = -1, h.length && t());
      }
      function t() {
        if (!v) {
          var c = l(w);
          v = !0;
          for (var y = h.length; y; ) {
            for (p = h, h = []; ++C < y; ) p && p[C].run();
            C = -1, y = h.length;
          }
          p = null, v = !1, function(m) {
            if (n === clearTimeout) return clearTimeout(m);
            if ((n === g || !n) && clearTimeout) return n = clearTimeout, clearTimeout(m);
            try {
              n(m);
            } catch {
              try {
                return n.call(null, m);
              } catch {
                return n.call(this, m);
              }
            }
          }(c);
        }
      }
      function s(c, y) {
        this.fun = c, this.array = y;
      }
      function d() {
      }
      e.nextTick = function(c) {
        var y = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var m = 1; m < arguments.length; m++) y[m - 1] = arguments[m];
        h.push(new s(c, y)), h.length !== 1 || v || l(t);
      }, s.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, e.title = "browser", e.browser = !0, e.env = {}, e.argv = [], e.version = "", e.versions = {}, e.on = d, e.addListener = d, e.once = d, e.off = d, e.removeListener = d, e.removeAllListeners = d, e.emit = d, e.prependListener = d, e.prependOnceListener = d, e.listeners = function(c) {
        return [];
      }, e.binding = function(c) {
        throw new Error("process.binding is not supported");
      }, e.cwd = function() {
        return "/";
      }, e.chdir = function(c) {
        throw new Error("process.chdir is not supported");
      }, e.umask = function() {
        return 0;
      };
    }, function(r, a, i) {
      function n(u, g) {
        for (var l = 0; l < g.length; l++) {
          var p = g[l];
          p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(u, p.key, p);
        }
      }
      var e = i(9);
      r.exports = function() {
        function u() {
          (function(h, v) {
            if (!(h instanceof v)) throw new TypeError("Cannot call a class as a function");
          })(this, u);
        }
        var g, l, p;
        return g = u, p = [{ key: "urlEncode", value: function(h) {
          return e(h);
        } }, { key: "jsonEncode", value: function(h) {
          return JSON.stringify(h);
        } }, { key: "formEncode", value: function(h) {
          if (this.isFormData(h)) return h;
          if (this.isFormElement(h)) return new FormData(h);
          if (this.isObject(h)) {
            var v = new FormData();
            return Object.keys(h).forEach(function(C) {
              var w = h[C];
              v.append(C, w);
            }), v;
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
          return new Promise(function(v, C) {
            var w = document.createElement("INPUT");
            w.type = "file", h.multiple && w.setAttribute("multiple", "multiple"), h.accept && w.setAttribute("accept", h.accept), w.style.display = "none", document.body.appendChild(w), w.addEventListener("change", function(t) {
              var s = t.target.files;
              v(s), document.body.removeChild(w);
            }, !1), w.click();
          });
        } }, { key: "parseHeaders", value: function(h) {
          var v = h.trim().split(/[\r\n]+/), C = {};
          return v.forEach(function(w) {
            var t = w.split(": "), s = t.shift(), d = t.join(": ");
            s && (C[s] = d);
          }), C;
        } }], (l = null) && n(g.prototype, l), p && n(g, p), u;
      }();
    }, function(r, a) {
      var i = function(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, n = function(e, u, g, l) {
        return u = u || null, g = g || "&", l = l || null, e ? function(p) {
          for (var h = new Array(), v = 0; v < p.length; v++) p[v] && h.push(p[v]);
          return h;
        }(Object.keys(e).map(function(p) {
          var h, v, C = p;
          if (l && (C = l + "[" + C + "]"), typeof e[p] == "object" && e[p] !== null) h = n(e[p], null, g, C);
          else {
            u && (v = C, C = !isNaN(parseFloat(v)) && isFinite(v) ? u + Number(C) : C);
            var w = e[p];
            w = (w = (w = (w = w === !0 ? "1" : w) === !1 ? "0" : w) === 0 ? "0" : w) || "", h = i(C) + "=" + i(w);
          }
          return h;
        })).join(g).replace(/[!'()*]/g, "") : "";
      };
      r.exports = n;
    }]);
  });
})(O);
var B = O.exports;
const k = /* @__PURE__ */ P(B);
function F(_) {
  return _ !== void 0 && typeof _.then == "function";
}
class R {
  constructor({ config: o, onUpload: r, onError: a }) {
    this.config = o, this.onUpload = r, this.onError = a;
  }
  /**
   * Upload file selected from device
   */
  uploadSelectedFile({ onPreview: o }) {
    var i;
    const r = (n) => {
      const e = new FileReader();
      e.readAsDataURL(n), e.onload = (u) => {
        o(u.target.result);
      };
    };
    let a;
    (i = this.config.uploader) != null && i.uploadByFile ? a = k.selectFiles({ accept: this.config.types ?? "image/*" }).then((n) => {
      r(n[0]);
      const e = this.config.uploader.uploadByFile(n[0]);
      return F(e) || console.warn("Custom uploader method uploadByFile should return a Promise"), e;
    }) : a = k.transport({
      url: this.config.endpoints.byFile,
      data: this.config.additionalRequestData,
      accept: this.config.types ?? "image/*",
      headers: this.config.additionalRequestHeaders,
      beforeSend: (n) => {
        r(n[0]);
      },
      fieldName: this.config.field ?? "image"
    }).then((n) => n.body), a.then((n) => this.onUpload(n)).catch((n) => this.onError(n));
  }
  /**
   * Upload image by URL
   */
  uploadByUrl(o) {
    var a;
    let r;
    (a = this.config.uploader) != null && a.uploadByUrl ? (r = this.config.uploader.uploadByUrl(o), F(r) || console.warn("Custom uploader method uploadByUrl should return a Promise")) : r = k.post({
      url: this.config.endpoints.byUrl,
      data: {
        url: o,
        ...this.config.additionalRequestData
      },
      type: k.contentType.JSON,
      headers: this.config.additionalRequestHeaders
    }).then((i) => i.body), r.then((i) => this.onUpload(i)).catch((i) => this.onError(i));
  }
  /**
   * Upload file from drag-n-drop or paste
   */
  uploadByFile(o, { onPreview: r }) {
    var n;
    const a = new FileReader();
    a.readAsDataURL(o), a.onload = (e) => {
      r(e.target.result);
    };
    let i;
    if ((n = this.config.uploader) != null && n.uploadByFile)
      i = this.config.uploader.uploadByFile(o), F(i) || console.warn("Custom uploader method uploadByFile should return a Promise");
    else {
      const e = new FormData();
      e.append(this.config.field ?? "image", o), this.config.additionalRequestData && Object.entries(this.config.additionalRequestData).forEach(([u, g]) => {
        e.append(u, g);
      }), i = k.post({
        url: this.config.endpoints.byFile,
        data: e,
        type: k.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((u) => u.body);
    }
    i.then((e) => this.onUpload(e)).catch((e) => this.onError(e));
  }
}
/**
 * Gallery Tool for Editor.js
 * Supports multiple images with captions and source attribution
 * @author iXBT
 * @license MIT
 */
class U {
  constructor({ data: o, config: r, api: a, readOnly: i, block: n }) {
    this.currentLoadingItem = null, this.api = a, this.readOnly = i, this.block = n, this.config = {
      endpoints: r.endpoints ?? {},
      additionalRequestData: r.additionalRequestData,
      additionalRequestHeaders: r.additionalRequestHeaders,
      field: r.field ?? "image",
      types: r.types ?? "image/*",
      captionPlaceholder: this.api.i18n.t(r.captionPlaceholder ?? "Caption"),
      sourcePlaceholder: this.api.i18n.t(r.sourcePlaceholder ?? "Source"),
      sourceLinkPlaceholder: this.api.i18n.t(r.sourceLinkPlaceholder ?? "Source link"),
      buttonContent: r.buttonContent,
      urlButtonContent: r.urlButtonContent,
      uploader: r.uploader
    }, this.uploader = new R({
      config: this.config,
      onUpload: (e) => this.onUpload(e),
      onError: (e) => this.uploadingFailed(e)
    }), this.ui = new j({
      api: a,
      config: this.config,
      onSelectFile: () => this.selectFile(),
      onSelectUrl: (e) => this.uploadFromUrl(e),
      onColumnsChange: (e) => this.onColumnsChange(e),
      readOnly: i
    }), this._data = {
      items: [],
      layout: "grid",
      columns: 2
    }, o && o.items && (this._data = o);
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
      icon: x,
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
   * Validate data
   */
  validate(o) {
    return o.items.length > 0;
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
    ].map((r) => ({
      icon: r.icon,
      label: this.api.i18n.t(r.title),
      name: r.name,
      isActive: this._data.layout === r.name,
      onActivate: () => {
        this._data.layout = r.name, this.updateLayoutClass();
      }
    }));
  }
  /**
   * Handle file selection
   */
  selectFile() {
    this.uploader.uploadSelectedFile({
      onPreview: (o) => {
        this.currentLoadingItem = this.ui.createLoadingItem(o);
      }
    });
  }
  /**
   * Handle URL upload
   */
  uploadFromUrl(o) {
    this.currentLoadingItem = this.ui.createLoadingItem(o), this.uploader.uploadByUrl(o);
  }
  /**
   * File upload callback
   */
  onUpload(o) {
    o.success && o.file ? this.currentLoadingItem ? (this.ui.fillLoadingItem(this.currentLoadingItem, o.file.url), this.currentLoadingItem = null) : this.ui.addItem({
      url: o.file.url,
      caption: "",
      source: "",
      sourceLink: ""
    }) : this.uploadingFailed("incorrect response: " + JSON.stringify(o));
  }
  /**
   * Handle upload errors
   */
  uploadingFailed(o) {
    console.error("Gallery Tool: uploading failed", o), this.currentLoadingItem && (this.currentLoadingItem.remove(), this.currentLoadingItem = null), this.api.notifier.show({
      message: this.api.i18n.t("Couldn't upload image. Please try another."),
      style: "error"
    });
  }
  /**
   * Handle columns change
   */
  onColumnsChange(o) {
    this._data.columns = o;
  }
  /**
   * Update layout class on wrapper
   */
  updateLayoutClass() {
    const o = this.ui.nodes.wrapper;
    o.classList.remove("gallery-tool--grid", "gallery-tool--carousel", "gallery-tool--masonry"), o.classList.add(`gallery-tool--${this._data.layout}`);
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
  U as default
};
