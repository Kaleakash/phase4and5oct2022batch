// // normal function 
// display1();         // we can before declaration 
// function display1() {
//     document.write("Normal function syntax<br/>")
// }
// display1();

// // expression style function 
// //display2();           // we can't call before declaration or initialization 
// let display2 = function() {
//     document.write("Expression style function");
// }
// display2();
// // arrow style function 
// let display3 = ()=>document.write("<br/> Arrow style function");
// display3();
// // addition of two number using expression style 
// let addNumber1 = function(a,b){
//     var sum = a+b;
//     return sum;
// }
// document.write("<br/>Sum of two number is using expression style "+addNumber1(10,20))
// // addition of two number using arrow style arrow style function return result without return keyword. 
// let addNumber2 = (a,b)=>a+b;
// document.write("<br> Sum of two nubmer using arrow style is "+addNumber2(10,20));
// // expression style function to find largest 
// let findLargest1 = function(a,b){
//     if(a>b){
//         return "a is largest"
//     }else {
//         return "b is largest"
//     }
// }
// document.write("<br/> find largest of two nubmer using expression style "+findLargest1(10,20));
// // arrow style function to find largest 
// let findLargest2 = (a,b)=>{
//     if(a>b){
//         return "a is largest"
//     }else {
//         return "b is largest"
//     }
// }
// document.write("<br/> find largest of two nubmer using expression style "+findLargest2(10,20));

function greeting(fname,callback){
    return "Welcome user "+callback(fname);
}
let maleInfo = function(fname){
    return "Mr "+fname;
}
let femalenfo = (fname)=>"Miss "+fname;

document.write("<br/> "+greeting("Raj",maleInfo));
document.write("<br/> "+greeting("Seeta",femalenfo));
document.write("<br/> "+greeting("John",function(fname){
    return "Mr "+fname;
}));
document.write("<br/> "+greeting("Neena",(fname)=>"Miss "+fname));






