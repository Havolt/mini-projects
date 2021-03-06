const nodeMySql = require(__dirname + '/public/scripts/serverScripts/nodeMySql.js');
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const fs = require('fs');

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
    //res.sendFile(`${__dirname}/views/index.html`);

    function indexCallback(data) {

        fs.readFile(`${__dirname}/views/index.html`, (err, html) => {
            let htmlData = html.toString().replace("_!!stories_data!!_", JSON.stringify(data));
            res.send(htmlData);
        })
    }

    nodeMySql.getLatestStories(indexCallback);
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

app.get('/stories', (req, res) => {
    function indexCallback(data) {

        fs.readFile(`${__dirname}/views/index.html`, (err, html) => {
            let htmlData = html.toString().replace("_!!stories_data!!_", JSON.stringify(data));
            res.send(htmlData);
        })
    }

    nodeMySql.getLatestStories(indexCallback);
})

app.get('/stories/:storyId', (req, res) => {

    function storyCB(data) {
        //console.log(data);

        fs.readFile(`${__dirname}/views/user-story.html`, (err, html) => {
            let htmlData = html.toString().replace("_!!story_info!!_", JSON.stringify(data));
            res.send(htmlData);
        })
    }

    //res.sendFile(`${__dirname}/views/user-story.html`)
    nodeMySql.getStory(req.params, storyCB);
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

    function frontResponse(err, storyId) {
        if(err) {
            res.send({ storyCreated: false, err: err});
        } else {
            res.send({ storyCreated: true, storyId});
        }
    }
    
    nodeMySql.submitStory(req.body, frontResponse);
})
