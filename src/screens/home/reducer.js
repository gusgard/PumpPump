import { handleActions } from 'redux-actions';
import update from 'immutability-helper';

import { FETCH_USER, FETCH_PHOTOS_GRID } from './constants';

export const initialState = {
  user: {
    photos: [],
    description: [],
    name: '',
    thumbnail: {},
  },
  popularPhotos: [],
};

export default handleActions(
  {
    [FETCH_USER]: (state, { payload: { user } }) =>
      update(state, {
        user: { $set: user },
      }),
    [FETCH_PHOTOS_GRID]: (state, { payload: { popularPhotos } }) =>
      update(state, {
        popularPhotos: { $set: popularPhotos },
      }),
  },
  initialState,
);
