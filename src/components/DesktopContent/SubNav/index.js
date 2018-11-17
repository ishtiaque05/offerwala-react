import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  nav: {
    padding: theme.spacing.unit * 2.5,
    width: theme.spacing.unit * 120,
    marginLeft: theme.spacing.unit * 40
  },
  ul: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'flex'
  },
  li: {
    flex: 1
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
            <Link
              onClick={event => this.handleListItemClick(event, 0)}
              className={
                this.state.selectedIndex === 0 ? classes.active : classes.link
              }
              to="/">
              <Typography variant="headline">All Deals</Typography>
            </Link>
          </li>
          <li className={classes.li}>
            <Link
              onClick={event => this.handleListItemClick(event, 1)}
              className={
                this.state.selectedIndex === 1 ? classes.active : classes.link
              }
              to="/deals/online-deals">
              <Typography variant="headline">Online deals</Typography>
            </Link>
          </li>
          <li className={classes.li}>
            <Link
              onClick={event => this.handleListItemClick(event, 2)}
              className={
                this.state.selectedIndex === 2 ? classes.active : classes.link
              }
              to="/deals/store-deals">
              <Typography variant="headline">Shop deals</Typography>
            </Link>
          </li>
          <li className={classes.li}>
            <Link
              onClick={event => this.handleListItemClick(event, 3)}
              className={
                this.state.selectedIndex === 3 ? classes.active : classes.link
              }
              to="/coupon">
              <Typography variant="headline">Coupons</Typography>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withStyles(styles)(DesktopSubNav);
