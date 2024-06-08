import {
  BUTTON_CLASS,
  COPIED_CLASS,
  COPY_BUTTON_CLASS,
  GENERATE_BUTTON_WRAPPER_CLASS,
  MORE_BUTTON_CLASS,
  RESET_BUTTON_CLASS,
  STOP_BUTTON_CLASS,
} from '@src/classNames'

export const buttonsStyles = `
.${GENERATE_BUTTON_WRAPPER_CLASS}{
padding-top: 10px;
}
.${BUTTON_CLASS}{
text-transform: uppercase;
padding: 10px 15px;
border-radius: 5px;
border: none;
outline: none;
background-color: var(--primary);
color: var(--inverted-lightness-primary);
font-family: inherit;
cursor: pointer;
animation: appear 400ms 1 ease-in 0s none; 
opacity: 1;
}
.${BUTTON_CLASS}:hover{
opacity: 0.6;
}
.${BUTTON_CLASS}:focus{
box-shadow: -1px -1px 5px var(--primary), 1px 1px 5px var(--primary);
}
.${BUTTON_CLASS}:active{
opacity: 0.7;
}
.${BUTTON_CLASS}:disabled{
opacity: 0.2;
pointer-events: none;
}
.${RESET_BUTTON_CLASS}{
color: var(--base-light);
background-color: var(--reset-btn);
padding-left: 30px;
position: relative;
border: 1px solid var(--reset-btn);
margin-left: auto;
}
.${RESET_BUTTON_CLASS}:focus{
box-shadow: -1px -1px 5px var(--reset-btn), 1px 1px 5px var(--reset-btn);
}
.${RESET_BUTTON_CLASS}:before, .${RESET_BUTTON_CLASS}:after{
content: '';
position: absolute;
left: 17px;
top: 50%;
height: 10px;
width: 2px;
background-color: currentColor;
}
.${RESET_BUTTON_CLASS}:before{
transform: translateY(-50%) rotate(45deg);
}
.${RESET_BUTTON_CLASS}:after{
transform: translateY(-50%) rotate(-45deg);
}
.${MORE_BUTTON_CLASS}{
padding-left: 30px;
position: relative;
border: 1px solid var(--primary);
color: var(--inverted-lightness-primary);
background-color: var(--primary);
}
.${MORE_BUTTON_CLASS}:before, .${MORE_BUTTON_CLASS}:after{
content: '';
position: absolute;
left: 17px;
top: 50%;
height: 10px;
width: 1px;
background-color: currentColor;
}
.${MORE_BUTTON_CLASS}:before{
transform: translateY(-50%);
}
.${MORE_BUTTON_CLASS}:after{
transform: translateY(-50%) rotate(90deg);
}
.${STOP_BUTTON_CLASS}{
padding-left: 30px;
position: relative;
border: 1px solid var(--primary);
color: var(--inverted-lightness-primary);
background-color: var(--primary);
}
.${STOP_BUTTON_CLASS}:before{
content: '';
position: absolute;
top: 50%;
left: 12px;
transform: translateY(-50%);
height: 10px;
width: 10px;
background-color: currentColor;
}
.${COPY_BUTTON_CLASS}{
padding-left: 40px;
position: relative;
border: 1px solid var(--primary);
color: var(--inverted-lightness-primary);
background-color: var(--primary);
}
.${COPY_BUTTON_CLASS}:before, .${COPY_BUTTON_CLASS}:after{
content: '';
position: absolute;
top: 50%;
left: 20px;
height: 14px;
width: 14px;
border: 2px solid var(--inverted-lightness-primary);
border-radius: 3px;
transition: 300ms;
transition-timing-function: ease-in-out;
}
.${COPY_BUTTON_CLASS}:before{
transform: translate(-65%, -65%);
}
.${COPY_BUTTON_CLASS}:after{
transform: translate(-35%, -35%);
}
.${COPY_BUTTON_CLASS}.${COPIED_CLASS}:before{
width: 0;
height: 7px;
transform: translate(-200%, -40%) rotate(-45deg);
}
.${COPY_BUTTON_CLASS}.${COPIED_CLASS}:after{
width: 0;
transform: translate(20%, -50%) rotate(45deg);
}
`
