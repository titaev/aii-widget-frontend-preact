import {Signal, signal} from "@preact/signals";
import {ModalContent, ModelResponse} from "@src/types";

export const $model: Signal<ModelResponse | null> = signal(null);
export const $isLoadingModel = signal(true)
export const $isErrorModel = signal(false)

export const $isPreviewMode = signal(true)

export const $lsModel = signal(null)

export const $isShowLeadForm = signal(false)
export const $isShowGratitude = signal(false)

export const $modalContent: Signal<ModalContent> = signal('')

