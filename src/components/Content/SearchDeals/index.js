import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import { Typography, withStyles } from '@material-ui/core';

import { fetchSearchedDeals } from '../../../actions';
import Deal from '../Deal';

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

class SearchDeals extends Component {
  componentDidMount() {
    console.warn(this.props.match.params.tagName);
    this.props.fetchSearchedDeals(this.props.match.params.tagName);
  }

  render() {
    const { classes, loading, error, deals } = this.props;

    if (!deals) {
      return (
        <div className={classes.root}>
          <Typography variant="body1">No Deals Found</Typography>
        </div>
      );
    }

    const childElements = deals.map((deal, index) => (
      <div key={index} className={classes.deal}>
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
  }
}

const mapStateToProps = state => ({
  deals: state.searchedDeals.item,
  loading: state.searchedDeals.loading,
  error: state.searchedDeals.error
});

export default connect(
  mapStateToProps,
  { fetchSearchedDeals }
)(withStyles(styles)(SearchDeals));
