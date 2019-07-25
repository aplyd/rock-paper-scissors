let playerScore = 0;
let computerScore = 0;

function game() {

    function playRound(playerSelection, computerSelection) {

        if (computerSelection == playerSelection) {
            return 'tie game';
        } else if ((computerSelection == 'paper' && playerSelection == 'rock') || 
                    (computerSelection == 'scissors' && playerSelection == 'paper') || 
                    (computerSelection == 'rock' && playerSelection == 'scissors')) {
            computerScore++;
            return 'computer wins';
        } else if ((computerSelection == 'scissors' && playerSelection == 'rock') || 
                    (computerSelection == 'rock' && playerSelection == 'paper') || 
                    (computerSelection == 'paper' && playerSelection == 'scissors')) {
            playerScore++;
            return 'player wins';
        } else {
            return 'o h  n o';
        }
    }

    function computerPlay() {
        let randomNumber = Math.floor(Math.random() * 3 + 1);
        if (randomNumber == 1) {
            return 'rock';
        } else if (randomNumber == 2) {
            return 'paper';
        } else if (randomNumber == 3) {
            return 'scissors';
        }
    }


let playerSelection = prompt('rock, paper or scissors?').toLowerCase();
let computerSelection = computerPlay();
alert(playRound(playerSelection, computerSelection));
console.log('p: ' + playerScore);
console.log('c: ' + computerScore);
}

game();
