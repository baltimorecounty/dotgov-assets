import React from 'react';
import callOuts from '../../data/homepage-gov-callouts.json';
import ImageCallout from '../Callouts/ImageCallout/ImageCallout.js';

export default function MostPopularServices(props) {
    return (
        <React.Fragment>
            {callOuts.map(callout => (
                <ImageCallout {...callout} />
            ))}
        </React.Fragment>
    );
}
