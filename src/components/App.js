import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from 'react-router-dom';

import { JossNavbar } from 'components/layout';
import { DesktopSubNav } from 'components/layout';
import { Sidebar } from 'components/layout';
import { FilterBar } from 'components/layout';
// import SubNavbar from 'components/layout/SubNavbar';
import BottomBar from 'components/layout/BottomBar';
import AllDeals from 'components/Content/AllDeals';
import OnlineDeals from 'components/Content/OnlineDeals';
import StoreDeals from 'components/Content/StoreDeals';
import DealDetails from 'components/Content/DealDetails';

const App = () => (
  <div style={{paddingTop: 64}}>
    <CssBaseline />
    <JossNavbar />
    {/* <SubNavbar /> */}
    <DesktopSubNav />
    <FilterBar />
    <Sidebar />
    <BottomBar />

    <Switch>
      <Route exact path="/" component={AllDeals} />
      <Route exact path="/deals/online-deals" component={OnlineDeals} />
      <Route exact path="/deals/store-deals" component={StoreDeals} />
      <Route exact path="/deals/:id" component={DealDetails} />
    </Switch>
  </div>
);

export default App;
