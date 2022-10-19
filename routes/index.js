var express = require("express");
var router = express.Router();

const package = require('../package.json');
const time = Date.now()
const now = new Date(time)



router.get("/", (req, res, next) => res.send({ name: package.name, date: now.toString() }));

// URL con parámetros
//http://localhost:9000/api/v1/users/juan/2
router.get("/users/:name/:id", (req, res, next) => {
    res.send({ name: req.params.name, id: req.params.id });
  });

  // URL con query string
  //http://localhost:9000/api/v1/list?sort=true
router.get("/list", (req, res, next) => {
    let numbers = [51, 92, 31, 45, 50, 96];
  
    res.send({ number: req.query.sort ? numbers.sort() : numbers });
  });

  router.get("/health", (req, res, next) => {
    let numbers = [51, 92, 31, 45, 50, 96];
  
    res.send({ number: req.query.sort ? numbers.sort() : numbers });
  });


module.exports = router;