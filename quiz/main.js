let hints;
let hintEl;
let guess;
let guessButton

let count=0;
const showHints=["0","03","013","0123","01234"];

const card=document.getElementById("mainContainer");
const startBuutton=document.getElementById("start");
startBuutton.addEventListener("click",setQuiz);

async function setQuiz(){
    count=0;
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
        `<p>${pokemon.data.types.map(t=>`<img href="https://assets.myu-jp.f5.si/img/pokemon/type/${t}.svg" width="15px" height="15px">`)}タイプ</p>`,
        `<p>${pokemon.data.height/10}m ${pokemon.data.weight/10}kg</p>`,
        `<p>${pokemon.data.flavorText.ja[Object.keys(pokemon.data.flavorText.ja)[0]]}</p>`
    ];
    hintEl=document.getElementById("hint");
    guess=document.getElementById("guess");
    guessButton=document.getElementById("guess-button");
    guessButton.addEventListener("click",()=>{
        if(guess.value==pokemon.data.name.ja){
            alert("正解！");
            return
        }
        count++;
        let hint="";
        for(const i of showHints[count]){
            hint+=hints[Number(i)];
            console.log(i);
        }
        hintEl.innerHTML=hint;
    })
}