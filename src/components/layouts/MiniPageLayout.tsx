import { MINI_PAGE_CLASS, MINI_PAGE_WRAPPER_CLASS, WIDGET_CONTAINER_CLASS } from '@src/classNames';
import { WidgetTitle } from '@src/components/WidgetTitle';
import { AiForm } from '@src/components/sections/AiForm';
import { Answer } from '@src/components/sections/Answer';

export const MiniPageLayout = () => {
  return (
    <div className={`${WIDGET_CONTAINER_CLASS} ${MINI_PAGE_CLASS}`}>
      <WidgetTitle />
      <div className={MINI_PAGE_WRAPPER_CLASS}>
        <AiForm />
        <Answer />
      </div>
    </div>
  );
};
