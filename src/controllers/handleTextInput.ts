import { $isFirstValidationAiForm, $isFirstValidationLeadForm, $model } from '@src/model';
import { FieldFrom } from '@src/types';
import { checkFields } from '@src/helpers/checkFields';

export const handleTextInput = ({
  value,
  ref,
  fieldRef,
  fieldFrom,
}: {
  value: string;
  ref: HTMLInputElement;
  fieldRef: string;
  fieldFrom: FieldFrom;
}) => {
  const input = $model.value.fields[fieldFrom].find(item => {
    return item.type === 'TextInputField' && item.fieldRef === fieldRef;
  });
  if (input.type === 'TextInputField') {
    input.value = value;
  }
  ref.style.height = '5px';
  ref.style.height = ref.scrollHeight + 'px';

  if (
    (!$isFirstValidationAiForm.value && fieldFrom === 'aiFields') ||
    (!$isFirstValidationLeadForm.value && fieldFrom === 'leadsFields')
  ) {
    checkFields(fieldFrom);
  }
};
