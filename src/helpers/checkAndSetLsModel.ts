import { $isPreviewMode, $lsModel } from '@src/model';
import { DEFAULT_LS_MODEL_VALUE } from '@src/constants';

export const checkAndSetLsModel = (widgetId: string) => {
  if ($isPreviewMode.value) {
    $lsModel.value = DEFAULT_LS_MODEL_VALUE;
    return;
  }
  const LSModelString = localStorage.getItem(`aii-cx-widget-${widgetId}`);
  if (LSModelString) {
    $lsModel.value = JSON.parse(LSModelString);
  } else {
    $lsModel.value = DEFAULT_LS_MODEL_VALUE;
    localStorage.setItem(`aii-cx-widget-${widgetId}`, JSON.stringify($lsModel.value));
  }
};
