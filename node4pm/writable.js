const fs = require('fs');

const rs = fs.createReadStream('./input.txt');
const ws= fs.createWriteStream('./output.txt');

rs.on('data', (chunk) => {
    console.log('data Event');
    ws.write(chunk);
});

rs.on('end', () => {
    console.log('There is no data to read!');
    ws.close();
});

rs.on('close', () => {
    console.log('file has been closed!');
});

rs.on('error', (err) => {
    console.log('There is an error to read!');
    console.log(err);
});

ws.on('close', () => {
    console.log('ws : file has been closed!');
});

ws.on('finish', () => {
    console.log('ws : Writting has beem completed!');
});
ws.on('error', (err) => {
    console.log('ws : There is an error to write!');
    console.log(err);
});