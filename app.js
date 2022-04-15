// computerPlay will randomly return either rock, paper, or scissors
function computerPlay(){
    var randNum = 0;
    randNum = Math.floor(Math.random() * 3);
    console.log(randNum);
    switch (randNum){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            console.log("Computer play error!");
    }
}

//This function will play a single round of Rock Paper Scissors and declare the winner
function playRound(playerSelection, computerSelection){
    const winner="";

    return winner;
}

console.log(computerPlay());

