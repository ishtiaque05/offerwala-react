import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Circle } from 'react-preloaders';
import { Typography, withStyles } from '@material-ui/core';

import { fetchAllDeals } from '../actions';
import DealList from './DealList';

import Deal from './Deal';

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
  }
});
class AllDeals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      deals: []
    };
  }

  async componentDidMount() {
    const deals = await this.props.fetchAllDeals();
    this.setState({ deals });
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const deals = await this.props.fetchAllDeals(this.state.page);
    this.setState({ deals: [...this.state.deals, ...deals] });
  };

  render = () => {
    const { classes, error } = this.props;

    console.log(this.state.deals);

    const allDeals = this.state.deals.map((deal, index) => (
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

    if (this.state.deals.length < 1) {
      return <Circle />;
    }

    return (
      <div className={classes.root}>
        <InfiniteScroll
          dataLength={allDeals.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}>
          <DealList deals={allDeals} />
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
)(withRouter(withStyles(styles)(AllDeals)));
