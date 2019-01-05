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
  FETCH_DEALS_ENDING_FAILURE,
  FETCH_STORE_NAME_DEALS_BEGIN,
  FETCH_STORE_NAME_DEALS_SUCCESS,
  FETCH_STORE_NAME_DEALS_FAILURE
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

export const fetchStorenameDealsBegin = () => ({
  type: FETCH_STORE_NAME_DEALS_BEGIN
});

export const fetchStorenameDealsSuccess = deals => ({
  type: FETCH_STORE_NAME_DEALS_SUCCESS,
  payload: { deals }
});

export const fetchStorenameDealsFailure = error => ({
  type: FETCH_STORE_NAME_DEALS_FAILURE,
  payload: { error }
});
