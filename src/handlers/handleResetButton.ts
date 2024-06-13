import { setDefaultAiAnswer } from '@src/helpers/setDefaultAiAnswer';
import { changeFieldInLsModel } from '@src/helpers/changeFieldInLsModel';
import {
  $isDisabledAiForm,
  $isFirstPromptRequest,
  $isShowCopyBtn,
  $isShowGenerateMoreBtn,
  $isShowResetBtn,
  $isShowStopBtn,
  $model,
  $plainContent,
  $ws,
} from '@src/model';

export const handleResetButton = () => {
  $isDisabledAiForm.value = false;

  $isFirstPromptRequest.value = true;

  $ws.value?.close();

  $isShowCopyBtn.value = false;
  $isShowGenerateMoreBtn.value = false;
  $isShowResetBtn.value = false;
  $isShowStopBtn.value = false;

  $plainContent.value = 'aiForm';

  changeFieldInLsModel({
    widgetId: $model.value.id,
    field: 'fillingId',
    newValue: null,
  });
  changeFieldInLsModel({
    widgetId: $model.value.id,
    field: 'generationResult',
    newValue: '',
  });

  setDefaultAiAnswer();
};
