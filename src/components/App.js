import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { JossNavbar, Container } from 'components/layout';
import Signup from './Sign-up/Signup';
import Welcome from './Sign-up/Welcome';
import Name from './Sign-up/Name';
import Password from './Sign-up/Password';

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
