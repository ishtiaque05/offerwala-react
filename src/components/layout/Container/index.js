import React, { Fragment } from 'react';
import { Hidden } from '@material-ui/core';

import MobileContent from '../../MobileContent';
import TabletContent from '../../TabletContent';
import DesktopContent from '../../DesktopContent';

const Container = () => (
  <Fragment>
    <Hidden smUp>
      <MobileContent />
    </Hidden>
    <Hidden mdUp xsDown>
      <TabletContent />
    </Hidden>
    <Hidden smDown>
      <DesktopContent />
    </Hidden>
  </Fragment>
);
export default Container;
