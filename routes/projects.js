var express = require('express');
var router = express.Router();

/* GET about page */
router.get('/', function (req, res, next) {
  res.send('<h1>Project Page Working!</h1>');
});

module.exports = router;