const dogs = require("../models").dogs;

const getDogType = (req, res, next) => {
  if (req.query.type) {
    res.json(dogs.filter(dog => dog.type === req.query.type));
  } else {
    res.json(dogs);
  }
};

const deleteDog = (req, res, next) => {
  dogs.splice(req.params.id, 1);
  return res.json(dogs);
};

module.exports = {
  getDogType,
  deleteDog
};
