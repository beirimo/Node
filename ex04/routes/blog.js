var express = require('express');
var router = express.Router();

/* 도서검색 */
router.get('/', function(req, res, next) {
  res.render('index.ejs', {title: '블로그 검색 ///칼럼은 두개이고 row 3개', pageName:'blog/search.ejs'});
});

module.exports = router;
