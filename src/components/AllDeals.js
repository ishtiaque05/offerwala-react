import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import InfiniteScroll from 'react-infinite-scroll-component';
import {Cube} from 'react-preloaders';
import { Typography, withStyles } from '@material-ui/core';

import { fetchAllDeals } from '../actions';

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
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
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
      deals: [], 
      isLoading: true
    };
  }
  componentDidMount() {
    const self = this;
    setTimeout(function() {
      self.setState({ isLoading: false });
    }, 2000);
    this.props.fetchAllDeals();
  }

  componentWillUpdate(params) {
    // console.log(this.props.match.path === params.match.path);
    // if(this.props.match.path === params.match.path) {
    //   this.setState({ isLoading: true });
    // }
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 2000);
  }

  fetchMoreData = () => {
    this.setState({ page: this.state.page + 1 });
    this.props.fetchAllDeals(this.state.page);
    this.setState({ deals: [...this.state.deals, ...this.props.deals] });
  };

  render = () => {
    const { classes, error } = this.props;

    // console.log(history)

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
    
    if(this.state.isLoading) {
      return <Cube />
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
)(withStyles(styles)(withRouter(AllDeals)));
