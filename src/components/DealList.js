import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import { withStyles } from '@material-ui/core';

const styles = () => ({
  masonry: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  }
});

class DealList extends Component {
  state = {
    page: 0,
    deals: []
  };

  render = () => {
    const { classes, deals } = this.props;

    const masonryOptions = {
      transitionDuration: 3
    };

    return (
      <Masonry
        className={classes.masonry}
        elementType={'div'}
        options={masonryOptions}
        updateOnEachImageLoad={false}>
        {deals}
      </Masonry>
    );
  };
}

DealList.propTypes = {
  deals: PropTypes.array.isRequired
};

export default withStyles(styles)(DealList);
