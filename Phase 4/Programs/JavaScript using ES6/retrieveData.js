function retrieveData() {
    let obj1 = sessionStorage.getItem("obj1");
    let obj2 = localStorage.getItem("obj2");
    alert("Name from session storage is "+obj1+" name from local storage "+obj2);
}