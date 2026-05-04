const card=document.getElementById("mainContainer");
const startBuutton=document.getElementById("start");
startBuutton.addEventListener("click",async()=>{
    const pokemon=await Pokemon.getPokemonRandom(1,152);
    console.log(pokemon.data);
    card.innerHTML=`
    <h2>ポケモンクイズ</h2>
    <div id="hint" class="hint">
    図鑑番号: No.${pokemon.data.id}
    </div>
    <input placeholder="ポケモン名を入力"></input>
    <button>答える</button>
    `
})