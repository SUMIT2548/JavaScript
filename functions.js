// non parameter fuction
//EX1
function name()
{
    console.log("Sumit kumar saha");
}
name();
//EX2
function CompanyName()
{
    return("Mphasis Ltd");
}
C = CompanyName();
console.log(C);

// parameter fuction
//EX1
function Sum(a,b)
{
    console.log(a+b);
}
Sum(4,8);
//EX2
function info( Name, age )
{
 console.log(Name , age);
}
info("Sumit kumar saha", 25);
//EX3
function multi(x,y)
{
   return (x*y);
}
m = multi(5,8);
console.log(m);


// Arrow Function
const sum1 = (a,b)=>
{
    console.log(a+b);
}
sum1(8,8);

const multi1=(x,y)=>
{
    return(x*y);
}
M=multi1(8,8);
console.log(M);


