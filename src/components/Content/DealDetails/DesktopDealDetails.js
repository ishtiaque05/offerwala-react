// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import {
  withStyles,
  Dialog,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Button
} from '@material-ui/core';

import PhoneIcon from '@material-ui/icons/Phone';

import DefaultImage from 'assets/images/default_deal.jpg';

const styles = theme => ({
  root: {
    padding: '30px'
  },
  card: {
    background: '#F8F8F8',
    maxWidth: theme.spacing.unit * 150,
    padding: '30px'
  },
  media: {
    width: theme.spacing.unit * 50,
    marginRight: theme.spacing.unit * 3,
    height: 'auto',
    float: 'left'
  },
  shopName: {
    background: '#4B4B4B',
    color: '#FFF',
    display: 'inline-block',
    padding: theme.spacing.unit * 0.5,
    paddingRight: theme.spacing.unit * 1.5,
    paddingLeft: theme.spacing.unit * 1.5,
    borderRadius: theme.spacing.unit * 0.5,
    float: 'left'
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
  hr: {
    display: 'inline-block',
    marginLeft: theme.spacing.unit * 2.5,
    marginRight: theme.spacing.unit * 2.5
  },
  icon: {
    display: 'inline-block'
  }
});

class DesktopDealDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  handleClose = () => {
    this.setState({ open: false });
    this.props.history.goBack();
  };

  render = () => {
    const { classes, loading, error, deal, ...other } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    return (
      <div className={classes.root}>
        <Dialog
          open={this.state.open}
          fullWidth={true}
          maxWidth={'md'}
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
          {...other}>
          <Card className={classes.card}>
            <CardContent>
              <div style={{ display: 'block' }}>
                <Typography variant="h6" className={classes.date}>
                  {deal.end_date}
                </Typography>
                <Typography variant="h4" className={classes.title}>
                  {deal.title}
                </Typography>
              </div>
              <div>
                <Typography variant="h6" className={classes.shopName}>
                  {deal.shop !== undefined ? deal.shop.title : ''}
                </Typography>
                <hr width="1" size="25" className={classes.hr} />
                {/* TODO: Add Facebook Icon*/}
                <div className={classes.icon}>
                  <PhoneIcon
                    style={{
                      marginBottom: '8px'
                    }}
                  />
                </div>
              </div>
            </CardContent>
            <CardContent>
              <CardMedia
                component="img"
                alt={deal.title}
                className={classes.media}
                image={
                  deal.picture !== undefined ? deal.picture.url : DefaultImage
                }
                title={deal.title}
              />
            </CardContent>
            <CardContent>
              <Typography variant="body1">
                {deal.description !== undefined
                  ? deal.description.replace(/&nbsp;|"|<[^>]+>/g, '')
                  : ''}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ float: 'right', marginTop: '16px' }}>
                Go to Deal
              </Button>
            </CardContent>
          </Card>
        </Dialog>
      </div>
    );
  };
}

DesktopDealDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  deal: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object
};

export default withRouter(withStyles(styles)(DesktopDealDetails));
