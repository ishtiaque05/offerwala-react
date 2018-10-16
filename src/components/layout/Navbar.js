import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <h1>Navbar</h1>
        <Link to="/">All Deals</Link>
        <Link to="/online-deals">Online Deals</Link>
        <Link to="/store-deals">Store Deals</Link>
      </div>
    );
  }
}

export default Navbar;
