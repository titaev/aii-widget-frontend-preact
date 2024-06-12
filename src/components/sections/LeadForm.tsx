import { $model } from '@src/model';
import { MODAL_FORM_WRAPPER_CLASS } from '@src/classNames';
import { typeFieldMap } from '@src/typeFieldMap';
import { Ad } from '@src/components/Ad';
import { SendButton } from '@src/components/SendButton';
import { handleLeadSubmit } from '@src/controllers/handleLeadSubmit';

export const LeadForm = () => {
  //TODO оптимизировать, чтобы filter был при загрузке один раз
  $model.value.fields.leadsFields = $model.value.fields.leadsFields.filter(item => item.enabled);

  return (
    <div className={MODAL_FORM_WRAPPER_CLASS}>
      <form noValidate={true} onSubmit={handleLeadSubmit}>
        {$model.value.fields.leadsFields.map((item, index) => {
          const Field = typeFieldMap[item.type];
          // @ts-ignore
          return <Field key={index} fieldData={item} fieldFrom={'leadsFields'} />;
        })}
        <SendButton />
        <Ad />
      </form>
    </div>
  );
};
