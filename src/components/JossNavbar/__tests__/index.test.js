import React from 'react';
import { shallow } from 'enzyme';

import JossNavbar from '..';

describe('JossNavbar', () => {
  let component;

  beforeEach(() => {
    component = shallow(<JossNavbar />);
  });

  afterEach(() => {
    component.unmount();
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
