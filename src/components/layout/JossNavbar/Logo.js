import React from 'react';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

import DesktopLogo from '../../../assets/images/jossdeals_logo.png';
import MobileLogo from '../../../assets/images/jossdeals_logo_small.png';

const styles = theme => ({
  desktopLogo: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  mobileLogo: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
});

const Logo = ({ classes }) => (
  <Link to='/'>
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
  </Link>
);

export default withStyles(styles)(Logo);
