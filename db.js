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

// business
// cats
// city
// food
// nightlife
// fashion
// people
// nature

const pop = () => ({
  id: Faker.random.uuid(),
  thumbnail: Faker.image.animals(),
});

const MAX_PHOTOS = Math.round(Math.random() * 10) + 1;
const profiles = Array.from(Array(MAX_PHOTOS)).map(() => photo());

const MAX_POPULAR = Math.round(Math.random() * 30) + 1;
const populars = Array.from(Array(MAX_POPULAR)).map(() => pop());

module.exports = {
  profiles,
  populars,
  users: [user],
};
