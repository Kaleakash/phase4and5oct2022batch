// object creation using literal style 
let num1 = [];
// object creationg using new keyword 
let num2 = new Array();

document.write("<br/>Size of the array "+num1.length);
document.write("<br/>Size of the array "+num2.length);
let num3 = [100,200,300,400];
document.write("<br/>Size of the array "+num3.length);
document.write("<br/>All elements are "+num3);
num3.push(10);
num3.push(20);      // add element at last
num3.unshift(1);
num3.unshift(2);        // add element at begining 
document.write("<br/> all elements are "+num3);
num3.pop();     // remove element from last 
num3.shift();   // remvoe elements from begining 
document.write("<br/> all elements are "+num3);
//1st parameter index position and 2nd parameter from that position number of element delete
//num3.splice(2,1);   
//1st parameter index position and 2nd parameter from that position number of element delete
//num3.splice(2,2); 
//num3.splice(2,0,1000); //1st parameter index position, 2nd number number of elements, 3rd parameter add the element      
//num3.splice(2,0,1000,2000,3000); //1st parameter index position, 2nd number number of elements, 3rd parameter add the element till end       
num3.splice(1,1,10); // 100 replace by 10 
document.write("<br/> all elements are "+num3);  