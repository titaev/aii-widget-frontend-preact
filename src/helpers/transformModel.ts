import { ModelResponse } from '@src/types';

export const transformModel = (model: ModelResponse) => {
  model.fields.leadsFields = model.fields.leadsFields.filter(item => item.enabled);
  return model;
};
