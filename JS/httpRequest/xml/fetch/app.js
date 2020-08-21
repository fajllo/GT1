// https://swapi.dev/api/planets/
fetch("https://swapi.dev/api/planets/").then((response) =>{
    response.json().then((data) => {
        for (let planet of data.results)
        console.log(planet.name)

    })

});