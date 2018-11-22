import React from 'react';
import Banner from '../../../assets/images/Banner.png';

const Carousel = () => {
  return (
    <div style={{ paddingLeft: '320px' }}>
      <img
        src={Banner}
        alt="Placeholder"
        style={{ width: '1120px', height: 'auto' }}
      />
    </div>
  );
};

export default Carousel;
