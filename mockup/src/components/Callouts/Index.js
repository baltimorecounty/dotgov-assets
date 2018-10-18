import React from 'react';
import { Card, Table } from 'antd';
import DocSection from '../DesignSystem/DocSection';
import docsData from '../../data/design-system/docs/callout.json';
import BasicComponentInformation from '../DesignSystem/BasicComponentInformation';
import Callout from './Callout';

export default class Index extends React.Component {
	render() {
		return (
			<Card>
				<BasicComponentInformation data={docsData} />
				<DocSection>
					<h3>Example</h3>
					<Callout />
				</DocSection>
			</Card>
		);
	}
}