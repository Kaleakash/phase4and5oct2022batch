let empDataString = '{"id":101,"name":"Ravi","age":24,"result":false}';
let empObject = {id:100,name:"Ravi",age:21,result:true};
document.write("<br/> Object in liberal style<br/>");
document.write("<br/> Id is "+empObject.id);
document.write("<br/> Name is "+empObject.name);
document.write("<br/> Age is "+empObject.age);
document.write("<br/> Result is "+empObject.result);

let empString = JSON.stringify(empObject);          // converting object literal in string format. 

document.write("<br/> Id is "+empString.id);
document.write("<br/> Name is "+empString.name);
document.write("<br/> Age is "+empString.age);
document.write("<br/> Result is "+empString.result);


let empJSON = JSON.parse(empDataString);                // converting string to json format. 
document.write("<br/> Id is "+empJSON.id);
document.write("<br/> Name is "+empJSON.name);
document.write("<br/> Age is "+empJSON.age);
document.write("<br/> Result is "+empJSON.result);

let empStr = JSON.stringify(empJSON);       // convertin json data into string format. 
