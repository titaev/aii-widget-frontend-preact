import { FORM_CONTAINER_CLASS, MINI_PAGE_CLASS, MODAL_FORM_WRAPPER_CLASS } from '@src/classNames';

export const formStyles = `
.${MODAL_FORM_WRAPPER_CLASS}{
max-width: 400px;
width: 100%;
background-color: var(--base-light);
padding: calc(var(--root-size) * 0.3) calc(var(--root-size) * 0.3) calc(var(--root-size) * 0.2);
border-radius: calc(var(--root-size) * 0.1);
}
.${FORM_CONTAINER_CLASS}{
width: 100%;
border-radius: calc(var(--root-size) * 0.15);
box-shadow: var(--ai-form-shadow);
background-color: var(--ai-form-bg);
padding: calc(var(--root-size) * 0.2);
display: flex;
flex-direction: column;
justify-content: flex-start;
}
.${FORM_CONTAINER_CLASS}.${MINI_PAGE_CLASS}{
width: 44%;
}
`;
