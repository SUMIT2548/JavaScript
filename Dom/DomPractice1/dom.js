//Create a H2 heading element with text - “Hello JavaScript”. Append “from Apna College students” to this text using JS

let h2 = document.querySelector("h2");
console.log(h2);

console.log(h2.innerText);
let append = h2.innerText + "from Apna College students";
console.log(append);


//Create 3 divs with common class name - “box”. Access them & add some unique text to each of them.

let divs = document.querySelectorAll(".box");
console.log(divs);
console.log(divs[0]); // for indiviual
console.log(divs[1]); // for indiviual

// using for of looop
let num= 0;
for(let div of divs)
{
    console.log(div.innerText = "Sumit kumar saha"+num);
    num++;
}



// console.log(divs[0].innerText = " sumit kumar saha"); old process   
