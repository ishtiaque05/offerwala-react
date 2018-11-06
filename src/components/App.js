import React, { Component } from 'react';
import { JossNavbar, Sidebar } from 'components/layout';

class App extends Component {
  render() {
    return (
      <div>
        <JossNavbar />
        <Sidebar />
      </div>
    );
  }
}

export default App;
