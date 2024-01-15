// click
let sub = document.querySelector("#sub");
sub.onclick = () =>
{
    console.log("thanks to click");
    let number = 25;
    number++;
    console.log(number);
}
// double clicked
let double = document.querySelector("#double");
double.ondblclick = () =>
{
    console.log("thanks to click");
}
//mouse over
let d = document.querySelector("div");
d.onmouseover = () =>
{
    console.log("the mouse is under box1");
}
//mouse out
let di = document.querySelector(".name");
di.onmouseout = () =>
{
    console.log("the mouse is out of box2")
}
