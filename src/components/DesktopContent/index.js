import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

import Sidebar from './Sidebar';
import SubNav from './SubNav';
import FilterBar from './FilterBar';
import Carousel from '../layout/Carousel';
import Routes from '../../Routes';

const styles = theme => ({
  main: {
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 12,
    margin: '0 auto',
    width: theme.spacing.unit * 225
  }
});

const DesktopContent = ({ classes, location }) => {
  let curLocation = location.pathname;
  console.warn(curLocation);
  return (
    <div className={classes.main}>
      <Sidebar />
      {(curLocation === '/' ||
        curLocation === '/deals/online-deals' ||
        curLocation === '/deals/store-deals') && <Carousel />}
      <SubNav />
      <FilterBar />
      <Routes />
    </div>
  );
};

export default withRouter(withStyles(styles)(DesktopContent));
