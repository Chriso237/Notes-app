const yargs = require('yargs')

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
    handler: function(){
        console.log('adding a note');
    }
})

//Create command remove
yargs.command({
    command:'remove',
    describe:'remove a note',
    handler: function(){
        console.log('removing a note')
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