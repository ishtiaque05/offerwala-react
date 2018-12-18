import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CategoryDialog from './CategoryDialog';

import UserIcon from '../../../../assets/svgs/user.svg';
import WalletIcon from '../../../../assets/svgs/wallet.svg';

// import EverythingIcon from '../../../../assets/images/everything.png';
// import BeautyAndFitnessIcon from '../../../../assets/images/beauty_and_fitness.png';
// import FoodAndDiningIcon from '../../../../assets/images/food.png';
// import ShoppingIcon from '../../../../assets/images/market.png';
// import ServicesIcon from '../../../../assets/images/services.png';
// import MobileAndInternetIcon from '../../../../assets/images/mobile_and_internet.png';
// import ElectronicsAndHomeIcon from '../../../../assets/images/home_electronics.png';
// import HotelsAndTravelsIcon from '../../../../assets/images/travels.png';
// import BanksAndCards from '../../../../assets/images/cards_and_banks.png';

import EverythingIcon from '../../../../assets/svgs/everything.svg';
import BeautyAndFitnessIcon from '../../../../assets/svgs/beauty-fitness.svg';
import FoodAndDiningIcon from '../../../../assets/svgs/food-dining.svg';
import ShoppingIcon from '../../../../assets/svgs/shopping.svg';
import ServicesIcon from '../../../../assets/svgs/services.svg';
import MobileAndInternetIcon from '../../../../assets/svgs/mobile-network.svg';
import ElectronicsAndHomeIcon from '../../../../assets/svgs/electronics.svg';
import HotelsAndTravelsIcon from '../../../../assets/svgs/hotels-travels.svg';
import BanksAndCards from '../../../../assets/svgs/banks-cards.svg';

const links = [
  '/category/beauty-fitness',
  '/category/food-dining',
  '/category/shopping',
  '/category/services',
  '/category/mobile-internet',
  '/category/electronics-home',
  '/category/hotels-travels',
  '/category/banks-cards'
];

const items = [
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
      width: '25px'
    }
  },
  icon: {
    width: '20px !important',
    height: '20px',
    margin: 0,
    marginTop: '2.5px',
    marginBottom: '2.5px',
    filter: 'invert(0.8)'
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

  componentDidMount() {
    const route = links.filter(link => link === window.location.pathname);
    this.setState({ selected: links.indexOf(...route) });
  }

  dialogeClickHandler = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  listClickHandler = index => {
    this.setState({
      selected: index
    });
  };

  dialogeCloseHandler = () => {
    this.setState({
      open: false
    });
  };

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
          categories={items}
          icons={icons}
          links={links}
          open={open}
          click={this.listClickHandler}
          close={this.dialogeCloseHandler}
        />
        <BottomNavigationAction
          onClick={this.dialogeClickHandler}
          label={
            window.location.pathname === '/'
              ? 'Categories'
              : items[selected]
              ? items[selected]
              : 'Categories'
          }
          icon={
            <img
              src={
                window.location.pathname === '/'
                  ? EverythingIcon
                  : icons[selected]
                  ? icons[selected]
                  : EverythingIcon
              }
              alt={'category icon'}
            />
          }
        />
        <BottomNavigationAction
          label="Coming Soon"
          icon={<img src={WalletIcon} alt="icon" className={classes.icon} />}
        />
        <BottomNavigationAction
          label="Coming Soon"
          icon={<img src={UserIcon} alt="icon" className={classes.icon} />}
        />
      </BottomNavigation>
    );
  };
}

BottomBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomBar);
