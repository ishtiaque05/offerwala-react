import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { JossNavbar, Container } from './layout';
import AboutPage from './StaticPages/About';
import ErrorPage from './StaticPages/Error/index';

const App = () => (
  <div style={{ background: '#F8F8F8' }}>
    <CssBaseline />
    <JossNavbar />
    <Container />
    {/* <AboutPage /> */}
    {/* <ErrorPage /> */}
  </div>
);

export default App;
