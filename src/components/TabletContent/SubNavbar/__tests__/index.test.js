import React from 'react';
import { shallow } from 'enzyme';
import SubNavbar from 'components/MobileContent/SubNavbar/index';

describe('SubNavbar', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SubNavbar />);
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
