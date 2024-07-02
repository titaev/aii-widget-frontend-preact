import { handleLeadSubmit } from '@src/handlers/handleLeadSubmit';

import bgImg from '../../../assets/modal3-1.png';
import fgImg from '../../../assets/modal3-2.png';
import profileImg from '../../../assets/profile.png';
import emailImg from '../../../assets/email.png';

export const LeadForm = () => {
  return (
    <form className='modal-lead' noValidate={true} onSubmit={handleLeadSubmit}>
      <img className='bg-image' src={bgImg} alt='background' />
      <img className='fg-image' src={fgImg} alt='foreground' />
      <div className='content'>
        <p className='text-2'>
          Заберите индивидуальный план от <b>нейросети </b>
          <span>CODDY</span>!
        </p>
        <div className='name-input'>
          <img src={profileImg} alt='profile' />
          <input placeholder='Ваше имя' type='text' />
        </div>

        <div className='flex gap-2'>
          <div className='email-input'>
            <img src={emailImg} alt='country-code' />
            <input placeholder='+7 (922) 557-42-47' type='tel' />
          </div>
          <div className='email-input'>
            <img src={emailImg} alt='email' />
            <input placeholder='Ваш имейл' type='email' />
          </div>
        </div>

        <div className='agree-wrapper'>
          <input id='agree' type='checkbox' />
          <label htmlFor='agree'>
            Принимаю условия соглашения и даю согласие на обработку персональных данных на условиях
            политики конфиденциальности.
          </label>
        </div>
      </div>
      <div className='btns'>
        <button type='submit' className='btn'>
          Забрать бесплатно
        </button>
        <button className='btn-2'>Нет, спасибо</button>
      </div>
    </form>
  );
};
