var stream = require('stream');
var Duplex = stream.Duplex;
var fs = require('fs');

Duplex.Readable = fs.createReadStream('input.txt');
Duplex.Writable = fs.createWriteStream('output.txt');

Duplex.Readable.on('data', function (chunk) {
    Duplex.Writable.write(chunk);
});
