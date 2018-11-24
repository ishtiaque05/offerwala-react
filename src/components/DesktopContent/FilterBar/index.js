import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    padding: theme.spacing.unit,
    boxShadow: '0 3px 6px rgba(0, 0, 0, .05)',
    opacity: '.8',
    marginBottom: '40px',
    // marginLeft: theme.spacing.unit * 40,
    width: 'fit-content',
    paddingLeft: 0
  },
  chip: {
    margin: theme.spacing.unit
  }
});

class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: -1,
      chipData: [
        { key: 0, label: 'Top Deals' },
        { key: 1, label: 'Ending Today' },
        { key: 2, label: 'Ending in 10 days' }
      ]
    };
  }
  handleClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        {this.state.chipData.map(data => {
          return (
            <Chip
              label={data.label}
              key={data.key}
              clickable
              onClick={event => this.handleClick(event, data.key)}
              className={classes.chip}
              color="secondary"
              variant={
                this.state.selectedIndex === data.key ? 'default' : 'outlined'
              }
            />
          );
        })}
      </Paper>
    );
  }
}

export default withStyles(styles)(FilterBar);
