import { LOAD_DEALS } from 'actions/types';

export const loadDeals = deals => {
  return {
    type: LOAD_DEALS,
    payload: deals
  };
};
