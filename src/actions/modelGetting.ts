import { $isErrorModel, $isLoadingModel, $model } from '@src/model';
import { getModel } from '@src/api/getModel';
import { transformModel } from '@src/helpers/transformModel';

export const modelGetting = async (widgetId: string) => {
  $isLoadingModel.value = true;
  $isErrorModel.value = false;
  try {
    const data = await getModel(widgetId);
    const result = await data.json();
    $model.value = transformModel(result);
  } catch (err) {
    $isErrorModel.value = true;
  } finally {
    $isLoadingModel.value = false;
  }
};
