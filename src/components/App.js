import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { JossNavbar, LeftSidebar, MainContentArea, RightSidebar, BottomBar } from 'components/layout';

const App = () => (
  <div style={{paddingTop: 64, backgroundColor: '#F9F9F9'}}>
    <CssBaseline />
    <JossNavbar />
    <LeftSidebar />
    <MainContentArea />
    {/* <RightSidebar /> */}
    <BottomBar />
  </div>
);

export default App;
