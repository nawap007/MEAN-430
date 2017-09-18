//constructor function : ES5
// function User(id, name) {
//     this.id = id;
//     this.name = name

//     this.ShowDetails = function (params) {
//         console.log('Id : ' + this.id + ", Name : " + this.name);
//     }
// }

//ES6
class User {
    constructor(id, name) {
        this.id = id;
        this.name = name
    }
    ShowDetails() {
        //console.log('Id : ' + this.id + ", Name : " + this.name);
        console.log(`Id : ${this.id}, 
        Name : ${this.name}`);
    }
}

let u1 = new User(1, 'Shailendra');
u1.ShowDetails();