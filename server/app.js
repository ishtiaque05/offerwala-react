const path = require('path');
const React = require('react');
import { createReactAppExpress } from '@cra-express/core';

let App = require('../src/Root').default;
const clientBuildPath = path.resolve(__dirname, '../client');

const app = createReactAppExpress({
  clientBuildPath,
  universalRender: (req, res) => <App />
});

if (module.hot) {
  module.hot.accept('../src/Root', () => {
    App = require('../src/Root').default;
    console.log('✅ Server hot reloaded App');
  });
}

export default app;
