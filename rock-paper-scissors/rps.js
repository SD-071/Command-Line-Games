let player = process.argv[2];

const moves = ["rock", "paper", "scissors"];
const randomIndex = Math.floor(Math.random() * 3);
const computer = moves[randomIndex];

let result = "";

if (player === computer) 
  {result = "It's a draw!";} 
  
  else if (player === "rock" && computer === "scissors") 
  {result = "You win!";} 
  
  else if (player === "paper" && computer === "rock") 
  {result = "You win!";} 
  
  else if (player === "scissors" && computer === "paper") 
  {result = "You win!";}

  else {result = "You lose!";}

console.log("You chose " + player + ". Computer chose " + computer + ". " + result);
