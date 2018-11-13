import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import FilterButton from './FilterButton';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      padding: theme.spacing.unit,
      boxShadow: '0 3px 6px rgba(0, 0, 0, .1)'
    },
});

const FilterBar = ({ classes }) => {
    return (
        <Paper className={classes.root}>
            <FilterButton>Top Deals</FilterButton>
            <FilterButton>Ending Today</FilterButton>
            <FilterButton>Ending 10 Days</FilterButton>
        </Paper>
    );
}
 
export default withStyles(styles)(FilterBar);