import { $model } from '@src/model';
import { modalClosing } from '@src/actions/modalClosing';

import bgImg from '../../../assets/modal2-1.png';
import fgImg from '../../../assets/modal2-2.png';

export const Gratitude = () => {
  //TODO добавить логику кастомного html
  if (!$model.value.preferences?.gratitude) return;

  return (
    <div className='modal-gratitude'>
      <div className='close' alt='close' type='button' onClick={modalClosing}>
        <span>X</span>
      </div>
      <img className='bg-image' src={bgImg} alt='background' />
      <img className='fg-image' src={fgImg} alt='foreground' />
      <div className='modal-inner'>
        <p className='text-1'>Спасибо!</p>
        <p className='text-2'>
          Нейросеть <b>CODDY</b> уже создает персональный план развития для вашего ребенка!
        </p>
        <div className='btn' onClick={modalClosing}>
          OK!
        </div>
      </div>
    </div>
  );
};
