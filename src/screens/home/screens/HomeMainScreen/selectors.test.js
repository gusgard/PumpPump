import { getUserState, getPopularPhotosState } from './selectors';

import { initialState } from '../../reducer';
import { NAME } from '../../constants';

it('selector getUserState', () => {
  const state = {
    [NAME]: initialState,
  };
  const expected = {
    photos: [],
    bio: [],
    name: '',
    thumbnail: {},
  };
  expect(getUserState(state)).toEqual(expected);
});

it('selector getPopularPhotosState', () => {
  const state = {
    [NAME]: initialState,
  };
  const expected = [];
  expect(getPopularPhotosState(state)).toEqual(expected);
});
