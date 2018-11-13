import { combineReducers } from 'redux';
import dealsReducer from 'reducers/deals';
import dealReducer from 'reducers/deal';

export default combineReducers({
  deals: dealsReducer,
  deal: dealReducer
});
