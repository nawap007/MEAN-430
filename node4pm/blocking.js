const fs = require('fs');

console.log('File I/O operation started');
const data = fs.readFileSync('./input.txt', 'utf8');
console.log(data);
console.log('File I/O operation ended');