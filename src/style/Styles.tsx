import {getDefaultStyle} from '@src/style/getDefaultStyle'
import {useEffect} from "preact/compat";
import {$model} from "@src/model";

export const Styles = () => {
    useEffect(() => {
        const styleTag = document.createElement('style')
        styleTag.textContent = `@import url('https://fonts.googleapis.com/css2?family=${
            $model?.value?.preferences?.bodyFont || 'Montserrat'
        }:wght@400;600&family=${
            $model?.value?.preferences?.headerFont || 'Montserrat'
        }:wght@600&display=swap');`
        document.head.appendChild(styleTag)
    }, [])

    return <>
        <style>
            {getDefaultStyle($model?.value)}
        </style>
        <style>
            {$model?.value?.fields?.formCssOverrides || ''}
        </style>
    </>

}
