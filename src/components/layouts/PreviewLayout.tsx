import { useEffect } from 'preact/compat';
import { $modalContent, $model } from '@src/model';
import { MiniPageLayout } from '@src/components/layouts/MiniPageLayout';
import { PlainLayout } from '@src/components/layouts/PlainLayout';
import { LeadForm } from '@src/components/sections/LeadForm';
import { Gratitude } from '@src/components/sections/Gratitude';

export const PreviewLayout = ({ widgetId }: { widgetId: string }) => {
  useEffect(() => {
    const handleLeadForm = (e: any) => {
      $modalContent.value = e.detail.isOpened ? 'leadForm' : '';
    };
    const handleGratitude = (e: any) => {
      $modalContent.value = e.detail.isOpened ? 'gratitude' : '';
    };
    const handleModelData = (e: any) => {
      $model.value = e.detail.data;
    };
    document.addEventListener(`aii-cx-widget-${widgetId}-show-lead-form`, handleLeadForm);
    document.addEventListener(`aii-cx-widget-${widgetId}-show-gratitude`, handleGratitude);
    document.addEventListener(`aii-cx-widget-${widgetId}-set-model-data`, handleModelData);
    return () => {
      document.removeEventListener(`aii-cx-widget-${widgetId}-show-lead-form`, handleLeadForm);
      document.removeEventListener(`aii-cx-widget-${widgetId}-show-gratitude`, handleGratitude);
      document.removeEventListener(`aii-cx-widget-${widgetId}-set-model-data`, handleModelData);
    };
  }, [widgetId]);
  if ($modalContent.value === 'leadForm') {
    return <LeadForm />;
  }
  if ($modalContent.value === 'gratitude') {
    return <Gratitude />;
  }
  if ($model?.value?.page_view === 'mini_page') {
    return <MiniPageLayout />;
  }
  if ($model?.value?.page_view === 'plain_page') {
    return <PlainLayout />;
  }
  return null;
};
