import { render } from 'preact';
import { App } from '@src/App';

(glob => {
  class AiiCxWidget {
    rootNode: Element | null = null;

    mount({ node, id }: { node: Element; id: string }) {
      this.rootNode = node;
      node.attachShadow({ mode: 'open' });
      render(<App widgetId={id} isPreviewMode={false} />, node.shadowRoot);
    }

    destroy() {
      console.log('destroy');
    }
  }

  //@ts-ignore
  glob.AiiCxWidget = AiiCxWidget;
})(window);
