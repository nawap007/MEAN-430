var stream = require("stream");
var Transform = stream.Transform;

var uppercase = new Transform({ decodeStrings: false });
uppercase._transform = function(chunk, encoding, callback) {
chunk = chunk.toUpperCase();
callback(null, chunk);
};

var fs = require('fs');

//utf8 is mandatory for uppercase
var source = fs.createReadStream("input.txt", { encoding: 'utf8' });
var target = fs.createWriteStream('output.txt');
source.pipe(uppercase).pipe(target);
