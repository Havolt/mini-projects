const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));



app.listen(3000, () => {
    console.log('listening');
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'dist/index.html');
})