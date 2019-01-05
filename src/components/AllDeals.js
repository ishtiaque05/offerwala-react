import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Circle } from 'react-preloaders';

import { fetchAllDeals } from '../actions';

import Deal from './Deal';
import DealList from './DealList';

class AllDeals extends Component {
  state = {
    page: 0,
    deals: []
  };

  async componentDidMount() {
    const deals = await this.props.fetchAllDeals();
    this.setState({ deals });
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const deals = await this.props.fetchAllDeals(this.state.page);
    this.setState({ deals: [...this.state.deals, ...deals] });
  };

  render = () => {
    const allDeals = this.state.deals.map((deal, index) => (
      <React.Fragment key={index}>
        <Deal deal={deal} />
      </React.Fragment>
    ));

    if (this.state.deals.length < 1) {
      return <Circle />;
    }

    return (
      <DealList
        loadMore={this.fetchMoreData}
        deals={allDeals}
        error={this.props.error}
      />
    );
  };
}

AllDeals.propTypes = {
  deals: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object
};

const mapStateToProps = state => ({
  deals: state.deals.items,
  loading: state.deals.loading,
  error: state.deals.error
});

export default connect(
  mapStateToProps,
  { fetchAllDeals }
)(withRouter(AllDeals));
