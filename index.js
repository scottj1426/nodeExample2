const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("REQ BODY", req.body);
  console.log("REQ QUERY", req.query);
  console.log("REQ PARAMS", req.params);
  next();
});

const dogsCtrl = require("./controllers/dogsCtrl");
const catsCtrl = require("./controllers/catsCtrl");

app.get("/api/animals", (req, res, next) => {
  //{cats: cats, dogs: dogs}
  res.json({ cats, dogs });
});

app.get("/api/dogs", dogsCtrl.getDogType);

app.get("/api/cats/:id", catsCtrl.getCats);

app.delete("/api/dogs/:id", dogsCtrl.deleteDog);

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
