const yargs = require('yargs')
//const fs = require('fs')
const notes = require('./notes')

//Create command add
yargs.command({
    command:'add',
    builder:{
        title:{
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'description of a note',
            demandOption:true,
            type: 'string'
        }
    },
    describe:'add a new note',
    handler: function(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

//Create command remove
yargs.command({
    command:'remove',
    builder: {
        title: {
            demandOption: true,
            type: 'string'
        },
        body:{
            demandOption: false,
            type:'string'
        }
    },
    describe:'remove a note',
    handler: function(argv){
        notes.removeNotes(argv.title)
    }
})

//Create command list
yargs.command({
    command:'list',
    describe:'list all notes',
    handler: function(){
        console.log('listing your notes')
    }
})

//Create command read
yargs.command({
    command:'read',
    describe:'read note individually',
    handler: function(){
        console.log('reading note')
    }
})

yargs.parse()