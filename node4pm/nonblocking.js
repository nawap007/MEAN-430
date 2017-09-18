const fs = require('fs');

console.log('File I/O operation started');
fs.readFile('./input.txt', 'utf8', (err, data) => {
    console.log(data);
    console.log('File I/O operation completed');
});

console.log('File I/O operation ended');