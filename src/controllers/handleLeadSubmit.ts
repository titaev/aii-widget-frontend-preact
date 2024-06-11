import { checkFields } from '@src/helpers/checkFields';
import { $isFirstValidationLeadForm } from '@src/model';
import { leadFormSubmitExternalEventDispatching } from '@src/actions/leadFormSubmitExternalEventDispatching';
import { sessionCreating } from '@src/actions/sessionCreating';
import { gratitudeOpening } from '@src/actions/gratitudeOpening';

export const handleLeadSubmit = async (e: SubmitEvent) => {
  e.preventDefault();
  if (checkFields('leadsFields')) {
    $isFirstValidationLeadForm.value = true;
    leadFormSubmitExternalEventDispatching();
    gratitudeOpening();
    await sessionCreating();
  } else {
    $isFirstValidationLeadForm.value = false;
  }
};
