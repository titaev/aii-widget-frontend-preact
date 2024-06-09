import { $modalContent, $plainContent } from '@src/model';
import { ModalWrapper } from '@src/components/sections/ModalWrapper';
import { WIDGET_CONTAINER_CLASS } from '@src/classNames';
import { AiForm } from '@src/components/sections/AiForm';
import { Answer } from '@src/components/sections/Answer';
import { WidgetTitle } from '@src/components/WidgetTitle';

export const PlainLayout = () => {
  return (
    <div className={WIDGET_CONTAINER_CLASS}>
      <WidgetTitle />
      {$plainContent.value === 'aiForm' && <AiForm />}
      {$plainContent.value === 'answer' && <Answer />}
      {!!$modalContent.value && <ModalWrapper />}
    </div>
  );
};
