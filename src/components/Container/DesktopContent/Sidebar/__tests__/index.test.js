import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from '..';

describe('Sidebar', () => {
  const component = shallow(<Sidebar />);

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
