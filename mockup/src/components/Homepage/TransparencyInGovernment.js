import React from 'react';
import CalloutList from '../Callouts/CalloutList/CalloutList';
import CalloutData from '../../data/transparency-in-government.json';

export default function TransparencyInGovernment(props) {
    return (
        <div className="bc_section">
            <h2 className="alt-heading">Transparency In Government</h2>
            <CalloutList items={CalloutData} />
        </div>
    );
}
