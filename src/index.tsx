import { render } from 'preact';
import { App } from '@src/App';

const rootNodes = document.querySelectorAll('.aii-cx-widget-root');
rootNodes.forEach(node => {
  node.attachShadow({ mode: 'open' });
  // @ts-ignore
  console.log(node.dataset.preview);
  render(
    // @ts-ignore
    <App widgetId={node.dataset.id} isPreviewMode={!!node.dataset.preview} />,
    node.shadowRoot,
  );
});
