const fs = require('fs')

const getNotes = function(){
    return 'Your notes....'
}

const addNotes = function(title, body){
    const notes = loadNotes()
    

    notes.push({
        title: title,
        body: body
    })

    saveNotes(notes)

}

const saveNotes = function(notes){ //save the notes
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}

const loadNotes = function(){ //load the notes
    try {
        const buffer = fs.readFileSync('notes.json')
        const notes =  buffer.toString()
        return JSON.parse(notes)
    }catch(err){
        return []
    }
   
}

const removeNotes = function(title){ //remove a note
    const notes = loadNotes()

    const index = notes.indexOf(title)

    notes.splice(index, 1)

    saveNotes(notes)
}


const listNotes = function(){ //list the note
    const notes = loadNotes()

    for (const note of notes) {
        console.log(note)
    }
}


const readNotes = function(title){ // read individual notes
    const notes = loadNotes()

    for (const note of notes) {
        if (note.title === title){
            console.log(note.body);
        }
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes : readNotes
}