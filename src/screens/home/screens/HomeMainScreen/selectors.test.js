import { getUserState, getPopularPostState } from './selectors';

import { initialState } from '../../reducer';
import { NAME } from '../../constants';

it('selector getUserState', () => {
  const state = {
    [NAME]: initialState,
  };
  const expected = {
    photos: [],
    description: [],
    name: '',
    thumbnail: {},
  };
  expect(getUserState(state)).toEqual(expected);
});

it('selector getPopularPostState', () => {
  const state = {
    [NAME]: initialState,
  };
  const expected = [];
  expect(getPopularPostState(state)).toEqual(expected);
});
