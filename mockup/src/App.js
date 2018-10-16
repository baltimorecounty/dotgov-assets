import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import HomePage from './pages/Homepage';
import DesignSystem from './pages/DesignSystem';
import Typography from './components/Typography/Index';
import Navigation from './components/Navigation/Index';
import LinkList from './components/Lists/Index';
import DefaultLayout from './layouts/Layout';
import DesignSystemLayout from './layouts/DesignSystemLayout';
import '@fortawesome/fontawesome-pro/css/all.css';
import 'antd/dist/antd.css';
import './App.css';
import './bc-main.css';
import './dotgov-main.css';

const RouteWithLayout = ({ layout, component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                React.createElement(
                    layout,
                    props,
                    React.createElement(component, props)
                )
            }
        />
    );
};

class App extends Component {
    render() {
        return (
            <HashRouter basename="/">
                <Switch>
                    <RouteWithLayout
                        exact
                        path={`/`}
                        layout={DefaultLayout}
                        component={HomePage}
                    />
                    <RouteWithLayout
                        exact
                        layout={DesignSystemLayout}
                        path={`/design-system`}
                        component={DesignSystem}
                    />
					<RouteWithLayout
                        exact
                        layout={DesignSystemLayout}
                        path={`/design-system/typography`}
                        component={Typography}
                    />
					<RouteWithLayout
                        exact
                        layout={DesignSystemLayout}
                        path={`/design-system/navigation`}
                        component={Navigation}
                    />
					<RouteWithLayout
                        exact
                        layout={DesignSystemLayout}
                        path={`/design-system/link-list`}
                        component={LinkList}
                    />
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
