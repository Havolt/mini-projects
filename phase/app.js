const express = require('express');
const app = express();
const port = 3000;

app.listen(port)
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});