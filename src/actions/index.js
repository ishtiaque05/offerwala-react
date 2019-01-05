import axios from 'axios';
import {
  fetchDealsBegin,
  fetchDealsSuccess,
  fetchDealsFailure,
  fetchSearchedDealsBegin,
  fetchSearchedDealsSuccess,
  fetchSearchedDealsFailure,
  fetchDealsByCategoryBegin,
  fetchDealsByCategorySuccess,
  fetchDealsByCategoryFailure,
  fetchDealsEndingBegin,
  fetchDealsEndingSuccess,
  fetchDealsEndingFailure,
  fetchStorenameDealsBegin,
  fetchStorenameDealsSuccess,
  fetchStorenameDealsFailure
} from './actionsHelper';

export const fetchAllDeals = (page = 1) => {
  return async dispatch => {
    dispatch(fetchDealsBegin());

    try {
      const response = await axios.get('/api/v1/guests/deals/all_deals', {
        params: { page }
      });
      dispatch(fetchDealsSuccess(response.data.deals));
      return response.data.deals;
    } catch (error) {
      dispatch(fetchDealsFailure(error));
      throw new Error(error);
    }
  };
};

export const fetchOnlineDeals = (page = 1) => {
  return async dispatch => {
    dispatch(fetchDealsBegin());

    try {
      const response = await axios.get('/api/v1/guests/deals/online_deals', {
        params: { page }
      });
      dispatch(fetchDealsSuccess(response.data.deals));
      return response.data.deals;
    } catch (error) {
      dispatch(fetchDealsFailure(error));
      throw new Error(error);
    }
  };
};

export const fetchStoreDeals = (page = 1) => {
  return async dispatch => {
    dispatch(fetchDealsBegin());

    try {
      const response = await axios.get('/api/v1/guests/deals/store_deals', {
        params: { page }
      });
      dispatch(fetchDealsSuccess(response.data.deals));
      return response.data.deals;
    } catch (error) {
      dispatch(fetchDealsFailure(error));
      throw new Error(error);
    }
  };
};

export const fetchSearchedDeals = tagName => {
  return async dispatch => {
    dispatch(fetchSearchedDealsBegin());

    try {
      const response = await axios.get('/api/v1/guests/search/deals', {
        params: { deal_name: tagName }
      });
      dispatch(fetchSearchedDealsSuccess(response.data.deals));
      return response.data.deals;
    } catch (error) {
      dispatch(fetchSearchedDealsFailure(error));
      throw new Error(error);
    }
  };
};

export const fetchDealsByCategory = (id, page = 1) => {
  return async dispatch => {
    dispatch(fetchDealsByCategoryBegin());

    try {
      const response = await axios.get(
        `/api/v1/guests/search/${id}/category_search`,
        {
          params: { page }
        }
      );
      dispatch(fetchDealsByCategorySuccess(response.data.deals));
      return response.data.deals;
    } catch (error) {
      dispatch(fetchDealsByCategoryFailure(error));
      throw new Error(error);
    }
  };
};

export const fetchDealsEnding = endingTerm => {
  return async dispatch => {
    dispatch(fetchDealsEndingBegin());

    try {
      const response = await axios.get(`/api/v1/guests/search/${endingTerm}`);
      dispatch(fetchDealsEndingSuccess(response.data.deals));
      return response.data.deals;
    } catch (error) {
      dispatch(fetchDealsEndingFailure(error));
      throw new Error(error);
    }
  };
};

export const fetchStorenameDeals = (storeId, page = 1) => {
  return async dispatch => {
    dispatch(fetchStorenameDealsBegin());

    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/guests/shops/${storeId}/deals`,
        {
          params: { page }
        }
      );
      dispatch(fetchStorenameDealsSuccess(response.data.deals));
      return response.data.deals;
    } catch (error) {
      dispatch(fetchStorenameDealsFailure(error));
      throw new Error(error);
    }
  };
};
