import React, {Component} from 'react';
import {Route} from 'react-router';
import HomePage from './pages/Homepage';
import DesignSystem from './pages/DesignSystem';
import Layout from './layouts/Layout';
import './App.css';

class App extends Component {
  render() {
    const rootPath = process.env.PUBLIC_URL;
    return (
      <Layout>
        <Route exact path={`${rootPath}/`} component={HomePage}/>
        <Route exact path={`${rootPath}/design-system`} component={DesignSystem}/>
      </Layout>
    );
  }
}

export default App;
