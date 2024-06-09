import { $model } from '@src/model';
import { FieldFrom } from '@src/types';

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
};
