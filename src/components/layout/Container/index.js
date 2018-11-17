import React from 'react';
import { withWidth } from '@material-ui/core';

import MobileContent from 'components/MobileContent';
import DesktopContent from 'components/DesktopContent';

const Container = ({ width }) =>
  width === 'xs' ? <MobileContent /> : <DesktopContent />;

export default withWidth()(Container);
