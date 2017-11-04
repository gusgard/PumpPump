export default class User {
  /**
    * Decode HTTP response or AsyncStorage
    *
    * @param data: The response of the request.
    * @return decoded User
    */
  static decode(data) {
    const user = {
      bio: data.bio,
      createdAt: data.createdAt,
      id: data.objectId,
      name: data.name,
      profileImage: data.profileImage,
      profileThumbnail: data.profileThumbnail,
      updatedAt: data.updatedAt,
    };
    return user;
  }
}
