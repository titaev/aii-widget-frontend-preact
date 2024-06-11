import { Signal, signal } from '@preact/signals';
import { LSModel, ModalContent, ModelResponse, PlainContent } from '@src/types';

export const $model: Signal<ModelResponse | null> = signal(null);
export const $isLoadingModel = signal(true);
export const $isErrorModel = signal(false);

export const $isPreviewMode = signal(true);

export const $lsModel: Signal<LSModel> = signal(null);

export const $aiAnswer = signal('');

export const $isShowCopyBtn = signal(false);

export const $isShowResetBtn = signal(false);

export const $isShowGenerateMoreBtn = signal(false);

export const $isShowStopBtn = signal(false);
export const $modalContent: Signal<ModalContent> = signal('');
export const $plainContent: Signal<PlainContent> = signal('aiForm');

export const $isFirstValidationAiForm = signal(true);
export const $isFirstValidationLeadForm = signal(true);
