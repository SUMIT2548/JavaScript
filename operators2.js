//Comparison Operators :- ==, !=, >, >=, <, <=

let a = 10;
let b = 10;
console.log("a==b",a==b);
console.log("!=", a!=b); 
console.log("a>b",a>b);
console.log("a<b",a<b);
console.log("a>=b",a>=b);
console.log("a<=b",a<=b);
console.log("a===b", a===b);
console.log("a!==b",a!==b);

//logical operators :- &&, ||, !

console.log(a==b && a>=b); // logical AND 
console.log(a==b && a>b);

console.log(a>b || a<=b); // logical OR 
console.log(!a<b); // logical NOT