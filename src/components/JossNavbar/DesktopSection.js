import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles, Typography, Button } from '@material-ui/core';

import LoginIcon from '../../assets/svgs/user.svg';
import WalletIcon from '../../assets/svgs/wallet.svg';

const styles = theme => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  button: {
    display: 'block'
  }, 
  icon: {
    width: '20px'
  }, 
  text: {
    fontSize: '10px'
  }
});

class DesktopSection extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.sectionDesktop}>
        <Button
          className={classes.button}
          disabled
          color="inherit">
          <img className={ classes.icon } src={ WalletIcon } alt="Login icon"/>
          <Typography className={ classes.text } variant="button">Comming Soon</Typography>
        </Button>
        <Button
          className={classes.button}
          color="inherit"
          disabled
          aria-label="Open drawer">
          <img className={ classes.icon } src={ LoginIcon } alt="wallet icon" />
          <Typography className={ classes.text } variant="button">Comming Soon</Typography>
        </Button>
      </div>
    );
  }
}

DesktopSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DesktopSection);
