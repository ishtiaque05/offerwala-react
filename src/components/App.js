import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from 'react-router-dom';

import { JossNavbar } from 'components/layout';
import SubNavbar from 'components/layout/SubNavbar';
import BottomBar from 'components/layout/BottomBar';
import OnlineDeals from 'components/Content/OnlineDeals';
import StoreDeals from 'components/Content/StoreDeals';

const App = () => (
  <div>
    <CssBaseline />
    <JossNavbar />
    <SubNavbar />
    <BottomBar />

    <Switch>
      <Route exact path="deals/online-deals" component={OnlineDeals} />
      <Route exact path="deals/store-deals" component={StoreDeals} />
    </Switch>
  </div>
);

export default App;
