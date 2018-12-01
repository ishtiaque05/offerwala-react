import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  withStyles
} from '@material-ui/core';

import Logo from './Logo';
import SearchBar from './SearchBar';
import DesktopSection from './DesktopSection';
import MobileSection from './MobileSection';

const styles = theme => ({
  root: {
    width: '100%'
  },
  toolBar: {
    [theme.breakpoints.up('sm')]: {
      height: theme.spacing.unit * 10,
      padding: 0, 
      // paddingLeft: theme.spacing.unit * 12
    }
  }, 
  logo: {
    padding: 0, 
    borderRadius: 0, 
    [theme.breakpoints.up('md')]: {
      marginLeft: '45px'
    }, 
    '&:hover': {
      borderRadius: '0', 
      backgroundColor: 'transparent'
    }
  }
});

const JossNavbar = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="fixed" color="default" style={{ background: '#F8F8F8' }}>
      <Toolbar className={classes.toolBar}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center">
          <IconButton className={ classes.logo }>
            <Logo />
          </IconButton>
          <SearchBar />
          <DesktopSection />
          <MobileSection />
        </Grid>
      </Toolbar>
    </AppBar>
  </div>
);

JossNavbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JossNavbar);
