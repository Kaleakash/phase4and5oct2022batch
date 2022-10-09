let num1 = [100,200,300,400,500,600];
document.write("<br/>"+num1);
document.write("<br/>"+num1.join("->"));
document.write("<br/> Using for loop")
for(let i=2;i<num1.length;i=i+2){
    document.write("<br/> "+num1[i]);
}
document.write("<br/> using in of loop");
for(let i in num1){
    document.write("<br/>index "+i+" Value is "+num1[i])
}
document.write("<br/> using of loop");
for(let n of num1){
    document.write("<br/> Value is "+n)
}
document.write("<br/> using callback concept")
//1st way 
num1.forEach(display);
function display(n){
    document.write("<br/>"+n)
}
//2nd way 
num1.forEach(function display(n){
    document.write("<br/>"+n)
})
//3rd way 
num1.forEach(function(n){
    document.write("<br/>"+n)
})
//4th way 
num1.forEach(n=>document.write("<br/> "+n))

