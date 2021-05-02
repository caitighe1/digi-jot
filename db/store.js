const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {

    read() {
        return readFileAsync('db/db.json', 'utf-8');
    }

    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
    }

    getNotes() {
        return this.read().then(notes => {
            let parsedNotes = JSON.parse(notes);
            return parsedNotes;
        });
    }

    addNote(note) {
        const newNote = { title: note.title, text: note.text};

        return this.getNotes()
            .then(notes => [...notes, newNote])
            .then(updatedNotes => this.write(udpatedNotes))
            .then(() => newNote);
    }

    removeNote(id) {
        return this.getNotes()
            .then(notes => notes.filter(note => note.id !== id))
            .then(filteredNotes => this.write(filteredNotes));
    }
}

module.exports = new Store();