//-->Java Scrit Frameworks
//-->Georgian College
//-->Geidy Ducuara - 200419082
//-->Diego Estrada - 200427046
//-->Application: Product Manager
//-->Database: MongoDb
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
