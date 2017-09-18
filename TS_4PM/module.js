"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.User = User;
function Add(x, y) {
    if (y === void 0) { y = 0; }
    return x + y;
}
exports.Add = Add;
