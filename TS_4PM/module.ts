export class User {
    constructor(private Id: number, public Name: string) { }
    ShowData() {
        console.log(`Id : ${this.Id}, Name: ${this.Name}`);
    }
}

export function Add(x: number, y: number = 0): number {
    return x + y;
}

export interface IHuman {
    ShowData();
    Id: number;
}