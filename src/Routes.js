import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllDeals from './components/AllDeals';
import OnlineDeals from './components/OnlineDeals';
import StoreDeals from './components/StoreDeals';
import SearchDeals from './components/SearchDeals';
import CategoryDeals from './components/CategoryDeals';
import DealsEnding from './components/DealsEnding';
import StorenameDeals from './components/StorenameDeals';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={AllDeals} />
    <Route exact path="/online-deals" component={OnlineDeals} />
    <Route exact path="/store-deals" component={StoreDeals} />
    <Route exact path="/store/:storeName" component={StorenameDeals} />
    <Route exact path="/deals/:dealsEnding" component={DealsEnding} />
    <Route exact path="/search/:tagName" component={SearchDeals} />
    <Route exact path="/category/:categoryName" component={CategoryDeals} />
  </Switch>
);

export default Routes;
