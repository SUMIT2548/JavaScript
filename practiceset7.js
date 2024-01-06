/*Create a function using the “function” keyword that takes a String as an argument &
returns the number of vowels in the string.*/

function FullName(Name)
{
    count = 0;
    for(let vowel of Name)
    {
        if(vowel ==="a"||vowel==="e"||vowel === "i" ||vowel==="o"||vowel==="u")
        {
            console.log("vowwlNames=" +vowel);
            count++;
        }
    }
    return(count); // return to function
}
FullName("SumitKumarSaha");
console.log("total vowel="+count);

//Create an arrow function to perform the same task.

let arrowName = (str)=>
{
    count1 = 0;
    for(let vowels of str)
    {
      if(vowels === "a"||vowels === "e" || vowels === "i"||vowels === "o" ||vowels === "u")
      {
        console.log("vowel="+vowels);
        count1++;
      }
    }
    return(count1);
}
arrowName("Supratim majumdar");
console.log("TotalVowels="+count1);
