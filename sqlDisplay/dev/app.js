const nodeMySql = require(__dirname + '/public/scripts/serverScripts/nodeMySql.js');
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));


/////////////////// GET SECTION

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
})

app.get('/sign-up', (req, res) => {
    res.sendFile(`${__dirname}/views/sign-up.html`);
})

app.get('/log-in', (req, res) => {
    res.sendFile(`${__dirname}/views/log-in.html`);
})


//////////////////// POST SECTION

app.post('/create-profile', (req, res) => {

    // let prom1 = new Promise((resolve, reject) => {
    //     const sqlReply = nodeMySql.searchUser(req.body);
    //     console.log(sqlReply);
    //     if(sqlReply) {
    //         resolve();
    //     }
    //     else {
    //         reject(console.log('didnt work'));
    //     }
    // })

    // prom1.then(()=> {
    //     console.log('nothing ever works')
    // })

    function myCall(data) {
        console.log(data);
        res.send(JSON.stringify(data));
    }

    nodeMySql.searchUser(req.body, myCall);




    
    
})
