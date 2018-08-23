var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');
const app = express();
var request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {

  
  res.sendFile(path.join(__dirname, './../views/index.html'));
});

module.exports = router;
