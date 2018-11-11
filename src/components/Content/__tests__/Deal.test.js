import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Deal from 'components/Content/Deal';

describe('Deal', () => {
  let component;
  let testProps;

  beforeEach(() => {
    testProps = {
      deal: {
        imgUrl: 'default.jpg',
        title: ''
      }
    };
    component = shallow(<Deal {...testProps} />);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Deal {...testProps} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
