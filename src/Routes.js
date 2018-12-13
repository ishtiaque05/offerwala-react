import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import AllDeals from './components/Content/AllDeals';
import OnlineDeals from './components/Content/OnlineDeals';
import StoreDeals from './components/Content/StoreDeals';
import SearchDeals from './components/Content/SearchDeals';
import CategoryDeals from './components/Content/CategoryDeals';

const Routes = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={AllDeals} />
      <Route exact path="/deals/online-deals" component={OnlineDeals} />
      <Route exact path="/deals/store-deals" component={StoreDeals} />
      <Route exact path="/search/deals/:tagName" component={SearchDeals} />
      <Route exact path="/category/:categoryName" component={CategoryDeals} />
    </Switch>
  </Fragment>
);

export default Routes;
