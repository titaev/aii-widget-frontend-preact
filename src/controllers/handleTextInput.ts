import { $model } from '@src/model';
import { RefObject } from 'preact';

export const handleTextInput = ({
  value,
  ref,
  fieldRef,
}: {
  value: string;
  ref: RefObject<HTMLInputElement>;
  fieldRef: string;
}) => {
  const input = $model.value.fields.aiFields.find(item => {
    return item.type === 'TextInputField' && item.fieldRef === fieldRef;
  });
  if (input.type === 'TextInputField') {
    input.value = value;
  }
  ref.current.style.height = '5px';
  ref.current.style.height = ref.current.scrollHeight + 'px';
};
