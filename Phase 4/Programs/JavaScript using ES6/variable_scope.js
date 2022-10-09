function info() {
    a = 10;
    var b=20;           // function scope 
    let c =30;          // block scope ie function scope 
    const d = 40;       // function scope but we can't change the value 
}

//document.write(a);
//document.write(b);
//document.write(c);
//document.write(d);
info();
document.write(a);
//document.write(b);