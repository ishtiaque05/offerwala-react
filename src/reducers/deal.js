import {
  FETCH_DEAL_WITH_ID_SUCCESS,
  FETCH_DEAL_WITH_ID_BEGIN,
  FETCH_DEAL_WITH_ID_FAILURE
} from 'actions/types';

const initialState = {
  item: {},
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEAL_WITH_ID_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_DEAL_WITH_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.payload.deal
      };
    case FETCH_DEAL_WITH_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        item: {}
      };
    default:
      return state;
  }
};
