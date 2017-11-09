/**
  * Remove links and hashtags from bio and add it to a list
  *
  * @param {String[]} description The description of the user
  * @return {Object[]} texts
  */
const parseBio = description => {
  const text = description.split('\n').join('. ');
  const highlightes = text.match(/\s([W||H||I||T||E||B||E||A||R])\w+/g);
  const texts = [];

  let rawText = text;
  if (highlightes) {
    highlightes.forEach(link => {
      const [first, rest] = rawText.split(link);
      texts.push({ value: first, highlighted: false });
      texts.push({ value: link, highlighted: true });
      rawText = rest;
    });
  } else {
    texts.push({ value: description, highlighted: false });
  }

  return texts;
};

export default class User {
  /**
    * Decode HTTP response or AsyncStorage
    *
    * @param {Object} data The response of the request.
    * @return {Object} decoded User
    */
  static decode(data) {
    console.log(data);
    const user = {
      bio: parseBio(data.description),
      id: data.id,
      name: data.name,
      thumbnail: { uri: data.thumbnail },
      photos: data.photos && data.photos.map(i => User.decodePhoto(i)),
    };
    return user;
  }

  /**
    * Decode HTTP response or AsyncStorage
    *
    * @param {Object} data The response of the request.
    * @return {Object} decoded Photos
    */
  static decodePhoto(data) {
    const photo = {
      id: data.id,
      thumbnail: { uri: data.thumbnail },
    };
    return photo;
  }
}
