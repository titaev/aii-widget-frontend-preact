import { SocketInboxMessage } from '@src/types';
import {
  $aiAnswer,
  $aiAnswerObfuscated,
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
import { sessionCreating } from '@src/actions/sessionCreating';

export const wsMessageGetting = async (data: string) => {
  const message: SocketInboxMessage = JSON.parse(data);

  if (message.type === 'start') {
    if ($model.value.collect_lead_strategy !== 'email_ai_answer') {
      $isShowCopyBtn.value = false;
      $isShowGenerateMoreBtn.value = false;
      $isShowResetBtn.value = false;
      $isShowStopBtn.value = true;
    }
  }
  if (message.type === 'stream') {
    if ($model.value.collect_lead_strategy !== 'email_ai_answer') {
      changeFieldInLsModel({
        widgetId: $model.value.id,
        field: 'generationResult',
        newValue: ($lsModel.value.generationResult += message.message),
      });
    }

    $aiAnswer.value += message.message;
  }
  if (message.type === 'stream-obfuscated') {
    $aiAnswerObfuscated.value += message.message;
  }
  if (message.type === 'end') {
    if ($model.value.collect_lead_strategy !== 'email_ai_answer') {
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
    } else {
      $isShowResetBtn.value = true;
    }

    if (
      (!$lsModel.value.leadIsCollected &&
        $model.value.fields.enableLeads &&
        $model.value.collect_lead_strategy === 'after_ai_answer') ||
      $model.value.collect_lead_strategy === 'email_ai_answer'
    ) {
      leadFormOpening();
    }
    if ($model.value.collect_lead_strategy !== 'email_ai_answer') {
      await sessionCreating();
      fillingAdding();
    }
  }
};
