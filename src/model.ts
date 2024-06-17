import { Signal, signal } from '@preact/signals';
import { LSModel, ModalContent, ModelResponse, PlainContent } from '@src/types';

//data
export const $model: Signal<ModelResponse | null> = signal(null);
export const $isLoadingModel = signal(true);
export const $isErrorModel = signal(false);
export const $lsModel: Signal<LSModel> = signal(null);
export const $aiAnswer = signal('');
export const $aiAnswerObfuscated = signal('');

//common refs
export const $ws: Signal<WebSocket | null> = signal(null);

//buttons view
export const $isShowCopyBtn = signal(false);
export const $isShowResetBtn = signal(true);
export const $isShowGenerateMoreBtn = signal(false);
export const $isShowStopBtn = signal(false);

//modal view
export const $modalContent: Signal<ModalContent> = signal('');

//if page_view === 'plain_page'
export const $plainContent: Signal<PlainContent> = signal('aiForm');

//validation flags
export const $isFirstValidationAiForm = signal(true);
export const $isFirstValidationLeadForm = signal(true);

//flags
export const $isDisabledAiForm = signal(false);
export const $isCopyActive = signal(false);
export const $isFirstPromptRequest = signal(true);
export const $isPreviewMode = signal(true);
