import dealsReducer from 'reducers/deals';
import { LOAD_DEALS } from 'actions/types';

it('handles actions of type LOAD_DEALS', () => {
  const action = {
    type: LOAD_DEALS,
    payload: 'Deals'
  };

  const newState = dealsReducer([], action);
  expect(newState).toEqual(['Deals']);
});
