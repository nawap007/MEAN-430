class Program {
    Id: number;
    Name: string;
    constructor(id: number, name: string) {
        this.Id = id;
        this.Name = name;
    }
    ShowData() {
        console.log(`Id : ${this.Id}, Name: ${this.Name}`);
    }
}

let p1= new Program(1,'Shailendra chauhan');
p1.ShowData();