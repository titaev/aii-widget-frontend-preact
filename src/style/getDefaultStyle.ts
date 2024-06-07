import {
  AD_SHOW_CLASS,
  ANSWER_CONTAINER_CLASS,
  DISABLED_CLASS,
  FORM_CONTAINER_CLASS,
  GRATITUDE_CLASS,
  HEADER_TITLE_CLASS,
  IMAGE_FIELD_CLASS,
  MINI_PAGE_CLASS,
  MINI_PAGE_WRAPPER_CLASS,
  PAGE_CONTAINER_CLASS,
  WIDGET_CONTAINER_CLASS,
  WIDGET_TITLE_CLASS,
} from '@src/classNames'
import {calculateTextOnPrimaryColor} from '@src/helpers/calculateTextOnPrimaryColor'
import {answerStyles} from '@src/style/answerStyles'
import {buttonsStyles} from '@src/style/buttonsStyles'
import {formStyles} from '@src/style/formStyles'
import {inputStyles} from '@src/style/inputStyles'
import {modalStyles} from '@src/style/modalStyles'
import {ModelResponse} from '@src/types'

export const getDefaultStyle = function (model: ModelResponse) {
    const hue = model?.preferences?.primaryColor?.hsl?.h ?? 177

    return `
:host{all: initial !important; height: 100% !important; overflow: auto !important;}
* {
margin: 0;
padding: 0;
box-sizing: border-box;
transition: 300ms;
scroll-behavior: smooth;
}
::selection{
background-color: var(--primary);
color: var(--inverted-lightness-primary);
}
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background: var(--scrollbar-track);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb);
  border-radius: 5px;
}
h1{
font-size: 32px;
}
h2{
font-size: 28px;
}
h3{
font-size: 24px;
}
h4{
font-size: 20px;
}
h5{
font-size: 18px;
}
h6{
font-size: 16px;
}
.${PAGE_CONTAINER_CLASS}{
--hue: ${hue};
--shadow: 1px 1px 10px hsla(var(--hue), 100%, 5%, 0.2);
--primary:  ${
        model?.preferences?.primaryColor?.hex || 'hsla(var(--hue), 100%, 21%, 1)'
    };
--inverted-lightness-primary: ${calculateTextOnPrimaryColor(
        model?.preferences?.primaryColor?.hex
    )};
--base-error: red;
--base-light: hsla(var(--hue), 100%, 99%, 1);
--base-text: hsla(var(--hue), 100%, 5%, 1);
--modal-overlay: hsla(var(--hue), 0%, 5%, 0.5);

--main-bg-gradient: linear-gradient(180deg, hsla(var(--hue), 100%, 90%, 0.3) 0%, hsla(var(--hue), 100%, 95%, 0.35) 50%, hsla(var(--hue), 100%, 70%, 0) 100%);

--scrollbar-track: hsla(var(--hue), 0%, 5%, 0.5);
--scrollbar-thumb: hsla(var(--hue), 0%, 5%, 1);

--input-title: hsla(var(--hue), 100%, 5%, 0.7);
--input-description: hsla(var(--hue), 100%, 5%, 0.5);
--input-bg: hsla(var(--hue), 20%, 98%, 0.7);
--input-bg-hover: hsla(var(--hue), 20%, 92%, 1);
--input-error-bg: hsla(0, 100%, 98%, 1);
--input-error-bg-hover: hsla(0, 100%, 96%, 1);
--input-border-bottom: hsla(var(--hue), 20%, 75%, 1);
--input-border-bottom-error: hsla(0, 100%, 50%, 1);
--input-borders: hsla(var(--hue), 20%, 75%, 0.5);
--input-borders-error: hsla(0, 100%, 50%, 0.5);

--table-border: hsla(var(--hue), 20%, 50%, .5);

--ai-form-shadow: 2px 2px 10px rgba(0,0,0,.1);
--ai-form-bg: hsla(var(--hue), 100%, 20%, 0.08) ;

--answer-border: hsla(var(--hue), 20%, 70%, 1);

--widget-title-color:  hsla(var(--hue), 80%, 25%, 1);

--reset-btn: hsla(0, 100%, 45%, 1);

position: relative;
background: ${
        model?.preferences?.isBgTransparent
            ? 'transparent'
            : model?.preferences?.bgColor?.hex
                ? model?.preferences?.bgColor.hex
                : 'var(--main-bg-gradient)'
    } ;
color: var(--base-text);
padding: 5px;
font-family:${model?.preferences?.bodyFont || 'Montserrat'}, sans-serif;
font-weight: 400;
min-height: 100%;
}
${modalStyles}
${formStyles}
${inputStyles}
${answerStyles}
${buttonsStyles}
.${HEADER_TITLE_CLASS}{
margin-bottom: 20px;

}
.${WIDGET_CONTAINER_CLASS}{
margin: 0 auto;
max-width: 700px;
padding: 5px;
container-type: inline-size;
}
.${WIDGET_CONTAINER_CLASS}.${MINI_PAGE_CLASS}{
max-width: 1200px;
}
.${WIDGET_TITLE_CLASS}{
text-align: center;
padding: 40px 0;
font-size: 32px;
font-weight: 600;
margin-bottom: 20px;
color: var(--widget-title-color);
font-family:${model?.preferences?.headerFont || 'Montserrat'}, sans-serif;
}
.${GRATITUDE_CLASS}{
padding: 30px;
color: var(--inverted-lightness-primary);
background-color: var(--primary);
max-width: 300px;
width: 100%;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
font-size: 24px;
margin: 0 auto;
animation: appear 200ms 1 ease-out 0s forwards;
}
.${MINI_PAGE_WRAPPER_CLASS}{
width: 100%;
display: flex;
justify-content: space-between;
}
.${DISABLED_CLASS}{
opacity: 0.7;
pointer-events: none;
}
.${AD_SHOW_CLASS}{
width: 100%; 
display: flex; 
justify-content: center; 
margin-top: auto; 
padding-top: 40px; 
column-gap: 5px; 
font-weight: bold; 
font-size: 12px;
opacity: 0.2;
}
.${AD_SHOW_CLASS}:hover{
opacity: 1;
}
.${IMAGE_FIELD_CLASS}{
display: flex;
margin-bottom: 20px;
}

@container (max-width: 700px) {
.${WIDGET_TITLE_CLASS}{
padding: 5px;
font-size: 24px;
}
.${MINI_PAGE_WRAPPER_CLASS}{
flex-direction: column;
row-gap: 30px;
}
.${FORM_CONTAINER_CLASS}.${MINI_PAGE_CLASS}{
width: 100%;
}
.${ANSWER_CONTAINER_CLASS}.${MINI_PAGE_CLASS}{
width: 100%;
}
}

@keyframes appear {
  from {
    transform: translateY(-50%) scale(0.8);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}
  `
}
