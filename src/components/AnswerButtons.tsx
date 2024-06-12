import {
  ANSWER_BUTTONS_WRAPPER_CLASS,
  BUTTON_CLASS,
  COPIED_CLASS,
  COPY_BUTTON_CLASS,
  MORE_BUTTON_CLASS,
  RESET_BUTTON_CLASS,
  STOP_BUTTON_CLASS,
} from '@src/classNames';
import {
  $isCopyActive,
  $isShowCopyBtn,
  $isShowGenerateMoreBtn,
  $isShowResetBtn,
  $isShowStopBtn,
  $model,
} from '@src/model';
import { locale } from '@src/locale';
import { handleResetButton } from '@src/controllers/handleResetButton';
import { handleCopyButton } from '@src/controllers/handleCopyButton';
import { handleMoreButton } from '@src/controllers/handleMoreButton';
import { handleStopButton } from '@src/controllers/handleStopButton';

export const AnswerButtons = () => {
  const isShowButtonsSection =
    $isShowCopyBtn.value ||
    $isShowStopBtn.value ||
    $isShowGenerateMoreBtn.value ||
    $isShowResetBtn.value;

  return isShowButtonsSection ? (
    <div className={ANSWER_BUTTONS_WRAPPER_CLASS}>
      {$isShowCopyBtn.value && (
        <button
          onClick={handleCopyButton}
          className={`${BUTTON_CLASS} 
          ${COPY_BUTTON_CLASS} 
          ${$isCopyActive.value ? COPIED_CLASS : ''}`}
        >
          {locale.copy}
        </button>
      )}
      {$isShowStopBtn.value && (
        <button onClick={handleStopButton} className={`${BUTTON_CLASS} ${STOP_BUTTON_CLASS}`}>
          {locale.stop}
        </button>
      )}
      {$isShowGenerateMoreBtn.value && $model.value.fields.enableGenerateMoreBtn && (
        <button onClick={handleMoreButton} className={`${BUTTON_CLASS} ${MORE_BUTTON_CLASS}`}>
          {locale.more}
        </button>
      )}
      {$isShowResetBtn.value && (
        <button onClick={handleResetButton} className={`${BUTTON_CLASS} ${RESET_BUTTON_CLASS}`}>
          {locale.reset}
        </button>
      )}
    </div>
  ) : null;
};
