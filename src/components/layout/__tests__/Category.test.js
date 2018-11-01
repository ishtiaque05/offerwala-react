import React from 'react';
import { shallow } from 'enzyme';

import Category from 'components/layout/Category';

describe('Category', () => {
  const component = shallow(<Category />);
  const items = [
    'Beauty & Fitness',
    'Food & Dining',
    'Shopping',
    'Supermarkets & Services'
  ];

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });

  it('contains n items', () => {
    expect(component.find('.items').length).toEqual(items.length);
  });
});
