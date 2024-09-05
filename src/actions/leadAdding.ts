import { $isPreviewMode, $lsModel, $model } from '@src/model';
import { addLeadToSession } from '@src/api/addLeadToSession';
import { collectPayloadDataFromFields } from '@src/helpers/collectPayloadDataFromFields';
import { changeFieldInLsModel } from '@src/helpers/changeFieldInLsModel';
import { addLeadEmailAnswerStrategy } from '@src/api/AddLeadEmailAnswerStrategy';

export const leadAdding = async () => {
  if ($isPreviewMode.value) {
    return;
  }
  if (!$lsModel.value.leadIsCollected || $model.value.collect_lead_strategy === 'email_ai_answer') {
    const leadData = {
      //@ts-ignore
      email: $model.value.fields.leadsFields.find(item => item.fieldRef === '#email')?.value,
      //@ts-ignore
      phone: $model.value.fields.leadsFields.find(item => item.fieldRef === '#phone')?.value,
      additional_lead_data: {
        leadsFields: collectPayloadDataFromFields('leadsFields'),
      },
    };
    try {
      if ($model.value.collect_lead_strategy !== 'email_ai_answer') {
        await addLeadToSession({
          widgetId: $model.value.id,
          sessionId: $lsModel.value.sessionId,
          leadData,
        });
        changeFieldInLsModel({
          widgetId: $model.value.id,
          field: 'leadIsCollected',
          newValue: true,
        });
      } else {
        await addLeadEmailAnswerStrategy({
          widgetId: $model.value.id,
          sessionId: $lsModel.value.sessionId,
          fillingId: $lsModel.value.fillingId,
          leadData,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
};
