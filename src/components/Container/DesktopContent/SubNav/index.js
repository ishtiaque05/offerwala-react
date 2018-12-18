import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { Typography, withStyles } from '@material-ui/core';

const navigations = [
  { route: '/', name: 'All Deals' },
  { route: '/online-deals', name: 'Online Deals' },
  { route: '/store-deals', name: 'Store Deals' }
];

const styles = theme => ({
  nav: {
    padding: theme.spacing.unit * 2.5,
    width: '100%',
    paddingLeft: 0
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
  render() {
    const { classes } = this.props;
    return (
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          {navigations.map((nav, index) => (
            <li className={classes.li} key={index}>
              <NavLink
                to={nav.route}
                exact
                activeClassName={classes.active}
                className={classes.link}>
                <Typography variant="h5">{nav.name}</Typography>
              </NavLink>
            </li>
          ))}
          {/*{*/}
          {/*navigations.map((navigation, i) => {*/}
          {/*return (*/}
          {/*<li className={classes.li} key={ i }>*/}
          {/*<Link*/}
          {/*className={*/}
          {/*window.location.pathname === navigation.route ? classes.active : classes.link*/}
          {/*}*/}
          {/*to={ navigation.route }>*/}
          {/*<Typography variant="headline">{ navigation.name }</Typography>*/}
          {/*</Link>*/}
          {/*</li>*/}
          {/*);*/}
          {/*})*/}
          {/*}*/}
        </ul>
      </nav>
    );
  }
}

export default withStyles(styles)(DesktopSubNav);
