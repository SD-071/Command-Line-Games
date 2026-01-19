let player = process.argv[2];

const moves = ["rock", "paper", "scissors"];
const randomIndex = Math.floor(Math.random() * 3);
const computer = moves[randomIndex];

let result = "";

if (player != 'rock' && player != 'paper' && player !== 'scissors') 
   {console. log("Invalid choice. Please choose rock, paper, or scissors.");
    process.exit();}

if (player === computer) 
  {result = "It's a draw!";} 
  
  else if 
          (
    (player === "rock" && computer === "scissors") || 
    (player === "paper" && computer === "rock") || 
    (player === "scissors" && computer === "paper")
          )

  {result = "You win!";} 
  
  else {result = "You lose!";}

console.log("You chose " + player + ". Computer chose " + computer + ". " + result);
