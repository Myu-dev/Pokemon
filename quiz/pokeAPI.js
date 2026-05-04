class Pokemon{
    constructor(data, species){
        this.data={
            id:data.id,
            name:species.name,
            height:data.height,
            weight:data.weight,
            genera:species.genera, //〇〇ポケモン
            flavorTexts:species.flavor_text_entries
        }
    }

    async getPokemonById(id){
        try{
            const pokemonRes=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const pokemon=await pokemonRes.json();
            const speciesRes=await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
            const species=await speciesRes.json();
            return new Pokemon(pokemon,species);
        }catch(e){
            throw new Error(e);
        }
    }

    async getPokemonRandom(min,max){
        if(min>max)[min,max]=[max,min]
        const id=Math.floor(Math.random()*(max-min))+min;
        return await this.getPokemonById(id);
    }
}