let hints;

const card=document.getElementById("mainContainer");
const startBuutton=document.getElementById("start");
startBuutton.addEventListener("click",async()=>{
    const pokemon=await Pokemon.getPokemonRandom(1,152);
    console.log(pokemon.data);
    card.innerHTML=`
    <h2>ポケモンクイズ</h2>
    <div id="hint" class="hint">
    <p>No.${pokemon.data.id}</p>
    </div>
    <input id="guess" placeholder="ポケモン名を入力"></input>
    <button id="guess-button">答える</button>
    `;
    hints=[
        `<p>No.${pokemon.data.id}</p>`,
        `<p>${pokemon.data.genera.ja}</p>`,
        `<p>${pokemon.data.height/10}m ${pokemon.data.weight/10}kg</p>`,
    ];
});
const hintEl=document.getElementById("hint");
const guess=document.getElementById("guess");
const guessButton=document.getElementById("guess-button");
const showHints=["0","02","012"];
let count=0;
guessButton.addEventListener("click",()=>{
    count++;
    let hint="";
    for(const i of showHints[count]){
        hint+=hints[Number(i)];
        console.log(i);
    }
    hintEl.innerHTML=hint;
})