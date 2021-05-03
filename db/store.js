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
        return this.read().then((notes => {
            let parsedNotes;
            
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }
            return parsedNotes;
        }))
    }

    addNote(note) {
        const { title, text } = note;

        if (!title || !text) {
            throw new Error("Cannot be blank bud");
        }

        const newNote = { title, text };

        return this.getNotes()
            .then((notes) => [...notes, newNote])
            .then((updatedNotes) => this.write(updatedNotes))
            .then(() => newNote);
    }

    removeNote() {
        return this.getNotes()
        .then((notes) => notes.filter((note) => note))
        .then((filteredNotes) => this.write(filteredNotes));
    }
}

module.exports =  new Store();