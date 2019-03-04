const nodeMySql = require(__dirname + '/public/scripts/serverScripts/nodeMySql.js');

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

nodeMySql.logger();