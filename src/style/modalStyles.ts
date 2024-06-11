import { MODAL_OVERLAY_CLASS, MODAL_WRAPPER_CLASS } from '@src/classNames';

export const modalStyles = `
.${MODAL_OVERLAY_CLASS}{
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: var(--modal-overlay);
z-index: 2;
display: flex;
}
.${MODAL_WRAPPER_CLASS}{
max-height: calc(100vh - 20px);
width: 100%;
max-width: 400px;
overflow-y: auto;
margin: auto;
animation: appear 300ms 1 ease-in 0s forwards;
}
`;
