import React from 'react';
import { shallow } from 'enzyme';
import BottomBar from 'components/MobileContent/BottomBar/index';

describe('BottomBar', () => {
  let component;
  let testProps;

  beforeEach(() => {
    testProps = { classes: { root: '' } };
    component = shallow(<BottomBar {...testProps} />);
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
