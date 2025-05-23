import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles, Grid } from '@material-ui/core';

import Sidebar from './Sidebar';
import SubNav from './SubNav';
// import FilterBar from './FilterBar';
import CarouselComp from './Carousel';
import Routes from '../../../Routes';

import RightSidebar from './RightSidebar';
import StickyBox from 'react-sticky-box/dist/esnext';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 10,
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 2,
    maxWidth: '1800px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  mainContent: {
    flex: 1,
    padding: '0 35px'
  },
  leftSidebar: {
    width: '260px'
  }
});

const DesktopContent = ({ classes, location }) => {
  let curLocation = location.pathname;
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        wrap="nowrap"
        alignItems="flex-start">
        <StickyBox offsetTop={86} className={classes.leftSidebar}>
          <Sidebar />
        </StickyBox>
        <Grid item className={classes.mainContent}>
          <Grid item container direction="column" spacing={16}>
            <Grid item>
              {(curLocation === '/' ||
                curLocation === '/online-deals' ||
                curLocation === '/store-deals' ||
                curLocation === '/deals/ending-today' ||
                curLocation === '/deals/ending-in-ten-days') && (
                <CarouselComp />
              )}
              <StickyBox offsetTop={80} style={{ zIndex: '1' }}>
                <div style={{ paddingBottom: '4px', background: '#f8f8f8' }}>
                  <SubNav />
                  {/* <FilterBar /> */}
                </div>
              </StickyBox>
              <Grid item style={{ position: 'relative' }}>
                <Routes />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <StickyBox offsetTop={90} className={classes.rightSidebar}>
          <RightSidebar />
        </StickyBox>
      </Grid>
    </div>
  );
};

export default withRouter(withStyles(styles)(DesktopContent));
