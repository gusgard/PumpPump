const Faker = require('faker');

const newImage = {
  0: Faker.image.business,
  1: Faker.image.cats,
  2: Faker.image.city,
  3: Faker.image.food,
  4: Faker.image.nightlife,
  5: Faker.image.fashion,
  6: Faker.image.people,
  7: Faker.image.nature,
  8: Faker.image.animals,
  9: Faker.image.imageUrl,
};
const getNewImage = index =>
  newImage[index % (Object.keys(newImage).length - 1)]();

const user = {
  description: Faker.lorem.paragraphs(),
  id: 1234,
  name: Faker.name.findName(),
  thumbnail: Faker.image.avatar(),
};

const photo = index => ({
  id: Faker.random.uuid(),
  thumbnail: getNewImage(index),
  user_id: user.id,
});

const popular = index => ({
  id: Faker.random.uuid(),
  thumbnail: getNewImage(index),
});

const MAX_PHOTOS = Math.round(Math.random() * 10) + 1;
const profiles = Array.from(Array(MAX_PHOTOS)).map((_, index) => photo(index));

const MAX_POPULAR = Math.round(Math.random() * 100) + 1;
const populars = Array.from(Array(MAX_POPULAR)).map((_, index) =>
  popular(index),
);

module.exports = {
  profiles,
  populars,
  users: [user],
};
