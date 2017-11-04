import { HttpService } from '@common';
import { API_PARAMS } from '@environment';

import Feed from './Feed';

export default class FeedFacade {
  static async fetchPopularPhotos(limit = 20) {
    const params = {
      ...API_PARAMS,
      isThumbnailsOnly: true,
      limit,
      _method: 'POST',
    };
    const url = '/functions/feed/popular/load-batch';
    const { data: { result: { posts } } } = await HttpService.post(url, params);
    return posts.map(item => Feed.decode(item));
  }
}
