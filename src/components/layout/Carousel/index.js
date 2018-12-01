import React from 'react';
import { withStyles } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './index.css'

import image1 from './../../../assets/images/Slider_1.png'
import image2 from './../../../assets/images/Slider_2.png'
import image3 from './../../../assets/images/Slider_3.png'


const styles = theme => ({
  root: {
    width: '100%'
  }, 
  slide: {
    backgroundColor: '#EFEFEF'
  }
});

const CarouselComp = ({ classes }) => {

  return (
      <Carousel  autoPlay interval={4000} infiniteLoop emulateTouch className={ classes.root } showStatus={false} showArrows={false} showThumbs={false}>
        <div className={ classes.slide }>
          <img src={ image1 } alt="slider"/>           
        </div>
        <div className={ classes.slide }>
          <img src={ image2 } alt="slider"/>
        </div>
        <div className={ classes.slide }>
          <img src={ image3 } alt="slider"/>             
        </div>
      </Carousel>
  );
};

export default withStyles(styles)(CarouselComp);
