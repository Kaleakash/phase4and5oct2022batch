function storeData() {
    let name  = "Akash";
    sessionStorage.setItem("obj1",name);
    localStorage.setItem("obj2",name);
    alert("Data Stored....")
}
