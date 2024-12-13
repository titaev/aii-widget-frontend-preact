import { LOADER_CLASS } from '@src/classNames';

export const Loader = () => {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px' }}
    >
      <div className={LOADER_CLASS} />
    </div>
  );
};
