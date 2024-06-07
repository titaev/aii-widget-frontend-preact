import {useEffect, useState} from "preact/compat";
import {Styles} from "@src/style/Styles";

export const App = ({widgetId}: { widgetId: number }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    useEffect(() => {
        const handleModalIsOpen = () => {
            setModalIsOpen(true)
        }
        document.addEventListener(`aii-cx-widget-${widgetId}-open-modal`, handleModalIsOpen)
        return () => {
            document.removeEventListener(`aii-cx-widget-${widgetId}-open-modal`, handleModalIsOpen)
        }
    }, [])
    return <>
        <Styles/>
        <h1>{widgetId}</h1>
        {modalIsOpen && <div>Modal Is Open</div>}
    </>
};