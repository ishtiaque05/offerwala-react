import React from 'react';

import SubNavbar from './SubNavbar';
import BottomBar from './BottomBar';

import Routes from '../../../Routes';

const TabletContent = () => (
  <div>
    <SubNavbar />
    <BottomBar />

    <Routes />
  </div>
);

export default TabletContent;
