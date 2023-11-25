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

const removeNotes = function(title){
    const notes = loadNotes()

    const index = notes.indexOf(title)

    notes.splice(index, 1)

    saveNotes(notes)
}


module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes
}