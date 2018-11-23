import React from 'react';
import { withWidth } from '@material-ui/core';

import MobileContent from '../../MobileContent';
import DesktopContent from '../../DesktopContent';

const Container = ({ width }) =>
  width === 'xs' ? <MobileContent /> : <DesktopContent />;

export default withWidth()(Container);
