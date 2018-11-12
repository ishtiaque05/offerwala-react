import { LOAD_DEALS } from 'actions/types';

export default (initialState = [], action) => {
  switch (action.type) {
    case LOAD_DEALS:
      return [...initialState, action.payload];
    default:
      return initialState;
  }
};
