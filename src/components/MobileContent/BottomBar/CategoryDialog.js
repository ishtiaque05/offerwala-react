import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import { 
  Typography, 
  ListItem, 
  List, 
  Dialog } 
  from '@material-ui/core';


const styles = theme => ({
  root: {
    backgroundColor: '#fff',
    top: '45%',
    bottom: '60px',
    '&>div': {
      bottom: '60px'
    }
  },
  wrapper: {
    padding: '25px 5px'
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    position: 'relative',
    '&:after': {
      position: 'absolute',
      height: '100%',
      left: '50%',
      top: '0',
      width: '1px',
      backgroundColor: '#f6f6f6',
      content: '""'
    }
  },
  selectedListItem: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.text.primary,
    borderRadius: theme.spacing.unit * 6, 
    paddingLeft: '10px',
    paddingRight: '10px',  
    '& p': {
      fontWeight: 'bold',
      fontSize: '13px'
    }
  },
  listItem: {
    opacity: '.8',
    transition: 'fontWeight .6s ease', 
    paddingLeft: '10px',
    paddingRight: '10px',  
    '&:hover': {
      borderRadius: theme.spacing.unit * 6,
      fontWeight: 'bold',
      '& p': {
        fontWeight: 'bold'
      }
    }
  },
  icons: {
    width: '20px',
    height: 'auto',
    marginRight: '5px'
  },
  appBar: {
    position: 'relative'
  },
  flex: {
    flex: 1
  },
  anchor: {
    flexBasis: '45%',
    padding: '0',
    margin: '1px 0'
  }
});

class CategoryDialog extends Component {
  state = {
    selectedIndex: 0
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
    this.props.click(index);
    this.props.close();
  };
  

  render() {
    const { classes, open, close, categories, icons, links } = this.props;

    return (
      <Dialog
        fullScreen
        open={open}
        onClose={close}
        className={classes.root}
        PaperProps={{
          style: {
            boxShadow: 'none',
            backgroundColor: '#fff',
            borderTopLeftRadius: '35px',
            borderTopRightRadius: '35px'
          }
        }}>
        <div className={classes.wrapper}>
          <List component="nav" className={classes.list}>
            {categories.map((item, index) => (
              <Link
                to={`/${links[index]}`}
                className={classes.anchor}
                key={index}
                style={{ textDecoration: 'none' }}>
                <ListItem
                  button
                  className={
                    this.state.selectedIndex === index
                      ? classes.selectedListItem
                      : classes.listItem
                  }
                  selected={this.state.selectedIndex === index}
                  onClick={event => this.handleListItemClick(event, index)}>
                  <img
                    src={icons[index]}
                    alt={item}
                    className={classes.icons}
                  />
                  <Typography variant="body1">{item}</Typography>
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Dialog>
    );
  }
}

CategoryDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CategoryDialog);
