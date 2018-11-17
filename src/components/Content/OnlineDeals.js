// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

import { withStyles, Typography } from '@material-ui/core';

import { fetchOnlineDeals } from 'actions';

import Deal from 'components/Content/Deal';

const styles = theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 150,
      marginLeft: theme.spacing.unit * 42
    }
  },
  masonry: {
    width: '100%'
  },
  deal: {
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  }
});

const masonryOptions = {
  transitionDuration: 3
};

class OnlineDeals extends Component {
  componentDidMount() {
    this.props.dispatch(fetchOnlineDeals());
  }

  render = () => {
    const { classes, error, loading, deals } = this.props;

    const childElements = deals.map(deal => (
      <div key={deal.id} className={classes.deal}>
        <Deal deal={deal} />
      </div>
    ));

    if (error) {
      return (
        <div className={classes.root}>
          <Typography variant="body1">Error! {error.message}</Typography>
        </div>
      );
    }

    if (loading) {
      return (
        <div className={classes.root}>
          <Typography variant="body1">Loading...</Typography>
        </div>
      );
    }

    return (
      <div className={classes.root}>
        <Masonry
          className={classes.masonry}
          elementType={'div'}
          options={masonryOptions}
          updateOnEachImageLoad={false}>
          {childElements}
        </Masonry>
      </div>
    );
  };
}

OnlineDeals.propTypes = {
  classes: PropTypes.object.isRequired,
  deals: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object
};

const mapStateToProps = state => ({
  deals: state.deals.items,
  loading: state.deals.loading,
  error: state.deals.error
});

export default connect(mapStateToProps)(withStyles(styles)(OnlineDeals));
