const Faker = require('faker');

const user = {
  description: Faker.lorem.paragraphs(),
  id: 1234,
  // id: Faker.random.uuid(),
  name: Faker.name.findName(),
  thumbnail: Faker.image.avatar(),
};

const photo = {
  id: Faker.random.uuid(),
  // id: 1,
  // thumbnail: Faker.image.dataUri(),
  // thumbnail: Faker.image.imageUrl(),
  thumbnail:
    'https://d1m37qdzmw041i.cloudfront.net/photos/posts/images/18566194-1510267374126.jpg',
  user_id: user.id,
};
//
// console.log(Faker.image.image());
// console.log(Faker.image.imageUrl());
// console.log(Faker.image.dataUri());
// console.log(Faker.random.image());

console.log(photo);
// id: data.objectId,
// thumbnail: { uri: data.thumbnail }
module.exports = {
  posts: [
    { id: 1, title: 'Lorem Ipsum', views: 254, user_id: user.id },
    { id: 2, title: 'Sic Dolor amet', views: 65, user_id: user.id },
  ],
  // profile: [photo],
  users: [user],
  comments: [
    {
      id: 987,
      post_id: 1,
      body: 'Consectetur adipiscing elit',
      date: new Date('2017-07-03'),
    },
    {
      id: 995,
      post_id: 1,
      body: 'Nam molestie pellentesque dui',
      date: new Date('2017-08-17'),
    },
  ],
};

// "Motivation to become the best version of you!  💙💪🌎↵↵It's #HealthyHolidays ❄️🏋️‍♀️↵↵Share your photos all month long to be featured!↵↵👻 Snapchat @Whitebear↵↵Get your #TeamWhitebear gear ⬇️"
