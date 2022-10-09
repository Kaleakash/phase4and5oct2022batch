// literal style 
let emp1 = {id:100,name:"Ravi",age:21};
document.write("<br/> Object creation in literal style")
document.write("<br/> Id is "+emp1.id);
document.write("<br/> Name is "+emp1.name);
document.write("<br/> Age is "+emp1.age);
// function style using ES5
// function Employee() {
//     this.id = 101;
//     this.name = "Rajesh"
//     this.age = 34;          // instance variable in function style 

//     this.displayEmpInfo = function() {          // behaviour 
//         document.write("<br/> Employee details are ")
//         document.write("<br/> Id is "+this.id);
//         document.write("<br/> Name is "+this.name);
//         document.write("<br/> Age is "+this.age)
//     }
//     this.displayDetails = ()=>document.write("<br/>Welcome");       // behaviour 
// }
// var emp2 = new Employee();      // memory created. 
// emp2.displayEmpInfo();
// emp2.displayDetails();
// function style using ES5 with parameter 
// function Employee(id,name,salary) {
//     this.id = id;
//     this.name = name;
//     this.age = salary;          // instance variable in function style 

//     this.displayEmpInfo = function() {          // behaviour 
//         document.write("<br/> Employee details are ")
//         document.write("<br/> Id is "+this.id);
//         document.write("<br/> Name is "+this.name);
//         document.write("<br/> Age is "+this.age)
//     }

// }
// var emp2 = new Employee(102,"Lokesh",34000);      // memory created.
// var emp3 = new Employee(103,"Mahesh",24000); 
// emp2.displayEmpInfo();
// emp3.displayEmpInfo();

//class style object creation using ES6 
// class Employee {
//     id=100;
//     name="Ravi";
//     salary=12000;

//     displayEmpInfo() {
//         document.write("<br/> Employee details are")
//         document.write("<br/>id is "+this.id);
//         document.write("<br/>name is "+this.name);
//         document.write("<br/>salary is "+this.salary);
//     }
// }
// let emp2 = new Employee();
// emp2.displayEmpInfo();

// class style object creation using constructor 
class Employee {
    // id=100;
    // name="Ravi";
    // salary=12000;
    constructor(id,name,salary){
            this.id = id;
            this.name = name;
            this.salary= salary;
    }
    displayEmpInfo() {
        document.write("<br/> Employee details are")
        document.write("<br/>id is "+this.id);
        document.write("<br/>name is "+this.name);
        document.write("<br/>salary is "+this.salary);
    }
}
let emp2 = new Employee(101,"Seeta",34000);
let emp3 = new Employee(102,"Raju",32000)
emp2.displayEmpInfo();
emp3.displayEmpInfo();
