import { FieldFrom, TextInputFieldType } from '@src/types';
import {
  ERROR_CLASS,
  TEXT_INPUT_CLASS,
  TEXT_INPUT_DESCRIPTION_CLASS,
  TEXT_INPUT_TITLE_CLASS,
  TEXT_INPUT_WRAPPER_CLASS,
} from '@src/classNames';
import { useRef } from 'preact/compat';
import { handleTextInput } from '@src/controllers/handleTextInput';

export const TextInputField = ({
  fieldData,
  fieldFrom,
}: {
  fieldData: TextInputFieldType;
  fieldFrom: FieldFrom;
}) => {
  const inputRef = useRef(null);
  const handleInput = (e: any) => {
    handleTextInput({
      value: e.target.value,
      fieldRef: fieldData.fieldRef,
      ref: inputRef.current,
      fieldFrom,
    });
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
