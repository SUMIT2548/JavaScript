// array methods 

let foodItems = [ "potato", " apple", "litchi","tomato"];
// push()
foodItems.push("paneer", "burger");
console.log(foodItems);

// pop
//foodItems.pop();
let deletedItems = foodItems.pop(); // show delete item
console.log("deleted Item is=" +deletedItems);
console.log(foodItems);

//toString()
let Names = ["Sumit","Supratim","Suman","Debanjan"];
console.log(Names.toString());

let Marks = [45,85,95,75,62];
console.log(Marks.toString());

// concat ()
let subject = ["Eng","Math","Phy","Che","Bio"];
let Number  = [65,75,56,68,80];
SubjectNumber = subject.concat(Number);
console.log(SubjectNumber);

// Unshift() 
let cities = ["delhi","pune","mumbai","hyderabad","gurgaon"];
cities.unshift("Kolkata","bengalore");
console.log(cities);

// shift() 

//cities.shift();  // delete kolkata
//console.log(cities);

let deletedcities = cities.shift(); // show name deleted city
console.log(deletedcities);

//Slice 
let marvalHeroes = ["SpiderMan","CaptainAmerica", "AntMan", "Iron Man","Thor"];
console.log(marvalHeroes.slice(1));
console.log(marvalHeroes.slice(3));
console.log(marvalHeroes.slice(1,3));


//splice
let Cities = ["delhi","bengalore","mumbai","hyderabad","gurgaon"];
Cities.splice(2, 0, "kolkata","Pune");
console.log(Cities);

Cities.splice(2,2,"gujrat","goa"); // 1st 2 is postion of array other cities added // next 2 is delete 2 record in position 2
console.log(Cities);

Cities.splice(1,4,"Asam","UP");// 1st 1 is postion of array other cities added // next 4 is delete 4 record in position 1
console.log(Cities);
