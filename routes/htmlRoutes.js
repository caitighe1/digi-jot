const path = require("path");
const router = require("express").Router();


//here you will render the notes HTML page
router.get("/notes", (req, res) => {
    
    res.sendFile(path.join(__dirname,"../public/notes.html"));
});

router.get("*", (req, res) => {
    // this is the default route where you will render index.html
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//export
module.exports = router;