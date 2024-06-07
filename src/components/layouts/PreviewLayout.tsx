import {useEffect} from "preact/compat";
import {$isShowGratitude, $isShowLeadForm, $model} from "@src/model";
import {Gratitude} from "@src/components/parts/Gratitude";
import {LeadForm} from "@src/components/parts/LeadForm";
import {MiniPageLayout} from "@src/components/layouts/MiniPageLayout";
import {PlainLayout} from "@src/components/layouts/PlainLayout";

export const PreviewLayout = ({widgetId}: { widgetId: string }) => {
    useEffect(() => {
        const handleLeadForm = (e: any) => {
            $isShowLeadForm.value = e.detail.isOpened
        }
        const handleGratitude = (e: any) => {
            $isShowGratitude.value = e.detail.isOpened
        }
        const handleModelData = (e: any) => {
            $model.value = e.detail.data
        }
        document.addEventListener(`aii-cx-widget-${widgetId}-show-lead-form`, handleLeadForm)
        document.addEventListener(`aii-cx-widget-${widgetId}-show-gratitude`, handleGratitude)
        document.addEventListener(`aii-cx-widget-${widgetId}-set-model-data`, handleModelData)
        return () => {
            document.removeEventListener(`aii-cx-widget-${widgetId}-show-lead-form`, handleLeadForm)
            document.removeEventListener(`aii-cx-widget-${widgetId}-show-gratitude`, handleGratitude)
            document.removeEventListener(`aii-cx-widget-${widgetId}-set-model-data`, handleModelData)
        }
    }, [])
    if (!$model.value) {
        return null
    }
    if ($isShowGratitude.value) {
        return <Gratitude/>
    }
    if ($isShowLeadForm.value) {
        return <LeadForm/>
    }
    if ($model.value.page_view === 'mini_page') {
        return <MiniPageLayout/>
    }
    return <PlainLayout/>
}