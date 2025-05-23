import {
  FETCH_STORE_NAME_DEALS_BEGIN,
  FETCH_STORE_NAME_DEALS_SUCCESS,
  FETCH_STORE_NAME_DEALS_FAILURE
} from '../actions/types';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STORE_NAME_DEALS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_STORE_NAME_DEALS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.deals
      };
    case FETCH_STORE_NAME_DEALS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    default:
      return state;
  }
};
