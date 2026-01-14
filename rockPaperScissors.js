const playerMove = process.argv[2];

const validMoves = ["rock", "paper", "scissors"];

if (!validMoves.includes(playerMove)) {
  console.log("Please choose rock, paper, or scissors.");
  process.exit(1);
}

const computerMove =
  validMoves[Math.floor(Math.random() * validMoves.length)];

let result;

if (playerMove === computerMove) {
  result = "It's a draw!";
} else if (
  (playerMove === "rock" && computerMove === "scissors") ||
  (playerMove === "paper" && computerMove === "rock") ||
  (playerMove === "scissors" && computerMove === "paper")
) {
  result = "You win!";
} else {
  result = "You lose!";
}

console.log(
  `You chose ${playerMove}. Computer chose ${computerMove}. ${result}`
);