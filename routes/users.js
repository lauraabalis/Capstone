var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function(req, res, next) {
  res.render('users', { title: 'Company Name' });
});

module.exports = router;
