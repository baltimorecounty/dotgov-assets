import React, { Component } from 'react';
import { Route } from 'react-router';
import HomePage from './pages/Homepage';
import Layout from './Layout';
import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Route exact path='/' component={HomePage} />
	  </Layout>
    );
  }
}

export default App;
