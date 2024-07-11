import { checkFields } from '@src/helpers/checkFields';
import { $isFirstValidationLeadForm, $model, $plainContent } from '@src/model';
import { leadFormSubmitExternalEventDispatching } from '@src/actions/leadFormSubmitExternalEventDispatching';
import { sessionCreating } from '@src/actions/sessionCreating';
import { gratitudeOpening } from '@src/actions/gratitudeOpening';
import { leadAdding } from '@src/actions/leadAdding';
import { customUrlRedirecting } from '@src/actions/customUrlRedirecting';
// import { modalClosing } from '@src/actions/modalClosing';
import { generationStarting } from '@src/actions/generationStarting';

export const handleLeadSubmit = async (e: SubmitEvent, validateOnly: boolean) => {
  e.preventDefault();
  if (checkFields('leadsFields')) {
    $isFirstValidationLeadForm.value = true;
    if (validateOnly) return;
    leadFormSubmitExternalEventDispatching();
    gratitudeOpening();
    await sessionCreating();
    await leadAdding();
    setTimeout(() => {
      if ($model.value.collect_lead_strategy === 'after_ai_answer') {
        customUrlRedirecting();
      }
      // modalClosing();
      $plainContent.value = 'answer';
      if ($model.value.collect_lead_strategy === 'before_ai_answer') {
        generationStarting();
      }
    }, 1000);
  } else {
    $isFirstValidationLeadForm.value = false;
  }
};
