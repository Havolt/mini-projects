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

app.get('/submit', (req,res) => {
    res.sendFile(`${__dirname}/views/story-submit.html`);
})




//////////////////// POST SECTION

app.post('/create-profile', (req, res) => {

    function myCall(data) {
        console.log(data);
        res.send(JSON.stringify(data));
    }

    nodeMySql.searchUser(req.body, myCall);

})

//User Get logged in
app.post('/user-log-in', (req, res) => {

    nodeMySql.createLogin(req.body, sendCookie);

    function sendCookie(sessionId, err) {
        //Send boolean for good call and return err or sessionId
        res.send({
            sessionId,
            err
        })
    }

    //console.log(req.body);
    //res.send(JSON.stringify('this is backend data'));
})

//Submit story to database
app.post('/user-submit-story', (req, res) => {
    console.log('got story');
})
