// computerPlay will randomly return either rock, paper, or scissors
function computerPlay(){
    var randNum = 0;
    randNum = Math.floor(Math.random() * 3);
    switch (randNum){
        case 0: console.log("COMPUTER: ROCK!");
            break;
        case 1: console.log("COMPUTER: PAPER!");
            break;
        case 2: console.log("COMPUTER: SCISSORS!");
            break;
        default: console.log("COMPUTER ERROR!");
    }
    return randNum;
    
}

//This function will play a single round of Rock Paper Scissors and declare the winner
function playRound(playerSelection, computerSelection){
    var winner;
    var playerInput;
    
    switch (playerSelection.toUpperCase()){
        case "ROCK":
            playerInput=0;
            console.log("PLAYER: ROCK!");
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
            console.log("PLAYER: PAPER!");
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
            console.log("PLAYER: SCISSORS!");
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

function game(){  
        var playerSelection;
        var computerSelection;
        const buttons = document.querySelectorAll('button');
        buttons.forEach((button)=>{
            button.addEventListener('click', () =>{
                console.log(button.id);
                if(button.id){
                    computerSelection = computerPlay();
                    switch (button.id){
                        case "0": 
                            playerSelection ="rock";
                            console.log(playerSelection);
                            console.log(playRound (playerSelection, computerSelection));
                            break;
                        case "1": 
                            playerSelection ="paper";
                            console.log(playerSelection);
                            console.log(playRound (playerSelection, computerSelection));
                            break;
                        case "2": 
                            playerSelection ="scissors";
                            console.log(playerSelection);
                            console.log(playRound (playerSelection, computerSelection));
                            break;
                    default:console.log("Error!");
                    }       
            }
            });
        });
}

game();
