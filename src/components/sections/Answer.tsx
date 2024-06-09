import {
  $isShowCopyBtn,
  $isShowGenerateMoreBtn,
  $isShowResetBtn,
  $isShowStopBtn,
  $lsModel,
  $model,
} from '@src/model';
import {
  ANSWER_BUTTONS_WRAPPER_CLASS,
  ANSWER_CLASS,
  ANSWER_CONTAINER_CLASS,
  ANSWER_WRAPPER_CLASS,
  BUTTON_CLASS,
  COPY_BUTTON_CLASS,
  MINI_PAGE_CLASS,
  MORE_BUTTON_CLASS,
  RESET_BUTTON_CLASS,
  STOP_BUTTON_CLASS,
} from '@src/classNames';
import { locale } from '@src/locale';
import { DEFAULT_CTA_TEXT } from '@src/constants';

export const Answer = () => {
  const string =
    $lsModel.value.generationResult || $model.value.preferences?.miniPageCta || DEFAULT_CTA_TEXT;

  const isMiniPage = $model.value.page_view === 'mini_page';
  return (
    <div className={`${ANSWER_CONTAINER_CLASS} ${isMiniPage ? MINI_PAGE_CLASS : ''}`}>
      <div className={ANSWER_WRAPPER_CLASS}>
        <div className={ANSWER_CLASS} dangerouslySetInnerHTML={{ __html: string }}></div>
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
      </div>
    </div>
  );
};
