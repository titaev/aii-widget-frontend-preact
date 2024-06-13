import { DISABLED_CLASS, FORM_CONTAINER_CLASS, MINI_PAGE_CLASS } from '@src/classNames';
import { $isDisabledAiForm, $model } from '@src/model';
import { Ad } from '@src/components/Ad';
import { GenerateButton } from '@src/components/GenerateButton';
import { typeFieldMap } from '@src/components/fields/typeFieldMap';
import { handleAiSubmit } from '@src/handlers/handleAiSubmit';

export const AiForm = () => {
  const isMiniPage = $model.value.page_view === 'mini_page';
  return (
    <div
      className={`${FORM_CONTAINER_CLASS} 
      ${isMiniPage ? MINI_PAGE_CLASS : ''} 
      ${$isDisabledAiForm.value ? DISABLED_CLASS : ''}`}
    >
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
