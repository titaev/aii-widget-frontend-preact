import { $isCopyActive, $lsModel } from '@src/model';

export const handleCopyButton = () => {
  if (navigator?.clipboard) {
    navigator.clipboard.writeText($lsModel.value.generationResult);
    $isCopyActive.value = true;
    setTimeout(() => {
      $isCopyActive.value = false;
    }, 500);
  }
};
