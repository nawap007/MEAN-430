let u, v = 5,
    w = false,
    x = true,
    y = 'Hello',
    z = null;

console.log(v / 0); //Infinity
console.log(v / 2); //2.5
console.log(v / w); //Infinity
console.log(v / z); //Infinity

console.log(v / u); //NaN
console.log(v / y); //NaN
console.log(v + 2 - y + w + x); //NaN

console.log(v + 2 + y + w + x); //7Hellofalsetrue
console.log(y + v + 2 + w + x); //Hello52falsetrue

x = 1.2e3,
    y = 1.2e-3;

console.log(x);//1200
console.log(y);//.0012