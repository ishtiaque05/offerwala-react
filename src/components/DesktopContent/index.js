import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles, Grid } from '@material-ui/core';

import Sidebar from './Sidebar';
import SubNav from './SubNav';
import FilterBar from './FilterBar';
import Carousel from '../layout/Carousel';
import Routes from '../../Routes';

import RightSidebar from './RightSidebar';
import StickyBox from 'react-sticky-box/dist/esnext';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 10,
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2
  }
});

const DesktopContent = ({ classes, location }) => {
  let curLocation = location.pathname;
  console.warn(curLocation);
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start">
        {/*<Grid item alignItems="flex-start">*/}
        <StickyBox offsetTop={86}>
          <Sidebar />
        </StickyBox>
        {/*</Grid>*/}
        <Grid item>
          <Grid item container direction="column" spacing={16}>
            <Grid item>
              {(curLocation === '/' ||
                curLocation === '/deals/online-deals' ||
                curLocation === '/deals/store-deals') && <Carousel />}
              <SubNav />
              <FilterBar />
            </Grid>
          </Grid>
          <Grid item>
            <Routes />
          </Grid>
        </Grid>
        <Grid item direction="column" spacing={16}>
          <Grid item>
            <RightSidebar />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(withStyles(styles)(DesktopContent));
