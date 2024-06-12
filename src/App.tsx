import { useLayoutEffect } from 'preact/compat';
import { $isErrorModel, $isLoadingModel, $isPreviewMode, $model } from '@src/model';
import { incrementViewCount } from '@src/api/incrementViewCount';
import { checkAndSetLsModel } from '@src/helpers/checkAndSetLsModel';
import { ErrorNotification } from '@src/components/ErrorNotification';
import { locale } from '@src/locale';
import { MainLayout } from '@src/components/layouts/MainLayout';
import { Loader } from '@src/components/Loader';
import { MiniPageLayout } from '@src/components/layouts/MiniPageLayout';
import { PlainLayout } from '@src/components/layouts/PlainLayout';
import { PreviewLayout } from '@src/components/layouts/PreviewLayout';
import { modelGetting } from '@src/actions/modelGetting';

export const App = ({ widgetId, isPreviewMode }: { widgetId: string; isPreviewMode: boolean }) => {
  useLayoutEffect(() => {
    $isPreviewMode.value = isPreviewMode;
    checkAndSetLsModel(widgetId);
    if (!isPreviewMode) {
      incrementViewCount(widgetId); //TODO сделать intersection observer
      modelGetting(widgetId);
    }
  }, [isPreviewMode, widgetId]);

  if (isPreviewMode) {
    return <PreviewLayout widgetId={widgetId} />;
  }

  if ($isLoadingModel.value) {
    return (
      <MainLayout>
        <Loader />
      </MainLayout>
    );
  }

  if ($isErrorModel.value) {
    return (
      <MainLayout>
        <ErrorNotification text={locale.modelLoadErrorNotification} />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {$model.value.page_view === 'mini_page' && <MiniPageLayout />}
      {$model.value.page_view === 'plain_page' && <PlainLayout />}
    </MainLayout>
  );
};
