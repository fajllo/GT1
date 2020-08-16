const btn = document.querySelector("button");

btn.addEventListener("mouseover",function(){
    let h = Math.floor(Math.random() * window.innerHeight());
    let w = Math.floor(Math.random() * window.innerWidth());
    btn.style.left = `${w}px`;
    btn.style.top = `${h}px`;


})