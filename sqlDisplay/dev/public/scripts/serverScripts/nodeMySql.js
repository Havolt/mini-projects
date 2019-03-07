var mysql = require('mysql');



const con = mysql.createConnection({
    host: "localhost",
    user: "mf",
    password: "testPass0",
    database: "night_tale"
});
  
  con.connect();

  //con.end();


module.exports.searchUser = (data, callback) => {


    con.query(`SELECT * FROM user_data WHERE username ='${data.username}'`, function (err, result, fields) {
        if (err) throw err;
        // console.log(result);
        callback('name');
    });

    

    con.query(`SELECT * FROM user_data WHERE email ='${data.email}'`, function (err, result, fields) {
        if (err) throw err;
        // console.log(result);
    });

};