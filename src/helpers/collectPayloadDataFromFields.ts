import { FieldFrom } from '@src/types';
import { $model } from '@src/model';

export const collectPayloadDataFromFields = (from: FieldFrom) => {
  return $model.value.fields[from].map(item => {
    return {
      //@ts-ignore
      title: item.title || 'n/a',
      fieldRef: item.fieldRef,
      type: item.type,
      //@ts-ignore
      value: item.value || 'n/a',
    };
  });
};
