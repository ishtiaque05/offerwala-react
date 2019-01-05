import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStorenameDeals } from '../actions';
import DealList from './DealList';

class StorenameDeals extends Component {
  state = {
    page: 0,
    deals: []
  };

  async componentDidMount() {
    const deals = await this.props.fetchStorenameDeals();
    this.setState({ deals });
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const deals = await this.props.fetchStorenameDeals(this.state.page);
    this.setState({ deals: [...this.state.deals, ...deals] });
  };

  render() {
    return (
      <DealList
        loadMore={this.fetchMoreData}
        deals={this.state.deals}
        error={this.props.error}
      />
    );
  }
}

StorenameDeals.propTypes = {
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
  { fetchStorenameDeals }
)(StorenameDeals);
