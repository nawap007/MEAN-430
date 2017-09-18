function Add(x, y) {
    return x + y;
}

class Customer {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    ShowData() {
        console.log(`name : ${this.name}, address: ${this.address}`);
    }
}

module.exports = {
    Add: Add,
    Customer: Customer
};