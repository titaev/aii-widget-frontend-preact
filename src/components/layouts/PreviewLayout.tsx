import { useEffect, useState } from 'preact/compat';
import { $model } from '@src/model';
import { MiniPageLayout } from '@src/components/layouts/MiniPageLayout';
import { PlainLayout } from '@src/components/layouts/PlainLayout';
import { MainLayout } from '@src/components/layouts/MainLayout';
import { Loader } from '@src/components/Loader';
import { LeadForm } from '@src/components/sections/LeadForm';
import { Gratitude } from '@src/components/sections/Gratitude';
import { transformModel } from '@src/helpers/transformModel';
import { useSetFont } from '@src/hooks/useSetFont';
import { setDefaultAiAnswer } from '@src/helpers/setDefaultAiAnswer';

export const PreviewLayout = ({ widgetId }: { widgetId: string }) => {
  const [mode, setMode] = useState('whole');
  useSetFont();
  useEffect(() => {
    const handleModelData = (e: any) => {
      $model.value = transformModel(e.detail.data);
      setDefaultAiAnswer();
    };
    const handleMode = (e: any) => {
      setMode(e.detail.mode);
    };
    document.addEventListener(`aii-cx-widget-${widgetId}-change-preview-mode`, handleMode);
    document.addEventListener(`aii-cx-widget-${widgetId}-set-model-data`, handleModelData);
    return () => {
      document.removeEventListener(`aii-cx-widget-${widgetId}-change-preview-mode`, handleMode);
      document.removeEventListener(`aii-cx-widget-${widgetId}-set-model-data`, handleModelData);
    };
  }, [widgetId]);

  if (!$model.value) {
    return (
      <MainLayout>
        <Loader />
      </MainLayout>
    );
  }

  if (mode === 'leadForm') {
    return (
      <MainLayout>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <LeadForm />
        </div>
      </MainLayout>
    );
  }

  if (mode === 'gratitude') {
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
