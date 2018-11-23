import React from 'react';
import PropTypes from 'prop-types';

import Menu from '@material-ui/core/Menu/Menu';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';

const SubMenu = ({ anchorEl, onClose, open }) => (
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
    }}
    >
    <MenuItem onClick={onClose}>
      <p>About Us</p>
    </MenuItem>
    <MenuItem onClick={onClose}>
      <p>Privacy & Terms</p>
    </MenuItem>
    <MenuItem onClick={onClose}>
      <p>FAQ</p>
    </MenuItem>
  </Menu>
);

SubMenu.propTypes = {
  anchorEl: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default SubMenu;
