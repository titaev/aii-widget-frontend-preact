import {
  BUTTON_CLASS,
  GENERATE_BUTTON_CLASS,
  GENERATE_BUTTON_WRAPPER_CLASS,
} from '@src/classNames';
import { $model } from '@src/model';

export const GenerateButton = () => {
  return (
    <div className={GENERATE_BUTTON_WRAPPER_CLASS}>
      <button type='submit' className={`${BUTTON_CLASS} ${GENERATE_BUTTON_CLASS}`}>
        {$model.value.fields.runAiBtn.title || ''}
      </button>
    </div>
  );
};
