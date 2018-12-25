import React from 'react';

import SubNavbar from './SubNavbar';
import BottomBar from './BottomBar';
import CarouselComp from './Carousel';

import Routes from '../../../Routes';

const MobileContent = () => (
  <div>
    <SubNavbar />
    <BottomBar />
    <CarouselComp />
    <div style={{ position: 'relative' }}>
      <Routes />
    </div>
  </div>
);

export default MobileContent;
