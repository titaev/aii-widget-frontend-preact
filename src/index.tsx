import { render } from 'preact';
import { App } from '@src/App';

const rootNodes = document.querySelectorAll('.aii-cx-widget-root');
rootNodes.forEach(node => {
  node.attachShadow({ mode: 'open' });

  render(
    // @ts-ignore
    <App widgetId={node.dataset.id} mode={node.dataset.mode || 'normal'} />,
    node.shadowRoot,
  );
});
