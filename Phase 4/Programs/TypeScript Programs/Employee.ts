// class style object creation 
// class Employee {
//     private id:number=100;
//     private name:string="Ravi";
//     private age:number=21;

// public displayInfo(): void {
//         console.log("id is "+this.id);
//         console.log("name is "+this.name);
//         console.log("age is "+this.age);
//     }
// }
// let emp1 = new Employee();
// emp1.displayInfo();
//console.log(emp1.id);
//console.log(emp1.name);

// class style object creation with constructor 
// class Employee {
//     private id:number;
//     private name:string;
//     private age:number;
//     constructor(id:number=123,name:string="Unknown",age:number=18){
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
//     displayInfo():void {
//         console.log("id is "+this.id);
//         console.log("name is "+this.name);
//         console.log("age is "+this.age);       
//     }
// }
// let emp1 = new Employee(100,"Ravi",21);
// let emp2 = new Employee(101,"Lokesh",34);
// let emp3 = new Employee(102,"Ajay");
// let emp4 = new Employee(104);
// let emp5 = new Employee();
// emp1.displayInfo();
// emp2.displayInfo();
// emp3.displayInfo();
// emp4.displayInfo();
// emp5.displayInfo();

// class style object creation with shortcut constructor initialization 

class Employee {
    
    constructor(private id:number=123,private name:string="Unknown",private age:number=18){
       
    }
    displayInfo():void {
        console.log("id is "+this.id);
        console.log("name is "+this.name);
        console.log("age is "+this.age);       
    }
}
let emp1 = new Employee(100,"Ravi",21);
let emp2 = new Employee(101,"Lokesh",34);
let emp3 = new Employee(102,"Ajay");
let emp4 = new Employee(104);
let emp5 = new Employee();
emp1.displayInfo();
emp2.displayInfo();
emp3.displayInfo();
emp4.displayInfo();
emp5.displayInfo();

