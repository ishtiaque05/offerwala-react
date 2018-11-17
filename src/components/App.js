import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { JossNavbar, Container } from 'components/layout';
import { Route, Switch } from 'react-router-dom';

import AllDeals from 'components/Content/AllDeals';
import OnlineDeals from 'components/Content/OnlineDeals';
import StoreDeals from 'components/Content/StoreDeals';
import DealDetails from 'components/Content/DealDetails';

const App = () => (
  <div>
    <CssBaseline />
    <JossNavbar />
    <Container />

    <Switch>
      <Route exact path="/" component={AllDeals} />
      <Route exact path="/deals/online-deals" component={OnlineDeals} />
      <Route exact path="/deals/store-deals" component={StoreDeals} />
      <Route exact path="/deals/:id" component={DealDetails} />
    </Switch>
  </div>
);

export default App;
