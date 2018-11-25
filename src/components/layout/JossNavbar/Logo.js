import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core';

import DesktopLogo from '../../../assets/images/jossdeals_logo.png';
import MobileLogo from '../../../assets/images/jossdeals_logo_small.png';

const styles = theme => ({
  desktopLogo: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  mobileLogo: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
});

const Logo = ({ classes }) => (
  <Fragment>
    <img
      className={classes.desktopLogo}
      id="logo"
      src={DesktopLogo}
      alt="JossDeals Logo"
      style={{ height: '64px' }}
    />
    <img
      className={classes.mobileLogo}
      id="logo"
      src={MobileLogo}
      alt="JossDeals Logo"
      style={{ height: '64px' }}
    />
  </Fragment>
);

export default withStyles(styles)(Logo);
