import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 8 + theme.spacing.unit * 7,
    backgroundColor: theme.palette.background.paper
  },
  slider: {
    marginTop: theme.spacing.unit * 8
  }
});

class SubNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar className={classes.slider} position="fixed" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable>
            <Tab label="All Deals" component={Link} to="/" />
            <Tab
              label="Online Deals"
              component={Link}
              to="/deals/online-deals"
            />
            <Tab label="Store Deals" component={Link} to="/deals/store-deals" />
            {/* <Tab label="Coupons" /> */}
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
