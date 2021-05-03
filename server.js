//list of dependencies 

const express = require("express");
const path = require("path");
const fs = require("fs");
const db = require('./db/db.json');

//runs the app
const app = express();

//set up initial port
const PORT = 3004;


//JSON to express data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));

//displays
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"))});

app.get('/notes', function(req,res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"))});


//api routes
app.get('/api/notes', function(req, res) {
    const data = JSON.parse(fs.readFileSync('../db/db.json'));
    return res.json(data);
});

app.post('/api/notes', function(req, res) {
    const newNote = req.body;
    const notes = generateIds(JSON.parse(fs.readFileSync('')));
    newNote.id = notes.length.toString();
    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(db));
    return res.json(newNote);
});

app.delete('/api/notes/:noteID', function(req, res) {
    const index = req.params.noteId;
    const notes = generateIds(JSON.parse(fs.readFileSync('db/db.json')));
    notes.splice(index, 1);
    fs.writeFileSync('../db/db.json', JSON.stringify(generateIds(notes)));
    return res.end();
});


//server listening @
app.listen(PORT, function() {
  console.log('Listening on http://localhost: ' + PORT);
});

function generateIds(input) {
    const notes = input;
    for (let i = 0; i < notes.length; i++) {
        notes[i].id = i.toString();
    }
    return notes;
}