import { Alert } from 'react-native';

import { UserFacade } from '@entities';

import {
  FETCH_USER,
  FETCH_PHOTOS_SLIDER,
  FETCH_PHOTOS_GRID,
} from '../../constants';

export const fetchUser = () => async dispatch => {
  try {
    const user = await UserFacade.fetchOne();
    dispatch({ type: FETCH_USER, payload: { user } });
  } catch (e) {
    const title = 'Server error';
    const message = 'Fail connection to server';
    Alert.alert(title, message, [{ text: 'OK' }]);
  }
};

export const fetchPhotosSlider = user => ({
  type: FETCH_PHOTOS_SLIDER,
  payload: { user },
});
export const fetchPhotosGrid = user => ({
  type: FETCH_PHOTOS_GRID,
  payload: { user },
});
