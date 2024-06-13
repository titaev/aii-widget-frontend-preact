import { $model } from '@src/model';
import { MODAL_FORM_WRAPPER_CLASS } from '@src/classNames';
import { typeFieldMap } from '@src/components/fields/typeFieldMap';
import { Ad } from '@src/components/Ad';
import { SendButton } from '@src/components/SendButton';
import { handleLeadSubmit } from '@src/handlers/handleLeadSubmit';

export const LeadForm = () => {
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
