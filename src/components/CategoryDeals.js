import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { fetchDealsByCategory } from '../actions';
import Deal from './Deal';
import Masonry from 'react-masonry-component';
import { Circle } from 'react-preloaders';
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

  async componentDidMount() {
    const deals = await this.props.fetchDealsByCategory(
      categoryId[this.props.match.params.categoryName]
    );

    this.setState({deals});

  }

  async componentDidUpdate(prevProps) {
    if (
      this.props.match.params.categoryName !==
      prevProps.match.params.categoryName
    ) {
      const deals = await this.props.fetchDealsByCategory(
        categoryId[this.props.match.params.categoryName]
      );
      this.setState({deals});
      // TODO: Fix windows reload to component reload
      window.location.reload();
    }
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const deals = await this.props.fetchDealsByCategory(
      categoryId[this.props.match.params.categoryName],
      this.state.page
    );
    this.setState({ deals: [...this.state.deals, ...deals] });
  };

  render() {
    const { classes } = this.props;
    console.log(this.state.deals);

    const categoryDeals = this.state.deals.map((deal, index) => (
      <React.Fragment key={index}>
        <Deal deal={deal} />
      </React.Fragment>
    ));

    if (this.state.deals.length < 1) {
      return <Circle />;
    }

    return (
      <div className={classes.root}>
        <InfiniteScroll
          dataLength={categoryDeals.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
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
            {categoryDeals}
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
