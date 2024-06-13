import { checkFields } from '@src/helpers/checkFields';
import { $isFirstValidationAiForm, $lsModel, $model, $plainContent } from '@src/model';
import { generationStarting } from '@src/actions/generationStarting';
import { leadFormOpening } from '@src/actions/leadFormOpening';

export const handleAiSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  if (checkFields('aiFields')) {
    $isFirstValidationAiForm.value = true;
    if (
      $model.value.collect_lead_strategy === 'before_ai_answer' &&
      !$lsModel.value.leadIsCollected &&
      $model.value.fields.enableLeads
    ) {
      leadFormOpening();
    } else {
      generationStarting();
      $plainContent.value = 'answer';
    }
  } else {
    $isFirstValidationAiForm.value = false;
  }
};
