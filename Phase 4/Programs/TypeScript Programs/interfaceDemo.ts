// interface with variable and functions 
// interface Emp {
//     id:number;
//     name:string;
//     salary:number;
//     dis():void;
// }
// class EmpImp implements Emp {
//     id: number;
//     name:string;
//     salary:number;
//     dis(): void {
//         console.log("Emp interface function")
//     }
// }
// interface with only variable : it is use to to create the reference of type Employee using literal style 
interface Employee {
    id:number;
    name:string;
    age?:number;
}
let emp1:Employee = {id:100,name:"Ravi",age:21};
let emp2:Employee = {id:101,name:"Raju",age:24}
let emp3:Employee = {id:102,name:"Lokesh"};
// interface with only function 
interface Bank {
    accno:number;
    withdraw():void;
    deposit():void;
}
class Hdfc implements Bank {
    accno:number;
    withdraw(): void {        
    }
    deposit(): void {
    }
}
class Hsbc implements Bank {
    accno:number;
    withdraw(): void {
    }
    deposit(): void {
    }
}
