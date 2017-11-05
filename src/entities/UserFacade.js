import { HttpService } from '@common'
import { API_PARAMS } from '@environment'

import User from './User'

export default class UserFacade {
  static fetchOneUrl = '/classes/User/'
  static async fetchOne(id = '318381') {
    const params = { ...API_PARAMS, _method: 'GET' }
    const { data } = await HttpService.post(`${UserFacade.fetchOneUrl}${id}`, params)
    const user = User.decode(data)
    return user
  }

  static fetchPhotosUrl = '/functions/feed/profile/load-batch'
  static async fetchPhotos(userId) {
    const params = {
      ...API_PARAMS,
      isThumbnailsOnly: true,
      limit: 5,
      userId,
      _method: 'POST'
    }
    const { data: { result: { posts } } } = await HttpService.post(UserFacade.fetchPhotosUrl, params)
    return posts.map(item => User.decodePhoto(item))
  }
}
