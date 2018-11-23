import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withWidth } from '@material-ui/core';
import DesktopDealDetails from './DesktopDealDetails';
import MobileDealDetails from './MobileDealDetails';

import { fetchDealWithId } from '../../../actions';

class DealDetails extends Component {
  componentDidMount() {
    this.props.dispatch(
      fetchDealWithId(parseInt(this.props.match.params.id, 10))
    );
  }

  render() {
    const { loading, error, deal, width } = this.props;

    return width === 'xs' ? (
      <MobileDealDetails deal={deal} loading={loading} error={error} />
    ) : (
      <DesktopDealDetails deal={deal} loading={loading} error={error} />
    );
  }
}

DealDetails.propTypes = {
  deal: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object
};

const mapStateToProps = state => ({
  deal: state.deal.item,
  loading: state.deal.loading,
  error: state.deal.error
});

export default connect(mapStateToProps)(withWidth()(DealDetails));
