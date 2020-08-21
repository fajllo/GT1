// https://swapi.dev/api/planets

const fRequest = new XMLHttpRequest();
fRequest.addEventListener("load",()=> {
    console.log("WORKED!");
})
fRequest.addEventListener("error",()=> {
    console.log("errrrr!");
})