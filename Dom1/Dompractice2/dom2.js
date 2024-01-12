/*Qs. Create a new button element. Give it a text “click me”, background color of red & text color of white.
Insert the button as the first element inside the body tag. */

let butt = document.createElement("button");
butt.innerText = "click me";
butt.style.color="white";
butt.style.backgroundColor = "red";
console.log(butt);

let a = document.querySelector("body");
a.prepend(butt);
console.log(a);

/*
Create a <p> tag in html, give it a class & some styling.
Now create a new class in CSS and try to append this class to the <p> element.

Did you notice, how you overwrite the class name when you add a new one?
Solve this problem using classList.
*/

let pa = document.querySelector("p");
pa.getAttribute("class");
// add two class same paragraph 
pa.classList.add("newpara");
console.log(pa);