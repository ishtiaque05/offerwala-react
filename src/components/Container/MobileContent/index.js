import React from 'react';

import SubNavbar from './SubNavbar';
import BottomBar from './BottomBar';

import Routes from '../../../Routes';

const MobileContent = () => (
  <div>
    <SubNavbar />
    <BottomBar />

    <Routes />
  </div>
);

export default MobileContent;
