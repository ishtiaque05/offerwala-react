// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
// import InfiniteScroll from 'react-infinite-scroller';

import { Typography, withStyles } from '@material-ui/core';

import { fetchAllDeals } from 'actions';

import Deal from 'components/Content/Deal';
import PropTypes from 'prop-types';

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

class AllDeals extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAllDeals());
  }

  // handleLoadMore = page => {
  //   this.props.dispatch(fetchAllDeals(page));
  // };

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
        {/*<InfiniteScroll*/}
        {/*pageStart={0}*/}
        {/*loadMore={this.handleLoadMore}*/}
        {/*hasMore={true || false}*/}
        {/*loader={*/}
        {/*<div className="loader" key={0}>*/}
        {/*Loading ...*/}
        {/*</div>*/}
        {/*}*/}
        {/*useWindow={false}>*/}
        <Masonry
          className={classes.masonry}
          elementType={'div'}
          options={masonryOptions}
          updateOnEachImageLoad={false}>
          {childElements}
        </Masonry>
        {/*</InfiniteScroll>*/}
      </div>
    );
  };
}

AllDeals.propTypes = {
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

export default connect(mapStateToProps)(withStyles(styles)(AllDeals));
