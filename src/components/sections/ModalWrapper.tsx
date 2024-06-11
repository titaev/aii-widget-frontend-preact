import { MODAL_OVERLAY_CLASS, MODAL_WRAPPER_CLASS } from '@src/classNames';
import { $modalContent } from '@src/model';
import { LeadForm } from '@src/components/sections/LeadForm';
import { Gratitude } from '@src/components/sections/Gratitude';

export const ModalWrapper = () => {
  const handleCloseModal = () => {
    $modalContent.value = '';
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={MODAL_OVERLAY_CLASS} onMouseDown={handleCloseModal}>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div className={MODAL_WRAPPER_CLASS} onMouseDown={(e: any) => e.stopPropagation()}>
        {$modalContent.value === 'leadForm' && <LeadForm />}
        {$modalContent.value === 'gratitude' && <Gratitude />}
      </div>
    </div>
  );
};
