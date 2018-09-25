import React, { Component } from 'react';
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <p>Inner content</p>
      </Layout>
    );
  }
}

export default App;
