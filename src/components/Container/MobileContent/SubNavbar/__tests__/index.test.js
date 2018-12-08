import React from 'react';
import { shallow } from 'enzyme';
import SubNavbar from '..';

describe('SubNavbar', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SubNavbar />);
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
