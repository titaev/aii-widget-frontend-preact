import { VNode } from 'preact';
import { Signal } from '@preact/signals';

export const WidgetAppWrapper = ({
  children,
  mountSignal,
}: {
  children: VNode;
  mountSignal: Signal<boolean>;
}) => {
  return <>{mountSignal.value ? children : null}</>;
};
