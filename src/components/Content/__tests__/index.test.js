import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Content from 'components/Content';

describe('Content', () => {
  let component;
  let testProps;

  beforeEach(() => {
    testProps = {
      deals: [
        {
          imgUrl: 'default.jpg',
          title: 'Default',
          validUntil: '02 Nov',
          storeTitle: 'Default'
        }
      ]
    };
    component = shallow(<Content {...testProps} />);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Content {...testProps} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
