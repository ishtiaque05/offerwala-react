import axios from 'axios';
import {
  FETCH_DEALS_BEGIN,
  FETCH_DEALS_FAILURE,
  FETCH_DEALS_SUCCESS,
  FETCH_DEALS_BY_CATEGORY_BEGIN,
  FETCH_DEALS_BY_CATEGORY_FAILURE,
  FETCH_DEALS_BY_CATEGORY_SUCCESS,
  FETCH_SEARCHED_DEALS_BEGIN,
  FETCH_SEARCHED_DEALS_FAILURE,
  FETCH_SEARCHED_DEALS_SUCCESS,
  FETCH_DEALS_ENDING_BEGIN,
  FETCH_DEALS_ENDING_SUCCESS,
  FETCH_DEALS_ENDING_FAILURE
} from './types';

export const fetchDealsBegin = () => ({
  type: FETCH_DEALS_BEGIN
});

export const fetchDealsSuccess = deals => ({
  type: FETCH_DEALS_SUCCESS,
  payload: { deals }
});

export const fetchDealsFailure = error => ({
  type: FETCH_DEALS_FAILURE,
  payload: { error }
});

export const fetchAllDeals = (page = 1) => {
  return async dispatch => {
    dispatch(fetchDealsBegin());

    try {
      const response = await axios.get(
        'http://www.jossdeals.com/api/v1/guests/deals/all_deals',
        {
          params: { page }
        }
      );
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
      const response = await axios.get(
        'http://www.jossdeals.com/api/v1/guests/deals/online_deals',
        {
          params: { page }
        }
      );
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
      const response = await axios.get(
        'http://www.jossdeals.com/api/v1/guests/deals/store_deals',
        {
          params: { page }
        }
      );
      dispatch(fetchDealsSuccess(response.data.deals));
      return response.data.deals;
    } catch (error) {
      dispatch(fetchDealsFailure(error));
      throw new Error(error);
    }
  };
};

export const fetchSearchedDealsBegin = () => ({
  type: FETCH_SEARCHED_DEALS_BEGIN
});

export const fetchSearchedDealsSuccess = deals => ({
  type: FETCH_SEARCHED_DEALS_SUCCESS,
  payload: { deals }
});

export const fetchSearchedDealsFailure = error => ({
  type: FETCH_SEARCHED_DEALS_FAILURE,
  payload: { error }
});

export const fetchSearchedDeals = tagName => {
  return async dispatch => {
    dispatch(fetchSearchedDealsBegin());

    try {
      const response = await axios.get(
        'http://www.jossdeals.com/api/v1/guests/search/deals',
        {
          params: { deal_name: tagName }
        }
      );
      dispatch(fetchSearchedDealsSuccess(response.data.deals));
      return response.data.deals;
    } catch (error) {
      dispatch(fetchSearchedDealsFailure(error));
      throw new Error(error);
    }
  };
};

export const fetchDealsByCategoryBegin = () => ({
  type: FETCH_DEALS_BY_CATEGORY_BEGIN
});

export const fetchDealsByCategorySuccess = deals => ({
  type: FETCH_DEALS_BY_CATEGORY_SUCCESS,
  payload: { deals }
});

export const fetchDealsByCategoryFailure = error => ({
  type: FETCH_DEALS_BY_CATEGORY_FAILURE,
  payload: { error }
});

export const fetchDealsByCategory = (id, page = 1) => {
  return async dispatch => {
    dispatch(fetchDealsByCategoryBegin());

    try {
      const response = await axios.get(
        `http://www.jossdeals.com/api/v1/guests/search/${id}/category_search`,
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

export const fetchDealsEndingBegin = () => ({
  type: FETCH_DEALS_ENDING_BEGIN
});

export const fetchDealsEndingSuccess = deals => ({
  type: FETCH_DEALS_ENDING_SUCCESS,
  payload: { deals }
});

export const fetchDealsEndingFailure = error => ({
  type: FETCH_DEALS_ENDING_FAILURE,
  payload: { error }
});

export const fetchDealsEnding = endingTerm => {
  return async dispatch => {
    dispatch(fetchDealsEndingBegin());

    try {
      const response = await axios.get(
        `http://www.jossdeals.com/api/v1/guests/search/${endingTerm}`
      );
      dispatch(fetchDealsEndingSuccess(response.data.deals));
      return response.data.deals;
    } catch (error) {
      dispatch(fetchDealsEndingFailure(error));
      throw new Error(error);
    }
  };
};
