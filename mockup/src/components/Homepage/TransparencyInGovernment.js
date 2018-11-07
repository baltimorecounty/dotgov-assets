import React from 'react';
import CalloutList from '../Callouts/CalloutList/CalloutList';
import CalloutData from '../../data/transparency-in-government.json';

export default function TransparencyInGovernment(props) {
    return (
        <div className="bc_section container">
            <div className="row">
                <div className="col-xs-12">
                    <h2 className="alt-heading">Transparency In Government</h2>
                    <CalloutList items={CalloutData} />
                </div>
            </div>
        </div>
    );
}
