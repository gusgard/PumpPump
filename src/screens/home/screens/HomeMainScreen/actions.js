import { Alert } from 'react-native';

import { User, Post } from '@entities';
import { GET_USER, GET_ALL_USER } from '@queries';

import { FETCH_USER, FETCH_ALL_POPULAR } from '../../constants';

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

export const fetchPhotosGrid = () => async (dispatch, getState, client) => {
  try {
    const query = await client.query({
      query: GET_ALL_USER,
    });
    const { data: { allPopulars } } = query;
    const popular = allPopulars.map(i => Post.decode(i));
    dispatch({ type: FETCH_ALL_POPULAR, payload: { popular } });
  } catch (e) {
    const title = 'Server error';
    const message = 'Fail connection to server';
    Alert.alert(title, message, [{ text: 'OK' }]);
  }
};
