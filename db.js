const Faker = require('faker');

const user = {
  description: Faker.lorem.paragraphs(),
  id: 1234,
  name: Faker.name.findName(),
  thumbnail: Faker.image.avatar(),
};

const photo = () => ({
  id: Faker.random.uuid(),
  thumbnail: Faker.image.imageUrl(),
  user_id: user.id,
});

const MAX_PHOTOS = Math.round(Math.random() * 10) + 1;
const profiles = Array.from(Array(MAX_PHOTOS)).map(() => photo());

module.exports = {
  profiles,
  users: [user],
};
