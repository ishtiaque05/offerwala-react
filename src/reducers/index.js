import { combineReducers } from 'redux';

import dealsReducer from './deals';
import dealReducer from './deal';
import searchedDealsReducer from './search';

export default combineReducers({
  deals: dealsReducer,
  deal: dealReducer,
  searchedDeals: searchedDealsReducer
});
