const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

const counties = ["Antrim", "Armagh", "Carlow", "Cavan", "Clare", "Cork", "Derry", 
    "Donegal", "Down", "Dublin", "Fermanagh", "Galway", "Kerry", "Kildare", "Kilkenny", 
    "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", 
    "Roscommon", "Sligo", "Tipperary", "Tyrone", "Waterford", "Westmeath", "Wexford", "Wicklow"]

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

counties.map(el => {
    app.get(`/${el.toLowerCase()}`, (req, res) => {
        res.sendFile(`${__dirname}/views/counties/${el.toLowerCase()}.html`);
    })
})

app.post('/area', (req, res) => {
    console.log(req.body);
    counties.map(el => {
        if(`County ${el}` == req.body.county) {
            res.send({room: el.toLowerCase()})
        }
    })
    res.send({warning: 'You must be in Ireland to use this service'});
})