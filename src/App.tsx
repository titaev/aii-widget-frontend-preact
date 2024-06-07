import {useEffect} from "preact/compat";
import {Styles} from "@src/style/Styles";
import {getModel} from "@src/api/getModel";
import {usePreviewEventsHandlers} from "@src/hooks/usePreviewEventsHandlers";
import {$isErrorModel, $isLoadingModel, $isPreviewMode} from "@src/model";
import {Main} from "@src/Main";
import {incrementViewCount} from "@src/api/incrementViewCount";
import {checkAndSetLsModel} from "@src/helpers/checkAndSetLsModel";

export const App = ({widgetId, isPreviewMode}: { widgetId: number, isPreviewMode: boolean }) => {


    useEffect(() => {
        $isPreviewMode.value = isPreviewMode
        if (!isPreviewMode) {
            checkAndSetLsModel(widgetId)
            incrementViewCount(widgetId) //TODO сделать intersection observer
            getModel(widgetId)
        }
    }, []);

    const {showLeadForm, showGratitude} = usePreviewEventsHandlers(isPreviewMode, widgetId)
    if ($isErrorModel.value) {
        return <div>Sorry.......</div>
    }
    return <>
        <Styles/>
        {$isLoadingModel.value ? <div>Is Loading...</div> : <Main/>}
        {isPreviewMode && <div>Preview mode</div>}
        {showLeadForm && <div>showLeadForm</div>}
    </>
};