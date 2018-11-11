import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { JossNavbar } from 'components/layout';
import SubNavbar from 'components/layout/SubNavbar';
import BottomBar from 'components/layout/BottomBar';

import DefaultImage from 'assets/images/default_deal.jpg';

const deals = [
  {
    title: '20% off Pizza',
    imgUrl:
      'https://jossdeals-assets-production.s3.amazonaws.com/uploads/deal/picture/1337/Capture.PNG',
    validUntil: '20 Nov 2018',
    storeName: 'PizzaHut'
  },
  {
    title: '20% off Pizza',
    imgUrl: DefaultImage,
    validUntil: '20 Nov 2018',
    storeName: 'PizzaHut'
  },
  {
    title: '20% off Pizza',
    imgUrl: DefaultImage,
    validUntil: '20 Nov 2018',
    storeName: 'PizzaHut'
  },
  {
    title: '20% off Pizza',
    imgUrl: DefaultImage,
    validUntil: '20 Nov 2018',
    storeName: 'PizzaHut'
  },
  {
    title: '20% off Pizza',
    imgUrl: DefaultImage,
    validUntil: '20 Nov 2018',
    storeName: 'PizzaHut'
  },
  {
    title: '20% off Pizza',
    imgUrl: DefaultImage,
    validUntil: '20 Nov 2018',
    storeName: 'PizzaHut'
  },
  {
    title: '20% off Pizza',
    imgUrl: DefaultImage,
    validUntil: '20 Nov 2018',
    storeName: 'PizzaHut'
  },
  {
    title: '20% off Pizza',
    imgUrl: DefaultImage,
    validUntil: '20 Nov 2018',
    storeName: 'PizzaHut'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deals: [],
      deal: {
        title: '',
        imgUrl: '',
        validUntil: '',
        storeName: ''
      }
    };
  }

  componentDidMount() {
    this.setState({ deals });
  }

  render() {
    const { deals } = this.state;
    return (
      <div>
        <CssBaseline />
        <JossNavbar />
        <SubNavbar deals={deals} />
        <BottomBar />
      </div>
    );
  }
}

export default App;
