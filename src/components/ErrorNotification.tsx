import {ERROR_NOTIFICATION_CLASS} from "@src/classNames";

export const ErrorNotification = ({text}: { text: string }) => {
    return <div className={ERROR_NOTIFICATION_CLASS}>{text}</div>
}