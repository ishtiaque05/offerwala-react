import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Circle } from 'react-preloaders';
import { withStyles, Typography } from '@material-ui/core';

import { fetchOnlineDeals } from '../actions';

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
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      deals: []
    };
  }

  async componentDidMount() {
    const deals = await this.props.fetchOnlineDeals();
    this.setState({deals});
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const deals = await this.props.fetchOnlineDeals(this.state.page);
    this.setState({ deals: [...this.state.deals, ...deals] });
  };

  render = () => {
    const { classes, error } = this.props;
    console.log(this.state.deals);

    const onlineDeals = this.state.deals.map((deal, index) => (
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
          dataLength={onlineDeals.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}>
          <Masonry
            className={classes.masonry}
            elementType={'div'}
            options={masonryOptions}
            updateOnEachImageLoad={false}>
            {onlineDeals}
          </Masonry>
        </InfiniteScroll>
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

export default connect(
  mapStateToProps,
  { fetchOnlineDeals }
)(withStyles(styles)(OnlineDeals));
