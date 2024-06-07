import {$lsModel} from "@src/model";

export const checkAndSetLsModel = (widgetId: string) => {
    const LSModelString = localStorage.getItem(`aii-cx-widget-${widgetId}`)
    if (LSModelString) {
        $lsModel.value = JSON.parse(LSModelString)
    } else {
        $lsModel.value = {
            sessionId: null,
            fillingId: null,
            leadIsCollected: false,
            generationResult: '',
        }
        localStorage.setItem(`aii-cx-widget-${widgetId}`, JSON.stringify($lsModel.value))
    }
}