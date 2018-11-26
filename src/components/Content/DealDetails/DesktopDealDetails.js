import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import {
  withStyles,
  Dialog,
  DialogContent, 
  Card,
  CardMedia,
  Typography,
  CardContent,
  Button,
  Chip
} from '@material-ui/core';

import PhoneIcon from '@material-ui/icons/Phone';

import DefaultImage from '../../../assets/images/default_deal.jpg';

const styles = theme => ({
  root: {
    padding: '30px'
  }, 
  card: {
    background: '#F8F8F8',
    maxWidth: theme.spacing.unit * 150,
    padding: '30px', 
    maxHeight: 'calc(100% - 96px)', 
    boxShadow: 'none'
  },
  media: {
    width: theme.spacing.unit * 50,
    marginRight: theme.spacing.unit * 3,
    height: 'auto'
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
  },
  bottomArea: {
    display: 'flex'
  },
  chip: {
    margin: '5px'
  }
});

class DesktopDealDetails extends Component {
  render = () => {
    const { classes, deal, open, onClose } = this.props;

    return (
      <Dialog
        className={classes.root}
        open={open}
        maxWidth={'md'}
        onClose={onClose}
        aria-labelledby="simple-dialog-title"
        PaperProps={{
          style: { backgroundColor: '#F8F8F8' }
        }}
        scroll="paper">
        <DialogContent>
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
            <div className={classes.bottomArea}>
              <CardContent style={{ flexBasis: '50%' }}>
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
              <CardContent
                style={{ paddingLeft: 0, paddingRight: 0, flexBasis: '50%' }}>
                <Typography variant="body1">
                  {deal.description !== undefined
                    ? deal.description.replace(/&nbsp;|"|<[^>]+>/g, '')
                    : ''}
                </Typography>

                <div>
                  {deal.tags.map((tag, index) => (
                    <Chip key={ index } className={classes.chip} label={tag.title} />
                  ))}
                </div>

                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '16px' }}>
                  Go to Deal
                </Button>
              </CardContent>
            </div>
          </Card>
        </DialogContent>
      </Dialog>
    );
  };
}

DesktopDealDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  deal: PropTypes.object.isRequired
  // loading: PropTypes.bool.isRequired,
  // error: PropTypes.object
};

export default withRouter(withStyles(styles)(DesktopDealDetails));
