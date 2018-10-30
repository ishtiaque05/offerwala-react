import React from 'react';
import { shallow } from 'enzyme';

import Navbar from 'components/layout/Navbar';

describe('Navbar', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Navbar />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
