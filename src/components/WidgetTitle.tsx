import { WIDGET_TITLE_CLASS } from '@src/classNames';
import { $model } from '@src/model';

export const WidgetTitle = () => {
  const title = $model.value.name;
  return title ? <h2 className={WIDGET_TITLE_CLASS}>{title}</h2> : null;
};
