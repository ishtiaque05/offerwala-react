import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import { Typography, withStyles } from '@material-ui/core';

import { fetchSearchedDeals } from '../../../actions';
import Deal from '../Deal';

const styles = theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      // width: theme.spacing.unit * 150
      width: '100%'
    },
    [theme.breakpoints.down('lg')]: {
      // width: theme.spacing.unit * 100
      width: '100%'
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
    width: '100%', 
    display: 'flex', 
    justifyContent: 'space-between'
  }
});

const masonryOptions = {
  transitionDuration: 3
};

class SearchDeals extends Component {
  // state = {
  //   result = null
  // }

  componentDidMount() {
    console.warn(this.props.match.params.tagName);
    this.props.fetchSearchedDeals(this.props.match.params.tagName);
    
  }

  render() {
    
    const { classes, loading, error, deals } = this.props;
    // console.log(deals);

    let childElements = null;

    if (loading) {
      return (
        <div className={classes.root}>
          <Typography variant="body1">Loading...</Typography>
        </div>
      );
    } 

    if(!deals) {
      console.log(deals);
      childElements = (
        <div className={classes.root}>
          <Typography variant="body1">No Deals Found</Typography>
        </div>
      )
    } 

    if(deals) {
      console.log(deals);
      childElements = deals.map((deal, index) => (
        <React.Fragment key={index}>
          <Deal deal={deal} />
        </React.Fragment>
      ));
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
        <Masonry
          className={classes.masonry}
          elementType={'div'}
          options={masonryOptions}
          updateOnEachImageLoad={false}>
          {childElements}
        </Masonry>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  deals: state.searchedDeals.items,
  loading: state.searchedDeals.loading,
  error: state.searchedDeals.error
});

export default connect(
  mapStateToProps,
  { fetchSearchedDeals }
)(withStyles(styles)(SearchDeals));
