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



let computerSelection = computerPlay();
//alert(playRound(playerSelection, computerSelection));
console.log('p: ' + playerScore);
console.log('c: ' + computerScore);
}



function timer() {
    let interval = 3;
    let counter = document.querySelector('#countdown');
    counter.innerHTML = '';
    counter.style.fontSize = '60px';
    setInterval(function() {
        document.querySelector('#countdown').textContent = interval--;

        if (interval < 0) {
            document.querySelector('#countdown').textContent = '';
        }

    }, 1000);
}

function playRock() {
    playerSelection = "rock";
    timer();
    game();
}

function playPaper() {
    playerSelection = "paper";
    timer();
    game();
}

function playScissors() {
    playerSelection = "scissors";
    timer();
    game();
}
