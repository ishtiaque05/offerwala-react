import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AllDeals from './components/Content/AllDeals';
import OnlineDeals from './components/Content/OnlineDeals';
import StoreDeals from './components/Content/StoreDeals';
// import DealDetails from './components/Content/DealDetails';
import SearchDeals from './components/Content/SearchDeals';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={AllDeals} />
    <Route exact path="/deals/online-deals" component={OnlineDeals} />
    <Route exact path="/deals/store-deals" component={StoreDeals} />
    {/* <Route exact path="/deals/:id" component={DealDetails} /> */}
    {/*// TODO: Implement Search Functionality*/}
    <Route exact path="/search/deals/:tagName" component={SearchDeals} />
  </Switch>
);

export default Routes;
