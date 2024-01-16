//type-1
/*let butt = document.querySelector("#sub");
butt.addEventListener("click",() =>
{
   console.log("thanks!");
})*/

// type-2 multiple event and o/p we can print 

let butt = document.querySelector("#sub");

butt.addEventListener("click", ()=>
{
    console.log("thank you!");
})
butt.addEventListener( "dblclick", ()=> 
{
    console.log("welcome");
})

// type -2 same event and multiple o/p we can print 

let dou = document.getElementById("double");
dou.addEventListener( "dblclick", ()=> 
{
    console.log("click me double, thanks");
})
dou.addEventListener("dblclick",()=>
{
    let x = 25;
    x++;
    console.log(x);
})
// using event object 

let d = document.querySelector("div");

d.addEventListener( "mouseover", (e) =>
{
    console.log("the mouse is under box");
    console.log(e.target);
    console.log(e.type);
})

