// Get the player's move from command line arguments
const playerMove = process.argv[2];

// Generate computer's random move
const moves = ['rock', 'paper', 'scissors'];
const computerMove = moves[Math.floor(Math.random() * 3)];

// Determine the winner
function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    }
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return "You win!";
    }
    return "Computer wins!";
}

// Validate player's move and display result
if (moves.includes(playerMove)) {
    const result = determineWinner(playerMove, computerMove);
    console.log(`Computer chose: ${computerMove}`);
    console.log(result);
} else {
    console.log("Invalid move! Please choose rock, paper, or scissors.");
}