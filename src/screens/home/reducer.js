import { handleActions } from 'redux-actions';
import update from 'immutability-helper';

import {
  FETCH_USER,
  FETCH_PHOTOS_SLIDER,
  FETCH_PHOTOS_GRID,
} from './constants';

export const initialState = {
  user: {
    photos: [],
  },
  // slider: {},
  grid: {},
};

export default handleActions(
  {
    [FETCH_USER]: (state, { payload: { user } }) =>
      update(state, {
        user: { $set: user },
      }),
    [FETCH_PHOTOS_GRID]: (state, { payload: { slider } }) =>
      update(state, {
        slider: { $set: slider },
      }),
    [FETCH_PHOTOS_SLIDER]: (state, { payload: { photos } }) =>
      update(state, {
        user: {
          photos: { $set: photos },
        },
      }),
  },
  initialState,
);
