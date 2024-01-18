let Marks = [85,45,75,68,64];
console.log(Marks);

let Names = ["Sumit","Supratim","Suman","Debanjan"];
console.log(Names);

// array indices or index
console.log(Marks[1]);
console.log(Names[2]);

// change data 
Names[2]="sarmistha";
console.log(Names);

//Length 
console.log(Marks.length);

//loop using array 
// for loop 
let  Number = [78,145,754,85,45,56];
for(let i=0; i<Number.length; i++)
{
    console.log(Number[i]);
}

//using for_of loop 
for(let Num of Number)
{
    console.log("num=" + Num);
}


// 2D array
let twod = [[2,5,45,75], [8,6,85,65]];
// using for each 
for(let num of twod)
{
    console.log(num);
}

let twoda = [[2,5,45,75], [8,6,85,65]];
// using for loop
for(let i=0; i<twoda.length;i++)
{
    for(let j=0; j<twoda[i].length;j++)
    {
       console.log(twoda[i][j]);
       
    }
    console.log("");
}