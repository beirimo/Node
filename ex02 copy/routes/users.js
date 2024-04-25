var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('res sender 데이터 보내주기  //render 하면 ejs를 데이터를 출력한다/ ');
});

module.exports = router;
