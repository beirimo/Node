var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '재산 현황', pageName: 'shares.ejs' });
});

module.exports = router;
