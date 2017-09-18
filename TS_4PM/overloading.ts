function Addition(x: number, y: number): number;
function Addition(x: number, y: string, z: number): string;

function Addition(x: number, y: any, z?: number): any {
    if (z == undefined) {
        return x + y;
    }
    else {
        return x + y + z;
    }
}

let r1 = Addition(1, '2', 3);
console.log(r1);