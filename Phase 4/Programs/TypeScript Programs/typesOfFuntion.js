// function with number of parameter 
function add(a, b) {
    console.log(a + " " + b);
}
add(100, 200);
add("A", "B");
//add(1);
//add();
// function with number of parameter and data type 
function empInfo(id, name, age) {
    console.log(id + " " + name + " " + age);
}
empInfo(100, "Ravi", 21);
// funtion with no return type 
function info() {
    console.log("function with no return type");
}
// function with string return type 
function sayHello() {
    return "Welcome";
    ;
}
// function with number return type 
function getNumber() {
    return 100;
}
// function with any return type 
function greeting() {
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
function stdInfo(sid, sname, age) {
    if (sid === void 0) { sid = 1; }
    if (sname === void 0) { sname = "UnKnown"; }
    if (age === void 0) { age = 18; }
    console.log(sid + " " + sname + " " + age);
}
stdInfo(100, "Ravi", 21);
stdInfo(101, "Lokesh");
stdInfo(102);
stdInfo();
