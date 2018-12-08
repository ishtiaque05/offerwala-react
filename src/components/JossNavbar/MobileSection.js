import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
});

class MobileSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMoreAnchorEl: null
    };
  }

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { classes } = this.props;
    // const { mobileMoreAnchorEl } = this.state;
    // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    return (
      <div className={classes.sectionMobile}>
        {/*<IconButton*/}
        {/*aria-haspopup="true"*/}
        {/*onClick={this.handleMobileMenuOpen}*/}
        {/*color="inherit">*/}
        {/*<MenuIcon />*/}
        {/*</IconButton>*/}
        {/*<SubMenu*/}
        {/*anchorEl={mobileMoreAnchorEl}*/}
        {/*onClose={this.handleMobileMenuClose}*/}
        {/*open={isMobileMenuOpen}*/}
        {/*/>*/}
      </div>
    );
  }
}

MobileSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MobileSection);
