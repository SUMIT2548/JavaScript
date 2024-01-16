let but = document.querySelector("#sub");
but.onclick =(e) =>
{
    console.log("thank you for click me");
    console.log(e);
    console.log(e.target);
    console.log(e.type);
    console.log(e.clientX, e.clientY);
}

let d = document.querySelector("div");
d.onmouseover = (ev)=>
{
    console.log("mouse under box");
    console.log(ev);
    console.log(ev.target);
    console.log(ev.type);
    console.log(ev.clientX, ev.clientY);

}

