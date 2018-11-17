import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from 'components/DesktopContent/Sidebar/index';

describe('Sidebar', () => {
  const component = shallow(<Sidebar />);

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
