let playerScore = 0;
let computerScore = 0;
let roundIncrement = 0;

// let counter = document.querySelector('#countdown');
//     counter.style.fontSize = '20px';
    

function game() {

    let roundOptions = ['ROUND ONE', 'ROUND TWO', 'ROUND THREE', 'ROUND FOUR', 'ROUND FIVE', 'GAME OVER']
    let roundDisplay = document.querySelector('#round');
    roundDisplay.textContent = roundOptions[roundIncrement];
    roundIncrement++;
        if (roundIncrement >= 6) {
            roundIncrement = 0;
            playerScore = 0;
            computerScore = 0;
        }

    if (playerScore == 4 || computerScore == 4) {
        roundDisplay.textContent = roundOptions[5];
    }

    //TODO attempt at countdown but can't get it to work correctly
    // let interval = 3;

    // function timer() {    
    //     setInterval(function() {
    //         document.querySelector('#countdown').textContent = interval;
    //             --interval;
    //                 if (interval <= 0) {
    //                 document.querySelector('#countdown').textContent = '';
    //                 clearTimeout(timer);
    //                 }
    //     }, 1000);
    // }

    // timer();

    function playRound(playerSelection, computerSelection) {

        if (computerSelection == playerSelection) {
            document.querySelector('#countdown').textContent = 'tie';

        } else if ((computerSelection == 'paper' && playerSelection == 'rock') || 
                    (computerSelection == 'scissors' && playerSelection == 'paper') || 
                    (computerSelection == 'rock' && playerSelection == 'scissors')) {
            computerScore++;
            document.querySelector('#countdown').textContent = 'computer';

        } else if ((computerSelection == 'scissors' && playerSelection == 'rock') || 
                    (computerSelection == 'rock' && playerSelection == 'paper') || 
                    (computerSelection == 'paper' && playerSelection == 'scissors')) {
            playerScore++;
            document.querySelector('#countdown').textContent = 'player';
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


    //assign computer random selection and pass to game engine
    let computerSelection = computerPlay();
    playRound(computerSelection, playerSelection);

    const playerpoints = document.querySelector('#playerpoints');
    const computerpoints = document.querySelector('#computerpoints');

    const pointsToMarks = [' ' ,' | ', ' | | ', ' | | | ', ' | | | | ', ' | | | | | '];

    playerpoints.textContent = pointsToMarks[playerScore];
    computerpoints.textContent = pointsToMarks[computerScore];

    console.log('c: ' + computerScore);
    console.log('p: ' + playerScore);
}



function playRock() {
    document.querySelector('#countdown').textContent = '';
    playerSelection = "rock";
    game();
}

function playPaper() {
    document.querySelector('#countdown').textContent = '';
    playerSelection = "paper";
    game();
}

function playScissors() {
    document.querySelector('#countdown').textContent = '';
    playerSelection = "scissors";
    game();
}
