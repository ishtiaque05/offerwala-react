import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

import { withStyles } from '@material-ui/core';


const styles = theme => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }, 
    marginRight: '20px'
  }, 
  ul: {
    display: 'flex', 
    listStyle: 'none'
  }, 
  li: {
    
  }, 
  a: {
    textDecoration: 'none', 
    color: '#382B2B', 
    fontSize: '18px', 
    padding: '5px 10px'
  }
});

class DesktopSection extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.sectionDesktop}>
        <ul className={ classes.ul }>
          <li  className={ classes.li }>
              <NavLink activeStyle={{ color: '#C32323' }} className={ classes.a } to="/about">About Us</NavLink>
          </li>
          <li  className={ classes.li }>
              <NavLink activeStyle={{ color: '#C32323' }} className={ classes.a } to="/privacy">Privacy Policy</NavLink>
          </li>
          <li  className={ classes.li }>
              <NavLink activeStyle={{ color: '#C32323' }} className={ classes.a } to="/faq">FAQ</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

DesktopSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DesktopSection);
