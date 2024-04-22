var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '할 일 목록', pageName: 'todos.ejs' });

});

module.exports = router;
