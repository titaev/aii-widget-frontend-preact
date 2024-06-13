import {
  ANSWER_BUTTONS_WRAPPER_CLASS,
  ANSWER_CLASS,
  ANSWER_CONTAINER_CLASS,
  ANSWER_HIDDEN_CLASS,
  ANSWER_WRAPPER_CLASS,
  MINI_PAGE_CLASS,
} from '@src/classNames';

export const answerStyles = `
.${ANSWER_CONTAINER_CLASS}{
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
row-gap: calc(var(--root-size) * 0.2);
}
.${ANSWER_CONTAINER_CLASS}.${MINI_PAGE_CLASS}{
width: 53%;
}
.${ANSWER_WRAPPER_CLASS}{
display: flex;
flex-direction: column;
justify-content: flex-start;
flex-grow: 1;
row-gap: calc(var(--root-size) * 0.1);
}
.${ANSWER_BUTTONS_WRAPPER_CLASS}{
display: flex;
justify-content: flex-start;
align-items: center;
column-gap: calc(var(--root-size) * 0.1);
row-gap: calc(var(--root-size) * 0.1);
flex-wrap: wrap;
position: sticky;
bottom: 0;
padding: calc(var(--root-size) * 0.1);
backdrop-filter: blur(5px);
}
.${ANSWER_CLASS}{
white-space: pre-line;
border: 2px dashed var(--answer-border);
padding: calc(var(--root-size) * 0.2);
border-radius: calc(var(--root-size) * 0.1);
font-size: calc(var(--root-size) * 0.2);
background: linear-gradient(lightgray, transparent 1px), linear-gradient(90deg, lightgray, transparent 1px);
background-size: calc(var(--root-size) * 0.3) calc(var(--root-size) * 0.3);
flex-grow: 1;
min-height: calc(var(--root-size) * 2);
overflow-x: auto;
}
.${ANSWER_HIDDEN_CLASS}{
position:relative;
filter: blur(5px);
user-select: none;
}
.${ANSWER_CLASS} li {
margin-left: calc(var(--root-size) * 0.2);
}
.${ANSWER_CLASS} table {
border-collapse: collapse;
width: 100%;
}
.${ANSWER_CLASS} td {
padding: calc(var(--root-size) * 0.1);
border: 1px solid var(--table-border);
}
.${ANSWER_CLASS} tr:nth-child(even) {
background-color: rgba(0,0,0,.05);
}
.${ANSWER_CLASS} th {
padding: calc(var(--root-size) * 0.1);
border: 1px solid var(--inverted-lightness-primary);
color: var(--inverted-lightness-primary);
background-color: var(--primary);
}
`;
