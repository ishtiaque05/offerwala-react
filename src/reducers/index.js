import { combineReducers } from 'redux';
import dealsReducer from 'reducers/deals';

export default combineReducers({
  deals: dealsReducer
});
