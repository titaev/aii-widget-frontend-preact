import { render } from 'preact';
import { App } from '@src/App';

const rootNodes = document.querySelectorAll('.aii-cx-widget-root');
rootNodes.forEach(node => {
  node.attachShadow({ mode: 'open' });
  render(
    // @ts-ignore
    <App widgetId={node.dataset.id} isPreviewMode={!!node.dataset.preview} />,
    node.shadowRoot,
  );
});

//render(<MODULE_TEST_APP />, document.querySelector('#root'));
