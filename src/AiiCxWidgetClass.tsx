import { render } from 'preact';
import { App } from '@src/App';
import { WidgetAppWrapper } from '@src/WidgetAppWrapper';
import { signal } from '@preact/signals';

export class AiiCxWidget {
  rootNode: Element | null = null;
  isMounted = false;
  isFirstMount = true;
  mountSignal = signal(true);

  mount({ node, id, isPreviewMode }: { node: Element; id: string; isPreviewMode?: boolean }) {
    if (this.isMounted) {
      return;
    }

    if (this.isFirstMount) {
      this.isFirstMount = false;
      const rootNode = document.createElement('div');
      rootNode.attachShadow({ mode: 'open' });
      node.appendChild(rootNode);
      this.rootNode = rootNode;
      this.isMounted = true;
      render(
        <WidgetAppWrapper mountSignal={this.mountSignal}>
          <App widgetId={id} isPreviewMode={!!isPreviewMode} />
        </WidgetAppWrapper>,
        this.rootNode.shadowRoot,
      );
    } else {
      this.mountSignal.value = true;
    }
  }

  destroy() {
    //TODO убрать теги style
    //TODO закрыть сокет соединение
    this.isMounted = false;
    this.mountSignal.value = false;
  }
}
