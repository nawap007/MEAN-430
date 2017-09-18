function User() {
    this.name = 'User'
    this.ShowDetails = function () {
        console.log('Class : ' + this.name);
    }
    this.Display = () => {
        console.log('Class : ' + this.name);
    }
}
let u1 = new User();
setTimeout(u1.ShowDetails, 1000);
setTimeout(u1.Display, 1000);