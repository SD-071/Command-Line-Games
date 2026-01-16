console.log("Welcome to Rock-Paper-Scissors!");

// Rock Paper Scissors
const moves = ['rock', 'paper', 'scissors'];

function getComputerMove() {
    const index = Math.floor(Math.random() * 3);
    return moves[index];
}

//getComputerMove()

const playerMove = process.argv[2].trim();
console.log("Player's move: ", playerMove);

const computerMove = getComputerMove();
console.log("Computer's move: ", computerMove);

function determineWinner(player, computer) {
    if (moves.includes(player) === false) {
        return "Invalid move! Please choose rock, paper, or scissors.";
    }
    if (player === computer) {
        return "It's a draw!";
    }
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return "You win!";
    }
    return "You lose!";
}

const result = determineWinner(playerMove, computerMove);
console.log(`You chose ${playerMove}. Computer chose ${computerMove}. ${result}`);