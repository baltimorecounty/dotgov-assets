import React from 'react';
import callOuts from '../../data/homepage-gov-callouts.json';
import ImageCallout from '../Callouts/ImageCallout/ImageCallout.js';

export default function MostPopularServices(props) {
    return (
        <div className="grid">
            {callOuts.map(callout => (
                <ImageCallout className="dg_callout-img col" {...callout} />
            ))}
        </div>
    );
}
