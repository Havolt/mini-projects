const nodeMySql = require(__dirname + '/public/scripts/serverScripts/nodeMySql.js');
const mysql = require('mysql');
const express = require('express');

const port = 3000;
const app = express();

app.use(express.static(`${__dirname}/public`));

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

