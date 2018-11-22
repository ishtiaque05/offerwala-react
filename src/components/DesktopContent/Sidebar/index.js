import React from 'react';
import { withStyles } from '@material-ui/core';

import Categories from './Categories';

const styles = theme => ({
  sidebar: {
    position: 'fixed',
    paddingTop: theme.spacing.unit * 25,
    paddingRight: theme.spacing.unit * 9
  }
});

const Sidebar = ({ classes }) => (
  <div className={classes.sidebar}>
    <Categories />
  </div>
);

export default withStyles(styles)(Sidebar);
