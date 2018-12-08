import { combineReducers } from 'redux';

import dealsReducer from './dealsReducer';
import searchedDealsReducer from './searchReducer';
import categoryDealsReducer from './categoryReducer';
import dealsEndingReducer from './dealsEndingReducer';

export default combineReducers({
  deals: dealsReducer,
  searchedDeals: searchedDealsReducer,
  category: categoryDealsReducer,
  dealsEnding: dealsEndingReducer
});
