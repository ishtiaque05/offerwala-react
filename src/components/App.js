import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { JossNavbar, Container } from './layout';

const App = () => (
  <div style={{ background: '#F8F8F8' }}>
    <CssBaseline />
    <JossNavbar />
    <Container />
    {/* <Signup /> */}
    {/* <Welcome /> */}
    {/* <Name /> */}
    {/* <Password /> */}
  </div>
);

export default App;
