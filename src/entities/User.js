/**
  * Remove links and hashtags from bio and add it to a list
  *
  * @param bio: The description of the user
  * @return array
  */
const parseBio = bio => {
  const text = bio.split('\n\n').join('. ');
  const highlightes = text.match(/\s([#||@])\w+/g);
  const texts = [];

  let rawText = text;
  highlightes.forEach(link => {
    const [first, rest] = rawText.split(link);
    texts.push({ value: first, highlighted: false });
    texts.push({ value: link, highlighted: true });
    rawText = rest;
  });

  return texts;
};

export default class User {
  /**
    * Decode HTTP response or AsyncStorage
    *
    * @param data: The response of the request.
    * @return decoded User
    */
  static decode(data) {
    const user = {
      bio: parseBio(data.bio),
      createdAt: data.createdAt,
      id: data.objectId,
      name: data.name,
      thumbnail: { uri: data.profileThumbnail },
      photos: [],
    };
    return user;
  }

  /**
    * Decode HTTP response or AsyncStorage
    *
    * @param data: The response of the request.
    * @return decoded Photos
    */
  static decodePhoto(data) {
    const photo = {
      createdAt: data.createdAt,
      id: data.objectId,
      thumbnail: { uri: data.thumbnail },
    };
    return photo;
  }
}
