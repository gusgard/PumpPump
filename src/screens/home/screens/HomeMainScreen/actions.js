import {
  FETCH_USER,
  FETCH_PHOTOS_SLIDER,
  FETCH_PHOTOS_GRID,
} from '../../constants';

export const fetchUser = user => ({ type: FETCH_USER, payload: { user } });
export const fetchPhotosSlider = user => ({
  type: FETCH_PHOTOS_SLIDER,
  payload: { user },
});
export const fetchPhotosGrid = user => ({
  type: FETCH_PHOTOS_GRID,
  payload: { user },
});
