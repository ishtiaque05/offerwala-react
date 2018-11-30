import { combineReducers } from 'redux';

import dealsReducer from './deals';
import searchedDealsReducer from './search';

export default combineReducers({
  deals: dealsReducer,
  searchedDeals: searchedDealsReducer
});
