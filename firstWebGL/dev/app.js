const express = require('express');


const port = process.env.PORT || 3000;
const app = express();

//app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));

const pages = [ 
    {
        route: '/',
        link: 'index.html'
    }
]

app.listen(`${port}`, () => {
    console.log(`Listening on port ${port}`);
    console.log(__dirname);
});

//Set up get routes for simple pages
pages.forEach((ob) => {
    app.get(`${ob.route}`, (req, res) => {
        res.sendFile(`${__dirname}/views/${ob.link}`);
    })
})
