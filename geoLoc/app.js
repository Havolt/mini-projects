const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.post('/area', (req, res) => {
    console.log(req.body);
    res.send({message: 'got here'});
})