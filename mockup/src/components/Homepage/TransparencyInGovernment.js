import React from 'react';
import CalloutList from '../Callouts/CalloutList/CalloutList';
import CalloutData from '../../data/transparency-in-government.json';

export default function TransparencyInGovernment(props) {
	return (
		<React.Fragment>
			<h2 className="alt-heading">Transparency In Government</h2>
			<CalloutList items={CalloutData} />
		</React.Fragment>
	);
}