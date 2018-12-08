import {
  FETCH_DEALS_BY_CATEGORY_BEGIN,
  FETCH_DEALS_BY_CATEGORY_SUCCESS,
  FETCH_DEALS_BY_CATEGORY_FAILURE
} from '../actions/types';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEALS_BY_CATEGORY_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_DEALS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.deals
      };
    case FETCH_DEALS_BY_CATEGORY_FAILURE:
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
