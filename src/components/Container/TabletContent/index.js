import React from 'react';

import SubNavbar from './SubNavbar';
import BottomBar from './BottomBar';
import CarouselComp from './Carousel';

import Routes from '../../../Routes';

const TabletContent = () => (
  <div>
    <SubNavbar />
    <CarouselComp />
    <BottomBar />

    <div style={{ position: 'relative' }}>
      <Routes />
    </div>
  </div>
);

export default TabletContent;
