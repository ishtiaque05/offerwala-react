import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Root from 'Root';
import App from 'components/App';

render(
  <Root>
    <Router>
      <App />
    </Router>
  </Root>,
  document.getElementById('root')
);
