var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = (function () {
    function Human() {
    }
    return Human;
}());
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(Id, name) {
        var _this = _super.call(this) || this;
        _this.Id = Id;
        _this.Name = name;
        return _this;
    }
    Employee.prototype.ShowData = function () {
        console.log("Id : " + this.Id + ", Name: " + this.Name);
    };
    return Employee;
}(Human));
var i1 = new Employee(1, 'Shailendra');
i1.ShowData();
