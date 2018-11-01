import React from 'react';
import { shallow } from 'enzyme';

import JossNavbar from 'components/layout/JossNavbar';
import Logo from 'components/layout/Logo';

describe('Navbar', () => {
  let component;

  beforeEach(() => {
    component = shallow(<JossNavbar />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });

  it('contains a logo', () => {
    expect(component.find('Logo').length).toEqual(1);
  });

  it('contains a search bar', () => {
    expect(component.find('input#search').length).toEqual(1);
  });
});
