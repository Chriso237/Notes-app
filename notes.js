const fs = require('fs')

const getNotes = function(){
    return 'Your notes....'
}

const addNotes = function(notes){
    notes = loadNotes()

}

const loadNotes = function(){
    const buffer = fs.readFileSync('notes.json')
    const notes =  buffer.toString()
    const notesJSON = JSON.parse(notes)
}


module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
}