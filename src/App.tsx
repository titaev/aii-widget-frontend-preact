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
import { WidgetMode } from '@src/types';
import { PreviewLayout } from '@src/components/layouts/PreviewLayout';
import { modelGetting } from '@src/actions/modelGetting';

export const App = ({ widgetId, mode }: { widgetId: string; mode: WidgetMode }) => {
  useLayoutEffect(() => {
    $isPreviewMode.value = mode !== 'normal';
    checkAndSetLsModel(widgetId);
    if (mode === 'normal') {
      incrementViewCount(widgetId); //TODO сделать intersection observer
      modelGetting(widgetId);
    }
  }, [mode, widgetId]);

  if (mode !== 'normal') {
    return <PreviewLayout widgetId={widgetId} mode={mode} />;
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
