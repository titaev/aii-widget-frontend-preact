import {$modalContent} from "@src/model";
import {ModalWrapper} from "@src/components/sections/ModalWrapper";

export const PlainLayout = () => {
    return <>
        <div>PlainLayout</div>
        {!!$modalContent.value && <ModalWrapper/>}
    </>
}