import { LSModel } from '@src/types';
import { $lsModel } from '@src/model';

export const changeFieldInLsModel = function ({
  widgetId,
  field,
  newValue,
}: {
  widgetId: string;
  field: keyof LSModel;
  newValue: string | null | boolean;
}) {
  $lsModel.value[field] = newValue as never;
  localStorage.setItem(`aii-cx-widget-${widgetId}`, JSON.stringify($lsModel.value));
};
