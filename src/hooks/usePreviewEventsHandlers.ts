import {useEffect, useState} from "preact/compat";

export const usePreviewEventsHandlers = (isPreviewMode: boolean, widgetId: number) => {
    const [showLeadForm, setShowLeadForm] = useState(false)
    const [showGratitude, setShowGratitude] = useState(false)
    useEffect(() => {
        const handleLeadForm = (e: any) => {
            console.log('handleLeadForm')
            setShowLeadForm(e.detail.isOpened)
        }
        const handleGratitude = (e: any) => {
            setShowGratitude(e.detail.isOpened)
        }
        if (isPreviewMode) {
            document.addEventListener(`aii-cx-widget-${widgetId}-show-lead-form`, handleLeadForm)
            document.addEventListener(`aii-cx-widget-${widgetId}-show-gratitude`, handleGratitude)
        }
        return () => {
            if (isPreviewMode) {
                document.removeEventListener(`aii-cx-widget-${widgetId}-show-lead-form`, handleLeadForm)
                document.removeEventListener(`aii-cx-widget-${widgetId}-show-gratitude`, handleGratitude)
            }
        }
    }, [])
    return {showLeadForm, showGratitude}
}