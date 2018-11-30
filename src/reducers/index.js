import { combineReducers } from 'redux';

import dealsReducer from './deals';
import dealReducer from './deal';
import searchedDealsReducer from './search';
import categoryDealsReducer from './category';

export default combineReducers({
  deals: dealsReducer,
  deal: dealReducer,
  searchedDeals: searchedDealsReducer, 
  category: categoryDealsReducer
});
