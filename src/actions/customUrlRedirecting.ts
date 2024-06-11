import { collectPayloadDataFromFields } from '@src/helpers/collectPayloadDataFromFields';
import { convertLeadDataToQueryParams } from '@src/helpers/convertLeadDataToQueryParams';
import { $model } from '@src/model';

export const customUrlRedirecting = () => {
  if ($model.value.preferences.enableRedirectUrl) {
    const leadData = collectPayloadDataFromFields('leadsFields');
    const queryParams = convertLeadDataToQueryParams(leadData);
    window.location.replace(`${$model.value.preferences.redirectUrl}?${queryParams}`);
  }
};
