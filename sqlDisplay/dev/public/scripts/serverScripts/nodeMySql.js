var mysql = require('mysql');



module.exports.con = mysql.createConnection({
    host: 'localhost',
    user: 'mf',
    password: 'testPass0'
})

module.exports.con.connect((err)=>{
    if(err) throw err;
    console.log('Connected');
})

const con = mysql.createConnection({
    host: "localhost",
    user: "mf",
    password: "testPass0",
    database: "night_tale"
  });
  
  con.connect();

  //con.end();