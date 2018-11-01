import React, { Component } from 'react';
import styled from 'styled-components';
import Category from './Category';

const StyledSidebar = styled.div`
  float: right;
  height: 100vh;
  width: 400px;
  background: #eee;
  padding: 60px 20px;
`;

const DealsEnding = styled.div`
  margin-top: 20px;
  background: #ccc;
`;

const DealItem = styled.div`
  padding: 5px;
`;

class Sidebar extends Component {
  render() {
    return (
      <StyledSidebar>
        <DealsEnding>
          <DealItem>DEALS ENDING TODAY</DealItem>
          <DealItem>DEALS ENDING IN 10 DAYS</DealItem>
        </DealsEnding>
        <Category />
      </StyledSidebar>
    );
  }
}

export default Sidebar;
