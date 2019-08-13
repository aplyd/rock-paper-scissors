let playerScore = 0;
let computerScore = 0;
let roundIncrement = 0;

let pointsToMarks = [' ' ,' | ', ' | | ', ' | | | ', ' | | | | ', ' | | | | | '];

let cSelectRock = document.querySelector('.c-selectrock');
let cSelectPaper = document.querySelector('.c-selectpaper');
let cSelectScissors = document.querySelector('.c-selectscissors');

let rockSelect = document.querySelector('.rockselect');
let paperSelect = document.querySelector('.paperselect');
let scissorsSelect = document.querySelector('.scissorsselect');

let revealRock = document.querySelector('#revealrock');
let revealPaper = document.querySelector('#revealpaper');
let revealScissors = document.querySelector('#revealscissors');

let countdown = document.querySelector('#countdown');

let announcement = document.querySelector('.announcement');
announcement.style.display = 'none';

let winner = document.querySelector('#winner');

let roundOptions = ['','ROUND ONE', 'ROUND TWO', 'ROUND THREE', 'ROUND FOUR', 'FINAL ROUND',]
let roundDisplay = document.querySelector('#round');

roundDisplay.textContent = roundOptions[roundIncrement];

function game() {
    
    roundIncrement++;
    roundDisplay.textContent = roundOptions[roundIncrement];
    console.log(roundIncrement);


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

    //game engine
    function playRound(playerSelection, computerSelection) {

        if (computerSelection == playerSelection) {
            countdown.textContent = 'draw';

        } else if ((computerSelection == 'paper' && playerSelection == 'rock') || 
                    (computerSelection == 'scissors' && playerSelection == 'paper') || 
                    (computerSelection == 'rock' && playerSelection == 'scissors')) {
                        playerScore++;
                        countdown.textContent = 'you';

        } else if ((computerSelection == 'scissors' && playerSelection == 'rock') || 
                    (computerSelection == 'rock' && playerSelection == 'paper') || 
                    (computerSelection == 'paper' && playerSelection == 'scissors')) {
                        computerScore++;
                        countdown.textContent = 'AI';
        } 
    }

    //reveal computer selection
    


    //generate random num and assign to selection
    //these should have been addClass/removeClass but we're in too deep
    function computerPlay() {
        let randomNumber = Math.floor(Math.random() * 3 + 1);
        if (randomNumber == 1) {
            cSelectRock.style.backgroundColor = 'rgb(' + 209 + ',' + 197 + ',' + 183 + ')';
            cSelectRock.style.border = '3px solid black';
            revealRock.textContent = "ROCK";
            
            
            //reset others
            cSelectPaper.style.backgroundColor = 'black';
            cSelectScissors.style.backgroundColor = 'black';
            revealPaper.textContent = "?";
            revealScissors.textContent = "?";
                return 'rock';

        } else if (randomNumber == 2) {
            cSelectPaper.style.backgroundColor = "lightgrey";
            cSelectPaper.style.border = "3px solid black";
            revealPaper.textContent = "PAPER";
            

            //reset others
            cSelectRock.style.backgroundColor = 'black';
            cSelectScissors.style.backgroundColor = 'black';
            revealRock.textContent = "?";
            revealScissors.textContent = "?";
            return 'paper';

        } else if (randomNumber == 3) {
            cSelectScissors.style.backgroundColor = 'rgb(' + 183 + ',' + 209 + ',' + 184 + ')';
            cSelectScissors.style.border = '3px solid black';
            revealScissors.textContent = "SCISSORS";

            //reset others
            cSelectPaper.style.backgroundColor = 'black';
            cSelectRock.style.backgroundColor = 'black';
            revealPaper.textContent = "?";
            revealRock.textContent = "?";
            return 'scissors';
        }


    }

    //assign computer random selection and pass to game engine
    let computerSelection = computerPlay();
    playRound(computerSelection, playerSelection);

    let playerpoints = document.querySelector('#playerpoints');
    let computerpoints = document.querySelector('#computerpoints');
    playerpoints.textContent = pointsToMarks[playerScore];
    computerpoints.textContent = pointsToMarks[computerScore];

    console.log( 'c: ' + computerSelection +  computerScore);
    console.log('p: ' + playerSelection +  playerScore);

    if (playerScore == 3) {
        announcement.style.display = 'block';
        winner.textContent = 'YOU WON';
    } 
        
    if (computerScore == 3) {
        announcement.style.display = 'block';
        winner.textContent = 'AI WON';
    } 
        
    if (roundIncrement == 5 && playerScore > computerScore) {
            announcement.style.display = 'block';
            winner.textContent = 'YOU WON';

        } else if (roundIncrement == 5 && computerScore > playerScore) {
            announcement.style.display = 'block';
            winner.textContent = 'AI WON';

        } else if (roundIncrement == 5 && computerScore == playerScore) {
        announcement.style.display = 'block';
        countdown.textContent = 'TIE GAME';
    }

}



//wipe score, remove previous selections, reset marks/points, reset
function reset() {
    roundIncrement = 0;
    playerScore = 0;
    computerScore = 0;
    playerpoints.textContent = pointsToMarks[0];
    computerpoints.textContent = pointsToMarks[0];
    announcement.style.display = 'none';
    roundDisplay.textContent = '';
    countdown.textContent = 'choose an option';

    cSelectRock.style.backgroundColor = 'black';
    cSelectPaper.style.backgroundColor = 'black';
    cSelectScissors.style.backgroundColor = 'black';

    revealRock.textContent = "?";
    revealPaper.textContent = "?";
    revealScissors.textContent = "?";

    rockSelect.style.border = "1px solid black";
    paperSelect.style.border = "1px solid black";
    scissorsSelect.style.border = "1px solid black";

}

function playRock() {
    //document.querySelector('#countdown').textContent = '';
    rockSelect.style.border = "3px solid black";
    scissorsSelect.style.border = "1px solid black";
    paperSelect.style.border = "1px solid black";

    playerSelection = "rock";
    game();
}

function playPaper() {
    //document.querySelector('#countdown').textContent = '';
    paperSelect.style.border = "3px solid black";
    rockSelect.style.border = "1px solid black";
    scissorsSelect.style.border = "1px solid black";

    playerSelection = "paper";
    game();
}

function playScissors() {
    //document.querySelector('#countdown').textContent = '';
    scissorsSelect.style.border = "3px solid black";
    paperSelect.style.border = "1px solid black";
    rockSelect.style.border = "1px solid black";

    playerSelection = "scissors";
    game();
}
