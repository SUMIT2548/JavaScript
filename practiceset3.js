//Qs1. Print all even numbers from 0 to 100

/*for(let i =0; i<=100;i++)
{
    if(i%2 == 0 )
    {
        console.log("all even number from 0 to 100:", i);
    }
}*/
/*Create a game where you start with any random game number. Ask the user to keep guessing 
the game number until the user enters correct value */

alert("!this is game!");
let randomnumber = 36;
let usernumber = prompt("Enter The Number");

while(usernumber != randomnumber)
{
    usernumber = prompt("the number is worng! please again enter your number" );
}
console.log("congratulions! you are correct and win");