import { HTMLFieldType } from '@src/types';

export const HTMLField = ({ fieldData }: { fieldData: HTMLFieldType }) => {
  return <div dangerouslySetInnerHTML={{ __html: fieldData.markup }} />;
};
