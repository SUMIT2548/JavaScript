// for loops

/*
for(let i =0;i<6;i++)
{
    console.log(i);
}
*/
for(let i=0; i<5;i++)
{
    console.log("Sumit Saha");
} 
//console.log(i); // i cannot print any o/p because in for loop we declared let , let is not global

for(var i = 1; i<=5; i++)
{
    console.log("Sumit ");
}
console.log(i);  // ans - 6 

/*for(let count = 1; count<10000; count++)
{
    console.log("Mphasis Ltd");
}
console.log("the loop is ended");*/

// while loops 

// calcute sum of 1 to 10 numbers
let a =1;
let sum = 0;
while(a<=10)
{
    sum = sum +a;
    a++;
}
console.log(sum);

//do-while loop;


let A = 20;
do{
    console.log (A);
    A--;
}while(A<=10); // this condition is not correct , but loop exceute 1 time.

let b = 20;
do{
   console.log(b);
   b--;
}while(b>10);





