//Get user to input a number using prompt(“Enter a number:”). Check if the number is a multiple of 5 or not

alert("Hello!Welcome");
/*let number = prompt("enter the number:" );
if(number%5==0)
{
    console.log(number + " this number is multiple of 5");
}
else
{
   console.log(number + " this number is not multple of 5 ");
}
*/
/*  Write a code which can give grades to students according to their scores- 
   80-100, A
   70-89,  B
   60-69,  C
   50-59,  D
    0-49,  F  */
 /*let num = prompt("Enter your number:"); // user input in java

    if(num>90 && num<100)
    {
        console.log("Grade A");
    }
    else if(num>70 && num<89)
    {
        console.log("Grade B");
    }
    else if(num>60 && num<69)
    {
        console.log("Grade C");
    }
    else if(num>50 && num<59)
    {
        console.log("Grade D");
    }
    else 
    {
        console.log("Grade F");
    }*/

    let num1 = 75;
    let Grade; 

    if(num1>90 && num1<100)
    {
        Grade ="A";
    }
    else if(num1>70 && num1<89)
    {
        Grade = "B";
    }
    else if(num1>60 && num1<69)
    {
        Grade= "C";
    }
    else if(num1>50 && num1<59)
    {
        Grade = "D";
    }
    else if(num1>0 && num1>49)
    {
        Grade ="F";
    }

    console.log("according to your scores, your grade was: ", Grade);