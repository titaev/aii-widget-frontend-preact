import {Styles} from "@src/style/Styles";
import {PAGE_CONTAINER_CLASS} from "@src/classNames";
import {ReactNode} from "preact/compat";
import {$modalContent} from "@src/model";
import {ModalWrapper} from "@src/components/sections/ModalWrapper";

export const MainLayout = ({children}: { children: ReactNode }) => {
    return <>
        <Styles/>
        <div className={PAGE_CONTAINER_CLASS}>
            {children}
            {!!$modalContent.value && <ModalWrapper/>}
        </div>
    </>
}