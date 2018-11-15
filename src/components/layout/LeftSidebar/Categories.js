import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const styles = theme => ({
  list: {
    width: '100%',
    maxWidth: 250,
    backgroundColor: 'transparent',
    padding: '0 15px'
  },
  selectedlistitem: {
    backgroundColor: '#E9E9E9', 
    color: '#000000', 
    borderRadius: '50px', 
    fontWeight: 'bold'
  }, 
  listitem: {
    fontWeight: 'regular',
    opacity: '.8', 
    transition: 'fontWeight .6s ease',  
    margin: '1px 0', 
    '&:hover': {
      borderRadius: '50px', 
      fontWeight: 'bold'
    }
  }
});

const items = [
  'Everything', 
  'Beauty & Fitness',
  'Food & Dining',
  'Shopping',
  'Services', 
  'Mobile & Internet',
  'Electronics & Home',  
  'Supermarkets', 
  'Hotels & Travels', 
  'Banks & Cards'
];


class Categories extends Component {
  state = {
    selectedIndex: 0,
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes } = this.props;

    return (
      <List component="nav" className={ classes.list }>
        {items.map((item, index) => (
          <ListItem
            button
            className={ this.state.selectedIndex === index ? classes.selectedlistitem : classes.listitem }
            key={index}
            selected={this.state.selectedIndex === index}
            onClick={event => this.handleListItemClick(event, index)}
          >
            {item}
          </ListItem>
        ))}
      </List>
    )
  }



}

Categories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Categories);