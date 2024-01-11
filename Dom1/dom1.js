/*
let div = document.querySelector("div");
console.log(div);
// print attribute
console.log(div.getAttribute("id"));

let p = document.querySelectorAll("div");
console.log(p);
// change class name
console.log(div.setAttribute("class","demo"));

// style 
div.style.color = "red";
*/

// insert element
//exp-1
/* create a button
let but = document.createElement("button");
but.innerHTML = "clickme";
console.log(but);
//add button 
let div = document.querySelector("div");
div.append(but);
*/

//exp-2
// create a h2 heading 
let h2 = document.createElement("h2");
h2.innerText = "Defination";
console.log(h2);
// add h2 heading in html 
let div = document.querySelector("div");
div.prepend(h2);




