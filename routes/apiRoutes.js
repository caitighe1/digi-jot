const router = require("express").Router();
const store = require("../db/store");

//get route
router.get("/notes", (req, res) => {
    store
        .getNotes()
        .then((notes) => res.json(notes))
        .catch((err) => res.status(500).json(err));
    });

 //post route
router.post("/notes", (req, res) => {
    store
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch((err) => res.status(500).json(err));
    
});

//delete route
router.delete("/notes", (req, res) => {
    store
        .removeNote(req.params.id)
        .then(() => res.json( { ok: true }))
        .catch((err) => res.status(500).json(err));
});

module.exports = router;