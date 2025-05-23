import { $model } from '@src/model';
import { locale } from '@src/locale';
import { EMAIL_REGEX } from '@src/constants';
import { FieldFrom } from '@src/types';

export const checkFields = (from: FieldFrom) => {
  let isCorrect = true;
  $model.value.fields[from].forEach((item, index) => {
    if (item.type === 'TextInputField' && item.required && item.value === '') {
      isCorrect = false;
      //@ts-ignore
      $model.value.fields[from][index].errorText = locale.requiredError;
    } else if (
      item.type === 'TextInputField' &&
      item.fieldRef === '#email' &&
      item.value !== '' &&
      !EMAIL_REGEX.test(item.value)
    ) {
      isCorrect = false;
      //@ts-ignore
      $model.value.fields[from][index].errorText = locale.incorrectEmail;
    } else {
      //@ts-ignore
      $model.value.fields[from][index].errorText = '';
    }
  });
  $model.value = { ...$model.value };
  return isCorrect;
};
