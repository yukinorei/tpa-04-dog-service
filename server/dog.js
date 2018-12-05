const dogs = require('./data/dogs.json');

const makeMapById = function(dogsArray) {
  const map = {};
  dogsArray.forEach((dog) => {
    map[dog.id] = dog;
  });
  return map;
};

const dogsById = makeMapById(dogs);

const getDogById = function(id) {
  return dogsById[id];
};

module.exports = {
  getDogById,
};
