import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import JossNavbar from 'components/layout/JossNavbar';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });

  it('contains a Navbar', () => {
    expect(component.find('JossNavbar').length).toEqual(1);
  });
});
