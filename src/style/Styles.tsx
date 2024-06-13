import { getDefaultStyle } from '@src/style/getDefaultStyle';
import { $model } from '@src/model';

export const Styles = () => {
  return (
    <>
      <style>{getDefaultStyle($model?.value)}</style>
      <style>{$model?.value?.fields?.formCssOverrides || ''}</style>
    </>
  );
};
