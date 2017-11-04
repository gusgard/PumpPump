import { HttpService } from '@common';

import User from './User';

export default class UserFacade {
  static async fetchOne(id = '318381') {
    const params = { _method: 'GET' };
    const { data } = await HttpService.post(`/1/classes/User/${id}`, params);
    const user = User.decode(data);
    return user;
  }

  static async fetchProfile(userId = '318381') {
    const params = {
      isThumbnailsOnly: true,
      limit: 5,
      userId,
      _method: 'POST',
    };
    const { data } = await HttpService.post(
      '/functions/feed/profile/load-batch',
      params,
    );
    console.log(data);
    const user = User.decode(data);
    return user;
  }
}
