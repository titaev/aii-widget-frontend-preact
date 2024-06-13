import { SocketInboxMessage } from '@src/types';
import {
  $aiAnswer,
  $isShowCopyBtn,
  $isShowGenerateMoreBtn,
  $isShowResetBtn,
  $isShowStopBtn,
  $lsModel,
  $model,
} from '@src/model';
import { changeFieldInLsModel } from '@src/helpers/changeFieldInLsModel';
import { fillingAdding } from '@src/actions/fillingAdding';
import { leadFormOpening } from '@src/actions/leadFormOpening';

export const wsMessageGetting = async (data: string) => {
  const message: SocketInboxMessage = JSON.parse(data);

  if (message.type === 'start') {
    $isShowCopyBtn.value = false;
    $isShowGenerateMoreBtn.value = false;
    $isShowResetBtn.value = false;
    $isShowStopBtn.value = true;
  }
  if (message.type === 'stream') {
    changeFieldInLsModel({
      widgetId: $model.value.id,
      field: 'generationResult',
      newValue: ($lsModel.value.generationResult += message.message),
    });
    $aiAnswer.value += message.message;
  }
  if (message.type === 'end') {
    $isShowStopBtn.value = false;
    $isShowResetBtn.value = true;
    $isShowGenerateMoreBtn.value = true;
    $isShowCopyBtn.value = true;

    $aiAnswer.value += '\n\n---\n\n';
    changeFieldInLsModel({
      widgetId: $model.value.id,
      field: 'generationResult',
      newValue: ($lsModel.value.generationResult += '\n\n---\n\n'),
    });

    if (
      !$lsModel.value.leadIsCollected &&
      $model.value.fields.enableLeads &&
      $model.value.collect_lead_strategy === 'after_ai_answer'
    ) {
      leadFormOpening();
    }

    fillingAdding();
  }
};
