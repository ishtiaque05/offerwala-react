import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import InfiniteScroll from 'react-infinite-scroll-component';

import { withStyles, Typography } from '@material-ui/core';

import { fetchStoreDeals } from '../../actions';

import Deal from './Deal';

const styles = theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 150
    },
    [theme.breakpoints.down('lg')]: {
      width: theme.spacing.unit * 100
    },
    [theme.breakpoints.down('sm')]: {
      width: '98%',
      margin: '0 auto'
    }, [theme.breakpoints.down('xs')]: {
      width: '96%',
      margin: '0 auto', 
      
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

const masonryOptions = { transitionDuration: 3 };

class StoreDeals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      deals: []
    };
  }

  componentDidMount() {
    this.props.fetchStoreDeals();
  }

  fetchMoreData = () => {
    this.setState({ page: this.state.page + 1 });
    this.props.fetchStoreDeals(this.state.page);
    this.setState({ deals: [...this.state.deals, ...this.props.deals] });
  };

  render = () => {
    const { classes, error } = this.props;

    const childElements = this.props.deals.map((deal, index) => (
      <React.Fragment key={index}>
        <Deal deal={deal} />
      </React.Fragment>
    ));

    const moreElements = this.state.deals.map((deal, index) => (
      <React.Fragment key={index}>
        <Deal deal={deal} />
      </React.Fragment>
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

StoreDeals.propTypes = {
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
  { fetchStoreDeals }
)(withStyles(styles)(StoreDeals));
