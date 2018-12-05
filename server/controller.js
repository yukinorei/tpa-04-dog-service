const dog = require('./dog');

const fetchDogById = (req, res) => {
  // myParams は middleware の parsePathForParameters関数内で定義されます。
  const { id } = req.myParams;
  const dogObj = dog.getDogById(id);
  if ((typeof id !== 'number') || !dogObj) {
    return res.status(400).json({});
  }
  return res.json(dogObj);
};

module.exports = {
  fetchDogById,
};
