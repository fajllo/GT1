//sequencial requset
// async function getPokemon(){
//     const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1")
//     const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2")
//     const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3")
//     console.log(poke1.data.name)
//     console.log(poke2.data.name)
//     console.log(poke3.data.name)
// }
//  getPokemon()


//parallel request
async function getPokemon(){
    const prom1 =  axios.get("https://pokeapi.co/api/v2/pokemon/1")
    const prom2 =  axios.get("https://pokeapi.co/api/v2/pokemon/2")
    const prom3 =  axios.get("https://pokeapi.co/api/v2/pokemon/3")
    const result = await Promise.all([prom1,prom2,prom3])
    const [p1,p2,p3] = result;
    console.log(p1.data.name)
    console.log(p2.data.name)
    console.log(p3.data.name)
}
 getPokemon()