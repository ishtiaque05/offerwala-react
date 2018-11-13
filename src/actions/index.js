import axios from 'axios';
import {
  FETCH_DEALS_BEGIN,
  FETCH_DEALS_FAILURE,
  FETCH_DEALS_SUCCESS
} from 'actions/types';

export const fetchAllDeals = () => {
  return async dispatch => {
    dispatch(fetchDealsBegin());

    try {
      const response = await axios.get(
        'http://www.jossdeals.com/api/v1/guests/deals/all_deals'
      );
      dispatch(fetchDealsSuccess(response.data.deals));
      return response.data.deals;
    } catch (error) {
      dispatch(fetchDealsFailure(error));
      throw new Error(error);
    }
  };
};

export const fetchOnlineDeals = () => {
  return async dispatch => {
    dispatch(fetchDealsBegin());

    try {
      const response = await axios.get(
        'http://www.jossdeals.com/api/v1/guests/deals/online_deals'
      );
      dispatch(fetchDealsSuccess(response.data.deals));
      return response.data.deals;
    } catch (error) {
      dispatch(fetchDealsFailure(error));
      throw new Error(error);
    }
  };
};

export const fetchStoreDeals = () => {
  return async dispatch => {
    dispatch(fetchDealsBegin());

    try {
      const response = await axios.get(
        'http://www.jossdeals.com/api/v1/guests/deals/store_deals'
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
