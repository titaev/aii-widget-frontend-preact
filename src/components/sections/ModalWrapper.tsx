import { MODAL_OVERLAY_CLASS, MODAL_WRAPPER_CLASS } from '@src/classNames';
import { $modalContent } from '@src/model';
import { LeadForm } from '@src/components/sections/LeadForm';
import { Gratitude } from '@src/components/sections/Gratitude';

export const ModalWrapper = () => {
  return (
    <div className={MODAL_OVERLAY_CLASS}>
      <div className={MODAL_WRAPPER_CLASS}>
        {$modalContent.value === 'leadForm' && <LeadForm />}
        {$modalContent.value === 'gratitude' && <Gratitude />}
      </div>
    </div>
  );
};
