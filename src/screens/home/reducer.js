import { handleActions } from 'redux-actions';
import update from 'immutability-helper';

import { FETCH_USER, FETCH_ALL_POPULAR } from './constants';

export const initialState = {
  user: {
    photos: [],
    description: [],
    name: '',
    thumbnail: {},
  },
  popular: [],
};

export default handleActions(
  {
    [FETCH_USER]: (state, { payload: { user } }) =>
      update(state, {
        user: { $set: user },
      }),
    [FETCH_ALL_POPULAR]: (state, { payload: { popular } }) =>
      update(state, {
        popular: { $set: popular },
      }),
  },
  initialState,
);
