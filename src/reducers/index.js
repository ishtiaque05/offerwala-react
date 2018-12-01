import { combineReducers } from 'redux';

import dealsReducer from './deals';
import searchedDealsReducer from './search';
import categoryDealsReducer from './category';

export default combineReducers({
  deals: dealsReducer,
  searchedDeals: searchedDealsReducer,
  category: categoryDealsReducer
});
