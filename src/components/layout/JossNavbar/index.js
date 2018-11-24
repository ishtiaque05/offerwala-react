import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import Logo from './Logo';
import SearchBar from './SearchBar';
import DesktopSection from './DesktopSection';
import MobileSection from './MobileSection';

const styles = theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  toolBar: {
    [theme.breakpoints.up('sm')]: {
      height: theme.spacing.unit * 10,
      paddingLeft: theme.spacing.unit * 12
    }
  }
});

const JossNavbar = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="fixed" color="default" style={{ background: '#F8F8F8' }}>
      <Toolbar className={classes.toolBar}>
        <IconButton style={{ padding: 0 }}>
          <Logo />
        </IconButton>
        <SearchBar />
        <div className={classes.grow} />
        <DesktopSection />
        <MobileSection />
      </Toolbar>
    </AppBar>
  </div>
);

JossNavbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JossNavbar);
