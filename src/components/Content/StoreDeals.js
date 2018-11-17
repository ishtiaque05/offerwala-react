// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

import { fetchStoreDeals } from 'actions';

import Deal from 'components/Content/Deal';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 150,
      marginLeft: theme.spacing.unit * 42.5
    }
  },
  gridList: {
    width: 500,
    height: 450
  },
  gridItem: {
    marginRight: theme.spacing.unit
  }
});

class StoreDeals extends Component {
  componentDidMount() {
    this.props.dispatch(fetchStoreDeals());
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
        <GridList
          cellHeight={160}
          cols={3}
          style={{ justifyContent: 'center' }}>
          {deals.map(deal => (
            <Deal className={classes.gridItem} key={deal.id} deal={deal} />
          ))}
        </GridList>
      </div>
    );
  };
}

StoreDeals.propTypes = {
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

export default connect(mapStateToProps)(withStyles(styles)(StoreDeals));
