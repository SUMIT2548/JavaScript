// forEach loop (method) using array
let Marks = [75,85,95,64,75];

// using function 

Marks.forEach(function funValue(value)
{
    console.log(value);
})

Marks.forEach( function (vals,index,array)
{
    console.log(vals,index,array);
})

// using arrowfuntion
Marks.forEach((val) =>
{
   console.log(val);
})



// using function all parameters
let Car =[ "BMW","ford","hyundai","volvo"];

Car.forEach(function carNames(names, index, array)
{
 console.log(names,index,array);
})