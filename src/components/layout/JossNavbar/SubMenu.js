import React from 'react';
import Menu from '@material-ui/core/Menu/Menu';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';

const SubMenu = ({ anchorEl, onClose, open }) => (
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={open}
    onClose={onClose}>
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

export default SubMenu;
