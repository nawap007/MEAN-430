let b1= new Buffer('Hello');
console.log(b1);

let b11= Buffer.from('नमस्ते');
console.log(b11);

console.log(b1.toString());
console.log(b1.toString('ascii'));
console.log(b1.toString('base64'));

console.log(b11.toString());
console.log(b11.toString('ascii'));