import React from 'react';
import { Route, Switch } from 'react-router-dom';


import DesktopSubNav from 'components/layout/DesktopSubNav';
// eslint-disable-next-line
import SubNavbar from 'components/layout/SubNavbar';
import Carousel from 'components/layout/Carousel';
import FilterBar from 'components/layout/FilterBar';
import AllDeals from 'components/Content/AllDeals';
import OnlineDeals from 'components/Content/OnlineDeals';
import StoreDeals from 'components/Content/StoreDeals';
import DealDetails from 'components/Content/DealDetails';

const styles = {
    main: {
        margin: '0 250px', 
        padding: '15px'
    }
}

const MainContentArea = () => 
    <main style={ styles.main }>
        <Carousel />
        {/* <SubNavbar /> */}
        <DesktopSubNav />
        <FilterBar />
        <Switch>
            <Route exact path="/" component={AllDeals} />
            <Route exact path="/deals/online-deals" component={OnlineDeals} />
            <Route exact path="/deals/store-deals" component={StoreDeals} />
            <Route exact path="/deals/:id" component={DealDetails} />
        </Switch>
    </main>
 
export default MainContentArea;