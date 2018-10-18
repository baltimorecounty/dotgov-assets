import React from 'react';
import { GetCssClasses } from '../../Utilities';

export default function Callout(props) {
    const { className, children } = props;
    const cssClasses = GetCssClasses(className, 'bc_callout');
    return <div className={cssClasses}>{children}</div>;
}
