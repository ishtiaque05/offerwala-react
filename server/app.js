import path from 'path';
import React from 'react';
import { Provider } from 'react-redux';
import { createReactAppExpress } from '@cra-express/core';
import configureStore from '../src/store';
import { StaticRouter } from 'react-router-dom';

let App = require('../src/components/App').default;
const clientBuildPath = path.resolve(__dirname, '../client');

const initialState = {};
const store = configureStore(initialState);

const handleUniversalRender = (req, res) => {
  const context = {};
  const stream = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  if (context.url) {
    res.redirect(301, context.url);
    return;
  }

  return stream;
};

const app = createReactAppExpress({
  clientBuildPath,
  universalRender: handleUniversalRender
  // onFinish(req, res, html) {
  //   const state = store.getState();
  //   return html.replace(
  //     '{{SCRIPT}}',
  //     `<script>
  //     window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(
  //       /</g,
  //       '\\u003c'
  //     )};
  //   </script>`
  //   );
  // }
});

if (module.hot) {
  module.hot.accept('../src/components/App', () => {
    App = require('../src/components/App').default;
    console.log('✅ Server hot reloaded App');
  });
}

export default app;
