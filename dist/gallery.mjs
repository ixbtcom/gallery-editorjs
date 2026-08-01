(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`:root{--ej-radius-sm: 6px;--ej-radius-md: 8px;--ej-radius-lg: 12px;--ej-bg-page: #fff;--ej-bg-surface: #fff;--ej-bg-muted: var(--gray-50, #f9fafb);--ej-bg-input: #fff;--ej-ring: rgba(3, 7, 18, .1);--ej-ring-focus: var(--primary-600, #2563eb);--ej-border: var(--gray-200, #e5e7eb);--ej-border-strong: rgba(3, 7, 18, .05);--ej-text: var(--gray-950, #030712);--ej-text-secondary: var(--gray-500, #6b7280);--ej-text-muted: var(--gray-400, #9ca3af);--ej-text-on-primary: #fff;--ej-primary: var(--primary-600, #2563eb);--ej-primary-hover: var(--primary-700, #1d4ed8);--ej-primary-light: var(--primary-50, #eff6ff);--ej-primary-muted: var(--primary-100, #dbeafe);--ej-success-bg: var(--success-50, #f0fdf4);--ej-success-border: var(--success-500, #22c55e);--ej-success-text: var(--success-700, #15803d);--ej-warning-bg: var(--warning-50, #fffbeb);--ej-warning-border: var(--warning-500, #f59e0b);--ej-warning-text: var(--warning-700, #b45309);--ej-danger: var(--danger-600, #dc2626);--ej-danger-bg: var(--danger-50, #fef2f2);--ej-danger-border: var(--danger-500, #ef4444);--ej-danger-text: var(--danger-700, #b91c1c);--ej-danger-hover-bg: var(--danger-100, #fee2e2);--ej-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, .05);--ej-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1);--ej-transition: 75ms ease;--ej-control-bg: rgba(255, 255, 255, .9);--ej-control-hover: rgba(0, 0, 0, .05);--ej-icon-color: var(--gray-400, #9ca3af)}.dark{--ej-bg-page: var(--gray-900, #111827);--ej-bg-surface: var(--gray-900, #111827);--ej-bg-muted: rgba(255, 255, 255, .05);--ej-bg-input: rgba(255, 255, 255, .05);--ej-ring: rgba(255, 255, 255, .2);--ej-ring-focus: var(--primary-500, #3b82f6);--ej-border: rgba(255, 255, 255, .1);--ej-border-strong: rgba(255, 255, 255, .1);--ej-text: #fff;--ej-text-secondary: var(--gray-400, #9ca3af);--ej-text-muted: var(--gray-500, #6b7280);--ej-text-on-primary: #fff;--ej-control-bg: rgba(30, 30, 30, .9);--ej-control-hover: rgba(255, 255, 255, .1);--ej-icon-color: var(--gray-500, #6b7280);--ej-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, .3);--ej-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, .3), 0 2px 4px -2px rgba(0, 0, 0, .2)}@keyframes ej-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.gallery-tool{margin:2rem 0;max-width:100%;box-sizing:border-box;overflow:hidden}.gallery-tool__items{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:12px;max-width:100%;box-sizing:border-box}.gallery-tool--columns-1 .gallery-tool__item{flex:0 0 100%;max-width:100%}.gallery-tool--columns-2 .gallery-tool__item{flex:0 0 calc(50% - 6px);max-width:calc(50% - 6px)}.gallery-tool--columns-3 .gallery-tool__item{flex:0 0 calc(33.333% - 8px);max-width:calc(33.333% - 8px)}.gallery-tool--columns-4 .gallery-tool__item{flex:0 0 calc(25% - 9px);max-width:calc(25% - 9px)}.gallery-tool--columns-5 .gallery-tool__item{flex:0 0 calc(20% - 10px);max-width:calc(20% - 10px)}@media (max-width: 639px){.gallery-tool--columns-3 .gallery-tool__item,.gallery-tool--columns-4 .gallery-tool__item,.gallery-tool--columns-5 .gallery-tool__item{flex:0 0 calc(50% - 6px);max-width:calc(50% - 6px)}}.gallery-tool__item{position:relative;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);overflow:hidden;background:var(--ej-bg-muted);box-sizing:border-box;min-width:0;box-shadow:var(--ej-shadow-sm);transition:box-shadow var(--ej-transition)}.gallery-tool__item:hover{box-shadow:var(--ej-shadow-md)}.gallery-tool__item-image{position:relative;min-height:120px;background:var(--ej-bg-muted);overflow:hidden}.gallery-tool__item-image img{width:100%;height:auto;display:block;object-fit:contain;max-height:400px;max-width:100%}.gallery-tool__item-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;background-position:center;margin:35px auto;position:relative;background-color:var(--ej-bg-muted)}.gallery-tool__item-preloader:after{content:"";position:absolute;width:60px;height:60px;border-radius:50%;border:2px solid var(--ej-border);border-top-color:var(--ej-primary);left:50%;top:50%;margin:-30px 0 0 -30px;animation:ej-spin 1s infinite linear;box-sizing:border-box}.gallery-tool__item-caption,.gallery-tool__item-source,.gallery-tool__item-source-link{margin:.5rem;width:calc(100% - 1rem);background:#fff;font-weight:500}.gallery-tool__item-source{color:var(--ej-text-secondary)}.gallery-tool__item-source-link{color:var(--ej-primary)}.gallery-tool__item-caption[data-placeholder]:empty:before,.gallery-tool__item-source[data-placeholder]:empty:before,.gallery-tool__item-source-link[data-placeholder]:empty:before{content:attr(data-placeholder);color:var(--ej-text-muted);pointer-events:none}.gallery-tool__item-caption[data-placeholder]:empty:focus:before,.gallery-tool__item-source[data-placeholder]:empty:focus:before,.gallery-tool__item-source-link[data-placeholder]:empty:focus:before{display:none}.gallery-tool__item-dimensions{position:absolute;bottom:8px;left:8px;padding:2px 6px;background:#0009;color:#fff;font-size:11px;font-family:monospace;border-radius:var(--ej-radius-sm);z-index:5;pointer-events:none}.gallery-tool__ai-mark{display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;padding:0 5px;border-radius:999px;border:1px solid rgba(255,255,255,.75);background:#111827;color:#fff;font-size:11px;font-weight:700;letter-spacing:-.02em;line-height:1;box-shadow:0 2px 8px #00000047;box-sizing:border-box}.gallery-tool__item-ai-badge{position:absolute;right:8px;bottom:8px;z-index:6;display:inline-flex;cursor:help}.gallery-tool__item-controls{position:absolute;top:8px;right:8px;display:flex;gap:4px;opacity:0;transition:opacity .2s;z-index:10}.gallery-tool__item:hover .gallery-tool__item-controls,.gallery-tool__item:focus-within .gallery-tool__item-controls{opacity:1}.gallery-tool__item-remove,.gallery-tool__item-move-left,.gallery-tool__item-move-right{width:32px;height:32px;border:none;border-radius:var(--ej-radius-sm);background:var(--ej-control-bg);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;color:var(--ej-text);transition:background .2s}.gallery-tool__item-remove:hover,.gallery-tool__item-move-left:hover,.gallery-tool__item-move-right:hover{background:var(--ej-control-hover)}.gallery-tool__item-remove{color:var(--ej-danger)}.gallery-tool__add-buttons{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.gallery-tool__add-buttons .cdx-button{display:inline-flex;align-items:center;gap:6px}.gallery-tool__add-buttons .cdx-button svg{width:16px;height:16px}.gallery-tool__add-buttons .gallery-tool__ai-button{gap:8px}.gallery-tool__add-buttons .gallery-tool__ai-button .gallery-tool__ai-mark{min-width:22px;height:22px;font-size:10px}.gallery-tool__url-input-wrapper{flex:1;min-width:200px}.gallery-tool__url-input{width:100%;padding:8px 12px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);font-size:14px;background:var(--ej-bg-input);color:var(--ej-text);transition:border-color var(--ej-transition)}.gallery-tool__url-input:focus{border-color:var(--ej-ring-focus);outline:none;box-shadow:0 0 0 1px var(--ej-ring-focus)}.gallery-tool__columns-control{display:flex;align-items:center;gap:8px;margin-left:auto}.gallery-tool__columns-button{width:32px;height:32px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);background:var(--ej-bg-surface);cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;transition:background .2s;color:var(--ej-text)}.gallery-tool__columns-button:hover{background:var(--ej-bg-muted)}.gallery-tool__columns-display{font-size:13px;color:var(--ej-text-secondary);min-width:45px;text-align:center}.gallery-tool--carousel{max-width:100%;overflow:hidden;box-sizing:border-box}.gallery-tool--carousel .gallery-tool__items{flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;gap:12px;padding-bottom:8px;max-width:100%;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:var(--ej-border) transparent}.gallery-tool--carousel .gallery-tool__items::-webkit-scrollbar{height:6px}.gallery-tool--carousel .gallery-tool__items::-webkit-scrollbar-track{background:transparent}.gallery-tool--carousel .gallery-tool__items::-webkit-scrollbar-thumb{background:var(--ej-border);border-radius:3px}.gallery-tool--carousel .gallery-tool__item{flex:0 0 auto;width:clamp(200px,60vw,280px);max-width:calc(100% - 24px);min-width:200px}.gallery-tool--carousel .gallery-tool__item-image img{max-height:280px}.gallery-tool--masonry .gallery-tool__items{display:block;column-count:2;column-gap:12px;max-width:100%}.gallery-tool--masonry.gallery-tool--columns-3 .gallery-tool__items{column-count:3}.gallery-tool--masonry.gallery-tool--columns-4 .gallery-tool__items{column-count:4}.gallery-tool--masonry.gallery-tool--columns-5 .gallery-tool__items{column-count:5}@media (max-width: 639px){.gallery-tool--masonry.gallery-tool--columns-3 .gallery-tool__items,.gallery-tool--masonry.gallery-tool--columns-4 .gallery-tool__items,.gallery-tool--masonry.gallery-tool--columns-5 .gallery-tool__items{column-count:2}}.gallery-tool--masonry .gallery-tool__item{width:100%;max-width:100%;margin-bottom:12px;break-inside:avoid}.gallery-tool--masonry .gallery-tool__item-image img{max-height:none;max-width:100%}.gallery-tool--empty .gallery-tool__items,.gallery-tool--loading .gallery-tool__item-image img{display:none}.gallery-tool--stretched .gallery-tool__item-image img{max-height:none}.gallery-tool__item-crop{width:32px;height:32px;border:none;border-radius:var(--ej-radius-sm);background:var(--ej-control-bg);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;color:var(--ej-text);transition:background .2s}.gallery-tool__item-crop:hover{background:var(--ej-control-hover)}.gallery-tool__item--cropped{border-left:3px solid var(--ej-primary)}.gallery-tool__item--cropped .gallery-tool__item-image:after{content:"✂";position:absolute;bottom:8px;right:8px;padding:2px 6px;background:var(--ej-primary);color:var(--ej-text-on-primary);font-size:11px;border-radius:var(--ej-radius-sm);z-index:5;pointer-events:none}.gallery-tool__item[data-ai-generated].gallery-tool__item--cropped .gallery-tool__item-image:after{right:44px}.gallery-crop-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000;background:#000000d9;display:flex;align-items:center;justify-content:center;padding:20px}.gallery-crop-modal__container{background:var(--ej-bg-surface, #fff);border-radius:var(--ej-radius-lg);box-shadow:var(--ej-shadow-md);max-width:90vw;max-height:90vh;display:flex;flex-direction:column;overflow:hidden}.gallery-crop-modal__image-wrapper{flex:1;overflow:hidden;max-height:calc(90vh - 80px);display:flex;align-items:center;justify-content:center}.gallery-crop-modal__image-wrapper img{max-width:100%;display:block}.gallery-crop-modal__options{display:flex;flex-direction:column;gap:12px;padding:12px 16px 0;background:var(--ej-bg-muted, #f5f5f5)}.gallery-crop-modal__option{display:inline-flex;align-items:center;gap:8px;color:var(--ej-text);cursor:pointer;font-size:14px}.gallery-crop-modal__option input{width:18px;height:18px;margin:0}.gallery-crop-modal__aspect-ratios{display:flex;flex-wrap:wrap;gap:8px;padding:0;border:0;margin:0}.gallery-crop-modal__aspect-ratios-label{width:100%;color:var(--ej-text-secondary);font-size:13px;font-weight:500}.gallery-crop-modal__aspect-ratio{display:inline-flex;position:relative;cursor:pointer}.gallery-crop-modal__aspect-ratio input{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:100%;height:100%;margin:0;opacity:0;cursor:pointer}.gallery-crop-modal__aspect-ratio-label{min-width:52px;padding:6px 10px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-sm);background:var(--ej-bg-surface);color:var(--ej-text);font-size:13px;line-height:1;text-align:center}.gallery-crop-modal__aspect-ratio input:checked+.gallery-crop-modal__aspect-ratio-label{border-color:var(--ej-primary);background:var(--ej-primary-light);color:var(--ej-primary)}.gallery-crop-modal__aspect-ratio input:focus-visible+.gallery-crop-modal__aspect-ratio-label{outline:2px solid var(--ej-ring-focus);outline-offset:2px}.gallery-crop-modal__actions{display:flex;gap:8px;padding:12px 16px;justify-content:center;background:var(--ej-bg-muted, #f5f5f5);border-top:1px solid var(--ej-border)}.gallery-crop-modal__btn{padding:8px 20px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);background:var(--ej-bg-surface, #fff);color:var(--ej-text);font-size:14px;font-weight:500;cursor:pointer;transition:background var(--ej-transition),border-color var(--ej-transition)}.gallery-crop-modal__btn:hover{background:var(--ej-bg-muted)}.gallery-crop-modal__btn--primary{background:var(--ej-primary);color:var(--ej-text-on-primary);border-color:var(--ej-primary)}.gallery-crop-modal__btn--primary:hover{opacity:.9}.gallery-crop-modal__btn--danger{color:var(--ej-danger);border-color:var(--ej-danger)}.gallery-crop-modal__btn--danger:hover{background:var(--ej-danger);color:#fff}.gallery-tool__item-cover{width:28px;height:28px;border:none;border-radius:6px;background:#0000008c;color:#fbbf24;font-size:15px;line-height:1;cursor:pointer;display:inline-flex;align-items:center;justify-content:center}.gallery-tool__item-cover:hover{background:#000000bf}.gallery-tool__item[data-cover]{outline:2px solid #3b82f6;outline-offset:-2px}.gallery-tool__item[data-cover] .gallery-tool__item-cover{color:#3b82f6}.gallery-tool__item[data-cover]:after{content:"Обложка";position:absolute;top:6px;left:6px;background:#3b82f6e6;color:#fff;font-size:11px;font-weight:600;padding:2px 8px;border-radius:4px;pointer-events:none;z-index:3}.gallery-tool__item[data-cover][data-cover-overridden]:after{content:"Обложка · перекрыта вручную";background:#4b5563f2}.ai-image-tool__generator{display:grid;gap:14px;margin-top:14px;padding:16px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-lg);background:var(--ej-bg-muted);color:var(--ej-text)}.ai-image-tool__generator [hidden]{display:none}.ai-image-tool__prompt-section,.ai-image-tool__selection,.ai-image-tool__metadata{display:grid;gap:10px}.ai-image-tool__sessions{display:grid;gap:8px;padding:12px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);background:var(--ej-bg-surface)}.ai-image-tool__sessions-title{color:var(--ej-text-secondary);font-size:12px;font-weight:600}.ai-image-tool__sessions-list{display:grid;gap:8px}.ai-image-tool__session{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:10px;padding:8px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);background:var(--ej-bg-muted)}.ai-image-tool__session-preview{display:flex;align-items:center;justify-content:center;width:64px;height:44px;overflow:hidden;border-radius:var(--ej-radius-sm);background:var(--ej-bg-input)}.ai-image-tool__session-thumb{width:100%;height:100%;object-fit:cover}.ai-image-tool__session-body{display:grid;gap:2px;min-width:0}.ai-image-tool__session-title{overflow:hidden;color:var(--ej-text);font-size:13px;font-weight:600;text-overflow:ellipsis;white-space:nowrap}a.ai-image-tool__session-title{color:var(--ej-primary);text-decoration:none}a.ai-image-tool__session-title:hover{text-decoration:underline}.ai-image-tool__session-meta{color:var(--ej-text-secondary);font-size:12px}.ai-image-tool__session-prompt{overflow:hidden;color:var(--ej-text-muted);font-size:12px;text-overflow:ellipsis;white-space:nowrap}.ai-image-tool__session-actions{display:flex;align-items:center;gap:6px}.ai-image-tool__session-close{width:28px;height:28px;padding:0;border:1px solid var(--ej-border);border-radius:var(--ej-radius-sm);background:var(--ej-bg-input);color:var(--ej-text-secondary);font-size:16px;line-height:1;cursor:pointer;transition:background var(--ej-transition),color var(--ej-transition)}.ai-image-tool__session-close:hover{background:var(--ej-danger-bg);border-color:var(--ej-danger-border);color:var(--ej-danger-text)}.ai-image-tool__prompt-actions,.ai-image-tool__history{display:flex;flex-wrap:wrap;gap:8px}.ai-image-tool__aspect-ratio-field{display:flex;flex-wrap:wrap;align-items:center;gap:8px}.ai-image-tool__aspect-ratio-label{color:var(--ej-text-secondary);font-size:14px}.ai-image-tool__aspect-ratios{display:inline-flex;width:fit-content;overflow:hidden;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);background:var(--ej-bg-input)}.ai-image-tool__aspect-ratio-option{position:relative;min-width:58px;cursor:pointer;color:var(--ej-text-secondary);font-size:13px;font-weight:600;text-align:center}.ai-image-tool__aspect-ratio-option span{display:block;padding:8px 12px}.ai-image-tool__aspect-ratio-input{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:100%;height:100%;margin:0;opacity:0;cursor:pointer}.ai-image-tool__aspect-ratio-input:checked+span{background:var(--ej-primary);color:var(--ej-text-on-primary)}.ai-image-tool__aspect-ratio-input:focus-visible+span{outline:2px solid var(--ej-ring-focus);outline-offset:-2px}.ai-image-tool__aspect-ratio-input:disabled+span{cursor:not-allowed;opacity:.65}.ai-image-tool__caption-option{display:inline-flex;align-items:center;width:fit-content;min-height:44px;gap:9px;cursor:pointer;color:var(--ej-text);font-size:14px}.ai-image-tool__caption-checkbox{width:18px;height:18px;margin:0;accent-color:var(--ej-primary)}.ai-image-tool__label{color:var(--ej-text);font-size:14px;font-weight:600}.ai-image-tool__prompt,.ai-image-tool__metadata-input{box-sizing:border-box;width:100%;padding:10px 12px;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);outline:none;background:var(--ej-bg-input);color:var(--ej-text);font:inherit;line-height:1.5;transition:border-color var(--ej-transition),box-shadow var(--ej-transition)}.ai-image-tool__prompt{min-height:88px;resize:vertical}.ai-image-tool__metadata-input{min-height:44px}.ai-image-tool__metadata-caption{resize:vertical}.ai-image-tool__prompt:focus-visible,.ai-image-tool__metadata-input:focus-visible,.ai-image-tool__caption-checkbox:focus-visible,.ai-image-tool__action:focus-visible,.ai-image-tool__candidate:focus-visible,.ai-image-tool__history-item:focus-visible{outline:2px solid var(--ej-ring-focus);outline-offset:2px}.ai-image-tool__action,.ai-image-tool__history-item{min-height:44px;padding:9px 14px;border:1px solid transparent;border-radius:var(--ej-radius-md);cursor:pointer;font:inherit;font-weight:600;transition:background-color var(--ej-transition),border-color var(--ej-transition),box-shadow var(--ej-transition)}.ai-image-tool__action{justify-self:start;background:var(--ej-primary);color:var(--ej-text-on-primary)}.ai-image-tool__action:hover:not(:disabled){background:var(--ej-primary-hover)}.ai-image-tool__action--secondary,.ai-image-tool__history-item{border-color:var(--ej-border);background:var(--ej-bg-surface);color:var(--ej-text)}.ai-image-tool__action--secondary:hover:not(:disabled),.ai-image-tool__history-item:hover,.ai-image-tool__history-item[aria-current=true]{border-color:var(--ej-primary);background:var(--ej-primary-muted)}.ai-image-tool__action:disabled,.ai-image-tool__prompt:disabled,.ai-image-tool__metadata-input:disabled{cursor:not-allowed;opacity:.6}.ai-image-tool__status,.ai-image-tool__caption-status,.ai-image-tool__history-status{min-height:21px;color:var(--ej-text-secondary);font-size:14px}.ai-image-tool__error:not([hidden]){padding:10px 12px;border:1px solid var(--ej-danger-border);border-radius:var(--ej-radius-md);background:var(--ej-danger-bg);color:var(--ej-danger-text);font-size:14px}.ai-image-tool__candidates{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(220px,100%),1fr));gap:12px}.ai-image-tool__candidate{position:relative;min-width:0;padding:3px;overflow:hidden;border:1px solid var(--ej-border);border-radius:var(--ej-radius-md);cursor:pointer;background:var(--ej-bg-surface);box-shadow:var(--ej-shadow-sm)}.ai-image-tool__candidate:hover,.ai-image-tool__candidate[aria-pressed=true]{border-color:var(--ej-primary)}.ai-image-tool__candidate[aria-pressed=true]{box-shadow:0 0 0 2px var(--ej-primary-muted)}.ai-image-tool__candidate[aria-pressed=true]:after{content:"Выбрано";position:absolute;right:8px;bottom:8px;padding:4px 7px;border-radius:var(--ej-radius-sm);background:var(--ej-primary);color:var(--ej-text-on-primary);font-size:12px;font-weight:600}.ai-image-tool__candidate-image,.ai-image-tool__selected-preview{display:block;width:100%;aspect-ratio:16 / 9;border-radius:calc(var(--ej-radius-md) - 3px);object-fit:cover}.ai-image-tool__caption-status[data-error]{color:var(--ej-danger-text)}.ai-image-tool__history-item[aria-current=true]{box-shadow:inset 0 0 0 1px var(--ej-primary);font-weight:700}@media (min-width: 640px){.ai-image-tool__generator{padding:20px}.ai-image-tool__selection{grid-template-columns:1fr auto}.ai-image-tool__selection>:not(.ai-image-tool__action){grid-column:1 / -1}}@media (prefers-reduced-motion: reduce){.ai-image-tool__action,.ai-image-tool__candidate,.ai-image-tool__history-item,.ai-image-tool__prompt,.ai-image-tool__metadata-input{transition-duration:.01ms}}/*!
 * Cropper.js v1.6.2
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-04-21T07:43:02.731Z
 */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;-ms-touch-action:none;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cropper-container img{backface-visibility:hidden;display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-wrap-box,.cropper-canvas,.cropper-drag-box,.cropper-crop-box,.cropper-modal{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-wrap-box,.cropper-canvas{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:#3399ffbf;overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:calc(100% / 3);left:0;top:calc(100% / 3);width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:calc(100% / 3);top:0;width:calc(100% / 3)}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:before,.cropper-center:after{background-color:#eee;content:" ";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width: 768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width: 992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width: 1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:" ";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC)}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}`)),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
const be = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>';
function g(r, t = null, e = {}) {
  const i = document.createElement(r);
  Array.isArray(t) ? i.classList.add(...t) : t !== null && i.classList.add(t);
  for (const o in e)
    Object.prototype.hasOwnProperty.call(e, o) && (i[o] = e[o]);
  return i;
}
const Ge = "media.ixbt.site", Ue = "920x/webp", He = /^\d+x\d*$/;
function It(r) {
  if (!r)
    return r;
  let t;
  try {
    t = new URL(r);
  } catch {
    return r;
  }
  if (t.hostname !== Ge)
    return r;
  const e = t.pathname.split("/").filter(Boolean);
  return e.length === 0 || He.test(e[0]) ? r : (t.pathname = `/${Ue}/${e.join("/")}`, t.toString());
}
const Fe = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2v4"/><path d="M6 6h12a2 2 0 0 1 2 2v8"/><path d="M18 22v-4"/><path d="M18 18H6a2 2 0 0 1-2-2V8"/></svg>', ee = '<span class="gallery-tool__ai-mark" aria-hidden="true">Ai</span>', ie = "Создано с помощью Ai", K = class K {
  constructor({ api: t, config: e, onSelectFile: i, onSelectUrl: o, onColumnsChange: n, onRemoveImage: s, onCropImage: a, onOpenAi: h, readOnly: l }) {
    this.currentColumns = 1, this.previousColumns = 1, this.isRendering = !1, this.columnsLocked = !1, this.api = t, this.config = e, this.onSelectFile = i, this.onSelectUrl = o, this.onColumnsChange = n, this.onRemoveImage = s, this.onCropImage = a, this.onOpenAi = h ?? (() => {
    }), this.readOnly = l, this.nodes = {
      wrapper: g("div", [this.CSS.wrapper]),
      itemsContainer: g("div", [this.CSS.itemsContainer]),
      addButtons: g("div", [this.CSS.addButtons]),
      fileButton: this.createFileButton(),
      aiButton: this.createAiButton(),
      urlButton: g("div"),
      // unused, kept for interface compatibility
      urlInput: this.createUrlInput(),
      columnsControl: this.createColumnsControl()
    }, this.nodes.addButtons.appendChild(this.nodes.fileButton), this.config.generation !== void 0 && !this.readOnly && this.nodes.addButtons.appendChild(this.nodes.aiButton), this.nodes.addButtons.appendChild(this.nodes.urlInput), this.nodes.addButtons.appendChild(this.nodes.columnsControl), this.nodes.wrapper.appendChild(this.nodes.itemsContainer), this.nodes.wrapper.appendChild(this.nodes.addButtons);
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
      itemCropped: "gallery-tool__item--cropped",
      addButtons: "gallery-tool__add-buttons",
      button: this.api.styles.button,
      input: this.api.styles.input,
      urlInput: "gallery-tool__url-input",
      urlInputWrapper: "gallery-tool__url-input-wrapper",
      columnsControl: "gallery-tool__columns-control",
      columnsButton: "gallery-tool__columns-button",
      columnsDisplay: "gallery-tool__columns-display",
      aiButton: "gallery-tool__ai-button"
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
    var p, b, C;
    const e = g("div", [this.CSS.item]), i = g("div", [this.CSS.itemImage]), o = g("div", [this.CSS.itemPreloader]), n = t.crop && t.imagorPath ? this.buildPreviewUrl(t.imagorPath, t.crop) : It(t.url), s = g("img", null, { src: n }), a = t.crop && t.croppedWidth ? t.croppedWidth : t.width, h = t.crop && t.croppedHeight ? t.croppedHeight : t.height;
    a && h && (s.style.aspectRatio = `${a} / ${h}`), t.crop && (s.style.width = "100%", s.style.maxHeight = "none", e.classList.add(this.CSS.itemCropped));
    const l = g("div", [this.CSS.itemCaption, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    l.dataset.placeholder = this.config.captionPlaceholder ?? "Caption", l.textContent = t.caption || "";
    const c = g("div", [this.CSS.itemSource, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    c.dataset.placeholder = this.config.sourcePlaceholder ?? "Source", c.textContent = t.source || "";
    const d = g("div", [this.CSS.itemSourceLink, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    if (d.dataset.placeholder = this.config.sourceLinkPlaceholder ?? "Source link", d.textContent = t.sourceLink || "", i.appendChild(o), i.appendChild(s), a && h) {
      const u = g("div", [this.CSS.itemDimensions]);
      u.textContent = `${a} × ${h}`, i.appendChild(u);
    }
    if (t.isAiGenerated && i.appendChild(this.createAiBadge()), s.onload = () => {
      o.style.display = "none";
    }, !this.readOnly) {
      const u = this.createItemControls(e);
      e.appendChild(u);
    }
    return e.appendChild(i), e.appendChild(l), e.appendChild(c), e.appendChild(d), e.dataset.url = t.url, t.media_id && (e.dataset.mediaId = t.media_id), (p = this.config.cover) != null && p.enabled && t.media_id && ((C = (b = this.config.cover).coverUuid) == null ? void 0 : C.call(b)) === t.media_id && e.setAttribute("data-cover", ""), t.width && (e.dataset.width = String(t.width)), t.height && (e.dataset.height = String(t.height)), t.imagorPath && (e.dataset.imagorPath = t.imagorPath), t.crop && (e.dataset.crop = t.crop), t.croppedWidth && (e.dataset.croppedWidth = String(t.croppedWidth)), t.croppedHeight && (e.dataset.croppedHeight = String(t.croppedHeight)), t.cropAspectRatio && (e.dataset.cropAspectRatio = t.cropAspectRatio), typeof t.showOriginalOnClick == "boolean" && (e.dataset.showOriginalOnClick = String(t.showOriginalOnClick)), t.isAiGenerated && (e.dataset.aiGenerated = "true"), this.nodes.itemsContainer.appendChild(e), this.toggleState(
      "filled"
      /* Filled */
    ), this.autoAdjustColumns(), e;
  }
  /**
   * Create a placeholder item for loading state
   */
  createLoadingItem(t) {
    const e = g("div", [this.CSS.item]), i = g("div", [this.CSS.itemImage]), o = g("div", [this.CSS.itemPreloader]);
    t && (o.style.backgroundImage = `url(${It(t)})`), i.appendChild(o), e.appendChild(i);
    const n = g("div", [this.CSS.itemCaption, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    n.dataset.placeholder = this.config.captionPlaceholder ?? "Caption";
    const s = g("div", [this.CSS.itemSource, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    s.dataset.placeholder = this.config.sourcePlaceholder ?? "Source";
    const a = g("div", [this.CSS.itemSourceLink, this.CSS.input], {
      contentEditable: !this.readOnly
    });
    return a.dataset.placeholder = this.config.sourceLinkPlaceholder ?? "Source link", e.appendChild(n), e.appendChild(s), e.appendChild(a), this.nodes.itemsContainer.appendChild(e), this.toggleState(
      "loading"
      /* Loading */
    ), e;
  }
  /**
   * Update loading item with uploaded image
   */
  fillLoadingItem(t, e) {
    var s, a, h;
    const i = t.querySelector(`.${this.CSS.itemImage}`), o = t.querySelector(`.${this.CSS.itemPreloader}`), n = g("img", null, { src: It(e.url) });
    if (n.onload = () => {
      o && (o.style.display = "none");
    }, i.appendChild(n), e.width && e.height) {
      const l = g("div", [this.CSS.itemDimensions]);
      l.textContent = `${e.width} × ${e.height}`, i.appendChild(l);
    }
    if (t.dataset.url = e.url, e.media_id && (t.dataset.mediaId = e.media_id), (s = this.config.cover) != null && s.enabled && e.media_id && ((h = (a = this.config.cover).coverUuid) == null ? void 0 : h.call(a)) === e.media_id && t.setAttribute("data-cover", ""), e.width && (t.dataset.width = String(e.width)), e.height && (t.dataset.height = String(e.height)), e.imagorPath && (t.dataset.imagorPath = e.imagorPath), e.isAiGenerated && (t.dataset.aiGenerated = "true", i.appendChild(this.createAiBadge())), !this.readOnly) {
      const l = this.createItemControls(t);
      t.insertBefore(l, t.firstChild);
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
      var _, S, m;
      const o = i, n = o.dataset.url;
      if (!n) return;
      const s = ((_ = i.querySelector(`.${this.CSS.itemCaption}`)) == null ? void 0 : _.textContent) || "", a = ((S = i.querySelector(`.${this.CSS.itemSource}`)) == null ? void 0 : S.textContent) || "", h = ((m = i.querySelector(`.${this.CSS.itemSourceLink}`)) == null ? void 0 : m.textContent) || "", l = o.dataset.width ? parseInt(o.dataset.width, 10) : void 0, c = o.dataset.height ? parseInt(o.dataset.height, 10) : void 0, d = o.dataset.imagorPath || void 0, p = o.dataset.crop || void 0, b = o.dataset.croppedWidth ? parseInt(o.dataset.croppedWidth, 10) : void 0, C = o.dataset.croppedHeight ? parseInt(o.dataset.croppedHeight, 10) : void 0, u = o.dataset.cropAspectRatio === "16:9" || o.dataset.cropAspectRatio === "1:1" ? o.dataset.cropAspectRatio : o.dataset.cropAspectRatio === "3:2" ? "3:2" : o.dataset.cropAspectRatio === "free" ? "free" : void 0, f = o.dataset.showOriginalOnClick === void 0 ? void 0 : o.dataset.showOriginalOnClick === "true", v = o.dataset.mediaId || void 0, y = o.dataset.aiGenerated === "true", w = {
        url: n,
        media_id: v,
        imagorPath: d,
        caption: s,
        source: a,
        sourceLink: h,
        width: l,
        height: c,
        crop: p,
        croppedWidth: b,
        croppedHeight: C
      };
      u !== void 0 && (w.cropAspectRatio = u), f !== void 0 && (w.showOriginalOnClick = f), y && (w.isAiGenerated = !0), e.push(w);
    }), e;
  }
  /**
   * Update item DOM after crop operation
   */
  updateItemAfterCrop(t, e, i, o, n, s) {
    const a = t.querySelector(`.${this.CSS.itemImage} img`);
    if (a)
      if (e) {
        t.dataset.crop = e, t.dataset.croppedWidth = String(i), t.dataset.croppedHeight = String(o), t.dataset.showOriginalOnClick = String(n ?? !1), t.dataset.cropAspectRatio = s ?? "3:2", t.classList.add(this.CSS.itemCropped);
        const h = t.dataset.imagorPath;
        h && (a.src = this.buildPreviewUrl(h, e)), a.style.width = "100%", a.style.maxHeight = "none", this.updateItemDimensions(t, i, o);
      } else
        delete t.dataset.crop, delete t.dataset.croppedWidth, delete t.dataset.croppedHeight, delete t.dataset.showOriginalOnClick, delete t.dataset.cropAspectRatio, t.classList.remove(this.CSS.itemCropped), a.src = It(t.dataset.url || ""), a.style.width = "", a.style.maxHeight = "", this.updateItemDimensions(
          t,
          t.dataset.width ? parseInt(t.dataset.width, 10) : void 0,
          t.dataset.height ? parseInt(t.dataset.height, 10) : void 0
        );
  }
  /** Update an item's effective dimensions badge and aspect ratio. */
  updateItemDimensions(t, e, i) {
    const o = t.querySelector(`.${this.CSS.itemImage}`), n = o == null ? void 0 : o.querySelector("img"), s = Number.isFinite(e) && Number.isFinite(i) && (e ?? 0) > 0 && (i ?? 0) > 0;
    let a = (o == null ? void 0 : o.querySelector(`.${this.CSS.itemDimensions}`)) ?? null;
    if (!s) {
      a == null || a.remove(), n && (n.style.aspectRatio = "");
      return;
    }
    a === null && o !== null && (a = g("div", [this.CSS.itemDimensions]), o.appendChild(a)), a !== null && (a.textContent = `${e} × ${i}`), n && (n.style.aspectRatio = `${e} / ${i}`);
  }
  /**
   * Build imagor preview URL with crop + fit-in resize.
   * Mirrors ImageService::url() logic using imagorPath (normalized short URL).
   */
  buildPreviewUrl(t, e, i = 600) {
    const o = this.config.mediaHost;
    if (!o || !t) return "";
    const n = ["unsafe"];
    return e && n.push(e), n.push("fit-in", `${i}x0`, t), `${o}/${n.join("/")}`;
  }
  /**
   * Get current columns count
   */
  getColumns() {
    return this.currentColumns;
  }
  createFileButton() {
    const t = g("div", [this.CSS.button]);
    return t.innerHTML = `${be} ${this.config.buttonContent}`, t.addEventListener("click", () => this.onSelectFile()), t;
  }
  createAiButton() {
    const t = g("button", [this.CSS.button, this.CSS.aiButton], { type: "button" });
    return t.innerHTML = `${ee}<span>Генерация</span>`, t.setAttribute("aria-label", "Генерация"), t.addEventListener("click", () => this.onOpenAi()), t;
  }
  createAiBadge() {
    const t = g("span", [this.CSS.itemAiBadge], {
      title: ie
    });
    return t.innerHTML = ee, t.setAttribute("aria-label", ie), t;
  }
  createUrlInput() {
    const t = g("div", [this.CSS.urlInputWrapper]), e = g("input", [this.CSS.urlInput, this.CSS.input], {
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
    const t = g("div", [this.CSS.columnsControl]), e = g("button", [this.CSS.columnsButton], { type: "button" });
    e.innerHTML = "−", e.addEventListener("click", () => this.changeColumns(-1));
    const i = g("span", [this.CSS.columnsDisplay]);
    i.textContent = `${this.currentColumns} col`;
    const o = g("button", [this.CSS.columnsButton], { type: "button" });
    return o.innerHTML = "+", o.addEventListener("click", () => this.changeColumns(1)), t.appendChild(e), t.appendChild(i), t.appendChild(o), t;
  }
  changeColumns(t) {
    const e = Math.min(K.MAX_COLUMNS, Math.max(K.MIN_COLUMNS, this.currentColumns + t));
    e !== this.currentColumns && (this.columnsLocked = !0, this.previousColumns = this.currentColumns, this.currentColumns = e, this.updateColumnsClass(), this.updateColumnsDisplay(), this.onColumnsChange(e));
  }
  updateColumnsClass() {
    const t = `gallery-tool--columns-${this.previousColumns}`, e = `gallery-tool--columns-${this.currentColumns}`;
    if (this.nodes.wrapper.classList.contains(t))
      this.nodes.wrapper.classList.replace(t, e);
    else {
      for (let i = K.MIN_COLUMNS; i <= K.MAX_COLUMNS; i++)
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
    var a;
    const e = g("div", [this.CSS.itemControls]), i = g("button", [this.CSS.itemRemove], { type: "button" });
    i.innerHTML = "×", i.title = this.api.i18n.t("Удалить изображение"), i.setAttribute("aria-label", this.api.i18n.t("Удалить изображение")), i.addEventListener("click", () => {
      const h = t.dataset.url, l = t.dataset.mediaId;
      t.remove(), this.nodes.itemsContainer.children.length === 0 && (this.toggleState(
        "empty"
        /* Empty */
      ), this.columnsLocked = !1), this.autoAdjustColumns(), (h || l) && this.onRemoveImage(h ?? "", l);
    });
    const o = g("button", [this.CSS.itemMoveLeft], { type: "button" });
    o.innerHTML = "←", o.addEventListener("click", () => this.moveItem(t, -1));
    const n = g("button", [this.CSS.itemMoveRight], { type: "button" });
    n.innerHTML = "→", n.addEventListener("click", () => this.moveItem(t, 1));
    const s = g("button", [this.CSS.itemCrop], { type: "button" });
    if (s.innerHTML = Fe, s.title = this.api.i18n.t("Обрезать изображение"), s.setAttribute("aria-label", this.api.i18n.t("Обрезать изображение")), s.addEventListener("click", () => this.onCropImage(t)), e.appendChild(o), e.appendChild(s), (a = this.config.cover) != null && a.enabled) {
      const h = g("button", ["gallery-tool__item-cover"], { type: "button" });
      h.innerHTML = "★", h.title = this.api.i18n.t("Сделать обложкой"), h.setAttribute("aria-label", this.api.i18n.t("Сделать обложкой")), h.setAttribute("aria-pressed", String(t.hasAttribute("data-cover"))), h.addEventListener("click", () => this.onSetCover(t)), e.appendChild(h);
    }
    return e.appendChild(i), e.appendChild(n), e;
  }
  /**
   * Выбрать элемент gallery базовой обложкой в состоянии формы.
   */
  onSetCover(t) {
    var o;
    const e = this.config.cover;
    if (!(e != null && e.enabled))
      return !1;
    const i = t.dataset.mediaId;
    return i ? (this.markCover(i), (o = e.onCoverChanged) == null || o.call(e, i), this.api.notifier.show({ message: this.api.i18n.t("Базовая обложка обновлена") }), !0) : (this.api.notifier.show({ message: this.api.i18n.t("Сначала дождитесь загрузки картинки"), style: "error" }), !1);
  }
  /**
   * Подсветить элемент-обложку (по media uuid), снять метку с остальных.
   */
  markCover(t) {
    this.nodes.itemsContainer.querySelectorAll(`.${this.CSS.item}`).forEach((i) => {
      var s;
      const o = i, n = !!t && o.dataset.mediaId === t;
      o.toggleAttribute("data-cover", n), (s = o.querySelector('[aria-label="Сделать обложкой"]')) == null || s.setAttribute("aria-pressed", String(n));
    });
  }
  moveItem(t, e) {
    const i = Array.from(this.nodes.itemsContainer.children), n = i.indexOf(t) + e;
    n < 0 || n >= i.length || (e < 0 ? this.nodes.itemsContainer.insertBefore(t, i[n]) : this.nodes.itemsContainer.insertBefore(i[n], t));
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
K.MIN_COLUMNS = 1, K.MAX_COLUMNS = 5;
let Gt = K;
function je(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var we = { exports: {} };
(function(r, t) {
  (function(e, i) {
    r.exports = i();
  })(window, function() {
    return function(e) {
      var i = {};
      function o(n) {
        if (i[n]) return i[n].exports;
        var s = i[n] = { i: n, l: !1, exports: {} };
        return e[n].call(s.exports, s, s.exports, o), s.l = !0, s.exports;
      }
      return o.m = e, o.c = i, o.d = function(n, s, a) {
        o.o(n, s) || Object.defineProperty(n, s, { enumerable: !0, get: a });
      }, o.r = function(n) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
      }, o.t = function(n, s) {
        if (1 & s && (n = o(n)), 8 & s || 4 & s && typeof n == "object" && n && n.__esModule) return n;
        var a = /* @__PURE__ */ Object.create(null);
        if (o.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: n }), 2 & s && typeof n != "string") for (var h in n) o.d(a, h, (function(l) {
          return n[l];
        }).bind(null, h));
        return a;
      }, o.n = function(n) {
        var s = n && n.__esModule ? function() {
          return n.default;
        } : function() {
          return n;
        };
        return o.d(s, "a", s), s;
      }, o.o = function(n, s) {
        return Object.prototype.hasOwnProperty.call(n, s);
      }, o.p = "", o(o.s = 3);
    }([function(e, i) {
      var o;
      o = /* @__PURE__ */ function() {
        return this;
      }();
      try {
        o = o || new Function("return this")();
      } catch {
        typeof window == "object" && (o = window);
      }
      e.exports = o;
    }, function(e, i, o) {
      (function(n) {
        var s = o(2), a = setTimeout;
        function h() {
        }
        function l(f) {
          if (!(this instanceof l)) throw new TypeError("Promises must be constructed via new");
          if (typeof f != "function") throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(f, this);
        }
        function c(f, v) {
          for (; f._state === 3; ) f = f._value;
          f._state !== 0 ? (f._handled = !0, l._immediateFn(function() {
            var y = f._state === 1 ? v.onFulfilled : v.onRejected;
            if (y !== null) {
              var w;
              try {
                w = y(f._value);
              } catch (_) {
                return void p(v.promise, _);
              }
              d(v.promise, w);
            } else (f._state === 1 ? d : p)(v.promise, f._value);
          })) : f._deferreds.push(v);
        }
        function d(f, v) {
          try {
            if (v === f) throw new TypeError("A promise cannot be resolved with itself.");
            if (v && (typeof v == "object" || typeof v == "function")) {
              var y = v.then;
              if (v instanceof l) return f._state = 3, f._value = v, void b(f);
              if (typeof y == "function") return void u((w = y, _ = v, function() {
                w.apply(_, arguments);
              }), f);
            }
            f._state = 1, f._value = v, b(f);
          } catch (S) {
            p(f, S);
          }
          var w, _;
        }
        function p(f, v) {
          f._state = 2, f._value = v, b(f);
        }
        function b(f) {
          f._state === 2 && f._deferreds.length === 0 && l._immediateFn(function() {
            f._handled || l._unhandledRejectionFn(f._value);
          });
          for (var v = 0, y = f._deferreds.length; v < y; v++) c(f, f._deferreds[v]);
          f._deferreds = null;
        }
        function C(f, v, y) {
          this.onFulfilled = typeof f == "function" ? f : null, this.onRejected = typeof v == "function" ? v : null, this.promise = y;
        }
        function u(f, v) {
          var y = !1;
          try {
            f(function(w) {
              y || (y = !0, d(v, w));
            }, function(w) {
              y || (y = !0, p(v, w));
            });
          } catch (w) {
            if (y) return;
            y = !0, p(v, w);
          }
        }
        l.prototype.catch = function(f) {
          return this.then(null, f);
        }, l.prototype.then = function(f, v) {
          var y = new this.constructor(h);
          return c(this, new C(f, v, y)), y;
        }, l.prototype.finally = s.a, l.all = function(f) {
          return new l(function(v, y) {
            if (!f || f.length === void 0) throw new TypeError("Promise.all accepts an array");
            var w = Array.prototype.slice.call(f);
            if (w.length === 0) return v([]);
            var _ = w.length;
            function S(x, I) {
              try {
                if (I && (typeof I == "object" || typeof I == "function")) {
                  var E = I.then;
                  if (typeof E == "function") return void E.call(I, function(O) {
                    S(x, O);
                  }, y);
                }
                w[x] = I, --_ == 0 && v(w);
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
            for (var w = 0, _ = f.length; w < _; w++) f[w].then(v, y);
          });
        }, l._immediateFn = typeof n == "function" && function(f) {
          n(f);
        } || function(f) {
          a(f, 0);
        }, l._unhandledRejectionFn = function(f) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", f);
        }, i.a = l;
      }).call(this, o(5).setImmediate);
    }, function(e, i, o) {
      i.a = function(n) {
        var s = this.constructor;
        return this.then(function(a) {
          return s.resolve(n()).then(function() {
            return a;
          });
        }, function(a) {
          return s.resolve(n()).then(function() {
            return s.reject(a);
          });
        });
      };
    }, function(e, i, o) {
      function n(u) {
        return (n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
          return typeof f;
        } : function(f) {
          return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
        })(u);
      }
      o(4);
      var s, a, h, l, c, d, p, b = o(8), C = (a = function(u) {
        return new Promise(function(f, v) {
          u = l(u), (u = c(u)).beforeSend && u.beforeSend();
          var y = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          y.open(u.method, u.url), y.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(u.headers).forEach(function(_) {
            var S = u.headers[_];
            y.setRequestHeader(_, S);
          });
          var w = u.ratio;
          y.upload.addEventListener("progress", function(_) {
            var S = Math.round(_.loaded / _.total * 100), m = Math.ceil(S * w / 100);
            u.progress(Math.min(m, 100));
          }, !1), y.addEventListener("progress", function(_) {
            var S = Math.round(_.loaded / _.total * 100), m = Math.ceil(S * (100 - w) / 100) + w;
            u.progress(Math.min(m, 100));
          }, !1), y.onreadystatechange = function() {
            if (y.readyState === 4) {
              var _ = y.response;
              try {
                _ = JSON.parse(_);
              } catch {
              }
              var S = b.parseHeaders(y.getAllResponseHeaders()), m = { body: _, code: y.status, headers: S };
              p(y.status) ? f(m) : v(m);
            }
          }, y.send(u.data);
        });
      }, h = function(u) {
        return u.method = "POST", a(u);
      }, l = function() {
        var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (u.url && typeof u.url != "string") throw new Error("Url must be a string");
        if (u.url = u.url || "", u.method && typeof u.method != "string") throw new Error("`method` must be a string or null");
        if (u.method = u.method ? u.method.toUpperCase() : "GET", u.headers && n(u.headers) !== "object") throw new Error("`headers` must be an object or null");
        if (u.headers = u.headers || {}, u.type && (typeof u.type != "string" || !Object.values(s).includes(u.type))) throw new Error("`type` must be taken from module's «contentType» library");
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
            var f = d(u.data, s.URLENCODED);
            delete u.data, u.url = /\?/.test(u.url) ? u.url + "&" + f : u.url + "?" + f;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var v = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || s.JSON;
            }(u);
            (b.isFormData(u.data) || b.isFormElement(u.data)) && (v = s.FORM), u.data = d(u.data, v), v !== C.contentType.FORM && (u.headers["content-type"] = v);
        }
        return u;
      }, d = function() {
        var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case s.URLENCODED:
            return b.urlEncode(u);
          case s.JSON:
            return b.jsonEncode(u);
          case s.FORM:
            return b.formEncode(u);
          default:
            return u;
        }
      }, p = function(u) {
        return u >= 200 && u < 300;
      }, { contentType: s = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: a, get: function(u) {
        return u.method = "GET", a(u);
      }, post: h, transport: function(u) {
        return u = l(u), b.selectFiles(u).then(function(f) {
          for (var v = new FormData(), y = 0; y < f.length; y++) v.append(u.fieldName, f[y], f[y].name);
          b.isObject(u.data) && Object.keys(u.data).forEach(function(_) {
            var S = u.data[_];
            v.append(_, S);
          });
          var w = u.beforeSend;
          return u.beforeSend = function() {
            return w(f);
          }, u.data = v, h(u);
        });
      }, selectFiles: function(u) {
        return delete (u = l(u)).beforeSend, b.selectFiles(u);
      } });
      e.exports = C;
    }, function(e, i, o) {
      o.r(i);
      var n = o(1);
      window.Promise = window.Promise || n.a;
    }, function(e, i, o) {
      (function(n) {
        var s = n !== void 0 && n || typeof self < "u" && self || window, a = Function.prototype.apply;
        function h(l, c) {
          this._id = l, this._clearFn = c;
        }
        i.setTimeout = function() {
          return new h(a.call(setTimeout, s, arguments), clearTimeout);
        }, i.setInterval = function() {
          return new h(a.call(setInterval, s, arguments), clearInterval);
        }, i.clearTimeout = i.clearInterval = function(l) {
          l && l.close();
        }, h.prototype.unref = h.prototype.ref = function() {
        }, h.prototype.close = function() {
          this._clearFn.call(s, this._id);
        }, i.enroll = function(l, c) {
          clearTimeout(l._idleTimeoutId), l._idleTimeout = c;
        }, i.unenroll = function(l) {
          clearTimeout(l._idleTimeoutId), l._idleTimeout = -1;
        }, i._unrefActive = i.active = function(l) {
          clearTimeout(l._idleTimeoutId);
          var c = l._idleTimeout;
          c >= 0 && (l._idleTimeoutId = setTimeout(function() {
            l._onTimeout && l._onTimeout();
          }, c));
        }, o(6), i.setImmediate = typeof self < "u" && self.setImmediate || n !== void 0 && n.setImmediate || this && this.setImmediate, i.clearImmediate = typeof self < "u" && self.clearImmediate || n !== void 0 && n.clearImmediate || this && this.clearImmediate;
      }).call(this, o(0));
    }, function(e, i, o) {
      (function(n, s) {
        (function(a, h) {
          if (!a.setImmediate) {
            var l, c, d, p, b, C = 1, u = {}, f = !1, v = a.document, y = Object.getPrototypeOf && Object.getPrototypeOf(a);
            y = y && y.setTimeout ? y : a, {}.toString.call(a.process) === "[object process]" ? l = function(S) {
              s.nextTick(function() {
                _(S);
              });
            } : function() {
              if (a.postMessage && !a.importScripts) {
                var S = !0, m = a.onmessage;
                return a.onmessage = function() {
                  S = !1;
                }, a.postMessage("", "*"), a.onmessage = m, S;
              }
            }() ? (p = "setImmediate$" + Math.random() + "$", b = function(S) {
              S.source === a && typeof S.data == "string" && S.data.indexOf(p) === 0 && _(+S.data.slice(p.length));
            }, a.addEventListener ? a.addEventListener("message", b, !1) : a.attachEvent("onmessage", b), l = function(S) {
              a.postMessage(p + S, "*");
            }) : a.MessageChannel ? ((d = new MessageChannel()).port1.onmessage = function(S) {
              _(S.data);
            }, l = function(S) {
              d.port2.postMessage(S);
            }) : v && "onreadystatechange" in v.createElement("script") ? (c = v.documentElement, l = function(S) {
              var m = v.createElement("script");
              m.onreadystatechange = function() {
                _(S), m.onreadystatechange = null, c.removeChild(m), m = null;
              }, c.appendChild(m);
            }) : l = function(S) {
              setTimeout(_, 0, S);
            }, y.setImmediate = function(S) {
              typeof S != "function" && (S = new Function("" + S));
              for (var m = new Array(arguments.length - 1), x = 0; x < m.length; x++) m[x] = arguments[x + 1];
              var I = { callback: S, args: m };
              return u[C] = I, l(C), C++;
            }, y.clearImmediate = w;
          }
          function w(S) {
            delete u[S];
          }
          function _(S) {
            if (f) setTimeout(_, 0, S);
            else {
              var m = u[S];
              if (m) {
                f = !0;
                try {
                  (function(x) {
                    var I = x.callback, E = x.args;
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
                        I.apply(h, E);
                    }
                  })(m);
                } finally {
                  w(S), f = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? n === void 0 ? this : n : self);
      }).call(this, o(0), o(7));
    }, function(e, i) {
      var o, n, s = e.exports = {};
      function a() {
        throw new Error("setTimeout has not been defined");
      }
      function h() {
        throw new Error("clearTimeout has not been defined");
      }
      function l(y) {
        if (o === setTimeout) return setTimeout(y, 0);
        if ((o === a || !o) && setTimeout) return o = setTimeout, setTimeout(y, 0);
        try {
          return o(y, 0);
        } catch {
          try {
            return o.call(null, y, 0);
          } catch {
            return o.call(this, y, 0);
          }
        }
      }
      (function() {
        try {
          o = typeof setTimeout == "function" ? setTimeout : a;
        } catch {
          o = a;
        }
        try {
          n = typeof clearTimeout == "function" ? clearTimeout : h;
        } catch {
          n = h;
        }
      })();
      var c, d = [], p = !1, b = -1;
      function C() {
        p && c && (p = !1, c.length ? d = c.concat(d) : b = -1, d.length && u());
      }
      function u() {
        if (!p) {
          var y = l(C);
          p = !0;
          for (var w = d.length; w; ) {
            for (c = d, d = []; ++b < w; ) c && c[b].run();
            b = -1, w = d.length;
          }
          c = null, p = !1, function(_) {
            if (n === clearTimeout) return clearTimeout(_);
            if ((n === h || !n) && clearTimeout) return n = clearTimeout, clearTimeout(_);
            try {
              n(_);
            } catch {
              try {
                return n.call(null, _);
              } catch {
                return n.call(this, _);
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
        if (arguments.length > 1) for (var _ = 1; _ < arguments.length; _++) w[_ - 1] = arguments[_];
        d.push(new f(y, w)), d.length !== 1 || p || l(u);
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
    }, function(e, i, o) {
      function n(a, h) {
        for (var l = 0; l < h.length; l++) {
          var c = h[l];
          c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
        }
      }
      var s = o(9);
      e.exports = function() {
        function a() {
          (function(d, p) {
            if (!(d instanceof p)) throw new TypeError("Cannot call a class as a function");
          })(this, a);
        }
        var h, l, c;
        return h = a, c = [{ key: "urlEncode", value: function(d) {
          return s(d);
        } }, { key: "jsonEncode", value: function(d) {
          return JSON.stringify(d);
        } }, { key: "formEncode", value: function(d) {
          if (this.isFormData(d)) return d;
          if (this.isFormElement(d)) return new FormData(d);
          if (this.isObject(d)) {
            var p = new FormData();
            return Object.keys(d).forEach(function(b) {
              var C = d[b];
              p.append(b, C);
            }), p;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(d) {
          return Object.prototype.toString.call(d) === "[object Object]";
        } }, { key: "isFormData", value: function(d) {
          return d instanceof FormData;
        } }, { key: "isFormElement", value: function(d) {
          return d instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(p, b) {
            var C = document.createElement("INPUT");
            C.type = "file", d.multiple && C.setAttribute("multiple", "multiple"), d.accept && C.setAttribute("accept", d.accept), C.style.display = "none", document.body.appendChild(C), C.addEventListener("change", function(u) {
              var f = u.target.files;
              p(f), document.body.removeChild(C);
            }, !1), C.click();
          });
        } }, { key: "parseHeaders", value: function(d) {
          var p = d.trim().split(/[\r\n]+/), b = {};
          return p.forEach(function(C) {
            var u = C.split(": "), f = u.shift(), v = u.join(": ");
            f && (b[f] = v);
          }), b;
        } }], (l = null) && n(h.prototype, l), c && n(h, c), a;
      }();
    }, function(e, i) {
      var o = function(s) {
        return encodeURIComponent(s).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, n = function(s, a, h, l) {
        return a = a || null, h = h || "&", l = l || null, s ? function(c) {
          for (var d = new Array(), p = 0; p < c.length; p++) c[p] && d.push(c[p]);
          return d;
        }(Object.keys(s).map(function(c) {
          var d, p, b = c;
          if (l && (b = l + "[" + b + "]"), typeof s[c] == "object" && s[c] !== null) d = n(s[c], null, h, b);
          else {
            a && (p = b, b = !isNaN(parseFloat(p)) && isFinite(p) ? a + Number(b) : b);
            var C = s[c];
            C = (C = (C = (C = C === !0 ? "1" : C) === !1 ? "0" : C) === 0 ? "0" : C) || "", d = o(b) + "=" + o(C);
          }
          return d;
        })).join(h).replace(/[!'()*]/g, "") : "";
      };
      e.exports = n;
    }]);
  });
})(we);
var ze = we.exports;
const ct = /* @__PURE__ */ je(ze);
function Pt(r) {
  return r !== void 0 && typeof r.then == "function";
}
class $e {
  constructor({ config: t, onUpload: e, onError: i }) {
    this.config = t, this.onUpload = e, this.onError = i;
  }
  /**
   * Upload file selected from device
   */
  uploadSelectedFile({ onPreview: t }) {
    var o;
    const e = (n) => {
      const s = new FileReader();
      s.readAsDataURL(n), s.onload = (a) => {
        t(a.target.result);
      }, s.onerror = () => {
        this.onError("Failed to read file");
      };
    };
    let i;
    if ((o = this.config.uploader) != null && o.uploadByFile)
      i = ct.selectFiles({ accept: this.config.types ?? "image/*" }).then((n) => {
        if (!n || n.length === 0)
          throw new Error("No file selected");
        e(n[0]);
        const s = this.config.uploader.uploadByFile(n[0]);
        return Pt(s) || console.warn("Custom uploader method uploadByFile should return a Promise"), s;
      });
    else {
      if (!this.config.endpoints.byFile) {
        this.onError("Upload endpoint (byFile) is not configured");
        return;
      }
      i = ct.transport({
        url: this.config.endpoints.byFile,
        data: this.config.additionalRequestData,
        accept: this.config.types ?? "image/*",
        headers: this.config.additionalRequestHeaders,
        beforeSend: (n) => {
          n && n.length > 0 && e(n[0]);
        },
        fieldName: this.config.field ?? "image"
      }).then((n) => n.body);
    }
    i.then((n) => this.onUpload(n)).catch((n) => this.onError(n));
  }
  /**
   * Upload image by URL
   */
  uploadByUrl(t) {
    var i;
    let e;
    if ((i = this.config.uploader) != null && i.uploadByUrl)
      e = this.config.uploader.uploadByUrl(t), Pt(e) || console.warn("Custom uploader method uploadByUrl should return a Promise");
    else {
      if (!this.config.endpoints.byUrl) {
        this.onError("Upload endpoint (byUrl) is not configured");
        return;
      }
      e = ct.post({
        url: this.config.endpoints.byUrl,
        data: {
          url: t,
          ...this.config.additionalRequestData
        },
        type: ct.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((o) => o.body);
    }
    e.then((o) => this.onUpload(o)).catch((o) => this.onError(o));
  }
  /**
   * Upload file from drag-n-drop or paste
   */
  uploadByFile(t, { onPreview: e }) {
    const i = new FileReader();
    i.onload = (o) => {
      var s;
      e(o.target.result);
      let n;
      if ((s = this.config.uploader) != null && s.uploadByFile)
        n = this.config.uploader.uploadByFile(t), Pt(n) || console.warn("Custom uploader method uploadByFile should return a Promise");
      else {
        if (!this.config.endpoints.byFile) {
          this.onError("Upload endpoint (byFile) is not configured");
          return;
        }
        const a = new FormData();
        a.append(this.config.field ?? "image", t), this.config.additionalRequestData && Object.entries(this.config.additionalRequestData).forEach(([h, l]) => {
          a.append(h, l);
        }), n = ct.post({
          url: this.config.endpoints.byFile,
          data: a,
          type: ct.contentType.JSON,
          headers: this.config.additionalRequestHeaders
        }).then((h) => h.body);
      }
      n.then((a) => this.onUpload(a)).catch((a) => this.onError(a));
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
function ne(r, t) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    t && (i = i.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), e.push.apply(e, i);
  }
  return e;
}
function Se(r) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ne(Object(e), !0).forEach(function(i) {
      Ye(r, i, e[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : ne(Object(e)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(e, i));
    });
  }
  return r;
}
function We(r, t) {
  if (typeof r != "object" || !r) return r;
  var e = r[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(r, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
function _e(r) {
  var t = We(r, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ut(r) {
  "@babel/helpers - typeof";
  return Ut = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ut(r);
}
function qe(r, t) {
  if (!(r instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function oe(r, t) {
  for (var e = 0; e < t.length; e++) {
    var i = t[e];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, _e(i.key), i);
  }
}
function Xe(r, t, e) {
  return t && oe(r.prototype, t), e && oe(r, e), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function Ye(r, t, e) {
  return t = _e(t), t in r ? Object.defineProperty(r, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[t] = e, r;
}
function xe(r) {
  return Ve(r) || Je(r) || Ze(r) || Ke();
}
function Ve(r) {
  if (Array.isArray(r)) return Ht(r);
}
function Je(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function Ze(r, t) {
  if (r) {
    if (typeof r == "string") return Ht(r, t);
    var e = Object.prototype.toString.call(r).slice(8, -1);
    if (e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set") return Array.from(r);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Ht(r, t);
  }
}
function Ht(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var e = 0, i = new Array(t); e < t; e++) i[e] = r[e];
  return i;
}
function Ke() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var kt = typeof window < "u" && typeof window.document < "u", X = kt ? window : {}, Vt = kt && X.document.documentElement ? "ontouchstart" in X.document.documentElement : !1, Jt = kt ? "PointerEvent" in X : !1, R = "cropper", Zt = "all", Ie = "crop", Ae = "move", Ee = "zoom", st = "e", at = "w", dt = "s", Z = "n", gt = "ne", vt = "nw", yt = "se", Ct = "sw", Ft = "".concat(R, "-crop"), se = "".concat(R, "-disabled"), B = "".concat(R, "-hidden"), ae = "".concat(R, "-hide"), Qe = "".concat(R, "-invisible"), Dt = "".concat(R, "-modal"), jt = "".concat(R, "-move"), wt = "".concat(R, "Action"), At = "".concat(R, "Preview"), Kt = "crop", Re = "move", De = "none", zt = "crop", $t = "cropend", Wt = "cropmove", qt = "cropstart", re = "dblclick", ti = Vt ? "touchstart" : "mousedown", ei = Vt ? "touchmove" : "mousemove", ii = Vt ? "touchend touchcancel" : "mouseup", le = Jt ? "pointerdown" : ti, he = Jt ? "pointermove" : ei, ce = Jt ? "pointerup pointercancel" : ii, de = "ready", ue = "resize", pe = "wheel", Xt = "zoom", fe = "image/jpeg", ni = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, oi = /^data:/, si = /^data:image\/jpeg;base64,/, ai = /^img|canvas$/i, ke = 200, Me = 100, me = {
  // Define the view mode of the cropper
  viewMode: 0,
  // 0, 1, 2, 3
  // Define the dragging mode of the cropper
  dragMode: Kt,
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
  minContainerWidth: ke,
  minContainerHeight: Me,
  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
}, ri = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', li = Number.isNaN || X.isNaN;
function A(r) {
  return typeof r == "number" && !li(r);
}
var ge = function(t) {
  return t > 0 && t < 1 / 0;
};
function Lt(r) {
  return typeof r > "u";
}
function rt(r) {
  return Ut(r) === "object" && r !== null;
}
var hi = Object.prototype.hasOwnProperty;
function ut(r) {
  if (!rt(r))
    return !1;
  try {
    var t = r.constructor, e = t.prototype;
    return t && e && hi.call(e, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function L(r) {
  return typeof r == "function";
}
var ci = Array.prototype.slice;
function Te(r) {
  return Array.from ? Array.from(r) : ci.call(r);
}
function M(r, t) {
  return r && L(t) && (Array.isArray(r) || A(r.length) ? Te(r).forEach(function(e, i) {
    t.call(r, e, i, r);
  }) : rt(r) && Object.keys(r).forEach(function(e) {
    t.call(r, r[e], e, r);
  })), r;
}
var D = Object.assign || function(t) {
  for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++)
    i[o - 1] = arguments[o];
  return rt(t) && i.length > 0 && i.forEach(function(n) {
    rt(n) && Object.keys(n).forEach(function(s) {
      t[s] = n[s];
    });
  }), t;
}, di = /\.\d*(?:0|9){12}\d*$/;
function ft(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return di.test(r) ? Math.round(r * t) / t : r;
}
var ui = /^width|height|left|top|marginLeft|marginTop$/;
function Q(r, t) {
  var e = r.style;
  M(t, function(i, o) {
    ui.test(o) && A(i) && (i = "".concat(i, "px")), e[o] = i;
  });
}
function pi(r, t) {
  return r.classList ? r.classList.contains(t) : r.className.indexOf(t) > -1;
}
function T(r, t) {
  if (t) {
    if (A(r.length)) {
      M(r, function(i) {
        T(i, t);
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
      M(r, function(e) {
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
function pt(r, t, e) {
  if (t) {
    if (A(r.length)) {
      M(r, function(i) {
        pt(i, t, e);
      });
      return;
    }
    e ? T(r, t) : q(r, t);
  }
}
var fi = /([a-z\d])([A-Z])/g;
function Qt(r) {
  return r.replace(fi, "$1-$2").toLowerCase();
}
function Yt(r, t) {
  return rt(r[t]) ? r[t] : r.dataset ? r.dataset[t] : r.getAttribute("data-".concat(Qt(t)));
}
function St(r, t, e) {
  rt(e) ? r[t] = e : r.dataset ? r.dataset[t] = e : r.setAttribute("data-".concat(Qt(t)), e);
}
function mi(r, t) {
  if (rt(r[t]))
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
    r.removeAttribute("data-".concat(Qt(t)));
}
var Oe = /\s\s*/, Pe = function() {
  var r = !1;
  if (kt) {
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
      set: function(n) {
        t = n;
      }
    });
    X.addEventListener("test", e, i), X.removeEventListener("test", e, i);
  }
  return r;
}();
function F(r, t, e) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = e;
  t.trim().split(Oe).forEach(function(n) {
    if (!Pe) {
      var s = r.listeners;
      s && s[n] && s[n][e] && (o = s[n][e], delete s[n][e], Object.keys(s[n]).length === 0 && delete s[n], Object.keys(s).length === 0 && delete r.listeners);
    }
    r.removeEventListener(n, o, i);
  });
}
function U(r, t, e) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = e;
  t.trim().split(Oe).forEach(function(n) {
    if (i.once && !Pe) {
      var s = r.listeners, a = s === void 0 ? {} : s;
      o = function() {
        delete a[n][e], r.removeEventListener(n, o, i);
        for (var l = arguments.length, c = new Array(l), d = 0; d < l; d++)
          c[d] = arguments[d];
        e.apply(r, c);
      }, a[n] || (a[n] = {}), a[n][e] && r.removeEventListener(n, a[n][e], i), a[n][e] = o, r.listeners = a;
    }
    r.addEventListener(n, o, i);
  });
}
function mt(r, t, e) {
  var i;
  return L(Event) && L(CustomEvent) ? i = new CustomEvent(t, {
    detail: e,
    bubbles: !0,
    cancelable: !0
  }) : (i = document.createEvent("CustomEvent"), i.initCustomEvent(t, !0, !0, e)), r.dispatchEvent(i);
}
function Le(r) {
  var t = r.getBoundingClientRect();
  return {
    left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: t.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var Bt = X.location, gi = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function ve(r) {
  var t = r.match(gi);
  return t !== null && (t[1] !== Bt.protocol || t[2] !== Bt.hostname || t[3] !== Bt.port);
}
function ye(r) {
  var t = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return r + (r.indexOf("?") === -1 ? "?" : "&") + t;
}
function bt(r) {
  var t = r.rotate, e = r.scaleX, i = r.scaleY, o = r.translateX, n = r.translateY, s = [];
  A(o) && o !== 0 && s.push("translateX(".concat(o, "px)")), A(n) && n !== 0 && s.push("translateY(".concat(n, "px)")), A(t) && t !== 0 && s.push("rotate(".concat(t, "deg)")), A(e) && e !== 1 && s.push("scaleX(".concat(e, ")")), A(i) && i !== 1 && s.push("scaleY(".concat(i, ")"));
  var a = s.length ? s.join(" ") : "none";
  return {
    WebkitTransform: a,
    msTransform: a,
    transform: a
  };
}
function vi(r) {
  var t = Se({}, r), e = 0;
  return M(r, function(i, o) {
    delete t[o], M(t, function(n) {
      var s = Math.abs(i.startX - n.startX), a = Math.abs(i.startY - n.startY), h = Math.abs(i.endX - n.endX), l = Math.abs(i.endY - n.endY), c = Math.sqrt(s * s + a * a), d = Math.sqrt(h * h + l * l), p = (d - c) / c;
      Math.abs(p) > Math.abs(e) && (e = p);
    });
  }), e;
}
function Et(r, t) {
  var e = r.pageX, i = r.pageY, o = {
    endX: e,
    endY: i
  };
  return t ? o : Se({
    startX: e,
    startY: i
  }, o);
}
function yi(r) {
  var t = 0, e = 0, i = 0;
  return M(r, function(o) {
    var n = o.startX, s = o.startY;
    t += n, e += s, i += 1;
  }), t /= i, e /= i, {
    pageX: t,
    pageY: e
  };
}
function tt(r) {
  var t = r.aspectRatio, e = r.height, i = r.width, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", n = ge(i), s = ge(e);
  if (n && s) {
    var a = e * t;
    o === "contain" && a > i || o === "cover" && a < i ? e = i / t : i = e * t;
  } else n ? e = i / t : s && (i = e * t);
  return {
    width: i,
    height: e
  };
}
function Ci(r) {
  var t = r.width, e = r.height, i = r.degree;
  if (i = Math.abs(i) % 180, i === 90)
    return {
      width: e,
      height: t
    };
  var o = i % 90 * Math.PI / 180, n = Math.sin(o), s = Math.cos(o), a = t * s + e * n, h = t * n + e * s;
  return i > 90 ? {
    width: h,
    height: a
  } : {
    width: a,
    height: h
  };
}
function bi(r, t, e, i) {
  var o = t.aspectRatio, n = t.naturalWidth, s = t.naturalHeight, a = t.rotate, h = a === void 0 ? 0 : a, l = t.scaleX, c = l === void 0 ? 1 : l, d = t.scaleY, p = d === void 0 ? 1 : d, b = e.aspectRatio, C = e.naturalWidth, u = e.naturalHeight, f = i.fillColor, v = f === void 0 ? "transparent" : f, y = i.imageSmoothingEnabled, w = y === void 0 ? !0 : y, _ = i.imageSmoothingQuality, S = _ === void 0 ? "low" : _, m = i.maxWidth, x = m === void 0 ? 1 / 0 : m, I = i.maxHeight, E = I === void 0 ? 1 / 0 : I, O = i.minWidth, z = O === void 0 ? 0 : O, N = i.minHeight, H = N === void 0 ? 0 : N, P = document.createElement("canvas"), k = P.getContext("2d"), G = tt({
    aspectRatio: b,
    width: x,
    height: E
  }), Y = tt({
    aspectRatio: b,
    width: z,
    height: H
  }, "cover"), et = Math.min(G.width, Math.max(Y.width, C)), V = Math.min(G.height, Math.max(Y.height, u)), lt = tt({
    aspectRatio: o,
    width: x,
    height: E
  }), it = tt({
    aspectRatio: o,
    width: z,
    height: H
  }, "cover"), nt = Math.min(lt.width, Math.max(it.width, n)), ht = Math.min(lt.height, Math.max(it.height, s)), $ = [-nt / 2, -ht / 2, nt, ht];
  return P.width = ft(et), P.height = ft(V), k.fillStyle = v, k.fillRect(0, 0, et, V), k.save(), k.translate(et / 2, V / 2), k.rotate(h * Math.PI / 180), k.scale(c, p), k.imageSmoothingEnabled = w, k.imageSmoothingQuality = S, k.drawImage.apply(k, [r].concat(xe($.map(function(W) {
    return Math.floor(ft(W));
  })))), k.restore(), P;
}
var Be = String.fromCharCode;
function wi(r, t, e) {
  var i = "";
  e += t;
  for (var o = t; o < e; o += 1)
    i += Be(r.getUint8(o));
  return i;
}
var Si = /^data:.*,/;
function _i(r) {
  var t = r.replace(Si, ""), e = atob(t), i = new ArrayBuffer(e.length), o = new Uint8Array(i);
  return M(o, function(n, s) {
    o[s] = e.charCodeAt(s);
  }), i;
}
function xi(r, t) {
  for (var e = [], i = 8192, o = new Uint8Array(r); o.length > 0; )
    e.push(Be.apply(null, Te(o.subarray(0, i)))), o = o.subarray(i);
  return "data:".concat(t, ";base64,").concat(btoa(e.join("")));
}
function Ii(r) {
  var t = new DataView(r), e;
  try {
    var i, o, n;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var s = t.byteLength, a = 2; a + 1 < s; ) {
        if (t.getUint8(a) === 255 && t.getUint8(a + 1) === 225) {
          o = a;
          break;
        }
        a += 1;
      }
    if (o) {
      var h = o + 4, l = o + 10;
      if (wi(t, h, 4) === "Exif") {
        var c = t.getUint16(l);
        if (i = c === 18761, (i || c === 19789) && t.getUint16(l + 2, i) === 42) {
          var d = t.getUint32(l + 4, i);
          d >= 8 && (n = l + d);
        }
      }
    }
    if (n) {
      var p = t.getUint16(n, i), b, C;
      for (C = 0; C < p; C += 1)
        if (b = n + C * 12 + 2, t.getUint16(b, i) === 274) {
          b += 8, e = t.getUint16(b, i), t.setUint16(b, 1, i);
          break;
        }
    }
  } catch {
    e = 1;
  }
  return e;
}
function Ai(r) {
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
var Ei = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var t = this.element, e = this.options, i = this.container, o = this.cropper, n = Number(e.minContainerWidth), s = Number(e.minContainerHeight);
    T(o, B), q(t, B);
    var a = {
      width: Math.max(i.offsetWidth, n >= 0 ? n : ke),
      height: Math.max(i.offsetHeight, s >= 0 ? s : Me)
    };
    this.containerData = a, Q(o, {
      width: a.width,
      height: a.height
    }), T(t, B), q(o, B);
  },
  // Canvas (image wrapper)
  initCanvas: function() {
    var t = this.containerData, e = this.imageData, i = this.options.viewMode, o = Math.abs(e.rotate) % 180 === 90, n = o ? e.naturalHeight : e.naturalWidth, s = o ? e.naturalWidth : e.naturalHeight, a = n / s, h = t.width, l = t.height;
    t.height * a > t.width ? i === 3 ? h = t.height * a : l = t.width / a : i === 3 ? l = t.width / a : h = t.height * a;
    var c = {
      aspectRatio: a,
      naturalWidth: n,
      naturalHeight: s,
      width: h,
      height: l
    };
    this.canvasData = c, this.limited = i === 1 || i === 2, this.limitCanvas(!0, !0), c.width = Math.min(Math.max(c.width, c.minWidth), c.maxWidth), c.height = Math.min(Math.max(c.height, c.minHeight), c.maxHeight), c.left = (t.width - c.width) / 2, c.top = (t.height - c.height) / 2, c.oldLeft = c.left, c.oldTop = c.top, this.initialCanvasData = D({}, c);
  },
  limitCanvas: function(t, e) {
    var i = this.options, o = this.containerData, n = this.canvasData, s = this.cropBoxData, a = i.viewMode, h = n.aspectRatio, l = this.cropped && s;
    if (t) {
      var c = Number(i.minCanvasWidth) || 0, d = Number(i.minCanvasHeight) || 0;
      a > 1 ? (c = Math.max(c, o.width), d = Math.max(d, o.height), a === 3 && (d * h > c ? c = d * h : d = c / h)) : a > 0 && (c ? c = Math.max(c, l ? s.width : 0) : d ? d = Math.max(d, l ? s.height : 0) : l && (c = s.width, d = s.height, d * h > c ? c = d * h : d = c / h));
      var p = tt({
        aspectRatio: h,
        width: c,
        height: d
      });
      c = p.width, d = p.height, n.minWidth = c, n.minHeight = d, n.maxWidth = 1 / 0, n.maxHeight = 1 / 0;
    }
    if (e)
      if (a > (l ? 0 : 1)) {
        var b = o.width - n.width, C = o.height - n.height;
        n.minLeft = Math.min(0, b), n.minTop = Math.min(0, C), n.maxLeft = Math.max(0, b), n.maxTop = Math.max(0, C), l && this.limited && (n.minLeft = Math.min(s.left, s.left + (s.width - n.width)), n.minTop = Math.min(s.top, s.top + (s.height - n.height)), n.maxLeft = s.left, n.maxTop = s.top, a === 2 && (n.width >= o.width && (n.minLeft = Math.min(0, b), n.maxLeft = Math.max(0, b)), n.height >= o.height && (n.minTop = Math.min(0, C), n.maxTop = Math.max(0, C))));
      } else
        n.minLeft = -n.width, n.minTop = -n.height, n.maxLeft = o.width, n.maxTop = o.height;
  },
  renderCanvas: function(t, e) {
    var i = this.canvasData, o = this.imageData;
    if (e) {
      var n = Ci({
        width: o.naturalWidth * Math.abs(o.scaleX || 1),
        height: o.naturalHeight * Math.abs(o.scaleY || 1),
        degree: o.rotate || 0
      }), s = n.width, a = n.height, h = i.width * (s / i.naturalWidth), l = i.height * (a / i.naturalHeight);
      i.left -= (h - i.width) / 2, i.top -= (l - i.height) / 2, i.width = h, i.height = l, i.aspectRatio = s / a, i.naturalWidth = s, i.naturalHeight = a, this.limitCanvas(!0, !1);
    }
    (i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCanvas(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, Q(this.canvas, D({
      width: i.width,
      height: i.height
    }, bt({
      translateX: i.left,
      translateY: i.top
    }))), this.renderImage(t), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(t) {
    var e = this.canvasData, i = this.imageData, o = i.naturalWidth * (e.width / e.naturalWidth), n = i.naturalHeight * (e.height / e.naturalHeight);
    D(i, {
      width: o,
      height: n,
      left: (e.width - o) / 2,
      top: (e.height - n) / 2
    }), Q(this.image, D({
      width: i.width,
      height: i.height
    }, bt(D({
      translateX: i.left,
      translateY: i.top
    }, i)))), t && this.output();
  },
  initCropBox: function() {
    var t = this.options, e = this.canvasData, i = t.aspectRatio || t.initialAspectRatio, o = Number(t.autoCropArea) || 0.8, n = {
      width: e.width,
      height: e.height
    };
    i && (e.height * i > e.width ? n.height = n.width / i : n.width = n.height * i), this.cropBoxData = n, this.limitCropBox(!0, !0), n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth), n.height = Math.min(Math.max(n.height, n.minHeight), n.maxHeight), n.width = Math.max(n.minWidth, n.width * o), n.height = Math.max(n.minHeight, n.height * o), n.left = e.left + (e.width - n.width) / 2, n.top = e.top + (e.height - n.height) / 2, n.oldLeft = n.left, n.oldTop = n.top, this.initialCropBoxData = D({}, n);
  },
  limitCropBox: function(t, e) {
    var i = this.options, o = this.containerData, n = this.canvasData, s = this.cropBoxData, a = this.limited, h = i.aspectRatio;
    if (t) {
      var l = Number(i.minCropBoxWidth) || 0, c = Number(i.minCropBoxHeight) || 0, d = a ? Math.min(o.width, n.width, n.width + n.left, o.width - n.left) : o.width, p = a ? Math.min(o.height, n.height, n.height + n.top, o.height - n.top) : o.height;
      l = Math.min(l, o.width), c = Math.min(c, o.height), h && (l && c ? c * h > l ? c = l / h : l = c * h : l ? c = l / h : c && (l = c * h), p * h > d ? p = d / h : d = p * h), s.minWidth = Math.min(l, d), s.minHeight = Math.min(c, p), s.maxWidth = d, s.maxHeight = p;
    }
    e && (a ? (s.minLeft = Math.max(0, n.left), s.minTop = Math.max(0, n.top), s.maxLeft = Math.min(o.width, n.left + n.width) - s.width, s.maxTop = Math.min(o.height, n.top + n.height) - s.height) : (s.minLeft = 0, s.minTop = 0, s.maxLeft = o.width - s.width, s.maxTop = o.height - s.height));
  },
  renderCropBox: function() {
    var t = this.options, e = this.containerData, i = this.cropBoxData;
    (i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCropBox(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, t.movable && t.cropBoxMovable && St(this.face, wt, i.width >= e.width && i.height >= e.height ? Ae : Zt), Q(this.cropBox, D({
      width: i.width,
      height: i.height
    }, bt({
      translateX: i.left,
      translateY: i.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), mt(this.element, zt, this.getData());
  }
}, Ri = {
  initPreview: function() {
    var t = this.element, e = this.crossOrigin, i = this.options.preview, o = e ? this.crossOriginUrl : this.url, n = t.alt || "The image to preview", s = document.createElement("img");
    if (e && (s.crossOrigin = e), s.src = o, s.alt = n, this.viewBox.appendChild(s), this.viewBoxImage = s, !!i) {
      var a = i;
      typeof i == "string" ? a = t.ownerDocument.querySelectorAll(i) : i.querySelector && (a = [i]), this.previews = a, M(a, function(h) {
        var l = document.createElement("img");
        St(h, At, {
          width: h.offsetWidth,
          height: h.offsetHeight,
          html: h.innerHTML
        }), e && (l.crossOrigin = e), l.src = o, l.alt = n, l.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', h.innerHTML = "", h.appendChild(l);
      });
    }
  },
  resetPreview: function() {
    M(this.previews, function(t) {
      var e = Yt(t, At);
      Q(t, {
        width: e.width,
        height: e.height
      }), t.innerHTML = e.html, mi(t, At);
    });
  },
  preview: function() {
    var t = this.imageData, e = this.canvasData, i = this.cropBoxData, o = i.width, n = i.height, s = t.width, a = t.height, h = i.left - e.left - t.left, l = i.top - e.top - t.top;
    !this.cropped || this.disabled || (Q(this.viewBoxImage, D({
      width: s,
      height: a
    }, bt(D({
      translateX: -h,
      translateY: -l
    }, t)))), M(this.previews, function(c) {
      var d = Yt(c, At), p = d.width, b = d.height, C = p, u = b, f = 1;
      o && (f = p / o, u = n * f), n && u > b && (f = b / n, C = o * f, u = b), Q(c, {
        width: C,
        height: u
      }), Q(c.getElementsByTagName("img")[0], D({
        width: s * f,
        height: a * f
      }, bt(D({
        translateX: -h * f,
        translateY: -l * f
      }, t))));
    }));
  }
}, Di = {
  bind: function() {
    var t = this.element, e = this.options, i = this.cropper;
    L(e.cropstart) && U(t, qt, e.cropstart), L(e.cropmove) && U(t, Wt, e.cropmove), L(e.cropend) && U(t, $t, e.cropend), L(e.crop) && U(t, zt, e.crop), L(e.zoom) && U(t, Xt, e.zoom), U(i, le, this.onCropStart = this.cropStart.bind(this)), e.zoomable && e.zoomOnWheel && U(i, pe, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), e.toggleDragModeOnDblclick && U(i, re, this.onDblclick = this.dblclick.bind(this)), U(t.ownerDocument, he, this.onCropMove = this.cropMove.bind(this)), U(t.ownerDocument, ce, this.onCropEnd = this.cropEnd.bind(this)), e.responsive && U(window, ue, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var t = this.element, e = this.options, i = this.cropper;
    L(e.cropstart) && F(t, qt, e.cropstart), L(e.cropmove) && F(t, Wt, e.cropmove), L(e.cropend) && F(t, $t, e.cropend), L(e.crop) && F(t, zt, e.crop), L(e.zoom) && F(t, Xt, e.zoom), F(i, le, this.onCropStart), e.zoomable && e.zoomOnWheel && F(i, pe, this.onWheel, {
      passive: !1,
      capture: !0
    }), e.toggleDragModeOnDblclick && F(i, re, this.onDblclick), F(t.ownerDocument, he, this.onCropMove), F(t.ownerDocument, ce, this.onCropEnd), e.responsive && F(window, ue, this.onResize);
  }
}, ki = {
  resize: function() {
    if (!this.disabled) {
      var t = this.options, e = this.container, i = this.containerData, o = e.offsetWidth / i.width, n = e.offsetHeight / i.height, s = Math.abs(o - 1) > Math.abs(n - 1) ? o : n;
      if (s !== 1) {
        var a, h;
        t.restore && (a = this.getCanvasData(), h = this.getCropBoxData()), this.render(), t.restore && (this.setCanvasData(M(a, function(l, c) {
          a[c] = l * s;
        })), this.setCropBoxData(M(h, function(l, c) {
          h[c] = l * s;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === De || this.setDragMode(pi(this.dragBox, Ft) ? Re : Kt);
  },
  wheel: function(t) {
    var e = this, i = Number(this.options.wheelZoomRatio) || 0.1, o = 1;
    this.disabled || (t.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      e.wheeling = !1;
    }, 50), t.deltaY ? o = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? o = -t.wheelDelta / 120 : t.detail && (o = t.detail > 0 ? 1 : -1), this.zoom(-o * i, t)));
  },
  cropStart: function(t) {
    var e = t.buttons, i = t.button;
    if (!(this.disabled || (t.type === "mousedown" || t.type === "pointerdown" && t.pointerType === "mouse") && // No primary button (Usually the left button)
    (A(e) && e !== 1 || A(i) && i !== 0 || t.ctrlKey))) {
      var o = this.options, n = this.pointers, s;
      t.changedTouches ? M(t.changedTouches, function(a) {
        n[a.identifier] = Et(a);
      }) : n[t.pointerId || 0] = Et(t), Object.keys(n).length > 1 && o.zoomable && o.zoomOnTouch ? s = Ee : s = Yt(t.target, wt), ni.test(s) && mt(this.element, qt, {
        originalEvent: t,
        action: s
      }) !== !1 && (t.preventDefault(), this.action = s, this.cropping = !1, s === Ie && (this.cropping = !0, T(this.dragBox, Dt)));
    }
  },
  cropMove: function(t) {
    var e = this.action;
    if (!(this.disabled || !e)) {
      var i = this.pointers;
      t.preventDefault(), mt(this.element, Wt, {
        originalEvent: t,
        action: e
      }) !== !1 && (t.changedTouches ? M(t.changedTouches, function(o) {
        D(i[o.identifier] || {}, Et(o, !0));
      }) : D(i[t.pointerId || 0] || {}, Et(t, !0)), this.change(t));
    }
  },
  cropEnd: function(t) {
    if (!this.disabled) {
      var e = this.action, i = this.pointers;
      t.changedTouches ? M(t.changedTouches, function(o) {
        delete i[o.identifier];
      }) : delete i[t.pointerId || 0], e && (t.preventDefault(), Object.keys(i).length || (this.action = ""), this.cropping && (this.cropping = !1, pt(this.dragBox, Dt, this.cropped && this.options.modal)), mt(this.element, $t, {
        originalEvent: t,
        action: e
      }));
    }
  }
}, Mi = {
  change: function(t) {
    var e = this.options, i = this.canvasData, o = this.containerData, n = this.cropBoxData, s = this.pointers, a = this.action, h = e.aspectRatio, l = n.left, c = n.top, d = n.width, p = n.height, b = l + d, C = c + p, u = 0, f = 0, v = o.width, y = o.height, w = !0, _;
    !h && t.shiftKey && (h = d && p ? d / p : 1), this.limited && (u = n.minLeft, f = n.minTop, v = u + Math.min(o.width, i.width, i.left + i.width), y = f + Math.min(o.height, i.height, i.top + i.height));
    var S = s[Object.keys(s)[0]], m = {
      x: S.endX - S.startX,
      y: S.endY - S.startY
    }, x = function(E) {
      switch (E) {
        case st:
          b + m.x > v && (m.x = v - b);
          break;
        case at:
          l + m.x < u && (m.x = u - l);
          break;
        case Z:
          c + m.y < f && (m.y = f - c);
          break;
        case dt:
          C + m.y > y && (m.y = y - C);
          break;
      }
    };
    switch (a) {
      case Zt:
        l += m.x, c += m.y;
        break;
      case st:
        if (m.x >= 0 && (b >= v || h && (c <= f || C >= y))) {
          w = !1;
          break;
        }
        x(st), d += m.x, d < 0 && (a = at, d = -d, l -= d), h && (p = d / h, c += (n.height - p) / 2);
        break;
      case Z:
        if (m.y <= 0 && (c <= f || h && (l <= u || b >= v))) {
          w = !1;
          break;
        }
        x(Z), p -= m.y, c += m.y, p < 0 && (a = dt, p = -p, c -= p), h && (d = p * h, l += (n.width - d) / 2);
        break;
      case at:
        if (m.x <= 0 && (l <= u || h && (c <= f || C >= y))) {
          w = !1;
          break;
        }
        x(at), d -= m.x, l += m.x, d < 0 && (a = st, d = -d, l -= d), h && (p = d / h, c += (n.height - p) / 2);
        break;
      case dt:
        if (m.y >= 0 && (C >= y || h && (l <= u || b >= v))) {
          w = !1;
          break;
        }
        x(dt), p += m.y, p < 0 && (a = Z, p = -p, c -= p), h && (d = p * h, l += (n.width - d) / 2);
        break;
      case gt:
        if (h) {
          if (m.y <= 0 && (c <= f || b >= v)) {
            w = !1;
            break;
          }
          x(Z), p -= m.y, c += m.y, d = p * h;
        } else
          x(Z), x(st), m.x >= 0 ? b < v ? d += m.x : m.y <= 0 && c <= f && (w = !1) : d += m.x, m.y <= 0 ? c > f && (p -= m.y, c += m.y) : (p -= m.y, c += m.y);
        d < 0 && p < 0 ? (a = Ct, p = -p, d = -d, c -= p, l -= d) : d < 0 ? (a = vt, d = -d, l -= d) : p < 0 && (a = yt, p = -p, c -= p);
        break;
      case vt:
        if (h) {
          if (m.y <= 0 && (c <= f || l <= u)) {
            w = !1;
            break;
          }
          x(Z), p -= m.y, c += m.y, d = p * h, l += n.width - d;
        } else
          x(Z), x(at), m.x <= 0 ? l > u ? (d -= m.x, l += m.x) : m.y <= 0 && c <= f && (w = !1) : (d -= m.x, l += m.x), m.y <= 0 ? c > f && (p -= m.y, c += m.y) : (p -= m.y, c += m.y);
        d < 0 && p < 0 ? (a = yt, p = -p, d = -d, c -= p, l -= d) : d < 0 ? (a = gt, d = -d, l -= d) : p < 0 && (a = Ct, p = -p, c -= p);
        break;
      case Ct:
        if (h) {
          if (m.x <= 0 && (l <= u || C >= y)) {
            w = !1;
            break;
          }
          x(at), d -= m.x, l += m.x, p = d / h;
        } else
          x(dt), x(at), m.x <= 0 ? l > u ? (d -= m.x, l += m.x) : m.y >= 0 && C >= y && (w = !1) : (d -= m.x, l += m.x), m.y >= 0 ? C < y && (p += m.y) : p += m.y;
        d < 0 && p < 0 ? (a = gt, p = -p, d = -d, c -= p, l -= d) : d < 0 ? (a = yt, d = -d, l -= d) : p < 0 && (a = vt, p = -p, c -= p);
        break;
      case yt:
        if (h) {
          if (m.x >= 0 && (b >= v || C >= y)) {
            w = !1;
            break;
          }
          x(st), d += m.x, p = d / h;
        } else
          x(dt), x(st), m.x >= 0 ? b < v ? d += m.x : m.y >= 0 && C >= y && (w = !1) : d += m.x, m.y >= 0 ? C < y && (p += m.y) : p += m.y;
        d < 0 && p < 0 ? (a = vt, p = -p, d = -d, c -= p, l -= d) : d < 0 ? (a = Ct, d = -d, l -= d) : p < 0 && (a = gt, p = -p, c -= p);
        break;
      case Ae:
        this.move(m.x, m.y), w = !1;
        break;
      case Ee:
        this.zoom(vi(s), t), w = !1;
        break;
      case Ie:
        if (!m.x || !m.y) {
          w = !1;
          break;
        }
        _ = Le(this.cropper), l = S.startX - _.left, c = S.startY - _.top, d = n.minWidth, p = n.minHeight, m.x > 0 ? a = m.y > 0 ? yt : gt : m.x < 0 && (l -= d, a = m.y > 0 ? Ct : vt), m.y < 0 && (c -= p), this.cropped || (q(this.cropBox, B), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    w && (n.width = d, n.height = p, n.left = l, n.top = c, this.action = a, this.renderCropBox()), M(s, function(I) {
      I.startX = I.endX, I.startY = I.endY;
    });
  }
}, Ti = {
  // Show the crop box manually
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && T(this.dragBox, Dt), q(this.cropBox, B), this.setCropBoxData(this.initialCropBoxData)), this;
  },
  // Reset the image and crop box to their initial states
  reset: function() {
    return this.ready && !this.disabled && (this.imageData = D({}, this.initialImageData), this.canvasData = D({}, this.initialCanvasData), this.cropBoxData = D({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this;
  },
  // Clear the crop box
  clear: function() {
    return this.cropped && !this.disabled && (D(this.cropBoxData, {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), q(this.dragBox, Dt), T(this.cropBox, B)), this;
  },
  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && t && (this.isImg && (this.element.src = t), e ? (this.url = t, this.image.src = t, this.ready && (this.viewBoxImage.src = t, M(this.previews, function(i) {
      i.getElementsByTagName("img")[0].src = t;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(t))), this;
  },
  // Enable (unfreeze) the cropper
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, q(this.cropper, se)), this;
  },
  // Disable (freeze) the cropper
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, T(this.cropper, se)), this;
  },
  /**
   * Destroy the cropper and remove the instance from the image
   * @returns {Cropper} this
   */
  destroy: function() {
    var t = this.element;
    return t[R] ? (t[R] = void 0, this.isImg && this.replaced && (t.src = this.originalUrl), this.uncreate(), this) : this;
  },
  /**
   * Move the canvas with relative offsets
   * @param {number} offsetX - The relative offset distance on the x-axis.
   * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
   * @returns {Cropper} this
   */
  move: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, i = this.canvasData, o = i.left, n = i.top;
    return this.moveTo(Lt(t) ? t : o + Number(t), Lt(e) ? e : n + Number(e));
  },
  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, i = this.canvasData, o = !1;
    return t = Number(t), e = Number(e), this.ready && !this.disabled && this.options.movable && (A(t) && (i.left = t, o = !0), A(e) && (i.top = e, o = !0), o && this.renderCanvas(!0)), this;
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
    var o = this.options, n = this.canvasData, s = n.width, a = n.height, h = n.naturalWidth, l = n.naturalHeight;
    if (t = Number(t), t >= 0 && this.ready && !this.disabled && o.zoomable) {
      var c = h * t, d = l * t;
      if (mt(this.element, Xt, {
        ratio: t,
        oldRatio: s / h,
        originalEvent: i
      }) === !1)
        return this;
      if (i) {
        var p = this.pointers, b = Le(this.cropper), C = p && Object.keys(p).length ? yi(p) : {
          pageX: i.pageX,
          pageY: i.pageY
        };
        n.left -= (c - s) * ((C.pageX - b.left - n.left) / s), n.top -= (d - a) * ((C.pageY - b.top - n.top) / a);
      } else ut(e) && A(e.x) && A(e.y) ? (n.left -= (c - s) * ((e.x - n.left) / s), n.top -= (d - a) * ((e.y - n.top) / a)) : (n.left -= (c - s) / 2, n.top -= (d - a) / 2);
      n.width = c, n.height = d, this.renderCanvas(!0);
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
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, i = this.imageData, o = !1;
    return t = Number(t), e = Number(e), this.ready && !this.disabled && this.options.scalable && (A(t) && (i.scaleX = t, o = !0), A(e) && (i.scaleY = e, o = !0), o && this.renderCanvas(!0, !0)), this;
  },
  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.options, i = this.imageData, o = this.canvasData, n = this.cropBoxData, s;
    if (this.ready && this.cropped) {
      s = {
        x: n.left - o.left,
        y: n.top - o.top,
        width: n.width,
        height: n.height
      };
      var a = i.width / i.naturalWidth;
      if (M(s, function(c, d) {
        s[d] = c / a;
      }), t) {
        var h = Math.round(s.y + s.height), l = Math.round(s.x + s.width);
        s.x = Math.round(s.x), s.y = Math.round(s.y), s.width = l - s.x, s.height = h - s.y;
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
    var e = this.options, i = this.imageData, o = this.canvasData, n = {};
    if (this.ready && !this.disabled && ut(t)) {
      var s = !1;
      e.rotatable && A(t.rotate) && t.rotate !== i.rotate && (i.rotate = t.rotate, s = !0), e.scalable && (A(t.scaleX) && t.scaleX !== i.scaleX && (i.scaleX = t.scaleX, s = !0), A(t.scaleY) && t.scaleY !== i.scaleY && (i.scaleY = t.scaleY, s = !0)), s && this.renderCanvas(!0, !0);
      var a = i.width / i.naturalWidth;
      A(t.x) && (n.left = t.x * a + o.left), A(t.y) && (n.top = t.y * a + o.top), A(t.width) && (n.width = t.width * a), A(t.height) && (n.height = t.height * a), this.setCropBoxData(n);
    }
    return this;
  },
  /**
   * Get the container size data.
   * @returns {Object} The result container data.
   */
  getContainerData: function() {
    return this.ready ? D({}, this.containerData) : {};
  },
  /**
   * Get the image position and size data.
   * @returns {Object} The result image data.
   */
  getImageData: function() {
    return this.sized ? D({}, this.imageData) : {};
  },
  /**
   * Get the canvas position and size data.
   * @returns {Object} The result canvas data.
   */
  getCanvasData: function() {
    var t = this.canvasData, e = {};
    return this.ready && M(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(i) {
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
    return this.ready && !this.disabled && ut(t) && (A(t.left) && (e.left = t.left), A(t.top) && (e.top = t.top), A(t.width) ? (e.width = t.width, e.height = t.width / i) : A(t.height) && (e.height = t.height, e.width = t.height * i), this.renderCanvas(!0)), this;
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
    var e = this.cropBoxData, i = this.options.aspectRatio, o, n;
    return this.ready && this.cropped && !this.disabled && ut(t) && (A(t.left) && (e.left = t.left), A(t.top) && (e.top = t.top), A(t.width) && t.width !== e.width && (o = !0, e.width = t.width), A(t.height) && t.height !== e.height && (n = !0, e.height = t.height), i && (o ? e.height = e.width / i : n && (e.width = e.height * i)), this.renderCropBox()), this;
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
    var e = this.canvasData, i = bi(this.image, this.imageData, e, t);
    if (!this.cropped)
      return i;
    var o = this.getData(t.rounded), n = o.x, s = o.y, a = o.width, h = o.height, l = i.width / Math.floor(e.naturalWidth);
    l !== 1 && (n *= l, s *= l, a *= l, h *= l);
    var c = a / h, d = tt({
      aspectRatio: c,
      width: t.maxWidth || 1 / 0,
      height: t.maxHeight || 1 / 0
    }), p = tt({
      aspectRatio: c,
      width: t.minWidth || 0,
      height: t.minHeight || 0
    }, "cover"), b = tt({
      aspectRatio: c,
      width: t.width || (l !== 1 ? i.width : a),
      height: t.height || (l !== 1 ? i.height : h)
    }), C = b.width, u = b.height;
    C = Math.min(d.width, Math.max(p.width, C)), u = Math.min(d.height, Math.max(p.height, u));
    var f = document.createElement("canvas"), v = f.getContext("2d");
    f.width = ft(C), f.height = ft(u), v.fillStyle = t.fillColor || "transparent", v.fillRect(0, 0, C, u);
    var y = t.imageSmoothingEnabled, w = y === void 0 ? !0 : y, _ = t.imageSmoothingQuality;
    v.imageSmoothingEnabled = w, _ && (v.imageSmoothingQuality = _);
    var S = i.width, m = i.height, x = n, I = s, E, O, z, N, H, P;
    x <= -a || x > S ? (x = 0, E = 0, z = 0, H = 0) : x <= 0 ? (z = -x, x = 0, E = Math.min(S, a + x), H = E) : x <= S && (z = 0, E = Math.min(a, S - x), H = E), E <= 0 || I <= -h || I > m ? (I = 0, O = 0, N = 0, P = 0) : I <= 0 ? (N = -I, I = 0, O = Math.min(m, h + I), P = O) : I <= m && (N = 0, O = Math.min(h, m - I), P = O);
    var k = [x, I, E, O];
    if (H > 0 && P > 0) {
      var G = C / a;
      k.push(z * G, N * G, H * G, P * G);
    }
    return v.drawImage.apply(v, [i].concat(xe(k.map(function(Y) {
      return Math.floor(ft(Y));
    })))), f;
  },
  /**
   * Change the aspect ratio of the crop box.
   * @param {number} aspectRatio - The new aspect ratio.
   * @returns {Cropper} this
   */
  setAspectRatio: function(t) {
    var e = this.options;
    return !this.disabled && !Lt(t) && (e.aspectRatio = Math.max(0, t) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  /**
   * Change the drag mode.
   * @param {string} mode - The new drag mode.
   * @returns {Cropper} this
   */
  setDragMode: function(t) {
    var e = this.options, i = this.dragBox, o = this.face;
    if (this.ready && !this.disabled) {
      var n = t === Kt, s = e.movable && t === Re;
      t = n || s ? t : De, e.dragMode = t, St(i, wt, t), pt(i, Ft, n), pt(i, jt, s), e.cropBoxMovable || (St(o, wt, t), pt(o, Ft, n), pt(o, jt, s));
    }
    return this;
  }
}, Oi = X.Cropper, Ne = /* @__PURE__ */ function() {
  function r(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (qe(this, r), !t || !ai.test(t.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = t, this.options = D({}, me, ut(e) && e), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return Xe(r, [{
    key: "init",
    value: function() {
      var e = this.element, i = e.tagName.toLowerCase(), o;
      if (!e[R]) {
        if (e[R] = this, i === "img") {
          if (this.isImg = !0, o = e.getAttribute("src") || "", this.originalUrl = o, !o)
            return;
          o = e.src;
        } else i === "canvas" && window.HTMLCanvasElement && (o = e.toDataURL());
        this.load(o);
      }
    }
  }, {
    key: "load",
    value: function(e) {
      var i = this;
      if (e) {
        this.url = e, this.imageData = {};
        var o = this.element, n = this.options;
        if (!n.rotatable && !n.scalable && (n.checkOrientation = !1), !n.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (oi.test(e)) {
          si.test(e) ? this.read(_i(e)) : this.clone();
          return;
        }
        var s = new XMLHttpRequest(), a = this.clone.bind(this);
        this.reloading = !0, this.xhr = s, s.onabort = a, s.onerror = a, s.ontimeout = a, s.onprogress = function() {
          s.getResponseHeader("content-type") !== fe && s.abort();
        }, s.onload = function() {
          i.read(s.response);
        }, s.onloadend = function() {
          i.reloading = !1, i.xhr = null;
        }, n.checkCrossOrigin && ve(e) && o.crossOrigin && (e = ye(e)), s.open("GET", e, !0), s.responseType = "arraybuffer", s.withCredentials = o.crossOrigin === "use-credentials", s.send();
      }
    }
  }, {
    key: "read",
    value: function(e) {
      var i = this.options, o = this.imageData, n = Ii(e), s = 0, a = 1, h = 1;
      if (n > 1) {
        this.url = xi(e, fe);
        var l = Ai(n);
        s = l.rotate, a = l.scaleX, h = l.scaleY;
      }
      i.rotatable && (o.rotate = s), i.scalable && (o.scaleX = a, o.scaleY = h), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var e = this.element, i = this.url, o = e.crossOrigin, n = i;
      this.options.checkCrossOrigin && ve(i) && (o || (o = "anonymous"), n = ye(i)), this.crossOrigin = o, this.crossOriginUrl = n;
      var s = document.createElement("img");
      o && (s.crossOrigin = o), s.src = n || i, s.alt = e.alt || "The image to crop", this.image = s, s.onload = this.start.bind(this), s.onerror = this.stop.bind(this), T(s, ae), e.parentNode.insertBefore(s, e.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var e = this, i = this.image;
      i.onload = null, i.onerror = null, this.sizing = !0;
      var o = X.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(X.navigator.userAgent), n = function(l, c) {
        D(e.imageData, {
          naturalWidth: l,
          naturalHeight: c,
          aspectRatio: l / c
        }), e.initialImageData = D({}, e.imageData), e.sizing = !1, e.sized = !0, e.build();
      };
      if (i.naturalWidth && !o) {
        n(i.naturalWidth, i.naturalHeight);
        return;
      }
      var s = document.createElement("img"), a = document.body || document.documentElement;
      this.sizingImage = s, s.onload = function() {
        n(s.width, s.height), o || a.removeChild(s);
      }, s.src = i.src, o || (s.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", a.appendChild(s));
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
        var e = this.element, i = this.options, o = this.image, n = e.parentNode, s = document.createElement("div");
        s.innerHTML = ri;
        var a = s.querySelector(".".concat(R, "-container")), h = a.querySelector(".".concat(R, "-canvas")), l = a.querySelector(".".concat(R, "-drag-box")), c = a.querySelector(".".concat(R, "-crop-box")), d = c.querySelector(".".concat(R, "-face"));
        this.container = n, this.cropper = a, this.canvas = h, this.dragBox = l, this.cropBox = c, this.viewBox = a.querySelector(".".concat(R, "-view-box")), this.face = d, h.appendChild(o), T(e, B), n.insertBefore(a, e.nextSibling), q(o, ae), this.initPreview(), this.bind(), i.initialAspectRatio = Math.max(0, i.initialAspectRatio) || NaN, i.aspectRatio = Math.max(0, i.aspectRatio) || NaN, i.viewMode = Math.max(0, Math.min(3, Math.round(i.viewMode))) || 0, T(c, B), i.guides || T(c.getElementsByClassName("".concat(R, "-dashed")), B), i.center || T(c.getElementsByClassName("".concat(R, "-center")), B), i.background && T(a, "".concat(R, "-bg")), i.highlight || T(d, Qe), i.cropBoxMovable && (T(d, jt), St(d, wt, Zt)), i.cropBoxResizable || (T(c.getElementsByClassName("".concat(R, "-line")), B), T(c.getElementsByClassName("".concat(R, "-point")), B)), this.render(), this.ready = !0, this.setDragMode(i.dragMode), i.autoCrop && this.crop(), this.setData(i.data), L(i.ready) && U(e, de, i.ready, {
          once: !0
        }), mt(e, de);
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
      return window.Cropper = Oi, r;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(e) {
      D(me, ut(e) && e);
    }
  }]);
}();
D(Ne.prototype, Ei, Ri, Di, ki, Mi, Ti);
const Rt = (r) => Math.min(1, Math.max(0, r)), Ce = ["16:9", "3:2", "1:1"], Nt = "3:2";
class Pi {
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
  open(t, e, i = !1, o = Nt) {
    return this.overlay && this.destroy(), new Promise((n) => {
      this.resolvePromise = n;
      const s = this.normalizeCropAspectRatio(o);
      this.overlay = this.createOverlay(i, s);
      const a = this.overlay.querySelector(".gallery-crop-modal__image-wrapper");
      if (!a) {
        this.close(null);
        return;
      }
      const h = g("img", null, {
        src: t
      });
      h.style.maxWidth = "100%", h.style.display = "block", a.appendChild(h), document.body.appendChild(this.overlay), h.onload = () => {
        this.cropper = new Ne(h, {
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
      }, h.onerror = () => {
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
    const o = g("div", "gallery-crop-modal__container");
    o.addEventListener("click", (p) => p.stopPropagation());
    const n = g("div", "gallery-crop-modal__image-wrapper"), s = g("div", "gallery-crop-modal__options"), a = g("label", "gallery-crop-modal__option");
    this.showOriginalOnClickInput = g("input", null, { type: "checkbox" }), this.showOriginalOnClickInput.checked = t, a.append(
      this.showOriginalOnClickInput,
      document.createTextNode("Показывать необрезанное изображение по клику")
    ), s.appendChild(a), s.appendChild(this.createAspectRatioOptions(e));
    const h = g("div", "gallery-crop-modal__actions"), l = g("button", ["gallery-crop-modal__btn", "gallery-crop-modal__btn--danger"]);
    l.textContent = "Сбросить", l.addEventListener("click", () => {
      this.close({
        crop: "",
        croppedWidth: 0,
        croppedHeight: 0,
        showOriginalOnClick: !1,
        cropAspectRatio: Nt
      });
    });
    const c = g("button", "gallery-crop-modal__btn");
    c.textContent = "Отмена", c.addEventListener("click", () => this.close(null));
    const d = g("button", ["gallery-crop-modal__btn", "gallery-crop-modal__btn--primary"]);
    return d.textContent = "Применить", d.addEventListener("click", () => this.handleApply()), h.appendChild(l), h.appendChild(c), h.appendChild(d), o.appendChild(n), o.appendChild(s), o.appendChild(h), i.appendChild(o), i;
  }
  /**
   * Обрабатывает нажатие кнопки "Применить" — собирает данные кадрирования
   * и закрывает модальное окно с результатом.
   */
  handleApply() {
    var o;
    if (!this.cropper) {
      this.close(null);
      return;
    }
    const t = this.cropper.getData(!0), e = this.cropper.getImageData(), i = this.cropDataToString(t, e.naturalWidth, e.naturalHeight);
    this.close({
      ...i,
      showOriginalOnClick: ((o = this.showOriginalOnClickInput) == null ? void 0 : o.checked) ?? !1,
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
    const o = Rt(t.x / e), n = Rt(t.y / i), s = Rt((t.x + t.width) / e), a = Rt((t.y + t.height) / i);
    return {
      crop: `${o.toFixed(4)}x${n.toFixed(4)}:${s.toFixed(4)}x${a.toFixed(4)}`,
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
    var n;
    const o = this.parseCropString(t);
    o && ((n = this.cropper) == null || n.setData({
      x: o.x1 * e,
      y: o.y1 * i,
      width: (o.x2 - o.x1) * e,
      height: (o.y2 - o.y1) * i
    }));
  }
  createAspectRatioOptions(t) {
    const e = g("fieldset", "gallery-crop-modal__aspect-ratios"), i = g("legend", "gallery-crop-modal__aspect-ratios-label");
    return i.textContent = "Соотношение сторон", e.appendChild(i), [
      { label: "Любое", value: "free" },
      ...Ce.map((n) => ({ label: n, value: n }))
    ].forEach(({ label: n, value: s }) => {
      const a = g("label", "gallery-crop-modal__aspect-ratio"), h = g("input", null, { type: "radio" }), l = g("span", "gallery-crop-modal__aspect-ratio-label");
      h.name = "gallery-crop-aspect-ratio", h.value = s, h.checked = s === t, h.addEventListener("change", () => {
        var c;
        h.checked && ((c = this.cropper) == null || c.setAspectRatio(this.numericAspectRatio(s)));
      }), l.textContent = n, a.append(h, l), e.appendChild(a), this.aspectRatioInputs.push(h);
    }), e;
  }
  selectedCropAspectRatio() {
    var e;
    const t = (e = this.aspectRatioInputs.find((i) => i.checked)) == null ? void 0 : e.value;
    return this.normalizeCropAspectRatio(t);
  }
  normalizeCropAspectRatio(t) {
    return t === "free" || Ce.includes(t) ? t : Nt;
  }
  numericAspectRatio(t) {
    return t === "free" ? Number.NaN : t === "16:9" ? 16 / 9 : t === "1:1" ? 1 : 3 / 2;
  }
}
const Li = 12e4, Bi = 5e3, Ni = 1e3, Gi = 1.5, Ui = 200;
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
class Hi {
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
      session_id: t.sessionId
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
    const e = Date.now(), i = this.config.pollTimeoutMs ?? Li, o = this.config.pollMaxIntervalMs ?? Bi;
    let n = this.config.pollIntervalMs ?? Ni;
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
      await this.wait(n, t.signal), n = Math.min(Math.ceil(n * Gi), o);
    }
  }
  /**
   * Read the current host session state.
   * @param sessionId - generation session identifier
   * @param blockId - Editor.js block identifier
   * @param signal - optional cancellation signal
   */
  async status(t, e, i) {
    const o = this.resolveEndpoint(this.config.endpoints.status, { sessionId: t }), n = new URLSearchParams({ block_id: e });
    for (const [a, h] of Object.entries(this.config.context))
      h !== null && n.set(`context[${a}]`, String(h));
    const s = await this.request(`${o}${o.includes("?") ? "&" : "?"}${n.toString()}`, {
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
    const o = this.config.endpoints.prompt, n = this.config.publicationContext, s = e === "caption";
    if (typeof o != "string" || o === "" || n === void 0)
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
      publicationContext: n
    };
    t.action !== "generate" && (a.draft = t.draft);
    const l = (await this.request(o, {
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
        Ui
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
    let o;
    try {
      o = await fetch(t, e);
    } catch (s) {
      throw s instanceof DOMException && s.name === "AbortError" ? s : new j(
        "network_error",
        i.networkError,
        0
      );
    }
    const n = await o.json().catch(() => null);
    if (!o.ok) {
      if (this.isRecord(n) && this.isRecord(n.error)) {
        const s = n.error.code, a = n.error.message;
        if (typeof s == "string" && typeof a == "string")
          throw new j(s, a, o.status);
      }
      throw new j(
        "request_failed",
        i.requestFailed,
        o.status
      );
    }
    if (!this.isRecord(n) || !this.isRecord(n.data))
      throw new j(
        "invalid_response",
        i.invalidResponse,
        o.status
      );
    return n.data;
  }
  /**
   * Send a JSON mutation and normalize its session response.
   * @param url - host mutation URL
   * @param body - JSON request body
   * @param signal - optional cancellation signal
   */
  async mutate(t, e, i) {
    const o = await this.request(t, {
      body: JSON.stringify(e),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...this.config.headers
      },
      method: "POST",
      signal: i
    });
    return this.normalizeSession(o);
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
      for (const n of t.candidates)
        !this.isRecord(n) || typeof n.id != "string" || n.id === "" || i.push({
          id: n.id,
          parentId: typeof n.parent_id == "string" ? n.parent_id : null,
          previewUrl: this.resolveEndpoint(this.config.endpoints.candidate, {
            candidateId: n.id,
            sessionId: e
          })
        });
    }
    const o = this.isRecord(t.error) && typeof t.error.code == "string" && typeof t.error.message == "string" ? {
      code: t.error.code,
      message: t.error.message
    } : void 0;
    return {
      candidates: i,
      error: o,
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
      for (const o of t.sessions) {
        if (!this.isRecord(o) || typeof o.session_id != "string" || o.session_id === "")
          continue;
        const n = this.isRecord(o.owner) ? o.owner : {}, s = typeof o.preview_candidate_id == "string" ? o.preview_candidate_id : null;
        i.push({
          candidateCount: typeof o.candidate_count == "number" ? o.candidate_count : 0,
          createdAt: typeof o.created_at == "string" ? o.created_at : null,
          isCurrentBlock: o.is_current_block === !0,
          owner: {
            title: typeof n.title == "string" && n.title !== "" ? n.title : "Публикация",
            url: typeof n.url == "string" && n.url !== "" ? n.url : null
          },
          previewUrl: s === null ? null : this.resolveEndpoint(this.config.endpoints.candidate, {
            candidateId: s,
            sessionId: o.session_id
          }),
          prompt: typeof o.prompt == "string" && o.prompt !== "" ? o.prompt : null,
          sessionId: o.session_id,
          status: typeof o.status == "string" ? o.status : "queued"
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
      (i, [o, n]) => i.split(`{${o}}`).join(encodeURIComponent(n)),
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
    t <= 0 || await new Promise((i, o) => {
      let n;
      const s = () => {
        clearTimeout(n), o(new DOMException("The operation was aborted.", "AbortError"));
      };
      n = setTimeout(() => {
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
class Fi {
  constructor({
    onAdoptSession: t,
    onAssistPrompt: e,
    onCancel: i,
    onCloseSession: o,
    onFinalize: n,
    onGenerate: s,
    onRefine: a,
    onSelectCandidate: h,
    onSelectHistory: l,
    promptAssistanceEnabled: c,
    promptId: d,
    aspectRatio: p,
    aspectRatios: b,
    metadataPlaceholders: C,
    source: u
  }) {
    this.isGenerationBusy = !1, this.isPromptAssistanceBusy = !1, this.isGeneratedCaptionBusy = !1, this.hasFreeSessionSlot = !0, this.promptAssistanceEnabled = c, this.onAdoptSession = t, this.onCloseSession = o, this.onSelectCandidate = h, this.onSelectHistory = l;
    const f = g("div", ["ai-image-tool__generator"]), v = g("div", ["ai-image-tool__sessions"]), y = g("div", ["ai-image-tool__sessions-title"]), w = g("div", ["ai-image-tool__sessions-list"]), _ = g("div", ["ai-image-tool__prompt-section"]), S = g("label", ["ai-image-tool__label"]), m = g("textarea", ["ai-image-tool__prompt"]), x = g("label", ["ai-image-tool__caption-option"]), I = g("input", ["ai-image-tool__caption-checkbox"]), E = g("span"), O = g("div", ["ai-image-tool__aspect-ratio-field"]), z = g("span", ["ai-image-tool__aspect-ratio-label"]), N = g("div", ["ai-image-tool__aspect-ratios"]), H = g("div", ["ai-image-tool__prompt-actions"]), P = g("button", ["ai-image-tool__action"], { type: "button" }), k = g("button", ["ai-image-tool__action", "ai-image-tool__action--secondary"], { type: "button" }), G = g("button", ["ai-image-tool__action", "ai-image-tool__action--secondary"], { type: "button" }), Y = g("button", ["ai-image-tool__action", "ai-image-tool__action--secondary"], { type: "button" }), et = g("div", ["ai-image-tool__status"]), V = g("div", ["ai-image-tool__error"]), lt = g("div", ["ai-image-tool__candidates"]), it = g("div", ["ai-image-tool__selection"]), nt = g("img", ["ai-image-tool__selected-preview"]), ht = g("div", ["ai-image-tool__metadata"]), $ = g("textarea", ["ai-image-tool__metadata-input", "ai-image-tool__metadata-caption"]), W = g("input", ["ai-image-tool__metadata-input"]), J = g("input", ["ai-image-tool__metadata-input"]), Mt = g("div", ["ai-image-tool__caption-status"]), Tt = g("label", ["ai-image-tool__label"]), ot = g("textarea", ["ai-image-tool__prompt"]), _t = g("button", ["ai-image-tool__action"], { type: "button" }), xt = g("button", ["ai-image-tool__action"], { type: "button" }), te = g("div", ["ai-image-tool__history"]), Ot = g("div", ["ai-image-tool__history-status"]);
    m.id = d, m.rows = 3, m.placeholder = "Опишите изображение, которое нужно создать", S.htmlFor = d, S.textContent = "Введите промпт", P.textContent = "Генерация изображения", k.textContent = "Промпт по публикации", G.textContent = "Улучшить промпт", Y.textContent = "Отменить", k.hidden = !c, G.hidden = !c, I.type = "checkbox", I.id = `${d}-generate-caption`, E.textContent = "Также сгенерировать описание", x.htmlFor = I.id, x.hidden = !c, x.append(I, E), N.setAttribute("role", "radiogroup"), N.setAttribute("aria-label", "Соотношение сторон"), this.createAspectRatioOptions(N, b, p, d), z.textContent = "Соотношение сторон:", O.append(z, N), H.append(P, k, Y), _.append(S, m, G, x, O, H), nt.alt = "Выбранный вариант", nt.dataset.selectedPreview = "", $.id = `${d}-caption`, $.rows = 2, $.dataset.generatedCaption = "", $.dataset.aiImageMetadata = "", $.placeholder = C.caption, $.setAttribute("aria-label", C.caption), W.type = "text", W.dataset.aiImageMetadata = "", W.placeholder = C.source, W.setAttribute("aria-label", C.source), W.defaultValue = u.name, W.value = u.name, J.type = "url", J.dataset.aiImageMetadata = "", J.placeholder = C.sourceLink, J.setAttribute("aria-label", C.sourceLink), J.defaultValue = u.url, J.value = u.url, Mt.setAttribute("aria-live", "polite"), ht.append($, W, J, Mt), ot.id = `${d}-refinement`, ot.rows = 2, ot.dataset.refinementPrompt = "", Tt.htmlFor = ot.id, Tt.textContent = "Как доработать изображение", _t.textContent = "Доработать", xt.textContent = "Использовать изображение", it.hidden = !0, it.append(
      nt,
      ht,
      Tt,
      ot,
      _t,
      xt,
      te,
      Ot
    ), et.setAttribute("aria-live", "polite"), V.setAttribute("aria-live", "assertive"), V.setAttribute("role", "alert"), V.hidden = !0, Ot.setAttribute("aria-live", "polite"), lt.hidden = !0, f.hidden = !0, v.hidden = !0, v.append(y, w), f.append(v, _, et, V, lt, it), P.addEventListener("click", () => s(m.value, I.checked, this.selectedAspectRatio())), k.addEventListener("click", () => e("generate", m.value)), G.addEventListener("click", () => e("improve", m.value)), Y.addEventListener("click", i), _t.addEventListener("click", () => a(ot.value)), xt.addEventListener("click", n), m.addEventListener("input", () => this.updatePromptControls()), this.nodes = {
      wrapper: f,
      sessionsSection: v,
      sessionsTitle: y,
      sessionsList: w,
      promptSection: _,
      prompt: m,
      generateButton: P,
      generateFromPublicationButton: k,
      improvePromptButton: G,
      generateCaptionCheckbox: I,
      aspectRatioOptions: N,
      generationStatus: et,
      generationError: V,
      candidates: lt,
      selection: it,
      selectedPreview: nt,
      metadataSection: ht,
      generatedCaption: $,
      generatedCaptionStatus: Mt,
      sourceName: W,
      sourceUrl: J,
      refinementPrompt: ot,
      refineButton: _t,
      finalizeButton: xt,
      cancelButton: Y,
      history: te,
      historyStatus: Ot
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
    for (const o of i)
      this.nodes.sessionsList.appendChild(this.buildSessionCard(o));
    this.nodes.sessionsSection.hidden = !1, this.updatePromptControls();
  }
  hideActiveSessions() {
    this.hasFreeSessionSlot = !0, this.nodes.sessionsSection.hidden = !0, this.nodes.sessionsList.replaceChildren(), this.updatePromptControls();
  }
  buildSessionCard(t) {
    const e = g("div", ["ai-image-tool__session"], { "data-session-id": t.sessionId }), i = g("div", ["ai-image-tool__session-preview"]);
    if (t.previewUrl !== null) {
      const c = g("img", ["ai-image-tool__session-thumb"], {
        alt: "",
        loading: "lazy",
        src: t.previewUrl
      });
      i.appendChild(c);
    }
    const o = g("div", ["ai-image-tool__session-body"]), n = t.owner.url === null ? g("span", ["ai-image-tool__session-title"]) : g("a", ["ai-image-tool__session-title"], {
      href: t.owner.url,
      rel: "noopener",
      target: "_blank"
    });
    n.textContent = t.owner.title;
    const s = g("div", ["ai-image-tool__session-meta"]);
    if (s.textContent = [
      t.isCurrentBlock ? "этот блок" : null,
      this.sessionStatusLabel(t.status),
      t.candidateCount > 0 ? `${t.candidateCount} вар.` : null,
      this.sessionTimeLabel(t.createdAt)
    ].filter((c) => c !== null).join(" · "), o.append(n, s), t.prompt !== null) {
      const c = g("div", ["ai-image-tool__session-prompt"]);
      c.textContent = t.prompt, o.appendChild(c);
    }
    const a = g("div", ["ai-image-tool__session-actions"]), h = g("button", ["ai-image-tool__action", "ai-image-tool__action--secondary"], {
      type: "button"
    });
    h.textContent = t.isCurrentBlock ? "Продолжить" : "Продолжить здесь", h.addEventListener("click", () => this.onAdoptSession(t.sessionId));
    const l = g("button", ["ai-image-tool__session-close"], {
      title: "Закрыть генерацию и освободить слот",
      type: "button"
    });
    return l.setAttribute("aria-label", "Закрыть генерацию"), l.textContent = "×", l.addEventListener("click", () => this.onCloseSession(t.sessionId)), a.append(h, l), e.append(i, o, a), e;
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
    this.isGenerationBusy = t, this.updatePromptControls(), this.updateSelectionControls();
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
    }, o = e ?? t, n = i[o] ?? "";
    this.nodes.generationStatus.textContent = n, this.nodes.historyStatus.textContent = o.startsWith("refinement_") ? n : "";
  }
  showGenerationError(t) {
    this.nodes.generationError.textContent = t, this.nodes.generationError.hidden = t === "";
  }
  showCandidates(t) {
    var e;
    this.nodes.candidates.replaceChildren(), t.forEach((i, o) => {
      const n = g("button", ["ai-image-tool__candidate"], { type: "button" }), s = g("img", ["ai-image-tool__candidate-image"]);
      n.dataset.candidateId = i.id, n.setAttribute("aria-label", `Выбрать вариант ${o + 1}`), n.setAttribute("aria-pressed", "false"), n.addEventListener("click", () => this.selectCandidate(i.id)), s.alt = `Вариант ${o + 1}`, s.src = i.previewUrl, n.appendChild(s), this.nodes.candidates.appendChild(n);
    }), this.nodes.promptSection.hidden = !0, this.nodes.candidates.hidden = !1, this.showGenerationStatus("ready"), (e = this.nodes.candidates.querySelector("[data-candidate-id]")) == null || e.focus();
  }
  showSelectedCandidate(t, e) {
    this.nodes.candidates.querySelectorAll("[data-candidate-id]").forEach((i) => {
      i.setAttribute("aria-pressed", String(i.dataset.candidateId === t.id));
    }), this.nodes.selectedPreview.src = t.previewUrl, this.nodes.selection.hidden = !1, this.nodes.history.replaceChildren(), e.forEach((i, o) => {
      const n = g("button", ["ai-image-tool__history-item"], { type: "button" });
      n.dataset.historyCandidateId = i.id, n.textContent = `Версия ${o + 1}`, n.setAttribute("aria-current", i.id === t.id ? "true" : "false"), n.addEventListener("click", () => this.selectHistory(i.id)), this.nodes.history.appendChild(n);
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
    this.nodes.promptSection.hidden = !1, this.nodes.candidates.hidden = !0, this.nodes.selection.hidden = !0, this.nodes.candidates.replaceChildren(), this.nodes.history.replaceChildren(), this.nodes.prompt.value = "", this.nodes.refinementPrompt.value = "", this.nodes.generationStatus.textContent = "", this.showGenerationError(""), this.resetGeneratedCaption(), this.setGenerationBusy(!1), this.setPromptAssistanceBusy(!1);
  }
  updatePromptControls() {
    const t = this.isGenerationBusy || this.isPromptAssistanceBusy;
    this.nodes.wrapper.setAttribute("aria-busy", String(t)), this.nodes.prompt.disabled = t, this.nodes.generateButton.disabled = t || !this.hasFreeSessionSlot, this.nodes.generateFromPublicationButton.disabled = t || !this.promptAssistanceEnabled, this.nodes.generateCaptionCheckbox.disabled = t || !this.promptAssistanceEnabled, this.nodes.aspectRatioOptions.querySelectorAll('input[type="radio"]').forEach((e) => {
      e.disabled = t;
    }), this.nodes.improvePromptButton.disabled = t || !this.promptAssistanceEnabled || this.nodes.prompt.value.trim() === "";
  }
  updateSelectionControls() {
    this.nodes.refinementPrompt.disabled = this.isGenerationBusy, this.nodes.refineButton.disabled = this.isGenerationBusy, this.nodes.finalizeButton.disabled = this.isGenerationBusy || this.isGeneratedCaptionBusy, this.nodes.generatedCaption.disabled = this.isGenerationBusy || this.isGeneratedCaptionBusy, this.nodes.sourceName.disabled = this.isGenerationBusy, this.nodes.sourceUrl.disabled = this.isGenerationBusy;
  }
  createAspectRatioOptions(t, e, i, o) {
    const n = e.includes(i) ? i : e[0] ?? "3:2";
    e.forEach((s) => {
      const a = g("label", ["ai-image-tool__aspect-ratio-option"]), h = g("input", ["ai-image-tool__aspect-ratio-input"]), l = g("span");
      h.type = "radio", h.name = `${o}-aspect-ratio`, h.value = s, h.checked = s === n, l.textContent = s, a.append(h, l), t.appendChild(a);
    });
  }
  selectedAspectRatio() {
    var e;
    const t = (e = this.nodes.aspectRatioOptions.querySelector('input[type="radio"]:checked')) == null ? void 0 : e.value;
    return t === "16:9" || t === "1:1" ? t : "3:2";
  }
}
class ji {
  constructor({
    blockId: t,
    config: e,
    initialPending: i,
    metadataPlaceholders: o,
    onChange: n,
    onFinalized: s
  }) {
    this.generationActionId = null, this.refinementActionId = null, this.finalizationActionId = null, this.isGenerationRequestRunning = !1, this.isPromptAssistanceRunning = !1, this.isCaptionRequestRunning = !1, this.isDestroyed = !1, this.hasCancelledPendingGeneration = !1, this.pollController = null, this.promptAssistanceController = null, this.captionController = null, this.promptAssistanceRequestToken = 0, this.captionRequestToken = 0, this.candidates = /* @__PURE__ */ new Map(), this.history = [], this.selectedCandidateId = null, this.blockId = t, this.client = new Hi(e), this.config = e, this.onChange = n, this.onFinalized = s, this.sessionId = (i == null ? void 0 : i.sessionId) ?? null;
    const a = typeof e.endpoints.prompt == "string" && e.endpoints.prompt.trim() !== "" && e.publicationContext !== void 0 && typeof e.getPublicationContext == "function";
    this.ui = new Fi({
      onAdoptSession: (h) => this.adoptSession(h),
      onAssistPrompt: (h, l) => this.assistPrompt(h, l),
      onCancel: () => this.cancel(),
      onCloseSession: (h) => this.closeSession(h),
      onFinalize: () => this.finalizeSelectedCandidate(),
      onGenerate: (h, l, c) => this.generate(h, l, c),
      onRefine: (h) => this.refine(h),
      onSelectCandidate: (h) => this.selectCandidate(h),
      onSelectHistory: (h) => this.selectCandidate(h),
      aspectRatio: this.defaultAspectRatio(e.aspectRatio),
      aspectRatios: this.availableAspectRatios(e.aspectRatios),
      metadataPlaceholders: o,
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
        onStatus: (o) => this.applySession(o),
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
    const o = ++this.promptAssistanceRequestToken, n = new AbortController();
    this.promptAssistanceController = n, this.ui.setPromptAssistanceBusy(!0), this.ui.showPromptAssistanceStatus(t === "generate" ? "Подготавливаем промпт по публикации..." : "Улучшаем промпт с учётом публикации..."), this.runPromptAssistance(t, e, i, n, o);
  }
  async runPromptAssistance(t, e, i, o, n) {
    try {
      const s = await i();
      if (!this.isCurrentPromptAssistance(n, o))
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
      }, h = await this.client.assistPrompt(a, o.signal);
      this.isCurrentPromptAssistance(n, o) && (this.ui.setPromptValue(h), this.ui.showPromptAssistanceStatus("Промпт готов — проверьте и при необходимости отредактируйте"));
    } catch (s) {
      this.isCurrentPromptAssistance(n, o) && !this.isAbortError(s) && (this.ui.showPromptAssistanceStatus(""), this.ui.showGenerationError(this.errorMessage(s, "Не удалось подготовить промпт для изображения.")));
    } finally {
      this.isCurrentPromptAssistance(n, o) && (this.isPromptAssistanceRunning = !1, this.promptAssistanceController = null, this.ui.setPromptAssistanceBusy(!1));
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
    const i = ++this.captionRequestToken, o = new AbortController();
    this.captionController = o, this.runCaptionGeneration(t, e, o, i);
  }
  async runCaptionGeneration(t, e, i, o) {
    try {
      const n = await e();
      if (!this.isCurrentCaptionRequest(o, i))
        return;
      this.assertPublicationHasText(n, "В публикации нет текста для подготовки описания.");
      const s = await this.client.generateCaption({
        action: "caption",
        actionId: globalThis.crypto.randomUUID(),
        blockId: this.blockId,
        draft: t,
        publication: n
      }, i.signal);
      this.isCurrentCaptionRequest(o, i) && this.ui.completeGeneratedCaption(s);
    } catch (n) {
      this.isCurrentCaptionRequest(o, i) && !this.isAbortError(n) && this.ui.failGeneratedCaption(`${this.errorMessage(n, "Не удалось подготовить описание изображения.")} Можно ввести подпись вручную.`);
    } finally {
      this.isCurrentCaptionRequest(o, i) && (this.isCaptionRequestRunning = !1, this.captionController = null);
    }
  }
  isCurrentCaptionRequest(t, e) {
    return !this.isDestroyed && this.captionRequestToken === t && this.captionController === e;
  }
  generate(t, e, i) {
    const o = t.trim();
    if (o === "") {
      this.ui.showGenerationError("Введите промпт для генерации изображения.");
      return;
    }
    if (this.isGenerationRequestRunning || this.sessionId === null)
      return;
    this.ui.showGenerationError(""), this.isGenerationRequestRunning = !0, this.generationActionId ?? (this.generationActionId = globalThis.crypto.randomUUID());
    const n = this.generationActionId, s = this.replacePollController();
    this.ui.setGenerationBusy(!0), this.ui.showGenerationStatus("queued", "generation_submitting"), e ? this.startCaptionGeneration(o) : (this.abortCaptionGeneration(), this.ui.resetGeneratedCaption()), this.runGeneration(o, i, n, s);
  }
  async runGeneration(t, e, i, o) {
    if (this.sessionId === null)
      return;
    const n = this.sessionId;
    try {
      const s = await this.client.generate({
        actionId: i,
        aspectRatio: e,
        blockId: this.blockId,
        prompt: t,
        sessionId: n
      }, o.signal);
      this.generationActionId = null, this.applySession(s);
      const a = s.status === "ready" ? s : await this.client.poll({
        blockId: this.blockId,
        onStatus: (h) => this.applySession(h),
        sessionId: n,
        signal: o.signal
      });
      this.applySession(a);
    } catch (s) {
      this.handleOperationError(s, "Не удалось сгенерировать изображение.", () => {
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
    const i = this.refinementActionId, o = this.selectedCandidateId, n = this.replacePollController();
    this.ui.setGenerationBusy(!0), this.ui.showGenerationStatus("queued", "refinement_submitting"), this.runRefinement(e, o, i, n);
  }
  async runRefinement(t, e, i, o) {
    if (this.sessionId === null)
      return;
    const n = this.sessionId;
    try {
      const s = await this.client.refine({
        actionId: i,
        blockId: this.blockId,
        candidateId: e,
        prompt: t,
        sessionId: n
      }, o.signal);
      this.refinementActionId = null, this.applySession(s);
      const a = s.status === "ready" ? s : await this.client.poll({
        blockId: this.blockId,
        onStatus: (h) => this.applySession(h),
        sessionId: n,
        signal: o.signal
      });
      this.applySession(a), this.ui.clearRefinementPrompt();
    } catch (s) {
      this.handleOperationError(s, "Не удалось доработать изображение.", () => {
        this.refinementActionId = null;
      });
    } finally {
      this.finishGenerationRequest(o);
    }
  }
  finalizeSelectedCandidate() {
    if (this.isGenerationRequestRunning || this.isCaptionRequestRunning || this.sessionId === null || this.selectedCandidateId === null)
      return;
    this.ui.showGenerationError(""), this.isGenerationRequestRunning = !0, this.finalizationActionId ?? (this.finalizationActionId = globalThis.crypto.randomUUID());
    const t = this.finalizationActionId, e = this.selectedCandidateId, i = this.ui.getImageMetadata(), o = this.replacePollController();
    this.ui.setGenerationBusy(!0), this.ui.showGenerationStatus("finalizing", "finalization_submitting"), this.runFinalization(e, t, o, i);
  }
  async runFinalization(t, e, i, o) {
    if (this.sessionId === null)
      return;
    const n = this.sessionId;
    try {
      const s = await this.client.finalize({
        actionId: e,
        blockId: this.blockId,
        candidateId: t,
        sessionId: n
      }, i.signal);
      this.finalizationActionId = null, this.applySession(s);
      const a = s.status === "completed" ? s : await this.client.poll({
        blockId: this.blockId,
        onStatus: (l) => this.applySession(l),
        sessionId: n,
        signal: i.signal
      });
      if (a.error !== void 0)
        throw new j(a.error.code, a.error.message, 0);
      if (a.image === void 0 || !this.isStandardImageData(a.image))
        throw new j("invalid_final_image", "Сервер вернул некорректные данные изображения.", 0);
      const h = this.mapImageToGalleryItem(a.image, o);
      this.resetSession(), this.ui.close(), this.onFinalized(h), this.onChange();
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
    const i = this.history.findIndex((o) => o.id === e.id);
    i < 0 && e.parentId === null ? this.history = [e] : i < 0 && this.history.push(e), this.selectedCandidateId = e.id, this.ui.showSelectedCandidate(e, this.history);
  }
  applyRefinementCandidate(t) {
    const e = this.candidates.get(t);
    if (e === void 0)
      return;
    if (this.history.findIndex((o) => o.id === e.id) < 0) {
      const o = this.history.findIndex((n) => n.id === e.parentId);
      this.history = o >= 0 ? [...this.history.slice(0, o + 1), e] : [e];
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
}
/**
 * Gallery Tool for Editor.js
 * Supports multiple images with captions and source attribution
 * @author iXBT
 * @license MIT
 */
class zi {
  constructor({ data: t, config: e, api: i, readOnly: o, block: n }) {
    this.aiGenerationController = null, this.currentLoadingItem = null, this.api = i, this.readOnly = o, this.block = n;
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
    }, this.isPendingAiGeneration(t == null ? void 0 : t.aiGeneration) && (this._data.aiGeneration = t.aiGeneration), this.uploader = new $e({
      config: this.config,
      onUpload: (a) => this.onUpload(a),
      onError: (a) => this.uploadingFailed(a)
    }), this.cropModal = new Pi(), this.ui = new Gt({
      api: i,
      config: this.config,
      onSelectFile: () => this.selectFile(),
      onSelectUrl: (a) => this.uploadFromUrl(a),
      onColumnsChange: (a) => this.onColumnsChange(a),
      onRemoveImage: (a, h) => this.onRemoveImage(a, h),
      onCropImage: (a) => this.handleCropImage(a),
      onOpenAi: () => {
        var a;
        return (a = this.aiGenerationController) == null ? void 0 : a.open();
      },
      readOnly: o
    }), this.config.generation !== void 0 && !this.readOnly && (this.aiGenerationController = new ji({
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
      icon: be,
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
      var o, n;
      return (n = (o = this.config).onMediaRemoved) == null ? void 0 : n.call(o, i);
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
          const o = await (await fetch(e.src)).blob();
          this.uploadFile(o);
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
  onAiFinalized(t) {
    const e = this.ui.addItem(t), i = e.querySelector("img");
    if (delete this._data.aiGeneration, i !== null) {
      const o = () => {
        e.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
      };
      i.complete ? requestAnimationFrame(o) : i.addEventListener("load", o, { once: !0 });
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
    var n, s;
    const e = t.dataset.url;
    if (!e) return;
    const i = t.dataset.crop, o = await this.cropModal.open(
      e,
      i,
      t.dataset.showOriginalOnClick === "true",
      this.normalizeCropAspectRatioMode(t.dataset.cropAspectRatio)
    );
    if (o !== null) {
      if (o.crop === "")
        this.ui.updateItemAfterCrop(t, void 0, 0, 0, void 0, void 0);
      else {
        this.ui.updateItemAfterCrop(
          t,
          o.crop,
          o.croppedWidth,
          o.croppedHeight,
          o.showOriginalOnClick,
          o.cropAspectRatio
        );
        const a = t.dataset.mediaId;
        a && ((s = (n = this.config).onCropApplied) == null || s.call(n, a, o.crop));
      }
      this.block.dispatchChange();
    }
  }
  /**
   * Handle image removal - delete from S3
   */
  onRemoveImage(t, e) {
    var o, n;
    if (this.block.dispatchChange(), e) {
      (n = (o = this.config).onMediaRemoved) == null || n.call(o, e);
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
  zi as default
};
