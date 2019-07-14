var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'เกี่ยวกับ' });
});

router.get('/login', function (req, res, next) {
  res.render('login', { title: 'เกี่ยวกับ' });
});

router.get('/create', function (req, res, next) {
  res.render('create', { title: 'ติดต่อเรา' });
});

module.exports = router;