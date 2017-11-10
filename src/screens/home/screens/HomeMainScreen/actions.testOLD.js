/* eslint-disable */
import mockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';

import { HttpService } from '@common';
import { Feed, User, FeedFacade, UserFacade } from '@entities';

import { fetchPhotosGrid, fetchUser } from './actions';
import {
  FETCH_USER,
  FETCH_PHOTOS_SLIDER,
  FETCH_ALL_POPULAR,
} from '../../constants';

const mockApi = new MockAdapter(HttpService.instance);

describe('home actions', () => {
  let store;
  let posts;
  let rawUser;
  beforeEach(() => {
    store = mockStore();
    posts = [
      {
        createdAt: '2017-11-04T19:49:54.136Z',
        thumbnail: 'https://reactjs.org/logo-og.png',
        objectId: 18561785,
      },
      {
        createdAt: '2017-11-04T19:31:41.206Z',
        thumbnail: 'https://reactjs.org/logo-og.png',
        objectId: 18561778,
      },
    ];
    rawUser = {
      bio:
        "Motivation to become the best version of you!  💙💪🌎\n\nIt's #HealthyHolidays ❄️🏋️\u200d♀️\n\n" +
        'Share your photos all month long to be featured!\n\n👻 Snapchat @PumpUp\n\nGet your #TeamPumpUp gear ⬇️',
      name: 'pumpup',
      profileThumbnail: 'https://reactjs.org/logo-og.png',
      createdAt: '2014-02-03T07:21:44.372Z',
      objectId: 318381,
    };
  });

  it('fetch popular photos', async () => {
    const popularPhotos = posts.map(item => User.decodePhoto(item));

    const expectedActions = [
      { type: FETCH_ALL_POPULAR, payload: { popularPhotos } },
    ];

    const response = { result: { posts } };

    mockApi.onPost(FeedFacade.fetchPopularPhotosUrl).reply(200, response);

    await store.dispatch(fetchPhotosGrid());

    const storeActions = store.getActions();
    expect(storeActions).toEqual(expectedActions);
    expect(storeActions).toMatchSnapshot();
  });

  it('fetch user data', async () => {
    const user = User.decode(rawUser);
    const photos = posts.map(item => Feed.decode(item));

    const expectedActions = [
      { type: FETCH_USER, payload: { user } },
      { type: FETCH_PHOTOS_SLIDER, payload: { photos } },
    ];

    const userId = 1;
    mockApi.onPost(`${UserFacade.fetchOneUrl}${userId}`).reply(200, rawUser);

    const responseFetchPhotos = { result: { posts } };
    mockApi.onPost(UserFacade.fetchPhotosUrl).reply(200, responseFetchPhotos);

    await store.dispatch(fetchUser(userId));

    const storeActions = store.getActions();
    expect(storeActions).toEqual(expectedActions);
    expect(storeActions).toMatchSnapshot();
  });
});
