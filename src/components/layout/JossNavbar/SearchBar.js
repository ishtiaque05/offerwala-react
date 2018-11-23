// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import{ Redirect } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';

import { fetchSearchedDeals } from './../../../actions';
import SearchIcon from '../../../assets/images/search.png';

const styles = theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 42,
      marginRight: theme.spacing.unit * 50,
      width: 'auto'
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing.unit * 2,
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 6,
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '1px solid #D4D4D4',
    height: theme.spacing.unit * 3,
    top: theme.spacing.unit * 1.5,
    '& img': {
      width: theme.spacing.unit * 4,
      height: theme.spacing.unit * 4
    }
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
    background: '#E9E9E9',
    borderRadius: theme.spacing.unit * 0.5,
    boxShadow: 'inset -2px 2px 4px #D4D4D4',
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 90,
      height: theme.spacing.unit * 5.75
    },
    '& input': {
      color: '#2F2F2F'
    }
  },
  searchInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 8,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  }
});

class SearchBar extends Component { 
  state = {
    keyword: '', 
    submit: false
  }

  searchHandler = e => {
    this.setState({
      keyword: e.target.value
    });

    if(e.key === 'Enter' && e.target.value) {
      this.setState({
        submit: true
      });

      this.setState({
        submit: false
      });
    }
  }

  render() {

    const { classes } = this.props;
    console.log(window.location.href);

    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <img src={SearchIcon} alt="Search Icon" />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.searchInput
          }}
          onKeyUp={ (e) => this.searchHandler(e) }
        />

        {
          this.state.submit ? 
            <Redirect 
              to={{
                pathname: `${window.location.href}deals?deal_name=${this.state.keyword}`
              }}
            /> : null
        }

      </div>
    );
  }
}
SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(null, { fetchSearchedDeals })(withStyles(styles)(SearchBar));
