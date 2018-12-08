import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import { fetchDealsEnding } from '../actions';
import Deal from './Deal';
import { withStyles } from '@material-ui/core';

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

class DealsEnding extends Component {
  componentDidMount() {
    if (this.props.match.params.dealsEnding === 'ending-today') {
      this.props.fetchDealsEnding('ending_today');
    } else if (this.props.match.params.dealsEnding === 'ending-in-ten-days') {
      this.props.fetchDealsEnding('ending_in_ten');
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.dealsEnding !== prevProps.match.params.dealsEnding
    ) {
      if (this.props.match.params.dealsEnding === 'ending-today') {
        this.props.fetchDealsEnding('ending_today');
      } else if (this.props.match.params.dealsEnding === 'ending-in-ten-days') {
        this.props.fetchDealsEnding('ending_in_ten');
      }
    }
  }

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
  deals: state.dealsEnding.items
});

export default connect(
  mapStateToProps,
  { fetchDealsEnding }
)(withStyles(styles)(DealsEnding));
