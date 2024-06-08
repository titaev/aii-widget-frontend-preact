import {WIDGET_TITLE_CLASS} from "@src/classNames";
import {$model} from "@src/model";

export const WidgetTitle = () => {
    return <h2 className={WIDGET_TITLE_CLASS}>{$model.value.name}</h2>
}