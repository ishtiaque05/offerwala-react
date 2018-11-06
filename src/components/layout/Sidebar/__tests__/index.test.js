import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from 'components/layout/Sidebar';
import Category from 'components/layout/Sidebar/Category';

describe('Sidebar', () => {
  const component = shallow(<Sidebar />);

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('contains a category of items', () => {
    expect(component.find('Category').length).toEqual(1);
  });
});
