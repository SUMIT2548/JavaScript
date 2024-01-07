// For a given array of numbers, print the square of each value using the forEach loop.

let number =  [1,2,3,4,5,6,7,8,9];

number.forEach((Num1)=>
{
   console.log("square of number=" +Num1 * Num1);
})


//Create a function using the “function” keyword that takes a String as an argument & returns the number of vowels in the string.

function collageName(name)
   {
     count = 0;
       for(let n of name)
       {
           if(n==="a"||n==="e"||n==="i"||n==="o"||n==="u")
            {
               console.log("vowel of Name=" +n);
               count ++  ;
            }
        }
        return(count);
   }
collageName("NarulaInstituteofTechnolgy");
console.log("total vowel="+count);
