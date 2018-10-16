import React from 'react';
import { Card, Table } from 'antd';
import DocSection from '../DesignSystem/DocSection';
import exampleLinkItems from '../../data/secondary-navigation.json';
import linkListDocsData from '../../data/design-system/docs/link-list.json';
import BasicComponentInformation from '../DesignSystem/BasicComponentInformation';
import LinkList from './LinkList';

export default class Index extends React.Component {
	render() {
		return (
			<Card>
				<BasicComponentInformation data={linkListDocsData} />
				<DocSection>
					<h3>Example</h3>
					<LinkList items={exampleLinkItems} />
				</DocSection>
			</Card>
		);
	}
}