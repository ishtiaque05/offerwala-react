import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AllDeals from './components/Content/AllDeals';
import OnlineDeals from './components/Content/OnlineDeals';
import StoreDeals from './components/Content/StoreDeals';
import SearchDeals from './components/Content/SearchDeals';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={AllDeals} />
    <Route exact path="/deals/online-deals" component={OnlineDeals} />
    <Route exact path="/deals/store-deals" component={StoreDeals} />
    <Route exact path="/search/:tagName" component={SearchDeals} />
  </Switch>
);

export default Routes;
