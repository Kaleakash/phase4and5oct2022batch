function addEmployee() {
    //alert("Event fired");
    var name = document.getElementById("n1").value;
    var age = document.getElementById("n2").value;
    var pTag = document.createElement("p");                         // p tag reference ready 
    //var pTagContent = document.createTextNode("Welcome to JS");     // content is ready 
    var pTagContent = document.createTextNode("Name is "+name+" Age is "+age);     // content is ready
    pTag.appendChild(pTagContent);                                  // added the content inside p tag 
    if(age > 25){
        pTag.setAttribute("class","myClass1");
    }else {
        pTag.setAttribute("class","myClass2");
    }
    
    document.getElementById("result").appendChild(pTag);          // p tag added inside div tag 

    document.getElementById("n1").value=""
    document.getElementById("n2").value=""
}