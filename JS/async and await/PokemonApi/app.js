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
    const poke1 =  axios.get("https://pokeapi.co/api/v2/pokemon/1")
    const poke2 =  axios.get("https://pokeapi.co/api/v2/pokemon/2")
    const poke3 =  axios.get("https://pokeapi.co/api/v2/pokemon/3")
    await poke1;
    await poke2;
    await poke3;
    console.log(poke1.data.name)
    console.log(poke2.data.name)
    console.log(poke3.data.name)
}
 getPokemon()