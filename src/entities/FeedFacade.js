import { HttpService } from '@common'
import { API_PARAMS } from '@environment'

import Feed from './Feed'

export default class FeedFacade {
  static fetchPopularPhotosUrl = '/functions/feed/popular/load-batch'
  static async fetchPopularPhotos(limit = 20) {
    const params = {
      ...API_PARAMS,
      isThumbnailsOnly: true,
      limit,
      _method: 'POST'
    }
    const { data: { result: { posts } } } = await HttpService.post(FeedFacade.fetchPopularPhotosUrl, params)
    return posts.map(item => Feed.decode(item))
  }
}
