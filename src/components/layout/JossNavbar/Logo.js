import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withWidth } from '@material-ui/core';

import { getImageLink } from 'utils';

export const Logo = ({ width }) => (
  <Fragment>
    <img
      id="logo"
      src={getImageLink(width)}
      alt="Jossdeals Logo"
      style={{ height: '40px' }}
    />
  </Fragment>
);

Logo.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(Logo);
