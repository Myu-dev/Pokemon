const startBuutton=document.getElementById("start");
startBuutton.addEventListener("click",async()=>{
    const pokemon=await Pokemon.getPokemonRandom(1,152);
    console.log(pokemon.data);
})