// @flow

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';

import SearchIcon from 'assets/images/search.png';

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
      marginLeft: theme.spacing.unit * 50,
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
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
      width: theme.spacing.unit * 4,
      height: theme.spacing.unit * 4
    }
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
    background: '#E9E9E9',
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 90
    }
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 6,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  }
});

const SearchBar = ({ classes }) => (
  <div className={classes.search}>
    <div className={classes.searchIcon}>
      <img src={SearchIcon} alt="Search Icon" />
    </div>
    <InputBase
      placeholder="Search…"
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput
      }}
    />
  </div>
);

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);
