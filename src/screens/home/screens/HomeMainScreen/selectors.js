import { createSelector } from 'reselect';

import { NAME } from '../../constants';

const getPopularPost = state => state[NAME].popular;
export const getPopularPostState = createSelector(
  [getPopularPost],
  popular => popular,
);

const getUser = state => state[NAME].user;
export const getUserState = createSelector([getUser], user => user);
