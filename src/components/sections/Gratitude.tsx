import { GRATITUDE_CLASS } from '@src/classNames';
import { $model } from '@src/model';

export const Gratitude = () => {
  //TODO добавить логику кастомного html
  return (
    <div className={GRATITUDE_CLASS}>{$model.value.preferences?.gratitude || 'Thank you!'}</div>
  );
};
