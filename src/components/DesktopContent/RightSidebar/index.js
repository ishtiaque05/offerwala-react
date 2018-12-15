import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, withStyles, Typography
} from '@material-ui/core';

import PartnerIcon from "../../../assets/svgs/partner.svg";
import SideBanner from '../../../assets/images/Side_Ad–17.png';

const styles = theme => ({
  adRoot: {
    marginRight: '15px'
  }, 
  image: {
    marginBottom: '20px'
  }, 
  button: {
    backgroundColor: '#fff'
  }
})

const RightSidebar = ({ classes }) => (
  <div className={ classes.adRoot }>
    <div className={ classes.image }>
      <Link to='/category/hotels-travels'>
        <img
          src={SideBanner}
          style={{ width: '200px' }}
          data-lazy-type="image"
          data-lazy-src="//via.placeholder.com/350x150"
          alt="Placeholder"
        />
      </Link>
    </div>
    <div>
      <Button className={ classes.button }>
        <img style={{ marginRight: '5px' }} width="30" src={ PartnerIcon } alt="Partner icon"/>
        <Typography variant="button">Become a partner</Typography>
      </Button>
    </div>
  </div>
);

export default withStyles(styles)(RightSidebar);
