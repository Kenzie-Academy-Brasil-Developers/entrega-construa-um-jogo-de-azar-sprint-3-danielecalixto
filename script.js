let mickeyNumber = 0;
let mickey = "";
let gamer = "";
let winner = "";
let pointsMickey = 0;
let pointsGamer = 0;
let mickeyPort = "";
let gamerPort = "";

function getRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function mickeyRandom(){
    mickeyNumber = getRandom(1, 3);
    if (mickeyNumber == 1) mickey = "rock";
    else if (mickeyNumber == 2) mickey = "paper";
    else if (mickeyNumber == 3) mickey = "scissors";
    console.log(mickey);
    return mickey;
}

function portugues(mickey, gamer) {
    if (mickey="rock") mickeyPort="PEDRA";
    else if (mickey="paper") mickeyPort="PAPEL";
    else if (mickey="scissors") mickeyPort="TESOURA";
    if (gamer="rock") gamerPort="PEDRA";
    else if (gamer="paper") gamerPort="PAPEL";
    else if (gamer="scissors") gamerPort="TESOURA";
}

function matchWinner(mickey, gamer){
    console.log(gamer);
    console.log(mickey);
    if (mickey=="rock" && gamer=="scissors") winner = "mickey";
    else if (mickey=="rock" && gamer=="paper") winner = "gamer";
    else if (mickey=="rock" && gamer=="rock") winner = "tie";
    else if (mickey=="paper" && gamer=="scissors") winner = "gamer";
    else if (mickey=="paper" && gamer=="paper") winner = "tie";
    else if (mickey=="paper" && gamer=="rock") winner = "mickey";
    else if (mickey=="scissors" && gamer=="scissors") winner = "tie";
    else if (mickey=="scissors" && gamer=="paper") winner = "mickey";
    else if (mickey=="scissors" && gamer=="rock") winner = "gamer";
    console.log(winner);
    if (winner="gamer") {
        pointsGamer++;
        document.getElementById("you").style.borderColor = "red";
        document.getElementById("mickey").style.borderColor = "white";
    } else if (winner="mickey") {
        pointsMickey++;
        document.getElementById("you").style.borderColor = "white";
        document.getElementById("mickey").style.borderColor = "red";
    }
}

const rock = document.getElementById("rock");
console.log(rock);
const paper = document.getElementById("paper");
console.log(paper);
const scissors = document.getElementById("scissors");
console.log(scissors);

rock.addEventListener('click', function(){
    gamer = "rock";
    mickey = mickeyRandom();
    matchWinner(mickey, gamer);
    portugues(mickey, gamer);
    document.getElementById("choicegamer").innerHTML = gamerPort;
    document.getElementById("choicemickey").innerHTML = mickeyPort;
    document.getElementById("pointsgamer").innerHTML = pointsGamer;
    document.getElementById("pointsmickey").innerHTML = pointsMickey;
});

paper.addEventListener('click', function(){
    console.log("teste click papel");
    gamer = "paper";
    mickey = mickeyRandom();
    matchWinner(mickey, gamer);
    portugues(mickey, gamer);
    winner
    document.getElementById("choicegamer").innerHTML = gamerPort;
    document.getElementById("choicemickey").innerHTML = mickeyPort;
    document.getElementById("pointsgamer").innerHTML = pointsGamer;
    document.getElementById("pointsmickey").innerHTML = pointsMickey;
});

scissors.addEventListener('click', function(){
    console.log("teste click tesoura");
    gamer = "scissors";
    console.log(gamer);
    mickey = mickeyRandom();
    matchWinner(mickey, gamer);
    portugues(mickey, gamer);
    document.getElementById("choicegamer").innerHTML = gamerPort;
    document.getElementById("choicemickey").innerHTML = mickeyPort;
    document.getElementById("pointsgamer").innerHTML = pointsGamer;
    document.getElementById("pointsmickey").innerHTML = pointsMickey;    
});

