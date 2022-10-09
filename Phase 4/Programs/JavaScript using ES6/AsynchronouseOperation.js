// document.write("<br/>1st Statement");

// setTimeout(()=> {
//     document.write("<br/>2nd Statement");
// },3000);
// setInterval(()=> {
//     document.write("<br/>4th Statement")
// },1000)
// document.write("<br/>3rd Statement");

function info() {
    setInterval(doTask,1000)
}
let i=0;
function doTask() {
    if(i%2==0){
        document.getElementById("obj").style.color="RED"
        document.getElementById("obj").style.backgroundColor="BLUE"
    }else {
        document.getElementById("obj").style.color="GREEN"
        document.getElementById("obj").style.backgroundColor="ORANGE"
    }
    i++;
}