import {
  ERROR_CLASS,
  TEXT_INPUT_CLASS,
  TEXT_INPUT_DESCRIPTION_CLASS,
  TEXT_INPUT_TITLE_CLASS,
  TEXT_INPUT_WRAPPER_CLASS,
} from '@src/classNames'

export const inputStyles = `
.${TEXT_INPUT_WRAPPER_CLASS}{
margin-bottom: 20px;
}
.${TEXT_INPUT_TITLE_CLASS}{
margin-bottom: 5px;
font-size: 16px;
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
font-size: 16px;
font-family: inherit;
line-height: 20px;
height: 44px;
resize: none; 
overflow: hidden;
padding: 12px;
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
.${TEXT_INPUT_CLASS} + div{
display: none;
}
.${TEXT_INPUT_CLASS}.${ERROR_CLASS} + div{
display: block;
margin-top: 5px;
color: var(--base-error);
font-size: 10px;
}
.${TEXT_INPUT_DESCRIPTION_CLASS}{
font-size: 12px;
color: var(--input-description);
margin-top: 7px;
}
`
