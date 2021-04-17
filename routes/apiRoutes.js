let db = require('../db/db.json');
const store = require('../js/store');
const fs = require('fs');
const router = require('express').Router();
const path = require('path');

router.get('/notes', function(request, response) {
    res.json(db);
});

router.post('/notes', function(request, response) {
    let newNote = store(request.body);
    db.push(newNote);
    databaseWrite();
    response.send(`Nice entry!`)
});

router.delete('/notes/:id', function(request, response) {
    let noteID = request.params.id;
    db = db.filter(entry => entry.id !== noteID);
    databaseWrite();
    response.send("Scrapped!")
});

function databaseWrite() {
    let note = JSON.stringify(db);
    fs.writeFile(path.join(__dirname,'../db/db.json'), note, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Yay");
    });
}

module.exports = router;