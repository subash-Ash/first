
let score = [0,1];
var turn;
var team1={
    name:"MANCHESTER UNITED",
    goals:[],
    score:0
};
var team2={
    name:"MANCHESTER CITY",
    goals:[],
    score:0
};

window.onload = ()=>{
    selectTurn();
    updateScore();
    updateName();
}

function selectTurn(){
    console.log("select turn");
    turn=Math.round(Math.random())+1;
}

function updateScore(){
    document.getElementById("team1-score").textContent = team1.score;
    document.getElementById("team2-score").textContent = team2.score;

}
function updateName(){
    document.getElementById("team1-name").textContent = team1.name;
    document.getElementById("team2-name").textContent = team2.name;

}