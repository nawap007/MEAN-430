var Program = (function () {
    function Program(id, name) {
        this.Id = id;
        this.Name = name;
    }
    Program.prototype.ShowData = function () {
        console.log("Id : " + this.Id + ", Name: " + this.Name);
    };
    return Program;
}());
var p1 = new Program(1, 'Shailendra chauhan');
p1.ShowData();
