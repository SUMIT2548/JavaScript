alert("Hello!");
console.log("sumit");


console.log(document.body);
console.dir(document.body);

// DOM Manipulation

let head = document.getElementById("Heading");
console.log(head);
let Name = document.getElementsByClassName("ClassName");
console.log(Name);
let t = document.getElementsByTagName("p");
console.log(t);


let ta = document.querySelector("p");
console.log(ta);  // print the first element p tag not all
//console.dir(ta); 

let ta1 = document.querySelectorAll("p");
console.log(ta1);
console.dir(ta1);

let h = document.querySelector("#Heading");
console.log(h);
let c = document.querySelector(".ClassName");
console.log(c);
let cl = document.querySelectorAll(".ClassName");
console.log(cl);

let d = document.querySelector("div");
console.log(d);
console.log(d.innerText);
console.log(d.tagName);
console.log(d.innerHTML);
console.log(d.textContent);