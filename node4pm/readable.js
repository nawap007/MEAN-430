const fs = require('fs');

const rs = fs.createReadStream('./input1.txt');

rs.on('data', (chunk) => {
    console.log('data Event');
    console.log(chunk);
});

rs.on('end', () => {
    console.log('There is no data to read!');
});

rs.on('close', () => {
    console.log('file has been closed!');
});

rs.on('error', (err) => {
    console.log('There is an error to read!');
    console.log(err);
});