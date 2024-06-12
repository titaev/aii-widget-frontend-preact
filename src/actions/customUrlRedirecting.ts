import { collectPayloadDataFromFields } from '@src/helpers/collectPayloadDataFromFields';
import { convertLeadDataToQueryParams } from '@src/helpers/convertLeadDataToQueryParams';
import { $isPreviewMode, $model } from '@src/model';

export const customUrlRedirecting = () => {
  if ($isPreviewMode.value) {
    return;
  }
  if ($model.value.preferences.enableRedirectUrl) {
    const leadData = collectPayloadDataFromFields('leadsFields');
    const queryParams = convertLeadDataToQueryParams(leadData);
    window.location.replace(`${$model.value.preferences.redirectUrl}?${queryParams}`);
  }
};
