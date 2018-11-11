import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SubMenu from './SubMenu';

const styles = theme => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

class DesktopSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);

    return (
      <div className={classes.sectionDesktop}>
        <IconButton
          aria-owns={isMenuOpen ? 'material-appbar' : undefined}
          aria-haspopup="true"
          onClick={this.handleProfileMenuOpen}
          color="inherit">
          <AccountCircle />
        </IconButton>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Open drawer">
          <MenuIcon />
        </IconButton>
        <SubMenu
          anchorEl={anchorEl}
          onClose={this.handleMenuClose}
          open={isMenuOpen}
        />
      </div>
    );
  }
}

export default withStyles(styles)(DesktopSection);
