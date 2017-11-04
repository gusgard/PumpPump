export default class Feed {
  /**
    * Decode HTTP response or AsyncStorage
    *
    * @param data: The response of the request.
    * @return decoded Feed
    */
  static decode(data) {
    const photo = {
      createdAt: data.createdAt,
      id: data.objectId,
      thumbnail: data.thumbnail,
    };
    return photo;
  }
}
