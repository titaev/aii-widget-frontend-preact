import { $lsModel, $model } from '@src/model';
import { addLeadToSession } from '@src/api/addLeadToSession';
import { collectPayloadDataFromFields } from '@src/helpers/collectPayloadDataFromFields';
import { changeFieldInLsModel } from '@src/helpers/changeFieldInLsModel';

export const leadAdding = async () => {
  if (!$lsModel.value.leadIsCollected) {
    const leadData = {
      email:
        //@ts-ignore
        $model.value.fields.leadsFields.find(item => item.fieldRef === '#email').value,
      phone:
        //@ts-ignore
        $model.value.fields.leadsFields.find(item => item.fieldRef === '#phone').value,
      additional_lead_data: {
        leadsFields: collectPayloadDataFromFields('leadsFields'),
      },
    };
    try {
      await addLeadToSession({
        widgetId: $model.value.id,
        sessionId: $lsModel.value.sessionId,
        leadData,
      });
      changeFieldInLsModel({ widgetId: $model.value.id, field: 'leadIsCollected', newValue: true });
    } catch (er) {}
  }
};
