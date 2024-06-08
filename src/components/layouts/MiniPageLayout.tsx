import {$modalContent} from "@src/model";
import {ModalWrapper} from "@src/components/sections/ModalWrapper";
import {MINI_PAGE_CLASS, MINI_PAGE_WRAPPER_CLASS, WIDGET_CONTAINER_CLASS} from "@src/classNames";
import {WidgetTitle} from "@src/components/WidgetTitle";
import {AiForm} from "@src/components/sections/AiForm";

export const MiniPageLayout = () => {
    return <div className={`${WIDGET_CONTAINER_CLASS} ${MINI_PAGE_CLASS}`}>
        <WidgetTitle/>
        <div className={MINI_PAGE_WRAPPER_CLASS}>
            <AiForm/>
            <h3>answer</h3>
        </div>

        {!!$modalContent.value && <ModalWrapper/>}
    </div>
}