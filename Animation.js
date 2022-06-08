
let element = document.getElementById("para1");
element.onclick = change;

function change(){
    console.log("hi");
    element.style.transition = "all 2s";
    element.style.opacity = 1;
    setTimeout("element.style.opacity = 0", 1500);
}

