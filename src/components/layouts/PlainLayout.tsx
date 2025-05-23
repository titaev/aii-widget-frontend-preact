import { $plainContent } from '@src/model';
import { WIDGET_CONTAINER_CLASS } from '@src/classNames';
import { AiForm } from '@src/components/sections/AiForm';
import { Answer } from '@src/components/sections/Answer';
import { WidgetTitle } from '@src/components/WidgetTitle';
import { useIncrementViewCount } from '@src/hooks/useIncrementViewCount';
import { useSetFont } from '@src/hooks/useSetFont';

export const PlainLayout = () => {
  const ref = useIncrementViewCount();
  useSetFont();
  return (
    <div ref={ref} className={WIDGET_CONTAINER_CLASS}>
      <WidgetTitle />
      {$plainContent.value === 'aiForm' && <AiForm />}
      {$plainContent.value === 'answer' && <Answer />}
    </div>
  );
};
