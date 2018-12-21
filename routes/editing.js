var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('memorial-admin', { title: 'Page Rwanda Memorial Admin page' });
});

module.exports = router;
