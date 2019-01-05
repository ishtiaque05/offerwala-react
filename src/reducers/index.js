import { combineReducers } from 'redux';

import dealsReducer from './dealsReducer';
import searchedDealsReducer from './searchReducer';
import categoryDealsReducer from './categoryReducer';
import dealsEndingReducer from './dealsEndingReducer';
import storenameDealsReducer from './storenameDealsReducer';

export default combineReducers({
  deals: dealsReducer,
  searchedDeals: searchedDealsReducer,
  category: categoryDealsReducer,
  dealsEnding: dealsEndingReducer,
  storenameDeals: storenameDealsReducer
});
