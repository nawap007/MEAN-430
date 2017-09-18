var User = (function () {
    function User(Id, Name) {
        this.Id = Id;
        this.Name = Name;
    }
    User.prototype.ShowData = function () {
        console.log("Id : " + this.Id + ", Name: " + this.Name);
    };
    return User;
}());
var u1 = new User(1, 'Shailendra chauhan');
u1.ShowData();
