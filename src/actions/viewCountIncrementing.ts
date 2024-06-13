import { $isPreviewMode, $model } from '@src/model';
import { incrementViewCount } from '@src/api/incrementViewCount';

export const viewCountIncrementing = () => {
  if ($isPreviewMode.value) {
    return;
  }
  incrementViewCount($model.value.id);
};
