import { createSelector } from 'reselect'

import { NAME } from '../../constants'

const getPopularPhotos = state => state[NAME].popularPhotos
export const getPopularPhotosState = createSelector(
  [getPopularPhotos],
  popularPhotos => popularPhotos,
)

const getUser = state => state[NAME].user
export const getUserState = createSelector([getUser], user => user)
