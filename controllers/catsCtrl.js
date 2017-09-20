const cats = require("../models").cats;

const getCats = (req, res, next) => {
  res.json(cats[req.params.id]);
};

module.exports = {
  getCats
};
