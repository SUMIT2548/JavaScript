//. We are given array of marks of students. Filter our of the marks of students that scored 90+

let StudentMarks = [85,90,86,92,75];

let marks = StudentMarks.filter((number,index)=> 
{
   return number >= 90;
})
console.log(marks);

/*  Take a number n as input from user. Create an array of numbers from 1 to n.
    Use the reduce method to calculate sum of all numbers in the array.
    Use the reduce method to calculate product of all numbers in the array. 
*/
//part1
let n = prompt("Enter your number");

let arr =[];

for(let i = 1; i<=n ; i++)
{
    arr[i-1]= i;
}
console.log("array="+arr);

// part2
let sum1 = arr.reduce((result,value)=>
{
   return result+value;
})
console.log(sum1);

// product of all numbers = factorial 
let factorial = arr.reduce((fact,val)=>
{
    return fact * val;
})
console.log(factorial);



//  We are given array of Numbers . printl lergest number of array using reduce().

let numbers = [785,44,754,62,78,4864];

let largest = numbers.reduce((previous, value)=>
{
   return previous>value ? previous : value;
})
console.log(largest);