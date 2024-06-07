import {render} from 'preact';
import {App} from '@src/App'

const rootNodes = document.querySelectorAll('.aii-cx-widget-root')
rootNodes.forEach((node) => {
    node.attachShadow({mode: "open"});
    // @ts-ignore
    render(<App widgetId={node.dataset.id} isPreviewMode={node.dataset.mode === "preview"}/>, node.shadowRoot)
})
