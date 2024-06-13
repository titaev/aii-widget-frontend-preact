import {
  $isShowCopyBtn,
  $isShowGenerateMoreBtn,
  $isShowResetBtn,
  $isShowStopBtn,
  $ws,
} from '@src/model';

export const handleStopButton = () => {
  $ws.value?.close();
  $isShowCopyBtn.value = true;
  $isShowGenerateMoreBtn.value = false;
  $isShowResetBtn.value = true;
  $isShowStopBtn.value = false;
};
