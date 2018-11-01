import React, { Component } from 'react';
import JossNavbar from 'components/layout/JossNavbar';
import Sidebar from 'components/layout/Sidebar';

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
