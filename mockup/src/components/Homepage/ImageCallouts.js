import React from 'react';
import callOuts from '../../data/homepage-gov-callouts.json';
import ImageCallout from '../Callouts/ImageCallout/ImageCallout.js';

export default function MostPopularServices() {
    return (
        <div className="between-xs bc_section dg_homepage-callouts container">
            <div className="row">
                {callOuts.map((callout, calloutIndex) => (
                    <div className="col-md-6" key={calloutIndex}>
                        <ImageCallout className="dg_callout" {...callout} />
                    </div>
                ))}
            </div>
        </div>
    );
}
