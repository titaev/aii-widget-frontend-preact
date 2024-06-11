import { checkFields } from '@src/helpers/checkFields';
import {
  $isFirstValidationAiForm,
  $lsModel,
  $modalContent,
  $model,
  $plainContent,
} from '@src/model';

export const handleAiSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  if (checkFields('aiFields')) {
    $isFirstValidationAiForm.value = true;
    if (
      $model.value.collect_lead_strategy === 'before_ai_answer' &&
      !$lsModel.value.leadIsCollected &&
      $model.value.fields.enableLeads
    ) {
      $modalContent.value = 'leadForm';
    } else {
      //start generating
      $plainContent.value = 'answer';
    }
  } else {
    $isFirstValidationAiForm.value = false;
  }
};
