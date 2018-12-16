import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';

import SearchIcon from '../../assets/images/search.png';

const styles = theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    flexBasis: '57%',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
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
    [theme.breakpoints.down('sm')]: {
      top: '20%'
    },
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
      width: '-webkit-fill-available',
      height: theme.spacing.unit * 5.75, 
      maxWidth: '1000px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
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
    width: '100%'
    // [theme.breakpoints.up('md')]: {
    //   width: 200
    // }
  }
});

class SearchBar extends Component {
  searchHandler = e => {
    if (e.key === 'Enter' && e.target.value) {
      window.location.pathname = 'search/deals/' + e.target.value;
    }
  };

  render() {
    const { classes } = this.props;

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
          onKeyUp={e => this.searchHandler(e)}
        />
      </div>
    );
  }
}
SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);
