// https://swapi.dev/api/planets/
const fetchPlanets = (url= "https://swapi.dev/api/planets/") => {
    return fetch(url)
}


fetch("https://swapi.dev/api/planets/")
    .then((response) =>{
        if (!response.ok){
            throw new Error("wrrrrrrrrrr!");
        }
        return response.json();
    })
    .then((data) => {
        const film = data.results[0].films[0];
        return fetch(film)
     })
     .then((response) => {
        if (!response.ok){
            throw new Error("wrrrrrrrrrr!");
        }
        return response.json();

     })
     .then((data) => {
         console.log(data.title);
     })
    .catch((err) => {
        console.log(err)
    });

    const x = [1,2,3,4];

    const [a,b] = x;
    console.log(a, b)