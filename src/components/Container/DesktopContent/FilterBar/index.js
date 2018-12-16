import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

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
    width: 'fit-content',
    paddingLeft: 0,
    background: '#FAFAFA'
  },
  chip: {
    margin: theme.spacing.unit
  },
  link: {
    textDecoration: 'none'
  }
});

class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: -1,
      chipData: [
        // { key: 0, label: 'Top Deals' },
        { key: 0, label: 'Ending Today', link: '/deals/ending-today' },
        {
          key: 1,
          label: 'Ending in 10 days',
          link: '/deals/ending-in-ten-days'
        }
      ]
    };
  }
  handleClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes, location } = this.props;
    return (
      <Paper className={classes.root}>
        {this.state.chipData.map(data => {
          return (
            <NavLink
              to={`${data.link}`}
              key={data.key}
              className={classes.link}>
              <Chip
                label={data.label}
                clickable
                onClick={event => this.handleClick(event, data.key)}
                className={classes.chip}
                color="secondary"
                variant={
                  location.pathname === data.link ? 'default' : 'outlined'
                }
              />
            </NavLink>
          );
        })}
      </Paper>
    );
  }
}

export default withStyles(styles)(withRouter(FilterBar));
