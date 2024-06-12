import { $isErrorModel, $isLoadingModel, $model } from '@src/model';
import { getModel } from '@src/api/getModel';

export const modelGetting = async (widgetId: string) => {
  $isLoadingModel.value = true;
  $isErrorModel.value = false;
  try {
    const data = await getModel(widgetId);
    $model.value = await data.json();
  } catch (err) {
    $isErrorModel.value = true;
  } finally {
    $isLoadingModel.value = false;
  }
};
