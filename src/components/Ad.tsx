import {$model} from "@src/model";
import {AD_SHOW_CLASS} from "@src/classNames";

export const Ad = () => {
    const isActive = $model.value.tariff_show_aii_ads_chat
    if (isActive) {
        return <div className={AD_SHOW_CLASS}>
            <span>Powered by</span>
            <a href="https://www.aii.cx/" target="_blank" style={{color: '#009A91', fontWeight: 'inherit'}}>Aii.cx</a>
        </div>
    }
    return null
}