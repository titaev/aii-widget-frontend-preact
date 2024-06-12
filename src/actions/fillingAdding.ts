import { $isPreviewMode, $lsModel, $model } from '@src/model';
import { addFillingToSession } from '@src/api/addFillingToSession';
import { changeFieldInLsModel } from '@src/helpers/changeFieldInLsModel';
import { updateFillingInSession } from '@src/api/updateFillingInSession';
import { getReadyPrompt } from '@src/helpers/getReadyPrompt';
import { collectPayloadDataFromFields } from '@src/helpers/collectPayloadDataFromFields';

export const fillingAdding = async () => {
  if ($isPreviewMode.value) {
    return;
  }
  const fillingData = {
    filling_data: { aiFields: collectPayloadDataFromFields('aiFields') },
    prompt: getReadyPrompt(),
    ai_response: $lsModel.value.generationResult,
    version: $model.value.fields.version,
  };
  if (!$lsModel.value.fillingId) {
    const data = await addFillingToSession({
      widgetId: $model.value.id,
      sessionId: $lsModel.value.sessionId,
      fillingData,
    });
    const result = await data.json();
    changeFieldInLsModel({ widgetId: $model.value.id, field: 'fillingId', newValue: result.uuid });
  } else {
    await updateFillingInSession({
      widgetId: $model.value.id,
      sessionId: $lsModel.value.sessionId,
      fillingId: $lsModel.value.fillingId,
      fillingData,
    });
  }
};
