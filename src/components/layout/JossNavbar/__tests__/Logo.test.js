import React from 'react';
import { shallow } from 'enzyme';

import { Logo } from 'components/layout/JossNavbar/Logo';

describe('Logo', () => {
  let component;
  let testProps;

  beforeEach(() => {
    testProps = {
      width: ''
    };
    component = shallow(<Logo {...testProps} />);
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
