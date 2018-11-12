import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

import { fetchDeals } from 'actions';

import Deal from 'components/Content/Deal';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  gridItem: {
    marginRight: theme.spacing.unit
  }
});

class Content extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDeals());
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

Content.propTypes = {
  classes: PropTypes.object.isRequired,
  deals: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  deals: state.deals.items,
  loading: state.deals.loading,
  error: state.deals.error
});

export default connect(mapStateToProps)(withStyles(styles)(Content));
