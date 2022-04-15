// computerPlay will randomly return either rock, paper, or scissors
function computerPlay(){
    var randNum = 0;
    return Math.floor(Math.random() * 3);
}

//This function will play a single round of Rock Paper Scissors and declare the winner
function playRound(playerSelection, computerSelection){
    var winner;
    var playerInput;
    
    switch (playerSelection.toUpperCase()){
        case "ROCK":
            playerInput=0;
            if(computerSelection === 2){
                winner = "PLAYER WINS!";
            }else if(computerSelection === 1){
                winner = "COMPUTER WINS!";
            }else{
                winner = "TIE GAME!";
            }
            break;
        case "PAPER":
            playerInput=1;
            if(computerSelection === 0){
                winner = "PLAYER WINS!";
            }else if(computerSelection === 2){
                winner = "COMPUTER WINS!";
            }else{
                winner = "TIE GAME!";
            }
            break;
        case "SCISSORS":
            playerInput=2;
            if(computerSelection === 1){
                winner = "PLAYER WINS!";
            }else if(computerSelection === 0){
                winner = "COMPUTER WINS!";
            }else{
                winner = "TIE GAME!";
            }
            break;
        default:
            console.log("PLAYER ERROR!!!");
    };
    return winner;
}

const playerSelection = "paper";
const computerSelection = computerPlay();

console.log(playerSelection, computerSelection);
console.log(playRound (playerSelection, computerSelection));
