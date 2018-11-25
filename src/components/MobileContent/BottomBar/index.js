import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CategoryDialog from './CategoryDialog';



import EverythingIcon from '../../../assets/images/everything.png';
import BeautyAndFitnessIcon from '../../../assets/images/beauty_and_fitness.png';
import FoodAndDiningIcon from '../../../assets/images/food.png';
import ShoppingIcon from '../../../assets/images/market.png';
import ServicesIcon from '../../../assets/images/services.png';
import MobileAndInternetIcon from '../../../assets/images/mobile_and_internet.png';
import ElectronicsAndHomeIcon from '../../../assets/images/home_electronics.png';
import HotelsAndTravelsIcon from '../../../assets/images/travels.png';
import BanksAndCards from '../../../assets/images/cards_and_banks.png';
 


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


const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: '-1px',
    zIndex: 9999,
    background: '#fff', 
    boxShadow: '0 1px 10px rgba(0, 0, 0, .2)', 
    height: '60px', 
    '& span': {
      fontSize: '14px'
    }, 
    '& img': {
      width: '30px'
    }
  }
};

class BottomBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0, 
      open: false, 
      selected: 0
    };
  }

  dialogeClickHandler = () => {
    this.setState({
      open: true
    });
  }

  listClickHandler = index => {
    this.setState({
      selected: index
    });
  }

  dialogeCloseHandler = () => {
    this.setState({
      open: false
    });
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render = () => {
    const { classes } = this.props;
    const { value, open, selected } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}>
          <CategoryDialog
            categories={ items }
            icons={ icons }
            open={ open } 
            click={ this.listClickHandler }
            close={ this.dialogeCloseHandler } />
          <BottomNavigationAction 
            onClick={ this.dialogeClickHandler }
            label={ items[selected] } 
            icon={<img src={ icons[selected] } alt={ 'category icon' } />} />
          {/* <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />} /> */}
          {/* <BottomNavigationAction label="User" icon={<UserIcon />} /> */}
      </BottomNavigation>
    );
  };
}

BottomBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomBar);
