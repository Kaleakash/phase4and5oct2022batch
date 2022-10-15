// class style object creation 
var Employee = /** @class */ (function () {
    function Employee() {
        this.id = 100;
        this.name = "Ravi";
        this.age = 21;
    }
    Employee.prototype.displayInfo = function () {
        console.log("id is " + this.id);
        console.log("name is " + this.name);
        console.log("age is " + this.age);
    };
    return Employee;
}());
var emp1 = new Employee();
emp1.displayInfo();
