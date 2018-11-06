import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import JossNavbar from 'components/layout/JossNavbar';
import Sidebar from 'components/layout/Sidebar';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });

  it('contains a Index', () => {
    expect(component.find('JossNavbar').length).toEqual(1);
  });

  it('contains a Index', () => {
    expect(component.find('Sidebar').length).toEqual(1);
  });
});
