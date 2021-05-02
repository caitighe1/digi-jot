const path = require('path');
const router = require('express').Router();

router.get('/notes', function (req, res) {
    response.sendFile(path.join(__dirname, '../public/notes.html'));
})

router.get('*', function (req, res) {
    response.sendFile(path.join(__dirname, '../public/index.html'));
})

module.exports = router;