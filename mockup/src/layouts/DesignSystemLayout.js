import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import Routes from '../Routes';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class DesignSystemLayout extends React.Component {
    state = {
        collapsed: false,
        breadCrumbs: []
    };

    componentWillReceiveProps(nextProps) {
        this.setBreadCrumbsFromPath(nextProps);
    }

    setBreadCrumbsFromPath(nextProps) {
        const { pathname } = nextProps.location;
        const breadCrumbs = pathname.split('/');
        this.setState({
            breadCrumbs
        });
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">
                            <Link to="/design-system">Home</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            {Routes &&
                                Routes.map((route, routeIndex) => {
                                    return (
                                        <Menu.Item key={routeIndex}>
                                            <Link
                                                to={`/design-system/${
                                                    route.path
                                                }`}
                                            >
                                                {route.name}
                                            </Link>
                                        </Menu.Item>
                                    );
                                })}
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            {this.state.breadCrumbs.length &&
                                this.state.breadCrumbs.map(
                                    (breadCrumb, breadCrumbIndex) => {
                                        return (
                                            <Breadcrumb.Item
                                                key={breadCrumbIndex}
                                            >
                                                {breadCrumb}
                                            </Breadcrumb.Item>
                                        );
                                    }
                                )}
                        </Breadcrumb>
                        <Content
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280
                            }}
                        >
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}
