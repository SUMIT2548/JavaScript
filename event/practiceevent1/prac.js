let but = document.querySelector("button");
let bo = document.querySelector("body");
let currentmode = "light";
but.addEventListener("dblclick",() =>
{
    if(currentmode === "light")
    {
        currentmode = "dark";
        bo.classList.add("dark");
        bo.classList.remove("light");
    }
    else
    {
        currentmode = "light";
        bo.classList.add("light");
        bo.classList.remove("dark");
    }
    console.log(currentmode);
    console.log("thanks! you click double");
})

// box program
let di = document.querySelector("div");
di.addEventListener("mouseover",()=>
{
    di.innerHTML = "welcome to box";
    di.style.backgroundColor = "yellow";
    console.log("welcome");
})
di.addEventListener("mouseout",()=>
{
    di.innerHTML = "ok bye!";
    di.style.backgroundColor = "white";
    console.log("out");
})