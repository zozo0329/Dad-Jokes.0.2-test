let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "700px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

let par = document.getElementById("parTextOne");
let parTwo = document.getElementById("parTextTwo");
let parThree = document.getElementById("parTextThree");
function buttonOne() {
  par.innerText = "But I'm clean now";
}
function buttonTwo() {
  parTwo.innerText = "Then it's a soap opera.";
}
function buttonThree() {
  parThree.innerText = "and solve your own problems";
}
