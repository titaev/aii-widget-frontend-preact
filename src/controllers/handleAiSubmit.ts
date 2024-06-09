import { checkFields } from '@src/helpers/checkFields';
import { $isFirstValidationAiForm } from '@src/model';

export const handleAiSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  if (checkFields('aiFields')) {
    $isFirstValidationAiForm.value = true;
    console.log('submit ai form');
  } else {
    $isFirstValidationAiForm.value = false;
  }
};
