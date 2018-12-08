import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { fetchDealsByCategory } from '../actions';
import Deal from './Deal';
import Masonry from 'react-masonry-component';
import InfiniteScroll from 'react-infinite-scroll-component';

const categoryId = {
  'beauty-fitness': 16,
  'food-dining': 8,
  shopping: 9,
  services: 13,
  'mobile-internet': 2,
  'electronics-home': 11,
  'hotels-travels': 14,
  'banks-cards': 12
};

const styles = theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: '100%'
    },
    [theme.breakpoints.down('lg')]: {
      width: '100%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '98%',
      margin: '0 auto'
    },
    [theme.breakpoints.down('xs')]: {
      width: '96%',
      margin: '0 auto'
    }
  },
  masonry: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  }
});

const masonryOptions = {
  transitionDuration: 3
};

class CategoryDeals extends Component {
  state = {
    page: 0,
    deals: []
  };

  componentDidMount() {
    this.props.fetchDealsByCategory(
      categoryId[this.props.match.params.categoryName]
    );
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.categoryName !==
      prevProps.match.params.categoryName
    ) {
      this.props.fetchDealsByCategory(
        categoryId[this.props.match.params.categoryName]
      );
      // TODO: Fix windows reload to component reload
      window.location.reload();
    }
  }

  fetchMoreData = () => {
    this.setState({ page: this.state.page + 1 });
    this.props.fetchDealsByCategory(
      categoryId[this.props.match.params.categoryName],
      this.state.page
    );
    this.setState({ deals: [...this.state.deals, ...this.props.deals] });
  };

  render() {
    const { classes } = this.props;

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

    return (
      <div className={classes.root}>
        <InfiniteScroll
          dataLength={moreElements.length}
          next={this.fetchMoreData}
          hasMore={true}
          // loader={<h4>Loading...</h4>}
          // endMessage={
          //   <p style={{ textAlign: 'center' }}>
          //     <b>Yay! You have seen it all</b>
          //   </p>
          // }
        >
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
  }
}

const mapStateToProps = state => ({
  deals: state.category.items,
  loading: state.category.loading,
  error: state.category.error
});

export default connect(
  mapStateToProps,
  { fetchDealsByCategory }
)(withStyles(styles)(CategoryDeals));
