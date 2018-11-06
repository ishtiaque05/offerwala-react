import React, { Component } from 'react';

class Category extends Component {
  render() {
    const items = [
      'Beauty & Fitness',
      'Food & Dining',
      'Shopping',
      'Supermarkets & Services'
    ];

    const renderedItems = items.map((item, index) => (
      <div key={index} className="items">
        {item}
      </div>
    ));

    return <div>{renderedItems}</div>;
  }
}

export default Category;
