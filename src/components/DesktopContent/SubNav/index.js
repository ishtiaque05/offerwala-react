import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  nav: {
    padding: theme.spacing.unit * 2.5,
    width: '100%',
    paddingLeft: 0
    // marginLeft: theme.spacing.unit * 40
  },
  ul: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'flex'
  },
  li: {
    paddingRight: theme.spacing.unit * 5
  },
  link: {
    borderBottom: '1px solid transparent',
    textDecoration: 'none',
    opacity: '.4',
    display: 'inline-block'
    // transition: 'all .3s'
  },
  active: {
    borderBottom: '2px solid #000',
    textDecoration: 'none',
    opacity: '.8',
    display: 'inline-block',
    transition: 'all .3s',
    lineHeight: theme.spacing.unit * 5
  }
});

class DesktopSubNav extends Component {
  state = {
    selectedIndex: 0
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes } = this.props;
    return (
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <NavLink
              to="/"
              exact
              activeClassName={classes.active}
              className={classes.link}>
              <Typography variant="headline">All Deals</Typography>
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink
              to="/deals/online-deals"
              exact
              activeClassName={classes.active}
              className={classes.link}>
              <Typography variant="headline">Online deals</Typography>
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink
              to="/deals/store-deals"
              exact
              activeClassName={classes.active}
              className={classes.link}>
              <Typography variant="headline">Store deals</Typography>
            </NavLink>
          </li>
          {/* <li className={classes.li}>
        <NavLink
        onClick={event => this.handleListItemClick(event, 3)}
        className={
        this.state.selectedIndex === 3 ? classes.active : classes.link
        }
        to="/coupon">
        <Typography variant="headline">Coupons</Typography>
        </NavLink>
        </li> */}
        </ul>
      </nav>
    );
  }
}

export default withStyles(styles)(DesktopSubNav);
