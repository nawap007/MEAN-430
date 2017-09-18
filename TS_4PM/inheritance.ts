interface IHuman {
    ShowData();
    Id: number;
}

class Human {
    Name: string;
}

class Employee extends Human implements IHuman {
    constructor(public Id: number, name: string) {
        super();
        this.Name = name;
    }
    ShowData() {
        console.log(`Id : ${this.Id}, Name: ${this.Name}`);
    }
}

const i1: IHuman = new Employee(1, 'Shailendra');
i1.ShowData();
