import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';

export default ({ children }) => {
  return (
    <Provider store={store}>
      <Fragment>{children}</Fragment>
    </Provider>
  );
};
