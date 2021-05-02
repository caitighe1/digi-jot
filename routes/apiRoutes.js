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
            }
        });
        

    });
}
router.get('public/notes.html', function(request, response) {
    response.json(db);
});

router.post('public/notes.html', function(request, response) {
    let newNote = store(request.body);
    db.push(newNote);
    databaseWrite();
    response.send(`Nice entry!`)
});

router.delete('public/notes.html:id', function(request, response) {
    let noteID = request.params.id;
    db = db.filter(entry => entry.id !== noteID);
    databaseWrite();
    response.send("Scrapped!")
});



module.exports = router;