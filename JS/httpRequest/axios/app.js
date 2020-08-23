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

const getPlanet = (url = "https://swapi.dev/api/planets/") => {
    return axios.get(url);
};

const printPlanet = ({data}) => {
    for(let planet of data.results){
        console.log(planet.name)
    }

    return Promise.resolve(data.next)
}
getPlanet()
.then(printPlanet)
.then(getPlanet)
.then(printPlanet)
.then(getPlanet)
.then(printPlanet)
.then(getPlanet)
.then(printPlanet)
.then(getPlanet)
.catch(err => {
    console.log("wrrrrrrrrrrr!!!!", err)
})

// .then(({data}) => {
//     for(let planet of data.results){
//         console.log(planet.name)
//     }
//     return axios.get(data.next)
// })
// .then(({data}) => {
//     for(let planet of data.results){
//         console.log(planet.name)
//     }
//     axios.get(data.next)
// })
