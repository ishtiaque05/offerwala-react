import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from 'reducers';

export default ({ children }) => {
  const middleware = [thunk];
  const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
  );

  return <Provider store={store}>{children}</Provider>;
};
