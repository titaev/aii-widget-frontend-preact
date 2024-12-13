import { render } from 'preact';
import { App } from '@src/App';

export class AiiCxWidget {
  rootNode: Element | null = null;

  mount({ node, id, isPreviewMode }: { node: Element; id: string; isPreviewMode?: boolean }) {
    this.rootNode = node;
    node.attachShadow({ mode: 'open' });
    render(<App widgetId={id} isPreviewMode={!!isPreviewMode} />, node.shadowRoot);
  }

  destroy() {
    console.log('destroy');
  }
}
