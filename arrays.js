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