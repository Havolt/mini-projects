var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');
const app = express();
var request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {

  let pokeType = 'not been changed';
  const newPoke = {}
  
    request(`https://pokeapi.co/api/v2/pokemon/103/`, (err, res, body) =>{
      if(err) {
        console.log(err);
      } else {
        let rtrnPoke = JSON.parse(body);
        newPoke.name = rtrnPoke.name;
        newPoke.id = rtrnPoke.id;
        fs.appendFileSync('pokeData.txt', JSON.stringify(newPoke) + ', \n');
      }
    });
    //setTimeout(() => fs.appendFileSync('pokeData.txt', JSON.stringify(newPoke) + ', \n'), 2000);


  
  //res.sendFile(path.join(__dirname, './../views/index.html'));
});

module.exports = router;
