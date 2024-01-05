/*Create an array to store companies -> “Bloomberg”,“Microsoft”,“Uber”,“Google”,“IBM”,“Netflix”
a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add Amazon at the end */

let Companies = ["Bloomberg","Microsoft","Uber","Google","Ibm","Netfilx"];
//Remove the first company from the array
Companies.shift();
console.log(Companies);

//Remove Uber & Add Ola in its place
Companies.splice(1,1,"Ola");
console.log(Companies);

//Add Amazon at the end
Companies.push("Amazon");
console.log(Companies);