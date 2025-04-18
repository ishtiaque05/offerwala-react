import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
