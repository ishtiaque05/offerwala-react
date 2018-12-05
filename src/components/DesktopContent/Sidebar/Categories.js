import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';

import EverythingIcon from '../../../assets/images/everything.png';
import BeautyAndFitnessIcon from '../../../assets/images/beauty_and_fitness.png';
import FoodAndDiningIcon from '../../../assets/images/food.png';
import ShoppingIcon from '../../../assets/images/market.png';
import ServicesIcon from '../../../assets/images/services.png';
import MobileAndInternetIcon from '../../../assets/images/mobile_and_internet.png';
import ElectronicsAndHomeIcon from '../../../assets/images/home_electronics.png';
import HotelsAndTravelsIcon from '../../../assets/images/travels.png';
import BanksAndCards from '../../../assets/images/cards_and_banks.png';

const styles = theme => ({
  list: {
    width: '100%',
    maxWidth: theme.spacing.unit * 40,
    backgroundColor: 'transparent',
    padding: '0 15px'
  },
  activeLink: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.text.primary,
    borderRadius: theme.spacing.unit * 6,
    '& p': {
      fontWeight: 'bold'
    }
  },
  link: {
    opacity: '.8',
    transition: 'fontWeight .6s ease',
    margin: '1px 0',
    textDecoration: 'none'
  },
  listItem: {
    borderRadius: theme.spacing.unit * 6,
    '&:hover': {
      '& p': {
        fontWeight: 'bold'
      }
    }
  },
  icons: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 1.5
  }
});

const links = [
  '',
  'category/beauty-fitness',
  'category/food-dining',
  'category/shopping',
  'category/services',
  'category/mobile-internet',
  'category/electronics-home',
  'category/hotels-travels',
  'category/banks-cards'
];

const items = [
  'Everything',
  'Beauty & Fitness',
  'Food & Dining',
  'Shopping',
  'Services',
  'Mobile & Internet',
  'Electronics & Home',
  'Hotels & Travels',
  'Banks & Cards'
];

const icons = [
  EverythingIcon,
  BeautyAndFitnessIcon,
  FoodAndDiningIcon,
  ShoppingIcon,
  ServicesIcon,
  MobileAndInternetIcon,
  ElectronicsAndHomeIcon,
  HotelsAndTravelsIcon,
  BanksAndCards
];

class Categories extends Component {
  state = {
    selectedIndex: 0
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes } = this.props;

    return (
      <List component="nav" className={classes.list}>
        {items.map((item, index) => (
          <NavLink
            to={`/${links[index]}`}
            exact
            key={index}
            className={classes.link}
            activeClassName={classes.activeLink}>
            <ListItem button className={classes.listItem}>
              <img src={icons[index]} alt={item} className={classes.icons} />
              <Typography variant="body1">{item}</Typography>
            </ListItem>
          </NavLink>
        ))}
      </List>
    );
  }
}

Categories.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Categories);
