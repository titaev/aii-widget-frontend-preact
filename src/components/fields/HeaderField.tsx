import { HeaderFieldType } from '@src/types';
import { h } from 'preact';
import { HEADER_TITLE_CLASS } from '@src/classNames';

export const HeaderField = ({ fieldData }: { fieldData: HeaderFieldType }) => {
  return h(
    fieldData.size,
    { className: `${HEADER_TITLE_CLASS} header-${fieldData.size}` },
    fieldData.title,
  );
};
