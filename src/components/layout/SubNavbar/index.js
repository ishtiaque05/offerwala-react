import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Content from 'components/Content';
import TabContainer from 'components/layout/SubNavbar/TabContainer';

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
            <Tab label="All Deals" />
            <Tab label="Online Deals" />
            <Tab label="Shop Deals" />
            <Tab label="Coupons" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <Content />
          </TabContainer>
        )}
        {value === 1 && <TabContainer>Online Deals</TabContainer>}
        {value === 2 && <TabContainer>Shop Deals</TabContainer>}
        {value === 3 && <TabContainer>Coupons</TabContainer>}
      </div>
    );
  }
}

SubNavbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SubNavbar);
