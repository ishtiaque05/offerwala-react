import dealsReducer from 'reducers/deals';
import { FETCH_DEALS } from 'actions/types';

it('handles actions of type FETCH_DEALS', () => {
  const action = {
    type: FETCH_DEALS,
    payload: 'Deals'
  };

  const newState = dealsReducer([], action);
  expect(newState).toEqual(['Deals']);
});
