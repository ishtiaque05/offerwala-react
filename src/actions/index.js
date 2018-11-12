import axios from 'axios';
import {
  FETCH_DEALS_BEGIN,
  FETCH_DEALS_FAILURE,
  FETCH_DEALS_SUCCESS
} from 'actions/types';

export const fetchDeals = () => {
  return dispatch => {
    dispatch(fetchDealsBegin());
    return axios
      .get('http://www.jossdeals.com/api/v1/guests/deals/all_deals')
      .then(response => {
        dispatch(fetchDealsSuccess(response.data.deals));
        return response.data.deals;
      })
      .catch(error => dispatch(fetchDealsFailure(error)));
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
