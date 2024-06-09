import { BUTTON_CLASS, GENERATE_BUTTON_WRAPPER_CLASS, SEND_BUTTON_CLASS } from '@src/classNames';
import { $model } from '@src/model';

export const SendButton = () => {
  return (
    <div className={GENERATE_BUTTON_WRAPPER_CLASS}>
      <button className={`${BUTTON_CLASS} ${SEND_BUTTON_CLASS}`}>
        {$model.value.fields.submitFormBtn.title || ''}
      </button>
    </div>
  );
};
