import React from 'react';
import homepageData from '../../data/design-system/home.json';
import { Card, Col, Row, Alert } from 'antd';

const { mission, sections, shoutOut } = homepageData;

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const bottomMargin = { marginBottom: '15px' };
        return (
            <React.Fragment>
                <div>
                    <h1>Baltimore County Government Design System</h1>
                </div>
                <Card style={bottomMargin}>
                    <h2>Mission</h2>
                    <p>{mission}</p>
                </Card>
                <div style={bottomMargin}>
                    <Row type="flex" title="Card Title" gutter={16}>
                        {sections.map((section, sectionIndex) => {
                            return (
                                <Col
                                    key={sectionIndex}
                                    span={8}
                                    style={{ display: 'flex' }}
                                >
                                    <Card
                                        title={section.title}
                                        bordered={false}
                                        style={{ marginBottom: '15px' }}
                                    >
                                        {section.description}
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </div>
                <Alert message={shoutOut} banner type="info" showIcon={false} />
            </React.Fragment>
        );
    }
}
