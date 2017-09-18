const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('call', () => {
    console.log('ringing...');
});
emitter.once('call', () => {
    console.log('one time ringing...');
});

emitter.emit('call');
emitter.emit('call');