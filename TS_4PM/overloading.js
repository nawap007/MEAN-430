function Addition(x, y, z) {
    if (z == undefined) {
        return x + y;
    }
    else {
        return x + y + z;
    }
}
var r1 = Addition(1, '2', 3);
console.log(r1);
