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
        console.log(result[0])
        if(result[0]) { callback('name') }
        else {
            con.query(`SELECT * FROM user_data WHERE email ='${data.email}'`, function (err, result, fields) {
                if (err) throw err;
                // console.log(result);
                if(result[0]) { callback('email') }
                else {
                    con.query(`INSERT INTO user_data (username, email, password) Values ('${data.username}','${data.email}','${data.password}')`, (err, result) => {
                        if(err) throw err;
                        else {
                            console.log('account created');
                        }
                    });
                    callback('success');
                }
            });
        }
    });

};

module.exports.createLogin = (data) => {

    console.log(data, 'got here into sql');

    function createSessionId() {
        let newId = '';
        for(let i = 0; i <= 15; i++) {
            let newCode = Math.floor((Math.random() * 42)+48);
            if(newCode >= 58 && newCode <=65) {
                newCode += Math.floor((Math.random()*26)+33)
            }
            newId += String.fromCharCode(newCode);
        }
        return newId;
    }

    const newSessionId = createSessionId();

    console.log(newSessionId);

    if(data.isEmail){
        console.log("It's an email");

        con.query(`SELECT * FROM user_data WHERE email = '${data.name}' AND password = '${data.password}'`, (err, result, fields) => {
            if (err) throw err;
            if(result[0]) { console.log(result[0])}
            else {
                console.log('not sure boss');
            }
        })
    }

    //con.query(`SELECT * FROM user_data WHERE ` 
}
