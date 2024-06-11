import { $isDisabledAiForm, $isShowStopBtn } from '@src/model';

export const generationStarting = () => {
  $isDisabledAiForm.value = true;
  $isShowStopBtn.value = true;
};
