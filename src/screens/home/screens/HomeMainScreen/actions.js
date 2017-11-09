import { Alert } from 'react-native';

import { User, FeedFacade } from '@entities';
import { GET_USER } from '@queries';

import {
  FETCH_USER,
  FETCH_PHOTOS_SLIDER,
  FETCH_PHOTOS_GRID,
} from '../../constants';

export const fetchUser = userId => async (dispatch, getState, client) => {
  try {
    const query = await client.query({
      query: GET_USER,
      variables: {
        id: userId,
      },
    });
    const { data: { User: userData } } = query;
    console.log(userData);
    const user = User.decode(userData);

    // const user = await UserFacade.fetchOne(userId);
    dispatch({ type: FETCH_USER, payload: { user } });

    // const photos = await UserFacade.fetchPhotos(user.id);
    // dispatch({ type: FETCH_PHOTOS_SLIDER, payload: { photos } });
  } catch (e) {
    console.log(e);
    const title = 'Server error';
    const message = 'Fail connection to server';
    Alert.alert(title, message, [{ text: 'OK' }]);
  }
};

export const fetchPhotosGrid = () => async dispatch => {
  try {
    const popularPhotos = await FeedFacade.fetchPopularPhotos();
    dispatch({ type: FETCH_PHOTOS_GRID, payload: { popularPhotos } });
  } catch (e) {
    const title = 'Server error';
    const message = 'Fail connection to server';
    Alert.alert(title, message, [{ text: 'OK' }]);
  }
};
