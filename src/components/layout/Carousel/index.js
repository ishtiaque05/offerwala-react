import React from 'react';
import Banner from '../../../assets/images/Banner.png';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  image: {
    [theme.breakpoints.up('xl')]: {
      width: theme.spacing.unit * 125
    },
    [theme.breakpoints.down('lg')]: {
      width: theme.spacing.unit * 94
    }
  }
});

const Carousel = ({ classes }) => {
  return (
    <div>
      <img src={Banner} alt="Placeholder" className={classes.image} />
    </div>
  );
};

export default withStyles(styles)(Carousel);
