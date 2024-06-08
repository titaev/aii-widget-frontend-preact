import {FORM_CONTAINER_CLASS, MINI_PAGE_CLASS} from "@src/classNames";
import {$model} from "@src/model";
import {Ad} from "@src/components/Ad";
import {GenerateButton} from "@src/components/GenerateButton";

export const AiForm = () => {
    const isMiniPage = $model.value.page_view === 'mini_page'
    return <div className={`${FORM_CONTAINER_CLASS} ${isMiniPage ? MINI_PAGE_CLASS : ''}`}>
        <form noValidate={true}>
            {$model.value.fields.aiFields.map(item => {
                return <div>field {item.type}</div>
            })}
            <GenerateButton/>
            <Ad/>
        </form>
    </div>
}