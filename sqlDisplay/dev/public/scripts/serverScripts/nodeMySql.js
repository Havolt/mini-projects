var mysql = require('mysql');



const con = mysql.createConnection({
    host: "localhost",
    user: "mf",
    password: "testPass0",
    database: "night_tale"
});
  
  con.connect();

  //con.end();


//Searches to see if account taken and if not creates one
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

//Allows user to log in and creates session ID
module.exports.createLogin = (data, callback) => {

    console.log(data, 'got here into sql');

    function createSessionId() {
        let newId = '';
        for(let i = 0; i <= 31; i++) {
            let newCode = Math.floor((Math.random() * 42)+48);
            if(newCode >= 58 && newCode <=64) {
                newCode += Math.floor((Math.random()*22)+39)
            }
            newId += String.fromCharCode(newCode);
        }
        return newId;
    }

    function deleteSessionId(id) {
        console.log(id, 'should display after 10 seconds');
        con.query(`UPDATE user_data SET sessionId = NULL WHERE sessionId = '${id}' `);
    }

    const newSessionId = createSessionId();

    console.log(newSessionId);

    con.query(`SELECT * FROM user_data WHERE email = '${data.name}' OR username = '${data.name}' AND password = '${data.password}'`, (err, result, fields) => {
        if (err) throw err;
        if(result[0]) { 
            console.log(result[0], 'boss');
            const username = result[0].username;
            const userId = result[0].id;
            con.query(`UPDATE user_data SET sessionId = '${newSessionId}' WHERE email = '${data.name}' OR username = '${data.name}' AND password = '${data.password}'`, (err, result, fields) => {
                if(err) throw err;
                if(err) {callback('', 'There was a problem with the server')}
                else {
                    console.log('SessionId Created');
                    setTimeout(()=> {
                        deleteSessionId(newSessionId);
                    }, 3600000);
                    callback({sid: newSessionId, name: username, userId: userId });
                }
            })
        }
        else {
            console.log('not sure boss');
            callback('', "No match found for login details");
        }
    })

    

    //con.query(`SELECT * FROM user_data WHERE ` 
}
