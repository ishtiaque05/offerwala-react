import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';

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
      marginLeft: theme.spacing.unit * 3,
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
    right: theme.spacing.unit * 0.25,
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
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
      <SearchIcon />
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

export default withStyles(styles)(SearchBar);
