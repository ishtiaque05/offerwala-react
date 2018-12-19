import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


import { AppBar, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: '125px',
    backgroundColor: theme.palette.background.paper
  },
  slider: {
    marginTop: '70px'
  }, 
  tabActive: {
    borderBottom: '2px solid #f00', 
    color: '#f00'
  }, 
  ul: {
    listStyle: 'none', 
    margin: '0', 
    padding: '0'
  }, 
  li: {
    display: 'inline-block'
  }, 
  anchor: {
    fontSize: '14px', 
    padding: '13px 10px', 
    display: 'block', 
    textDecoration: 'none', 
    textTransform: 'uppercase', 
    color: 'rgba(0, 0, 0, 0.54)', 
    fontWeight: '500'
  }
});

const SubNavbar = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar className={classes.slider} position="fixed" color="default">
        <ul className={ classes.ul }>
          <li className={ classes.li }>
            <NavLink className={ classes.anchor } exact activeClassName={ classes.tabActive } to="/">
              All Deals
            </NavLink>
          </li>
          <li className={ classes.li }>
            <NavLink className={ classes.anchor } activeClassName={ classes.tabActive } to="/online-deals">
              Online Deals
            </NavLink>
          </li>
          <li className={ classes.li }>
            <NavLink className={ classes.anchor } activeClassName={ classes.tabActive } to="/store-deals">
              Store Deals
            </NavLink>
          </li>
        </ul>
      </AppBar>
    </div>
  )
}

SubNavbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SubNavbar);
