var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: '회사소개', pageName:'home.ejs' });
})



    // res.send("됐다 로그인 된겨");


module.exports = router;
