import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  width: 400px;
  float: right;
  background: #eee;
  height: 100vh;
`;

class Sidebar extends Component {
  render() {
    return (
      <StyledSidebar>
        <h1>Sidebar</h1>
      </StyledSidebar>
    );
  }
}

export default Sidebar;
