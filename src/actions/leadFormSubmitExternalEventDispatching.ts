import { $isPreviewMode, $lsModel, $model } from '@src/model';
import { SUBMIT_LEAD_FORM_EVENT } from '@src/constants';

export const leadFormSubmitExternalEventDispatching = () => {
  if ($isPreviewMode.value) {
    return;
  }
  const customEvent = new CustomEvent(
    `aii-cx-widget-${$model.value.id}-${SUBMIT_LEAD_FORM_EVENT}`,
    {
      detail: {
        collectLeadStrategy: $model.value.collect_lead_strategy,
        aiGenerationResult: $lsModel.value.generationResult,
        aiFields: 1, //collectPayloadDataFromFields(this.aiFields), TODO
        leadsFields: 1, //collectPayloadDataFromFields(this.leadsFields),
      },
    },
  );
  document.dispatchEvent(customEvent);
};
