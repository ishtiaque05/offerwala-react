import React from 'react';
import { shallow } from 'enzyme';
import BottomBar from '../../../MobileContent/BottomBar';

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
