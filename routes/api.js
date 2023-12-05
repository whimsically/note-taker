const api = require('express').Router();
const fs = require('fs');

//api GET
//reads db.json
api.get('/', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } else {
            res.json(JSON.parse(data))
        }
    })

});

//api POST
api.post('/', (req, res) => {

});

//api DELETE

module.exports = api;
