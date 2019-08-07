let playerScore = 0;
let computerScore = 0;
let roundIncrement = 1;

function game() {

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
    
        }, 500);
    
    }

    timer();

    function playRound(playerSelection, computerSelection) {

        if (computerSelection == playerSelection) {
            document.querySelector('#countdown').textContent = 'tie game';

        } else if ((computerSelection == 'paper' && playerSelection == 'rock') || 
                    (computerSelection == 'scissors' && playerSelection == 'paper') || 
                    (computerSelection == 'rock' && playerSelection == 'scissors')) {
            computerScore++;
            document.querySelector('#countdown').textContent = 'computer wins';

        } else if ((computerSelection == 'scissors' && playerSelection == 'rock') || 
                    (computerSelection == 'rock' && playerSelection == 'paper') || 
                    (computerSelection == 'paper' && playerSelection == 'scissors')) {
            playerScore++;
            document.querySelector('#countdown').textContent = 'player wins';

        } else {
            return 'o h  n o';
        }
    }

    //generate random num and assign to selection
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

    //
    playRound(playerSelection, computerSelection);
        
    
        //need to update DOM with player score
        console.log('p: ' + playerScore);

        //update DOM with computer score
        console.log('c: ' + computerScore);

    let roundOptions = ['ROUND ONE', 'ROUND TWO', 'ROUND THREE', 'ROUND FOUR', 'ROUND FIVE', 'GAME OVER']
    let roundDisplay = document.querySelector('#round');
    roundDisplay.textContent = roundOptions[roundIncrement];
    roundIncrement++;
}



function playRock() {
    playerSelection = "rock";
    
    game();
}

function playPaper() {
    playerSelection = "paper";
    
    game();
}

function playScissors() {
    playerSelection = "scissors";
    
    game();
}
