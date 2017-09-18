class User {
    constructor(private Id: number, public Name: string) { }
    ShowData() {
        console.log(`Id : ${this.Id}, Name: ${this.Name}`);
    }
}

let u1 = new User(1, 'Shailendra chauhan');
u1.ShowData();