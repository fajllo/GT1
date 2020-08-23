// // https://swapi.dev/api/planets/
// const fetchPlanets = (url= "https://swapi.dev/api/planets/") => {
//     return fetch(url)
// }

// const statsAndParse = (response) => {
//     if (!response.ok){
//         throw new Error("wrrrrrrrrrr!");
//     }
//     return response.json();
    
// }
// const printPlanet = (data) => {
//     console.log(data)
//     for(let planet of data.results){
//         console.log(planet.name)
//     }
//     return Promise.resolve(data.next)
// }



// fetchPlanets()
// .then(statsAndParse)
// .then(printPlanet)
// .then(fetchPlanets)
// .then(statsAndParse)
// .then(printPlanet)
// .then(fetchPlanets)
// .then(statsAndParse)
// .then(printPlanet)
// .catch(err => {
//     console.log(err)
// })

