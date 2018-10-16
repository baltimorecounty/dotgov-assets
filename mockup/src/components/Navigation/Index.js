import React from 'react';
import Highlight from 'react-highlight';
import { Card, Table } from 'antd';
import DocSection from '../DesignSystem/DocSection';
import BasicComponentInfo from '../DesignSystem/BasicComponentInformation';
import PrimaryNavigation from '../Navigation/PrimaryNavigation';
import PrimaryNavigationMarkup from './examples/PrimaryNavigation.html.js';
import docsData from '../../data/design-system/docs/primary-navigation.json';

export default class Index extends React.Component {
    render() {
        const bottomMargin = { marginBottom: '15px' };
        const sourceData = [
            {
                key: 1,
                property: 'name',
                description: 'Text to describe the navigation item',
                example: 'Departments and Services'
            },
            {
                key: 2,
                property: 'icon',
                description:
                    'A FontAwesome Icon that will help the user identify the navigation item. Follow the font awesome guidelines to add an icon.',
                example: '<i class="fas fa-list-ul"></i>'
            },
            {
                key: 3,
                property: 'link',
                description:
                    'Link to the page in which you wish to direct the user',
                example: 'https://baltimorecountymd.gov/report'
            }
        ];
        const dataColumns = [
            {
                title: 'Property',
                dataIndex: 'property',
                key: 'property'
            },
            {
                title: 'Description',
                dataIndex: 'description',
                key: 'description'
            },
            {
                title: 'Example',
                dataIndex: 'example',
                key: 'example'
            }
        ];

        return (
            <React.Fragment>
                <Card style={bottomMargin}>
                   <BasicComponentInfo data={docsData} />
                    <DocSection>
                        <h3>Example</h3>
                        <DocSection>
                            <PrimaryNavigation />
                        </DocSection>
                    </DocSection>
                    <DocSection>
                        <h3>Code</h3>
                        <Highlight className="html">
                            {PrimaryNavigationMarkup}
                        </Highlight>
                    </DocSection>
                    <DocSection>
                        <h3>Navigation List Item Data</h3>
                        <Table
                            columns={dataColumns}
                            dataSource={sourceData}
                            pagination={false}
                        />
                    </DocSection>
                </Card>
            </React.Fragment>
        );
    }
}
