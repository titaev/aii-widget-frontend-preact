import {
  FORM_CONTAINER_CLASS,
  MINI_PAGE_CLASS,
  MODAL_FORM_WRAPPER_CLASS,
} from '@src/classNames'

export const formStyles = `
.${MODAL_FORM_WRAPPER_CLASS}{
max-width: 400px;
width: 100%;
background-color: var(--base-light);
padding: 30px 30px 20px;
border-radius: 10px;
}
.${FORM_CONTAINER_CLASS}{
width: 100%;
border-radius: 15px;
box-shadow: var(--ai-form-shadow);
background-color: var(--ai-form-bg);
padding: 20px;
display: flex;
flex-direction: column;
justify-content: flex-start;
}
.${FORM_CONTAINER_CLASS}.${MINI_PAGE_CLASS}{
width: 44%;
}
`
