const yargs = require('yargs')
const pkg = require('./package.json')
const {addNote, printNotes} = require('./notes.controller')

yargs.version(pkg.version)

yargs.command({
    command: 'add',
    describe: 'Add new note to list',
    builder: {
        title: {
            type: 'string',
            describe: 'Note title',
            demandOption: true
        }
    },
    handler({title}) {
        addNote(title)
        // console.log('Add command:', title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Print all notes',
    async handler() {
        printNotes()
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove note by id',
    handler() {
        console.log('Remove note by id')
    }
})

yargs.parse()