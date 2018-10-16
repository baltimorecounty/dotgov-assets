import React from 'react';
import { Card, Table } from 'antd';
import DocSection from '../DesignSystem/DocSection';
import boxDocsData from '../../data/design-system/docs/box.json';
import BasicComponentInformation from '../DesignSystem/BasicComponentInformation';
import Box from './Box';

export default class Index extends React.Component {
	render() {
		return (
			<Card>
				<BasicComponentInformation data={boxDocsData} />
				<DocSection>
					<h3>Examples</h3>
					<Box>
						<p>Here is some content</p>
					</Box>
					<br />
					<Box>
						<label htmlFor="email">Email</label> <input type="email" name="email" id="email" />
					</Box>
				</DocSection>
			</Card>
		);
	}
}