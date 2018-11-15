// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

import { fetchOnlineDeals } from 'actions';

import Deal from 'components/Content/Deal';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  gridList: {
    width: 500,
    height: 450
  },
  gridItem: {
    marginRight: theme.spacing.unit
  }
});

class OnlineDeals extends Component {
  componentDidMount() {
    this.props.dispatch(fetchOnlineDeals());
  }

  render = () => {
    const { classes, error, loading, deals } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className={classes.root}>
        <GridList cellHeight={160} cols={3}>
          {deals.map(deal => (
            <Deal className={classes.gridItem} key={deal.id} deal={deal} />
          ))}
        </GridList>
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

export default connect(mapStateToProps)(withStyles(styles)(OnlineDeals));
