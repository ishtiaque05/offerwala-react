// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles, CardMedia, Typography, Button } from '@material-ui/core';

import DefaultImage from 'assets/images/default_deal.jpg';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 15
  },
  media: {
    width: theme.spacing.unit * 35,
    height: 'auto',
    justifyContent: 'center',
    margin: '0 auto',
    borderRadius: theme.spacing.unit * 0.5,
    marginBottom: theme.spacing.unit * 2
  },
  shopName: {
    background: '#000',
    color: '#FFF',
    display: 'inline-block',
    padding: theme.spacing.unit * 0.5,
    paddingRight: theme.spacing.unit * 1.5,
    paddingLeft: theme.spacing.unit * 1.5,
    borderRadius: theme.spacing.unit * 0.25
  },
  title: {
    marginBottom: theme.spacing.unit,
    color: '#461818'
  },
  date: {
    float: 'right',
    color: '#461818',
    opacity: 0.4
  },
  subheading: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    display: 'block',
    marginBottom: theme.spacing.unit * 2
  },
  description: {
    fontSize: theme.spacing.unit * 1.5
  }
});

class MobileDealDetails extends Component {
  render = () => {
    const { classes, loading, error, deal } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    return (
      <div className={classes.root}>
        <CardMedia
          component="img"
          alt={deal.title}
          className={classes.media}
          image={deal.picture !== undefined ? deal.picture.url : DefaultImage}
          title={deal.title}
        />
        <div className={classes.subheading}>
          <Typography variant="h5" className={classes.title}>
            {deal.title}
          </Typography>
        </div>
        <div className={classes.subheading}>
          <Typography variant="body1" className={classes.date}>
            {deal.end_date}
          </Typography>
          <Typography variant="body1" className={classes.shopName}>
            {deal.shop !== undefined ? deal.shop.title : ''}
          </Typography>
        </div>
        <div className={classes.subheading}>
          <Typography className={classes.description}>
            {deal.description}
          </Typography>
        </div>
        <div className={classes.subheading}>
          <Button
            variant="contained"
            color="primary"
            style={{ float: 'right', marginTop: '16px' }}>
            Go to Deal
          </Button>
        </div>
      </div>
    );
  };
}

MobileDealDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  deal: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object
};

export default withStyles(styles)(MobileDealDetails);
