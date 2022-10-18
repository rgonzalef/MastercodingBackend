var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send( { server: 'Express with SQL' });
});

router.get('/health', function(req, res, next) {
  res.send( { status: 'OK' });
});

module.exports = router;
