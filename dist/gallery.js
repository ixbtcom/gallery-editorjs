(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`:root{--ej-radius-sm: 6px;--ej-radius-md: 8px;--ej-radius-lg: 12px;--ej-bg-page: #fff;--ej-bg-surface: #fff;--ej-bg-muted: var(--gray-50, #f9fafb);--ej-bg-input: #fff;--ej-ring: rgba(3, 7, 18, .1);--ej-ring-focus: var(--primary-600, #2563eb);--ej-border: var(--gray-200, #e5e7eb);--ej-border-strong: rgba(3, 7, 18, .05);--ej-text: var(--gray-950, #030712);--ej-text-secondary: var(--gray-500, #6b7280);--ej-text-muted: var(--gray-400, #9ca3af);--ej-text-on-primary: #fff;--ej-primary: var(--primary-600, #2563eb);--ej-primary-hover: var(--primary-700, #1d4ed8);--ej-primary-light: var(--primary-50, #eff6ff);--ej-primary-muted: var(--primary-100, #dbeafe);--ej-success-bg: var(--success-50, #f0fdf4);--ej-success-border: var(--success-500, #22c55e);--ej-success-text: var(--success-700, #15803d);--ej-warning-bg: var(--warning-50, #fffbeb);--ej-warning-border: var(--warning-500, #f59e0b);--ej-warning-text: var(--warning-700, #b45309);--ej-danger: var(--danger-600, #dc2626);--ej-danger-bg: var(--danger-50, #fef2f2);--ej-danger-border: var(--danger-500, #ef4444);--ej-danger-text: var(--danger-700, #b91c1c);--ej-danger-hover-bg: var(--danger-100, #fee2e2);--ej-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, .05);--ej-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1);--ej-transition: 75ms ease;--ej-control-bg: rgba(255, 255, 255, .9);--ej-control-hover: rgba(0, 0, 0, .05);--ej-icon-color: var(--gray-400, #9ca3af)}.dark{--ej-bg-page: var(--gray-900, #111827);--ej-bg-surface: var(--gray-900, #111827);--ej-bg-muted: rgba(255, 255, 255, .05);--ej-bg-input: rgba(255, 255, 255, .05);--ej-ring: rgba(255, 255, 255, .2);--ej-ring-focus: var(--primary-500, #3b82f6);--ej-border: rgba(255, 255, 255, .1);--ej-border-strong: rgba(255, 255, 255, .1);--ej-text: #fff;--ej-text-secondary: var(--gray-400, #9ca3af);--ej-text-muted: var(--gray-500, #6b7280);--ej-text-on-primary: #fff;--ej-control-bg: rgba(30, 30, 30, .9);--ej-control-hover: rgba(255, 255, 255, .1);--ej-icon-color: var(--gray-500, #6b7280);--ej-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, .3);--ej-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, .3), 0 2px 4px -2px rgba(0, 0, 0, .2)}@keyframes ej-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.gallery-tool{margin:2rem 0;max-width:100%;box-sizing:border-box;overflow:hidden}.gallery-tool__items{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:12px;max-width:100%;box-sizing:border-box}.gallery-tool--columns-1 .gallery-tool__item{flex:0 0 100%;max-width:100%}.gallery-tool--columns-2 .gallery-tool__item{flex:0 0 calc(50% - 6px);max-width:calc(50% - 6px)}.gallery-tool--columns-3 .gallery-tool__item{flex:0 0 calc(33.333% - 8px);max-width:calc(33.333% - 8px)}.gallery-tool--columns-4 .gallery-tool__item{flex:0 0 calc(25% - 9px);max-width:calc(25% - 9px)}.gallery-tool--columns-5 .gallery-tool__item{flex:0 0 calc(20% - 10px);max-width:calc(20% - 10px)}@media (max-width: 639px){.gallery-tool--columns-3 .gallery-tool__item,.gallery-tool--columns-4 .gallery-tool__item,.gallery-tool--columns-5 .gallery-tool__item{flex:0 0 calc(50% - 6px);max-width:calc(50% - 6px)}}.gallery-tool__item{position:relative;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);overflow:hidden;background:var(--ej-bg-muted);box-sizing:border-box;min-width:0;box-shadow:var(--ej-shadow-sm);transition:box-shadow var(--ej-transition)}.gallery-tool__item:hover{box-shadow:var(--ej-shadow-md)}.gallery-tool__item--plain,.gallery-tool__item--plain:hover{border-radius:0}.gallery-tool__item-image{position:relative;min-height:120px;background:var(--ej-bg-muted);overflow:hidden}.gallery-tool__item-image img{width:100%;height:auto;display:block;object-fit:contain;max-height:400px;max-width:100%}.gallery-tool__item--unlimited-height .gallery-tool__item-image img{max-height:none}.gallery-tool__item-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;background-position:center;margin:35px auto;position:relative;background-color:var(--ej-bg-muted)}.gallery-tool__item-preloader:after{content:"";position:absolute;width:60px;height:60px;border-radius:50%;border:2px solid var(--ej-border);border-top-color:var(--ej-primary);left:50%;top:50%;margin:-30px 0 0 -30px;animation:ej-spin 1s infinite linear;box-sizing:border-box}.gallery-tool__item-caption,.gallery-tool__item-source,.gallery-tool__item-source-link{margin:.5rem;width:calc(100% - 1rem);background:#fff;font-weight:500}.gallery-tool__item-source{color:var(--ej-text-secondary)}.gallery-tool__item-source-link{color:var(--ej-primary)}.gallery-tool__item-caption[data-placeholder]:empty:before,.gallery-tool__item-source[data-placeholder]:empty:before,.gallery-tool__item-source-link[data-placeholder]:empty:before{content:attr(data-placeholder);color:var(--ej-text-muted);pointer-events:none}.gallery-tool__item-caption[data-placeholder]:empty:focus:before,.gallery-tool__item-source[data-placeholder]:empty:focus:before,.gallery-tool__item-source-link[data-placeholder]:empty:focus:before{display:none}.gallery-tool__item-dimensions{position:absolute;bottom:8px;left:8px;padding:2px 6px;background:#0009;color:#fff;font-size:11px;font-family:monospace;border-radius:var(--ej-radius-sm);z-index:5;pointer-events:none}.gallery-tool__ai-mark{display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;padding:0 5px;border-radius:999px;border:1px solid rgba(255,255,255,.75);background:#111827;color:#fff;font-size:11px;font-weight:700;letter-spacing:-.02em;line-height:1;box-shadow:0 2px 8px #00000047;box-sizing:border-box}.gallery-tool__item-ai-badge{position:absolute;right:8px;bottom:8px;z-index:6;display:inline-flex;cursor:help}.gallery-tool__item-controls{position:absolute;top:8px;right:8px;display:flex;gap:4px;opacity:0;transition:opacity .2s;z-index:10}.gallery-tool__item:hover .gallery-tool__item-controls,.gallery-tool__item:focus-within .gallery-tool__item-controls{opacity:1}.gallery-tool__item-remove,.gallery-tool__item-move-left,.gallery-tool__item-move-right,.gallery-tool__item-settings{width:32px;height:32px;border:none;border-radius:var(--ej-radius-sm);background:var(--ej-control-bg);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;color:var(--ej-text);transition:background .2s}.gallery-tool__item-remove:hover,.gallery-tool__item-move-left:hover,.gallery-tool__item-move-right:hover,.gallery-tool__item-settings:hover{background:var(--ej-control-hover)}.gallery-tool__item-remove{color:var(--ej-danger)}.gallery-tool__add-buttons{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.gallery-tool__add-buttons .cdx-button{display:inline-flex;align-items:center;gap:6px}.gallery-tool__add-buttons .cdx-button svg{width:16px;height:16px}.gallery-tool__add-buttons .gallery-tool__ai-button{gap:8px}.gallery-tool__add-buttons .gallery-tool__clipboard-button{gap:6px}.gallery-tool__add-buttons .gallery-tool__ai-button .gallery-tool__ai-mark{min-width:22px;height:22px;font-size:10px}.gallery-tool__url-input-wrapper{flex:1;min-width:200px}.gallery-tool__url-input{width:100%;padding:8px 12px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);font-size:14px;background:var(--ej-bg-input);color:var(--ej-text);transition:border-color var(--ej-transition)}.gallery-tool__url-input:focus{border-color:var(--ej-ring-focus);outline:none;box-shadow:0 0 0 1px var(--ej-ring-focus)}.gallery-tool__columns-control{display:flex;align-items:center;gap:8px;margin-left:auto}.gallery-tool__columns-button{width:32px;height:32px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);background:var(--ej-bg-surface);cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;transition:background .2s;color:var(--ej-text)}.gallery-tool__columns-button:hover{background:var(--ej-bg-muted)}.gallery-tool__columns-display{font-size:13px;color:var(--ej-text-secondary);min-width:45px;text-align:center}.gallery-tool--carousel{max-width:100%;overflow:hidden;box-sizing:border-box}.gallery-tool--carousel .gallery-tool__items{flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;gap:12px;padding-bottom:8px;max-width:100%;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:var(--ej-border) transparent}.gallery-tool--carousel .gallery-tool__items::-webkit-scrollbar{height:6px}.gallery-tool--carousel .gallery-tool__items::-webkit-scrollbar-track{background:transparent}.gallery-tool--carousel .gallery-tool__items::-webkit-scrollbar-thumb{background:var(--ej-border);border-radius:3px}.gallery-tool--carousel .gallery-tool__item{flex:0 0 auto;width:clamp(200px,60vw,280px);max-width:calc(100% - 24px);min-width:200px}.gallery-tool--carousel .gallery-tool__item-image img{max-height:280px}.gallery-tool--carousel .gallery-tool__item--unlimited-height .gallery-tool__item-image img{max-height:none}.gallery-tool--masonry .gallery-tool__items{display:block;column-count:2;column-gap:12px;max-width:100%}.gallery-tool--masonry.gallery-tool--columns-3 .gallery-tool__items{column-count:3}.gallery-tool--masonry.gallery-tool--columns-4 .gallery-tool__items{column-count:4}.gallery-tool--masonry.gallery-tool--columns-5 .gallery-tool__items{column-count:5}@media (max-width: 639px){.gallery-tool--masonry.gallery-tool--columns-3 .gallery-tool__items,.gallery-tool--masonry.gallery-tool--columns-4 .gallery-tool__items,.gallery-tool--masonry.gallery-tool--columns-5 .gallery-tool__items{column-count:2}}.gallery-tool--masonry .gallery-tool__item{width:100%;max-width:100%;margin-bottom:12px;break-inside:avoid}.gallery-tool--masonry .gallery-tool__item-image img{max-height:none;max-width:100%}.gallery-tool--empty .gallery-tool__items,.gallery-tool--loading .gallery-tool__item-image img{display:none}.gallery-tool--stretched .gallery-tool__item-image img{max-height:none}.gallery-tool__item-crop{width:32px;height:32px;border:none;border-radius:var(--ej-radius-sm);background:var(--ej-control-bg);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;color:var(--ej-text);transition:background .2s}.gallery-tool__item-crop:hover{background:var(--ej-control-hover)}.gallery-tool__item-crop:disabled{cursor:not-allowed;opacity:.45}.gallery-tool__item-settings-wrapper{position:relative}.gallery-tool__item-settings-panel{position:absolute;top:calc(100% + 4px);right:0;z-index:20;display:grid;min-width:240px;padding:8px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);background:var(--ej-bg-surface);box-shadow:var(--ej-shadow-md)}.gallery-tool__item-settings-panel[hidden]{display:none}.gallery-tool__item-setting{display:flex;align-items:center;gap:8px;min-height:36px;padding:6px 8px;color:var(--ej-text);font-size:13px;cursor:pointer}.gallery-tool__item-setting:hover{background:var(--ej-bg-muted)}.gallery-tool__item-setting input{width:16px;height:16px;margin:0}.gallery-tool__item--cropped{border-left:3px solid var(--ej-primary)}.gallery-tool__item--cropped .gallery-tool__item-image:after{content:"✂";position:absolute;bottom:8px;right:8px;padding:2px 6px;background:var(--ej-primary);color:var(--ej-text-on-primary);font-size:11px;border-radius:var(--ej-radius-sm);z-index:5;pointer-events:none}.gallery-tool__item[data-ai-generated].gallery-tool__item--cropped .gallery-tool__item-image:after{right:44px}.gallery-crop-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000;background:#000000d9;display:flex;align-items:center;justify-content:center;padding:20px}.gallery-crop-modal__container{background:var(--ej-bg-surface, #fff);border-radius:var(--ej-radius-lg);box-shadow:var(--ej-shadow-md);max-width:90vw;max-height:90vh;display:flex;flex-direction:column;overflow:hidden}.gallery-crop-modal__image-wrapper{flex:1;overflow:hidden;max-height:calc(90vh - 80px);display:flex;align-items:center;justify-content:center}.gallery-crop-modal__image-wrapper img{max-width:100%;display:block}.gallery-crop-modal__options{display:flex;flex-direction:column;gap:12px;padding:12px 16px 0;background:var(--ej-bg-muted, #f5f5f5)}.gallery-crop-modal__option{display:inline-flex;align-items:center;gap:8px;color:var(--ej-text);cursor:pointer;font-size:14px}.gallery-crop-modal__option input{width:18px;height:18px;margin:0}.gallery-crop-modal__aspect-ratios{display:flex;flex-wrap:wrap;gap:8px;padding:0;border:0;margin:0}.gallery-crop-modal__aspect-ratios-label{width:100%;color:var(--ej-text-secondary);font-size:13px;font-weight:500}.gallery-crop-modal__aspect-ratio{display:inline-flex;position:relative;cursor:pointer}.gallery-crop-modal__aspect-ratio input{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:100%;height:100%;margin:0;opacity:0;cursor:pointer}.gallery-crop-modal__aspect-ratio-label{min-width:52px;padding:6px 10px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-sm);background:var(--ej-bg-surface);color:var(--ej-text);font-size:13px;line-height:1;text-align:center}.gallery-crop-modal__aspect-ratio input:checked+.gallery-crop-modal__aspect-ratio-label{border-color:var(--ej-primary);background:var(--ej-primary-light);color:var(--ej-primary)}.gallery-crop-modal__aspect-ratio input:focus-visible+.gallery-crop-modal__aspect-ratio-label{outline:2px solid var(--ej-ring-focus);outline-offset:2px}.gallery-crop-modal__actions{display:flex;gap:8px;padding:12px 16px;justify-content:center;background:var(--ej-bg-muted, #f5f5f5);border-top:1px solid var(--ej-border)}.gallery-crop-modal__btn{padding:8px 20px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);background:var(--ej-bg-surface, #fff);color:var(--ej-text);font-size:14px;font-weight:500;cursor:pointer;transition:background var(--ej-transition),border-color var(--ej-transition)}.gallery-crop-modal__btn:hover{background:var(--ej-bg-muted)}.gallery-crop-modal__btn--primary{background:var(--ej-primary);color:var(--ej-text-on-primary);border-color:var(--ej-primary)}.gallery-crop-modal__btn--primary:hover{opacity:.9}.gallery-crop-modal__btn--danger{color:var(--ej-danger);border-color:var(--ej-danger)}.gallery-crop-modal__btn--danger:hover{background:var(--ej-danger);color:#fff}.gallery-tool__item-cover{width:28px;height:28px;border:none;border-radius:6px;background:#0000008c;color:#fbbf24;font-size:15px;line-height:1;cursor:pointer;display:inline-flex;align-items:center;justify-content:center}.gallery-tool__item-cover:hover{background:#000000bf}.gallery-tool__item[data-cover]{outline:2px solid #3b82f6;outline-offset:-2px}.gallery-tool__item[data-cover] .gallery-tool__item-cover{color:#3b82f6}.gallery-tool__item[data-cover]:after{content:"Обложка";position:absolute;top:6px;left:6px;background:#3b82f6e6;color:#fff;font-size:11px;font-weight:600;padding:2px 8px;border-radius:4px;pointer-events:none;z-index:3}.gallery-tool__item[data-cover][data-cover-overridden]:after{content:"Обложка · перекрыта вручную";background:#4b5563f2}.ai-image-tool__generator{display:grid;gap:14px;margin-top:14px;padding:16px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-lg);background:var(--ej-bg-muted);color:var(--ej-text)}.ai-image-tool__generator [hidden]{display:none}.ai-image-tool__prompt-section,.ai-image-tool__selection,.ai-image-tool__metadata{display:grid;gap:10px}.ai-image-tool__sessions{display:grid;gap:8px;padding:12px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);background:var(--ej-bg-surface)}.ai-image-tool__sessions-title{color:var(--ej-text-secondary);font-size:12px;font-weight:600}.ai-image-tool__sessions-list{display:grid;gap:8px}.ai-image-tool__session{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:10px;padding:8px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);background:var(--ej-bg-muted)}.ai-image-tool__session-preview{display:flex;align-items:center;justify-content:center;width:64px;height:44px;overflow:hidden;border-radius:var(--ej-radius-sm);background:var(--ej-bg-input)}.ai-image-tool__session-thumb{width:100%;height:100%;object-fit:cover}.ai-image-tool__session-body{display:grid;gap:2px;min-width:0}.ai-image-tool__session-title{overflow:hidden;color:var(--ej-text);font-size:13px;font-weight:600;text-overflow:ellipsis;white-space:nowrap}a.ai-image-tool__session-title{color:var(--ej-primary);text-decoration:none}a.ai-image-tool__session-title:hover{text-decoration:underline}.ai-image-tool__session-meta{color:var(--ej-text-secondary);font-size:12px}.ai-image-tool__session-prompt{overflow:hidden;color:var(--ej-text-muted);font-size:12px;text-overflow:ellipsis;white-space:nowrap}.ai-image-tool__session-actions{display:flex;align-items:center;gap:6px}.ai-image-tool__session-close{width:28px;height:28px;padding:0;border:1px solid var(--ej-border);border-radius:var(--ej-radius-sm);background:var(--ej-bg-input);color:var(--ej-text-secondary);font-size:16px;line-height:1;cursor:pointer;transition:background var(--ej-transition),color var(--ej-transition)}.ai-image-tool__session-close:hover{background:var(--ej-danger-bg);border-color:var(--ej-danger-border);color:var(--ej-danger-text)}.ai-image-tool__prompt-actions,.ai-image-tool__history{display:flex;flex-wrap:wrap;gap:8px}.ai-image-tool__prompt-assistance{display:flex;flex-wrap:wrap;align-items:center;gap:8px}.ai-image-tool__prompt-assistance .ai-image-tool__action,.ai-image-tool__action--generate{margin-inline-start:auto}.ai-image-tool__aspect-ratio-field{display:flex;flex-wrap:wrap;align-items:center;gap:8px}.ai-image-tool__aspect-ratio-label{color:var(--ej-text-secondary);font-size:14px}.ai-image-tool__aspect-ratios{display:inline-flex;width:fit-content;overflow:hidden;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);background:var(--ej-bg-input)}.ai-image-tool__aspect-ratio-option{position:relative;min-width:58px;cursor:pointer;color:var(--ej-text-secondary);font-size:13px;font-weight:600;text-align:center}.ai-image-tool__aspect-ratio-option span{display:block;padding:8px 12px}.ai-image-tool__aspect-ratio-input{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:100%;height:100%;margin:0;opacity:0;cursor:pointer}.ai-image-tool__aspect-ratio-input:checked+span{background:var(--ej-primary);color:var(--ej-text-on-primary)}.ai-image-tool__aspect-ratio-input:focus-visible+span{outline:2px solid var(--ej-ring-focus);outline-offset:-2px}.ai-image-tool__aspect-ratio-input:disabled+span{cursor:not-allowed;opacity:.65}.ai-image-tool__resolution-option{display:inline-flex;align-items:center;min-height:44px;gap:8px;cursor:pointer;color:var(--ej-text);font-size:14px}.ai-image-tool__resolution-checkbox{width:18px;height:18px;margin:0;accent-color:var(--ej-primary)}.ai-image-tool__caption-option{display:inline-flex;align-items:center;width:fit-content;min-height:44px;gap:9px;cursor:pointer;color:var(--ej-text);font-size:14px}.ai-image-tool__caption-checkbox{width:18px;height:18px;margin:0;accent-color:var(--ej-primary)}.ai-image-tool__label{color:var(--ej-text);font-size:14px;font-weight:600}.ai-image-tool__prompt,.ai-image-tool__metadata-input{box-sizing:border-box;width:100%;padding:10px 12px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);outline:none;background:var(--ej-bg-input);color:var(--ej-text);font:inherit;line-height:1.5;transition:border-color var(--ej-transition),box-shadow var(--ej-transition)}.ai-image-tool__prompt{min-height:88px;resize:vertical}.ai-image-tool__metadata-input{min-height:44px}.ai-image-tool__metadata-caption{resize:vertical}.ai-image-tool__prompt:focus-visible,.ai-image-tool__metadata-input:focus-visible,.ai-image-tool__caption-checkbox:focus-visible,.ai-image-tool__action:focus-visible,.ai-image-tool__candidate:focus-visible,.ai-image-tool__history-item:focus-visible{outline:2px solid var(--ej-ring-focus);outline-offset:2px}.ai-image-tool__action,.ai-image-tool__history-item{min-height:44px;padding:9px 14px;border:1px solid transparent;border-radius:var(--ej-radius-md);cursor:pointer;font:inherit;font-weight:600;transition:background-color var(--ej-transition),border-color var(--ej-transition),box-shadow var(--ej-transition)}.ai-image-tool__action{justify-self:start;background:var(--ej-primary);color:var(--ej-text-on-primary)}.ai-image-tool__action:hover:not(:disabled){background:var(--ej-primary-hover)}.ai-image-tool__action--secondary,.ai-image-tool__history-item{border-color:var(--ej-border);background:var(--ej-bg-surface);color:var(--ej-text)}.ai-image-tool__action--secondary:hover:not(:disabled),.ai-image-tool__history-item:hover,.ai-image-tool__history-item[aria-current=true]{border-color:var(--ej-primary);background:var(--ej-primary-muted)}.ai-image-tool__action:disabled,.ai-image-tool__prompt:disabled,.ai-image-tool__metadata-input:disabled{cursor:not-allowed;opacity:.6}.ai-image-tool__status,.ai-image-tool__caption-status,.ai-image-tool__history-status{min-height:21px;color:var(--ej-text-secondary);font-size:14px}.ai-image-tool__error:not([hidden]){padding:10px 12px;border:1px solid var(--ej-danger-border);border-radius:var(--ej-radius-md);background:var(--ej-danger-bg);color:var(--ej-danger-text);font-size:14px}.ai-image-tool__candidates{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(220px,100%),1fr));gap:12px}.ai-image-tool__candidate{position:relative;min-width:0;padding:3px;overflow:hidden;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);cursor:pointer;background:var(--ej-bg-surface);box-shadow:var(--ej-shadow-sm)}.ai-image-tool__candidate:hover,.ai-image-tool__candidate[aria-pressed=true]{border-color:var(--ej-primary)}.ai-image-tool__candidate[aria-pressed=true]{box-shadow:0 0 0 2px var(--ej-primary-muted)}.ai-image-tool__candidate[aria-pressed=true]:after{content:"Выбрано";position:absolute;right:8px;bottom:8px;padding:4px 7px;border-radius:var(--ej-radius-sm);background:var(--ej-primary);color:var(--ej-text-on-primary);font-size:12px;font-weight:600}.ai-image-tool__candidate-image,.ai-image-tool__selected-preview{display:block;width:100%;aspect-ratio:16 / 9;border-radius:calc(var(--ej-radius-md) - 3px);object-fit:cover}.ai-image-tool__caption-status[data-error]{color:var(--ej-danger-text)}.ai-image-tool__history-item[aria-current=true]{box-shadow:inset 0 0 0 1px var(--ej-primary);font-weight:700}@media (min-width: 640px){.ai-image-tool__generator{padding:20px}.ai-image-tool__selection{grid-template-columns:1fr auto}.ai-image-tool__selection>:not(.ai-image-tool__action){grid-column:1 / -1}}@media (prefers-reduced-motion: reduce){.ai-image-tool__action,.ai-image-tool__candidate,.ai-image-tool__history-item,.ai-image-tool__prompt,.ai-image-tool__metadata-input{transition-duration:.01ms}}/*!
 * Cropper.js v1.6.2
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-04-21T07:43:02.731Z
 */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;-ms-touch-action:none;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cropper-container img{backface-visibility:hidden;display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-wrap-box,.cropper-canvas,.cropper-drag-box,.cropper-crop-box,.cropper-modal{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-wrap-box,.cropper-canvas{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:#3399ffbf;overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:calc(100% / 3);left:0;top:calc(100% / 3);width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:calc(100% / 3);top:0;width:calc(100% / 3)}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:before,.cropper-center:after{background-color:#eee;content:" ";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width: 768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width: 992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width: 1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:" ";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC)}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}`)),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
const qe = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.42857 7H7.71429C7.25963 7 6.82359 7.15804 6.5021 7.43934C6.18061 7.72064 6 8.10218 6 8.5V17.5C6 17.8978 6.18061 18.2794 6.5021 18.5607C6.82359 18.842 7.25963 19 7.71429 19H16.2857C16.7404 19 17.1764 18.842 17.4979 18.5607C17.8194 18.2794 18 17.8978 18 17.5V8.5C18 8.10218 17.8194 7.72064 17.4979 7.43934C17.1764 7.15804 16.7404 7 16.2857 7H14.5714"/><rect width="5.15789" height="3.36842" x="9.42105" y="5" stroke="currentColor" stroke-width="2" rx="1.5"/></svg>', Xe = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M12.01 7.29999H12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M12.01 12H12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M12.01 16.7H12"/></svg>', ke = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>';
function g(r, t = null, e = {}) {
  const i = document.createElement(r);
  Array.isArray(t) ? i.classList.add(...t) : t !== null && i.classList.add(t);
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]);
  return i;
}
const Ye = [
  { key: "disableHeightLimit", label: "Не ограничивать по высоте" },
  { key: "disableOptimization", label: "Не оптимизировать" },
  { key: "disableDecoration", label: "Не применять оформление" }
];
function Ve({ item: r, classes: t, translate: e, onChange: i }) {
  const n = g("div", [t.wrapper]), o = g("button", [t.button], { type: "button" }), s = g("div", [t.panel]);
  o.innerHTML = Xe, o.title = e("Настройки изображения"), o.setAttribute("aria-label", e("Настройки изображения")), o.setAttribute("aria-expanded", "false"), s.hidden = !0, o.addEventListener("click", () => {
    s.hidden = !s.hidden, o.setAttribute("aria-expanded", String(!s.hidden));
  });
  for (const a of Ye) {
    const d = g("label", [t.option]), l = g("input", null, { type: "checkbox" });
    l.checked = r.dataset[a.key] === "true", l.addEventListener("click", () => i(a.key, l.checked)), d.append(l, document.createTextNode(e(a.label))), s.appendChild(d);
  }
  return n.append(o, s), n;
}
const Je = "media.ixbt.site", Ze = "920x/webp", Ke = /^\d+x\d*$/;
function yt(r) {
  if (!r)
    return r;
  let t;
  try {
    t = new URL(r);
  } catch {
    return r;
  }
  if (t.hostname !== Je)
    return r;
  const e = t.pathname.split("/").filter(Boolean);
  return e.length === 0 || Ke.test(e[0]) ? r : (t.pathname = `/${Ze}/${e.join("/")}`, t.toString());
}
const Qe = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2v4"/><path d="M6 6h12a2 2 0 0 1 2 2v8"/><path d="M18 22v-4"/><path d="M18 18H6a2 2 0 0 1-2-2V8"/></svg>', re = '<span class="gallery-tool__ai-mark" aria-hidden="true">Ai</span>', le = "Создано с помощью Ai", z = class z {
  constructor({ api: t, config: e, onSelectFile: i, onPasteFile: n, onSelectUrl: o, onColumnsChange: s, onRemoveImage: a, onCropImage: d, onItemSettingsChange: l, onOpenAi: h, readOnly: c }) {
    this.currentColumns = 1, this.previousColumns = 1, this.isRendering = !1, this.columnsLocked = !1, this.api = t, this.config = e, this.onSelectFile = i, this.onPasteFile = n ?? (() => {
    }), this.onSelectUrl = o, this.onColumnsChange = s, this.onRemoveImage = a, this.onCropImage = d, this.onItemSettingsChange = l ?? (() => {
    }), this.onOpenAi = h ?? (() => {
    }), this.readOnly = c, this.nodes = {
      wrapper: g("div", [this.CSS.wrapper]),
      itemsContainer: g("div", [this.CSS.itemsContainer]),
      addButtons: g("div", [this.CSS.addButtons]),
      fileButton: this.createFileButton(),
      aiButton: this.createAiButton(),
      clipboardButton: this.createClipboardButton(),
      urlButton: g("div"),
      // unused, kept for interface compatibility
      urlInput: this.createUrlInput(),
      columnsControl: this.createColumnsControl()
    }, this.nodes.addButtons.appendChild(this.nodes.fileButton), this.config.generation !== void 0 && !this.readOnly && this.nodes.addButtons.appendChild(this.nodes.aiButton), this.nodes.addButtons.appendChild(this.nodes.clipboardButton), this.nodes.addButtons.appendChild(this.nodes.urlInput), this.nodes.addButtons.appendChild(this.nodes.columnsControl), this.nodes.wrapper.appendChild(this.nodes.itemsContainer), this.nodes.wrapper.appendChild(this.nodes.addButtons);
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
      columnsDisplay: "gallery-tool__columns-display",
      aiButton: "gallery-tool__ai-button",
      clipboardButton: "gallery-tool__clipboard-button"
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
    const e = g("div", [this.CSS.item]), i = g("div", [this.CSS.itemImage]), n = g("div", [this.CSS.itemPreloader]), o = !!(t.crop && t.imagorPath && !t.disableOptimization), s = t.disableOptimization ? t.url : o && t.crop && t.imagorPath ? this.buildPreviewUrl(t.imagorPath, t.crop) : yt(t.url), a = g("img", null, { src: s }), d = o && t.croppedWidth ? t.croppedWidth : t.width, l = o && t.croppedHeight ? t.croppedHeight : t.height;
    d && l && (a.style.aspectRatio = `${d} / ${l}`), o && (a.style.width = "100%", a.style.maxHeight = "none", e.classList.add(this.CSS.itemCropped)), t.disableHeightLimit && (a.style.maxHeight = "none", e.classList.add(this.CSS.itemUnlimitedHeight)), t.disableDecoration && e.classList.add(this.CSS.itemPlain);
    const h = g("div", [this.CSS.itemCaption, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    h.dataset.placeholder = this.config.captionPlaceholder ?? "Caption", h.textContent = t.caption || "";
    const c = g("div", [this.CSS.itemSource, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    c.dataset.placeholder = this.config.sourcePlaceholder ?? "Source", c.textContent = t.source || "";
    const u = g("div", [this.CSS.itemSourceLink, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    if (u.dataset.placeholder = this.config.sourceLinkPlaceholder ?? "Source link", u.textContent = t.sourceLink || "", i.appendChild(n), i.appendChild(a), d && l) {
      const b = g("div", [this.CSS.itemDimensions]);
      b.textContent = `${d} × ${l}`, i.appendChild(b);
    }
    return t.isAiGenerated && i.appendChild(this.createAiBadge()), a.onload = () => {
      n.style.display = "none";
    }, e.appendChild(i), e.appendChild(h), e.appendChild(c), e.appendChild(u), this.storeItemData(e, t), this.readOnly || e.insertBefore(this.createItemControls(e), e.firstChild), this.nodes.itemsContainer.appendChild(e), this.toggleState(
      "filled"
      /* Filled */
    ), this.autoAdjustColumns(), e;
  }
  storeItemData(t, e) {
    var i, n, o;
    t.dataset.url = e.url, e.media_id && (t.dataset.mediaId = e.media_id), (i = this.config.cover) != null && i.enabled && e.media_id && ((o = (n = this.config.cover).coverUuid) == null ? void 0 : o.call(n)) === e.media_id && t.setAttribute("data-cover", ""), e.width && (t.dataset.width = String(e.width)), e.height && (t.dataset.height = String(e.height)), e.imagorPath && (t.dataset.imagorPath = e.imagorPath), e.crop && !e.disableOptimization && (t.dataset.crop = e.crop), e.croppedWidth && !e.disableOptimization && (t.dataset.croppedWidth = String(e.croppedWidth)), e.croppedHeight && !e.disableOptimization && (t.dataset.croppedHeight = String(e.croppedHeight)), e.cropAspectRatio && !e.disableOptimization && (t.dataset.cropAspectRatio = e.cropAspectRatio), typeof e.showOriginalOnClick == "boolean" && !e.disableOptimization && (t.dataset.showOriginalOnClick = String(e.showOriginalOnClick)), e.isAiGenerated && (t.dataset.aiGenerated = "true"), e.disableHeightLimit && (t.dataset.disableHeightLimit = "true"), e.disableOptimization && (t.dataset.disableOptimization = "true"), e.disableDecoration && (t.dataset.disableDecoration = "true");
  }
  /**
   * Create a placeholder item for loading state
   */
  createLoadingItem(t) {
    const e = g("div", [this.CSS.item]), i = g("div", [this.CSS.itemImage]), n = g("div", [this.CSS.itemPreloader]);
    t && (n.style.backgroundImage = `url(${yt(t)})`), i.appendChild(n), e.appendChild(i);
    const o = g("div", [this.CSS.itemCaption, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    o.dataset.placeholder = this.config.captionPlaceholder ?? "Caption";
    const s = g("div", [this.CSS.itemSource, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    s.dataset.placeholder = this.config.sourcePlaceholder ?? "Source";
    const a = g("div", [this.CSS.itemSourceLink, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    return a.dataset.placeholder = this.config.sourceLinkPlaceholder ?? "Source link", e.appendChild(o), e.appendChild(s), e.appendChild(a), this.nodes.itemsContainer.appendChild(e), this.toggleState(
      "loading"
      /* Loading */
    ), e;
  }
  /**
   * Update loading item with uploaded image
   */
  fillLoadingItem(t, e) {
    const i = t.querySelector(`.${this.CSS.itemImage}`), n = t.querySelector(`.${this.CSS.itemPreloader}`), o = g("img", null, {
      src: e.disableOptimization ? e.url : yt(e.url)
    });
    if (e.width && e.height && (o.style.aspectRatio = `${e.width} / ${e.height}`), e.disableHeightLimit && (o.style.maxHeight = "none", t.classList.add(this.CSS.itemUnlimitedHeight)), e.disableDecoration && t.classList.add(this.CSS.itemPlain), o.onload = () => {
      n && (n.style.display = "none");
    }, i.appendChild(o), e.width && e.height) {
      const s = g("div", [this.CSS.itemDimensions]);
      s.textContent = `${e.width} × ${e.height}`, i.appendChild(s);
    }
    if (this.storeItemData(t, e), e.isAiGenerated && i.appendChild(this.createAiBadge()), !this.readOnly) {
      const s = this.createItemControls(t);
      t.insertBefore(s, t.firstChild);
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
      var _, I, E;
      const n = i, o = n.dataset.url;
      if (!o) return;
      const s = ((_ = i.querySelector(`.${this.CSS.itemCaption}`)) == null ? void 0 : _.textContent) || "", a = ((I = i.querySelector(`.${this.CSS.itemSource}`)) == null ? void 0 : I.textContent) || "", d = ((E = i.querySelector(`.${this.CSS.itemSourceLink}`)) == null ? void 0 : E.textContent) || "", l = n.dataset.width ? parseInt(n.dataset.width, 10) : void 0, h = n.dataset.height ? parseInt(n.dataset.height, 10) : void 0, c = n.dataset.disableHeightLimit === "true", u = n.dataset.disableOptimization === "true", b = n.dataset.disableDecoration === "true", C = n.dataset.imagorPath || void 0, p = u ? void 0 : n.dataset.crop || void 0, f = !u && n.dataset.croppedWidth ? parseInt(n.dataset.croppedWidth, 10) : void 0, v = !u && n.dataset.croppedHeight ? parseInt(n.dataset.croppedHeight, 10) : void 0, y = !u && (n.dataset.cropAspectRatio === "16:9" || n.dataset.cropAspectRatio === "1:1") ? n.dataset.cropAspectRatio : !u && n.dataset.cropAspectRatio === "3:2" ? "3:2" : !u && n.dataset.cropAspectRatio === "free" ? "free" : void 0, w = u || n.dataset.showOriginalOnClick === void 0 ? void 0 : n.dataset.showOriginalOnClick === "true", x = n.dataset.mediaId || void 0, S = n.dataset.aiGenerated === "true", m = {
        url: o,
        media_id: x,
        imagorPath: C,
        caption: s,
        source: a,
        sourceLink: d,
        width: l,
        height: h,
        crop: p,
        croppedWidth: f,
        croppedHeight: v
      };
      y !== void 0 && (m.cropAspectRatio = y), w !== void 0 && (m.showOriginalOnClick = w), S && (m.isAiGenerated = !0), c && (m.disableHeightLimit = !0), u && (m.disableOptimization = !0), b && (m.disableDecoration = !0), e.push(m);
    }), e;
  }
  /**
   * Update item DOM after crop operation
   */
  updateItemAfterCrop(t, e, i, n, o, s) {
    const a = t.querySelector(`.${this.CSS.itemImage} img`);
    if (a && !(e && t.dataset.disableOptimization === "true"))
      if (e) {
        t.dataset.crop = e, t.dataset.croppedWidth = String(i), t.dataset.croppedHeight = String(n), t.dataset.showOriginalOnClick = String(o ?? !1), t.dataset.cropAspectRatio = s ?? "3:2", t.classList.add(this.CSS.itemCropped);
        const d = t.dataset.imagorPath;
        d && (a.src = this.buildPreviewUrl(d, e)), a.style.width = "100%", a.style.maxHeight = "none", this.updateItemDimensions(t, i, n);
      } else
        delete t.dataset.crop, delete t.dataset.croppedWidth, delete t.dataset.croppedHeight, delete t.dataset.showOriginalOnClick, delete t.dataset.cropAspectRatio, t.classList.remove(this.CSS.itemCropped), a.src = t.dataset.disableOptimization === "true" ? t.dataset.url || "" : yt(t.dataset.url || ""), a.style.width = "", a.style.maxHeight = t.dataset.disableHeightLimit === "true" ? "none" : "", this.updateItemDimensions(
          t,
          t.dataset.width ? parseInt(t.dataset.width, 10) : void 0,
          t.dataset.height ? parseInt(t.dataset.height, 10) : void 0
        );
  }
  /** Update an item's effective dimensions badge and aspect ratio. */
  updateItemDimensions(t, e, i) {
    const n = t.querySelector(`.${this.CSS.itemImage}`), o = n == null ? void 0 : n.querySelector("img"), s = Number.isFinite(e) && Number.isFinite(i) && (e ?? 0) > 0 && (i ?? 0) > 0;
    let a = (n == null ? void 0 : n.querySelector(`.${this.CSS.itemDimensions}`)) ?? null;
    if (!s) {
      a == null || a.remove(), o && (o.style.aspectRatio = "");
      return;
    }
    a === null && n !== null && (a = g("div", [this.CSS.itemDimensions]), n.appendChild(a)), a !== null && (a.textContent = `${e} × ${i}`), o && (o.style.aspectRatio = `${e} / ${i}`);
  }
  /**
   * Build imagor preview URL with crop + fit-in resize.
   * Mirrors ImageService::url() logic using imagorPath (normalized short URL).
   */
  buildPreviewUrl(t, e, i = 600) {
    const n = this.config.mediaHost;
    if (!n || !t) return "";
    const o = ["unsafe"];
    return e && o.push(e), o.push("fit-in", `${i}x0`, t), `${n}/${o.join("/")}`;
  }
  /**
   * Get current columns count
   */
  getColumns() {
    return this.currentColumns;
  }
  createFileButton() {
    const t = g("div", [this.CSS.button]);
    return t.innerHTML = `${ke} ${this.config.buttonContent}`, t.addEventListener("click", () => this.onSelectFile()), t;
  }
  createClipboardButton() {
    const t = g("button", [this.CSS.button, this.CSS.clipboardButton], { type: "button" });
    return t.innerHTML = `${qe}<span>${this.api.i18n.t("Вставить из буфера")}</span>`, t.setAttribute("aria-label", this.api.i18n.t("Вставить изображение из буфера")), t.addEventListener("click", () => {
      this.pasteFromClipboard();
    }), t;
  }
  createAiButton() {
    const t = g("button", [this.CSS.button, this.CSS.aiButton], { type: "button" });
    return t.innerHTML = `${re}<span>Генерация</span>`, t.setAttribute("aria-label", "Генерация"), t.addEventListener("click", () => this.onOpenAi()), t;
  }
  createAiBadge() {
    const t = g("span", [this.CSS.itemAiBadge], {
      title: le
    });
    return t.innerHTML = re, t.setAttribute("aria-label", le), t;
  }
  createUrlInput() {
    const t = g("div", [this.CSS.urlInputWrapper]), e = g("input", [this.CSS.urlInput, this.CSS.input], {
      type: "text"
    });
    return e.placeholder = this.config.urlInputPlaceholder ?? "Вставьте ссылку на изображение", e.addEventListener("keydown", (i) => {
      i.key === "Enter" && (i.preventDefault(), this.handleUrlInput(e));
    }), e.addEventListener("paste", (i) => {
      const n = this.imageFromClipboardData(i.clipboardData);
      if (n) {
        i.preventDefault(), i.stopPropagation(), i.stopImmediatePropagation(), e.value = "", this.onPasteFile(n);
        return;
      }
      setTimeout(() => {
        this.handleUrlInput(e);
      }, 50);
    }), t.appendChild(e), t;
  }
  imageFromClipboardData(t) {
    var n, o;
    if (!t) return null;
    const e = Array.from(t.files).find((s) => s.type !== "" && !s.type.startsWith("image/"));
    if (e && ((o = (n = this.config).onNonImageFile) == null ? void 0 : o.call(n, e)) === !0)
      return null;
    const i = Array.from(t.files).find((s) => s.type.startsWith("image/"));
    if (i) return i;
    for (const s of Array.from(t.items))
      if (s.kind === "file" && s.type.startsWith("image/"))
        return s.getAsFile();
    return null;
  }
  async pasteFromClipboard() {
    if (!navigator.clipboard || typeof navigator.clipboard.read != "function") {
      this.showClipboardError("Не удалось прочитать буфер. Нажмите Ctrl/Cmd+V в поле ссылки.");
      return;
    }
    try {
      const t = await navigator.clipboard.read();
      for (const e of t) {
        const i = e.types.find((o) => o.startsWith("image/"));
        if (i) {
          this.onPasteFile(await e.getType(i));
          return;
        }
        const n = e.types.find((o) => o !== "text/plain" && o !== "text/html");
        if (n && this.config.onNonImageFile !== void 0) {
          const o = await e.getType(n);
          if (this.config.onNonImageFile(o) === !0)
            return;
        }
      }
      this.showClipboardError("В буфере обмена нет файла, который можно вставить.");
    } catch {
      this.showClipboardError("Не удалось прочитать буфер. Нажмите Ctrl/Cmd+V в поле ссылки.");
    }
  }
  showClipboardError(t) {
    this.api.notifier.show({ message: this.api.i18n.t(t), style: "error" });
  }
  /**
   * Process URL from input field
   */
  handleUrlInput(t) {
    const e = t.value.trim();
    e && this.isValidImageUrl(e) && (this.onSelectUrl(e), t.value = "");
  }
  createColumnsControl() {
    const t = g("div", [this.CSS.columnsControl]), e = g("button", [this.CSS.columnsButton], { type: "button" });
    e.innerHTML = "−", e.addEventListener("click", () => this.changeColumns(-1));
    const i = g("span", [this.CSS.columnsDisplay]);
    i.textContent = `${this.currentColumns} col`;
    const n = g("button", [this.CSS.columnsButton], { type: "button" });
    return n.innerHTML = "+", n.addEventListener("click", () => this.changeColumns(1)), t.appendChild(e), t.appendChild(i), t.appendChild(n), t;
  }
  changeColumns(t) {
    const e = Math.min(z.MAX_COLUMNS, Math.max(z.MIN_COLUMNS, this.currentColumns + t));
    e !== this.currentColumns && (this.columnsLocked = !0, this.previousColumns = this.currentColumns, this.currentColumns = e, this.updateColumnsClass(), this.updateColumnsDisplay(), this.onColumnsChange(e));
  }
  updateColumnsClass() {
    const t = `gallery-tool--columns-${this.previousColumns}`, e = `gallery-tool--columns-${this.currentColumns}`;
    if (this.nodes.wrapper.classList.contains(t))
      this.nodes.wrapper.classList.replace(t, e);
    else {
      for (let i = z.MIN_COLUMNS; i <= z.MAX_COLUMNS; i++)
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
    const t = this.nodes.itemsContainer.children.length, e = Math.max(z.MIN_COLUMNS, Math.min(t, z.AUTO_MAX_COLUMNS));
    e !== this.currentColumns && (this.previousColumns = this.currentColumns, this.currentColumns = e, this.updateColumnsClass(), this.updateColumnsDisplay(), this.onColumnsChange(e));
  }
  createItemControls(t) {
    var d;
    const e = g("div", [this.CSS.itemControls]), i = g("button", [this.CSS.itemRemove], { type: "button" });
    i.innerHTML = "×", i.title = this.api.i18n.t("Удалить изображение"), i.setAttribute("aria-label", this.api.i18n.t("Удалить изображение")), i.addEventListener("click", () => {
      const l = t.dataset.url, h = t.dataset.mediaId;
      t.remove(), this.nodes.itemsContainer.children.length === 0 && (this.toggleState(
        "empty"
        /* Empty */
      ), this.columnsLocked = !1), this.autoAdjustColumns(), (l || h) && this.onRemoveImage(l ?? "", h);
    });
    const n = g("button", [this.CSS.itemMoveLeft], { type: "button" });
    n.innerHTML = "←", n.addEventListener("click", () => this.moveItem(t, -1));
    const o = g("button", [this.CSS.itemMoveRight], { type: "button" });
    o.innerHTML = "→", o.addEventListener("click", () => this.moveItem(t, 1));
    const s = g("button", [this.CSS.itemCrop], { type: "button" });
    s.innerHTML = Qe, s.title = this.api.i18n.t("Обрезать изображение"), s.setAttribute("aria-label", this.api.i18n.t("Обрезать изображение")), s.disabled = t.dataset.disableOptimization === "true", s.addEventListener("click", () => this.onCropImage(t));
    const a = Ve({
      item: t,
      classes: {
        button: this.CSS.itemSettings,
        wrapper: this.CSS.itemSettingsWrapper,
        panel: this.CSS.itemSettingsPanel,
        option: this.CSS.itemSetting
      },
      translate: (l) => this.api.i18n.t(l),
      onChange: (l, h) => this.updateItemSetting(t, l, h)
    });
    if (e.appendChild(n), e.appendChild(s), e.appendChild(a), (d = this.config.cover) != null && d.enabled) {
      const l = g("button", ["gallery-tool__item-cover"], { type: "button" });
      l.innerHTML = "★", l.title = this.api.i18n.t("Сделать обложкой"), l.setAttribute("aria-label", this.api.i18n.t("Сделать обложкой")), l.setAttribute("aria-pressed", String(t.hasAttribute("data-cover"))), l.addEventListener("click", () => this.onSetCover(t)), e.appendChild(l);
    }
    return e.appendChild(i), e.appendChild(o), e;
  }
  updateItemSetting(t, e, i) {
    i ? t.dataset[e] = "true" : delete t.dataset[e];
    const n = t.querySelector(`.${this.CSS.itemImage} img`), o = t.querySelector(`.${this.CSS.itemCrop}`);
    e === "disableHeightLimit" && (t.classList.toggle(this.CSS.itemUnlimitedHeight, i), n && (n.style.maxHeight = i || t.classList.contains(this.CSS.itemCropped) ? "none" : "")), e === "disableOptimization" && (o == null || o.toggleAttribute("disabled", i), i ? this.updateItemAfterCrop(t, void 0, 0, 0, void 0, void 0) : n && (n.src = yt(t.dataset.url || ""))), e === "disableDecoration" && t.classList.toggle(this.CSS.itemPlain, i), this.onItemSettingsChange();
  }
  /**
   * Выбрать элемент gallery базовой обложкой в состоянии формы.
   */
  onSetCover(t) {
    var n;
    const e = this.config.cover;
    if (!(e != null && e.enabled))
      return !1;
    const i = t.dataset.mediaId;
    return i ? (this.markCover(i), (n = e.onCoverChanged) == null || n.call(e, i), this.api.notifier.show({ message: this.api.i18n.t("Базовая обложка обновлена") }), !0) : (this.api.notifier.show({ message: this.api.i18n.t("Сначала дождитесь загрузки картинки"), style: "error" }), !1);
  }
  /**
   * Подсветить элемент-обложку (по media uuid), снять метку с остальных.
   */
  markCover(t) {
    this.nodes.itemsContainer.querySelectorAll(`.${this.CSS.item}`).forEach((i) => {
      var s;
      const n = i, o = !!t && n.dataset.mediaId === t;
      n.toggleAttribute("data-cover", o), (s = n.querySelector('[aria-label="Сделать обложкой"]')) == null || s.setAttribute("aria-pressed", String(o));
    });
  }
  moveItem(t, e) {
    const i = Array.from(this.nodes.itemsContainer.children), o = i.indexOf(t) + e;
    o < 0 || o >= i.length || (e < 0 ? this.nodes.itemsContainer.insertBefore(t, i[o]) : this.nodes.itemsContainer.insertBefore(i[o], t));
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
z.MIN_COLUMNS = 1, z.MAX_COLUMNS = 5, z.AUTO_MAX_COLUMNS = 4;
let $t = z;
function ti(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Re = { exports: {} };
(function(r, t) {
  (function(e, i) {
    r.exports = i();
  })(window, function() {
    return function(e) {
      var i = {};
      function n(o) {
        if (i[o]) return i[o].exports;
        var s = i[o] = { i: o, l: !1, exports: {} };
        return e[o].call(s.exports, s, s.exports, n), s.l = !0, s.exports;
      }
      return n.m = e, n.c = i, n.d = function(o, s, a) {
        n.o(o, s) || Object.defineProperty(o, s, { enumerable: !0, get: a });
      }, n.r = function(o) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o, "__esModule", { value: !0 });
      }, n.t = function(o, s) {
        if (1 & s && (o = n(o)), 8 & s || 4 & s && typeof o == "object" && o && o.__esModule) return o;
        var a = /* @__PURE__ */ Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: o }), 2 & s && typeof o != "string") for (var d in o) n.d(a, d, (function(l) {
          return o[l];
        }).bind(null, d));
        return a;
      }, n.n = function(o) {
        var s = o && o.__esModule ? function() {
          return o.default;
        } : function() {
          return o;
        };
        return n.d(s, "a", s), s;
      }, n.o = function(o, s) {
        return Object.prototype.hasOwnProperty.call(o, s);
      }, n.p = "", n(n.s = 3);
    }([function(e, i) {
      var n;
      n = /* @__PURE__ */ function() {
        return this;
      }();
      try {
        n = n || new Function("return this")();
      } catch {
        typeof window == "object" && (n = window);
      }
      e.exports = n;
    }, function(e, i, n) {
      (function(o) {
        var s = n(2), a = setTimeout;
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
            var y = f._state === 1 ? v.onFulfilled : v.onRejected;
            if (y !== null) {
              var w;
              try {
                w = y(f._value);
              } catch (x) {
                return void u(v.promise, x);
              }
              c(v.promise, w);
            } else (f._state === 1 ? c : u)(v.promise, f._value);
          })) : f._deferreds.push(v);
        }
        function c(f, v) {
          try {
            if (v === f) throw new TypeError("A promise cannot be resolved with itself.");
            if (v && (typeof v == "object" || typeof v == "function")) {
              var y = v.then;
              if (v instanceof l) return f._state = 3, f._value = v, void b(f);
              if (typeof y == "function") return void p((w = y, x = v, function() {
                w.apply(x, arguments);
              }), f);
            }
            f._state = 1, f._value = v, b(f);
          } catch (S) {
            u(f, S);
          }
          var w, x;
        }
        function u(f, v) {
          f._state = 2, f._value = v, b(f);
        }
        function b(f) {
          f._state === 2 && f._deferreds.length === 0 && l._immediateFn(function() {
            f._handled || l._unhandledRejectionFn(f._value);
          });
          for (var v = 0, y = f._deferreds.length; v < y; v++) h(f, f._deferreds[v]);
          f._deferreds = null;
        }
        function C(f, v, y) {
          this.onFulfilled = typeof f == "function" ? f : null, this.onRejected = typeof v == "function" ? v : null, this.promise = y;
        }
        function p(f, v) {
          var y = !1;
          try {
            f(function(w) {
              y || (y = !0, c(v, w));
            }, function(w) {
              y || (y = !0, u(v, w));
            });
          } catch (w) {
            if (y) return;
            y = !0, u(v, w);
          }
        }
        l.prototype.catch = function(f) {
          return this.then(null, f);
        }, l.prototype.then = function(f, v) {
          var y = new this.constructor(d);
          return h(this, new C(f, v, y)), y;
        }, l.prototype.finally = s.a, l.all = function(f) {
          return new l(function(v, y) {
            if (!f || f.length === void 0) throw new TypeError("Promise.all accepts an array");
            var w = Array.prototype.slice.call(f);
            if (w.length === 0) return v([]);
            var x = w.length;
            function S(_, I) {
              try {
                if (I && (typeof I == "object" || typeof I == "function")) {
                  var E = I.then;
                  if (typeof E == "function") return void E.call(I, function(O) {
                    S(_, O);
                  }, y);
                }
                w[_] = I, --x == 0 && v(w);
              } catch (O) {
                y(O);
              }
            }
            for (var m = 0; m < w.length; m++) S(m, w[m]);
          });
        }, l.resolve = function(f) {
          return f && typeof f == "object" && f.constructor === l ? f : new l(function(v) {
            v(f);
          });
        }, l.reject = function(f) {
          return new l(function(v, y) {
            y(f);
          });
        }, l.race = function(f) {
          return new l(function(v, y) {
            for (var w = 0, x = f.length; w < x; w++) f[w].then(v, y);
          });
        }, l._immediateFn = typeof o == "function" && function(f) {
          o(f);
        } || function(f) {
          a(f, 0);
        }, l._unhandledRejectionFn = function(f) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", f);
        }, i.a = l;
      }).call(this, n(5).setImmediate);
    }, function(e, i, n) {
      i.a = function(o) {
        var s = this.constructor;
        return this.then(function(a) {
          return s.resolve(o()).then(function() {
            return a;
          });
        }, function(a) {
          return s.resolve(o()).then(function() {
            return s.reject(a);
          });
        });
      };
    }, function(e, i, n) {
      function o(p) {
        return (o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
          return typeof f;
        } : function(f) {
          return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
        })(p);
      }
      n(4);
      var s, a, d, l, h, c, u, b = n(8), C = (a = function(p) {
        return new Promise(function(f, v) {
          p = l(p), (p = h(p)).beforeSend && p.beforeSend();
          var y = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          y.open(p.method, p.url), y.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(p.headers).forEach(function(x) {
            var S = p.headers[x];
            y.setRequestHeader(x, S);
          });
          var w = p.ratio;
          y.upload.addEventListener("progress", function(x) {
            var S = Math.round(x.loaded / x.total * 100), m = Math.ceil(S * w / 100);
            p.progress(Math.min(m, 100));
          }, !1), y.addEventListener("progress", function(x) {
            var S = Math.round(x.loaded / x.total * 100), m = Math.ceil(S * (100 - w) / 100) + w;
            p.progress(Math.min(m, 100));
          }, !1), y.onreadystatechange = function() {
            if (y.readyState === 4) {
              var x = y.response;
              try {
                x = JSON.parse(x);
              } catch {
              }
              var S = b.parseHeaders(y.getAllResponseHeaders()), m = { body: x, code: y.status, headers: S };
              u(y.status) ? f(m) : v(m);
            }
          }, y.send(p.data);
        });
      }, d = function(p) {
        return p.method = "POST", a(p);
      }, l = function() {
        var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (p.url && typeof p.url != "string") throw new Error("Url must be a string");
        if (p.url = p.url || "", p.method && typeof p.method != "string") throw new Error("`method` must be a string or null");
        if (p.method = p.method ? p.method.toUpperCase() : "GET", p.headers && o(p.headers) !== "object") throw new Error("`headers` must be an object or null");
        if (p.headers = p.headers || {}, p.type && (typeof p.type != "string" || !Object.values(s).includes(p.type))) throw new Error("`type` must be taken from module's «contentType» library");
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
            var f = c(p.data, s.URLENCODED);
            delete p.data, p.url = /\?/.test(p.url) ? p.url + "&" + f : p.url + "?" + f;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var v = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || s.JSON;
            }(p);
            (b.isFormData(p.data) || b.isFormElement(p.data)) && (v = s.FORM), p.data = c(p.data, v), v !== C.contentType.FORM && (p.headers["content-type"] = v);
        }
        return p;
      }, c = function() {
        var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case s.URLENCODED:
            return b.urlEncode(p);
          case s.JSON:
            return b.jsonEncode(p);
          case s.FORM:
            return b.formEncode(p);
          default:
            return p;
        }
      }, u = function(p) {
        return p >= 200 && p < 300;
      }, { contentType: s = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: a, get: function(p) {
        return p.method = "GET", a(p);
      }, post: d, transport: function(p) {
        return p = l(p), b.selectFiles(p).then(function(f) {
          for (var v = new FormData(), y = 0; y < f.length; y++) v.append(p.fieldName, f[y], f[y].name);
          b.isObject(p.data) && Object.keys(p.data).forEach(function(x) {
            var S = p.data[x];
            v.append(x, S);
          });
          var w = p.beforeSend;
          return p.beforeSend = function() {
            return w(f);
          }, p.data = v, d(p);
        });
      }, selectFiles: function(p) {
        return delete (p = l(p)).beforeSend, b.selectFiles(p);
      } });
      e.exports = C;
    }, function(e, i, n) {
      n.r(i);
      var o = n(1);
      window.Promise = window.Promise || o.a;
    }, function(e, i, n) {
      (function(o) {
        var s = o !== void 0 && o || typeof self < "u" && self || window, a = Function.prototype.apply;
        function d(l, h) {
          this._id = l, this._clearFn = h;
        }
        i.setTimeout = function() {
          return new d(a.call(setTimeout, s, arguments), clearTimeout);
        }, i.setInterval = function() {
          return new d(a.call(setInterval, s, arguments), clearInterval);
        }, i.clearTimeout = i.clearInterval = function(l) {
          l && l.close();
        }, d.prototype.unref = d.prototype.ref = function() {
        }, d.prototype.close = function() {
          this._clearFn.call(s, this._id);
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
        }, n(6), i.setImmediate = typeof self < "u" && self.setImmediate || o !== void 0 && o.setImmediate || this && this.setImmediate, i.clearImmediate = typeof self < "u" && self.clearImmediate || o !== void 0 && o.clearImmediate || this && this.clearImmediate;
      }).call(this, n(0));
    }, function(e, i, n) {
      (function(o, s) {
        (function(a, d) {
          if (!a.setImmediate) {
            var l, h, c, u, b, C = 1, p = {}, f = !1, v = a.document, y = Object.getPrototypeOf && Object.getPrototypeOf(a);
            y = y && y.setTimeout ? y : a, {}.toString.call(a.process) === "[object process]" ? l = function(S) {
              s.nextTick(function() {
                x(S);
              });
            } : function() {
              if (a.postMessage && !a.importScripts) {
                var S = !0, m = a.onmessage;
                return a.onmessage = function() {
                  S = !1;
                }, a.postMessage("", "*"), a.onmessage = m, S;
              }
            }() ? (u = "setImmediate$" + Math.random() + "$", b = function(S) {
              S.source === a && typeof S.data == "string" && S.data.indexOf(u) === 0 && x(+S.data.slice(u.length));
            }, a.addEventListener ? a.addEventListener("message", b, !1) : a.attachEvent("onmessage", b), l = function(S) {
              a.postMessage(u + S, "*");
            }) : a.MessageChannel ? ((c = new MessageChannel()).port1.onmessage = function(S) {
              x(S.data);
            }, l = function(S) {
              c.port2.postMessage(S);
            }) : v && "onreadystatechange" in v.createElement("script") ? (h = v.documentElement, l = function(S) {
              var m = v.createElement("script");
              m.onreadystatechange = function() {
                x(S), m.onreadystatechange = null, h.removeChild(m), m = null;
              }, h.appendChild(m);
            }) : l = function(S) {
              setTimeout(x, 0, S);
            }, y.setImmediate = function(S) {
              typeof S != "function" && (S = new Function("" + S));
              for (var m = new Array(arguments.length - 1), _ = 0; _ < m.length; _++) m[_] = arguments[_ + 1];
              var I = { callback: S, args: m };
              return p[C] = I, l(C), C++;
            }, y.clearImmediate = w;
          }
          function w(S) {
            delete p[S];
          }
          function x(S) {
            if (f) setTimeout(x, 0, S);
            else {
              var m = p[S];
              if (m) {
                f = !0;
                try {
                  (function(_) {
                    var I = _.callback, E = _.args;
                    switch (E.length) {
                      case 0:
                        I();
                        break;
                      case 1:
                        I(E[0]);
                        break;
                      case 2:
                        I(E[0], E[1]);
                        break;
                      case 3:
                        I(E[0], E[1], E[2]);
                        break;
                      default:
                        I.apply(d, E);
                    }
                  })(m);
                } finally {
                  w(S), f = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? o === void 0 ? this : o : self);
      }).call(this, n(0), n(7));
    }, function(e, i) {
      var n, o, s = e.exports = {};
      function a() {
        throw new Error("setTimeout has not been defined");
      }
      function d() {
        throw new Error("clearTimeout has not been defined");
      }
      function l(y) {
        if (n === setTimeout) return setTimeout(y, 0);
        if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(y, 0);
        try {
          return n(y, 0);
        } catch {
          try {
            return n.call(null, y, 0);
          } catch {
            return n.call(this, y, 0);
          }
        }
      }
      (function() {
        try {
          n = typeof setTimeout == "function" ? setTimeout : a;
        } catch {
          n = a;
        }
        try {
          o = typeof clearTimeout == "function" ? clearTimeout : d;
        } catch {
          o = d;
        }
      })();
      var h, c = [], u = !1, b = -1;
      function C() {
        u && h && (u = !1, h.length ? c = h.concat(c) : b = -1, c.length && p());
      }
      function p() {
        if (!u) {
          var y = l(C);
          u = !0;
          for (var w = c.length; w; ) {
            for (h = c, c = []; ++b < w; ) h && h[b].run();
            b = -1, w = c.length;
          }
          h = null, u = !1, function(x) {
            if (o === clearTimeout) return clearTimeout(x);
            if ((o === d || !o) && clearTimeout) return o = clearTimeout, clearTimeout(x);
            try {
              o(x);
            } catch {
              try {
                return o.call(null, x);
              } catch {
                return o.call(this, x);
              }
            }
          }(y);
        }
      }
      function f(y, w) {
        this.fun = y, this.array = w;
      }
      function v() {
      }
      s.nextTick = function(y) {
        var w = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var x = 1; x < arguments.length; x++) w[x - 1] = arguments[x];
        c.push(new f(y, w)), c.length !== 1 || u || l(p);
      }, f.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = v, s.addListener = v, s.once = v, s.off = v, s.removeListener = v, s.removeAllListeners = v, s.emit = v, s.prependListener = v, s.prependOnceListener = v, s.listeners = function(y) {
        return [];
      }, s.binding = function(y) {
        throw new Error("process.binding is not supported");
      }, s.cwd = function() {
        return "/";
      }, s.chdir = function(y) {
        throw new Error("process.chdir is not supported");
      }, s.umask = function() {
        return 0;
      };
    }, function(e, i, n) {
      function o(a, d) {
        for (var l = 0; l < d.length; l++) {
          var h = d[l];
          h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(a, h.key, h);
        }
      }
      var s = n(9);
      e.exports = function() {
        function a() {
          (function(c, u) {
            if (!(c instanceof u)) throw new TypeError("Cannot call a class as a function");
          })(this, a);
        }
        var d, l, h;
        return d = a, h = [{ key: "urlEncode", value: function(c) {
          return s(c);
        } }, { key: "jsonEncode", value: function(c) {
          return JSON.stringify(c);
        } }, { key: "formEncode", value: function(c) {
          if (this.isFormData(c)) return c;
          if (this.isFormElement(c)) return new FormData(c);
          if (this.isObject(c)) {
            var u = new FormData();
            return Object.keys(c).forEach(function(b) {
              var C = c[b];
              u.append(b, C);
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
          return new Promise(function(u, b) {
            var C = document.createElement("INPUT");
            C.type = "file", c.multiple && C.setAttribute("multiple", "multiple"), c.accept && C.setAttribute("accept", c.accept), C.style.display = "none", document.body.appendChild(C), C.addEventListener("change", function(p) {
              var f = p.target.files;
              u(f), document.body.removeChild(C);
            }, !1), C.click();
          });
        } }, { key: "parseHeaders", value: function(c) {
          var u = c.trim().split(/[\r\n]+/), b = {};
          return u.forEach(function(C) {
            var p = C.split(": "), f = p.shift(), v = p.join(": ");
            f && (b[f] = v);
          }), b;
        } }], (l = null) && o(d.prototype, l), h && o(d, h), a;
      }();
    }, function(e, i) {
      var n = function(s) {
        return encodeURIComponent(s).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, o = function(s, a, d, l) {
        return a = a || null, d = d || "&", l = l || null, s ? function(h) {
          for (var c = new Array(), u = 0; u < h.length; u++) h[u] && c.push(h[u]);
          return c;
        }(Object.keys(s).map(function(h) {
          var c, u, b = h;
          if (l && (b = l + "[" + b + "]"), typeof s[h] == "object" && s[h] !== null) c = o(s[h], null, d, b);
          else {
            a && (u = b, b = !isNaN(parseFloat(u)) && isFinite(u) ? a + Number(b) : b);
            var C = s[h];
            C = (C = (C = (C = C === !0 ? "1" : C) === !1 ? "0" : C) === 0 ? "0" : C) || "", c = n(b) + "=" + n(C);
          }
          return c;
        })).join(d).replace(/[!'()*]/g, "") : "";
      };
      e.exports = o;
    }]);
  });
})(Re);
var ei = Re.exports;
const dt = /* @__PURE__ */ ti(ei);
function Ft(r) {
  return r !== void 0 && typeof r.then == "function";
}
class he extends Error {
}
class ii {
  constructor({ config: t, onUpload: e, onError: i }) {
    this.config = t, this.onUpload = e, this.onError = i;
  }
  /**
   * Upload file selected from device
   */
  uploadSelectedFile({ onPreview: t, onNonImageFile: e }) {
    var o;
    const i = (s) => {
      const a = new FileReader();
      a.readAsDataURL(s), a.onload = (d) => {
        t(d.target.result);
      }, a.onerror = () => {
        this.onError("Failed to read file");
      };
    };
    let n;
    if ((o = this.config.uploader) != null && o.uploadByFile)
      n = dt.selectFiles({ accept: this.config.types ?? "image/*" }).then((s) => {
        if (!s || s.length === 0)
          throw new Error("No file selected");
        if ((e == null ? void 0 : e(s[0])) === !0)
          throw new he();
        i(s[0]);
        const a = this.config.uploader.uploadByFile(s[0]);
        return Ft(a) || console.warn("Custom uploader method uploadByFile should return a Promise"), a;
      });
    else {
      if (!this.config.endpoints.byFile) {
        this.onError("Upload endpoint (byFile) is not configured");
        return;
      }
      n = dt.transport({
        url: this.config.endpoints.byFile,
        data: this.config.additionalRequestData,
        accept: this.config.types ?? "image/*",
        headers: this.config.additionalRequestHeaders,
        beforeSend: (s) => {
          s && s.length > 0 && i(s[0]);
        },
        fieldName: this.config.field ?? "image"
      }).then((s) => s.body);
    }
    n.then((s) => this.onUpload(s)).catch((s) => {
      s instanceof he || this.onError(s);
    });
  }
  /**
   * Upload image by URL
   */
  uploadByUrl(t) {
    var i;
    let e;
    if ((i = this.config.uploader) != null && i.uploadByUrl)
      e = this.config.uploader.uploadByUrl(t), Ft(e) || console.warn("Custom uploader method uploadByUrl should return a Promise");
    else {
      if (!this.config.endpoints.byUrl) {
        this.onError("Upload endpoint (byUrl) is not configured");
        return;
      }
      e = dt.post({
        url: this.config.endpoints.byUrl,
        data: {
          url: t,
          ...this.config.additionalRequestData
        },
        type: dt.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((n) => n.body);
    }
    e.then((n) => this.onUpload(n)).catch((n) => this.onError(n));
  }
  /**
   * Upload file from drag-n-drop or paste
   */
  uploadByFile(t, { onPreview: e }) {
    const i = new FileReader();
    i.onload = (n) => {
      var s;
      e(n.target.result);
      let o;
      if ((s = this.config.uploader) != null && s.uploadByFile)
        o = this.config.uploader.uploadByFile(t), Ft(o) || console.warn("Custom uploader method uploadByFile should return a Promise");
      else {
        if (!this.config.endpoints.byFile) {
          this.onError("Upload endpoint (byFile) is not configured");
          return;
        }
        const a = new FormData();
        a.append(this.config.field ?? "image", t), this.config.additionalRequestData && Object.entries(this.config.additionalRequestData).forEach(([d, l]) => {
          a.append(d, l);
        }), o = dt.post({
          url: this.config.endpoints.byFile,
          data: a,
          type: dt.contentType.JSON,
          headers: this.config.additionalRequestHeaders
        }).then((d) => d.body);
      }
      o.then((a) => this.onUpload(a)).catch((a) => this.onError(a));
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
function ce(r, t) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    t && (i = i.filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), e.push.apply(e, i);
  }
  return e;
}
function Oe(r) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ce(Object(e), !0).forEach(function(i) {
      ai(r, i, e[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : ce(Object(e)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(e, i));
    });
  }
  return r;
}
function ni(r, t) {
  if (typeof r != "object" || !r) return r;
  var e = r[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(r, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
function De(r) {
  var t = ni(r, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Wt(r) {
  "@babel/helpers - typeof";
  return Wt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wt(r);
}
function oi(r, t) {
  if (!(r instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function de(r, t) {
  for (var e = 0; e < t.length; e++) {
    var i = t[e];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, De(i.key), i);
  }
}
function si(r, t, e) {
  return t && de(r.prototype, t), e && de(r, e), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function ai(r, t, e) {
  return t = De(t), t in r ? Object.defineProperty(r, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[t] = e, r;
}
function Te(r) {
  return ri(r) || li(r) || hi(r) || ci();
}
function ri(r) {
  if (Array.isArray(r)) return qt(r);
}
function li(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function hi(r, t) {
  if (r) {
    if (typeof r == "string") return qt(r, t);
    var e = Object.prototype.toString.call(r).slice(8, -1);
    if (e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set") return Array.from(r);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return qt(r, t);
  }
}
function qt(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var e = 0, i = new Array(t); e < t; e++) i[e] = r[e];
  return i;
}
function ci() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Lt = typeof window < "u" && typeof window.document < "u", X = Lt ? window : {}, ee = Lt && X.document.documentElement ? "ontouchstart" in X.document.documentElement : !1, ie = Lt ? "PointerEvent" in X : !1, k = "cropper", ne = "all", Me = "crop", Le = "move", Pe = "zoom", at = "e", rt = "w", ut = "s", Q = "n", bt = "ne", Ct = "nw", wt = "se", St = "sw", Xt = "".concat(k, "-crop"), ue = "".concat(k, "-disabled"), B = "".concat(k, "-hidden"), pe = "".concat(k, "-hide"), di = "".concat(k, "-invisible"), Mt = "".concat(k, "-modal"), Yt = "".concat(k, "-move"), _t = "".concat(k, "Action"), Ot = "".concat(k, "Preview"), oe = "crop", Be = "move", Ne = "none", Vt = "crop", Jt = "cropend", Zt = "cropmove", Kt = "cropstart", fe = "dblclick", ui = ee ? "touchstart" : "mousedown", pi = ee ? "touchmove" : "mousemove", fi = ee ? "touchend touchcancel" : "mouseup", me = ie ? "pointerdown" : ui, ge = ie ? "pointermove" : pi, ve = ie ? "pointerup pointercancel" : fi, ye = "ready", be = "resize", Ce = "wheel", Qt = "zoom", we = "image/jpeg", mi = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, gi = /^data:/, vi = /^data:image\/jpeg;base64,/, yi = /^img|canvas$/i, Ge = 200, He = 100, Se = {
  // Define the view mode of the cropper
  viewMode: 0,
  // 0, 1, 2, 3
  // Define the dragging mode of the cropper
  dragMode: oe,
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
  minContainerWidth: Ge,
  minContainerHeight: He,
  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
}, bi = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', Ci = Number.isNaN || X.isNaN;
function A(r) {
  return typeof r == "number" && !Ci(r);
}
var xe = function(t) {
  return t > 0 && t < 1 / 0;
};
function Ut(r) {
  return typeof r > "u";
}
function lt(r) {
  return Wt(r) === "object" && r !== null;
}
var wi = Object.prototype.hasOwnProperty;
function pt(r) {
  if (!lt(r))
    return !1;
  try {
    var t = r.constructor, e = t.prototype;
    return t && e && wi.call(e, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function P(r) {
  return typeof r == "function";
}
var Si = Array.prototype.slice;
function Fe(r) {
  return Array.from ? Array.from(r) : Si.call(r);
}
function T(r, t) {
  return r && P(t) && (Array.isArray(r) || A(r.length) ? Fe(r).forEach(function(e, i) {
    t.call(r, e, i, r);
  }) : lt(r) && Object.keys(r).forEach(function(e) {
    t.call(r, r[e], e, r);
  })), r;
}
var R = Object.assign || function(t) {
  for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    i[n - 1] = arguments[n];
  return lt(t) && i.length > 0 && i.forEach(function(o) {
    lt(o) && Object.keys(o).forEach(function(s) {
      t[s] = o[s];
    });
  }), t;
}, xi = /\.\d*(?:0|9){12}\d*$/;
function mt(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return xi.test(r) ? Math.round(r * t) / t : r;
}
var _i = /^width|height|left|top|marginLeft|marginTop$/;
function tt(r, t) {
  var e = r.style;
  T(t, function(i, n) {
    _i.test(n) && A(i) && (i = "".concat(i, "px")), e[n] = i;
  });
}
function Ii(r, t) {
  return r.classList ? r.classList.contains(t) : r.className.indexOf(t) > -1;
}
function M(r, t) {
  if (t) {
    if (A(r.length)) {
      T(r, function(i) {
        M(i, t);
      });
      return;
    }
    if (r.classList) {
      r.classList.add(t);
      return;
    }
    var e = r.className.trim();
    e ? e.indexOf(t) < 0 && (r.className = "".concat(e, " ").concat(t)) : r.className = t;
  }
}
function q(r, t) {
  if (t) {
    if (A(r.length)) {
      T(r, function(e) {
        q(e, t);
      });
      return;
    }
    if (r.classList) {
      r.classList.remove(t);
      return;
    }
    r.className.indexOf(t) >= 0 && (r.className = r.className.replace(t, ""));
  }
}
function ft(r, t, e) {
  if (t) {
    if (A(r.length)) {
      T(r, function(i) {
        ft(i, t, e);
      });
      return;
    }
    e ? M(r, t) : q(r, t);
  }
}
var Ai = /([a-z\d])([A-Z])/g;
function se(r) {
  return r.replace(Ai, "$1-$2").toLowerCase();
}
function te(r, t) {
  return lt(r[t]) ? r[t] : r.dataset ? r.dataset[t] : r.getAttribute("data-".concat(se(t)));
}
function It(r, t, e) {
  lt(e) ? r[t] = e : r.dataset ? r.dataset[t] = e : r.setAttribute("data-".concat(se(t)), e);
}
function Ei(r, t) {
  if (lt(r[t]))
    try {
      delete r[t];
    } catch {
      r[t] = void 0;
    }
  else if (r.dataset)
    try {
      delete r.dataset[t];
    } catch {
      r.dataset[t] = void 0;
    }
  else
    r.removeAttribute("data-".concat(se(t)));
}
var Ue = /\s\s*/, ze = function() {
  var r = !1;
  if (Lt) {
    var t = !1, e = function() {
    }, i = Object.defineProperty({}, "once", {
      get: function() {
        return r = !0, t;
      },
      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function(o) {
        t = o;
      }
    });
    X.addEventListener("test", e, i), X.removeEventListener("test", e, i);
  }
  return r;
}();
function U(r, t, e) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, n = e;
  t.trim().split(Ue).forEach(function(o) {
    if (!ze) {
      var s = r.listeners;
      s && s[o] && s[o][e] && (n = s[o][e], delete s[o][e], Object.keys(s[o]).length === 0 && delete s[o], Object.keys(s).length === 0 && delete r.listeners);
    }
    r.removeEventListener(o, n, i);
  });
}
function G(r, t, e) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, n = e;
  t.trim().split(Ue).forEach(function(o) {
    if (i.once && !ze) {
      var s = r.listeners, a = s === void 0 ? {} : s;
      n = function() {
        delete a[o][e], r.removeEventListener(o, n, i);
        for (var l = arguments.length, h = new Array(l), c = 0; c < l; c++)
          h[c] = arguments[c];
        e.apply(r, h);
      }, a[o] || (a[o] = {}), a[o][e] && r.removeEventListener(o, a[o][e], i), a[o][e] = n, r.listeners = a;
    }
    r.addEventListener(o, n, i);
  });
}
function gt(r, t, e) {
  var i;
  return P(Event) && P(CustomEvent) ? i = new CustomEvent(t, {
    detail: e,
    bubbles: !0,
    cancelable: !0
  }) : (i = document.createEvent("CustomEvent"), i.initCustomEvent(t, !0, !0, e)), r.dispatchEvent(i);
}
function je(r) {
  var t = r.getBoundingClientRect();
  return {
    left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: t.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var zt = X.location, ki = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function _e(r) {
  var t = r.match(ki);
  return t !== null && (t[1] !== zt.protocol || t[2] !== zt.hostname || t[3] !== zt.port);
}
function Ie(r) {
  var t = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return r + (r.indexOf("?") === -1 ? "?" : "&") + t;
}
function xt(r) {
  var t = r.rotate, e = r.scaleX, i = r.scaleY, n = r.translateX, o = r.translateY, s = [];
  A(n) && n !== 0 && s.push("translateX(".concat(n, "px)")), A(o) && o !== 0 && s.push("translateY(".concat(o, "px)")), A(t) && t !== 0 && s.push("rotate(".concat(t, "deg)")), A(e) && e !== 1 && s.push("scaleX(".concat(e, ")")), A(i) && i !== 1 && s.push("scaleY(".concat(i, ")"));
  var a = s.length ? s.join(" ") : "none";
  return {
    WebkitTransform: a,
    msTransform: a,
    transform: a
  };
}
function Ri(r) {
  var t = Oe({}, r), e = 0;
  return T(r, function(i, n) {
    delete t[n], T(t, function(o) {
      var s = Math.abs(i.startX - o.startX), a = Math.abs(i.startY - o.startY), d = Math.abs(i.endX - o.endX), l = Math.abs(i.endY - o.endY), h = Math.sqrt(s * s + a * a), c = Math.sqrt(d * d + l * l), u = (c - h) / h;
      Math.abs(u) > Math.abs(e) && (e = u);
    });
  }), e;
}
function Dt(r, t) {
  var e = r.pageX, i = r.pageY, n = {
    endX: e,
    endY: i
  };
  return t ? n : Oe({
    startX: e,
    startY: i
  }, n);
}
function Oi(r) {
  var t = 0, e = 0, i = 0;
  return T(r, function(n) {
    var o = n.startX, s = n.startY;
    t += o, e += s, i += 1;
  }), t /= i, e /= i, {
    pageX: t,
    pageY: e
  };
}
function et(r) {
  var t = r.aspectRatio, e = r.height, i = r.width, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", o = xe(i), s = xe(e);
  if (o && s) {
    var a = e * t;
    n === "contain" && a > i || n === "cover" && a < i ? e = i / t : i = e * t;
  } else o ? e = i / t : s && (i = e * t);
  return {
    width: i,
    height: e
  };
}
function Di(r) {
  var t = r.width, e = r.height, i = r.degree;
  if (i = Math.abs(i) % 180, i === 90)
    return {
      width: e,
      height: t
    };
  var n = i % 90 * Math.PI / 180, o = Math.sin(n), s = Math.cos(n), a = t * s + e * o, d = t * o + e * s;
  return i > 90 ? {
    width: d,
    height: a
  } : {
    width: a,
    height: d
  };
}
function Ti(r, t, e, i) {
  var n = t.aspectRatio, o = t.naturalWidth, s = t.naturalHeight, a = t.rotate, d = a === void 0 ? 0 : a, l = t.scaleX, h = l === void 0 ? 1 : l, c = t.scaleY, u = c === void 0 ? 1 : c, b = e.aspectRatio, C = e.naturalWidth, p = e.naturalHeight, f = i.fillColor, v = f === void 0 ? "transparent" : f, y = i.imageSmoothingEnabled, w = y === void 0 ? !0 : y, x = i.imageSmoothingQuality, S = x === void 0 ? "low" : x, m = i.maxWidth, _ = m === void 0 ? 1 / 0 : m, I = i.maxHeight, E = I === void 0 ? 1 / 0 : I, O = i.minWidth, $ = O === void 0 ? 0 : O, W = i.minHeight, H = W === void 0 ? 0 : W, N = document.createElement("canvas"), D = N.getContext("2d"), L = et({
    aspectRatio: b,
    width: _,
    height: E
  }), F = et({
    aspectRatio: b,
    width: $,
    height: H
  }, "cover"), ht = Math.min(L.width, Math.max(F.width, C)), ct = Math.min(L.height, Math.max(F.height, p)), it = et({
    aspectRatio: n,
    width: _,
    height: E
  }), Y = et({
    aspectRatio: n,
    width: $,
    height: H
  }, "cover"), V = Math.min(it.width, Math.max(Y.width, o)), nt = Math.min(it.height, Math.max(Y.height, s)), vt = [-V / 2, -nt / 2, V, nt];
  return N.width = mt(ht), N.height = mt(ct), D.fillStyle = v, D.fillRect(0, 0, ht, ct), D.save(), D.translate(ht / 2, ct / 2), D.rotate(d * Math.PI / 180), D.scale(h, u), D.imageSmoothingEnabled = w, D.imageSmoothingQuality = S, D.drawImage.apply(D, [r].concat(Te(vt.map(function(ot) {
    return Math.floor(mt(ot));
  })))), D.restore(), N;
}
var $e = String.fromCharCode;
function Mi(r, t, e) {
  var i = "";
  e += t;
  for (var n = t; n < e; n += 1)
    i += $e(r.getUint8(n));
  return i;
}
var Li = /^data:.*,/;
function Pi(r) {
  var t = r.replace(Li, ""), e = atob(t), i = new ArrayBuffer(e.length), n = new Uint8Array(i);
  return T(n, function(o, s) {
    n[s] = e.charCodeAt(s);
  }), i;
}
function Bi(r, t) {
  for (var e = [], i = 8192, n = new Uint8Array(r); n.length > 0; )
    e.push($e.apply(null, Fe(n.subarray(0, i)))), n = n.subarray(i);
  return "data:".concat(t, ";base64,").concat(btoa(e.join("")));
}
function Ni(r) {
  var t = new DataView(r), e;
  try {
    var i, n, o;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var s = t.byteLength, a = 2; a + 1 < s; ) {
        if (t.getUint8(a) === 255 && t.getUint8(a + 1) === 225) {
          n = a;
          break;
        }
        a += 1;
      }
    if (n) {
      var d = n + 4, l = n + 10;
      if (Mi(t, d, 4) === "Exif") {
        var h = t.getUint16(l);
        if (i = h === 18761, (i || h === 19789) && t.getUint16(l + 2, i) === 42) {
          var c = t.getUint32(l + 4, i);
          c >= 8 && (o = l + c);
        }
      }
    }
    if (o) {
      var u = t.getUint16(o, i), b, C;
      for (C = 0; C < u; C += 1)
        if (b = o + C * 12 + 2, t.getUint16(b, i) === 274) {
          b += 8, e = t.getUint16(b, i), t.setUint16(b, 1, i);
          break;
        }
    }
  } catch {
    e = 1;
  }
  return e;
}
function Gi(r) {
  var t = 0, e = 1, i = 1;
  switch (r) {
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
var Hi = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var t = this.element, e = this.options, i = this.container, n = this.cropper, o = Number(e.minContainerWidth), s = Number(e.minContainerHeight);
    M(n, B), q(t, B);
    var a = {
      width: Math.max(i.offsetWidth, o >= 0 ? o : Ge),
      height: Math.max(i.offsetHeight, s >= 0 ? s : He)
    };
    this.containerData = a, tt(n, {
      width: a.width,
      height: a.height
    }), M(t, B), q(n, B);
  },
  // Canvas (image wrapper)
  initCanvas: function() {
    var t = this.containerData, e = this.imageData, i = this.options.viewMode, n = Math.abs(e.rotate) % 180 === 90, o = n ? e.naturalHeight : e.naturalWidth, s = n ? e.naturalWidth : e.naturalHeight, a = o / s, d = t.width, l = t.height;
    t.height * a > t.width ? i === 3 ? d = t.height * a : l = t.width / a : i === 3 ? l = t.width / a : d = t.height * a;
    var h = {
      aspectRatio: a,
      naturalWidth: o,
      naturalHeight: s,
      width: d,
      height: l
    };
    this.canvasData = h, this.limited = i === 1 || i === 2, this.limitCanvas(!0, !0), h.width = Math.min(Math.max(h.width, h.minWidth), h.maxWidth), h.height = Math.min(Math.max(h.height, h.minHeight), h.maxHeight), h.left = (t.width - h.width) / 2, h.top = (t.height - h.height) / 2, h.oldLeft = h.left, h.oldTop = h.top, this.initialCanvasData = R({}, h);
  },
  limitCanvas: function(t, e) {
    var i = this.options, n = this.containerData, o = this.canvasData, s = this.cropBoxData, a = i.viewMode, d = o.aspectRatio, l = this.cropped && s;
    if (t) {
      var h = Number(i.minCanvasWidth) || 0, c = Number(i.minCanvasHeight) || 0;
      a > 1 ? (h = Math.max(h, n.width), c = Math.max(c, n.height), a === 3 && (c * d > h ? h = c * d : c = h / d)) : a > 0 && (h ? h = Math.max(h, l ? s.width : 0) : c ? c = Math.max(c, l ? s.height : 0) : l && (h = s.width, c = s.height, c * d > h ? h = c * d : c = h / d));
      var u = et({
        aspectRatio: d,
        width: h,
        height: c
      });
      h = u.width, c = u.height, o.minWidth = h, o.minHeight = c, o.maxWidth = 1 / 0, o.maxHeight = 1 / 0;
    }
    if (e)
      if (a > (l ? 0 : 1)) {
        var b = n.width - o.width, C = n.height - o.height;
        o.minLeft = Math.min(0, b), o.minTop = Math.min(0, C), o.maxLeft = Math.max(0, b), o.maxTop = Math.max(0, C), l && this.limited && (o.minLeft = Math.min(s.left, s.left + (s.width - o.width)), o.minTop = Math.min(s.top, s.top + (s.height - o.height)), o.maxLeft = s.left, o.maxTop = s.top, a === 2 && (o.width >= n.width && (o.minLeft = Math.min(0, b), o.maxLeft = Math.max(0, b)), o.height >= n.height && (o.minTop = Math.min(0, C), o.maxTop = Math.max(0, C))));
      } else
        o.minLeft = -o.width, o.minTop = -o.height, o.maxLeft = n.width, o.maxTop = n.height;
  },
  renderCanvas: function(t, e) {
    var i = this.canvasData, n = this.imageData;
    if (e) {
      var o = Di({
        width: n.naturalWidth * Math.abs(n.scaleX || 1),
        height: n.naturalHeight * Math.abs(n.scaleY || 1),
        degree: n.rotate || 0
      }), s = o.width, a = o.height, d = i.width * (s / i.naturalWidth), l = i.height * (a / i.naturalHeight);
      i.left -= (d - i.width) / 2, i.top -= (l - i.height) / 2, i.width = d, i.height = l, i.aspectRatio = s / a, i.naturalWidth = s, i.naturalHeight = a, this.limitCanvas(!0, !1);
    }
    (i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCanvas(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, tt(this.canvas, R({
      width: i.width,
      height: i.height
    }, xt({
      translateX: i.left,
      translateY: i.top
    }))), this.renderImage(t), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(t) {
    var e = this.canvasData, i = this.imageData, n = i.naturalWidth * (e.width / e.naturalWidth), o = i.naturalHeight * (e.height / e.naturalHeight);
    R(i, {
      width: n,
      height: o,
      left: (e.width - n) / 2,
      top: (e.height - o) / 2
    }), tt(this.image, R({
      width: i.width,
      height: i.height
    }, xt(R({
      translateX: i.left,
      translateY: i.top
    }, i)))), t && this.output();
  },
  initCropBox: function() {
    var t = this.options, e = this.canvasData, i = t.aspectRatio || t.initialAspectRatio, n = Number(t.autoCropArea) || 0.8, o = {
      width: e.width,
      height: e.height
    };
    i && (e.height * i > e.width ? o.height = o.width / i : o.width = o.height * i), this.cropBoxData = o, this.limitCropBox(!0, !0), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), o.width = Math.max(o.minWidth, o.width * n), o.height = Math.max(o.minHeight, o.height * n), o.left = e.left + (e.width - o.width) / 2, o.top = e.top + (e.height - o.height) / 2, o.oldLeft = o.left, o.oldTop = o.top, this.initialCropBoxData = R({}, o);
  },
  limitCropBox: function(t, e) {
    var i = this.options, n = this.containerData, o = this.canvasData, s = this.cropBoxData, a = this.limited, d = i.aspectRatio;
    if (t) {
      var l = Number(i.minCropBoxWidth) || 0, h = Number(i.minCropBoxHeight) || 0, c = a ? Math.min(n.width, o.width, o.width + o.left, n.width - o.left) : n.width, u = a ? Math.min(n.height, o.height, o.height + o.top, n.height - o.top) : n.height;
      l = Math.min(l, n.width), h = Math.min(h, n.height), d && (l && h ? h * d > l ? h = l / d : l = h * d : l ? h = l / d : h && (l = h * d), u * d > c ? u = c / d : c = u * d), s.minWidth = Math.min(l, c), s.minHeight = Math.min(h, u), s.maxWidth = c, s.maxHeight = u;
    }
    e && (a ? (s.minLeft = Math.max(0, o.left), s.minTop = Math.max(0, o.top), s.maxLeft = Math.min(n.width, o.left + o.width) - s.width, s.maxTop = Math.min(n.height, o.top + o.height) - s.height) : (s.minLeft = 0, s.minTop = 0, s.maxLeft = n.width - s.width, s.maxTop = n.height - s.height));
  },
  renderCropBox: function() {
    var t = this.options, e = this.containerData, i = this.cropBoxData;
    (i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCropBox(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, t.movable && t.cropBoxMovable && It(this.face, _t, i.width >= e.width && i.height >= e.height ? Le : ne), tt(this.cropBox, R({
      width: i.width,
      height: i.height
    }, xt({
      translateX: i.left,
      translateY: i.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), gt(this.element, Vt, this.getData());
  }
}, Fi = {
  initPreview: function() {
    var t = this.element, e = this.crossOrigin, i = this.options.preview, n = e ? this.crossOriginUrl : this.url, o = t.alt || "The image to preview", s = document.createElement("img");
    if (e && (s.crossOrigin = e), s.src = n, s.alt = o, this.viewBox.appendChild(s), this.viewBoxImage = s, !!i) {
      var a = i;
      typeof i == "string" ? a = t.ownerDocument.querySelectorAll(i) : i.querySelector && (a = [i]), this.previews = a, T(a, function(d) {
        var l = document.createElement("img");
        It(d, Ot, {
          width: d.offsetWidth,
          height: d.offsetHeight,
          html: d.innerHTML
        }), e && (l.crossOrigin = e), l.src = n, l.alt = o, l.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', d.innerHTML = "", d.appendChild(l);
      });
    }
  },
  resetPreview: function() {
    T(this.previews, function(t) {
      var e = te(t, Ot);
      tt(t, {
        width: e.width,
        height: e.height
      }), t.innerHTML = e.html, Ei(t, Ot);
    });
  },
  preview: function() {
    var t = this.imageData, e = this.canvasData, i = this.cropBoxData, n = i.width, o = i.height, s = t.width, a = t.height, d = i.left - e.left - t.left, l = i.top - e.top - t.top;
    !this.cropped || this.disabled || (tt(this.viewBoxImage, R({
      width: s,
      height: a
    }, xt(R({
      translateX: -d,
      translateY: -l
    }, t)))), T(this.previews, function(h) {
      var c = te(h, Ot), u = c.width, b = c.height, C = u, p = b, f = 1;
      n && (f = u / n, p = o * f), o && p > b && (f = b / o, C = n * f, p = b), tt(h, {
        width: C,
        height: p
      }), tt(h.getElementsByTagName("img")[0], R({
        width: s * f,
        height: a * f
      }, xt(R({
        translateX: -d * f,
        translateY: -l * f
      }, t))));
    }));
  }
}, Ui = {
  bind: function() {
    var t = this.element, e = this.options, i = this.cropper;
    P(e.cropstart) && G(t, Kt, e.cropstart), P(e.cropmove) && G(t, Zt, e.cropmove), P(e.cropend) && G(t, Jt, e.cropend), P(e.crop) && G(t, Vt, e.crop), P(e.zoom) && G(t, Qt, e.zoom), G(i, me, this.onCropStart = this.cropStart.bind(this)), e.zoomable && e.zoomOnWheel && G(i, Ce, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), e.toggleDragModeOnDblclick && G(i, fe, this.onDblclick = this.dblclick.bind(this)), G(t.ownerDocument, ge, this.onCropMove = this.cropMove.bind(this)), G(t.ownerDocument, ve, this.onCropEnd = this.cropEnd.bind(this)), e.responsive && G(window, be, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var t = this.element, e = this.options, i = this.cropper;
    P(e.cropstart) && U(t, Kt, e.cropstart), P(e.cropmove) && U(t, Zt, e.cropmove), P(e.cropend) && U(t, Jt, e.cropend), P(e.crop) && U(t, Vt, e.crop), P(e.zoom) && U(t, Qt, e.zoom), U(i, me, this.onCropStart), e.zoomable && e.zoomOnWheel && U(i, Ce, this.onWheel, {
      passive: !1,
      capture: !0
    }), e.toggleDragModeOnDblclick && U(i, fe, this.onDblclick), U(t.ownerDocument, ge, this.onCropMove), U(t.ownerDocument, ve, this.onCropEnd), e.responsive && U(window, be, this.onResize);
  }
}, zi = {
  resize: function() {
    if (!this.disabled) {
      var t = this.options, e = this.container, i = this.containerData, n = e.offsetWidth / i.width, o = e.offsetHeight / i.height, s = Math.abs(n - 1) > Math.abs(o - 1) ? n : o;
      if (s !== 1) {
        var a, d;
        t.restore && (a = this.getCanvasData(), d = this.getCropBoxData()), this.render(), t.restore && (this.setCanvasData(T(a, function(l, h) {
          a[h] = l * s;
        })), this.setCropBoxData(T(d, function(l, h) {
          d[h] = l * s;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === Ne || this.setDragMode(Ii(this.dragBox, Xt) ? Be : oe);
  },
  wheel: function(t) {
    var e = this, i = Number(this.options.wheelZoomRatio) || 0.1, n = 1;
    this.disabled || (t.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      e.wheeling = !1;
    }, 50), t.deltaY ? n = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? n = -t.wheelDelta / 120 : t.detail && (n = t.detail > 0 ? 1 : -1), this.zoom(-n * i, t)));
  },
  cropStart: function(t) {
    var e = t.buttons, i = t.button;
    if (!(this.disabled || (t.type === "mousedown" || t.type === "pointerdown" && t.pointerType === "mouse") && // No primary button (Usually the left button)
    (A(e) && e !== 1 || A(i) && i !== 0 || t.ctrlKey))) {
      var n = this.options, o = this.pointers, s;
      t.changedTouches ? T(t.changedTouches, function(a) {
        o[a.identifier] = Dt(a);
      }) : o[t.pointerId || 0] = Dt(t), Object.keys(o).length > 1 && n.zoomable && n.zoomOnTouch ? s = Pe : s = te(t.target, _t), mi.test(s) && gt(this.element, Kt, {
        originalEvent: t,
        action: s
      }) !== !1 && (t.preventDefault(), this.action = s, this.cropping = !1, s === Me && (this.cropping = !0, M(this.dragBox, Mt)));
    }
  },
  cropMove: function(t) {
    var e = this.action;
    if (!(this.disabled || !e)) {
      var i = this.pointers;
      t.preventDefault(), gt(this.element, Zt, {
        originalEvent: t,
        action: e
      }) !== !1 && (t.changedTouches ? T(t.changedTouches, function(n) {
        R(i[n.identifier] || {}, Dt(n, !0));
      }) : R(i[t.pointerId || 0] || {}, Dt(t, !0)), this.change(t));
    }
  },
  cropEnd: function(t) {
    if (!this.disabled) {
      var e = this.action, i = this.pointers;
      t.changedTouches ? T(t.changedTouches, function(n) {
        delete i[n.identifier];
      }) : delete i[t.pointerId || 0], e && (t.preventDefault(), Object.keys(i).length || (this.action = ""), this.cropping && (this.cropping = !1, ft(this.dragBox, Mt, this.cropped && this.options.modal)), gt(this.element, Jt, {
        originalEvent: t,
        action: e
      }));
    }
  }
}, ji = {
  change: function(t) {
    var e = this.options, i = this.canvasData, n = this.containerData, o = this.cropBoxData, s = this.pointers, a = this.action, d = e.aspectRatio, l = o.left, h = o.top, c = o.width, u = o.height, b = l + c, C = h + u, p = 0, f = 0, v = n.width, y = n.height, w = !0, x;
    !d && t.shiftKey && (d = c && u ? c / u : 1), this.limited && (p = o.minLeft, f = o.minTop, v = p + Math.min(n.width, i.width, i.left + i.width), y = f + Math.min(n.height, i.height, i.top + i.height));
    var S = s[Object.keys(s)[0]], m = {
      x: S.endX - S.startX,
      y: S.endY - S.startY
    }, _ = function(E) {
      switch (E) {
        case at:
          b + m.x > v && (m.x = v - b);
          break;
        case rt:
          l + m.x < p && (m.x = p - l);
          break;
        case Q:
          h + m.y < f && (m.y = f - h);
          break;
        case ut:
          C + m.y > y && (m.y = y - C);
          break;
      }
    };
    switch (a) {
      case ne:
        l += m.x, h += m.y;
        break;
      case at:
        if (m.x >= 0 && (b >= v || d && (h <= f || C >= y))) {
          w = !1;
          break;
        }
        _(at), c += m.x, c < 0 && (a = rt, c = -c, l -= c), d && (u = c / d, h += (o.height - u) / 2);
        break;
      case Q:
        if (m.y <= 0 && (h <= f || d && (l <= p || b >= v))) {
          w = !1;
          break;
        }
        _(Q), u -= m.y, h += m.y, u < 0 && (a = ut, u = -u, h -= u), d && (c = u * d, l += (o.width - c) / 2);
        break;
      case rt:
        if (m.x <= 0 && (l <= p || d && (h <= f || C >= y))) {
          w = !1;
          break;
        }
        _(rt), c -= m.x, l += m.x, c < 0 && (a = at, c = -c, l -= c), d && (u = c / d, h += (o.height - u) / 2);
        break;
      case ut:
        if (m.y >= 0 && (C >= y || d && (l <= p || b >= v))) {
          w = !1;
          break;
        }
        _(ut), u += m.y, u < 0 && (a = Q, u = -u, h -= u), d && (c = u * d, l += (o.width - c) / 2);
        break;
      case bt:
        if (d) {
          if (m.y <= 0 && (h <= f || b >= v)) {
            w = !1;
            break;
          }
          _(Q), u -= m.y, h += m.y, c = u * d;
        } else
          _(Q), _(at), m.x >= 0 ? b < v ? c += m.x : m.y <= 0 && h <= f && (w = !1) : c += m.x, m.y <= 0 ? h > f && (u -= m.y, h += m.y) : (u -= m.y, h += m.y);
        c < 0 && u < 0 ? (a = St, u = -u, c = -c, h -= u, l -= c) : c < 0 ? (a = Ct, c = -c, l -= c) : u < 0 && (a = wt, u = -u, h -= u);
        break;
      case Ct:
        if (d) {
          if (m.y <= 0 && (h <= f || l <= p)) {
            w = !1;
            break;
          }
          _(Q), u -= m.y, h += m.y, c = u * d, l += o.width - c;
        } else
          _(Q), _(rt), m.x <= 0 ? l > p ? (c -= m.x, l += m.x) : m.y <= 0 && h <= f && (w = !1) : (c -= m.x, l += m.x), m.y <= 0 ? h > f && (u -= m.y, h += m.y) : (u -= m.y, h += m.y);
        c < 0 && u < 0 ? (a = wt, u = -u, c = -c, h -= u, l -= c) : c < 0 ? (a = bt, c = -c, l -= c) : u < 0 && (a = St, u = -u, h -= u);
        break;
      case St:
        if (d) {
          if (m.x <= 0 && (l <= p || C >= y)) {
            w = !1;
            break;
          }
          _(rt), c -= m.x, l += m.x, u = c / d;
        } else
          _(ut), _(rt), m.x <= 0 ? l > p ? (c -= m.x, l += m.x) : m.y >= 0 && C >= y && (w = !1) : (c -= m.x, l += m.x), m.y >= 0 ? C < y && (u += m.y) : u += m.y;
        c < 0 && u < 0 ? (a = bt, u = -u, c = -c, h -= u, l -= c) : c < 0 ? (a = wt, c = -c, l -= c) : u < 0 && (a = Ct, u = -u, h -= u);
        break;
      case wt:
        if (d) {
          if (m.x >= 0 && (b >= v || C >= y)) {
            w = !1;
            break;
          }
          _(at), c += m.x, u = c / d;
        } else
          _(ut), _(at), m.x >= 0 ? b < v ? c += m.x : m.y >= 0 && C >= y && (w = !1) : c += m.x, m.y >= 0 ? C < y && (u += m.y) : u += m.y;
        c < 0 && u < 0 ? (a = Ct, u = -u, c = -c, h -= u, l -= c) : c < 0 ? (a = St, c = -c, l -= c) : u < 0 && (a = bt, u = -u, h -= u);
        break;
      case Le:
        this.move(m.x, m.y), w = !1;
        break;
      case Pe:
        this.zoom(Ri(s), t), w = !1;
        break;
      case Me:
        if (!m.x || !m.y) {
          w = !1;
          break;
        }
        x = je(this.cropper), l = S.startX - x.left, h = S.startY - x.top, c = o.minWidth, u = o.minHeight, m.x > 0 ? a = m.y > 0 ? wt : bt : m.x < 0 && (l -= c, a = m.y > 0 ? St : Ct), m.y < 0 && (h -= u), this.cropped || (q(this.cropBox, B), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    w && (o.width = c, o.height = u, o.left = l, o.top = h, this.action = a, this.renderCropBox()), T(s, function(I) {
      I.startX = I.endX, I.startY = I.endY;
    });
  }
}, $i = {
  // Show the crop box manually
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && M(this.dragBox, Mt), q(this.cropBox, B), this.setCropBoxData(this.initialCropBoxData)), this;
  },
  // Reset the image and crop box to their initial states
  reset: function() {
    return this.ready && !this.disabled && (this.imageData = R({}, this.initialImageData), this.canvasData = R({}, this.initialCanvasData), this.cropBoxData = R({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this;
  },
  // Clear the crop box
  clear: function() {
    return this.cropped && !this.disabled && (R(this.cropBoxData, {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), q(this.dragBox, Mt), M(this.cropBox, B)), this;
  },
  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && t && (this.isImg && (this.element.src = t), e ? (this.url = t, this.image.src = t, this.ready && (this.viewBoxImage.src = t, T(this.previews, function(i) {
      i.getElementsByTagName("img")[0].src = t;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(t))), this;
  },
  // Enable (unfreeze) the cropper
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, q(this.cropper, ue)), this;
  },
  // Disable (freeze) the cropper
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, M(this.cropper, ue)), this;
  },
  /**
   * Destroy the cropper and remove the instance from the image
   * @returns {Cropper} this
   */
  destroy: function() {
    var t = this.element;
    return t[k] ? (t[k] = void 0, this.isImg && this.replaced && (t.src = this.originalUrl), this.uncreate(), this) : this;
  },
  /**
   * Move the canvas with relative offsets
   * @param {number} offsetX - The relative offset distance on the x-axis.
   * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
   * @returns {Cropper} this
   */
  move: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, i = this.canvasData, n = i.left, o = i.top;
    return this.moveTo(Ut(t) ? t : n + Number(t), Ut(e) ? e : o + Number(e));
  },
  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, i = this.canvasData, n = !1;
    return t = Number(t), e = Number(e), this.ready && !this.disabled && this.options.movable && (A(t) && (i.left = t, n = !0), A(e) && (i.top = e, n = !0), n && this.renderCanvas(!0)), this;
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
    var n = this.options, o = this.canvasData, s = o.width, a = o.height, d = o.naturalWidth, l = o.naturalHeight;
    if (t = Number(t), t >= 0 && this.ready && !this.disabled && n.zoomable) {
      var h = d * t, c = l * t;
      if (gt(this.element, Qt, {
        ratio: t,
        oldRatio: s / d,
        originalEvent: i
      }) === !1)
        return this;
      if (i) {
        var u = this.pointers, b = je(this.cropper), C = u && Object.keys(u).length ? Oi(u) : {
          pageX: i.pageX,
          pageY: i.pageY
        };
        o.left -= (h - s) * ((C.pageX - b.left - o.left) / s), o.top -= (c - a) * ((C.pageY - b.top - o.top) / a);
      } else pt(e) && A(e.x) && A(e.y) ? (o.left -= (h - s) * ((e.x - o.left) / s), o.top -= (c - a) * ((e.y - o.top) / a)) : (o.left -= (h - s) / 2, o.top -= (c - a) / 2);
      o.width = h, o.height = c, this.renderCanvas(!0);
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
    return t = Number(t), A(t) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = t % 360, this.renderCanvas(!0, !0)), this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Cropper} this
   */
  scaleX: function(t) {
    var e = this.imageData.scaleY;
    return this.scale(t, A(e) ? e : 1);
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scaleY: function(t) {
    var e = this.imageData.scaleX;
    return this.scale(A(e) ? e : 1, t);
  },
  /**
   * Scale the image
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scale: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, i = this.imageData, n = !1;
    return t = Number(t), e = Number(e), this.ready && !this.disabled && this.options.scalable && (A(t) && (i.scaleX = t, n = !0), A(e) && (i.scaleY = e, n = !0), n && this.renderCanvas(!0, !0)), this;
  },
  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.options, i = this.imageData, n = this.canvasData, o = this.cropBoxData, s;
    if (this.ready && this.cropped) {
      s = {
        x: o.left - n.left,
        y: o.top - n.top,
        width: o.width,
        height: o.height
      };
      var a = i.width / i.naturalWidth;
      if (T(s, function(h, c) {
        s[c] = h / a;
      }), t) {
        var d = Math.round(s.y + s.height), l = Math.round(s.x + s.width);
        s.x = Math.round(s.x), s.y = Math.round(s.y), s.width = l - s.x, s.height = d - s.y;
      }
    } else
      s = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    return e.rotatable && (s.rotate = i.rotate || 0), e.scalable && (s.scaleX = i.scaleX || 1, s.scaleY = i.scaleY || 1), s;
  },
  /**
   * Set the cropped area position and size with new data
   * @param {Object} data - The new data.
   * @returns {Cropper} this
   */
  setData: function(t) {
    var e = this.options, i = this.imageData, n = this.canvasData, o = {};
    if (this.ready && !this.disabled && pt(t)) {
      var s = !1;
      e.rotatable && A(t.rotate) && t.rotate !== i.rotate && (i.rotate = t.rotate, s = !0), e.scalable && (A(t.scaleX) && t.scaleX !== i.scaleX && (i.scaleX = t.scaleX, s = !0), A(t.scaleY) && t.scaleY !== i.scaleY && (i.scaleY = t.scaleY, s = !0)), s && this.renderCanvas(!0, !0);
      var a = i.width / i.naturalWidth;
      A(t.x) && (o.left = t.x * a + n.left), A(t.y) && (o.top = t.y * a + n.top), A(t.width) && (o.width = t.width * a), A(t.height) && (o.height = t.height * a), this.setCropBoxData(o);
    }
    return this;
  },
  /**
   * Get the container size data.
   * @returns {Object} The result container data.
   */
  getContainerData: function() {
    return this.ready ? R({}, this.containerData) : {};
  },
  /**
   * Get the image position and size data.
   * @returns {Object} The result image data.
   */
  getImageData: function() {
    return this.sized ? R({}, this.imageData) : {};
  },
  /**
   * Get the canvas position and size data.
   * @returns {Object} The result canvas data.
   */
  getCanvasData: function() {
    var t = this.canvasData, e = {};
    return this.ready && T(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(i) {
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
    return this.ready && !this.disabled && pt(t) && (A(t.left) && (e.left = t.left), A(t.top) && (e.top = t.top), A(t.width) ? (e.width = t.width, e.height = t.width / i) : A(t.height) && (e.height = t.height, e.width = t.height * i), this.renderCanvas(!0)), this;
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
    var e = this.cropBoxData, i = this.options.aspectRatio, n, o;
    return this.ready && this.cropped && !this.disabled && pt(t) && (A(t.left) && (e.left = t.left), A(t.top) && (e.top = t.top), A(t.width) && t.width !== e.width && (n = !0, e.width = t.width), A(t.height) && t.height !== e.height && (o = !0, e.height = t.height), i && (n ? e.height = e.width / i : o && (e.width = e.height * i)), this.renderCropBox()), this;
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
    var e = this.canvasData, i = Ti(this.image, this.imageData, e, t);
    if (!this.cropped)
      return i;
    var n = this.getData(t.rounded), o = n.x, s = n.y, a = n.width, d = n.height, l = i.width / Math.floor(e.naturalWidth);
    l !== 1 && (o *= l, s *= l, a *= l, d *= l);
    var h = a / d, c = et({
      aspectRatio: h,
      width: t.maxWidth || 1 / 0,
      height: t.maxHeight || 1 / 0
    }), u = et({
      aspectRatio: h,
      width: t.minWidth || 0,
      height: t.minHeight || 0
    }, "cover"), b = et({
      aspectRatio: h,
      width: t.width || (l !== 1 ? i.width : a),
      height: t.height || (l !== 1 ? i.height : d)
    }), C = b.width, p = b.height;
    C = Math.min(c.width, Math.max(u.width, C)), p = Math.min(c.height, Math.max(u.height, p));
    var f = document.createElement("canvas"), v = f.getContext("2d");
    f.width = mt(C), f.height = mt(p), v.fillStyle = t.fillColor || "transparent", v.fillRect(0, 0, C, p);
    var y = t.imageSmoothingEnabled, w = y === void 0 ? !0 : y, x = t.imageSmoothingQuality;
    v.imageSmoothingEnabled = w, x && (v.imageSmoothingQuality = x);
    var S = i.width, m = i.height, _ = o, I = s, E, O, $, W, H, N;
    _ <= -a || _ > S ? (_ = 0, E = 0, $ = 0, H = 0) : _ <= 0 ? ($ = -_, _ = 0, E = Math.min(S, a + _), H = E) : _ <= S && ($ = 0, E = Math.min(a, S - _), H = E), E <= 0 || I <= -d || I > m ? (I = 0, O = 0, W = 0, N = 0) : I <= 0 ? (W = -I, I = 0, O = Math.min(m, d + I), N = O) : I <= m && (W = 0, O = Math.min(d, m - I), N = O);
    var D = [_, I, E, O];
    if (H > 0 && N > 0) {
      var L = C / a;
      D.push($ * L, W * L, H * L, N * L);
    }
    return v.drawImage.apply(v, [i].concat(Te(D.map(function(F) {
      return Math.floor(mt(F));
    })))), f;
  },
  /**
   * Change the aspect ratio of the crop box.
   * @param {number} aspectRatio - The new aspect ratio.
   * @returns {Cropper} this
   */
  setAspectRatio: function(t) {
    var e = this.options;
    return !this.disabled && !Ut(t) && (e.aspectRatio = Math.max(0, t) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  /**
   * Change the drag mode.
   * @param {string} mode - The new drag mode.
   * @returns {Cropper} this
   */
  setDragMode: function(t) {
    var e = this.options, i = this.dragBox, n = this.face;
    if (this.ready && !this.disabled) {
      var o = t === oe, s = e.movable && t === Be;
      t = o || s ? t : Ne, e.dragMode = t, It(i, _t, t), ft(i, Xt, o), ft(i, Yt, s), e.cropBoxMovable || (It(n, _t, t), ft(n, Xt, o), ft(n, Yt, s));
    }
    return this;
  }
}, Wi = X.Cropper, We = /* @__PURE__ */ function() {
  function r(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (oi(this, r), !t || !yi.test(t.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = t, this.options = R({}, Se, pt(e) && e), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return si(r, [{
    key: "init",
    value: function() {
      var e = this.element, i = e.tagName.toLowerCase(), n;
      if (!e[k]) {
        if (e[k] = this, i === "img") {
          if (this.isImg = !0, n = e.getAttribute("src") || "", this.originalUrl = n, !n)
            return;
          n = e.src;
        } else i === "canvas" && window.HTMLCanvasElement && (n = e.toDataURL());
        this.load(n);
      }
    }
  }, {
    key: "load",
    value: function(e) {
      var i = this;
      if (e) {
        this.url = e, this.imageData = {};
        var n = this.element, o = this.options;
        if (!o.rotatable && !o.scalable && (o.checkOrientation = !1), !o.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (gi.test(e)) {
          vi.test(e) ? this.read(Pi(e)) : this.clone();
          return;
        }
        var s = new XMLHttpRequest(), a = this.clone.bind(this);
        this.reloading = !0, this.xhr = s, s.onabort = a, s.onerror = a, s.ontimeout = a, s.onprogress = function() {
          s.getResponseHeader("content-type") !== we && s.abort();
        }, s.onload = function() {
          i.read(s.response);
        }, s.onloadend = function() {
          i.reloading = !1, i.xhr = null;
        }, o.checkCrossOrigin && _e(e) && n.crossOrigin && (e = Ie(e)), s.open("GET", e, !0), s.responseType = "arraybuffer", s.withCredentials = n.crossOrigin === "use-credentials", s.send();
      }
    }
  }, {
    key: "read",
    value: function(e) {
      var i = this.options, n = this.imageData, o = Ni(e), s = 0, a = 1, d = 1;
      if (o > 1) {
        this.url = Bi(e, we);
        var l = Gi(o);
        s = l.rotate, a = l.scaleX, d = l.scaleY;
      }
      i.rotatable && (n.rotate = s), i.scalable && (n.scaleX = a, n.scaleY = d), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var e = this.element, i = this.url, n = e.crossOrigin, o = i;
      this.options.checkCrossOrigin && _e(i) && (n || (n = "anonymous"), o = Ie(i)), this.crossOrigin = n, this.crossOriginUrl = o;
      var s = document.createElement("img");
      n && (s.crossOrigin = n), s.src = o || i, s.alt = e.alt || "The image to crop", this.image = s, s.onload = this.start.bind(this), s.onerror = this.stop.bind(this), M(s, pe), e.parentNode.insertBefore(s, e.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var e = this, i = this.image;
      i.onload = null, i.onerror = null, this.sizing = !0;
      var n = X.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(X.navigator.userAgent), o = function(l, h) {
        R(e.imageData, {
          naturalWidth: l,
          naturalHeight: h,
          aspectRatio: l / h
        }), e.initialImageData = R({}, e.imageData), e.sizing = !1, e.sized = !0, e.build();
      };
      if (i.naturalWidth && !n) {
        o(i.naturalWidth, i.naturalHeight);
        return;
      }
      var s = document.createElement("img"), a = document.body || document.documentElement;
      this.sizingImage = s, s.onload = function() {
        o(s.width, s.height), n || a.removeChild(s);
      }, s.src = i.src, n || (s.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", a.appendChild(s));
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
        var e = this.element, i = this.options, n = this.image, o = e.parentNode, s = document.createElement("div");
        s.innerHTML = bi;
        var a = s.querySelector(".".concat(k, "-container")), d = a.querySelector(".".concat(k, "-canvas")), l = a.querySelector(".".concat(k, "-drag-box")), h = a.querySelector(".".concat(k, "-crop-box")), c = h.querySelector(".".concat(k, "-face"));
        this.container = o, this.cropper = a, this.canvas = d, this.dragBox = l, this.cropBox = h, this.viewBox = a.querySelector(".".concat(k, "-view-box")), this.face = c, d.appendChild(n), M(e, B), o.insertBefore(a, e.nextSibling), q(n, pe), this.initPreview(), this.bind(), i.initialAspectRatio = Math.max(0, i.initialAspectRatio) || NaN, i.aspectRatio = Math.max(0, i.aspectRatio) || NaN, i.viewMode = Math.max(0, Math.min(3, Math.round(i.viewMode))) || 0, M(h, B), i.guides || M(h.getElementsByClassName("".concat(k, "-dashed")), B), i.center || M(h.getElementsByClassName("".concat(k, "-center")), B), i.background && M(a, "".concat(k, "-bg")), i.highlight || M(c, di), i.cropBoxMovable && (M(c, Yt), It(c, _t, ne)), i.cropBoxResizable || (M(h.getElementsByClassName("".concat(k, "-line")), B), M(h.getElementsByClassName("".concat(k, "-point")), B)), this.render(), this.ready = !0, this.setDragMode(i.dragMode), i.autoCrop && this.crop(), this.setData(i.data), P(i.ready) && G(e, ye, i.ready, {
          once: !0
        }), gt(e, ye);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      if (this.ready) {
        this.ready = !1, this.unbind(), this.resetPreview();
        var e = this.cropper.parentNode;
        e && e.removeChild(this.cropper), q(this.element, B);
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
      return window.Cropper = Wi, r;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(e) {
      R(Se, pt(e) && e);
    }
  }]);
}();
R(We.prototype, Hi, Fi, Ui, zi, ji, $i);
const Tt = (r) => Math.min(1, Math.max(0, r)), Ae = ["16:9", "3:2", "1:1"], jt = "3:2";
class qi {
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
  open(t, e, i = !1, n = jt) {
    return this.overlay && this.destroy(), new Promise((o) => {
      this.resolvePromise = o;
      const s = this.normalizeCropAspectRatio(n);
      this.overlay = this.createOverlay(i, s);
      const a = this.overlay.querySelector(".gallery-crop-modal__image-wrapper");
      if (!a) {
        this.close(null);
        return;
      }
      const d = g("img", null, {
        src: t
      });
      d.style.maxWidth = "100%", d.style.display = "block", a.appendChild(d), document.body.appendChild(this.overlay), d.onload = () => {
        this.cropper = new We(d, {
          viewMode: 1,
          autoCropArea: 1,
          aspectRatio: this.numericAspectRatio(s),
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
    const i = g("div", "gallery-crop-modal");
    i.addEventListener("click", () => this.close(null));
    const n = g("div", "gallery-crop-modal__container");
    n.addEventListener("click", (u) => u.stopPropagation());
    const o = g("div", "gallery-crop-modal__image-wrapper"), s = g("div", "gallery-crop-modal__options"), a = g("label", "gallery-crop-modal__option");
    this.showOriginalOnClickInput = g("input", null, { type: "checkbox" }), this.showOriginalOnClickInput.checked = t, a.append(
      this.showOriginalOnClickInput,
      document.createTextNode("Показывать необрезанное изображение по клику")
    ), s.appendChild(a), s.appendChild(this.createAspectRatioOptions(e));
    const d = g("div", "gallery-crop-modal__actions"), l = g("button", ["gallery-crop-modal__btn", "gallery-crop-modal__btn--danger"]);
    l.textContent = "Сбросить", l.addEventListener("click", () => {
      this.close({
        crop: "",
        croppedWidth: 0,
        croppedHeight: 0,
        showOriginalOnClick: !1,
        cropAspectRatio: jt
      });
    });
    const h = g("button", "gallery-crop-modal__btn");
    h.textContent = "Отмена", h.addEventListener("click", () => this.close(null));
    const c = g("button", ["gallery-crop-modal__btn", "gallery-crop-modal__btn--primary"]);
    return c.textContent = "Применить", c.addEventListener("click", () => this.handleApply()), d.appendChild(l), d.appendChild(h), d.appendChild(c), n.appendChild(o), n.appendChild(s), n.appendChild(d), i.appendChild(n), i;
  }
  /**
   * Обрабатывает нажатие кнопки "Применить" — собирает данные кадрирования
   * и закрывает модальное окно с результатом.
   */
  handleApply() {
    var n;
    if (!this.cropper) {
      this.close(null);
      return;
    }
    const t = this.cropper.getData(!0), e = this.cropper.getImageData(), i = this.cropDataToString(t, e.naturalWidth, e.naturalHeight);
    this.close({
      ...i,
      showOriginalOnClick: ((n = this.showOriginalOnClickInput) == null ? void 0 : n.checked) ?? !1,
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
    const n = Tt(t.x / e), o = Tt(t.y / i), s = Tt((t.x + t.width) / e), a = Tt((t.y + t.height) / i);
    return {
      crop: `${n.toFixed(4)}x${o.toFixed(4)}:${s.toFixed(4)}x${a.toFixed(4)}`,
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
    var o;
    const n = this.parseCropString(t);
    n && ((o = this.cropper) == null || o.setData({
      x: n.x1 * e,
      y: n.y1 * i,
      width: (n.x2 - n.x1) * e,
      height: (n.y2 - n.y1) * i
    }));
  }
  createAspectRatioOptions(t) {
    const e = g("fieldset", "gallery-crop-modal__aspect-ratios"), i = g("legend", "gallery-crop-modal__aspect-ratios-label");
    return i.textContent = "Соотношение сторон", e.appendChild(i), [
      { label: "Любое", value: "free" },
      ...Ae.map((o) => ({ label: o, value: o }))
    ].forEach(({ label: o, value: s }) => {
      const a = g("label", "gallery-crop-modal__aspect-ratio"), d = g("input", null, { type: "radio" }), l = g("span", "gallery-crop-modal__aspect-ratio-label");
      d.name = "gallery-crop-aspect-ratio", d.value = s, d.checked = s === t, d.addEventListener("change", () => {
        var h;
        d.checked && ((h = this.cropper) == null || h.setAspectRatio(this.numericAspectRatio(s)));
      }), l.textContent = o, a.append(d, l), e.appendChild(a), this.aspectRatioInputs.push(d);
    }), e;
  }
  selectedCropAspectRatio() {
    var e;
    const t = (e = this.aspectRatioInputs.find((i) => i.checked)) == null ? void 0 : e.value;
    return this.normalizeCropAspectRatio(t);
  }
  normalizeCropAspectRatio(t) {
    return t === "free" || Ae.includes(t) ? t : jt;
  }
  numericAspectRatio(t) {
    return t === "free" ? Number.NaN : t === "16:9" ? 16 / 9 : t === "1:1" ? 1 : 3 / 2;
  }
}
const Xi = 12e4, Yi = 2e3, Vi = 1e3, Ji = 1.5, Ee = 0.2, Zi = 200;
class j extends Error {
  /**
   * Create a safe workflow error.
   * @param code - stable application error code
   * @param message - user-facing error message
   * @param status - HTTP response status
   */
  constructor(t, e, i) {
    super(e), this.name = "AiImageClientError", this.code = t, this.status = i;
  }
}
class Ki {
  /**
   * Create the host client.
   * @param config - host endpoints, headers and resource identity
   */
  constructor(t) {
    this.config = t;
  }
  /**
   * Generate or improve a prompt from the current publication without starting image generation.
   * @param request - prompt action, idempotency key and current publication text
   * @param signal - optional cancellation signal
   */
  async assistPrompt(t, e) {
    return this.requestAssistanceText(t, "prompt", e);
  }
  /**
   * Generate an editorial caption from the current publication and final image prompt.
   * @param request - caption action, idempotency key and current publication text
   * @param signal - optional cancellation signal
   */
  async generateCaption(t, e) {
    return this.requestAssistanceText(t, "caption", e);
  }
  /**
   * Start an idempotent image generation operation.
   * @param request - prompt and idempotency identifiers
   * @param signal - optional cancellation signal
   */
  async generate(t, e) {
    return this.mutate(this.config.endpoints.generate, {
      action_id: t.actionId,
      block_id: t.blockId,
      aspect_ratio: t.aspectRatio,
      context: this.config.context,
      prompt: t.prompt,
      session_id: t.sessionId,
      ...t.resolution === void 0 ? {} : { resolution: t.resolution }
    }, e);
  }
  /**
   * Start an idempotent refinement operation.
   * @param request - candidate, prompt and idempotency identifiers
   * @param signal - optional cancellation signal
   */
  async refine(t, e) {
    return this.mutate(this.resolveEndpoint(this.config.endpoints.refine, { sessionId: t.sessionId }), {
      action_id: t.actionId,
      block_id: t.blockId,
      candidate_id: t.candidateId,
      context: this.config.context,
      prompt: t.prompt,
      session_id: t.sessionId
    }, e);
  }
  /**
   * Start an idempotent finalization operation.
   * @param request - candidate and idempotency identifiers
   * @param signal - optional cancellation signal
   */
  async finalize(t, e) {
    return this.mutate(this.resolveEndpoint(this.config.endpoints.finalize, { sessionId: t.sessionId }), {
      action_id: t.actionId,
      block_id: t.blockId,
      candidate_id: t.candidateId,
      context: this.config.context,
      session_id: t.sessionId
    }, e);
  }
  /**
   * Cancel a generation session without exposing temporary output.
   * @param request - session and block identity
   * @param signal - optional cancellation signal
   */
  async cancel(t, e) {
    return this.mutate(this.resolveEndpoint(this.config.endpoints.cancel, { sessionId: t.sessionId }), {
      block_id: t.blockId,
      context: this.config.context,
      session_id: t.sessionId
    }, e);
  }
  /**
   * List the editor's own unfinished sessions and the slot limit.
   * @param blockId - current Editor.js block identifier
   * @param signal - optional cancellation signal
   */
  async listSessions(t, e) {
    const i = await this.request(this.config.endpoints.sessions, {
      body: JSON.stringify({
        block_id: t,
        context: this.config.context
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...this.config.headers
      },
      method: "POST",
      signal: e
    }, {
      invalidResponse: "Некорректный ответ сервера со списком генераций.",
      networkError: "Не удалось получить список активных генераций.",
      requestFailed: "Сервер не смог вернуть список активных генераций."
    });
    return this.normalizeActiveSessions(i);
  }
  /**
   * Move a session started elsewhere into the current block.
   * @param request - session and block identity
   * @param signal - optional cancellation signal
   */
  async adopt(t, e) {
    return this.mutate(this.resolveEndpoint(this.config.endpoints.adopt, { sessionId: t.sessionId }), {
      block_id: t.blockId,
      context: this.config.context,
      session_id: t.sessionId
    }, e);
  }
  /**
   * Poll until the host reports a terminal state.
   * @param request - session identity, observer and cancellation signal
   */
  async poll(t) {
    var s;
    const e = Date.now(), i = this.config.pollTimeoutMs ?? Xi, n = this.config.pollMaxIntervalMs ?? Yi;
    let o = this.config.pollIntervalMs ?? Vi;
    for (; ; ) {
      const a = await this.status(t.sessionId, t.blockId, t.signal);
      if ((s = t.onStatus) == null || s.call(t, a), this.isTerminal(a.status))
        return a;
      if (Date.now() - e >= i)
        throw new j(
          "poll_timeout",
          "Превышено время ожидания генерации изображения.",
          0
        );
      await this.wait(this.jittered(o), t.signal), o = Math.min(Math.ceil(o * Ji), n);
    }
  }
  /**
   * Spread a polling delay by ±20 % so several tabs do not hit the status endpoint in lockstep.
   * @param durationMs - base delay
   */
  jittered(t) {
    const e = 1 - Ee + Math.random() * Ee * 2;
    return Math.round(t * e);
  }
  /**
   * Browser previews use the reduced JPEG variant; the full image stays server-side for finalize and refine.
   * @param url - resolved candidate endpoint
   */
  previewVariant(t) {
    return `${t}${t.includes("?") ? "&" : "?"}variant=preview`;
  }
  /**
   * Read the current host session state.
   * @param sessionId - generation session identifier
   * @param blockId - Editor.js block identifier
   * @param signal - optional cancellation signal
   */
  async status(t, e, i) {
    const n = this.resolveEndpoint(this.config.endpoints.status, { sessionId: t }), o = new URLSearchParams({ block_id: e });
    for (const [a, d] of Object.entries(this.config.context))
      d !== null && o.set(`context[${a}]`, String(d));
    const s = await this.request(`${n}${n.includes("?") ? "&" : "?"}${o.toString()}`, {
      headers: {
        Accept: "application/json",
        ...this.config.headers
      },
      method: "GET",
      signal: i
    });
    return this.normalizeSession(s);
  }
  /**
   * Execute one prompt-assistance action and return its text field.
   * @param request - prompt or caption assistance payload
   * @param responseField - successful response field
   * @param signal - optional cancellation signal
   */
  async requestAssistanceText(t, e, i) {
    const n = this.config.endpoints.prompt, o = this.config.publicationContext, s = e === "caption";
    if (typeof n != "string" || n === "" || o === void 0)
      throw new j(
        "prompt_unavailable",
        s ? "Генерация описания недоступна." : "Помощь с промптом недоступна.",
        0
      );
    const a = {
      action: t.action,
      action_id: t.actionId,
      block_id: t.blockId,
      context: this.config.context,
      publication: t.publication,
      publicationContext: o
    };
    t.action !== "generate" && (a.draft = t.draft);
    const l = (await this.request(n, {
      body: JSON.stringify(a),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...this.config.headers
      },
      method: "POST",
      signal: i
    }, {
      invalidResponse: s ? "Некорректный ответ сервера подготовки описания." : "Некорректный ответ сервера подготовки промпта.",
      networkError: s ? "Не удалось связаться с сервером подготовки описания." : "Не удалось связаться с сервером подготовки промпта.",
      requestFailed: s ? "Сервер не смог подготовить описание изображения." : "Сервер не смог подготовить промпт для изображения."
    }))[e];
    if (typeof l != "string" || l.trim() === "")
      throw new j(
        "invalid_response",
        s ? "Некорректный ответ сервера подготовки описания." : "Некорректный ответ сервера подготовки промпта.",
        Zi
      );
    return l;
  }
  /**
   * Execute a host JSON request.
   * @param url - host URL
   * @param init - fetch options
   * @param messages - safe operation-specific failures
   */
  async request(t, e, i = {
    invalidResponse: "Некорректный ответ сервера генерации изображений.",
    networkError: "Не удалось связаться с сервером генерации изображений.",
    requestFailed: "Сервер не смог выполнить операцию с изображением."
  }) {
    let n;
    try {
      n = await fetch(t, e);
    } catch (s) {
      throw s instanceof DOMException && s.name === "AbortError" ? s : new j(
        "network_error",
        i.networkError,
        0
      );
    }
    const o = await n.json().catch(() => null);
    if (!n.ok) {
      if (this.isRecord(o) && this.isRecord(o.error)) {
        const s = o.error.code, a = o.error.message;
        if (typeof s == "string" && typeof a == "string")
          throw new j(s, a, n.status);
      }
      throw new j(
        "request_failed",
        i.requestFailed,
        n.status
      );
    }
    if (!this.isRecord(o) || !this.isRecord(o.data))
      throw new j(
        "invalid_response",
        i.invalidResponse,
        n.status
      );
    return o.data;
  }
  /**
   * Send a JSON mutation and normalize its session response.
   * @param url - host mutation URL
   * @param body - JSON request body
   * @param signal - optional cancellation signal
   */
  async mutate(t, e, i) {
    const n = await this.request(t, {
      body: JSON.stringify(e),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...this.config.headers
      },
      method: "POST",
      signal: i
    });
    return this.normalizeSession(n);
  }
  /**
   * Normalize the host response and discard provider-only fields.
   * @param data - host response data
   */
  normalizeSession(t) {
    const e = this.requiredString(t, "session_id");
    let i;
    if (Array.isArray(t.candidates)) {
      i = [];
      for (const o of t.candidates)
        !this.isRecord(o) || typeof o.id != "string" || o.id === "" || i.push({
          id: o.id,
          parentId: typeof o.parent_id == "string" ? o.parent_id : null,
          previewUrl: this.previewVariant(this.resolveEndpoint(this.config.endpoints.candidate, {
            candidateId: o.id,
            sessionId: e
          }))
        });
    }
    const n = this.isRecord(t.error) && typeof t.error.code == "string" && typeof t.error.message == "string" ? {
      code: t.error.code,
      message: t.error.message
    } : void 0;
    return {
      candidates: i,
      error: n,
      image: this.isRecord(t.image) ? t.image : void 0,
      progress: typeof t.progress == "string" ? t.progress : void 0,
      selectedCandidateId: typeof t.selected_candidate_id == "string" ? t.selected_candidate_id : void 0,
      sessionId: e,
      status: this.requiredString(t, "status")
    };
  }
  /**
   * Normalize the unfinished-session list and drop malformed rows.
   * @param data - host response data
   */
  normalizeActiveSessions(t) {
    const e = typeof t.limit == "number" && Number.isFinite(t.limit) ? t.limit : 1, i = [];
    if (Array.isArray(t.sessions))
      for (const n of t.sessions) {
        if (!this.isRecord(n) || typeof n.session_id != "string" || n.session_id === "")
          continue;
        const o = this.isRecord(n.owner) ? n.owner : {}, s = typeof n.preview_candidate_id == "string" ? n.preview_candidate_id : null;
        i.push({
          candidateCount: typeof n.candidate_count == "number" ? n.candidate_count : 0,
          createdAt: typeof n.created_at == "string" ? n.created_at : null,
          isCurrentBlock: n.is_current_block === !0,
          owner: {
            title: typeof o.title == "string" && o.title !== "" ? o.title : "Публикация",
            url: typeof o.url == "string" && o.url !== "" ? o.url : null
          },
          previewUrl: s === null ? null : this.previewVariant(this.resolveEndpoint(this.config.endpoints.candidate, {
            candidateId: s,
            sessionId: n.session_id
          })),
          prompt: typeof n.prompt == "string" && n.prompt !== "" ? n.prompt : null,
          sessionId: n.session_id,
          status: typeof n.status == "string" ? n.status : "queued"
        });
      }
    return { limit: e, sessions: i };
  }
  /**
   * Replace encoded identifiers in a host endpoint template.
   * @param template - URL containing named placeholders
   * @param values - placeholder values
   */
  resolveEndpoint(t, e) {
    return Object.entries(e).reduce(
      (i, [n, o]) => i.split(`{${n}}`).join(encodeURIComponent(o)),
      t
    );
  }
  /**
   * Determine whether polling should stop.
   * @param status - normalized host state
   */
  isTerminal(t) {
    return ["cancelled", "completed", "expired", "failed", "ready"].includes(t);
  }
  /**
   * Wait between polling attempts and respect cancellation.
   * @param durationMs - delay duration
   * @param signal - optional cancellation signal
   */
  async wait(t, e) {
    if ((e == null ? void 0 : e.aborted) === !0)
      throw new DOMException("The operation was aborted.", "AbortError");
    t <= 0 || await new Promise((i, n) => {
      let o;
      const s = () => {
        clearTimeout(o), n(new DOMException("The operation was aborted.", "AbortError"));
      };
      o = setTimeout(() => {
        e == null || e.removeEventListener("abort", s), i();
      }, t), e == null || e.addEventListener("abort", s, { once: !0 });
    });
  }
  /**
   * Read a required non-empty response string.
   * @param data - response data object
   * @param key - response key
   */
  requiredString(t, e) {
    const i = t[e];
    if (typeof i != "string" || i === "")
      throw new j(
        "invalid_response",
        "Некорректный ответ сервера генерации изображений.",
        0
      );
    return i;
  }
  /**
   * Check whether a value is a JSON object.
   * @param value - unknown response value
   */
  isRecord(t) {
    return typeof t == "object" && t !== null && !Array.isArray(t);
  }
}
class Qi {
  constructor({
    onAdoptSession: t,
    onAssistPrompt: e,
    onCancel: i,
    onCloseSession: n,
    onFinalize: o,
    onGenerate: s,
    onRefine: a,
    onSelectCandidate: d,
    onSelectHistory: l,
    promptAssistanceEnabled: h,
    promptId: c,
    aspectRatio: u,
    aspectRatios: b,
    resolution: C,
    resolutions: p,
    metadataPlaceholders: f,
    source: v
  }) {
    this.isGenerationBusy = !1, this.operationStartedAt = null, this.operationElapsedSeconds = 0, this.lastOperationSeconds = null, this.operationTicker = null, this.lastStatusMessage = "", this.isPromptAssistanceBusy = !1, this.isGeneratedCaptionBusy = !1, this.hasFreeSessionSlot = !0, this.promptAssistanceEnabled = h, this.defaultResolution = C, this.onAdoptSession = t, this.onCloseSession = n, this.onSelectCandidate = d, this.onSelectHistory = l;
    const y = g("div", ["ai-image-tool__generator"]), w = g("div", ["ai-image-tool__sessions"]), x = g("div", ["ai-image-tool__sessions-title"]), S = g("div", ["ai-image-tool__sessions-list"]), m = g("div", ["ai-image-tool__prompt-section"]), _ = g("label", ["ai-image-tool__label"]), I = g("textarea", ["ai-image-tool__prompt"]), E = g("label", ["ai-image-tool__caption-option"]), O = g("input", ["ai-image-tool__caption-checkbox"]), $ = g("span"), W = g("div", ["ai-image-tool__prompt-assistance"]), H = g("div", ["ai-image-tool__aspect-ratio-field"]), N = g("span", ["ai-image-tool__aspect-ratio-label"]), D = g("div", ["ai-image-tool__aspect-ratios"]), L = g("label", ["ai-image-tool__resolution-option"]), F = g("input", ["ai-image-tool__resolution-checkbox"]), ht = g("span"), ct = g("div", ["ai-image-tool__prompt-actions"]), it = g("button", ["ai-image-tool__action", "ai-image-tool__action--generate"], { type: "button" }), Y = g("button", ["ai-image-tool__action", "ai-image-tool__action--secondary"], { type: "button" }), V = g("button", ["ai-image-tool__action", "ai-image-tool__action--secondary"], { type: "button" }), nt = g("button", ["ai-image-tool__action", "ai-image-tool__action--secondary"], { type: "button" }), vt = g("div", ["ai-image-tool__status"]), ot = g("div", ["ai-image-tool__error"]), Pt = g("div", ["ai-image-tool__candidates"]), At = g("div", ["ai-image-tool__selection"]), Et = g("img", ["ai-image-tool__selected-preview"]), Bt = g("div", ["ai-image-tool__metadata"]), J = g("textarea", ["ai-image-tool__metadata-input", "ai-image-tool__metadata-caption"]), Z = g("input", ["ai-image-tool__metadata-input"]), K = g("input", ["ai-image-tool__metadata-input"]), Nt = g("div", ["ai-image-tool__caption-status"]), Gt = g("label", ["ai-image-tool__label"]), st = g("textarea", ["ai-image-tool__prompt"]), kt = g("button", ["ai-image-tool__action"], { type: "button" }), Rt = g("button", ["ai-image-tool__action"], { type: "button" }), ae = g("div", ["ai-image-tool__history"]), Ht = g("div", ["ai-image-tool__history-status"]);
    I.id = c, I.rows = 3, I.placeholder = "Опишите изображение, которое нужно создать", _.htmlFor = c, _.textContent = "Введите промпт", it.textContent = "Генерировать", Y.textContent = "Промпт по публикации", V.textContent = "Улучшить промпт", nt.textContent = "Отменить", Y.hidden = !h, V.hidden = !h, O.type = "checkbox", O.id = `${c}-generate-caption`, $.textContent = "Также сгенерировать описание", E.htmlFor = O.id, E.hidden = !h, E.append(O, $), W.append(E, V), D.setAttribute("role", "radiogroup"), D.setAttribute("aria-label", "Соотношение сторон"), this.createAspectRatioOptions(D, b, u, c), N.textContent = "Соотношение сторон:", F.type = "checkbox", F.id = `${c}-hd-resolution`, F.checked = C === "2k", ht.textContent = "HD 2k", L.htmlFor = F.id, L.title = "Варианты в 2k: дольше и дороже, зато детальнее", L.hidden = !(p.includes("1k") && p.includes("2k")), L.append(F, ht), H.append(N, D, L), ct.append(Y, nt, it), m.append(_, I, W, H, ct), Et.alt = "Выбранный вариант", Et.dataset.selectedPreview = "", J.id = `${c}-caption`, J.rows = 2, J.dataset.generatedCaption = "", J.dataset.aiImageMetadata = "", J.placeholder = f.caption, J.setAttribute("aria-label", f.caption), Z.type = "text", Z.dataset.aiImageMetadata = "", Z.placeholder = f.source, Z.setAttribute("aria-label", f.source), Z.defaultValue = v.name, Z.value = v.name, K.type = "url", K.dataset.aiImageMetadata = "", K.placeholder = f.sourceLink, K.setAttribute("aria-label", f.sourceLink), K.defaultValue = v.url, K.value = v.url, Nt.setAttribute("aria-live", "polite"), Bt.append(J, Z, K, Nt), st.id = `${c}-refinement`, st.rows = 2, st.dataset.refinementPrompt = "", Gt.htmlFor = st.id, Gt.textContent = "Как доработать изображение", kt.textContent = "Доработать", Rt.textContent = "Использовать изображение", At.hidden = !0, At.append(
      Et,
      Bt,
      Gt,
      st,
      kt,
      Rt,
      ae,
      Ht
    ), vt.setAttribute("aria-live", "polite"), ot.setAttribute("aria-live", "assertive"), ot.setAttribute("role", "alert"), ot.hidden = !0, Ht.setAttribute("aria-live", "polite"), Pt.hidden = !0, y.hidden = !0, w.hidden = !0, w.append(x, S), y.append(w, m, vt, ot, Pt, At), it.addEventListener("click", () => s(
      I.value,
      O.checked,
      this.selectedAspectRatio(),
      this.selectedResolution()
    )), Y.addEventListener("click", () => e("generate", I.value)), V.addEventListener("click", () => e("improve", I.value)), nt.addEventListener("click", i), kt.addEventListener("click", () => a(st.value)), Rt.addEventListener("click", o), I.addEventListener("input", () => this.updatePromptControls()), this.nodes = {
      wrapper: y,
      sessionsSection: w,
      sessionsTitle: x,
      sessionsList: S,
      promptSection: m,
      prompt: I,
      generateButton: it,
      generateFromPublicationButton: Y,
      improvePromptButton: V,
      generateCaptionCheckbox: O,
      aspectRatioOptions: D,
      hdResolutionOption: L,
      hdResolutionCheckbox: F,
      generationStatus: vt,
      generationError: ot,
      candidates: Pt,
      selection: At,
      selectedPreview: Et,
      metadataSection: Bt,
      generatedCaption: J,
      generatedCaptionStatus: Nt,
      sourceName: Z,
      sourceUrl: K,
      refinementPrompt: st,
      refineButton: kt,
      finalizeButton: Rt,
      cancelButton: nt,
      history: ae,
      historyStatus: Ht
    }, this.updatePromptControls();
  }
  open() {
    this.nodes.wrapper.hidden = !1, this.nodes.prompt.focus();
  }
  close() {
    this.nodes.wrapper.hidden = !0, this.reset();
  }
  /**
   * Show the editor's unfinished sessions above the prompt: each one can be
   * continued here, opened in its own publication, or closed to free a slot.
   */
  showActiveSessions(t) {
    const { limit: e, sessions: i } = t;
    if (this.hasFreeSessionSlot = i.length < e, this.nodes.sessionsList.replaceChildren(), i.length === 0) {
      this.nodes.sessionsSection.hidden = !0, this.updatePromptControls();
      return;
    }
    this.nodes.sessionsTitle.textContent = this.hasFreeSessionSlot ? `Незакрытые генерации: ${i.length} из ${e}` : `Все слоты заняты (${i.length} из ${e}) — продолжите одну или закройте лишние`;
    for (const n of i)
      this.nodes.sessionsList.appendChild(this.buildSessionCard(n));
    this.nodes.sessionsSection.hidden = !1, this.updatePromptControls();
  }
  hideActiveSessions() {
    this.hasFreeSessionSlot = !0, this.nodes.sessionsSection.hidden = !0, this.nodes.sessionsList.replaceChildren(), this.updatePromptControls();
  }
  buildSessionCard(t) {
    const e = g("div", ["ai-image-tool__session"], { "data-session-id": t.sessionId }), i = g("div", ["ai-image-tool__session-preview"]);
    if (t.previewUrl !== null) {
      const h = g("img", ["ai-image-tool__session-thumb"], {
        alt: "",
        loading: "lazy",
        src: t.previewUrl
      });
      i.appendChild(h);
    }
    const n = g("div", ["ai-image-tool__session-body"]), o = t.owner.url === null ? g("span", ["ai-image-tool__session-title"]) : g("a", ["ai-image-tool__session-title"], {
      href: t.owner.url,
      rel: "noopener",
      target: "_blank"
    });
    o.textContent = t.owner.title;
    const s = g("div", ["ai-image-tool__session-meta"]);
    if (s.textContent = [
      t.isCurrentBlock ? "этот блок" : null,
      this.sessionStatusLabel(t.status),
      t.candidateCount > 0 ? `${t.candidateCount} вар.` : null,
      this.sessionTimeLabel(t.createdAt)
    ].filter((h) => h !== null).join(" · "), n.append(o, s), t.prompt !== null) {
      const h = g("div", ["ai-image-tool__session-prompt"]);
      h.textContent = t.prompt, n.appendChild(h);
    }
    const a = g("div", ["ai-image-tool__session-actions"]), d = g("button", ["ai-image-tool__action", "ai-image-tool__action--secondary"], {
      type: "button"
    });
    d.textContent = t.isCurrentBlock ? "Продолжить" : "Продолжить здесь", d.addEventListener("click", () => this.onAdoptSession(t.sessionId));
    const l = g("button", ["ai-image-tool__session-close"], {
      title: "Закрыть генерацию и освободить слот",
      type: "button"
    });
    return l.setAttribute("aria-label", "Закрыть генерацию"), l.textContent = "×", l.addEventListener("click", () => this.onCloseSession(t.sessionId)), a.append(d, l), e.append(i, n, a), e;
  }
  sessionStatusLabel(t) {
    return {
      failed: "ошибка",
      finalizing: "вставляется",
      generating: "генерируется",
      queued: "в очереди",
      ready: "варианты готовы",
      refining: "дорабатывается"
    }[t] ?? t;
  }
  sessionTimeLabel(t) {
    if (t === null)
      return null;
    const e = new Date(t);
    return Number.isNaN(e.getTime()) ? null : e.toLocaleString("ru-RU", {
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      month: "2-digit"
    });
  }
  setPromptValue(t) {
    this.nodes.prompt.value = t, this.updatePromptControls();
  }
  showPromptAssistanceStatus(t) {
    this.nodes.generationStatus.textContent = t;
  }
  setPromptAssistanceBusy(t) {
    this.isPromptAssistanceBusy = t, this.updatePromptControls();
  }
  setGenerationBusy(t) {
    this.isGenerationBusy = t, t ? this.startOperationTimer() : (this.stopOperationTimer(!0), this.renderGenerationStatus()), this.updatePromptControls(), this.updateSelectionControls();
  }
  /** Генерация идёт десяток секунд: рядом с лоадером тикают секунды, в конце - итог. */
  startOperationTimer() {
    this.operationTicker === null && (this.operationStartedAt = Date.now(), this.operationElapsedSeconds = 0, this.lastOperationSeconds = null, this.operationTicker = setInterval(() => {
      this.operationStartedAt !== null && (this.operationElapsedSeconds = (Date.now() - this.operationStartedAt) / 1e3, this.renderGenerationStatus());
    }, 1e3));
  }
  stopOperationTimer(t) {
    this.operationTicker !== null && (clearInterval(this.operationTicker), this.operationTicker = null), t && this.operationStartedAt !== null && (this.lastOperationSeconds = (Date.now() - this.operationStartedAt) / 1e3), this.operationStartedAt = null, this.operationElapsedSeconds = 0;
  }
  formatSeconds(t) {
    return `${t.toFixed(1).replace(".", ",")} с`;
  }
  renderGenerationStatus() {
    const t = this.lastStatusMessage;
    if (t === "") {
      this.nodes.generationStatus.textContent = "", this.nodes.generationStatus.dataset.busy = "false";
      return;
    }
    if (this.nodes.generationStatus.dataset.busy = String(this.operationStartedAt !== null), this.operationStartedAt !== null) {
      this.nodes.generationStatus.textContent = `${t} ${this.formatSeconds(this.operationElapsedSeconds)}`;
      return;
    }
    this.nodes.generationStatus.textContent = this.lastOperationSeconds === null ? t : `${t} (за ${this.formatSeconds(this.lastOperationSeconds)})`;
  }
  prepareGeneratedCaption() {
    this.isGeneratedCaptionBusy = !0, this.nodes.generatedCaption.value = "", this.nodes.generatedCaptionStatus.textContent = "Генерируем описание...", delete this.nodes.generatedCaptionStatus.dataset.error, this.updateSelectionControls();
  }
  completeGeneratedCaption(t) {
    this.isGeneratedCaptionBusy = !1, this.nodes.generatedCaption.value = t, this.nodes.generatedCaptionStatus.textContent = "Описание готово — можно отредактировать.", delete this.nodes.generatedCaptionStatus.dataset.error, this.updateSelectionControls();
  }
  failGeneratedCaption(t) {
    this.isGeneratedCaptionBusy = !1, this.nodes.generatedCaptionStatus.textContent = t, this.nodes.generatedCaptionStatus.dataset.error = "", this.updateSelectionControls();
  }
  resetGeneratedCaption() {
    this.isGeneratedCaptionBusy = !1, this.nodes.generatedCaption.value = "", this.nodes.sourceName.value = this.nodes.sourceName.defaultValue, this.nodes.sourceUrl.value = this.nodes.sourceUrl.defaultValue, this.nodes.generatedCaptionStatus.textContent = "", delete this.nodes.generatedCaptionStatus.dataset.error, this.updateSelectionControls();
  }
  getImageMetadata() {
    return {
      caption: this.nodes.generatedCaption.value,
      source: this.nodes.sourceName.value,
      sourceLink: this.nodes.sourceUrl.value
    };
  }
  showGenerationStatus(t, e) {
    const i = {
      finalization_queued: "Сохранение поставлено в очередь...",
      finalization_submitting: "Отправляем выбранное изображение на сохранение...",
      finalizing: "Сохраняем изображение...",
      generation_processing: "Нейросеть генерирует варианты...",
      generation_queued: "Генерация поставлена в очередь...",
      generation_submitting: "Отправляем запрос на генерацию...",
      generating: "Нейросеть генерирует варианты...",
      media_copying: "Копируем изображение из временного хранилища...",
      media_resizing: "Ресайз изображения...",
      media_warming: "Прогрев изображения...",
      queued: "Запрос поставлен в очередь...",
      ready: "Выберите вариант изображения, его можно будет доработать.",
      refinement_processing: "Нейросеть дорабатывает изображение...",
      refinement_queued: "Доработка поставлена в очередь...",
      refinement_submitting: "Отправляем запрос на доработку...",
      refining: "Нейросеть дорабатывает изображение..."
    }, n = e ?? t, o = i[n] ?? "";
    this.lastStatusMessage = o, this.renderGenerationStatus(), this.nodes.historyStatus.textContent = n.startsWith("refinement_") ? o : "";
  }
  showGenerationError(t) {
    this.nodes.generationError.textContent = t, this.nodes.generationError.hidden = t === "";
  }
  showCandidates(t) {
    var e;
    this.nodes.candidates.replaceChildren(), t.forEach((i, n) => {
      const o = g("button", ["ai-image-tool__candidate"], { type: "button" }), s = g("img", ["ai-image-tool__candidate-image"]);
      o.dataset.candidateId = i.id, o.setAttribute("aria-label", `Выбрать вариант ${n + 1}`), o.setAttribute("aria-pressed", "false"), o.addEventListener("click", () => this.selectCandidate(i.id)), s.alt = `Вариант ${n + 1}`, s.src = i.previewUrl, o.appendChild(s), this.nodes.candidates.appendChild(o);
    }), this.nodes.promptSection.hidden = !0, this.nodes.candidates.hidden = !1, this.showGenerationStatus("ready"), (e = this.nodes.candidates.querySelector("[data-candidate-id]")) == null || e.focus();
  }
  showSelectedCandidate(t, e) {
    this.nodes.candidates.querySelectorAll("[data-candidate-id]").forEach((i) => {
      i.setAttribute("aria-pressed", String(i.dataset.candidateId === t.id));
    }), this.nodes.selectedPreview.src = t.previewUrl, this.nodes.selection.hidden = !1, this.nodes.history.replaceChildren(), e.forEach((i, n) => {
      const o = g("button", ["ai-image-tool__history-item"], { type: "button" });
      o.dataset.historyCandidateId = i.id, o.textContent = `Версия ${n + 1}`, o.setAttribute("aria-current", i.id === t.id ? "true" : "false"), o.addEventListener("click", () => this.selectHistory(i.id)), this.nodes.history.appendChild(o);
    });
  }
  clearRefinementPrompt() {
    this.nodes.refinementPrompt.value = "";
  }
  selectCandidate(t) {
    this.onSelectCandidate(t);
  }
  selectHistory(t) {
    this.onSelectHistory(t);
  }
  reset() {
    this.nodes.promptSection.hidden = !1, this.nodes.candidates.hidden = !0, this.nodes.selection.hidden = !0, this.nodes.candidates.replaceChildren(), this.nodes.history.replaceChildren(), this.nodes.prompt.value = "", this.nodes.refinementPrompt.value = "", this.lastStatusMessage = "", this.lastOperationSeconds = null, this.stopOperationTimer(!1), this.nodes.generationStatus.textContent = "", this.showGenerationError(""), this.resetGeneratedCaption(), this.setGenerationBusy(!1), this.setPromptAssistanceBusy(!1);
  }
  updatePromptControls() {
    const t = this.isGenerationBusy || this.isPromptAssistanceBusy;
    this.nodes.wrapper.setAttribute("aria-busy", String(t)), this.nodes.prompt.disabled = t, this.nodes.generateButton.disabled = t || !this.hasFreeSessionSlot, this.nodes.generateFromPublicationButton.disabled = t || !this.promptAssistanceEnabled, this.nodes.generateCaptionCheckbox.disabled = t || !this.promptAssistanceEnabled, this.nodes.aspectRatioOptions.querySelectorAll('input[type="radio"]').forEach((e) => {
      e.disabled = t;
    }), this.nodes.hdResolutionCheckbox.disabled = t, this.nodes.improvePromptButton.disabled = t || !this.promptAssistanceEnabled || this.nodes.prompt.value.trim() === "";
  }
  updateSelectionControls() {
    this.nodes.refinementPrompt.disabled = this.isGenerationBusy, this.nodes.refineButton.disabled = this.isGenerationBusy, this.nodes.finalizeButton.disabled = this.isGenerationBusy || this.isGeneratedCaptionBusy, this.nodes.generatedCaption.disabled = this.isGenerationBusy || this.isGeneratedCaptionBusy, this.nodes.sourceName.disabled = this.isGenerationBusy, this.nodes.sourceUrl.disabled = this.isGenerationBusy;
  }
  createAspectRatioOptions(t, e, i, n) {
    const o = e.includes(i) ? i : e[0] ?? "3:2";
    e.forEach((s) => {
      const a = g("label", ["ai-image-tool__aspect-ratio-option"]), d = g("input", ["ai-image-tool__aspect-ratio-input"]), l = g("span");
      d.type = "radio", d.name = `${n}-aspect-ratio`, d.value = s, d.checked = s === o, l.textContent = s, a.append(d, l), t.appendChild(a);
    });
  }
  selectedAspectRatio() {
    var e;
    const t = (e = this.nodes.aspectRatioOptions.querySelector('input[type="radio"]:checked')) == null ? void 0 : e.value;
    return t === "16:9" || t === "1:1" ? t : "3:2";
  }
  selectedResolution() {
    return this.nodes.hdResolutionOption.hidden ? this.defaultResolution : this.nodes.hdResolutionCheckbox.checked ? "2k" : "1k";
  }
}
class tn {
  constructor({
    blockId: t,
    config: e,
    initialPending: i,
    metadataPlaceholders: n,
    onChange: o,
    onFinalized: s
  }) {
    this.generationActionId = null, this.refinementActionId = null, this.finalizationActionId = null, this.isGenerationRequestRunning = !1, this.isPromptAssistanceRunning = !1, this.isCaptionRequestRunning = !1, this.isDestroyed = !1, this.hasCancelledPendingGeneration = !1, this.pollController = null, this.promptAssistanceController = null, this.captionController = null, this.promptAssistanceRequestToken = 0, this.captionRequestToken = 0, this.candidates = /* @__PURE__ */ new Map(), this.history = [], this.selectedCandidateId = null, this.blockId = t, this.client = new Ki(e), this.config = e, this.onChange = o, this.onFinalized = s, this.sessionId = (i == null ? void 0 : i.sessionId) ?? null;
    const a = typeof e.endpoints.prompt == "string" && e.endpoints.prompt.trim() !== "" && e.publicationContext !== void 0 && typeof e.getPublicationContext == "function", d = this.availableResolutions(e.resolutions);
    this.ui = new Qi({
      onAdoptSession: (l) => this.adoptSession(l),
      onAssistPrompt: (l, h) => this.assistPrompt(l, h),
      onCancel: () => this.cancel(),
      onCloseSession: (l) => this.closeSession(l),
      onFinalize: () => this.finalizeSelectedCandidate(),
      onGenerate: (l, h, c, u) => this.generate(l, h, c, u),
      onRefine: (l) => this.refine(l),
      onSelectCandidate: (l) => this.selectCandidate(l),
      onSelectHistory: (l) => this.selectCandidate(l),
      aspectRatio: this.defaultAspectRatio(e.aspectRatio),
      aspectRatios: this.availableAspectRatios(e.aspectRatios),
      resolution: this.defaultResolution(e.resolution, d),
      resolutions: d,
      metadataPlaceholders: n,
      promptAssistanceEnabled: a,
      promptId: `gallery-ai-prompt-${t}`,
      source: e.source ?? { name: "", url: "" }
    }), this.element = this.ui.nodes.wrapper;
  }
  open() {
    this.isDestroyed || (this.sessionId === null && (this.sessionId = globalThis.crypto.randomUUID(), this.hasCancelledPendingGeneration = !1, this.onChange()), this.ui.open(), this.refreshActiveSessions());
  }
  /**
   * Показать незакрытые генерации редактора: сессия живёт сутки и занимает
   * слот, поэтому решение — продолжить её или закрыть — принимает он сам.
   */
  refreshActiveSessions() {
    this.client.listSessions(this.blockId).then((t) => {
      this.isDestroyed || this.ui.showActiveSessions(t);
    }).catch(() => {
    });
  }
  adoptSession(t) {
    this.isDestroyed || this.isGenerationRequestRunning || this.runAdoptSession(t);
  }
  async runAdoptSession(t) {
    const e = this.replacePollController();
    this.ui.showGenerationError(""), this.isGenerationRequestRunning = !0, this.ui.setGenerationBusy(!0);
    try {
      const i = await this.client.adopt({ blockId: this.blockId, sessionId: t }, e.signal);
      this.candidates.clear(), this.history = [], this.selectedCandidateId = null, this.sessionId = t, this.hasCancelledPendingGeneration = !1, this.onChange(), this.ui.hideActiveSessions(), this.applySession(i), (i.status === "queued" || i.status === "generating" || i.status === "refining") && this.applySession(await this.client.poll({
        blockId: this.blockId,
        onStatus: (n) => this.applySession(n),
        sessionId: t,
        signal: e.signal
      }));
    } catch (i) {
      this.handleOperationError(i, "Не удалось продолжить эту генерацию.", () => {
      }), this.refreshActiveSessions();
    } finally {
      this.finishGenerationRequest(e);
    }
  }
  closeSession(t) {
    if (this.isDestroyed)
      return;
    const e = t === this.sessionId;
    e && (this.hasCancelledPendingGeneration = !0), this.client.cancel({ blockId: this.blockId, sessionId: t }).catch(() => {
    }).then(() => {
      this.isDestroyed || (e && (this.resetSession(), this.sessionId = globalThis.crypto.randomUUID(), this.hasCancelledPendingGeneration = !1, this.ui.close(), this.ui.open(), this.onChange()), this.refreshActiveSessions());
    });
  }
  getPendingData() {
    if (this.sessionId !== null)
      return {
        pending: !0,
        sessionId: this.sessionId
      };
  }
  destroy() {
    this.isDestroyed = !0, this.abortPromptAssistance(), this.abortCaptionGeneration(), this.cancelPendingGeneration();
  }
  cancel() {
    this.abortPromptAssistance(), this.abortCaptionGeneration(), this.cancelPendingGeneration(), this.resetSession(), this.ui.close(), this.onChange();
  }
  cancelPendingGeneration() {
    var e;
    if (this.sessionId === null || this.hasCancelledPendingGeneration)
      return;
    const t = this.sessionId;
    this.hasCancelledPendingGeneration = !0, (e = this.pollController) == null || e.abort(), this.client.cancel({ blockId: this.blockId, sessionId: t }).catch(() => {
    });
  }
  resetSession() {
    var t;
    (t = this.pollController) == null || t.abort(), this.pollController = null, this.sessionId = null, this.generationActionId = null, this.refinementActionId = null, this.finalizationActionId = null, this.isGenerationRequestRunning = !1, this.selectedCandidateId = null, this.candidates.clear(), this.history = [];
  }
  abortPromptAssistance() {
    var t;
    this.promptAssistanceRequestToken += 1, (t = this.promptAssistanceController) == null || t.abort(), this.promptAssistanceController = null, this.isPromptAssistanceRunning = !1;
  }
  abortCaptionGeneration() {
    var t;
    this.captionRequestToken += 1, (t = this.captionController) == null || t.abort(), this.captionController = null, this.isCaptionRequestRunning = !1;
  }
  assistPrompt(t, e) {
    const i = this.config.getPublicationContext;
    if (this.isDestroyed || this.isPromptAssistanceRunning || i === void 0)
      return;
    if (t === "improve" && e.trim() === "") {
      this.ui.showGenerationError("Введите промпт, который нужно улучшить.");
      return;
    }
    this.ui.showGenerationError(""), this.isPromptAssistanceRunning = !0;
    const n = ++this.promptAssistanceRequestToken, o = new AbortController();
    this.promptAssistanceController = o, this.ui.setPromptAssistanceBusy(!0), this.ui.showPromptAssistanceStatus(t === "generate" ? "Подготавливаем промпт по публикации..." : "Улучшаем промпт с учётом публикации..."), this.runPromptAssistance(t, e, i, o, n);
  }
  async runPromptAssistance(t, e, i, n, o) {
    try {
      const s = await i();
      if (!this.isCurrentPromptAssistance(o, n))
        return;
      this.assertPublicationHasText(s, "В публикации нет текста для подготовки промпта.");
      const a = t === "generate" ? {
        action: t,
        actionId: globalThis.crypto.randomUUID(),
        blockId: this.blockId,
        publication: s
      } : {
        action: t,
        actionId: globalThis.crypto.randomUUID(),
        blockId: this.blockId,
        draft: e,
        publication: s
      }, d = await this.client.assistPrompt(a, n.signal);
      this.isCurrentPromptAssistance(o, n) && (this.ui.setPromptValue(d), this.ui.showPromptAssistanceStatus("Промпт готов — проверьте и при необходимости отредактируйте"));
    } catch (s) {
      this.isCurrentPromptAssistance(o, n) && !this.isAbortError(s) && (this.ui.showPromptAssistanceStatus(""), this.ui.showGenerationError(this.errorMessage(s, "Не удалось подготовить промпт для изображения.")));
    } finally {
      this.isCurrentPromptAssistance(o, n) && (this.isPromptAssistanceRunning = !1, this.promptAssistanceController = null, this.ui.setPromptAssistanceBusy(!1));
    }
  }
  isCurrentPromptAssistance(t, e) {
    return !this.isDestroyed && this.promptAssistanceRequestToken === t && this.promptAssistanceController === e;
  }
  startCaptionGeneration(t) {
    const e = this.config.getPublicationContext;
    if (this.abortCaptionGeneration(), this.ui.prepareGeneratedCaption(), e === void 0) {
      this.ui.failGeneratedCaption("Описание недоступно — введите подпись вручную.");
      return;
    }
    this.isCaptionRequestRunning = !0;
    const i = ++this.captionRequestToken, n = new AbortController();
    this.captionController = n, this.runCaptionGeneration(t, e, n, i);
  }
  async runCaptionGeneration(t, e, i, n) {
    try {
      const o = await e();
      if (!this.isCurrentCaptionRequest(n, i))
        return;
      this.assertPublicationHasText(o, "В публикации нет текста для подготовки описания.");
      const s = await this.client.generateCaption({
        action: "caption",
        actionId: globalThis.crypto.randomUUID(),
        blockId: this.blockId,
        draft: t,
        publication: o
      }, i.signal);
      this.isCurrentCaptionRequest(n, i) && this.ui.completeGeneratedCaption(s);
    } catch (o) {
      this.isCurrentCaptionRequest(n, i) && !this.isAbortError(o) && this.ui.failGeneratedCaption(`${this.errorMessage(o, "Не удалось подготовить описание изображения.")} Можно ввести подпись вручную.`);
    } finally {
      this.isCurrentCaptionRequest(n, i) && (this.isCaptionRequestRunning = !1, this.captionController = null);
    }
  }
  isCurrentCaptionRequest(t, e) {
    return !this.isDestroyed && this.captionRequestToken === t && this.captionController === e;
  }
  generate(t, e, i, n) {
    const o = t.trim();
    if (o === "") {
      this.ui.showGenerationError("Введите промпт для генерации изображения.");
      return;
    }
    if (this.isGenerationRequestRunning || this.sessionId === null)
      return;
    this.ui.showGenerationError(""), this.isGenerationRequestRunning = !0, this.generationActionId ?? (this.generationActionId = globalThis.crypto.randomUUID());
    const s = this.generationActionId, a = this.replacePollController();
    this.ui.setGenerationBusy(!0), this.ui.showGenerationStatus("queued", "generation_submitting"), e ? this.startCaptionGeneration(o) : (this.abortCaptionGeneration(), this.ui.resetGeneratedCaption()), this.runGeneration(o, i, n, s, a);
  }
  async runGeneration(t, e, i, n, o) {
    if (this.sessionId === null)
      return;
    const s = this.sessionId;
    try {
      const a = await this.client.generate({
        actionId: n,
        aspectRatio: e,
        blockId: this.blockId,
        prompt: t,
        resolution: i ?? void 0,
        sessionId: s
      }, o.signal);
      this.generationActionId = null, this.applySession(a);
      const d = a.status === "ready" ? a : await this.client.poll({
        blockId: this.blockId,
        onStatus: (l) => this.applySession(l),
        sessionId: s,
        signal: o.signal
      });
      this.applySession(d);
    } catch (a) {
      this.handleOperationError(a, "Не удалось сгенерировать изображение.", () => {
        this.generationActionId = null;
      });
    } finally {
      this.finishGenerationRequest(o);
    }
  }
  refine(t) {
    const e = t.trim();
    if (e === "") {
      this.ui.showGenerationError("Опишите, как нужно доработать изображение.");
      return;
    }
    if (this.isGenerationRequestRunning || this.sessionId === null || this.selectedCandidateId === null)
      return;
    this.ui.showGenerationError(""), this.isGenerationRequestRunning = !0, this.refinementActionId ?? (this.refinementActionId = globalThis.crypto.randomUUID());
    const i = this.refinementActionId, n = this.selectedCandidateId, o = this.replacePollController();
    this.ui.setGenerationBusy(!0), this.ui.showGenerationStatus("queued", "refinement_submitting"), this.runRefinement(e, n, i, o);
  }
  async runRefinement(t, e, i, n) {
    if (this.sessionId === null)
      return;
    const o = this.sessionId;
    try {
      const s = await this.client.refine({
        actionId: i,
        blockId: this.blockId,
        candidateId: e,
        prompt: t,
        sessionId: o
      }, n.signal);
      this.refinementActionId = null, this.applySession(s);
      const a = s.status === "ready" ? s : await this.client.poll({
        blockId: this.blockId,
        onStatus: (d) => this.applySession(d),
        sessionId: o,
        signal: n.signal
      });
      this.applySession(a), this.ui.clearRefinementPrompt();
    } catch (s) {
      this.handleOperationError(s, "Не удалось доработать изображение.", () => {
        this.refinementActionId = null;
      });
    } finally {
      this.finishGenerationRequest(n);
    }
  }
  finalizeSelectedCandidate() {
    if (this.isGenerationRequestRunning || this.isCaptionRequestRunning || this.sessionId === null || this.selectedCandidateId === null)
      return;
    this.ui.showGenerationError(""), this.isGenerationRequestRunning = !0, this.finalizationActionId ?? (this.finalizationActionId = globalThis.crypto.randomUUID());
    const t = this.finalizationActionId, e = this.selectedCandidateId, i = this.ui.getImageMetadata(), n = this.replacePollController();
    this.ui.setGenerationBusy(!0), this.ui.showGenerationStatus("finalizing", "finalization_submitting"), this.runFinalization(e, t, n, i);
  }
  async runFinalization(t, e, i, n) {
    if (this.sessionId === null)
      return;
    const o = this.sessionId;
    try {
      const s = await this.client.finalize({
        actionId: e,
        blockId: this.blockId,
        candidateId: t,
        sessionId: o
      }, i.signal);
      this.finalizationActionId = null, this.applySession(s);
      const a = s.status === "completed" ? s : await this.client.poll({
        blockId: this.blockId,
        onStatus: (l) => this.applySession(l),
        sessionId: o,
        signal: i.signal
      });
      if (a.error !== void 0)
        throw new j(a.error.code, a.error.message, 0);
      if (a.image === void 0 || !this.isStandardImageData(a.image))
        throw new j("invalid_final_image", "Сервер вернул некорректные данные изображения.", 0);
      const d = this.mapImageToGalleryItem(a.image, n);
      this.resetSession(), this.ui.close(), this.onFinalized(d), this.onChange();
    } catch (s) {
      this.handleOperationError(s, "Не удалось сохранить изображение.", () => {
        this.finalizationActionId = null;
      });
    } finally {
      this.finishGenerationRequest(i);
    }
  }
  applySession(t) {
    this.ui.showGenerationStatus(t.status, t.progress), t.status === "ready" && t.candidates !== void 0 && (t.candidates.forEach((e) => this.candidates.set(e.id, e)), t.selectedCandidateId === void 0 ? this.ui.showCandidates(t.candidates) : this.applyRefinementCandidate(t.selectedCandidateId)), t.error !== void 0 && this.ui.showGenerationError(t.error.message);
  }
  selectCandidate(t) {
    const e = this.candidates.get(t);
    if (e === void 0)
      return;
    const i = this.history.findIndex((n) => n.id === e.id);
    i < 0 && e.parentId === null ? this.history = [e] : i < 0 && this.history.push(e), this.selectedCandidateId = e.id, this.ui.showSelectedCandidate(e, this.history);
  }
  applyRefinementCandidate(t) {
    const e = this.candidates.get(t);
    if (e === void 0)
      return;
    if (this.history.findIndex((n) => n.id === e.id) < 0) {
      const n = this.history.findIndex((o) => o.id === e.parentId);
      this.history = n >= 0 ? [...this.history.slice(0, n + 1), e] : [e];
    }
    this.selectedCandidateId = e.id, this.ui.showSelectedCandidate(e, this.history);
  }
  replacePollController() {
    var t;
    return (t = this.pollController) == null || t.abort(), this.pollController = new AbortController(), this.pollController;
  }
  finishGenerationRequest(t) {
    this.pollController === t && (this.isGenerationRequestRunning = !1, this.ui.setGenerationBusy(!1));
  }
  handleOperationError(t, e, i) {
    this.isAbortError(t) || (t instanceof j && t.status > 0 && i(), this.ui.showGenerationError(this.errorMessage(t, e)));
  }
  isStandardImageData(t) {
    const e = t.file;
    return typeof e == "object" && e !== null && "url" in e && typeof e.url == "string" && e.url !== "" && typeof t.caption == "string" && typeof t.link == "string" && typeof t.alt == "string";
  }
  mapImageToGalleryItem(t, e) {
    return {
      caption: e.caption,
      height: t.file.height,
      imagorPath: t.file.imagor_path,
      media_id: t.file.media_id,
      source: e.source,
      sourceLink: e.sourceLink,
      url: t.file.url,
      width: t.file.width,
      isAiGenerated: !0
    };
  }
  assertPublicationHasText(t, e) {
    if (![t.title, t.subtitle, t.announce, t.body].some((i) => i.trim() !== ""))
      throw new Error(e);
  }
  isAbortError(t) {
    return t instanceof DOMException && t.name === "AbortError";
  }
  errorMessage(t, e) {
    return t instanceof Error ? t.message : e;
  }
  availableAspectRatios(t) {
    const e = (t == null ? void 0 : t.filter((i) => this.isAspectRatio(i))) ?? [];
    return e.length > 0 ? e : ["16:9", "3:2", "1:1"];
  }
  defaultAspectRatio(t) {
    return this.isAspectRatio(t) ? t : "3:2";
  }
  isAspectRatio(t) {
    return t === "16:9" || t === "3:2" || t === "1:1";
  }
  availableResolutions(t) {
    return (t == null ? void 0 : t.filter((e) => this.isResolution(e))) ?? [];
  }
  /** Without a host default the first allowed resolution wins; nothing is sent when the host lists none. */
  defaultResolution(t, e) {
    return this.isResolution(t) ? t : e[0] ?? null;
  }
  isResolution(t) {
    return t === "1k" || t === "2k";
  }
}
/**
 * Gallery Tool for Editor.js
 * Supports multiple images with captions and source attribution
 * @author iXBT
 * @license MIT
 */
class en {
  constructor({ data: t, config: e, api: i, readOnly: n, block: o }) {
    this.aiGenerationController = null, this.currentLoadingItem = null, this.api = i, this.readOnly = n, this.block = o;
    const s = e ?? {};
    this.config = {
      endpoints: s.endpoints ?? {},
      additionalRequestData: s.additionalRequestData,
      additionalRequestHeaders: s.additionalRequestHeaders,
      field: s.field ?? "image",
      types: s.types ?? "image/*",
      captionPlaceholder: this.api.i18n.t(s.captionPlaceholder ?? "Caption"),
      sourcePlaceholder: this.api.i18n.t(s.sourcePlaceholder ?? "Source"),
      sourceLinkPlaceholder: this.api.i18n.t(s.sourceLinkPlaceholder ?? "Source link"),
      buttonContent: s.buttonContent ?? this.api.i18n.t("Add Image"),
      urlButtonContent: s.urlButtonContent ?? this.api.i18n.t("Add from URL"),
      uploader: s.uploader,
      onNonImageFile: s.onNonImageFile,
      mediaHost: s.mediaHost,
      cover: s.cover,
      onMediaRemoved: s.onMediaRemoved,
      onCropApplied: s.onCropApplied,
      generation: s.generation
    }, this._data = {
      items: (t == null ? void 0 : t.items) ?? [],
      layout: (t == null ? void 0 : t.layout) ?? "grid",
      columns: (t == null ? void 0 : t.columns) ?? 3,
      stretched: (t == null ? void 0 : t.stretched) ?? !1
    }, this.isPendingAiGeneration(t == null ? void 0 : t.aiGeneration) && (this._data.aiGeneration = t.aiGeneration), this.uploader = new ii({
      config: this.config,
      onUpload: (a) => this.onUpload(a),
      onError: (a) => this.uploadingFailed(a)
    }), this.cropModal = new qi(), this.ui = new $t({
      api: i,
      config: this.config,
      onSelectFile: () => this.selectFile(),
      onPasteFile: (a) => this.uploadFile(a),
      onSelectUrl: (a) => this.uploadFromUrl(a),
      onColumnsChange: (a) => this.onColumnsChange(a),
      onRemoveImage: (a, d) => this.onRemoveImage(a, d),
      onCropImage: (a) => this.handleCropImage(a),
      onItemSettingsChange: () => this.block.dispatchChange(),
      onOpenAi: () => {
        var a;
        return (a = this.aiGenerationController) == null ? void 0 : a.open();
      },
      readOnly: n
    }), this.config.generation !== void 0 && !this.readOnly && (this.aiGenerationController = new tn({
      blockId: this.block.id,
      config: this.config.generation,
      initialPending: this._data.aiGeneration,
      metadataPlaceholders: {
        caption: this.config.captionPlaceholder ?? "Caption",
        source: this.config.sourcePlaceholder ?? "Source",
        sourceLink: this.config.sourceLinkPlaceholder ?? "Source link"
      },
      onChange: () => this.block.dispatchChange(),
      onFinalized: (a) => this.onAiFinalized(a)
    }));
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
      icon: ke,
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
    var e;
    const t = this.ui.render(this._data.items, this._data.columns);
    return this.aiGenerationController !== null && !t.contains(this.aiGenerationController.element) && t.appendChild(this.aiGenerationController.element), this._data.aiGeneration !== void 0 && ((e = this.aiGenerationController) == null || e.open()), this._data.stretched && this.setTune("stretched", !0), t;
  }
  /**
   * Validate data
   */
  validate(t) {
    return t.items.length > 0 || this.isPendingAiGeneration(t.aiGeneration);
  }
  /**
   * Return Block data
   */
  save() {
    var e;
    this._data.items = this.ui.getItemsData(), this._data.columns = this.ui.getColumns();
    const t = (e = this.aiGenerationController) == null ? void 0 : e.getPendingData();
    return t === void 0 ? delete this._data.aiGeneration : this._data.aiGeneration = t, this._data;
  }
  removed() {
    var e;
    if (((e = this.aiGenerationController) == null ? void 0 : e.getPendingData()) !== void 0) {
      this.aiGenerationController.destroy();
      return;
    }
    const t = this.ui.getItemsData().map((i) => i.media_id).filter((i) => !!i);
    new Set(t).forEach((i) => {
      var n, o;
      return (o = (n = this.config).onMediaRemoved) == null ? void 0 : o.call(n, i);
    });
  }
  destroy() {
    var t;
    (t = this.aiGenerationController) == null || t.destroy(), this.cropModal.destroy();
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
   * Handle paste events
   */
  async onPaste(t) {
    switch (t.type) {
      case "tag": {
        const e = t.detail.data;
        if (/^blob:/.test(e.src)) {
          const n = await (await fetch(e.src)).blob();
          this.uploadFile(n);
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
      onPreview: (n) => {
        this.currentLoadingItem = this.ui.createLoadingItem(n);
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
  onAiFinalized(t) {
    const e = this.ui.addItem(t), i = e.querySelector("img");
    if (delete this._data.aiGeneration, i !== null) {
      const n = () => {
        e.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
      };
      i.complete ? requestAnimationFrame(n) : i.addEventListener("load", n, { once: !0 });
    }
  }
  isPendingAiGeneration(t) {
    return typeof t == "object" && t !== null && "pending" in t && t.pending === !0 && "sessionId" in t && typeof t.sessionId == "string" && t.sessionId !== "";
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
    var o, s;
    if (t.dataset.disableOptimization === "true")
      return;
    const e = t.dataset.url;
    if (!e) return;
    const i = t.dataset.crop, n = await this.cropModal.open(
      e,
      i,
      t.dataset.showOriginalOnClick === "true",
      this.normalizeCropAspectRatioMode(t.dataset.cropAspectRatio)
    );
    if (n !== null) {
      if (n.crop === "")
        this.ui.updateItemAfterCrop(t, void 0, 0, 0, void 0, void 0);
      else {
        this.ui.updateItemAfterCrop(
          t,
          n.crop,
          n.croppedWidth,
          n.croppedHeight,
          n.showOriginalOnClick,
          n.cropAspectRatio
        );
        const a = t.dataset.mediaId;
        a && ((s = (o = this.config).onCropApplied) == null || s.call(o, a, n.crop));
      }
      this.block.dispatchChange();
    }
  }
  /**
   * Handle image removal - delete from S3
   */
  onRemoveImage(t, e) {
    var n, o;
    if (this.block.dispatchChange(), e) {
      (o = (n = this.config).onMediaRemoved) == null || o.call(n, e);
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
    }).then((s) => s.json()).catch((s) => {
      console.error("Gallery Tool: failed to delete image", s);
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
  en as default
};
