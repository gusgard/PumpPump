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

    const photos = await UserFacade.fetchPhotos(user.id);
    dispatch({ type: FETCH_PHOTOS_SLIDER, payload: { photos } });
  } catch (e) {
    const title = 'Server error';
    const message = 'Fail connection to server';
    Alert.alert(title, message, [{ text: 'OK' }]);
  }
};

export const fetchPhotosGrid = grid => ({
  type: FETCH_PHOTOS_GRID,
  payload: { grid },
});
