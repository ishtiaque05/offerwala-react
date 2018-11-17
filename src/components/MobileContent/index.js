import React from 'react';

import SubNavbar from 'components/MobileContent/SubNavbar';
import BottomBar from 'components/MobileContent/BottomBar';
import Routes from 'Routes';

const MobileContent = () => (
  <div>
    <SubNavbar />
    <BottomBar />

    <Routes />
  </div>
);

export default MobileContent;
