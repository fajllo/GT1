// https://swapi.dev/api/planets/

const fRequest = new XMLHttpRequest();
fRequest.addEventListener("load",function() {
    const data = JSON.parse(this.responseText);
    console.log("WORKED!");
    for (let planet of data.results){
        console.log(planet.name);
    }
});
fRequest.addEventListener("error",()=> {
    console.log("errrrr!");
})
fRequest.open("GET", "https://swapi.dev/api/planets/");
fRequest.send();