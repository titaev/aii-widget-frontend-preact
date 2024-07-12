import { MODAL_OVERLAY_CLASS, MODAL_WRAPPER_CLASS } from '@src/classNames';

export const modalStyles = `
.${MODAL_OVERLAY_CLASS}{
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: var(--modal-overlay);
z-index: 99999999;
display: flex;
flex-direction: column;
overflow: auto;
}
.${MODAL_WRAPPER_CLASS}{
max-width: calc(var(--root-size) * 8);
margin: auto;
animation: appear 300ms 1 ease-in 0s forwards;
padding-bottom: 60px;
}
`;
