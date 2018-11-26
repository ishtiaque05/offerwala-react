import axios from 'axios';
import {
  FETCH_DEAL_WITH_ID_BEGIN,
  FETCH_DEAL_WITH_ID_FAILURE,
  FETCH_DEAL_WITH_ID_SUCCESS,
  FETCH_DEALS_BEGIN,
  FETCH_DEALS_FAILURE,
  FETCH_DEALS_SUCCESS,
  FETCH_SEARCHED_DEALS_BEGIN,
  FETCH_SEARCHED_DEALS_FAILURE,
  FETCH_SEARCHED_DEALS_SUCCESS
} from './types';

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

export const fetchDealWithId = id => {
  return async dispatch => {
    dispatch(fetchDealWithIdBegin());

    try {
      const response = await axios.get(
        `http://www.jossdeals.com/api/v1/guests/deals/${id}`
      );
      dispatch(fetchDealWithIdSuccess(response.data.deal));
      return response.data.deal;
    } catch (error) {
      dispatch(fetchDealWithIdFailure(error));
      throw new Error(error);
    }
  };
};

export const fetchDealWithIdBegin = () => ({
  type: FETCH_DEAL_WITH_ID_BEGIN
});

export const fetchDealWithIdSuccess = deal => ({
  type: FETCH_DEAL_WITH_ID_SUCCESS,
  payload: { deal }
});

export const fetchDealWithIdFailure = error => ({
  type: FETCH_DEAL_WITH_ID_FAILURE,
  payload: { error }
});

export const fetchSearchedDeals = tagName => {
  return async dispatch => {
    dispatch(fetchSearchedDealsBegin());

    try {
      const response = await axios.get(
        `http://www.jossdeals.com/api/v1/guests/search/deals?deal_name=${tagName}`
      );
      dispatch(fetchSearchedDealsSuccess(response.data.deals));
      console.log(response.data.deals);
      return response.data.deals;
    } catch (error) {
      dispatch(fetchSearchedDealsFailure(error));
      console.log(error);
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
