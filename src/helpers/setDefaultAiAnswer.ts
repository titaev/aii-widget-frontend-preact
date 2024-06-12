import { $aiAnswer, $lsModel, $model } from '@src/model';
import { DEFAULT_CTA_TEXT } from '@src/constants';

export const setDefaultAiAnswer = () => {
  $aiAnswer.value =
    $lsModel.value?.generationResult || $model.value?.preferences?.miniPageCta || DEFAULT_CTA_TEXT;
};
