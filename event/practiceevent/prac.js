//Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again
//tpye-1
/*
let mode = document.querySelector("button");
let currentmode = "light";
mode.addEventListener("click",() =>
{
    if(currentmode ==="light")
    {
        currentmode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else
    {
       currentmode = "light";
       document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currentmode);
})*/


// type - 2 
let butt = document.querySelector("button");
let bo = document.querySelector("body");
let currentmode = "light";
butt.addEventListener( "click", () => 
{
    if(currentmode === "light")
    {
        currentmode = "dark";
      //  bo.style.backgroundColor = "black";
        bo.classList.add("dark");
        bo.classList.remove("light");
    }
    else 
    {
        currentmode = "light";
      //   bo.style.backgroundColor = "white";
        bo.classList.add("light");
        bo.classList.remove("dark");
    }
    console.log(currentmode);
})