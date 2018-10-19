const express = require('express');
const app = express();
const port = 3000;

app.listen(port, '', '', () => {
    console.log(`Listening on port ${port}`);
})
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    console.log('Requesting index page');
    res.sendFile(__dirname + '/views/index.html');
})