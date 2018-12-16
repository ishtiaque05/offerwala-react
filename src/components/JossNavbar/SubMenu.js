import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu/Menu';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';


const styles = theme => ({
  anchor: {
    textDecoration: 'none', 
    color: 'rgba(0, 0, 0, .8)'
  }
})



const SubMenu = ({ anchorEl, onClose, open, classes }) => (
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={open}
    onClose={onClose}
    PaperProps={{
      style: {
        backgroundColor: '#fff'
      }
    }}>
    <MenuItem onClick={onClose}>
      <Link to="/partner" className={ classes.anchor }>Become a Partner</Link>
    </MenuItem>
    <MenuItem onClick={onClose}>
      <Link className={ classes.anchor } to="/about">About Us</Link>
    </MenuItem>
    <MenuItem onClick={onClose}>
      <Link className={ classes.anchor } to="/privacy">Privacy & Terms</Link>
    </MenuItem>
    <MenuItem onClick={onClose}>
      <Link className={ classes.anchor } to="/faq">FAQ</Link>
    </MenuItem>
  </Menu>
);

SubMenu.propTypes = {
  anchorEl: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired, 
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SubMenu);
