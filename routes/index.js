var express = require('express');
var router = express.Router();
var path    = require("path");
var EthUtil = require('ethereumjs-util');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendFile(path.join(__dirname+'/about.html'));
  // res.sendFile(path.join(__dirname+'/../views/plainindex.html'));
  res.render('index', { title: 'Hell', EthUtil:EthUtil });
});

module.exports = router;
