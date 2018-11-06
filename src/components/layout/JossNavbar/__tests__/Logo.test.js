import React from 'react';
import { shallow } from 'enzyme';

import Logo from 'components/layout/JossNavbar/Logo';

describe('Logo', () => {
  const logoImageLink = 'jossdeals_logo.png';

  const component = shallow(<Logo />);

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  describe('when it contains a image tag with a logo', () => {
    const logo = component.find('img');

    it('renders properly', () => {
      expect(logo.length).toEqual(1);
    });

    it('contains the src property with value `logoImageLink`', () => {
      expect(logo.props()).toHaveProperty('src', logoImageLink);
    });
  });
});
