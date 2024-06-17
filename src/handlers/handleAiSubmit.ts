import { checkFields } from '@src/helpers/checkFields';
import { $isFirstValidationAiForm, $lsModel, $model, $plainContent } from '@src/model';
import { generationStarting } from '@src/actions/generationStarting';
import { leadFormOpening } from '@src/actions/leadFormOpening';
import { sessionCreating } from '@src/actions/sessionCreating';
import { fillingAdding } from '@src/actions/fillingAdding';

export const handleAiSubmit = async (e: SubmitEvent) => {
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
      if ($model.value.collect_lead_strategy === 'email_ai_answer') {
        await sessionCreating();
        await fillingAdding();
      }
      generationStarting();
      $plainContent.value = 'answer';
    }
  } else {
    $isFirstValidationAiForm.value = false;
  }
};
