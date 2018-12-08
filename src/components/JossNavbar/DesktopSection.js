import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

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
    // const { anchorEl } = this.state;
    const { classes } = this.props;
    // const isMenuOpen = Boolean(anchorEl);

    return (
      <div className={classes.sectionDesktop}>
        {/*<IconButton*/}
        {/*aria-owns={isMenuOpen ? 'material-appbar' : undefined}*/}
        {/*aria-haspopup="true"*/}
        {/*onClick={this.handleProfileMenuOpen}*/}
        {/*color="inherit">*/}
        {/*<AccountCircle />*/}
        {/*</IconButton>*/}
        {/*<IconButton*/}
        {/*className={classes.menuButton}*/}
        {/*color="inherit"*/}
        {/*aria-label="Open drawer">*/}
        {/*<MenuIcon />*/}
        {/*</IconButton>*/}
        {/*<SubMenu*/}
        {/*anchorEl={anchorEl}*/}
        {/*onClose={this.handleMenuClose}*/}
        {/*open={isMenuOpen}*/}
        {/*/>*/}
      </div>
    );
  }
}

DesktopSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DesktopSection);
