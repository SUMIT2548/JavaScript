// for in loops - The JavaScript for in statement loops through the properties of an Object:

// create object for for in
const student =
{
    fName : "Sumit",
    lNane : "Saha",
    Roll  :  45895,
    CGPA  :  7.85
};
for( let x in student)
{
    console.log("x", x ,"value", student[x]);
}

// for of loops: The JavaScript for of statement loops through the values of an iterable object.

/*let name = "mphasis";

for(let n of name)
{
    console.log("n",n);
}*/

// calculate the size of string using for_of loop
let name1 = "mphasis";
let size = 0
for (let m of name1)
{
  console.log("m",m,);
  size++;
}
console.log("String Size=", size)
