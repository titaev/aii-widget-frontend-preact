import { TextInputFieldType } from '@src/types';
import {
  ERROR_CLASS,
  TEXT_INPUT_CLASS,
  TEXT_INPUT_DESCRIPTION_CLASS,
  TEXT_INPUT_TITLE_CLASS,
  TEXT_INPUT_WRAPPER_CLASS,
} from '@src/classNames';
import { useRef } from 'preact/compat';
import { $model } from '@src/model';

export const TextInputField = ({ fieldData }: { fieldData: TextInputFieldType }) => {
  const inputRef = useRef(null);
  const handleInput = (e: any) => {
    const input = $model.value.fields.aiFields.find(item => {
      return item.type === 'TextInputField' && item.fieldRef === fieldData.fieldRef;
    });
    if (input.type === 'TextInputField') {
      input.value = e.target.value;
    }
    inputRef.current.style.height = '5px';
    inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
  };

  return (
    <div className={TEXT_INPUT_WRAPPER_CLASS}>
      {!!fieldData.title && (
        <h3
          className={TEXT_INPUT_TITLE_CLASS}
        >{`${fieldData.title}${fieldData.required ? '*' : ''}`}</h3>
      )}
      <textarea
        ref={inputRef}
        onChange={handleInput}
        className={`${TEXT_INPUT_CLASS}  ${fieldData.errorText ? ERROR_CLASS : ''}`}
        value={fieldData.value}
        required={fieldData.required}
      />
      {!!fieldData.errorText && <div>{fieldData.errorText}</div>}
      {!!fieldData.description && (
        <div className={TEXT_INPUT_DESCRIPTION_CLASS}>{fieldData.description}</div>
      )}
    </div>
  );
};
