const card=document.getElementById("mainContainer");
const startButton=document.getElementById("start");

const state={
    pokemon: null,
    hints: [],
    count: 0
};
const showHints=["0", "03", "013", "0123", "01234"];

startButton.addEventListener("click",startGame);

card.addEventListener("click",(e)=>{
    if(e.target.id==="guess-button")handleGuess();
});

async function startGame(){
    state.count=0;
    state.pokemon=await Pokemon.getPokemonRandom(1, 152);

    const p=state.pokemon.data;
    const flavorText=p.flavorText.ja
    state.hints=[
        `<p>${p.id}</p>`,
        `<p>${p.genera?.ja ?? "不明"}</p>`,
        `<div class+"ceenter">${p.types.map(t=>`<img src="https://assets.myu-jp.f5.si/img/pokemon/type/${t}.svg" width="30px" height="30px">`).join("")}</div>`,
        `<p>${p.height/10}m ${p.weight/10}kg</p>`,
        `<p>${flavorText[Object.keys(flavorText)[0]]}</p>`
    ];

    render();
}

function render(){
    const p=state.pokemon.data;

    card.innerHTML=`
        <h2>ポケモンクイズ</h2>
        <div id="hint" class="hint">
            ${state.hints[0]}
        </div>
        <input id="guess" placeholder="ポケモン名を入力">
        <button id="guess-button">答える</button>
    `;
}

function handleGuess(){
    const guessInput=document.getElementById("guess");
    const hintEl=document.getElementById("hint");

    const anser=state.pokemon.data.name.ja;

    if(guessInput.value.trim()==="anser"){
        showAllHints();
        alert("正解！");
        return;
    }

    state.count++;
    const hint=[...showHints[state.count]].map(i=>state.hints[Number(i)]).join("");
    hintEl.innerHTML=hint;
}

function showAllHints(){
    const hintEl=document.getElementById("hint");
    hintEl.innerHTML=state.hints.join("");
}