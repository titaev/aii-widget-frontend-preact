import { $isErrorModel, $isLoadingModel, $model } from '@src/model';

export const getModel = (widgetId: string) => {
  $isLoadingModel.value = true;
  $isErrorModel.value = false;
  fetch(`${process.env.REACT_APP_BE_API_URL}/lead_forms/${widgetId}/widget`)
    .then(response => {
      return response.json();
    })
    .then(result => {
      $model.value = result;
    })
    .catch(err => {
      $isErrorModel.value = true;
    })
    .finally(() => {
      $isLoadingModel.value = false;
    });
};
