import { useEffect } from 'preact/compat';
import { $model } from '@src/model';
import { MiniPageLayout } from '@src/components/layouts/MiniPageLayout';
import { PlainLayout } from '@src/components/layouts/PlainLayout';
import { MainLayout } from '@src/components/layouts/MainLayout';
import { WidgetMode } from '@src/types';
import { Loader } from '@src/components/Loader';
import { LeadForm } from '@src/components/sections/LeadForm';
import { Gratitude } from '@src/components/sections/Gratitude';

export const PreviewLayout = ({ widgetId, mode }: { widgetId: string; mode: WidgetMode }) => {
  useEffect(() => {
    const handleModelData = (e: any) => {
      $model.value = e.detail.data;
    };
    document.addEventListener(`aii-cx-widget-${widgetId}-set-model-data`, handleModelData);
    return () => {
      document.removeEventListener(`aii-cx-widget-${widgetId}-set-model-data`, handleModelData);
    };
  }, [widgetId]);
  // if ($modalContent.value === 'leadForm') {
  //   return <LeadForm />;
  // }
  // if ($modalContent.value === 'gratitude') {
  //   return <Gratitude />;
  // }
  if (!$model.value) {
    return (
      <MainLayout>
        <Loader />
      </MainLayout>
    );
  }

  if (mode === 'leadFormPreview') {
    return (
      <MainLayout>
        <LeadForm />
      </MainLayout>
    );
  }

  if (mode === 'gratitudePreview') {
    return (
      <MainLayout>
        <Gratitude />
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
