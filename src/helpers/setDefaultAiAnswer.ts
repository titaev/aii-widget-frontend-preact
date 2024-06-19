import { $aiAnswer, $aiAnswerObfuscated, $lsModel, $model } from '@src/model';
import { locale } from '@src/locale';

export const setDefaultAiAnswer = () => {
  $aiAnswer.value =
    $lsModel.value?.generationResult ||
    $model.value?.preferences?.miniPageCta ||
    locale.defaultCtaText;
  $aiAnswerObfuscated.value = '';
};
