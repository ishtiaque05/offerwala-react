import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Typography, withStyles } from '@material-ui/core';
import { Circle } from 'react-preloaders';
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

const masonryOptions = { transitionDuration: 3 };

const DealList = ({ classes, error, deals, loadMore }) => {
  const allDeals = deals.map((deal, index) => (
    <React.Fragment key={index}>
      <Deal deal={deal} />
    </React.Fragment>
  ));

  if (deals.length < 1) {
    return <Circle />;
  }

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
        dataLength={deals.length}
        next={loadMore}
        hasMore={true}
        loader={<h4>Loading...</h4>}>
        <Masonry
          className={classes.masonry}
          elementType={'div'}
          options={masonryOptions}
          updateOnEachImageLoad={false}>
          {allDeals}
        </Masonry>
      </InfiniteScroll>
    </div>
  );
};

DealList.propTypes = {
  classes: PropTypes.object.isRequired,
  loadMore: PropTypes.func.isRequired,
  deals: PropTypes.array.isRequired,
  error: PropTypes.object
};

export default withStyles(styles)(DealList);
