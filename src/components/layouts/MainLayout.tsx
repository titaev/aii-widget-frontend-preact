import {Styles} from "@src/style/Styles";
import {PAGE_CONTAINER_CLASS} from "@src/classNames";
import {ReactNode} from "preact/compat";

export const MainLayout = ({children}: { children: ReactNode }) => {
    return <>
        <Styles/>
        <div className={PAGE_CONTAINER_CLASS}>
            {children}
        </div>
    </>
}