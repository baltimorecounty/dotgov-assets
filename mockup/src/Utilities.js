import ReactDOMServer from 'react-dom/server';

export const GetCssClasses = (incomingClasses, componentClasses) =>
    [[componentClasses], incomingClasses].filter(val => !!val).join(' ');

export const RenderCodeExample = example =>
    GetNodesFromHtmlString(ReactDOMServer.renderToStaticMarkup(example))
        .map(elm => elm.outerHTML)
        .join('\n');

export const GetNodesFromHtmlString = str => [
    ...new DOMParser().parseFromString(str, 'text/html').body.childNodes
];
