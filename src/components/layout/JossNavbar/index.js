import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import Logo from 'components/layout/JossNavbar/Logo';
import MobileSection from 'components/layout/JossNavbar/MobileSection';
import DesktopSection from 'components/layout/JossNavbar/DesktopSection';
import SearchBar from 'components/layout/JossNavbar/SearchBar';

const styles = () => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  }
});

const JossNavbar = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="fixed" color="default">
      <Toolbar>
        <IconButton>
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
