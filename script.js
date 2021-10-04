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
    return mickey;
}

function portugues(mickey, gamer) {
    if (mickey == "rock") mickeyPort="PEDRA";
    else if (mickey == "paper") mickeyPort="PAPEL";
    else if (mickey == "scissors") mickeyPort="TESOURA";
    if (gamer == "rock") gamerPort="PEDRA";
    else if (gamer == "paper") gamerPort="PAPEL";
    else if (gamer == "scissors") gamerPort="TESOURA";
}

function matchWinner(mickey, gamer){
    if (mickey=="rock" && gamer=="scissors") winner = "mickey";
    else if (mickey=="rock" && gamer=="paper") winner = "gamer";
    else if (mickey=="rock" && gamer=="rock") winner = "tie";
    else if (mickey=="paper" && gamer=="scissors") winner = "gamer";
    else if (mickey=="paper" && gamer=="paper") winner = "tie";
    else if (mickey=="paper" && gamer=="rock") winner = "mickey";
    else if (mickey=="scissors" && gamer=="scissors") winner = "tie";
    else if (mickey=="scissors" && gamer=="paper") winner = "mickey";
    else if (mickey=="scissors" && gamer=="rock") winner = "gamer";
    console.log("winner " + winner);
    console.log(document.getElementById("you"));
    console.log(document.getElementById("mickey"));
    if (winner == "gamer") {
        pointsGamer++;
        document.getElementById("you").style.borderColor = "red";
        document.getElementById("mickey").style.borderColor = "white";
    } else if (winner == "mickey") {
        pointsMickey++;
        document.getElementById("you").style.borderColor = "white";
        document.getElementById("mickey").style.borderColor = "red";
    } else if (winner == "tie") {
        document.getElementById("you").style.borderColor = "red";
        document.getElementById("mickey").style.borderColor = "red";
    }
    console.log("pointsGamer " + pointsGamer);
    console.log("pointsMickey " + pointsMickey);
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener('click', function(){
    gamer = "rock";
    mickey = mickeyRandom();
    console.log("mickey click " + mickey);
    console.log("gamer click " + gamer);
    matchWinner(mickey, gamer);
    portugues(mickey, gamer);
    document.getElementById("choicegamer").innerHTML = gamerPort;
    document.getElementById("choicemickey").innerHTML = mickeyPort;
    document.getElementById("pointsgamer").innerHTML = pointsGamer;
    document.getElementById("pointsmickey").innerHTML = pointsMickey;
});

paper.addEventListener('click', function(){
    gamer = "paper";
    mickey = mickeyRandom();
    console.log("mickey click " + mickey);
    console.log("gamer click " + gamer);
    matchWinner(mickey, gamer);
    portugues(mickey, gamer);
    document.getElementById("choicegamer").innerHTML = gamerPort;
    document.getElementById("choicemickey").innerHTML = mickeyPort;
    document.getElementById("pointsgamer").innerHTML = pointsGamer;
    document.getElementById("pointsmickey").innerHTML = pointsMickey;
});

scissors.addEventListener('click', function(){
    gamer = "scissors";
    mickey = mickeyRandom();
    console.log("mickey click " + mickey);
    console.log("gamer click " + gamer);
    matchWinner(mickey, gamer);
    portugues(mickey, gamer);
    document.getElementById("choicegamer").innerHTML = gamerPort;
    document.getElementById("choicemickey").innerHTML = mickeyPort;
    document.getElementById("pointsgamer").innerHTML = pointsGamer;
    document.getElementById("pointsmickey").innerHTML = pointsMickey;    
});

