import {
  ERROR_CLASS,
  INPUT_ERROR_CLASS,
  TEXT_INPUT_CLASS,
  TEXT_INPUT_DESCRIPTION_CLASS,
  TEXT_INPUT_TITLE_CLASS,
  TEXT_INPUT_WRAPPER_CLASS,
} from '@src/classNames';

export const inputStyles = `
.${TEXT_INPUT_WRAPPER_CLASS}{
margin-bottom: calc(var(--root-size) * 0.2);
}
.${TEXT_INPUT_TITLE_CLASS}{
margin-bottom:calc(var(--root-size) * 0.05);
font-size: calc(var(--root-size) * 0.16);
font-weight: 400;
color: var(--input-title);
}
.${TEXT_INPUT_CLASS}{
box-sizing: border-box;
border: none;
outline: none;
border-bottom: 2px solid var(--input-border-bottom);
border-top: 1px solid var(--input-borders);
border-right: 1px solid var(--input-borders);
border-left: 1px solid var(--input-borders);
border-radius: 10px 10px 0 0;
width: 100%;
font-size: calc(var(--root-size) * 0.16);
font-family: inherit;
line-height: calc(var(--root-size) * 0.2);
height: calc(var(--root-size) * 0.44);
resize: none; 
overflow: hidden;
padding: calc(var(--root-size) * 0.12);
background-color: var(--input-bg);
position: relative;
transition: height 0ms;
}
.${TEXT_INPUT_CLASS}:hover{
background-color: var(--input-bg-hover);
}
.${TEXT_INPUT_CLASS}:focus{
box-shadow: inset 0px -2px var(--primary);
border-bottom: 2px solid var(--primary);
}
.${TEXT_INPUT_CLASS}:disabled{
pointer-events: none;
opacity: 0.5;
}
.${TEXT_INPUT_CLASS}.${ERROR_CLASS}{
background-color: var(--input-error-bg);
border-bottom: 1px solid var(--input-border-bottom-error);
border-top: 1px solid var(--input-borders-error);
border-right: 1px solid var(--input-borders-error);
border-left: 1px solid var(--input-borders-error);
}
.${TEXT_INPUT_CLASS}.${ERROR_CLASS}:hover{
background-color: var(--input-error-bg-hover);
}
.${TEXT_INPUT_CLASS}.${ERROR_CLASS}:focus{
box-shadow: inset 0px -2px var(--base-error);
}
.${INPUT_ERROR_CLASS}{
display: block;
margin-top: calc(var(--root-size) * 0.05);
color: var(--base-error);
font-size: calc(var(--root-size) * 0.1);
}
.${TEXT_INPUT_DESCRIPTION_CLASS}{
font-size:calc(var(--root-size) * 0.12);
color: var(--input-description);
margin-top: calc(var(--root-size) * 0.07);
}
`;
