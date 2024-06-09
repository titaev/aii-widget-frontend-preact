import { FORM_CONTAINER_CLASS, MINI_PAGE_CLASS } from '@src/classNames';
import { $model } from '@src/model';
import { Ad } from '@src/components/Ad';
import { GenerateButton } from '@src/components/GenerateButton';
import { typeFieldMap } from '@src/typeFieldMap';
import { handleAiSubmit } from '@src/controllers/handleAiSubmit';

export const AiForm = () => {
  const isMiniPage = $model.value.page_view === 'mini_page';

  return (
    <div className={`${FORM_CONTAINER_CLASS} ${isMiniPage ? MINI_PAGE_CLASS : ''}`}>
      <form noValidate={true} onSubmit={handleAiSubmit}>
        {$model.value.fields.aiFields.map((item, index) => {
          const Field = typeFieldMap[item.type];
          // @ts-ignore
          return <Field key={index} fieldData={item} fieldFrom={'aiFields'} />;
        })}
        <GenerateButton />
        <Ad />
      </form>
    </div>
  );
};
