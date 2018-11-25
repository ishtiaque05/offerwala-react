import React from 'react';
import Banner from '../../../assets/videos/banner.mp4';
import { withStyles } from '@material-ui/core';

import { Player, ControlBar } from 'video-react';

const styles = theme => ({
  image: {
    [theme.breakpoints.up('xl')]: {
      width: theme.spacing.unit * 125
    },
    [theme.breakpoints.down('lg')]: {
      width: theme.spacing.unit * 94
    },
    padding: '0 !important',
    '& button': {
      display: 'none'
    }
  }
});

const Carousel = ({ classes }) => {
  return (
    <Player
      className={classes.image}
      autoPlay
      src={Banner}>
      <ControlBar disableCompletely />
    </Player>
  );
};

export default withStyles(styles)(Carousel);
