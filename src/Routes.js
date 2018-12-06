import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AllDeals from './components/AllDeals';
import OnlineDeals from './components/OnlineDeals';
import StoreDeals from './components/StoreDeals';
import SearchDeals from './components/SearchDeals';
import CategoryDeals from './components/CategoryDeals';
import DealsEnding from './components/DealsEnding';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={AllDeals} />
    <Route exact path="/online-deals" component={OnlineDeals} />
    <Route exact path="/store-deals" component={StoreDeals} />
    <Route exact path="/deals/:dealsEnding" component={DealsEnding} />
    />
    <Route exact path="/about" />
    <Route exact path="/faq" />
    <Route exact path="/privacy" />
    <Route exact path="/search/:tagName" component={SearchDeals} />
    <Route exact path="/category/:categoryName" component={CategoryDeals} />
    <Route exact path="/:userName/wallet" />
    <Route exact path="/:userName/profile" />
  </Switch>
);

export default Routes;
