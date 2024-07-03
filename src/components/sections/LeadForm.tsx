import { useRef } from 'preact/hooks';
import { handleLeadSubmit } from '@src/handlers/handleLeadSubmit';
import { $model } from '@src/model';
import { handleTextInput } from '@src/handlers/handleTextInput';
import { TextInputFieldType } from '@src/types';
import { modalClosing } from '@src/actions/modalClosing';

import bgImg from '../../../assets/modal3-1.png';
import fgImg from '../../../assets/modal3-2.png';
import profileImg from '../../../assets/profile.png';
import emailImg from '../../../assets/email.png';
import phoneImg from '../../../assets/phone.png';
import closeImg from '../../../assets/close.jpg';

export const LeadForm = () => {
  const agreedRef = useRef<HTMLInputElement>(null);

  const nameField = $model.value.fields.leadsFields.find(
    f => f.fieldRef === '#name',
  ) as TextInputFieldType;
  const emailField = $model.value.fields.leadsFields.find(
    f => f.fieldRef === '#email',
  ) as TextInputFieldType;
  const phoneField = $model.value.fields.leadsFields.find(
    f => f.fieldRef === '#phone',
  ) as TextInputFieldType;

  const handleInput = (fieldData: TextInputFieldType, e: any) => {
    handleTextInput({
      value: e.target.value,
      fieldRef: fieldData.fieldRef,
      fieldFrom: 'leadsFields',
    });
  };

  return (
    <form
      className='modal-lead'
      noValidate={true}
      onSubmit={(e: any) => {
        handleLeadSubmit(e, !agreedRef.current.checked);
      }}
    >
      <img className='close' src={closeImg} alt='close' type='button' onClick={modalClosing} />
      <img className='bg-image' src={bgImg} alt='background' />
      <img className='fg-image' src={fgImg} alt='foreground' />
      <div className='content'>
        <p className='text-2'>
          Заберите индивидуальный план от <b>нейросети </b>
          <span>CODDY</span>!
        </p>
        <div className={`name-input ${nameField.errorText ? 'error' : ''}`}>
          <img src={profileImg} alt='profile' />
          <input
            placeholder='Ваше имя'
            type='text'
            value={nameField.value}
            onChange={e => handleInput(nameField, e)}
          />
        </div>

        <div className='flex gap-2'>
          <div className={`phone-input ${phoneField.errorText ? 'error' : ''}`}>
            <img src={phoneImg} alt='phone' />
            <input
              placeholder='+7 (922) 557-42-47'
              type='tel'
              value={phoneField.value}
              onChange={e => handleInput(phoneField, e)}
            />
          </div>
          <div className={`email-input ${emailField.errorText ? 'error' : ''}`}>
            <img src={emailImg} alt='email' />
            <input
              placeholder='Ваш имейл'
              type='email'
              value={emailField.value}
              onChange={e => handleInput(emailField, e)}
            />
          </div>
        </div>

        <div className='agree-wrapper'>
          <div className='checkbox-wrapper-19'>
            <input id='agree' type='checkbox' ref={agreedRef} />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor='agree' className='check-box' />
          </div>
          <label htmlFor='agree' className='check-box'>
            Принимаю условия соглашения и даю согласие на обработку персональных данных на условиях
            политики конфиденциальности.
          </label>
        </div>
      </div>
      <div className='btns'>
        <button type='submit' className='btn'>
          Забрать бесплатно
        </button>
        <button className='btn-2' onClick={modalClosing}>
          Нет, спасибо
        </button>
      </div>
    </form>
  );
};
