import { FORM_CONTAINER_CLASS, MINI_PAGE_CLASS } from '@src/classNames';
import { $model } from '@src/model';
import { Ad } from '@src/components/Ad';
import { GenerateButton } from '@src/components/GenerateButton';
import { typeFieldMap } from '@src/typeFieldMap';

export const AiForm = () => {
  const isMiniPage = $model.value.page_view === 'mini_page';
  $model.value.fields.aiFields = $model.value.fields.aiFields.map(item => {
    return item.type === 'TextInputField' ? { ...item, errorText: '' } : item;
  });
  console.log($model.value);
  return (
    <div className={`${FORM_CONTAINER_CLASS} ${isMiniPage ? MINI_PAGE_CLASS : ''}`}>
      <form noValidate={true}>
        {$model.value.fields.aiFields.map(item => {
          const Field = typeFieldMap[item.type];
          // @ts-ignore
          return <Field fieldData={item} />;
        })}
        <GenerateButton />
        <Ad />
      </form>
    </div>
  );
};
