var playerScore = 0;
var computerScore = 0;

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
                playerScore++;
            }else if(computerSelection === 1){
                winner = "COMPUTER WINS!";
                computerScore++;
            }else{
                winner = "TIE GAME!";
            }
            break;
        case "PAPER":
            playerInput=1;
            console.log("PLAYER: PAPER!");
            if(computerSelection === 0){
                winner = "PLAYER WINS!";
                playerScore++;
            }else if(computerSelection === 2){
                winner = "COMPUTER WINS!";
                computerScore++;
            }else{
                winner = "TIE GAME!";
            }
            break;
        case "SCISSORS":
            playerInput=2;
            console.log("PLAYER: SCISSORS!");
            if(computerSelection === 1){
                winner = "PLAYER WINS!";
                playerScore++;
            }else if(computerSelection === 0){
                winner = "COMPUTER WINS!";
                computerScore++;
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
        var computerWord;
        const buttons = document.querySelectorAll('button');
        const container = document.querySelector(".container");
        const content = document.createElement('div');
        content.classList.add('content');
        content.setAttribute('style', 'white-space: pre;');
        buttons.forEach((button)=>{
            button.addEventListener('click', () =>{
                content.textContent = '';
                container.appendChild(content);
                computerSelection = computerPlay();
                if(button.id){
                    for(let i=0;i<3;i++){
                        if(computerSelection === 0) computerWord = "Rock!";
                        else if (computerSelection === 1) computerWord = "Paper!";
                        else (computerWord = "Scissors!");
                    }
                    console.log(computerSelection);
                    switch (button.id){
                        case "0": 
                            playerSelection ="rock";
                            content.textContent = "Player: Rock!\r\n";
                            container.textContent = "Computer: " + computerWord;
                            content.textContent += playRound (playerSelection, computerSelection);
                            content.textContent += "\r\nPLAYER SCORE: " + playerScore + " " + "COMPUTER SCORE: " + computerScore;
                            container.appendChild(content);
                            break;
                        case "1": 
                            playerSelection ="paper";
                            content.textContent = "Player: Paper!\r\n";
                            container.textContent = "Computer: " + computerWord;
                            content.textContent += playRound (playerSelection, computerSelection);
                            content.textContent += "\r\nPLAYER SCORE: " + playerScore + " " + "COMPUTER SCORE: " + computerScore;
                            container.appendChild(content);
                            break;
                        case "2": 
                            playerSelection ="scissors";
                            content.textContent = "Player: Scissors!\r\n";
                            container.textContent = "Computer: " + computerWord;
                            content.textContent += playRound (playerSelection, computerSelection);
                            content.textContent += "\r\nPLAYER SCORE: " + playerScore + " " + "COMPUTER SCORE: " + computerScore;
                            container.appendChild(content);
                            break;
                    default:console.log("Error!");
                    }
                    if(playerScore > 4){
                        alert("You win!");
                    }else if(computerScore>4){
                        alert("You lose!");
                    }       
            }
            });
        });

}

game();
