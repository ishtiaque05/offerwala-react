import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Root from 'Root';
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
    component = shallow(
      <Root>
        <Content {...testProps} />
      </Root>
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(
      <Root>
        <Content {...testProps} />
      </Root>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
