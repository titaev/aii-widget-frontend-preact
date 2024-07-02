/* eslint-disable max-len */
import {
  AD_SHOW_CLASS,
  ANSWER_CONTAINER_CLASS,
  DISABLED_CLASS,
  ERROR_NOTIFICATION_CLASS,
  FORM_CONTAINER_CLASS,
  GRATITUDE_CLASS,
  HEADER_TITLE_CLASS,
  IMAGE_FIELD_CLASS,
  LOADER_CLASS,
  MINI_PAGE_CLASS,
  MINI_PAGE_WRAPPER_CLASS,
  PAGE_CONTAINER_CLASS,
  WIDGET_CONTAINER_CLASS,
  WIDGET_TITLE_CLASS,
} from '@src/classNames';
import { calculateTextOnPrimaryColor } from '@src/helpers/calculateTextOnPrimaryColor';
import { answerStyles } from '@src/style/answerStyles';
import { buttonsStyles } from '@src/style/buttonsStyles';
import { formStyles } from '@src/style/formStyles';
import { inputStyles } from '@src/style/inputStyles';
import { modalStyles } from '@src/style/modalStyles';
import { ModelResponse } from '@src/types';
import { leadStyles } from '@src/style/leadStyles';
import { gratitudeStyles } from '@src/style/gratitudeStyles';

export const getDefaultStyle = function (model: ModelResponse) {
  const hue = model?.preferences?.primaryColor?.hsl?.h ?? 177;

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
font-size: calc(var(--root-size) * 0.32);
}
h2{
font-size: calc(var(--root-size) * 0.28);
}
h3{
font-size: calc(var(--root-size) * 0.24);
}
h4{
font-size: calc(var(--root-size) * 0.2);
}
h5{
font-size: calc(var(--root-size) * 0.18);
}
h6{
font-size: calc(var(--root-size) * 0.16);
}
.${PAGE_CONTAINER_CLASS}{
--hue: ${hue};
--shadow: 1px 1px 10px hsla(var(--hue), 100%, 5%, 0.2);
--primary:  ${model?.preferences?.primaryColor?.hex || 'hsla(var(--hue), 100%, 21%, 1)'};
--inverted-lightness-primary: ${calculateTextOnPrimaryColor(model?.preferences?.primaryColor?.hex)};
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

--root-size: 100px;

position: relative;
background: ${
    model?.preferences?.isBgTransparent
      ? 'transparent'
      : model?.preferences?.bgColor?.hex
        ? model?.preferences?.bgColor.hex
        : 'var(--main-bg-gradient)'
  } ;
color: var(--base-text);
padding: calc(var(--root-size) * 0.05);
font-family:${model?.preferences?.bodyFont || 'Montserrat'}, sans-serif;
font-weight: 400;
min-height: 100%;
}
${modalStyles}
${formStyles}
${leadStyles}
${gratitudeStyles}
${inputStyles}
${answerStyles}
${buttonsStyles}
.${HEADER_TITLE_CLASS}{
margin-bottom: calc(var(--root-size) * 0.2);
}
.${WIDGET_CONTAINER_CLASS}{
margin: 0 auto;
max-width: calc(var(--root-size) * 7);
padding: calc(var(--root-size) * 0.05);
container-type: inline-size;
}
.${WIDGET_CONTAINER_CLASS}.${MINI_PAGE_CLASS}{
max-width: calc(var(--root-size) * 12);
}
.${WIDGET_TITLE_CLASS}{
text-align: center;
padding: calc(var(--root-size) * 0.4) 0;
font-size: calc(var(--root-size) * 0.32);
font-weight: 600;
margin-bottom: calc(var(--root-size) * 0.2);
color: var(--widget-title-color);
font-family:${model?.preferences?.headerFont || 'Montserrat'}, sans-serif;
}
.${GRATITUDE_CLASS}{
padding: calc(var(--root-size) * 0.3);
color: var(--inverted-lightness-primary);
background-color: var(--primary);
max-width: calc(var(--root-size) * 3);
width: 100%;
border-radius: calc(var(--root-size) * 0.2);
display: flex;
align-items: center;
justify-content: center;
text-align: center;
font-size: calc(var(--root-size) * 0.24);
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
padding-top: calc(var(--root-size) * 0.4);
column-gap: calc(var(--root-size) * 0.05); 
font-weight: bold; 
font-size: calc(var(--root-size) * 0.12);
opacity: 0.2;
}
.${AD_SHOW_CLASS}:hover{
opacity: 1;
}
.${IMAGE_FIELD_CLASS}{
display: flex;
margin-bottom: calc(var(--root-size) * 0.2);
}
.${ERROR_NOTIFICATION_CLASS}{
position: absolute;
top:0;
right:0;
bottom:0;
left:0;
display: flex;
align-items: center;
justify-content: center;
background-color: var(--base-error);
color: var(--base-light);
opacity: 0.7;
height: 100%;
}
.${LOADER_CLASS}{
position:absolute;
background-color: gray;
top:0;
right:0;
bottom:0;
left:0;
}
.${LOADER_CLASS}:after{
content:'';
position:absolute;
background: linear-gradient(90deg,transparent,lightgray,transparent);
animation-name: ping-pong;
animation-timing-function: linear;
animation-duration: 2s;
animation-direction: alternate;
animation-iteration-count: infinite;
height: 100%;
width: 50%;
opacity: 0.5;
}

@container (max-width: 700px) {
.${WIDGET_TITLE_CLASS}{
padding: calc(var(--root-size) * 0.05);
font-size: calc(var(--root-size) * 0.24);
}
.${MINI_PAGE_WRAPPER_CLASS}{
flex-direction: column;
row-gap: calc(var(--root-size) * 0.3);
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
@keyframes ping-pong {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
}
  `;
};
