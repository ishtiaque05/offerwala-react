import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  withStyles,
  Dialog,
  DialogContent,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Button,
  Chip,
  IconButton,
  Slide,
  Toolbar,
  AppBar
} from '@material-ui/core';
// import CloseIcon from '@material-ui/icons/Close';
import NavigateBefore from '@material-ui/icons/NavigateBefore';

import DefaultImage from '../../../assets/images/default_deal.jpg';

function Transition(props) {
  return <Slide direction="left" {...props} />;
}

const styles = theme => ({
  root: {
    padding: '0'
  },
  card: {
    ground: '#F8F8F8',
    padding: '0',
    maxHeight: '100%',
    boxShadow: 'none'
  },
  media: {
    maxWidth: '100%',
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
    margin: '10px 0'
  },
  title: {
    color: '#461818',
    fontSize: '25px'
  },
  date: {
    color: '#461818',
    opacity: 0.4
  },
  icon: {
    display: 'block'
  },
  bottomArea: {},
  chip: {
    margin: '5px'
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    '&:active, &:focus': {
      color: '#fff'
    }
  }
});

class MobileDealDetails extends Component {
  render = () => {
    const { classes, deal, open, onClose } = this.props;

    return (
      <Dialog
        fullScreen
        className={classes.root}
        open={open}
        maxWidth={'md'}
        onClose={onClose}
        TransitionComponent={Transition}
        aria-labelledby="simple-dialog-title"
        PaperProps={{
          style: {
            backgroundColor: '#F8F8F8',
            boxShadow: 'none',
            margin: 0,
            paddingTop: '56px',
            paddingBottom: '60px'
          }
        }}
        scroll="paper">
        <DialogContent>
          <AppBar>
            <Toolbar>
              <IconButton color="inherit" onClick={onClose} aria-label="Close">
                <NavigateBefore /> 
                <Typography style={{ color: '#fff' }} variant="button">Back</Typography>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Card className={classes.card}>
            <CardContent>
              <div style={{ display: 'block' }}>
                <Typography variant="h4" className={classes.title}>
                  {deal.title}
                </Typography>
                <Typography variant="h6" className={classes.date}>
                  Ends: {deal.end_date}
                </Typography>
              </div>
              <div>
                <Typography variant="h6" className={classes.shopName}>
                  {deal.shop !== undefined ? deal.shop.title : ''}
                </Typography>
                {/* TODO: Add Facebook Icon*/}
                <div className={classes.icon}>{deal.phone_number}</div>
              </div>
            </CardContent>
            <div className={classes.bottomArea}>
              <CardContent style={{}}>
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
              <CardContent style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Typography variant="body1">
                  {deal.description !== undefined
                    ? deal.description.replace(/&nbsp;|"|<[^>]+>/g, '')
                    : ''}
                </Typography>

                <div style={{ marginTop: '20px' }}>
                  {deal.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      className={classes.chip}
                      label={tag.title}
                    />
                  ))}
                </div>

                {deal.presence_types[0] === 'Online' ? (
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '16px' }}>
                    <a
                      className={classes.link}
                      href={deal.deal_link}
                      target="_blank">
                      Go to Deal
                    </a>
                  </Button>
                ) : (
                  ''
                )}
              </CardContent>
            </div>
          </Card>
        </DialogContent>
      </Dialog>
    );
  };
}

MobileDealDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  deal: PropTypes.object.isRequired
};

export default withStyles(styles)(MobileDealDetails);
