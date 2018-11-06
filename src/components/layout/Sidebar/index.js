import React, { Component } from 'react';
import Category from 'components/layout/Sidebar/Category';

class Sidebar extends Component {
  render() {
    return (
      <div>
        <h1>Sidebar</h1>
        <Category />
      </div>
    );
  }
}

export default Sidebar;
