import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import HomePage from './pages/Homepage';
import DesignSystem from './pages/DesignSystem';
import DefaultLayout from './layouts/Layout';
import DesignSystemLayout from './layouts/DesignSystemLayout';
import '@fortawesome/fontawesome-pro/css/all.css';
import 'antd/dist/antd.css';
import './App.css';
import './bc-main.css';
import './dotgov-main.css';
import Routes from './Routes';

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
                    {Routes.map((route, routeIndex) => {
                        return (
                            <RouteWithLayout
                                key={routeIndex}
                                exact
                                layout={DesignSystemLayout}
                                path={`/design-system/${route.path}`}
                                component={route.component}
                            />
                        );
                    })}
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
