import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

import * as actions from 'actions';

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

const Content = ({ classes, deals }) => (
  <div className={classes.root}>
    <GridList cellHeight={160} cols={3}>
      {deals.map((deal, index) => (
        <Deal className={classes.gridItem} key={index} deal={deal} />
      ))}
    </GridList>
  </div>
);

Content.propTypes = {
  classes: PropTypes.object.isRequired,
  deals: PropTypes.array.isRequired
};

export default connect(
  null,
  actions
)(withStyles(styles)(Content));
