import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Typography, withStyles } from '@material-ui/core';

import { fetchAllDeals } from '../../actions';

import Deal from './Deal';

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
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      deals: []
    };
  }
  componentDidMount() {
    this.props.fetchAllDeals();
  }

  fetchMoreData = () => {
    this.setState({ page: this.state.page + 1 });
    this.props.fetchAllDeals(this.state.page);
    this.setState({ deals: [...this.state.deals, ...this.props.deals] });
  };

  render = () => {
    const { classes, error } = this.props;

    const childElements = this.props.deals.map((deal, index) => (
      <div key={index} className={classes.deal}>
        <Deal deal={deal} />
      </div>
    ));

    const moreElements = this.state.deals.map((deal, index) => (
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

    return (
      <div className={classes.root}>
        <InfiniteScroll
          dataLength={moreElements.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}>
          <Masonry
            className={classes.masonry}
            elementType={'div'}
            options={masonryOptions}
            updateOnEachImageLoad={false}>
            {childElements}
            {moreElements}
          </Masonry>
        </InfiniteScroll>
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

export default connect(
  mapStateToProps,
  { fetchAllDeals }
)(withStyles(styles)(AllDeals));
