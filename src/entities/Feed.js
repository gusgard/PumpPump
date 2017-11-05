export default class Feed {
  /**
    * Decode HTTP response or AsyncStorage
    *
    * @param {String[]} data The response of the request.
    * @return {Object[]} decoded Photo
    */
  static decode(data) {
    const photo = {
      createdAt: data.createdAt,
      id: data.objectId,
      thumbnail: { uri: data.thumbnail }
    }
    return photo
  }
}
