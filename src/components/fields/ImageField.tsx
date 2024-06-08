import {ImageFieldType} from "@src/types";
import {IMAGE_FIELD_CLASS} from "@src/classNames";

const alignMap = {
    stretch: 'stretch',
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
}
export const ImageField = ({fieldData}: { fieldData: ImageFieldType }) => {
    const src = fieldData.image?.url ||
        `${process.env.APP_URL}/assets/imagePlaceholder.jpg`
    const imageInnerWidth =
        fieldData.align === 'stretch'
            ? '100%'
            : fieldData.width
                ? `${+fieldData.width}%`
                : '30%'

    return <div className={IMAGE_FIELD_CLASS} style={{justifyContent: `${alignMap[fieldData.align]};`}}>
        <img src={src} alt="image" style={{width: `${imageInnerWidth}`}}/>
    </div>
}