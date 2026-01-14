//Create a command-line Rock Paper Scissors game that: 
// takes the player’s input from process.argv, randomly generates computer moves, 
// determines the winner, and outputs the result.

const playerMove = process.argv[2];

if (!playerMove) {
    console.log("Please choose rock, paper, or scissors.");
    process.exit();
}

const computerMove = getComputerChoice();


function getComputerChoice() {
    const moves = ['rock', 'paper', 'scissors'];
    let i = Math.floor(Math.random() * moves.length);
    return moves[i];
}

console.log(`You played: ${playerMove}`);
console.log(`Computer played: ${computerMove}`);

function playerRound(playerSelection, computerSelection) {
    let result;

    const player = playerSelection.toLowerCase();

    if (player === computerSelection) {
        result = "Draw!";
    } else if (
        (player === 'rock' && computerSelection === 'scissors') ||
        (player === 'paper' && computerSelection === 'rock') ||
        (player === 'scissors' && computerSelection === 'paper')
    ) {
        result = "Win!";
    } else {
        result = "Lose!";
    }

    return result;
}

const result = playerRound(playerMove, computerMove);
console.log(result);


