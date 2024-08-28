import { useRef } from 'preact/hooks';
import { handleLeadSubmit } from '@src/handlers/handleLeadSubmit';
import { $model } from '@src/model';
import { handleTextInput } from '@src/handlers/handleTextInput';
import { TextInputFieldType } from '@src/types';
import { modalClosing } from '@src/actions/modalClosing';

import bgImg from '../../../assets/modal3-1.png';
import fgImg from '../../../assets/modal3-2.png';

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
      <div className='close' alt='close' type='button' onClick={modalClosing}>
        <span>X</span>
      </div>
      <img className='bg-image' src={bgImg} alt='background' />
      <img className='fg-image' src={fgImg} alt='foreground' />
      <p className='text-2'>
        Заберите индивидуальный план от <b>нейросети </b>
        <span>CODDY</span>!
      </p>
      <div className='content'>
        <div className={`name-input ${nameField.errorText ? 'error' : ''}`}>
          <svg
            alt='profile'
            width='16px'
            height='16px'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z'
              stroke='#939393'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
          <input
            placeholder='Ваше имя'
            type='text'
            value={nameField.value}
            onChange={e => handleInput(nameField, e)}
          />
        </div>

        <div className='flex gap-2 flex-wrap'>
          <div className={`phone-input ${phoneField.errorText ? 'error' : ''}`}>
            <svg
              alt='phone'
              width='16px'
              height='16px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z'
                stroke='#939393'
                stroke-width='1.5'
                stroke-linecap='round'
              />
            </svg>
            <input
              placeholder='+7 (922) 555-55-55'
              type='tel'
              value={phoneField.value}
              onChange={e => handleInput(phoneField, e)}
            />
          </div>
          <div className={`email-input ${emailField.errorText ? 'error' : ''}`}>
            <svg
              alt='email'
              height='16px'
              width='16px'
              version='1.1'
              id='_x32_'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <g>
                <path
                  fill='#939393'
                  d='M510.746,110.361c-2.128-10.754-6.926-20.918-13.926-29.463c-1.422-1.794-2.909-3.39-4.535-5.009
		c-12.454-12.52-29.778-19.701-47.531-19.701H67.244c-17.951,0-34.834,7-47.539,19.708c-1.608,1.604-3.099,3.216-4.575,5.067
		c-6.97,8.509-11.747,18.659-13.824,29.428C0.438,114.62,0,119.002,0,123.435v265.137c0,9.224,1.874,18.206,5.589,26.745
		c3.215,7.583,8.093,14.772,14.112,20.788c1.516,1.509,3.022,2.901,4.63,4.258c12.034,9.966,27.272,15.45,42.913,15.45h377.51
		c15.742,0,30.965-5.505,42.967-15.56c1.604-1.298,3.091-2.661,4.578-4.148c5.818-5.812,10.442-12.49,13.766-19.854l0.438-1.05
		c3.646-8.377,5.497-17.33,5.497-26.628V123.435C512,119.06,511.578,114.649,510.746,110.361z M34.823,99.104
		c0.951-1.392,2.165-2.821,3.714-4.382c7.689-7.685,17.886-11.914,28.706-11.914h377.51c10.915,0,21.115,4.236,28.719,11.929
		c1.313,1.327,2.567,2.8,3.661,4.272l2.887,3.88l-201.5,175.616c-6.212,5.446-14.21,8.443-22.523,8.443
		c-8.231,0-16.222-2.99-22.508-8.436L32.19,102.939L34.823,99.104z M26.755,390.913c-0.109-0.722-0.134-1.524-0.134-2.341V128.925
		l156.37,136.411L28.199,400.297L26.755,390.913z M464.899,423.84c-6.052,3.492-13.022,5.344-20.145,5.344H67.244
		c-7.127,0-14.094-1.852-20.142-5.344l-6.328-3.668l159.936-139.379l17.528,15.246c10.514,9.128,23.922,14.16,37.761,14.16
		c13.89,0,27.32-5.032,37.827-14.16l17.521-15.253L471.228,420.18L464.899,423.84z M485.372,388.572
		c0,0.803-0.015,1.597-0.116,2.304l-1.386,9.472L329.012,265.409l156.36-136.418V388.572z'
                />
              </g>
            </svg>
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
