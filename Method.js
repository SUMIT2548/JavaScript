// forEach Metthod

let Name = ["Sumit", "Supratim","Suman","Souvik"];
// using arrow function
Name.forEach((val)=>  
{
   console.log(val);
   console.log(val.toUpperCase());
})


// Map() Method

let num = [4,5,8,9];

let number = num.map(function multi (val)
{
    //console.log(val*2);
    return val *2;
})
console.log(number);
// using arrow function
let number1 = num.map((val)=>
{
    return val *5;
})
console.log(number1);


// Filter Mathod - it use for ture or false 
let num1 = [1,2,3,4,5,6,7,8,9,10]

let evennumber = num1.filter((val)=>
{
    return val % 2 === 0;
})
console.log(evennumber);
