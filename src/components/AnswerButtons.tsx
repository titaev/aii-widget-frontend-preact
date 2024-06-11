import {
  ANSWER_BUTTONS_WRAPPER_CLASS,
  BUTTON_CLASS,
  COPY_BUTTON_CLASS,
  MORE_BUTTON_CLASS,
  RESET_BUTTON_CLASS,
  STOP_BUTTON_CLASS,
} from '@src/classNames';
import {
  $isShowCopyBtn,
  $isShowGenerateMoreBtn,
  $isShowResetBtn,
  $isShowStopBtn,
} from '@src/model';
import { locale } from '@src/locale';

export const AnswerButtons = () => {
  return (
    <div className={ANSWER_BUTTONS_WRAPPER_CLASS}>
      {$isShowCopyBtn.value && (
        <button className={`${BUTTON_CLASS} ${COPY_BUTTON_CLASS}`}>{locale.copy}</button>
      )}
      {$isShowStopBtn.value && (
        <button className={`${BUTTON_CLASS} ${STOP_BUTTON_CLASS}`}>{locale.stop}</button>
      )}
      {$isShowGenerateMoreBtn.value && (
        <button className={`${BUTTON_CLASS} ${MORE_BUTTON_CLASS}`}>{locale.more}</button>
      )}
      {$isShowResetBtn.value && (
        <button className={`${BUTTON_CLASS} ${RESET_BUTTON_CLASS}`}>{locale.reset}</button>
      )}
    </div>
  );
};
