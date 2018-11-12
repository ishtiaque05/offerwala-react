import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { JossNavbar } from 'components/layout';
import SubNavbar from 'components/layout/SubNavbar';
import BottomBar from 'components/layout/BottomBar';

const App = () => (
  <div>
    <CssBaseline />
    <JossNavbar />
    <SubNavbar />
    <BottomBar />
  </div>
);

export default App;
