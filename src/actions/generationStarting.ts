import {
  $aiAnswer,
  $isDisabledAiForm,
  $isFirstPromptRequest,
  $isShowStopBtn,
  $model,
  $ws,
} from '@src/model';
import { wsMessageGetting } from '@src/actions/wsMessageGetting';
import { changeFieldInLsModel } from '@src/helpers/changeFieldInLsModel';
import { getReadyPrompt } from '@src/helpers/getReadyPrompt';

export const generationStarting = () => {
  $isDisabledAiForm.value = true;
  $isShowStopBtn.value = true;
  if ($isFirstPromptRequest.value) {
    $aiAnswer.value = '';

    changeFieldInLsModel({
      widgetId: $model.value.id,
      field: 'generationResult',
      newValue: '',
    });

    $isFirstPromptRequest.value = false;
  }

  $ws.value = new WebSocket(`${process.env.REACT_APP_FORM_SOCKET_URL}/${$model.value.id}`);

  $ws.value.onmessage = e => {
    wsMessageGetting(e.data);
  };
  $ws.value.onopen = e => {
    $ws.value.send(JSON.stringify({ text: getReadyPrompt() }));
    console.debug('websocket on [OPEN] connection', e);
  };
  $ws.value.onerror = e => {
    $ws.value = null;
    console.error('websocket on [ERROR]', e);
  };
  $ws.value.onclose = e => {
    $ws.value = null;
    console.debug('websocket on [CLOSED] connection', e);
  };
};
