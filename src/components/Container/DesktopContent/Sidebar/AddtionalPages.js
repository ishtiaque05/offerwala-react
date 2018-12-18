import React from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core';

const styles = {
  ul: {
    listStyle: 'none'
  },
  li: {
    display: 'inline-block'
  },
  anchor: {
    fontSize: '16px',
    color: 'rgba(0, 0, 0, .4)',
    display: 'block',
    padding: '3px 5px'
  }
};

const AdditionalPages = ({ classes }) => (
  <div>
    <ul className={classes.ul}>
      <li className={classes.li}>
        <Link className={classes.anchor} to="/about">
          About us
        </Link>
      </li>
      <li className={classes.li}>
        <Link className={classes.anchor} to="/privacy">
          Privacy
        </Link>
      </li>
      <li className={classes.li}>
        <Link className={classes.anchor} to="/faq">
          faq
        </Link>
      </li>
    </ul>
  </div>
);

export default withStyles(styles)(AdditionalPages);
