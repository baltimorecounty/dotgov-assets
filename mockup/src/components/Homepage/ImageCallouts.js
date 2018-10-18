import React from 'react';
import callOuts from '../../data/homepage-gov-callouts.json';
import ImageCallout from '../Callouts/ImageCallout/ImageCallout.js';

export default function MostPopularServices(props) {
    return (
        <div className="bc_grid bc_grid-cols-2 bc_section dg_homepage-callouts">
            {callOuts.map(callout => (
                <ImageCallout className="dg_callout bc_col" {...callout} />
            ))}
        </div>
    );
}
