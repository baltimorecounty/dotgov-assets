import React from 'react';
import { Card, Table } from 'antd';
import DocSection from '../DesignSystem/DocSection';
import docsData from '../../data/design-system/docs/callout-image.json';
import BasicComponentInformation from '../DesignSystem/BasicComponentInformation';
import ImageCallout from './ImageCallout';

export default class Index extends React.Component {
	render() {
		return (
			<Card>
				<BasicComponentInformation data={docsData} />
				<DocSection>
					<h3>Example</h3>
					<ImageCallout />
				</DocSection>
			</Card>
		);
	}
}