import React, { Component } from 'react';

import Logo from 'components/layout/JossNavbar/Logo';

class JossNavbar extends Component {
  render() {
    return (
      <div>
        <h1>JossNavbar</h1>
        <Logo />
        <input type="text" id="search" />
      </div>
    );
  }
}

export default JossNavbar;
