import { $isPreviewMode } from '@src/model';

export const fillingAdding = async () => {
  if ($isPreviewMode.value) {
    return;
  }
};
