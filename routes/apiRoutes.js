
//using express router the create route handlers
const router = require('express').Router();
const store = require('../db/store.js');


// routes using GET POST DELETE
router.get('/notes', function(req, res){
    store
        .getnotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
    store
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

router.delete('/notes/:id', function(req, res) {
    store
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});

module.exports = router;






const db = require('./db/db.json');
const fs = require('fs');

module.exports = function(app) {

function writeDB(note) {
    note = JSON.stringify(note);
    console.log(note);

//puts notes in the JSON file

    fs.writeFileSync('../db/db.json/', note, function(err) {
        if (err) {
            return console.log(err);
        }})
    }
};

app.get('/api/notes', function(req, res) {

})