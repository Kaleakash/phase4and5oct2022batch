// function with number of parameter 
function add(a,b){
    console.log(a+" "+b);
}
add(100,200);
add("A","B");
//add(1);
//add();
// function with number of parameter and data type 
function empInfo(id:number,name:string,age:number){
    console.log(id+" "+name+" "+age)
}
empInfo(100,"Ravi",21);

// funtion with no return type 
function info():void {
    console.log("function with no return type");
}
// function with string return type 
function sayHello():string {
    return "Welcome";;
}
// function with number return type 
function getNumber():number {
    return 100;
}

// function with any return type 
function greeting():any {
    //return 100;
    return "Welcome";

}

// function with optional parameter 
// function stdInfo(sid?:number,sname?:string,age?:number){
//     console.log(sid+" "+sname+" "+age);
// }
// stdInfo(100,"Ravi",21);
// stdInfo(101,"Lokesh");
// stdInfo(102);
// stdInfo();
// function with default initialization 
function stdInfo(sid:number=1,sname?:string,age:number=18){
    console.log(sid+" "+sname+" "+age);
}
stdInfo(100,"Ravi",21);
stdInfo(101,"Lokesh");
stdInfo(102);
stdInfo();







