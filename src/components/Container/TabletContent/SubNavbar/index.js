import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const navigations = [
  { route: '/', name: 'All Deals' },
  { route: '/deals/online-deals', name: 'Online Deals' },
  { route: '/deals/store-deals', name: 'Store Deals' }
];

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: '125px',
    backgroundColor: theme.palette.background.paper
  },
  slider: {
    marginTop: '75px'
  }
});

class SubNavbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.slider} position="fixed" color="default">
          <Tabs
            value={window.location.pathname}
            indicatorColor="primary"
            textColor="primary"
            scrollable>
            {navigations.map((navigation, i) => (
              <Tab
                key={i}
                value={navigation.route}
                label={navigation.name}
                component={Link}
                to={navigation.route}
              />
            ))}
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

SubNavbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SubNavbar);
