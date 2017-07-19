var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
  var collection = [
    // {date: "7/23/17", status: "LEAN CANVAS"},
    // {date: "8/1/17", status: "CUSTOMER PROFILES"},
    // {date: "9/1/17", status: "MVP MESSAGING"},
    // {date: "9/15/17", status: "GRAPHICS"},
    // {date: "9/17/17", status: "SOCIAL ACCOUNTS"},
    // {date: "9/24/17", status: "IDENTIFY INFLUENCERS"},
    // {date: "9/30/17", status: "INFLUENCER MESSAGING & COMP"},
    // {date: "10/1/17", status: "TEASER ARTICLE"},
    // {date: "10/15/17", status: "SIZZLE"},
    // {date: "10/31/17", status: "LANDING PAGE"}
  ];
  knex.raw('SELECT * FROM launch').then(function(stuff) {
    res.render('launches', {
      title: 'Launch Plan Title',
      collection: stuff.rows
    });
  });
});

module.exports = router;
