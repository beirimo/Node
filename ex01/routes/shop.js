var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: '숍힝몰 상품검색', pageName:'shop.ejs' });
  
});

module.exports = router;
