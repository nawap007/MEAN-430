const fs = require('fs');
const events = require('events');
const emitter = new events.EventEmitter();

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err)
        emitter.emit('error', err);
    else
        console.log('File I/O operation completed');
});

emitter.on('error', (err) => {
    console.log(err);
});