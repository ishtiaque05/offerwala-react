import React from 'react';
import {
  Button, withStyles, Typography
} from '@material-ui/core';

import PartnerIcon from "../../../assets/images/login_2.png";
import SideBanner from '../../../assets/images/Side_Ad–17.png';

const styles = theme => ({
  adRoot: {
    marginBottom: '20px'
  }, 
  button: {
    backgroundColor: '#fff'
  }
})

const RightSidebar = ({ classes }) => (
  <div>
    <div className={ classes.adRoot }>
      <img
        src={SideBanner}
        style={{ width: '200px' }}
        data-lazy-type="image"
        data-lazy-src="//via.placeholder.com/350x150"
        alt="Placeholder"
      />
    </div>
    <div>
      <Button className={ classes.button }>
        <img src={ PartnerIcon } alt="Partner icon"/>
        <Typography variant="button">Become a partner</Typography>
      </Button>
    </div>
  </div>
);

export default withStyles(styles)(RightSidebar);
