import { $model } from '@src/model';
import { FIELD_REF_REGEX } from '@src/constants';

export const getReadyPrompt = () => {
  const fields = $model.value.fields.aiFields;
  const templatePrompt = $model.value.fields.aiPrompt;
  const inputsValues = fields.reduce<any>((acc: Record<string, string>, item) => {
    // @ts-ignore
    acc[`@[${item.fieldRef}]`] = item.value || item.title;
    return acc;
  }, {});

  const splittedPrompt = templatePrompt.split(/\s/);
  return splittedPrompt
    .map(item => {
      if (FIELD_REF_REGEX.test(item)) {
        return inputsValues[item] || '';
      } else {
        return item;
      }
    })
    .join(' ');
};
