import { $lsModel, $model } from '@src/model';
import { createSession } from '@src/api/createSession';
import { changeFieldInLsModel } from '@src/helpers/changeFieldInLsModel';

export const sessionCreating = async () => {
  if (!$lsModel.value.sessionId) {
    const data = await createSession($model.value.id);
    const result = await data?.json();
    if (result?.uuid) {
      changeFieldInLsModel({
        widgetId: $model.value.id,
        field: 'sessionId',
        newValue: result.uuid,
      });
    }
  }
};
