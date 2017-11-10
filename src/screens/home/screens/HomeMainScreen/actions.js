import { Alert } from 'react-native';

import { User, FeedFacade } from '@entities';
import { GET_USER } from '@queries';

import { FETCH_USER, FETCH_PHOTOS_GRID } from '../../constants';

export const fetchUser = userId => async (dispatch, getState, client) => {
  try {
    const query = await client.query({
      query: GET_USER,
      variables: {
        id: userId,
      },
    });
    const { data: { User: userData } } = query;
    const user = User.decode(userData);

    dispatch({ type: FETCH_USER, payload: { user } });
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
