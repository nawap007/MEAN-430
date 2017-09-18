const path= require('path');

let p1='../.../../foo/../../bar';

console.log(path.normalize(p1));

let p2='./style/main.css';
console.log(path.join(__dirname,p2));
console.log(path.dirname(p2));
console.log(path.extname(p2));
console.log(path.basename(p2));