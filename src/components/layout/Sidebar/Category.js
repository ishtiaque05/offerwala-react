import React from 'react';

const items = [
  'Beauty & Fitness',
  'Food & Dining',
  'Shopping',
  'Supermarkets & Services'
];

const Category = () => (
  <div>
    {items.map((item, index) => (
      <div key={index} className="items">
        {item}
      </div>
    ))}
  </div>
);

export default Category;
