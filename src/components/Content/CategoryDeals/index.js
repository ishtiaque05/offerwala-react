import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { fetchDealsByCategory } from '../../../actions';
import Deal from '../Deal';
import Masonry from 'react-masonry-component';

const categoryId = {
  'beauty-fitness': 16,
  'food-dining': 8,
  shopping: 9,
  services: 13,
  'mobile-internet': 2,
  'electronics-home': 11,
  'hotel-travels': 14,
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

class CategoryDealsPage extends Component {
  // this.props.fetchDealsByCategory(categoryId[this.props.match.params.categoryName]);
  // componentDidMount() {
  //   console.log(this.props.match.params.categoryName);
  //   this.props.fetchDealsByCategory(
  //     categoryId[this.props.match.params.categoryName]
  //   );
  // }

  renderDeals() {
    return this.props.deals.map((deal, index) => (
      <React.Fragment key={index}>
        <Deal deal={deal} />
      </React.Fragment>
    ));
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Masonry
          className={classes.masonry}
          elementType={'div'}
          options={masonryOptions}
          updateOnEachImageLoad={false}>
          {this.renderDeals()}
        </Masonry>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  deals: state.category.items,
  loading: state.category.loading,
  error: state.category.error
});

// export default {
//   loadData: (store, match) =>
//     store.dispatch(fetchDealsByCategory(categoryId[match.params.categoryName])),
//   component: connect(
//     mapStateToProps,
//     { fetchDealsByCategory }
//   )(withStyles(styles)(CategoryDealsPage))
// };

export default connect(
  mapStateToProps,
  { fetchDealsByCategory }
)(withStyles(styles)(CategoryDealsPage));
