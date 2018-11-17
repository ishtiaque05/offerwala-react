import React from 'react';

import { withStyles } from '@material-ui/core';

import Carousel from 'components/layout/Carousel';
import Sidebar from 'components/DesktopContent/Sidebar';
import FilterBar from 'components/DesktopContent/FilterBar';
import SubNav from 'components/DesktopContent/SubNav';
import Routes from 'Routes';

const styles = theme => ({
  main: {
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 12,
    margin: '0 auto',
    width: theme.spacing.unit * 225
  }
});

const DesktopContent = ({ classes }) => (
  <div className={classes.main}>
    <Sidebar />
    <Carousel />
    <SubNav />
    <FilterBar />

    <Routes />
  </div>
);

export default withStyles(styles)(DesktopContent);
