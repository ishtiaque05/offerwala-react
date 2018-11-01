import React, { Component } from 'react';
import styled from 'styled-components';

const StyledCategory = styled.div`
  margin-top: 50px;
`;

const Item = styled.div`
  padding: 5px;
`;

class Category extends Component {
  render() {
    const items = [
      'Beauty & Fitness',
      'Food & Dining',
      'Shopping',
      'Supermarkets & Services'
    ];

    const renderedItems = items.map((item, index) => (
      <Item className="items" key={index}>
        {item}
      </Item>
    ));

    return (
      <StyledCategory>
        <h5 style={{ padding: '5px' }}>Category</h5>
        {renderedItems}
      </StyledCategory>
    );
  }
}

export default Category;
