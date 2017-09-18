console.log(Add(2, 3));
function Add(x: number, y: number = 0): number {
    return x + y;
}


const sum = function (x: number, y: number): number {
    return x + y;
}
console.log(sum(2, 5));

const add = (x: number, y: number): number => {
    return x + y;
}
console.log(add(2, 1));