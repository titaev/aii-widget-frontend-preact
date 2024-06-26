import { $aiAnswer, $aiAnswerObfuscated, $lsModel, $model } from '@src/model';
import { locale } from '@src/locale';

export const setDefaultAiAnswer = () => {
  $aiAnswer.value =
    $model.value.page_view === 'plain_page'
      ? ''
      : $lsModel.value?.generationResult ||
        $model.value?.preferences?.miniPageCta ||
        locale.defaultCtaText;
  $aiAnswerObfuscated.value = '';
};
