//For a given array with marks of students -> [85, 97, 45, 37, 76, 60].Find the average marks of the entire class.

let StudentsMarsks = [85,97,45,37,76,60];
let sum = 0 ;
// using for of loop 
for(let marks of StudentsMarsks)
{
    sum = sum + marks;
}
console.log(`total marks of student ${sum}`); // just for using template literals
avg = sum/StudentsMarsks.length;
console.log("Avgerge of marks=" + avg);


/*  For a given array with prices of 5 items -> [250, 645, 300, 900, 50].
All items have an offer of 10% OFF on them. Change the array to store final price after applying offer. */

let itemsPrice = [250,645,300,900,500];
// using for_of loop
for( let item of itemsPrice)
 {
    console.log("actual price=" +item );
    price = (item * 10)/100;
    finalprice = item - price ;
    console.log("final price after 10% of iteam=" + finalprice );
 }

//using for loop 
for(let i = 0; i<itemsPrice.length; i++)
{
    // calculate 10%offer
    price = itemsPrice[i]/10;
    itemsPrice[i] = itemsPrice[i]-price;
}
console.log(itemsPrice);




 

