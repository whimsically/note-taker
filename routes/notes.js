const notes = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { readAndAppend } = require('../helpers/fsUtils');

//api GET
//reads db.json
notes.get('/', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } else {
            res.json(JSON.parse(data))
        }
    })

});

//api POST
notes.post('/', (req, res) => {
    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json('Note added successfully')
    } else {
        res.error('Error adding note');
    }
});

//TODO: api DELETE

module.exports = notes;