import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

import { 
  withStyles, 
  Card, 
  CardActionArea, 
  CardContent, 
  CardMedia, 
  Typography, 
  Hidden
} from '@material-ui/core';

import DefaultImage from '../../assets/images/default_deal.jpg';
import DesktopDealDetails from './DealDetails/DesktopDealDetails';
import MobileDealDetails from './DealDetails/MobileDealDetails';

const styles = theme => ({
  card: {
    width: theme.spacing.unit * 43.75,
    maxHeight: theme.spacing.unit * 100,
    margin: theme.spacing.unit * 1.5,
    background: '#FFF',
    boxShadow: '0 4px 6px #D4D4D4',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 'auto',
      marginRight: 'auto', 
      width: '100%'
    }
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  media: {
    height: 'auto'
  },
  link: {
    textDecoration: 'none'
  },
  shopName: {
    backgroundColor: '#4B4B4B',
    color: '#FFF',
    padding: theme.spacing.unit * 0.5,
    paddingLeft: theme.spacing.unit * 1.5,
    paddingRight: theme.spacing.unit * 1.5,
    borderRadius: theme.spacing.unit * 0.5
  },
  dealDetails: {
    margin: 0,
    padding: 0
  }
});

class Deal extends Component {
  state = {
    open: false
  };

  clickHandler = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, deal } = this.props;
    console.log(deal)

    return (
      <Fragment>

        <Hidden smUp>
          <MobileDealDetails 
            deal={deal}
            onClose={this.handleClose}
            open={this.state.open}
          /> 
        </Hidden>
        <Hidden smDown>
          <DesktopDealDetails
            deal={deal}
            onClose={this.handleClose}
            open={this.state.open}
          />
        </Hidden>

        
        <Card onClick={this.clickHandler} className={classes.card}>
          <CardActionArea>
            <CardMedia
              style={{ padding: '16px', paddingBottom: '0px' }}
              component="img"
              alt="Contemplative Reptile"
              className={classes.media}
              image={
                deal.picture !== undefined ? deal.picture.url : DefaultImage
              }
              title={deal.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {deal.title}
              </Typography>
              <div className={classes.flex}>
                <Typography className={classes.shopName}>
                  {deal.shop !== undefined ? deal.shop.title : ''}
                </Typography>
                <Typography>Ends: {deal.end_date}</Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Fragment>
    );
  }
}

Deal.propTypes = {
  classes: PropTypes.object.isRequired,
  deal: PropTypes.object.isRequired
};

export default withStyles(styles)(Deal);
