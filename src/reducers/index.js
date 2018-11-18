import { combineReducers } from 'redux';
import dealsReducer from 'reducers/deals';
import dealReducer from 'reducers/deal';
import searchedDealsReducer from 'reducers/search';

export default combineReducers({
  deals: dealsReducer,
  deal: dealReducer,
  searchedDeals: searchedDealsReducer
});
